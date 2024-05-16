#!/usr/bin/env node
// include esm object to allow for es6 import/export syntax
Object.defineProperty(exports, '__esModule', { value: true });
const fs = require('fs');
const path = require('path');
const { getFlagValue } = require('./NodeHelpers.cjs');

/**
 * Read package.json and return its content.
 *
 * @returns {Object} - Parsed JSON content of package.json.
 */
exports.readJson = (workingDir, file = 'package.json') => {
    const filePath = path.join(workingDir, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawContent);
};

/**
 * Write content to package.json.
 *
 * @param {Object} content - The updated package.json content.
 */
exports.writeJson = (content, workingDir, file = 'package.json') => {
    const filePath = path.join(workingDir, file);
    const updatedContent = JSON.stringify(content, null, 2);
    fs.writeFileSync(filePath, updatedContent);
};

/**
 * Bump the version based on the flag passed.
 *
 * @param {string} currentVersion - Current version from package.json.
 * @param {string} flag - The flag that determines which part of the version to bump (major, minor, patch).
 * @returns {string} - New bumped version.
 */
exports.bumpVersion = (currentVersion, flag) => {
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    switch (flag) {
        case 'major':
            return `${major + 1}.0.0`;
        case 'minor':
            return `${major}.${minor + 1}.0`;
        default:
            return `${major}.${minor}.${patch + 1}`;
    }
};

exports.exe = () => {
    const workingDir = process.cwd();
    // Parse command-line arguments
    const isMajor = getFlagValue('major') ? 'major' : false;
    const isMinor = getFlagValue('minor') ? 'minor' : false;
    const isPatch = getFlagValue('patch') ? 'patch' : false;
    const flag = isMajor || isMinor || isPatch;

    // Read package.json and get current version
    const packageJson = exports.readJson(workingDir);
    const { version: currentVersion } = packageJson;

    // Bump the version
    const newVersion = exports.bumpVersion(currentVersion, flag);

    // Update package.json with the new version
    packageJson.version = newVersion;
    exports.writeJson(packageJson, workingDir);

    // Log output
    console.log(`Version bumped from ${currentVersion} to ${newVersion}`);
};

if (getFlagValue('exe')) {
    exports.exe();
}

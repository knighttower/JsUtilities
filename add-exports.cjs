// Import required modules
const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');
const rootPackagePath = path.join(__dirname, 'package.json');

// Function to read package.json and extract necessary details
function readPackageExports(packagePath) {
    const packageJsonPath = path.join(packagePath, 'package.json');
    const data = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const packageName = data.name.split('/').pop(); // Extract pkgname part
    const exports = data.exports;

    // Transform exports paths
    const newExports = {};
    for (let key in exports) {
        const newKey = `./${packageName}${key.replace('./', '/').replace('.', '')}`;
        const value = exports[key];
        if (typeof value === 'string') {
            newExports[newKey] = value.replace('.', `./packages/${packageName}`);
        } else {
            newExports[newKey] = {};
            for (let importType in value) {
                newExports[newKey][importType] = value[importType].replace(
                    '.',
                    `./packages/${packageName}`
                );
            }
        }
    }

    return newExports;
}

// Read all packages and compile a combined exports object
function updateRootExports() {
    const combinedExports = {};

    // List all directories in the packages folder
    const packageDirs = fs
        .readdirSync(packagesDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

    // Process each package directory
    packageDirs.forEach((packageDir) => {
        const packageExports = readPackageExports(path.join(packagesDir, packageDir));
        Object.assign(combinedExports, packageExports);
    });
    Object.assign(combinedExports, { './*': './packages/*' });
    // Read the root package.json
    const rootPackageData = JSON.parse(fs.readFileSync(rootPackagePath, 'utf8'));

    // Update exports in root package.json
    rootPackageData.exports = combinedExports;

    fs.writeFileSync(rootPackagePath, JSON.stringify(rootPackageData, null, 2));
    console.log('Root package.json has been updated with new exports.');
}

// Execute the update process
updateRootExports();

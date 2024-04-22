const fs = require('fs');
const path = require('path');
const { input, select, rawlist } = require('@inquirer/prompts');
const { runCommand, readJson, writeJson } = require('./packages/utility/nodeUtils/index.cjs');
const workingDir = process.cwd();
const webpackConfig = `${workingDir}/packages/utility/nodeUtils/webpack.config.cjs`;
const rollupConfig = `${workingDir}/packages/utility/nodeUtils/rollup.config.cjs`;
const minify = `${workingDir}/packages/utility/nodeUtils/Minify.js`;
const buildExports = `${workingDir}/packages/utility/nodeUtils/BuildExports.js`;
const bumpVersion = `${workingDir}/packages/utility/nodeUtils/BumpVersion.cjs`;
const pretty = `${workingDir}/.prettierrc.json`;
const eslint = `${workingDir}/.eslintrc.js`;

// Event Bus
const eventBus = () => {
    runCommand(
        `\
    cd ./packages/event-bus \
    && npx webpack --config "${webpackConfig}" --watch
    `
    );
};

// Utility
const utility = () => {
    runCommand(
        `cd ./packages/utility \
        && npx webpack --config "${webpackConfig}" --watch
        `
    );
};

// build TypeCheck
const typeCheck = () => {
    runCommand(
        `\
    cd ./packages/type-check \
    && npx webpack --config "${webpackConfig}"  --watch
    `
    );
};

const bootstrapMini = () => {
    runCommand(
        `\
    cd ./packages/bootstrap-mini \
    && npx mix --watch
    `
    );
};

const adaptive = () => {
    runCommand(
        `\
    cd ./packages/adaptive \
    && npx webpack --config "${webpackConfig}" --watch
    `
    );
};

// runCommand('ncu -u && npm i');

const workspaces = {
    'bootstrap-mini': bootstrapMini,
    'event-bus': eventBus,
    'type-check': typeCheck,
    utility,
    adaptive,
};

const choice = select({
    message: 'what to build',
    choices: Object.keys(workspaces).map((pkg) => {
        return {
            name: pkg,
            value: pkg,
        };
    }),
});

choice.then((choice) => {
    workspaces[choice]();
});

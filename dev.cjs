const fs = require('fs');
const path = require('path');
const { input, select, rawlist } = require('@inquirer/prompts');
const { runCommand, getFlagValue } = require('./packages/utility/nodeUtils/index.cjs');
const workingDir = process.cwd();
const webpackConfig = `${workingDir}/packages/utility/nodeUtils/webpack.config.cjs`;
const rollupConfig = `${workingDir}/packages/utility/nodeUtils/rollup.config.cjs`;
const minify = `${workingDir}/packages/utility/nodeUtils/Minify.js`;
const buildExports = `${workingDir}/packages/utility/nodeUtils/BuildExports.js`;
const bumpVersion = `${workingDir}/packages/utility/nodeUtils/BumpVersion.cjs`;
const pretty = `${workingDir}/.prettierrc.json`;
const eslint = `${workingDir}/.eslintrc.js`;

const once = getFlagValue('once') ? '' : '--watch';

// Event Bus
const eventBus = () => {
    runCommand(
        `\
    cd ./packages/event-bus \
    && npx webpack --config "${webpackConfig}" --mode=development ${once} --stats=minimal
    `
    );
};

// Utility
const utility = () => {
    runCommand(
        `cd ./packages/utility \
        && npx webpack --config "${webpackConfig}" --mode=development ${once} --stats=minimal
        `
    );
};

// build TypeCheck
const typeCheck = () => {
    runCommand(
        `\
    cd ./packages/type-check \
    && npx webpack --config "${webpackConfig}" --mode=development ${once} --stats=minimal
    `
    );
};

const bootstrapMini = () => {
    runCommand(
        `\
    cd ./packages/bootstrap-mini \
    && npx mix ${once}
    `
    );
};

const adaptive = () => {
    runCommand(
        `\
    cd ./packages/adaptive \
    && npx webpack --config "${webpackConfig}" --mode=development ${once} --stats=minimal
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

const fs = require('fs');
const path = require('path');
const { input, select, confirm } = require('@inquirer/prompts');
const { runCommand, getFlagValue } = require('./packages/utility/nodeUtils');
const workingDir = process.cwd();
const webpackConfig = `${workingDir}/packages/utility/nodeUtils/webpack.config.cjs`;
const rollupConfig = `${workingDir}/packages/utility/nodeUtils/rollup.config.cjs`;
const buildExports = `${workingDir}/packages/utility/nodeUtils/BuildExports.js`;
const bumpVersion = `${workingDir}/packages/utility/nodeUtils/BumpVersion.cjs`;
const pretty = `${workingDir}/.prettierrc.json`;
const eslint = `${workingDir}/.eslintrc.js`;

const local = getFlagValue('local');
// Event Bus
const eventBus = () => {
    runCommand(
        `\
    cd ./packages/event-bus \
    && npx rollup -c "${rollupConfig}" \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npm run test \
    && node "${bumpVersion}" --exe \
    && npm publish --access public
    `
    );
};

// Utility
const utility = () => {
    runCommand(
        `cd ./packages/utility \
    && eslint -c "${eslint}" --fix ./src --ext .js,.cjs,.mjs \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npx rollup -c "${rollupConfig}" \
    && node "${buildExports}" --dir ./dist/cjs --type=cjs \
    && node "${buildExports}" --dir ./dist/esm --type=esm \
    && prettier --config "${pretty}" --write ./index.js \
    && prettier --config "${pretty}" --write ./index.cjs \
    && npm run test \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

// build TypeCheck
const typeCheck = () => {
    runCommand(
        `\
    cd ./packages/type-check \
    && eslint -c "${eslint}" --fix ./src --ext .js,.cjs,.mjs \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npx rollup -c "${rollupConfig}" \
    && node "${buildExports}" --file ./dist/cjs/TypeCheck.cjs --type=cjs \
    && node "${buildExports}" --file ./dist/esm/TypeCheck.js --type=esm \
    && prettier --config "${pretty}" --write ./index.js \
    && prettier --config "${pretty}" --write ./index.cjs \
    && npm run test \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const bootstrapMini = () => {
    runCommand(
        `\
    cd ./packages/bootstrap-mini \
    && npx mix --production \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const adaptive = () => {
    runCommand(
        `\
    cd ./packages/adaptive \
    && eslint -c "${eslint}" --fix ./src --ext .js,.cjs,.mjs \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npx rollup -c "${rollupConfig}" \
    && prettier --config "${pretty}" --write ./index.js \
    && prettier --config "${pretty}" --write ./index.cjs \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const mono = () => {
    runCommand(
        `\
    node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const vueUtils = () => {
    runCommand(
        `\
    cd ./packages/vue-utils \
    && eslint -c "${eslint}" --fix ./src --ext .js,.cjs,.mjs \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npx rollup -c "${rollupConfig}" \
    && node "${buildExports}" --dir ./dist/cjs --type=cjs \
    && node "${buildExports}" --dir ./dist/esm --type=esm \
    && prettier --config "${pretty}" --write ./index.js \
    && prettier --config "${pretty}" --write ./index.cjs \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const workspaces = {
    'bootstrap-mini': bootstrapMini,
    'event-bus': eventBus,
    'type-check': typeCheck,
    utility,
    adaptive,
    'vue-utils': vueUtils,
    mono,
    all: () => {
        bootstrapMini();
        eventBus();
        typeCheck();
        utility();
        adaptive();
        vueUtils();
        mono();
    },
};

const doUpdate = confirm({ message: 'Update?' });

doUpdate.then((doUpdate) => {
    if (doUpdate) {
        runCommand('ncu --interactive && npm i');
    }
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
        if (choice !== 'mono') {
            workspaces['mono']();
        }
    });
});

const fs = require('fs');
const path = require('path');
const { input, select, confirm } = require('@inquirer/prompts');
const { runCommand, getFlagValue } = require('./packages/utility/nodeUtils');
const workingDir = process.cwd();
const webpackConfig = `${workingDir}/packages/utility/nodeUtils/webpack.config.cjs`;
const rollupConfig = `${workingDir}/packages/utility/nodeUtils/rollup.config.cjs`;
const buildExports = `${workingDir}/packages/utility/nodeUtils/BuildExports.cjs`;
const bumpVersion = `${workingDir}/packages/utility/nodeUtils/BumpVersion.cjs`;
const pretty = `${workingDir}/.prettierrc.json`;
const eslint = `${workingDir}/.eslintrc.cjs`;
const minify = `${workingDir}/packages/utility/nodeUtils/minify.cjs`;

const local = getFlagValue('local');
const pkgOnly = getFlagValue('pkg');

// utility
const utility = () => {
    runCommand(
        `cd ./packages/utility \
    && eslint -c "${eslint}" --fix ./src --ext .js,.cjs,.mjs \
    && npx webpack --mode production --config "${webpackConfig}" \
    && npx rollup -c "${rollupConfig}" \
    && node "${buildExports}" --dir ./dist/cjs --type=cjs \
    && node "${buildExports}" --dir ./src --type=esm \
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
    && node "${buildExports}" --file ./dist/cjs/typeCheck.cjs --type=cjs \
    && node "${buildExports}" --file ./src/typeCheck.js --type=esm \
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
    node ./add-exports.cjs && node "${bumpVersion}" --exe \
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
    && node "${buildExports}" --dir ./src --type=esm \
    && prettier --config "${pretty}" --write ./index.js \
    && prettier --config "${pretty}" --write ./index.cjs \
    && node "${bumpVersion}" --exe \
    ` + (local ? '' : '&& npm publish --access public')
    );
};

const workspaces = {
    'bootstrap-mini': bootstrapMini,
    'type-check': typeCheck,
    utility,
    adaptive,
    'vue-utils': vueUtils,
    mono,
    all: () => {
        bootstrapMini();
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
        if (choice !== 'mono' && !pkgOnly) {
            workspaces['mono']();
        }
        return;
    });
});

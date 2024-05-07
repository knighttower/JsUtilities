const { select } = require('@inquirer/prompts');
const { runCommand, getFlagValue } = require('./packages/utility/nodeUtils/index.cjs');

// Utility
const utility = () => {
    runCommand(
        `cd ./packages/utility \
        && npx vitest
        `
    );
};

// build TypeCheck
const typeCheck = () => {
    runCommand(
        `\
    cd ./packages/type-check \
    && npx vitest
    `
    );
};

const bootstrapMini = () => {
    runCommand(
        `\
    cd ./packages/bootstrap-mini \
    && npx vitest
    `
    );
};

const adaptive = () => {
    runCommand(
        `\
    cd ./packages/adaptive \
    && npx vitest
    `
    );
};

// runCommand('ncu -u && npm i');

const workspaces = {
    'bootstrap-mini': bootstrapMini,
    'type-check': typeCheck,
    utility,
    adaptive,
};

const choice = select({
    message: 'what to test',
    choices: Object.keys(workspaces).map((pkg) => {
        return {
            name: pkg,
            value: pkg,
        };
    }),
});

choice.then((choice) => {
    return workspaces[choice]();
});

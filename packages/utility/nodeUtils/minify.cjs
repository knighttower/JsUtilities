Object.defineProperty(exports, '__esModule', { value: true });

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { minify } = require('terser');
const { getFlagValue } = require('./NodeHelpers.cjs');

getFilesToMinify = function (originDir, destination) {
    destination = destination ?? originDir;
    const filePaths = glob.sync(`${originDir}/**/*.{js,mjs,cjs}` || []);
    const allExports = [];

    filePaths.forEach((filePath) => {
        const moduleName = path.basename(filePath).replace(/\.js|\.mjs|\.cjs/, '');
        const extension = path.extname(filePath);
        allExports.push({
            input: originDir + `/${moduleName}.${extension}`,
            output: destination + `/${moduleName}.min.${extension}`,
            options: {
                compress: true,
                mangle: true,
            },
        });
    });

    return allExports;
};

async function minifyFile(input, output, options) {
    try {
        const inputCode = await fs.readFile(input, 'utf8');
        const result = await minify(inputCode, options);
        if (result.error) {
            console.error(`Error minifying ${input}: ${result.error}`);
            return;
        }
        await fs.writeFile(output, result.code, 'utf8');
        console.log(`Minified ${input} to ${output}`);
    } catch (err) {
        console.error(`Failed to minify ${input}: ${err}`);
    }
}

exports.minify = async function (originDir, destination) {
    for (const { input, output, options } of getFilesToMinify(originDir, destination)) {
        await minifyFile(input, output, options);
    }
};

if (getFlagValue('dir')) {
    exports.minify(getFlagValue('dir'), getFlagValue('dest'));
}

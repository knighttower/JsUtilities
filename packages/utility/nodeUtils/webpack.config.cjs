const path = require('path');
const workingDir = process.cwd();
const { targets, webpackFormats } = require(`${workingDir}/source-files.cjs`);

const formats = webpackFormats ?? [
    { type: 'umd', dir: 'umd', ext: 'js' },
    { type: 'commonjs2', dir: 'cjs', ext: 'cjs' },
    { type: 'window', dir: 'browser', ext: 'js' },
];
/**
 * Generates a Webpack configuration for a given library name and target.
 *
 * @param {string} fileSrc - The file source.
 * @param {string} target - The target name.
 * @param {string} dir - The directory name.
 * @param {string} libraryTarget - The library target format.
 * @param {string} ext - The file extension.
 * @returns {Object} - The Webpack configuration.
 */
const getWebpackConfig = (config) => ({
    mode: 'production',
    entry: `${workingDir}/src/${config.fileSrc}`,
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, `${workingDir}/src`),
            path.resolve(__dirname, `${workingDir}/node_modules`),
        ],
        extensions: ['.mjs', '.js', '.json', '.cjs'],
    },
    output: {
        path: path.resolve(__dirname, `${workingDir}/dist/${config.dir}`),
        filename: `${config.fileName}.${config.ext}`,
        // library: config.exportName,
        // libraryTarget: config.libraryTarget,
        umdNamedDefine: true,
        // libraryExport: config.windowExport,
        globalObject: 'this',
        library: {
            name: config.exportName,
            type: config.libraryTarget,
            export: config.windowExport,
            umdNamedDefine: true,
            export: config.windowExport,
        },
    },
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
});

// Generate multiple configurations
function getAllConfigs() {
    const configs = [];
    targets.forEach((target) => {
        // Generate multiple configurations
        for (const format of formats) {
            const exportName = target.exportName ?? target.file.split('.')[0];
            configs.push(
                getWebpackConfig({
                    fileSrc: target.file,
                    fileName: target.file.split('.')[0],
                    libraryTarget: format.type,
                    dir: format.dir,
                    ext: format.ext,
                    exportName: exportName,
                    windowExport: target.windowExport ?? undefined,
                })
            );
        }
    });
    return configs;
}

const configs = getAllConfigs();

module.exports = configs;

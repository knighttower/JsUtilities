const path = require('path');
const workingDir = process.cwd();
const TerserPlugin = require('terser-webpack-plugin');
const { targets, webpackFormats } = require(`${workingDir}/source-files.cjs`);
const { getFlagValue } = require('./NodeHelpers.cjs');

const mode = getFlagValue('mode') ?? 'production';

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
    mode: mode,
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
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                // exclude: [/cb\.js$/, /extra\.js$/],
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    ecma: 6,
                    keep_classnames: true, // Preserve class names
                    // keep_fnames: true, // Preserve function names
                    safari10: true, // Workaround for Safari 10/11 loop scoping and await bugs

                    toplevel: false,
                    output: {
                        ascii_only: true, // Escape Unicode characters
                        braces: true, // Always insert braces in if, for, do, while or with statements
                        semicolons: true, // Separate statements with semicolons
                        comments: false,
                    },

                    compress: {
                        arrows: true, // Enable arrow function compression (transform to function expressions)
                    },
                    parse: {
                        html5_comments: false, // Ignore HTML5 comments
                        shebang: true, // Preserve shebang
                    },

                    mangle: true, // Disable variable renaming
                },

                extractComments: false, // Do not extract comments to separate file
            }),
        ],
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

/**
 * Extracts the file name without extension from a path if it ends with '.js'.
 * @param {string} path - The file path.
 * @returns {string|null} The file name without extension or null if not a '.js' file.
 */
function extractFileName(path) {
    const match = /([^\/]+)\.js$/.exec(path);
    return match ? match[1] : path;
}

// Generate multiple configurations
function getAllConfigs() {
    const configs = [];
    targets.forEach((target) => {
        const fileName = extractFileName(target.file);
        // Generate multiple configurations
        for (const format of formats) {
            const exportName = target.exportName ?? fileName;
            configs.push(
                getWebpackConfig({
                    fileSrc: target.file,
                    fileName,
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

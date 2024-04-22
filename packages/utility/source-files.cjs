const targets = [
    { file: 'Utility.js', exportType: 'named' },
    { file: 'DomObserver.js', exportType: 'named' },
    { file: 'UrlHelper.js', exportType: 'named', windowExport: 'default' },
    { file: 'ElementHelper.js', exportType: 'named' },
    { file: 'ProxyObject.js', exportType: 'named', windowExport: 'default' },
    { file: 'ProxyClass.js', exportType: 'named', windowExport: 'default' },
    { file: 'PowerHelpers.js', exportType: 'named' },
    { file: 'PromiseQueue.js', exportType: 'named' },
    { file: 'EventBus.js', exportType: 'named' },
];

const rollupFormats = [
    { type: 'amd', ext: 'js' },
    { type: 'cjs', ext: 'cjs' },
    // { type: 'umd', ext: 'js' },
    { type: 'iife', ext: 'js' },
    { type: 'system', ext: 'js' },
    { type: 'esm', ext: 'js' },
];

const webpackFormats = [
    { type: 'umd', dir: 'umd', ext: 'js' },
    // { type: 'commonjs2', dir: 'common', ext: 'cjs' },
    { type: 'window', dir: 'browser', ext: 'js' },
];

module.exports = {
    targets,
    rollupFormats,
    webpackFormats,
};

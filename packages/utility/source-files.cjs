const targets = [
    { file: 'utility.js', exportType: 'named' },
    {
        file: 'domObserver.js',
        exportType: 'named',
        exportName: 'domObserver',
        windowExport: 'domObserver',
    },
    { file: 'urlHelper.js', exportType: 'named', windowExport: 'urlHelper' },
    {
        file: 'ElementHelper.js',
        exportType: 'named',
        exportName: 'elementHelper',
        windowExport: 'elementHelper',
    },
    { file: 'proxyObject.js', exportType: 'named', windowExport: 'proxyObject' },
    {
        file: 'proxyObject.js',
        exportType: 'named',
        exportName: 'proxyClass',
        windowExport: 'proxyClass',
    },
    { file: 'powerHelper.js', exportType: 'named' },
    { file: 'powerHelper.js', exportType: 'named', exportName: 'helpers' },
    { file: 'promises.js', exportType: 'named', exportName: 'promises' },
    { file: 'event-bus/EventBus.js', exportType: 'named', windowExport: 'EventBus' },
];

const rollupFormats = [
    // { type: 'amd', ext: 'js' },
    { type: 'cjs', ext: 'cjs' },
    // { type: 'umd', ext: 'js' },
    // { type: 'iife', ext: 'js' },
    // { type: 'system', ext: 'js' },
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

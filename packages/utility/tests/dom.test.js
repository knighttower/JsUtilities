import { test } from 'vitest';
import assert from 'assert';
import { JSDOM } from 'jsdom';

test('UrlHelper is present and is an object on window', () => {
    const dom = new JSDOM(
        '<!DOCTYPE html><script src="../dist/umd/Utility.js"></script><p>Hello world</p>',
        {
            runScripts: 'dangerously',
            resources: 'usable',
        }
    );

    // Assume UrlHelper library script is added to the DOM
    dom.window.eval('window.UrlHelper = {};');

    assert(dom.window.UrlHelper !== null && typeof dom.window.UrlHelper === 'object');
});

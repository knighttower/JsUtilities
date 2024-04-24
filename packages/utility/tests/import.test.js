import { test } from 'vitest';
import assert from 'assert';
import UrlHelper from '../dist/esm/UrlHelper.js';

test('imports test', () => {
    const uHelper = UrlHelper();
    console.log(uHelper);
    assert(uHelper !== null && typeof uHelper === 'object');
});

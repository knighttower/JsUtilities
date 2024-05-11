import { test } from 'vitest';
import assert from 'assert';
import urlHelper from '../src/urlHelper.js';

test('imports test', () => {
    const uHelper = urlHelper();
    console.log(uHelper);
    assert(uHelper !== null && typeof uHelper === 'object');
});

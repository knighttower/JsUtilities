/**
 * @vitest-environment jsdom
 */
import { test } from 'vitest';
import assert from 'assert';

import {
    getGoogleMapsAddress,
    formatPhoneNumber,
    validatePhone,
    validateEmail,
    getDynamicId,
    dateFormat,
    currencyToDecimal,
    decimalToCurrency,
    toDollarString,
    emptyOrValue,
    isNumber,
    convertToBool,
    typeOf,
    instanceOf,
    convertToNumber,
    uuid,
    includes,
} from '../src/utility';
test('includes', () => {
    assert.equal(includes('hello there', 'hello'), true);
    assert.equal(includes('Up there', 'Hello'), false);
    assert.equal(includes('Up there', 'Up'), true);
    assert.equal(includes('Up there', 'up'), true);
    assert.equal(includes('Up there', 'there', 1), true);
    assert.equal(includes('Up there again', 'there', 4), false);
    assert.equal(includes({ hello: 'uno' }, 'uno'), true);
    assert.equal(includes({ hello: 'dos' }, 'uno'), false);
    assert.equal(includes({ hello: 'dos', other: { hello: 'uno' } }, 'uno'), true);
    assert.equal(includes({ hello: 'dos', other: { hello: 'uno' } }, 'tres'), false);
    assert.equal(includes([1, 2, 3], 2), true);
    assert.equal(includes([1, 2, 3], 4), false);
    assert.equal(includes([1, 2, 3], 1), true);
    assert.equal(includes([1, 2, 3, [5]], 5), true);
    assert.equal(includes(15200, 4), false);
    assert.equal(includes(15200, 5), true);
    assert.equal(includes([true], true), true);
});

test('uuid - should return a string', () => {
    const result = uuid(40);
    assert.equal(typeof result, 'string');
});

test('getDynamicId - Generate ID', () => {
    console.log(getDynamicId());
    assert.equal(typeof getDynamicId(), 'string');
});

// convertToNumber
test('convertToNumber - Convert to number', () => {
    assert.equal(convertToNumber('123'), 123);
    assert.equal(convertToNumber(123.4), 123.4);
    assert.equal(convertToNumber('123.4'), 123.4);
    assert.equal(convertToNumber('$123.4'), '$123.4');
    assert.equal(convertToNumber('$abc123.4'), '$abc123.4');
    assert.equal(convertToNumber('0'), 0);
    assert.equal(convertToNumber(0), 0);
});
// getGoogleMapsAddress
test('getGoogleMapsAddress - Empty address', () => {
    assert.equal(getGoogleMapsAddress(''), false);
});

test('getGoogleMapsAddress - String address', () => {
    assert.equal(getGoogleMapsAddress('New York'), 'https://maps.google.it/maps?q=New+York');
});

// formatPhoneNumber
test('formatPhoneNumber - Format 10 digit number', () => {
    assert.equal(formatPhoneNumber('1234567890', '(000) 000-0000'), '(123) 456-7890');
});

// validatePhone
test('validatePhone - Valid phone', () => {
    assert.equal(validatePhone('123-456-7890'), true);
});

test('validatePhone - Invalid phone', () => {
    assert.equal(validatePhone('123-45-67890'), false);
});

// validateEmail
test('validateEmail - Valid email', () => {
    assert.equal(validateEmail('test@example.com'), true);
});

test('validateEmail - Invalid email', () => {
    assert.equal(validateEmail('test.com'), false);
});

// getDynamicId
test('getDynamicId - Generate ID', () => {
    assert.equal(typeof getDynamicId(), 'string');
});

// validateEmail
test('validateEmail - Valid email', () => {
    assert.equal(validateEmail('test@example.com'), true);
});

// dateFormat
test('dateFormat - Format date', () => {
    assert.equal(dateFormat('2023-09-14'), '09/14/2023');
});

// currencyToDecimal
test('currencyToDecimal - Convert to decimal', () => {
    assert.equal(currencyToDecimal('$123.45'), 123.45);
});

// decimalToCurrency
test('decimalToCurrency - Convert to currency', () => {
    assert.equal(decimalToCurrency(1123.45), '1,123.45');
});

// toDollarString
test('toDollarString - Convert to dollar string', () => {
    assert.equal(toDollarString(1000), '1K');
});

// emptyOrValue
test('emptyOrValue - Return value if not empty', () => {
    assert.equal(emptyOrValue('test'), 'test');
});
test('emptyOrValue - Return value if not empty', () => {
    assert.equal(emptyOrValue('', 'test'), 'test');
});
test('emptyOrValue - Return value if not empty', () => {
    assert.equal(emptyOrValue(null, 1), 1);
});

// isNumber
test('isNumber - Validate number string', () => {
    assert.equal(isNumber('123'), 123);
    assert.equal(isNumber(''), null);
    assert.equal(isNumber([]), null);
    assert.equal(isNumber({}), null);
    assert.equal(isNumber(null), null);
    assert.equal(isNumber(undefined), null);
    assert.equal(isNumber('undefined'), null);
    assert.equal(isNumber('[]'), null);
});
test('isNumber - Validate number int', () => {
    assert.equal(isNumber(123), 123);
});
test('isNumber - Validate number float', () => {
    assert.equal(isNumber(123.5), 123.5);
});

// isNumber
test('convertToBool - Convert to bool', () => {
    assert.equal(convertToBool('true'), true);
});

test('emptyOrValue - should return the value if it is a number greater than 0', () => {
    const value = 42;
    const result = emptyOrValue(value);
    assert.equal(result, value);

    const value2 = 0.5;
    const result2 = emptyOrValue(value2);
    assert.equal(result2, value2);
});

test('emptyOrValue - should return the value if it is a boolean', () => {
    const value = true;
    const result = emptyOrValue(value);
    assert.equal(result, value);

    const value2 = false;
    const result2 = emptyOrValue(value2);
    assert.equal(result2, value2);
});

test('emptyOrValue - should return the value if it is not empty', () => {
    const value = 'hello';
    const result = emptyOrValue(value);
    assert.equal(result, value);

    const value2 = [1, 2, 3];
    const result2 = emptyOrValue(value2);
    assert.deepEqual(result2, value2);

    const value3 = { foo: 'bar' };
    const result3 = emptyOrValue(value3);
    assert.deepEqual(result3, value3);
});

test('emptyOrValue - should return the default value if the input is empty', () => {
    const value = '';
    const defaultValue = 'default';
    const result = emptyOrValue(value, defaultValue);
    assert.equal(result, defaultValue);

    const value2 = [];
    const defaultValue2 = [1, 2, 3];
    const result2 = emptyOrValue(value2, defaultValue2);
    assert.deepEqual(result2, defaultValue2);

    const value3 = null;
    const defaultValue3 = { foo: 'bar' };
    const result3 = emptyOrValue(value3, defaultValue3);
    assert.deepEqual(result3, defaultValue3);
});

test('emptyOrValue - should return the default value if the input is undefined', () => {
    const value = undefined;
    const defaultValue = 'default';
    const result = emptyOrValue(value, defaultValue);
    assert.equal(result, defaultValue);
});

test('emptyOrValue - should return the value if it is a non-empty string with only whitespace characters', () => {
    const value = '   ';
    const result = emptyOrValue(value);
    assert.equal(result, value);
});

test('emptyOrValue - should return the value if it is a non-empty string with only whitespace characters', () => {
    const value = null;
    const result = emptyOrValue(null);
    assert.equal(result, value);
});

test('typeof - ', () => {
    let results = typeOf(null);

    assert.equal(results, 'null');
    // create test for null, null
    results = typeOf(null, 'null');
    assert.equal(results, true);
    // create test for undefined
    results = typeOf(undefined);
    assert.equal(results, 'undefined');

    //create test for 1000 = number
    results = typeOf(1000, 'number');
    // console.log(typeOf(1000));
    assert.equal(results, true);

    results = typeOf(1000, 'string');
    assert.equal(results, false);

    // create test for 10.5 = number
    results = typeOf(10.5, 'number');
    assert.equal(results, true);

    // create test for '1000' = string
    results = typeOf('1000', 'string');
    assert.equal(results, true);

    // create test for [1,2,3] = array
    results = typeOf([1, 2, 3], 'array');
    assert.equal(results, true);

    // create test for {foo: 'bar'} = object
    results = typeOf({ foo: 'bar' }, 'object');
    assert.equal(results, true);

    // create test for true = boolean
    results = typeOf(true, 'boolean');
    assert.equal(results, true);

    // create test for false = boolean
    results = typeOf(false, 'boolean');
    assert.equal(results, true);
});

test('instanceOf - ', () => {
    // create test for new Date() = date
    let results = instanceOf(new Date(), 'Date');
    assert.equal(results, true);

    results = instanceOf(new Date(), 'date');
    assert.equal(results, true);

    // create test for new RegExp() = regexp
    results = instanceOf(new RegExp(), RegExp);
    assert.equal(results, true);
    var a = function hello() {};
    results = instanceOf(a, 'hello');
    assert.equal(results, true);
});

// Author Knighttower
// MIT License
// Copyright (c) [2022] [Knighttower] https://github.com/knighttower

import {
    emptyOrValue,
    convertToBool,
    getRandomId,
    isEmpty,
    typeOf,
    convertToNumber,
} from './utility.js';

// @private
function _removeBrackets(strExp) {
    const regex = /^(\{.*\}|\[.*\])$/; // Match only if both brackets are the same type
    const match = strExp.match(regex);

    if (match) {
        return match[0].slice(1, -1).trim(); // Extract and trim the content between brackets
    }

    return strExp; // Return the original string if no brackets found at start and end
}

/**
 * Add quotes to a string
 * @function addQuotes
 * @param {String} str
 * @return {String}
 * @example addQuotes('hello') // "hello"
 */
export function addQuotes(str, q = '"') {
    return `${q}${str}${q}`;
}

/**
 * Clean a string from delimeters or just trimmed if no delimeters given
 * @funtion cleanStr
 * @param {String} str - String to use
 * @param {String|Regex} p1 - Delimeter 1
 * @param {String|Regex} p2 - Delimeter 2
 * @return {String|void}
 * @example cleanStr('hello world', 'h', 'd') // 'ello worl'
 * @example cleanStr('  hello world  ') // 'hello world'
 * @example cleanStr('hello world', 'hello') // 'world'
 * @example cleanStr('Hello World. Sunshine is here!', '\..*!') // Hello World
 * @example cleanStr('Hello World. Sunshine is here!', /Hello/g) // ' World. Sunshine is here!'
 * @example cleanStr('Hello World. Sunshine is here!', /Hello/g, /Sunshine/g) // ' World.  is here!'
 */
export function cleanStr(str, ...args) {
    if (!str) {
        return;
    }
    if (typeof str !== 'string') {
        return str;
    }

    return args
        .reduce((accStr, arg) => {
            const regex = arg instanceof RegExp ? arg : new RegExp(setExpString(arg));
            return accStr.replace(regex, '');
        }, str)
        .trim();
}

/**
 * convert all keys from an object to symbols
 * @function convertKeysToSymbols
 * @param {object} obj - The object to convert
 * @return {object} - The object with all keys converted to symbols
 * @example convertKeysToSymbols({a: 1, b: 2}) // returns {Symbol(a): 1, Symbol(b): 2, keyToSymbolMap: {a: Symbol(a), b: Symbol(b)}
 */
export function convertKeysToSymbols(obj) {
    if (emptyOrValue(obj, null) === null) {
        return {};
    }
    const newObj = {};
    const keyToSymbolMap = {};
    for (const key in obj) {
        const symbolKey = Symbol(key);
        newObj[symbolKey] = obj[key];
        keyToSymbolMap[key] = symbolKey;
    }
    newObj.keyToSymbolMap = keyToSymbolMap;
    return newObj;
}

/**
 * Recursively will loop in array to find the desired target
 * @function findAndReplaceInArray
 * @param {Array} arr
 * @param {String} find The target (needle)
 * @param {Array|Object|String} value Replacer
 * @return {Null|Array}
 * @example findAndReplaceInArray([1,2,3,4,5], 3, 'three') // [1,2,'three',4,5]
 */
export function findAndReplaceInArray(arr, find, value) {
    let replaced = false;

    const result = arr.map((prop) => {
        if (Array.isArray(prop)) {
            const replacedArray = findAndReplaceInArray(prop, find, value);
            if (replacedArray) {
                replaced = true;
                return replacedArray;
            }
            return prop;
        }
        if (prop === find) {
            replaced = true;
            if (Array.isArray(value)) {
                return value.map((p) => (Array.isArray(p) ? p : p.trim()));
            }
            return value;
        }
        return prop;
    });

    return replaced ? result : null;
}

/**
 * Find the last instance of nested pattern with delimeters
 * @function findNested
 * @param {string} str
 * @param {string} start - Delimeter 1
 * @param {string} end - Delimeter 2
 * @return {string|null}
 * @example findNested('[[]hello [world]]', '[', ']') // [world]
 */
export function findNested(str, start = '[', end = ']') {
    if (typeof str !== 'string') {
        return str;
    }
    // return lastMatch;
    // Find the last index of '['
    const lastIndex = str.lastIndexOf(start);
    // If '[' is not found, return null or some default value
    if (lastIndex === -1) {
        return null;
    }

    // Extract the substring starting from the last '[' to the end
    const substring = str.substring(lastIndex);
    // Find the index of the first ']' in the substring
    const endIndex = substring.indexOf(end);
    // If ']' is not found, return null or some default value
    if (endIndex === -1) {
        return null;
    }
    // Extract and return the content between the last '[' and the next ']', including them
    return substring.substring(0, endIndex + 1);
}

/**
 * Fix quotes from a string
 * @function fixQuotes
 * @param {String} str
 * @return {String} q quote type
 * @return {String}
 * @example fixQuotes("'hello'") // "hello"
 * @example fixQuotes('"hello"') // "hello"
 */
export function fixQuotes(str, q = '"') {
    if (typeof str !== 'string') {
        return str;
    }
    return str.replace(/`|'|"/g, q);
}

/**
 * Get an object from a path
 * @function getObjectFromPath
 * @param {String} path - The path to the object
 * @param {Object} source - The source object to search in
 * @return {Object} - The object found at the path
 * @example getObjectFromPath('a.b.c', {a: {b: {c: 'value'}}}) // 'value'
 * @example getObjectFromPath('a.b.c') // 'value'
 * @example getObjectFromPath('a.b.c', window) // value
 * @example getObjectFromPath('a.b.c', source) // value
 */
export function getObjectFromPath(path, source = window) {
    return path.split('.').reduce((acc, part) => acc && acc[part], source);
}

/**
 * Converts strings formats into objects or arrays
 * Note: quoted strings are not supported, use getDirectiveFromString instead
 * @param {string} strExp
 * @return {object|array|string}
 * @example getArrObjFromString('[[value,value],value]') // [['value', 'value'], 'value']
 * @example getArrObjFromString('[[value,value],value, { y: hello }, hello]') // [['value', 'value'], 'value', { y: 'hello' }, 'hello']
 * @example getArrObjFromString('{ y: hello, x: world, z: [value,value]}') // { y: 'hello', x: 'world', z: ['value', 'value'] }
 */
export function getArrObjFromString(strExp) {
    // alredy typeof object or array just return it
    if (typeOf(strExp, 'object') || typeOf(strExp, 'array') || !strExp) {
        return strExp;
    }
    const isObject = (str) => startAndEndWith(str, '{', '}');
    const isArray = (str) => startAndEndWith(str, '[', ']');

    const collectionType =
        (isObject(strExp) ? 'object' : null) || (isArray(strExp) ? 'array' : null);
    // If it is other type of string, return it
    if (!collectionType) {
        return strExp;
    }

    const nestedElements = {};

    const getNested = (str) => {
        const match1 = findNested(str, '{', '}');
        const match2 = findNested(str, '[', ']');

        if (str.indexOf(match1) > str.indexOf(match2)) {
            return match1 || null;
        }
        return match2 || null;
    };

    const loopNested = (str) => {
        if (!str) {
            return;
        }

        let matched = getNested(_removeBrackets(str));

        if (!matched) {
            return;
        }
        const addMarker = (_str, matched) => {
            let marker = `__${getRandomId()}__`;
            let type =
                (isObject(matched) ? 'object' : null) ||
                (isArray(matched) ? 'array' : null) ||
                'string';
            _str = _str.replace(matched, marker);
            nestedElements[marker] = {
                type,
                matched,
            };
            return _str;
        };

        str = addMarker(str, matched);

        return loopNested(str) || str;
    };

    const buildNested = (str, type) => {
        str = _removeBrackets(str);
        let output = type === 'object' ? {} : [];

        getChunks(str).forEach((chunk, index) => {
            const isObjectKey = chunk.includes(':') && type === 'object';
            const chunkParts = isObjectKey ? getChunks(chunk, ':') : [];
            const chunkKey = removeQuotes(emptyOrValue(chunkParts[0], index));
            chunk = isObjectKey ? chunkParts[1] : chunk;

            if (chunk in nestedElements) {
                const nested = nestedElements[chunk];
                chunk = buildNested(nested.matched, nested.type);
            }
            chunk = convertToNumber(removeQuotes(chunk));
            // set back in the collection either as an object or array
            type === 'object' ? (output[chunkKey] = chunk) : output.push(chunk);
        });
        return output;
    };

    return buildNested(loopNested(strExp) || strExp, collectionType);
}

/**
 * handles the following patterns to get an object from string attributes
 * // Matches the JSON objects as string: {'directive':{key:value}} OR {key:value}
 * // Matches the Array as string: [value, value] OR ['value','value']
 * // Matches a multi-array string like [[value,value]],value]
 * // Matches object-style strings: directive.tablet(...values) OR directive[expression](...values)
 * // Matches string ID or class: literals Id(#) or class (.). Note that in Vue it needs to be in quotes attr="'#theId'"
 * // Mathes simple directive function style: directive(#idOr.Class)
 * Note: all the above with the exception of the Id/class will be converted into actual objects
 */
/**
 * Converts strings formats into objects
 * @function getDirectivesFromString
 * @param {String|Array|Object} stringDirective
 * @return {object|null|void}
 * @example getDirectivesFromString('directive.tablet(...values)') // {directive: {tablet: 'values'}}
 * @example getDirectivesFromString('[[value,value],value]') // {directive: 'values', directive2: 'values'}
 * @example getDirectivesFromString('directive.tablet|mobile(...values)') // {directive: {tablet: 'values', mobile: 'values'}}
 * @example getDirectivesFromString('directive.tablet(...values)') // {directive: {tablet: 'values'}}
 */
export function getDirectivesFromString(stringDirective) {
    const str = stringDirective;

    if (!emptyOrValue(str)) {
        return null;
    }

    const results = (type = null, results = null) => {
        return {
            type: type,
            directive: results,
        };
    };
    const matchArrayTypes = /^\[((.|\n)*?)\]$/gm;
    // comment eslint to ignore

    const matchObjectTypes = /^\{((.|\n)*?)\:((.|\n)*?)\}$/gm;

    const matchFunctionString = /^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g;
    const regexDotObjectString = /([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm;
    const regexExObjectString = /([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;
    let type = typeof str;

    if (type === 'object' || type === 'array') {
        return results(type, str);
    } else {
        switch (true) {
            case !!str.match(matchArrayTypes):
                // Matches the Array as string: [value, value] OR ['value','value']
                // regexArrayLike = /^\[((.|\n)*?)\]$/gm;
                // Matches a multi-array string like [[value,value]],value]
                // regexMultiArrayString = /\[(\n|)(((.|\[)*)?)\](\,\n|)(((.|\])*)?)(\n|)\]/gm;

                type = 'array';
                break;
            case !!str.match(matchObjectTypes):
                // Matches the JSON objects as string: {'directive':{key:value}} OR {key:value}
                // regexObjectLike = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm;
                type = 'object';
                break;
            case !!str.match(matchFunctionString):
                // Mathes simple directive function style: directive(#idOr.Class)
                // regexFunctionString

                const directive = str.split('(')[0].trim();
                return results('idOrClassWithDirective', {
                    [directive]: getMatchInBetween(str, '(', ')'),
                });
            case !!str.match(regexDotObjectString):
                // Matches object-style strings: directive.tablet(...values) OR directive[expression](...values)
                // OR directive.breakdown|breakdown2(...values) OR directive.tablet(...values)&&directive.mobile(...values)
                type = 'dotObject';
                break;
            case !!str.match(regexExObjectString):
                type = 'dotObject';
                break;

            default:
                return results('string', str);
        }
    }
    if (type === 'array' || type === 'object') {
        let strQ = fixQuotes(str);

        try {
            return results(type, JSON.parse(strQ));
        } catch (error) {
            // uncomment to debug
            // console.log('___ parse error ___', error);
        }

        return results(type, getArrObjFromString(strQ));
    }

    if (type === 'dotObject') {
        let values, breakDownId, directive;
        const setObject = {};

        getChunks(str, '&&').forEach((command) => {
            if (command.match(regexExObjectString)) {
                // Matches object-style strings: directive[expression](...values)
                values = getMatchInBetween(command, '](', ')');
                breakDownId = getMatchInBetween(command, '[', ']');
                directive = command.split('[')[0].trim();
            } else {
                // Matches object-style strings: directive.tablet(...values)
                values = getMatchInBetween(command, '(', ')');
                command = command.replace(getMatchBlock(command, '(', ')'), '');
                [directive, breakDownId] = getChunks(command, '.');
            }

            values = getArrObjFromString(values);

            if (!setObject[directive]) {
                setObject[directive] = {};
            }

            getChunks(breakDownId, '|').forEach((id) => {
                setObject[directive][id] = values;
            });
        });

        return results('dotObject', setObject);
    }
}

/**
 * Find math by delimeters returns raw matches
 * @function getMatchBlock
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 * @example getMatchBlock('is a hello world today', 'h', 'd') // 'hello world'
 * @example getMatchBlock('is a hello world today', 'h', 'd', true) // ['hello world']
 * @example getMatchBlock('is a <hello world/> today', '<', '/>') // '<hello world/>'
 */
export function getMatchBlock(str, p1, p2, all = false) {
    if (typeof str !== 'string') {
        return str;
    }
    p1 = setExpString(p1);
    p2 = setExpString(p2);
    let regex = new RegExp(setLookUpExp(p1, p2), 'gm');
    const matches = str.match(regex);
    if (matches) {
        return all ? matches : matches[0];
    }
    return null;
}
/**
 * Splits a string into chunks by a given splitter and cleans the chunks
 * @param {string} str
 * @param {string} splitter - The string/character to split the string by. Defaults to ','
 * @return {string|array}
 */
export function getChunks(str, splitter = ',') {
    if (typeof str !== 'string') {
        return str;
    }
    if (isEmpty(str)) {
        return [];
    }
    str = cleanStr(str);
    let chunks = str.split(splitter).map((t) => cleanStr(t));
    return chunks.length === 1 && chunks[0] === '' ? [str] : chunks;
}

/**
 * find a match in between two delimeters, either string or regex given, returns clean matches
 * @function getMatchBlock
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 * @example getMatchInBetween('hello world', 'h', 'd') // 'ello worl'
 * @example getMatchInBetween('hello <world/>', '<', '/>', true) // ['world']
 * @example getMatchInBetween('hello <world/>', '<', '/>') // 'world'
 */
export function getMatchInBetween(str, p1, p2, all = false) {
    if (typeof str !== 'string') {
        return str;
    }
    const matchBlock = getMatchBlock(str, p1, p2, all) ?? (all ? [] : str);
    return all ? matchBlock.map((match) => cleanStr(match, p1, p2)) : cleanStr(matchBlock, p1, p2);
}

/**
 * Remove quotes from a string
 * @function removeQuotes
 * @param {String} str
 * @return {String}
 * @example removeQuotes('"hello"') // hello
 * @example removeQuotes("'hello'") // hello
 */
export function removeQuotes(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.replace(/`|'|"/g, '');
}

/**
 * Checks if a string starts and ends with a given string
 * @param {string} strExp
 * @param {string} start - The string/character to check it starts with
 * @param {string} end - The string/character to check it ends with
 * @return {string}
 * @example startAndEndWith('hello world', 'h', 'd') // false
 * @example startAndEndWith('hello world', 'h', 'd') // true
 */
export function startAndEndWith(strExp, start = null, end = null) {
    return (!start || strExp.startsWith(start)) && (!end || strExp.endsWith(end));
}

/**
 * Scapes a string to create a regex or returns the regex if it already is an expression
 * @function setExpString
 * @param {String|Regex} exp
 * @return {String|Regex}
 * @example setExpString('hello') // '\h\e\l\l\o'
 * @example setExpString(/hello/) // /hello/
 * @example setExpString([hello]) // \\[hello\\/ then use like new new RegExp(setExpString(StringOrRegex))
 */
export function setExpString(exp) {
    if (exp instanceof RegExp) {
        return exp;
    } else {
        return exp
            .split('')
            .map((char) =>
                ['$', '^', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '|', '\\'].includes(
                    char
                )
                    ? `\\${char}`
                    : char
            )
            .join('');
    }
}

/**
 * Regex builder to get a match in between two delimeters
 * @function setLookUpExp
 * @param {String|Regex} args - minimun two arguments as delimeters
 * @return {String} - Regex
 * @example setLookUpExp('h', 'd') // 'h((.|\n)*?)d'
 * @example setLookUpExp('h', 'd', 'c') // 'h((.|\n)*?)d((.|\n)*?)c'
 * @usage:
 * const pattern = setLookUpExp(".", "!");
const regex = new RegExp(pattern, 'g');
const text = "Hello World. Sunshine is here! Have fun!";
const matches = text.match(regex);
console.log(matches);  // Output: [". Sunshine is here!"]
 */
export function setLookUpExp(...args) {
    if (args.length < 2) {
        throw new Error('You need to pass at least two arguments');
    }
    let expression = '';
    // loop through args
    args.forEach((arg, index) => {
        // if arg is a regex, return the source
        if (arg instanceof RegExp) {
            arg = arg.source;
        }
        if (index === 0) {
            expression = arg;
        } else {
            expression += `((.|\n)*?)${arg}`;
        }
    });

    return expression;
}

/**
 * Set a string to be used as a wildcard pattern
 * @function setWildCardString
 * @param {string} string - The string to set as a wildcard pattern
 * @param {boolean} matchStart - If the pattern should match the start of the string
 * @param {boolean} matchEnd - If the pattern should match the end of the string
 * @return {string} - The wildcard pattern
 * @example setWildCardString('name.*', true) // returns '^name\.(.*?)'
 * @example setWildCardString('name.*', false, true) // returns 'name\.(.*?)$'
 * @example setWildCardString('name.**') // returns 'name\..*' greedy
 */
export function setWildCardString(str, matchStart = false, matchEnd = false) {
    if (typeof str !== 'string') {
        return str;
    }
    if (!str) {
        return null;
    }
    matchStart = convertToBool(matchStart);
    matchEnd = convertToBool(matchEnd);

    let regexStr = str.replace(/([.+?^${}()|\[\]\/\\])/g, '\\$&'); // escape all regex special chars
    let regStart = matchStart ? '^' : '';
    let regEnd = matchEnd ? '$' : '';

    regexStr = regexStr
        .replace(/\*\*/g, '[_g_]') // Replace wildcard patterns with temporary markers
        .replace(/\*/g, '(.*?)')
        .replace(/\[_g_\]/g, '.*');

    return `${regStart}${regexStr}${regEnd}`;
}

/**
 * Search for a wildcard pattern in a list of strings or viceversa
 * @method wildCardStringSearch
 * @param {string} pattern - The pattern to search for
 * @param {array|string} list - The list of strings to search in
 * @param {boolean} matchStart - If the pattern should match the start of the string (optional)
 * @param {boolean} matchEnd - If the pattern should match the end of the string optional)
 * @return {string[]|null} - Returns a list of strings that match the pattern, or null if no match is found
 * @example wildCardStringSearch('name.*', ['name.a', 'name.b', 'name.c']) // returns ['name.a', 'name.b', 'name.c']
 */
export function wildCardStringSearch(pattern, listOrString, matchStart = false, matchEnd = false) {
    if (!pattern || !listOrString) {
        return null;
    }

    const regex = new RegExp(setWildCardString(pattern, matchStart, matchEnd));

    if (typeof listOrString === 'string') {
        const matches = listOrString.match(regex);
        return emptyOrValue(matches);
    }

    let filteredList = [];
    filteredList = listOrString.filter((item) => regex.test(item));

    return emptyOrValue(filteredList);
}

//  const powerHelper = {
//     addQuotes,
//     cleanStr,
//     convertKeysToSymbols,
//     findAndReplaceInArray,
//     findNested,
//     fixQuotes,
//     getArrObjFromString,
//     getChunks,
//     getDirectivesFromString,
//     getMatchBlock,
//     getMatchInBetween,
//     getObjectFromPath,
//     removeQuotes,
//     startAndEndWith,
//     setExpString,
//     setLookUpExp,
//     setWildCardString,
//     wildCardStringSearch,
// };

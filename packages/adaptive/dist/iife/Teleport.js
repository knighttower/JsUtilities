var Teleport = (function (exports) {
    'use strict';

    // Author Knighttower
    // MIT License
    // [2022] [Knighttower] https://github.com/knighttower
    /**
     * @module DomObserver
     * Detect DOM changes
     * @name DomObserver
     * @param {window} selector
     * @param {Function}
     * @return DomObserver
     * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
     * @example DomObserver.removeOnNodeChange('elementIdentifier')
     */
    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged$3 = {};
    /**
     * When node change
     * @param {String} id
     * @param {Function} callback Callback when any node changes/ add/deleted/modified
     * @return {Void}
     */
    const addOnNodeChange$1 = (id, callback) => {
        if (callback) {
            executeOnNodeChanged$3[id] = callback;
        }
    };
    /**
     * Remove from node change
     * @param {String} id
     * @return {Void}
     */
    const removeOnNodeChange$1 = (id) => {
        if (id) {
            delete executeOnNodeChanged$3[id];
        }
    };
    /**
     * Deep cleanup
     * @return {Void}
     */
    const cleanup$1 = () => {
        Object.keys(executeOnNodeChanged$3).forEach((key) => delete executeOnNodeChanged$3[key]);
    };
    /**
     * Observer
     * @private
     * @return {MutationObserver}
     */
    (() => {
        if (typeof window !== 'undefined') {
            const callback = (mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        for (const id in executeOnNodeChanged$3) {
                            executeOnNodeChanged$3[id]();
                        }
                    }
                }
            };
            const config = {
                childList: true,
                subtree: true,
            };
            const observer = new MutationObserver(callback);
            observer.observe(document.body, config);
        }
    })();
    const DomObserver$1 = {
        executeOnNodeChanged: executeOnNodeChanged$3,
        addOnNodeChange: addOnNodeChange$1,
        removeOnNodeChange: removeOnNodeChange$1,
        cleanup: cleanup$1,
    };

    // Author Knighttower
    // MIT License
    // [2022] [Knighttower] https://github.com/knighttower
    /**
     * @module DomObserver
     * Detect DOM changes
     * @name DomObserver
     * @param {window} selector
     * @param {Function}
     * @return DomObserver
     * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
     * @example DomObserver.removeOnNodeChange('elementIdentifier')
     */
    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged$2 = {};
    /**
     * When node change
     * @param {String} id
     * @param {Function} callback Callback when any node changes/ add/deleted/modified
     * @return {Void}
     */
    const addOnNodeChange = (id, callback) => {
        if (callback) {
            executeOnNodeChanged$2[id] = callback;
        }
    };
    /**
     * Remove from node change
     * @param {String} id
     * @return {Void}
     */
    const removeOnNodeChange = (id) => {
        if (id) {
            delete executeOnNodeChanged$2[id];
        }
    };
    /**
     * Deep cleanup
     * @return {Void}
     */
    const cleanup = () => {
        Object.keys(executeOnNodeChanged$2).forEach((key) => delete executeOnNodeChanged$2[key]);
    };
    /**
     * Observer
     * @private
     * @return {MutationObserver}
     */
    (() => {
        if (typeof window !== 'undefined') {
            const callback = (mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        for (const id in executeOnNodeChanged$2) {
                            executeOnNodeChanged$2[id]();
                        }
                    }
                }
            };
            const config = {
                childList: true,
                subtree: true,
            };
            const observer = new MutationObserver(callback);
            observer.observe(document.body, config);
        }
    })();
    const DomObserver = {
        executeOnNodeChanged: executeOnNodeChanged$2,
        addOnNodeChange,
        removeOnNodeChange,
        cleanup,
    };

    // Author Knighttower
    // MIT License
    // Copyright (c) [2022] [Knighttower] https://github.com/knighttower


    /**
     * @class Adds some extra functionality to interact with a DOM element
     * @param {String|Object} selector Class or ID or DOM element
     * @param {String} scope The scope to search in, window, document, dom element. Defaults to document
     * @return {Object}
     * @example new ElementHelper('elementSelector')
     * @example new ElementHelper('elementSelector', domElement|window|document)
     *
     */
    class ElementHelper {
        /**
         * Constructor
         * @param {String|Object} selector
         * @return {Object}
         */
        constructor(selector, scope = document) {
            this.selector = selector;
            if (typeof selector === 'object') {
                this.domElement = selector;
            } else if (String(selector).includes('//')) {
                this.domElement = this.getElementByXpath(selector);
            } else {
                this.domElement = scope.querySelector(selector);
            }
        }

        // =========================================
        // --> Public
        // --------------------------

        /**
         * Check if the element exists or is visible. It will keep querying
         * @return {Boolean}
         */
        isInDom() {
            return Boolean(this.domElement?.outerHTML);
        }

        /**
         * Wait for element exists or is visible. It will keep querying
         * @function whenInDom
         * @return {Promise}
         */
        whenInDom() {
            let $this = this;
            let callbackId = Date.now() + Math.floor(Math.random() * 1000);

            return new Promise(function (resolveThis) {
                if (!$this.isInDom()) {
                    DomObserver.addOnNodeChange(callbackId, () => {
                        let element = new ElementHelper($this.selector);
                        if (element.isInDom()) {
                            $this = element;
                            resolveThis($this);
                            DomObserver.removeOnNodeChange(callbackId);
                        }
                    });
                } else {
                    resolveThis($this);
                }
            });
        }

        /**
         * Find element by Xpath string
         * @param {String} xpath
         * @example getElementByXpath("//html[1]/body[1]/div[1]")
         * @return {Object} DOM element
         */
        getElementByXpath(xpath) {
            return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }

        /**
         * Get the element xpath string
         * @author Based on https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reload-to-the-same-place-even-if/2631931#2631931
         * @return {String}
         */
        getXpathTo() {
            let element = this.domElement;

            if (element.id) {
                return `//*[@id='${element.id}']`;
            }
            if (element === document.body) {
                return '//' + element.tagName;
            }

            let ix = 0;
            let siblings = element.parentNode.childNodes;
            for (let i = 0; i < siblings.length; i++) {
                let sibling = siblings[i];
                if (sibling === element) {
                    return (
                        new ElementHelper(element.parentNode).getXpathTo() + '/' + element.tagName + '[' + (ix + 1) + ']'
                    );
                }
                if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                    ix++;
                }
            }
        }

        /**
         * Get the element attribute, but parse it if it is an object or array
         * @param {String} attr Atrribute name
         * @return {String|Array|Object|Null}
         */
        getAttribute(attr) {
            return this.domElement.getAttribute(attr) || null;
        }

        /**
         * Create a unique has for the element derived from its xpath
         * @author Based on https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
         * @return {String}
         */
        getHash() {
            let string = String(this.getXpathTo());
            let hash = 0;

            if (string.length === 0) {
                return hash;
            }

            for (let i = 0; i < string.length; i++) {
                let char = string.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;
            }

            return hash;
        }
    }

    // =========================================
    // --> Utilities
    // --------------------------
    const selectElement = (selector, scope = document) => new ElementHelper(selector, scope);

    // // -----------------------------------------
    // /**
    //  * @knighttower
    //  * @url knighttower.io
    //  * @git https://github.com/knighttower/
    //  */
    // // -----------------------------------------


    /**
     * Converts a given variable to a number if possible.
     * @param {string|number} input - The input variable to convert.
     * @returns {string|number} - The converted number or the original variable.
     * @example convertToNumber(123) // Output: 123 (number)
     * @example convertToNumber(123.45) // Output: 123.45 (number)
     * @example convertToNumber("123") // Output: 123 (number)
     * @example convertToNumber("123.45") // Output: 123.45 (number)
     * @example convertToNumber("abc") // Output: "abc" (original string)
     * @example convertToNumber("123abc") // Output: "123abc" (original string)
     * @example convertToNumber(null) // Output: null (original)
     */
    function convertToNumber$1(input) {
        const isNum = isNumber$1(input);

        if (isNum !== null) {
            return isNum;
        }
        // Case: String that cannot be converted to a number
        return input;
    }

    /**
     * Check if there is a value, if not return null or the default value
     * It can test strings, arrays, objects, numbers, booleans
     * @function emptyOrValue
     * @memberof Utility
     * @param {String|Number} value If the value is not empty, returns it
     * @param {String|Number} _default The default value if empty
     * @return mixed
     * @example emptyOrValue('test', 'default') // 'test'
     * @example emptyOrValue('', 'default') // 'default'
     * @example emptyOrValue('test') // 'test'
     * @example emptyOrValue('') // null
     * @example emptyOrValue(0) // 0
     * @example var hello = ''; emptyOrValue(hello) // Null
     * @example var hello = 'test'; emptyOrValue(hello) // 'test'
     * @example var hello = 'test'; emptyOrValue(hello, 'default') // 'test'
     * @example var hello = ''; emptyOrValue(hello, 'default') // 'default'
     * @example var hello = []; emptyOrValue(hello, 'default') // null
     * @example var hello = {}; emptyOrValue(hello, 'default') // null
     * @example var hello = [...]; emptyOrValue(hello') // [...]
     */
    function emptyOrValue$1(value, _default = null) {
        /**
         * Test sequence:
         * If it is a number 0> : true
         * If is not undefined: true
         * If it is boolean (true|false) prevents going to empty
         * If it is not Empty, [], null, {}, 0, true, false: true
         */

        if (isNumber$1(value) !== null || typeof value === 'boolean') {
            return value;
        } else if (!isEmpty$2(value)) {
            return value;
        }

        return _default;
    }

    /**
     * Generate unique ids
     * @function getDynamicId
     * @memberof Utility
     * @return string Format kn__000000__000
     */
    function getDynamicId$1() {
        return 'kn__' + new Date().getTime() + '__' + Math.floor(Math.random() * (999 - 100));
    }

    /**
     * Alias to getDynamicId
     * @function getRandomId
     * @memberof Utility
     * @return string
     * @example getRandomId() // kn__000000__000
     */
    const getRandomId$1 = getDynamicId$1;

    /**
     * Check if a value is empty
     * @function isEmpty
     * @memberof Utility
     * @param {string|array|object|map|set|number|boolean} value
     * @url https://moderndash.io/
     * @return {string}
     */
    function isEmpty$2(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value === 'string' || Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Map || value instanceof Set) {
            return value.size === 0;
        }

        if (ArrayBuffer.isView(value)) {
            return value.byteLength === 0;
        }

        if (typeof value === 'object') {
            return Object.keys(value).length === 0;
        }

        return false;
    }

    /**
     * Check if is a number or Int, if not return null
     * Integrates both Int and Number, or convert a string number to number to test
     * Note: this is not like Lodash isNumber since this one takes into consideration the 'string number'
     * @function isNumber
     * @memberof Utility
     * @param {String|Number} value
     * @return null|int
     * @example isNumber(123) // true
     * @example isNumber(123.45) // true
     * @example isNumber('123abc') // false
     * @example isNumber('abc') // false
     * @example isNumber('') // false
     * @example isNumber("123") // true
     * @example isNumber("123.45") // true
     */
    function isNumber$1(value) {
        const isType = typeof value;
        switch (value) {
            case null:
            case undefined:
            case '':
                return null;
            case '0':
            case 0:
                return 0;
            default:
                if (isType === 'number' || isType === 'string') {
                    if (typeof value === 'number' || !Number.isNaN(Number(value))) {
                        return +value;
                    }
                }

                break;
        }

        return null;
    }

    /**
     * Check the type of a variable, and get the correct type for it. It also accepts simple comparisons
     * For more advance type checking see https://github.com/knighttower/JsTypeCheck
     * @param {any} input - The variable to check
     * @param {string} test - The types to check against, piped string
     * @return {string|boolean} - The type of the variable
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello', 'number') // returns false
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello') // returns 'string'
     * @example typeOf({}) // returns 'object'
     */
    function typeOf$3(input, test) {
        // Special case for null since it can be treated as an object
        if (input === null) {
            if (test) {
                return test === null || test === 'null' ? true : false;
            }
            return 'null';
        }

        let inputType;

        switch (typeof input) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'undefined':
            case 'bigint':
            case 'symbol':
            case 'function':
                inputType = typeof input;
                break;
            case 'object':
                inputType = Array.isArray(input) ? 'array' : 'object';

                break;
            default:
                inputType = 'unknown';
        }

        if (test) {
            if (test.includes('|')) {
                for (let type of test.split('|')) {
                    if (inputType === type) {
                        return type;
                    }
                }
                return false;
            }

            return test === inputType;
        }

        return inputType;
    }

    // Author Knighttower
    // MIT License
    // Copyright (c) [2022] [Knighttower] https://github.com/knighttower


    // @private
    function _removeBrackets$1(strExp) {
        const regex = /^(\[|\{)(.*?)(\]|\})$/; // Match brackets at start and end
        const match = strExp.match(regex);

        if (match) {
            return match[2].trim(); // Extract and trim the content between brackets
        }

        return strExp; // Return the original string if no brackets found at start and end
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
    function cleanStr$1(str, ...args) {
        if (!str) {
            return;
        }
        if (typeof str !== 'string') {
            return str;
        }

        return args
            .reduce((accStr, arg) => {
                const regex = arg instanceof RegExp ? arg : new RegExp(setExpString$1(arg));
                return accStr.replace(regex, '');
            }, str)
            .trim();
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
    function findNested$1(str, start = '[', end = ']') {
        if (typeof str !== 'string') {
            return str;
        }
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
    function fixQuotes(str, q = '"') {
        if (typeof str !== 'string') {
            return str;
        }
        return str.replace(/`|'|"/g, q);
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
    function getArrObjFromString$1(strExp) {
        // alredy typeof object or array just return it
        if (typeOf$3(strExp, 'object') || typeOf$3(strExp, 'array')) {
            return strExp;
        }
        const isObject = startAndEndWith$1(strExp, '{', '}');
        const isArray = startAndEndWith$1(strExp, '[', ']');
        // If it is other type of string, return it
        if (!isObject && !isArray) {
            return strExp;
        }

        const newCollection = isObject ? {} : [];
        const nestedElements = {};

        //remove the brackets
        let newStrExp = _removeBrackets$1(strExp);

        const loopNested = (objects = false) => {
            // ignore eslint comment
            // eslint-disable-next-line no-constant-condition
            while (true) {
                //find any nested arrays or objects
                let matched = objects ? findNested$1(newStrExp, '{', '}') : findNested$1(newStrExp);

                if (!matched) {
                    break;
                }

                //replace the nested array or object with a marker so that we can safely split the string
                let marker = `__${getRandomId$1()}__`;
                nestedElements[marker] = matched;

                newStrExp = newStrExp.replace(matched, marker);
            }
        };

        loopNested();
        loopNested(true);

        getChunks$1(newStrExp).forEach((chunk, index) => {
            const isObjectKey = chunk.includes(':') && isObject;
            const chunkParts = isObjectKey ? getChunks$1(chunk, ':') : [];
            const chunkKey = removeQuotes$1(emptyOrValue$1(chunkParts[0], index));
            chunk = isObjectKey ? chunkParts[1] : chunk;
            if (chunk in nestedElements) {
                chunk = getArrObjFromString$1(nestedElements[chunk]);
            }
            chunk = convertToNumber$1(removeQuotes$1(chunk));
            // set back in the collection either as an object or array
            isObject ? (newCollection[chunkKey] = chunk) : newCollection.push(chunk);
        });
        // uncomment to debug
        // console.log('___ log ___', newCollection);
        return newCollection;
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
    function getDirectivesFromString(stringDirective) {
        const str = stringDirective;
        if (!emptyOrValue$1(str)) {
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
        // eslint-disable-next-line no-useless-escape
        const matchObjectTypes = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm;
        // eslint-disable-next-line no-useless-escape
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
                    // eslint-disable-next-line
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

            return results(type, getArrObjFromString$1(strQ));
        }

        if (type === 'dotObject') {
            let values, breakDownId, directive;
            const setObject = {};

            getChunks$1(str, '&&').forEach((command) => {
                if (command.match(regexExObjectString)) {
                    // Matches object-style strings: directive[expression](...values)
                    values = getMatchInBetween(command, '](', ')');
                    breakDownId = getMatchInBetween(command, '[', ']');
                    directive = command.split('[')[0].trim();
                } else {
                    // Matches object-style strings: directive.tablet(...values)
                    values = getMatchInBetween(command, '(', ')');
                    command = command.replace(getMatchBlock(command, '(', ')'), '');
                    [directive, breakDownId] = getChunks$1(command, '.');
                }

                values = getArrObjFromString$1(values);

                if (!setObject[directive]) {
                    setObject[directive] = {};
                }

                getChunks$1(breakDownId, '|').forEach((id) => {
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
    function getMatchBlock(str, p1, p2, all = false) {
        if (typeof str !== 'string') {
            return str;
        }
        p1 = setExpString$1(p1);
        p2 = setExpString$1(p2);
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
    function getChunks$1(str, splitter = ',') {
        if (typeof str !== 'string') {
            return str;
        }
        if (isEmpty$2(str)) {
            return [];
        }
        str = cleanStr$1(str);
        let chunks = str.split(splitter).map((t) => cleanStr$1(t));
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
    function getMatchInBetween(str, p1, p2, all = false) {
        if (typeof str !== 'string') {
            return str;
        }
        const matchBlock = getMatchBlock(str, p1, p2, all) ?? (all ? [] : str);
        return all ? matchBlock.map((match) => cleanStr$1(match, p1, p2)) : cleanStr$1(matchBlock, p1, p2);
    }

    /**
     * Remove quotes from a string
     * @function removeQuotes
     * @param {String} str
     * @return {String}
     * @example removeQuotes('"hello"') // hello
     * @example removeQuotes("'hello'") // hello
     */
    function removeQuotes$1(str) {
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
    function startAndEndWith$1(strExp, start = null, end = null) {
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
    function setExpString$1(exp) {
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
    function setLookUpExp(...args) {
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
     * URL Object Class with public methods for URL functions and manipulation.
     *
     * @module urlHelper
     */
    (() => {

        /**
         * The window object from the global scope.
         * @type {Window}
         */
        const win = typeof window !== 'undefined' ? window : undefined;

        /**
         * The document object from the global scope.
         * @type {Document}
         */
        const doc = typeof document !== 'undefined' ? document : {};

        const LOCATION = win?.location;
        let hash = LOCATION?.hash;
        let HREF = LOCATION?.href;
        const SEARCH = LOCATION?.search;

        /**
         * Protocol part of the URL, without the colon.
         * @type {string}
         */
        const PROTOCOL = LOCATION?.protocol?.replace(':', '');

        /**
         * Host part of the URL, including hostname and port.
         * @type {string}
         */
        const HOST = LOCATION?.host;

        /**
         * Pathname part of the URL.
         * @type {string}
         */
        const PATH = LOCATION?.pathname;

        /**
         * Base site URL, constructed from protocol and host.
         * @type {string}
         */
        const SITE_URL = `${PROTOCOL}://${HOST}`;

        /**
         * Full URL constructed from protocol, host, and path.
         * @type {string}
         */
        const FULL_URL = `${SITE_URL}${PATH}`;

        /**
         * Parses the current URL parameters and caches them for future use.
         * @returns {Object} Contains various representations of URL parameters.
         * @private
         */
        const parseURLParams = () => {
            if (cachedURLParams) {
                return cachedURLParams;
            }

            const params = new URLSearchParams(SEARCH);
            const vars = {};

            for (const [key, value] of params.entries()) {
                vars[key] = value;
            }

            cachedURLParams = {
                params,
                queryString: params.toString(),
                search: SEARCH,
                keys: Array.from(params.keys()),
                values: Array.from(params.values()),
                collection: vars,
            };

            return cachedURLParams;
        };

        /**
         * Cached URL parameters for efficient access.
         * @type {Object|null}
         */
        let cachedURLParams = null;

        /**
         * Public methods and properties for URL manipulation and information.
         * @namespace
         */
        const urlHelper = {
            /**
             * Retrieves the current page name (last part of the URL).
             * @return {string} The current page name or 'index' if none is found.
             */
            getPage: () => {
                const cURL = HREF?.toLowerCase();
                const page = cURL.split('/').pop().split('.')[0];
                return page || 'index';
            },

            /**
             * Retrieves parsed URL parameters.
             * @return {Object} An object with methods and properties to interact with URL parameters.
             */
            getParams: () => parseURLParams(),

            /**
             * Retrieves the URL's query string.
             * @return {string} The query string of the current URL.
             */
            getQuery: () => parseURLParams().queryString,

            /**
             * Adds new parameters to the current URL's query string.
             * @param {Object} query The new parameters to add.
             * @return {Object} An object containing the updated query parameters and string.
             */
            addToQuery: (query) => {
                const currentQuery = parseURLParams().collection;
                Object.assign(currentQuery, query);
                const qString = Object.entries(currentQuery)
                    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                    .join('&');

                return {
                    collection: currentQuery,
                    queryString: qString,
                };
            },

            /**
             * Retrieves the hash part of the URL, without the '#' symbol.
             * @return {string} The current hash value.
             */
            getHash: () => hash?.substring(1),

            /**
             * Sets the hash part of the URL.
             * @param {string} h The hash to set.
             */
            setHash: (h) => {
                hash = h;
            },

            /**
             * Removes the hash part of the URL.
             */
            deleteHash: () => {
                history.pushState('', doc.title, PATH + SEARCH);
            },

            /**
             * Navigates to a specified URL.
             * @param {string} url The URL to navigate to.
             * @return {boolean} Always returns false to prevent default browser behavior.
             */
            goTo: (url) => {
                HREF = url;
                return false;
            },

            /**
             * Opens a URL in a new window or tab.
             * @param {string} url The URL to open.
             * @param {string} [name='_blank'] The target window name.
             * @param {string} [params=''] Parameters for the new window.
             * @return {Window} The window object of the newly opened window.
             */
            open: (url, name = '_blank', params = '') => win.open(url, name, params),

            /**
             * Sets up a listener to execute a callback function when the URL hash changes.
             * @param {Function} callback The function to call when the hash changes.
             */
            onChange: (callback) => {
                if (typeof callback === 'function') {
                    win.addEventListener('hashchange', callback);
                }
            },

            // Exposing constants for easy access
            fullUrl: FULL_URL,
            siteUrl: SITE_URL,
            protocol: PROTOCOL,
            host: HOST,
            path: PATH,
            readUrl: HREF,
        };

        if (typeof window !== 'undefined' && typeof module !== 'object') {
            return (window.UrlHelper = urlHelper);
        } else if (typeof module === 'object') {
            return () => urlHelper;
        }
        return urlHelper;
    })();

    // // -----------------------------------------
    // /**
    //  * @knighttower
    //  * @url knighttower.io
    //  * @git https://github.com/knighttower/
    //  */
    // // -----------------------------------------


    /**
     * Check the type of a variable, and get the correct type for it. It also accepts simple comparisons
     * For more advance type checking see https://github.com/knighttower/JsTypeCheck
     * @param {any} input - The variable to check
     * @param {string} test - The types to check against, piped string
     * @return {string|boolean} - The type of the variable
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello', 'number') // returns false
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello') // returns 'string'
     * @example typeOf({}) // returns 'object'
     */
    function typeOf$2(input, test) {
        // Special case for null since it can be treated as an object
        if (input === null) {
            if (test) {
                return test === null || test === 'null' ? true : false;
            }
            return 'null';
        }

        let inputType;

        switch (typeof input) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'undefined':
            case 'bigint':
            case 'symbol':
            case 'function':
                inputType = typeof input;
                break;
            case 'object':
                inputType = Array.isArray(input) ? 'array' : 'object';

                break;
            default:
                inputType = 'unknown';
        }

        if (test) {
            if (test.includes('|')) {
                for (let type of test.split('|')) {
                    if (inputType === type) {
                        return type;
                    }
                }
                return false;
            }

            return test === inputType;
        }

        return inputType;
    }

    // Author Knighttower
    // MIT License
    // [2022] [Knighttower] https://github.com/knighttower
    /**
     * @module DomObserver
     * Detect DOM changes
     * @name DomObserver
     * @param {window} selector
     * @param {Function}
     * @return DomObserver
     * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
     * @example DomObserver.removeOnNodeChange('elementIdentifier')
     */
    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged$1 = {};
    /**
     * Observer
     * @private
     * @return {MutationObserver}
     */
    (() => {
        if (typeof window !== 'undefined') {
            const callback = (mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        for (const id in executeOnNodeChanged$1) {
                            executeOnNodeChanged$1[id]();
                        }
                    }
                }
            };
            const config = {
                childList: true,
                subtree: true,
            };
            const observer = new MutationObserver(callback);
            observer.observe(document.body, config);
        }
    })();

    // Author Knighttower
    // MIT License
    // [2022] [Knighttower] https://github.com/knighttower
    /**
     * @module DomObserver
     * Detect DOM changes
     * @name DomObserver
     * @param {window} selector
     * @param {Function}
     * @return DomObserver
     * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
     * @example DomObserver.removeOnNodeChange('elementIdentifier')
     */
    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged = {};
    /**
     * Observer
     * @private
     * @return {MutationObserver}
     */
    (() => {
        if (typeof window !== 'undefined') {
            const callback = (mutationList) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'childList') {
                        for (const id in executeOnNodeChanged) {
                            executeOnNodeChanged[id]();
                        }
                    }
                }
            };
            const config = {
                childList: true,
                subtree: true,
            };
            const observer = new MutationObserver(callback);
            observer.observe(document.body, config);
        }
    })();

    // // -----------------------------------------
    // /**
    //  * @knighttower
    //  * @url knighttower.io
    //  * @git https://github.com/knighttower/
    //  */
    // // -----------------------------------------


    /**
     * Converts a given variable to a number if possible.
     * @param {string|number} input - The input variable to convert.
     * @returns {string|number} - The converted number or the original variable.
     * @example convertToNumber(123) // Output: 123 (number)
     * @example convertToNumber(123.45) // Output: 123.45 (number)
     * @example convertToNumber("123") // Output: 123 (number)
     * @example convertToNumber("123.45") // Output: 123.45 (number)
     * @example convertToNumber("abc") // Output: "abc" (original string)
     * @example convertToNumber("123abc") // Output: "123abc" (original string)
     * @example convertToNumber(null) // Output: null (original)
     */
    function convertToNumber(input) {
        const isNum = isNumber(input);

        if (isNum !== null) {
            return isNum;
        }
        // Case: String that cannot be converted to a number
        return input;
    }

    /**
     * Check if there is a value, if not return null or the default value
     * It can test strings, arrays, objects, numbers, booleans
     * @function emptyOrValue
     * @memberof Utility
     * @param {String|Number} value If the value is not empty, returns it
     * @param {String|Number} _default The default value if empty
     * @return mixed
     * @example emptyOrValue('test', 'default') // 'test'
     * @example emptyOrValue('', 'default') // 'default'
     * @example emptyOrValue('test') // 'test'
     * @example emptyOrValue('') // null
     * @example emptyOrValue(0) // 0
     * @example var hello = ''; emptyOrValue(hello) // Null
     * @example var hello = 'test'; emptyOrValue(hello) // 'test'
     * @example var hello = 'test'; emptyOrValue(hello, 'default') // 'test'
     * @example var hello = ''; emptyOrValue(hello, 'default') // 'default'
     * @example var hello = []; emptyOrValue(hello, 'default') // null
     * @example var hello = {}; emptyOrValue(hello, 'default') // null
     * @example var hello = [...]; emptyOrValue(hello') // [...]
     */
    function emptyOrValue(value, _default = null) {
        /**
         * Test sequence:
         * If it is a number 0> : true
         * If is not undefined: true
         * If it is boolean (true|false) prevents going to empty
         * If it is not Empty, [], null, {}, 0, true, false: true
         */

        if (isNumber(value) !== null || typeof value === 'boolean') {
            return value;
        } else if (!isEmpty$1(value)) {
            return value;
        }

        return _default;
    }

    /**
     * Generate unique ids
     * @function getDynamicId
     * @memberof Utility
     * @return string Format kn__000000__000
     */
    function getDynamicId() {
        return 'kn__' + new Date().getTime() + '__' + Math.floor(Math.random() * (999 - 100));
    }

    /**
     * Alias to getDynamicId
     * @function getRandomId
     * @memberof Utility
     * @return string
     * @example getRandomId() // kn__000000__000
     */
    const getRandomId = getDynamicId;

    /**
     * Check if a value is empty
     * @function isEmpty
     * @memberof Utility
     * @param {string|array|object|map|set|number|boolean} value
     * @url https://moderndash.io/
     * @return {string}
     */
    function isEmpty$1(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value === 'string' || Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Map || value instanceof Set) {
            return value.size === 0;
        }

        if (ArrayBuffer.isView(value)) {
            return value.byteLength === 0;
        }

        if (typeof value === 'object') {
            return Object.keys(value).length === 0;
        }

        return false;
    }

    /**
     * Check if is a number or Int, if not return null
     * Integrates both Int and Number, or convert a string number to number to test
     * Note: this is not like Lodash isNumber since this one takes into consideration the 'string number'
     * @function isNumber
     * @memberof Utility
     * @param {String|Number} value
     * @return null|int
     * @example isNumber(123) // true
     * @example isNumber(123.45) // true
     * @example isNumber('123abc') // false
     * @example isNumber('abc') // false
     * @example isNumber('') // false
     * @example isNumber("123") // true
     * @example isNumber("123.45") // true
     */
    function isNumber(value) {
        const isType = typeof value;
        switch (value) {
            case null:
            case undefined:
            case '':
                return null;
            case '0':
            case 0:
                return 0;
            default:
                if (isType === 'number' || isType === 'string') {
                    if (typeof value === 'number' || !Number.isNaN(Number(value))) {
                        return +value;
                    }
                }

                break;
        }

        return null;
    }

    /**
     * Check the type of a variable, and get the correct type for it. It also accepts simple comparisons
     * For more advance type checking see https://github.com/knighttower/JsTypeCheck
     * @param {any} input - The variable to check
     * @param {string} test - The types to check against, piped string
     * @return {string|boolean} - The type of the variable
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello', 'number') // returns false
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello') // returns 'string'
     * @example typeOf({}) // returns 'object'
     */
    function typeOf$1(input, test) {
        // Special case for null since it can be treated as an object
        if (input === null) {
            if (test) {
                return test === null || test === 'null' ? true : false;
            }
            return 'null';
        }

        let inputType;

        switch (typeof input) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'undefined':
            case 'bigint':
            case 'symbol':
            case 'function':
                inputType = typeof input;
                break;
            case 'object':
                inputType = Array.isArray(input) ? 'array' : 'object';

                break;
            default:
                inputType = 'unknown';
        }

        if (test) {
            if (test.includes('|')) {
                for (let type of test.split('|')) {
                    if (inputType === type) {
                        return type;
                    }
                }
                return false;
            }

            return test === inputType;
        }

        return inputType;
    }

    // Author Knighttower
    // MIT License
    // Copyright (c) [2022] [Knighttower] https://github.com/knighttower


    // @private
    function _removeBrackets(strExp) {
        const regex = /^(\[|\{)(.*?)(\]|\})$/; // Match brackets at start and end
        const match = strExp.match(regex);

        if (match) {
            return match[2].trim(); // Extract and trim the content between brackets
        }

        return strExp; // Return the original string if no brackets found at start and end
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
    function cleanStr(str, ...args) {
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
     * Find the last instance of nested pattern with delimeters
     * @function findNested
     * @param {string} str
     * @param {string} start - Delimeter 1
     * @param {string} end - Delimeter 2
     * @return {string|null}
     * @example findNested('[[]hello [world]]', '[', ']') // [world]
     */
    function findNested(str, start = '[', end = ']') {
        if (typeof str !== 'string') {
            return str;
        }
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
     * Converts strings formats into objects or arrays
     * Note: quoted strings are not supported, use getDirectiveFromString instead
     * @param {string} strExp
     * @return {object|array|string}
     * @example getArrObjFromString('[[value,value],value]') // [['value', 'value'], 'value']
     * @example getArrObjFromString('[[value,value],value, { y: hello }, hello]') // [['value', 'value'], 'value', { y: 'hello' }, 'hello']
     * @example getArrObjFromString('{ y: hello, x: world, z: [value,value]}') // { y: 'hello', x: 'world', z: ['value', 'value'] }
     */
    function getArrObjFromString(strExp) {
        // alredy typeof object or array just return it
        if (typeOf$1(strExp, 'object') || typeOf$1(strExp, 'array')) {
            return strExp;
        }
        const isObject = startAndEndWith(strExp, '{', '}');
        const isArray = startAndEndWith(strExp, '[', ']');
        // If it is other type of string, return it
        if (!isObject && !isArray) {
            return strExp;
        }

        const newCollection = isObject ? {} : [];
        const nestedElements = {};

        //remove the brackets
        let newStrExp = _removeBrackets(strExp);

        const loopNested = (objects = false) => {
            // ignore eslint comment
            // eslint-disable-next-line no-constant-condition
            while (true) {
                //find any nested arrays or objects
                let matched = objects ? findNested(newStrExp, '{', '}') : findNested(newStrExp);

                if (!matched) {
                    break;
                }

                //replace the nested array or object with a marker so that we can safely split the string
                let marker = `__${getRandomId()}__`;
                nestedElements[marker] = matched;

                newStrExp = newStrExp.replace(matched, marker);
            }
        };

        loopNested();
        loopNested(true);

        getChunks(newStrExp).forEach((chunk, index) => {
            const isObjectKey = chunk.includes(':') && isObject;
            const chunkParts = isObjectKey ? getChunks(chunk, ':') : [];
            const chunkKey = removeQuotes(emptyOrValue(chunkParts[0], index));
            chunk = isObjectKey ? chunkParts[1] : chunk;
            if (chunk in nestedElements) {
                chunk = getArrObjFromString(nestedElements[chunk]);
            }
            chunk = convertToNumber(removeQuotes(chunk));
            // set back in the collection either as an object or array
            isObject ? (newCollection[chunkKey] = chunk) : newCollection.push(chunk);
        });
        // uncomment to debug
        // console.log('___ log ___', newCollection);
        return newCollection;
    }
    /**
     * Splits a string into chunks by a given splitter and cleans the chunks
     * @param {string} str
     * @param {string} splitter - The string/character to split the string by. Defaults to ','
     * @return {string|array}
     */
    function getChunks(str, splitter = ',') {
        if (typeof str !== 'string') {
            return str;
        }
        if (isEmpty$1(str)) {
            return [];
        }
        str = cleanStr(str);
        let chunks = str.split(splitter).map((t) => cleanStr(t));
        return chunks.length === 1 && chunks[0] === '' ? [str] : chunks;
    }

    /**
     * Remove quotes from a string
     * @function removeQuotes
     * @param {String} str
     * @return {String}
     * @example removeQuotes('"hello"') // hello
     * @example removeQuotes("'hello'") // hello
     */
    function removeQuotes(str) {
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
    function startAndEndWith(strExp, start = null, end = null) {
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
    function setExpString(exp) {
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

    // // -----------------------------------------
    // /**
    //  * @knighttower
    //  * @url knighttower.io
    //  * @git https://github.com/knighttower/
    //  */
    // // -----------------------------------------


    /**
     * Check if a value is empty
     * @function isEmpty
     * @memberof Utility
     * @param {string|array|object|map|set|number|boolean} value
     * @url https://moderndash.io/
     * @return {string}
     */
    function isEmpty(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value === 'string' || Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Map || value instanceof Set) {
            return value.size === 0;
        }

        if (ArrayBuffer.isView(value)) {
            return value.byteLength === 0;
        }

        if (typeof value === 'object') {
            return Object.keys(value).length === 0;
        }

        return false;
    }

    /**
     * Check the type of a variable, and get the correct type for it. It also accepts simple comparisons
     * For more advance type checking see https://github.com/knighttower/JsTypeCheck
     * @param {any} input - The variable to check
     * @param {string} test - The types to check against, piped string
     * @return {string|boolean} - The type of the variable
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello', 'number') // returns false
     * @example typeOf('hello', 'string') // returns true
     * @example typeOf('hello') // returns 'string'
     * @example typeOf({}) // returns 'object'
     */
    function typeOf(input, test) {
        // Special case for null since it can be treated as an object
        if (input === null) {
            if (test) {
                return test === null || test === 'null' ? true : false;
            }
            return 'null';
        }

        let inputType;

        switch (typeof input) {
            case 'number':
            case 'string':
            case 'boolean':
            case 'undefined':
            case 'bigint':
            case 'symbol':
            case 'function':
                inputType = typeof input;
                break;
            case 'object':
                inputType = Array.isArray(input) ? 'array' : 'object';

                break;
            default:
                inputType = 'unknown';
        }

        if (test) {
            if (test.includes('|')) {
                for (let type of test.split('|')) {
                    if (inputType === type) {
                        return type;
                    }
                }
                return false;
            }

            return test === inputType;
        }

        return inputType;
    }

    // typeOf is used here insteand of the native typeof because it can handle better the identifications of arrays and objects

    const typesMap = new Map([
        ['array', (_var_) => typeOf(_var_, 'array')],
        ['bigInt', (_var_) => typeof _var_ === 'bigint'],
        ['boolean', (_var_) => typeof _var_ === 'boolean'],
        ['date', (_var_) => _var_ instanceof Date],
        ['float', (_var_) => typeof _var_ === 'number' && !Number.isInteger(_var_)],
        ['function', (_var_) => typeof _var_ === 'function'],
        ['int', (_var_) => Number.isInteger(_var_)],
        ['map', (_var_) => _var_ instanceof Map],
        ['null', (_var_) => _var_ === null],
        ['number', (_var_) => typeof _var_ === 'number'],
        ['object', (_var_) => typeOf(_var_, 'object')],
        ['promise', (_var_) => _var_ instanceof Promise],
        ['regExp', (_var_) => _var_ instanceof RegExp],
        ['set', (_var_) => _var_ instanceof Set],
        ['string', (_var_) => typeof _var_ === 'string'],
        ['symbol', (_var_) => typeof _var_ === 'symbol'],
        ['undefined', (_var_) => typeof _var_ === 'undefined'],
        ['weakMap', (_var_) => _var_ instanceof WeakMap],
        ['weakSet', (_var_) => _var_ instanceof WeakSet],
    ]);

    //  type definitions

    // =========================================
    // --> STORAGE
    // --------------------------
    // Cache storage for tests
    const cachedTests = new Map();
    const cachedPipedTypes = new Map();

    // =========================================
    // --> Utility functions
    // --------------------------

    /**
     * If the type is a union type, split it and return the tests for each type
     * @param {string} str
     * @return {array} tests
     */
    function getPipedTypes(str) {
        if (cachedPipedTypes.has(str)) {
            return cachedPipedTypes.get(str);
        }
        return str.split('|').reduce((testsForKey, t) => {
            let itCanBeNull = false;
            let type = t.trim();

            if (type.endsWith('?')) {
                type = type.slice(0, -1);
                itCanBeNull = true;
            }
            // lookup the test for the type and add it to the testsForKey array
            const typeObj = typesMap.get(type);
            const test = typeObj ?? isNoType(type);
            if (test) {
                testsForKey.push(test);
            }
            // for optional types, add the tests for null and undefined
            if (itCanBeNull) {
                testsForKey.push(typesMap.get('null'), typesMap.get('undefined'));
            }
            cachedPipedTypes.set(str, testsForKey);
            return testsForKey;
        }, []);
    }

    /**
     * Get the tests for a type
     * @param {string} type
     * @return {function[]} tests
     * @throws {Error} if type is not supported
     */
    function isNoType(type) {
        throw new Error(`Type Error: "${type}" is not supported`);
    }

    /**
     * Determine the type of the expression
     * @param {any} strExp
     * @return {string}
     */
    function determineMethod(strExp) {
        if (typeOf(strExp, 'array') || typeOf(strExp, 'object')) {
            return typeOf(strExp);
        }
        const __str = strExp.trim();
        if (startAndEndWith(__str, '[', ']')) {
            return 'array';
        }
        if (startAndEndWith(__str, '{', '}')) {
            return 'object';
        }
        return 'basic';
    }

    // =========================================
    // --> Handlers for different types
    // --------------------------

    /**
     * Basic single types
     * @param {string} typeStr
     * @return {object} tests
     */
    const basicTypes = (typeStr) => {
        return getPipedTypes(typeStr);
    };

    /**
     * Handle array types
     * @param {string} strExp
     * @return {array} tests
     */
    const arrayTypes = (strExp) => {
        const testUnit = [];
        const convertedObj = getArrObjFromString(strExp);

        convertedObj.forEach((test) => {
            testUnit.push(testBuilder(test));
        });
        return testUnit;
    };

    /**
     * Handle object types
     * @param {string} strExp
     * @return {object} tests
     */
    const objectTypes = (strExp) => {
        return new (class handleObjects {
            constructor() {
                this.testUnit = new Map([
                    ['tests', new Map()],
                    ['optionalKeys', []],
                    ['testFew', []],
                    ['testAllAny', false],
                    ['testOnly', false],
                ]);

                return this.handleObject();
            }

            checkOptionalKey(key) {
                if (key.endsWith('?')) {
                    key = key.slice(0, -1);
                    this.testUnit.get('optionalKeys').push(key);
                }
                return key;
            }

            checkTheAnyKey(obj) {
                if ('any' in obj) {
                    const keys = Object.keys(obj);
                    if (keys.length === 1) {
                        this.testUnit.set('testAllAny', true);
                    } else {
                        this.testUnit.set(
                            'testFew',
                            keys.filter((key) => key !== 'any')
                        );
                    }
                }
            }

            handleObject() {
                const convertedObj = getArrObjFromString(strExp);
                this.checkTheAnyKey(convertedObj);
                for (const key in convertedObj) {
                    const cleanKey = this.checkOptionalKey(key);
                    const value = convertedObj[key];

                    if (value === '...') {
                        delete convertedObj[key];
                        this.testUnit.set('testOnly', true);
                        continue;
                    }

                    this.testUnit.get('tests').set(cleanKey, testBuilder(value));
                }

                return this.testUnit;
            }
        })();
    };

    /**
     * Build the test unit
     * @param {any} strExp String expression
     * @return {object} testUnit
     * @throws {Error} if type is not supported
     * @example testBuilder('number') // returns {testMethod: 'basic', tests: [function]}
     * @example testBuilder('[number]') // returns {testMethod: 'array', tests: [[function]]}
     * @example testBuilder('{any: number}') // returns {testMethod: 'object', tests: {any: [function]}}
     * @usage See more cases in the 'type-pattern.txt' file
     */
    function testBuilder(strExp) {
        if (cachedTests.has(strExp)) {
            return cachedTests.get(strExp);
        }
        let testUnit = new Map([
            ['testMethod', determineMethod(strExp)],
            ['tests', null],
        ]);

        switch (testUnit.get('testMethod')) {
            case 'basic':
                testUnit.set('tests', basicTypes(strExp));
                break;
            case 'array':
                testUnit.set('tests', arrayTypes(strExp));
                break;
            case 'object':
                /* eslint-disable-next-line */
                const objTypes = objectTypes(strExp);
                testUnit = new Map([...testUnit, ...objTypes]);
                break;
            default:
                isNoType(strExp);
        }

        cachedTests.set(strExp, testUnit);
        return testUnit;
    }

    // Error collectot
    const typeErrorLogs = [];
    // Setting cache
    const cachedSettings = new Map();

    const runBasicTest = (inputVal, tests) => {
        return tests.some((test) => {
            const testResult = test(inputVal);

            if (!testResult) {
                pushToErrorLogs(inputVal, tests);
            }
            return testResult;
        });
    };

    const runArrayTest = (inputVal, tests) => {
        // If the input is not an array, return false
        if (!typeOf(inputVal, 'array') || inputVal.length === 0) {
            return false;
        }
        // Else, test each value in the array
        return tests.every((test, index) => {
            // console.log('is array: ', inputVal[index], test);
            return runRouteTest(inputVal[index], test);
        });
    };

    class HandleObjects {
        constructor(inputVal, unitTest) {
            // Extract all properties at once
            const { testOnly, testFew, testAllAny, optionalKeys, tests } = [...unitTest.entries()].reduce(
                (acc, [key, value]) => ({ ...acc, [key]: value }),
                {}
            );
            // Use destructured variables
            this.testUnitKeys = [...tests.keys()];
            this.testOnly = testOnly;
            this.testFew = testFew;
            this.testAllAny = testAllAny;
            this.optionalKeys = optionalKeys;
            this.testCollection = tests;
            // the input object to test
            this.inputObject = inputVal;
        }

        handleUnitTest() {
            switch (true) {
                case this.testAllAny:
                    // '{any: type}' // any key
                    return this.testObjAllAny();
                case !isEmpty(this.testFew):
                    // '{key1: type, any: type}'; // specific key, and all other "any"
                    // test the testFew fist so that we can remove them from the inputObject
                    /* eslint-disable-next-line */
                    const testFewResults = this.testObjFew();
                    // remove the testFew from the inputObject
                    this.filterOutFew();
                    return testFewResults && this.testObjAllAny();
                case !isEmpty(this.optionalKeys):
                    // '{key1?: type, key2?: type}'; // optional keys
                    // test the optionalKeys fist so that we can remove them from the inputObject
                    /* eslint-disable-next-line */
                    const optionalKeysResults = this.testObjOptionalKeys();
                    // remove the optionalKeys from the inputObject
                    this.filterOutOptionalKeys();
                    return optionalKeysResults && this.defaultTest();
                case !this.testOnly:
                    // '{key1: type, key2: type}'; // all keys
                    for (const k in this.inputObject) {
                        if (!this.testCollection.has(k)) {
                            pushToErrorLogs(
                                this.inputObject,
                                `Key: "${k}" not found in the test collection, or use the "any" (any:[type]) key test or "..." after the last key in the test collection {key1: type, key2: type, ...} to only test a few keys.`
                            );
                            return false;
                        }
                    }
                    // when testOnly, it will bypass this and check only those found in the test collection
                    // even if the test value has more keys
                    break;
            }

            return this.defaultTest();
        }

        filterOutOptionalKeys() {
            this.testUnitKeys = this.testUnitKeys.filter((item) => !this.optionalKeys.includes(item));
        }

        filterOutFew() {
            this.inputObject = Object.fromEntries(
                Object.entries(this.inputObject).filter(([key]) => !this.testFew.includes(key))
            );
        }

        testObjOptionalKeys() {
            return this.optionalKeys.every((key) => {
                const test = this.testCollection.get(key);
                const testValue = this.inputObject[key];
                return !testValue ? true : runRouteTest(testValue, test);
            });
        }

        testObjFew() {
            return this.testFew.every((key) => {
                const test = this.testCollection.get(key);
                const testValue = this.inputObject[key];

                return runRouteTest(testValue, test);
            });
        }

        testObjAllAny() {
            const testValues = Object.values(this.inputObject);
            if (testValues.length === 0) {
                return runRouteTest(null, this.testCollection.get('any'));
            }
            return testValues.every((value) => {
                return runRouteTest(value, this.testCollection.get('any'));
            });
        }

        defaultTest() {
            return this.testUnitKeys.every((key) => {
                const test = this.testCollection.get(key);
                const testValue = this.inputObject[key];
                return runRouteTest(testValue, test);
            });
        }
    }

    const runObjectTest = (inputVal, unitTest) => {
        if (!typeOf(inputVal, 'object')) {
            return false;
        }
        return new HandleObjects(inputVal, unitTest).handleUnitTest();
    };

    function runRouteTest(inputVal, unitTest) {
        const testMethod = unitTest.get('testMethod');
        const tests = unitTest.get('tests');

        switch (testMethod) {
            case 'basic':
                return runBasicTest(inputVal, tests);
            case 'array':
                return runArrayTest(inputVal, tests);
            case 'object':
                return runObjectTest(inputVal, unitTest); // No change here as the entire Map is passed
            default:
                return false;
        }
    }

    /**
     * Get settings either from an object or a string keyword.
     * @param {Object | string} input - The settings object or keyword for predefined settings.
     * @return {object | null} - The settings object.
     */
    function getSettings(input) {
        if (input) {
            if (cachedSettings.has(input)) {
                return cachedSettings.get(input);
            }
            // Check if input is an object
            const type = typeof input;
            let _val = null;
            switch (type) {
                case 'function':
                    _val = { callback: input };
                    break;
                case 'object':
                    _val = input;
                    break;
                case 'string':
                    switch (input) {
                        case 'log':
                            _val = { log: true };
                            break;
                        case 'fail':
                            _val = { fail: true };
                            break;
                        case 'return':
                            _val = { return: true };
                            break;
                        case 'validOutput':
                            _val = { validOutput: input };
                            break;
                    }
                    break;
            }
            cachedSettings.set(input, _val);
            return _val;
        }

        return {
            log: false,
            fail: false,
            return: false,
            validOutput: false,
            callback: null,
        };
    }

    /**
     * Throw an error with the last typeErrorLogs
     */
    function typeError(inputVal) {
        const errorLog = typeErrorLogs[typeErrorLogs.length - 1];

        console.log('\n::::::::::::: Type error or not valid ::::::::::::::');
        console.log('Input Value used: ', inputVal);
        console.log('---> Value Found:', errorLog.found);
        console.log('---> Test Permormed:', errorLog.tests);
        //clean the array of error logs
        typeErrorLogs.length = 0;
        throw new Error(
            `\n\n---------------------\nTypeCheck Error --->\n\n The value must not be of type (Type found) = "${errorLog.found}". \n\n The Type used is invalid for value: "${errorLog.value}". \n\n see logged error for details\n---------------------\n\n`
        );
    }

    function pushToErrorLogs(inputVal, tests) {
        typeErrorLogs.push({
            value: JSON.stringify(inputVal),
            tests: JSON.stringify(tests),
            found: typeOf(inputVal),
        });
    }

    /**
    * _TypeCheck
    * @param {any} inputVal
    * @param {string} typeExp
    * @param {object | string} params Parameters for the typeCheck function. 
    * @return {bool | any} TypeChecker By default it returns boolean, but if '.return()' is used it will return the inputVal
    * @example typeCheck(1, 'number') // true
    * @example typeCheck([1], '[number]') // true
    * @example typeCheck({x: 1, y: 2}, '{any: number}') // true
    * @example typeCheck({ x: 'string', y: 10 }, '{y: number, x: string}', ($this) => {
            console.log('__testLogHere__', $this);
        }) // using call back function
    * @usage (anyInputValue, stringTypeExpression, params: object | string)
    * @usage params: object = { log: boolean, fail: boolean, callback: function }
    * @usage params: string = 'log' | 'fail' | callback: function
    * @usage chain Methods: log(), fail(), return() // returns the input value, test() returns the boolean
    * @notes This function cannot validate the return value of a function when the validOutput is provided, use _tcx instead
    * Params: log = true ; // logs the testData
    * Params: fail = true ; // throws an error when the test fails
    * Params: return = true ; // returns the inputVal
    * Params: callback = function ; // callback function
    * @see testUnit for more examples and test cases   
    */
    const _typeCheck = (inputVal, typeExp, params) => {
        return new (class {
            constructor() {
                this.unitTest = testBuilder(typeExp);
                this.testResult = runRouteTest(inputVal, this.unitTest);
                this.bool = this.testResult;
                this.settings = getSettings(params);
                this.callback = this.settings.callback ?? null;
                this.testData = {
                    typeExp,
                    inputVal,
                    inputType: typeOf(inputVal),
                    callback: this.callback,
                    unitTest: this.unitTest,
                    testResult: this.testResult,
                };
                if (this.settings.log) {
                    this.log();
                }

                if (this.settings.fail) {
                    this.fail();
                }

                if (this.callback) {
                    this.callback(this.testData);
                }
            }
            test() {
                return this.testResult;
            }
            log() {
                console.log('-------------------------- \n ::: Test Data Info :::');
                console.table(this.testData);
                return this;
            }
            fail() {
                if (!this.testResult) {
                    this.log();
                    this.settings?.error && console.log('\n\n-----> Error Message: ', this.settings.error);
                    return typeError(inputVal);
                }
                return this;
            }
            return() {
                return inputVal;
            }
        })();
    };

    /**
     * Test the type but does not throw an error, althought it can use the rest of the chain methods
     * @param {any} inputVal
     * @param {string} typeExp
     */
    const validType = (inputVal, typeExp) => {
        return _typeCheck(inputVal, typeExp).test();
    };

    // author Knighttower
    //  MIT License
    //  Copyright (c) [2022] [Knighttower] https://github.com/knighttower

    /**
     * @module Teleport
     * Teleport an element to another place in the DOM before, inside or after a target
     * @param {Object|String} props || selector - props object (domElement: element, adaptiveId: null|uniqueId})
     * @example new Teleport({domElement: element, adaptiveId: uniqueId}).beam({to: selector})
     * @example new Teleport(domElement).beam({after: selector})
     * @example new Teleport(domElement).beam({before: selector})
     * @example new Teleport(domElement).beam(selector) // defaults to "to" which is inside the selector
     * @example const eleTeleport = new Teleport(domElement) // returns the object with eleTeleport{beam(String|Object), back(), cancel()}
     * @example Make it global so that is available in the browser and works as a 'window' library
     *   TeleportGlobal()
     *      - <div data-teleport="selector"></div>
     *      - <div data-teleport="{before: 'selector'}"></div>
     *     - <div data-teleport="{after: 'selector'}"></div>
     * @feature If the target (element where it will be sent to) is not in the DOM it will wait until it is and then it will beam the element
     * @return {Object} Teleport object
     */
    class Teleport {
        /**
         * Constructor
         * @param {String|Object} selector || props object (see AdaptiveElement)
         * @return {Object}
         */
        constructor(props) {
            // Early exit if no props are provided
            if (!validType(props, 'string|object')) {
                return;
            }

            this.props = props;
            if (!this.props.adaptiveId) {
                const element = selectElement(this.props);
                const attrId = element.getAttribute('data-adaptive-id') ?? null;
                // If adaptiveId is not present, create or retrieve it
                const uniqueId = attrId || element.getHash();
                if (!attrId) {
                    element.domElement.setAttribute('data-adaptive-id', uniqueId);
                }

                // Update props with additional properties
                this.props = Object.assign({}, this.props, {
                    adaptiveId: uniqueId,
                    helper: element,
                    domElement: element.domElement,
                    xpath: element.getXpathTo(),
                });
            }

            let placeholder = selectElement(`[name="adaptive"][value="${this.props.adaptiveId}"`);
            if (!placeholder.isInDom()) {
                placeholder = document.createElement('param');
                placeholder.name = 'adaptive';
                placeholder.value = this.props.adaptiveId;
                this.props.domElement.insertAdjacentElement('beforebegin', placeholder);
            }
        }

        /**
         * Beam the element to another place in the DOM
         * This method will look for the "tagert" element if it is in the DOM and it will querying the DOM until it finds it
         * if the target is not found call the cancel() method to stop the observer
         * @param {String|Object} target (selector) directive defaults to "to" || {to|after|before: target}
         * @example new Teleport(domElement).beam({after: selector})
         * @example domElement.beam({after: selector})
         */
        beam(settings) {
            settings = getDirectivesFromString(settings).directive;

            // Transform settings to an array format
            switch (typeOf$2(settings)) {
                case 'string':
                    settings = ['default', settings];
                    break;
                case 'object':
                    // eslint-disable-next-line no-case-declarations
                    const key = Object.keys(settings)[0];
                    settings = [key, settings[key]];
                    break;
                case 'array':
                    if (settings.length === 1) {
                        settings = ['default', settings[0]];
                    }
                    break;
            }

            const [direction, selector] = settings;
            const target = selectElement(selector);
            let position = 'beforeend';

            switch (direction) {
                case 'before':
                    position = 'beforebegin';
                    break;
                case 'after':
                    position = 'afterend';
                    break;
            }

            if (target.isInDom()) {
                target.domElement.insertAdjacentElement(position, this.props.domElement);
                return;
            }

            // Add observer if the target is not in the DOM
            DomObserver$1.addOnNodeChange(this.props.adaptiveId, () => {
                const observedTarget = selectElement(selector);
                if (observedTarget.isInDom()) {
                    observedTarget.domElement.insertAdjacentElement(position, this.props.domElement);
                    DomObserver$1.removeOnNodeChange(this.props.adaptiveId);
                }
            });
        }

        /**
         * Return to its original place
         * @example new Teleport(domElement).back()
         * @example domElement.back()
         */
        back() {
            let target = selectElement(`[name="adaptive"][value="${this.props.adaptiveId}"`);
            if (target.isInDom()) {
                target.domElement.insertAdjacentElement('afterend', this.props.domElement);
                // target.domElement.remove();
            }
        }

        /**
         * If element target is no it the DOM and needs to cancel the observer
         * @example new Teleport(domElement).cancel()
         * @example domElement.cancel()
         */
        cancel() {
            DomObserver$1.removeOnNodeChange(this.props.adaptiveId);
        }
    }

    // Storage
    let TeleportIsGlobal = false;

    /**
     * Warning, this will make it global and would work with data attr like data-teleport
     * @example new Teleport().global()
     */
    function TeleportGlobal() {
        // Exit if already initialized
        if (TeleportIsGlobal) {
            return;
        }

        // Use forEach directly on NodeList
        document.querySelectorAll('[data-teleport]').forEach((element) => {
            new Teleport(element).beam(element.getAttribute('data-teleport'));
        });

        // Mark as initialized
        TeleportIsGlobal = true;
    }

    exports.Teleport = Teleport;
    exports.TeleportGlobal = TeleportGlobal;
    exports.default = Teleport;
    exports.teleport = Teleport;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});

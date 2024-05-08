'use strict';

let listeners = {};
class EventBus {
    constructor() {
        // cleanup
        listeners = {};
    }
    // creates an event that can be triggered any number of times
    /**
     * creates an event that can be triggered any number of times
     * @method on
     * @param {string} eventName - The name of the event
     * @param {function} callback - The callback to execute
     * @return {void}
     * @example eventBus.on('event.name', function() { console.log('event.name was triggered') })
     */
    on(eventName, callback) {
        this.registerListener(eventName, callback);
    }
    /**
     * creates an event that can be triggered only once. If it is emitted twice, the callback will only be executed once!
     * @method once
     * @param {string} eventName - The name of the event
     * @param {function} callback - The callback to execute
     * @return {void}
     * @example eventBus.once('event.name', function() { console.log('event.name was triggered only once') })
     */
    once(eventName, callback) {
        this.registerListener(eventName, callback, 1);
    }
    /**
     * reates an event that can be triggered only a number of times. If it is emitted more than that, the callback will not be be executed anymore!
     * @method exactly
     * @param {string} eventName - The name of the event
     * @return {void}
     * @example eventBus.exactly('event.name', function() { console.log('event.name was triggered 3 times') }, 3)
     */
    exactly(eventName, callback, capacity) {
        this.registerListener(eventName, callback, capacity);
    }
    /**
     * kill an event with all it's callbacks
     * @method off
     * @param {string} eventName - The name of the event
     * @return {void}
     * @example eventBus.off('event.name')
     */
    off(eventName) {
        delete listeners[eventName];
    }
    /**
     * removes the given callback for the given event
     * @method detach
     * @param {string} eventName - The name of the event
     * @param {function} callback - The callback to remove
     * @return {void|boolean} - Returns true if the event was found and removed, void otherwise
     * @example eventBus.detach('event.name', callback)
     */
    detach(eventName, callback) {
        const listenersRecords = listeners[eventName] || [];
        const filteredListeners = listenersRecords.filter(function (value) {
            return value.callback !== callback;
        });
        if (eventName in listeners) {
            listeners[eventName] = filteredListeners;
            return true; // Event was found and removed
        }
        return false; // Event was not found
    }

    /**
     * emits an event with the given name and arguments
     * @param {string} eventName - The name of the event
     * @param {any} args - The arguments to pass to the callback
     * @return {void}
     * @use {__context: this|Instance} to pass the context to the callback
     * @example eventBus.emit('event.name', arg1, arg2, arg3)
     * @example eventBus.emit('event.name', arg1, arg2, arg3, {__context: YourInstance})
     */
    emit(eventName, ...args) {
        let queueListeners = [];
        let matches = null;
        const allArgs = this.extractContextFromArgs(args);
        const context = allArgs[0];
        args = allArgs[1];

        // name exact match
        if (this.hasListener(eventName)) {
            queueListeners = listeners[eventName];
        } else {
            // -----------------------------------------
            // Wildcard support
            if (eventName.includes('*')) {
                // case 1, if the incoming string has * or ** in it
                // Matches the emit 'eventName' to the registered 'on' listeners
                matches = this.patternSearch(eventName, Object.keys(listeners));

                if (matches.length > 0) {
                    matches.forEach((match) => {
                        queueListeners = queueListeners.concat(listeners[match]);
                    });
                }
            } else {
                // case 2, if the incoming string does not have * or ** in it
                // get the patterns from the listeners (on method) and match them to the emit name
                for (const key in listeners) {
                    if (key.includes('*')) {
                        matches = this.patternSearch(key, [eventName]);
                        if (matches) {
                            queueListeners = queueListeners.concat(listeners[key]);
                        }
                    }
                }
            }
        }

        queueListeners.forEach((listener, k) => {
            let callback = listener.callback;
            if (context) {
                callback = callback.bind(context);
            }
            if (listener.triggerCapacity !== undefined) {
                listener.triggerCapacity--;
                queueListeners[k].triggerCapacity = listener.triggerCapacity;
            }
            if (this.checkToRemoveListener(listener)) {
                listeners[eventName].splice(k, 1);
            }
            callback(...args);
        });
    }
    /**
     * Search for a pattern in a list of strings
     * @method patternSearch
     * @private
     * @param {string} pattern - The pattern to search for
     * @param {string[]} list - The list of strings to search in
     * @return {string[]|null} - Returns a list of strings that match the pattern, or null if no match is found
     * @example patternSearch('name.*', ['name.a', 'name.b', 'name.c']) // returns ['name.a', 'name.b', 'name.c']
     */
    patternSearch(pattern, list) {
        let filteredList = [];
        // console.log('__testLogHere__', pattern, this.setWildCardString(pattern));
        const regex = new RegExp(this.setWildCardString(pattern), 'g');

        filteredList = list.filter((item) => regex.test(item));
        return filteredList.length === 0 ? null : filteredList;
    }
    setWildCardString(string) {
        // eslint-disable-next-line
        let regexStr = string.replace(/([.+?^${}()|\[\]\/\\])/g, '\\$&'); // escape all regex special chars
        // eslint-disable-next-line
        regexStr = regexStr.replace(/\*/g, '(.*?)');
        return `^${regexStr}`;
    }
    /**
     * Extract the context from the arguments
     * @method extractContextFromArgs
     * @private
     * @param {any[]} args - The arguments to extract the context from
     * @return {any[]} - Returns an array with the context as the first element and the arguments as the second element
     */
    extractContextFromArgs(args) {
        let context = null;
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            // eslint-disable-next-line
            if (arg && typeof arg === 'object' && arg.hasOwnProperty('__context')) {
                context = arg.__context;
                args.splice(i, 1);
                break;
            }
        }
        return [context, args];
    }
    registerListener(eventName, callback, triggerCapacity) {
        if (!this.hasListener(eventName)) {
            listeners[eventName] = [];
        }
        listeners[eventName].push({ callback, triggerCapacity });
    }
    checkToRemoveListener(eventInformation) {
        if (eventInformation.triggerCapacity !== undefined) {
            return eventInformation.triggerCapacity <= 0;
        }
        return false;
    }
    hasListener(eventName) {
        return eventName in listeners;
    }
    global() {
        return _eventBus();
    }
}

function _eventBus() {
    // support for browser
    if (typeof window !== 'undefined') {
        if (!window.eventBus) {
            window.eventBus = new EventBus();
        }
        return window.eventBus;
    }
    if (typeof global !== 'undefined') {
        if (!global.eventBus) {
            global.eventBus = new EventBus();
        }
        return global.eventBus;
    }
    // if none of the above is available, return a new instance
    return new EventBus();
}

// // -----------------------------------------
// /**
//  * @knighttower
//  * @url knighttower.io
//  * @git https://github.com/knighttower/
//  */
// // -----------------------------------------


/**
 * Make sure the the item is an array or convert it to an array
 * @function makeArray
 * @param {String|Array} item
 * @return array
 * @example makeArray('test') // ['test']
 */
const makeArray = (item) => (Array.isArray(item) ? item : [item]);

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

/**
 * @class promisePool
 * @description Class to manage a pool of promises with status tracking.
 * @methods
 * add: Adds a promise to the pool and sets up handling for resolution.
 * status: Returns the overall status of the promise pool.
 * isDone: Returns true if the pool is done processing all promises.
 * clear: Clears all promises from the pool.
 * @returns {Object} An instance of the promisePool class.
 * @example
 * const pool = promisePool();
 * pool.add(fetch('https://jsonplaceholder.typicode.com/todos/1'));
 * pool.add(fetch('https://jsonplaceholder.typicode.com/todos/2'));
 * pool.status(); // 'in-progress'
 * pool.on('completed', () => {});
 * pool.on('rejected', (rejectedPromises) => {});
 * pool.on('stats', ({ completed, rejected, pending, total }) => {});
 */
const promisePool = () => {
    let _status = 'in-progress'; // 'in progress' or 'done'
    let promises = {};
    let rejectedPromises = [];

    return new (class extends EventBus {
        constructor() {
            super();
        }
        /**
         * Adds a promise to the pool and sets up handling for resolution.
         * @param {Promise|Array} promise The promise to add to the pool.
         */
        add(promise) {
            const isValidPromise = (() => {
                if (promise instanceof Promise) {
                    return true;
                }
                if (Array.isArray(promise)) {
                    return promise.length > 0 && promise.every((item) => item instanceof Promise);
                }
                return false;
            })();

            if (!isValidPromise) {
                if (typeOf(promise, 'function')) {
                    promise = new Promise(async (resolve) => {
                        const fx = await promise();
                        resolve(fx);
                    });
                } else {
                    console.error('---> Invalid promise added to the pool.');
                    rejectedPromises.push(promise);
                    return this.emit('fail', promise.toString());
                }
            }

            const $this = this;
            const promiseCollection = makeArray(promise);
            promiseCollection.forEach((promise) => {
                const promiseBag = Promise.all([promise]);
                const promiseId = getDynamicId();
                promises[promiseId] = {
                    promiseBag,
                    status: 'in-progress',
                };
                promiseBag
                    .then(() => {
                        promises[promiseId].status = 'completed';
                        $this._updateStatus();
                    })
                    .catch(() => {
                        promises[promiseId].status = 'rejected';
                        $this._updateStatus();
                    });
            });
        }

        /**
         * Returns the overall status of the promise pool.
         * @returns {String} The current status of the pool.
         */
        status() {
            return _status;
        }

        isDone() {
            return _status === 'done';
        }

        _updateStatus() {
            if (_status === 'done') {
                return;
            }

            const instances = Object.values(promises);
            instances.forEach((promise) => {
                if (promise.status === 'rejected') {
                    rejectedPromises.push(promise);
                }
            });

            const statuses = instances.every(
                (promise) => promise.status === 'completed' || promise.status === 'rejected'
            );

            _status = statuses ? 'done' : 'in-progress';

            const stats = {
                completed: instances.filter((promise) => promise.status === 'completed').length,
                rejected: rejectedPromises.length,
                pending: instances.filter((promise) => promise.status === 'in-progress').length,
                total: instances.length,
            };
            this.emit('stats', stats);

            if (_status === 'done') {
                this.emit('completed', stats);
                this.emit('rejected', rejectedPromises);
                this.clear();
            }
        }

        /**
         * Clears all promises from the pool.
         */
        clear() {
            promises = {};
            rejectedPromises = [];
        }
    })();
};

/**
 * @class PromiseQueue
 * Class to manage a queue of promises, executing them sequentially with status tracking for each promise.
 * @extends EventBus
 * @methods
 * add: Adds a promise to the queue and starts the queue processing if not already started.
 * clear: Clears the promise queue.
 * status: Returns the current status of all promises in the queue.
 * @returns {Object} An instance of the PromiseQueue class.
 * @example
 * const queue = new PromiseQueue();
 * queue.add(fetch('https://jsonplaceholder.typicode.com/todos/1'));
 * queue.add(fetch('https://jsonplaceholder.typicode.com/todos/2'));
 * queue.status(); // 'in-progress'
 * queue.on('completed', () => {});
 */
const promiseQueue = () => {
    return new (class extends EventBus {
        constructor() {
            super();
            this.queue = [];
            this.inProgress = false;
            this._timer = null;
        }

        /**
         * Adds a promise to the queue and starts the queue processing if not already started.
         * @param {Promise} promiseFunction A function that returns a promise.
         */
        add(promise) {
            const isValidPromise = (() => {
                if (promise instanceof Promise) {
                    return true;
                }
                if (Array.isArray(promise)) {
                    return promise.length > 0 && promise.every((item) => item instanceof Promise);
                }
                return false;
            })();

            if (!isValidPromise) {
                if (typeOf(promise, 'function')) {
                    promise = new Promise(async (resolve) => {
                        const fx = await promise();
                        return resolve(fx);
                    });
                } else {
                    console.error('---> Invalid promise added to the Queue:', promise.toString());
                    return this.emit('fail', promise.toString());
                }
            }

            makeArray(promise).forEach((promiseFunction) => {
                this.queue.push({
                    promiseFunction,
                    status: 'pending', // 'pending', 'fulfilled', or 'rejected'
                });
            });

            if (!this.inProgress) {
                this._next();
            }
            this._setTimer();
        }

        /**
         * Clears the promise queue.
         */
        clear() {
            this.queue = [];
        }

        _setTimer() {
            if (this._timer) {
                clearInterval(this._timer);
            }
            this._timer = setInterval(() => {
                if (this.status() === 'done') {
                    this.emit('completed');
                    clearInterval(this._timer);
                    this._timer = null;
                }
            }, 10);
        }

        /**
         * Processes the next promise in the queue, if any.
         * @private
         */
        _next() {
            if (this.queue.length === 0) {
                this.inProgress = false;
                return;
            }

            this.inProgress = true;
            const { promiseFunction } = this.queue[0];
            promiseFunction
                .then(() => {
                    this.queue[0].status = 'fulfilled';
                })
                .catch(() => {
                    this.queue[0].status = 'rejected';
                })
                .finally(() => {
                    this.queue.shift(); // Remove the processed promise from the queue
                    this._next(); // Process the next promise
                });
        }

        /**
         * Returns the current status of all promises in the queue.
         * @returns {Array<Object>} An array of objects with the status of each promise.
         */
        status() {
            return this.queue.length === 0 ? 'done' : 'in-progress';
        }
    })();
};

/**
 * Creates a poll function that continuously calls a given function until it returns true or a promise resolves.
 * @param {Function} fn - The function to be polled. It can return a promise or a boolean.
 * @param {Object} options - Configuration options for polling.
 * @param {number} [options.interval=200] - The interval in milliseconds between each poll.
 * @param {number} [options.timeout=1000] - The maximum time in milliseconds to continue polling.
 * @returns {Object} { promise, stop } - An object containing the polling promise and a cancel function.
 * @fails returns 'failed' if the polling times out or is cancelled.
 * @options: {}
 * - interval: The interval in milliseconds between each poll.
 * - timeout: The maximum time in milliseconds to continue polling.
 * @example
 * const { promise, stop } = doPoll(() => {
 *    // Polling logic here
 *   return true; // or return a promise
 * }
 */
const doPoll = (fn, options = {}) => {
    if (typeof fn !== 'function') {
        throw new Error('doPoll: The first argument must be a function.');
    }
    const {
        interval = 200,
        timeout = 1000,
        timeoutMsg = '===> doPoll: cancelled or timed out.',
    } = options;
    let timeoutId, intervalId;
    let resolvePromise, rejectPromise;
    let stopped = false;

    const stop = () => {
        clearTimers();
        rejectPromise(console.info(timeoutMsg));
    };

    const done = (result) => {
        clearTimers();
        resolvePromise(result);
    };

    function clearTimers() {
        stopped = true;
        clearTimeout(timeoutId);
        clearInterval(intervalId);
    }

    const promise = new Promise((resolve, reject) => {
        resolvePromise = resolve;
        rejectPromise = reject;
        const isPromise = fn instanceof Promise;

        const poll = () => {
            if (stopped) {
                return;
            }

            const pollThis = isPromise ? fn : fn();

            if (isPromise) {
                pollThis
                    .then((resolvedValue) => {
                        if (resolvedValue) {
                            done(resolvedValue);
                        }
                    })
                    .catch(rejectPromise);
            } else {
                if (Boolean(pollThis) || pollThis) {
                    done(pollThis);
                }
            }
        };

        intervalId = setInterval(poll, interval);
        poll(); // Initial call to handle any immediate resolution

        timeoutId = setTimeout(() => {
            if (!stopped) {
                stop();
            }
        }, timeout);
    });

    return { promise, stop };
};

// =========================================
// --> doTimeout
// --------------------------
const doTimeoutStore = {};
/**
 * Initialize, cancel, or force execution of a callback after a delay using a unique ID.
 * If delay and callback are specified, a timeout is initialized. The callback will execute,
 * asynchronously, after the delay. If an id is specified, this timeout will override and
 * cancel any existing timeout with the same id. Any additional arguments will be passed
 * into callback when it is executed.
 * If the callback returns true, the timeout loop will execute again, after the delay,
 * creating a polling loop until the callback returns a non-true value.
 *
 * @param {string|number} idOrDelay - A unique identifier for this timeout or the delay if no ID is given.
 * @param {number|Function} delayOrCallback - A zero-or-greater delay in milliseconds or the callback function if no ID is given.
 * @param {Function} [callback] - A function to be executed after delay milliseconds.
 * @param {...any} args - Additional arguments to pass to the callback.
 * @returns {boolean | undefined} - If the callback is yet to be executed, true is returned, otherwise undefined.
 * @usage
 * // Initialize a timeout with an ID
 * doTimeout('myTimeout', 1000, () => console.log('Hello, world!'));
 * // Initialize a timeout without an ID
 * doTimeout(1000, () => console.log('Hello, world!'));
 * // Cancel a timeout with an ID
 * doTimeout('myTimeout');
 * // Force execution of a timeout with an ID
 * doTimeout('myTimeout', 0);
 * // Initialize a polling loop
 * // Example usage for polling
    doTimeout(100, function() {
        if (someCondition()) {
            console.log('Condition met, stopping the polling.');
            return false;  // Stop polling when some condition is true
        }
        console.log('Condition not met, continue polling.');
        return true;  // Continue polling by returning true
    });
 *  
 */
function doTimeout(idOrDelay, delayOrCallback, callback, ...args) {
    let id, delay;

    if (typeof idOrDelay === 'string' && typeof delayOrCallback === 'number') {
        id = idOrDelay;
        delay = delayOrCallback;
    } else if (typeof idOrDelay === 'number' && typeof delayOrCallback === 'function') {
        delay = idOrDelay;
        callback = delayOrCallback;
        args = [callback, ...args];
        id = undefined;
    }

    // Namespace for timeout IDs to prevent conflicts
    const namespace = '_doTimeout_';
    const fullId = id ? namespace + id : null;

    // Clear any existing timeout with this ID
    if (fullId && fullId in doTimeoutStore) {
        clearTimeout(doTimeoutStore[fullId]);
        delete doTimeoutStore[fullId];
    }

    // Clean up function to remove the timeout ID
    function cleanup() {
        if (fullId && fullId in doTimeoutStore) {
            delete doTimeoutStore[fullId];
        }
    }

    // Setup the actual timeout function
    function setupTimeout() {
        doTimeoutStore[fullId] = setTimeout(() => {
            if (callback(...args) === true) {
                setupTimeout();
            } else {
                cleanup();
            }
        }, delay);
    }

    // If callback is a function and delay is defined, set up the timeout
    if (typeof callback === 'function' && typeof delay === 'number') {
        setupTimeout();
        return true;
    }

    // Cancel the timeout without executing the callback
    if (id && delay === undefined) {
        cleanup();
    }
}

/**
 * Wraps a function that might be synchronous or asynchronous into a standardized asynchronous workflow.
 * @param {Function} fn - A function that may be synchronous or return a Promise.
 * @returns {Promise<any>} - A Promise resolving with the function's return value or rejecting with any thrown error.
 */
const doAsync = (fn) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fx = await fn();
            resolve(fx);
        } catch (error) {
            reject(error);
        }
    });
};

exports.PromisePool = promisePool;
exports.PromiseQueue = promiseQueue;
exports.doAsync = doAsync;
exports.doPoll = doPoll;
exports.doTimeout = doTimeout;
exports.promisePool = promisePool;
exports.promiseQueue = promiseQueue;

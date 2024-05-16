import { EventBus } from './event-bus/EventBus.js';
import { getDynamicId, makeArray, typeOf } from './utility.js';

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
 * pool.on('done', () => {});
 * pool.on('rejected', (rejectedPromises) => {});
 * pool.on('stats', ({ completed, rejected, pending, total }) => {});
 */
export const promisePool = () => {
    let _status = 'in-progress'; // 'in progress' or 'done'
    let promises = {};
    let rejectedPromises = [];
    const _statsSet = {
        completed: 0,
        rejected: 0,
        pending: 0,
        total: 0,
    };
    let stats = _statsSet;

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
            $this._updateStatus();
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
            this._updateStatus();
            return _status;
        }

        isDone() {
            this._updateStatus();
            return _status === 'done';
        }

        _updateStatus() {
            const instances = Object.values(promises);
            instances.forEach((promise) => {
                if (promise.status === 'rejected') {
                    rejectedPromises.push(promise);
                }
            });

            stats = {
                completed: instances.filter((promise) => promise.status === 'completed').length,
                rejected: rejectedPromises.length,
                pending: instances.filter((promise) => promise.status === 'in-progress').length,
                total: instances.length,
            };
            this.emit('stats', stats);

            const statuses = instances.every(
                (promise) => promise.status === 'completed' || promise.status === 'rejected'
            );

            _status = statuses || stats.total === 0 ? 'done' : 'in-progress';

            if (_status === 'done') {
                this.emit('completed', stats);
                this.emit('done', stats);
                this.emit('rejected', rejectedPromises, stats);
                this.clear();
            }
        }

        /**
         * Clears all promises from the pool.
         */
        clear() {
            promises = {};
            rejectedPromises = [];
            stats = _statsSet;
        }
    })();
};

/**
 * @class promiseQueue
 * Class to manage a queue of promises, executing them sequentially with status tracking for each promise.
 * @extends EventBus
 * @methods
 * add: Adds a promise to the queue and starts the queue processing if not already started.
 * clear: Clears the promise queue.
 * status: Returns the current status of all promises in the queue.
 * @returns {Object} An instance of the promiseQueue class.
 * @example
 * const queue = promiseQueue();
 * queue.add(fetch('https://jsonplaceholder.typicode.com/todos/1'));
 * queue.add(fetch('https://jsonplaceholder.typicode.com/todos/2'));
 * queue.status(); // 'in-progress'
 * queue.on('completed', () => {});
 */
export const promiseQueue = () => {
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
                    this.emit('done');
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
export const doPoll = (fn, options = {}) => {
    if (typeof fn !== 'function') {
        if (typeof fn !== 'object') {
            throw new Error('doPoll: The first argument must be a function or Promise.');
        }
    }
    const isPromise = (promise) => promise instanceof Promise;
    const {
        interval = 200,
        timeout = 1000,
        timeoutMsg = '===> doPoll: cancelled or timed out.',
    } = options;
    let timeoutId, intervalId;
    let resolvePromise, rejectPromise;
    let stopped = false;
    let promiseRunning = false;

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

        const poll = () => {
            if (stopped) {
                return;
            }
            if (promiseRunning) {
                return;
            }

            const pollThis = isPromise(fn) ? fn : fn();
            // double test if the pollThis returns a promise
            if (isPromise(pollThis)) {
                promiseRunning = true;
                pollThis
                    .then((resolvedValue) => {
                        promiseRunning = false;
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
export function doTimeout(idOrDelay, delayOrCallback, callback, ...args) {
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
 * Helps to mitigate the need to know if a function is synchronous or asynchronous.
 * @param {Function} fn - A function that may be synchronous or return a Promise.
 * @returns {Promise<any>} - A Promise resolving with the function's return value or rejecting with any thrown error.
 */
export const doAsync = (fn, ...args) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fx = await fn(...args);
            resolve(fx);
        } catch (error) {
            reject(error);
        }
    });
};

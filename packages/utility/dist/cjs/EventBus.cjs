'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class EventBus {
    constructor() {
        // cleanup
        this.listeners = {};
    }
    // creates an event that can be triggered any number of times
    /**
     * creates an event that can be triggered any number of times
     * @method on
     * @param {string} eventName - The name of the event
     * @param {function} callback - The callback to execute
     * @return {void}
     * @example EventBus.on('event.name', function() { console.log('event.name was triggered') })
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
     * @example EventBus.once('event.name', function() { console.log('event.name was triggered only once') })
     */
    once(eventName, callback) {
        this.registerListener(eventName, callback, 1);
    }
    /**
     * reates an event that can be triggered only a number of times. If it is emitted more than that, the callback will not be be executed anymore!
     * @method exactly
     * @param {string} eventName - The name of the event
     * @return {void}
     * @example EventBus.exactly('event.name', function() { console.log('event.name was triggered 3 times') }, 3)
     */
    exactly(eventName, callback, capacity) {
        this.registerListener(eventName, callback, capacity);
    }
    /**
     * kill an event with all it's callbacks
     * @method off
     * @param {string} eventName - The name of the event
     * @return {void}
     * @example EventBus.off('event.name')
     */
    off(eventName) {
        delete this.listeners[eventName];
    }
    /**
     * removes the given callback for the given event
     * @method detach
     * @param {string} eventName - The name of the event
     * @param {function} callback - The callback to remove
     * @return {void|boolean} - Returns true if the event was found and removed, void otherwise
     * @example EventBus.detach('event.name', callback)
     */
    detach(eventName, callback) {
        const listenersRecords = this.listeners[eventName] || [];
        const filteredListeners = listenersRecords.filter(function (value) {
            return value.callback !== callback;
        });
        if (eventName in this.listeners) {
            this.listeners[eventName] = filteredListeners;
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
     * @example EventBus.emit('event.name', arg1, arg2, arg3)
     * @example EventBus.emit('event.name', arg1, arg2, arg3, {__context: YourInstance})
     */
    emit(eventName, ...args) {
        let queueListeners = [];
        let matches = null;
        const allArgs = this.extractContextFromArgs(args);
        const context = allArgs[0];
        args = allArgs[1];

        // name exact match
        if (this.hasListener(eventName)) {
            queueListeners = this.listeners[eventName];
        } else {
            // -----------------------------------------
            // Wildcard support
            if (eventName.includes('*')) {
                // case 1, if the incoming string has * or ** in it
                // Matches the emit 'eventName' to the registered 'on' this.listeners
                matches = this.patternSearch(eventName, Object.keys(this.listeners));

                if (matches.length > 0) {
                    matches.forEach((match) => {
                        queueListeners = queueListeners.concat(this.listeners[match]);
                    });
                }
            } else {
                // case 2, if the incoming string does not have * or ** in it
                // get the patterns from the this.listeners (on method) and match them to the emit name
                for (const key in this.listeners) {
                    if (key.includes('*')) {
                        matches = this.patternSearch(key, [eventName]);
                        if (matches) {
                            queueListeners = queueListeners.concat(this.listeners[key]);
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
                this.listeners[eventName].splice(k, 1);
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
         
        let regexStr = string.replace(/([.+?^${}()|\[\]\/\\])/g, '\\$&'); // escape all regex special chars
         
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
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push({ callback, triggerCapacity });
    }
    checkToRemoveListener(eventInformation) {
        if (eventInformation.triggerCapacity !== undefined) {
            return eventInformation.triggerCapacity <= 0;
        }
        return false;
    }
    hasListener(eventName) {
        return eventName in this.listeners;
    }
}

exports.EventBus = EventBus;
exports.default = EventBus;

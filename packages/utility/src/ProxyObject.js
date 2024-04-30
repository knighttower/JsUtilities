// [2023] [Knighttower] https://github.com/knighttower

/**
 * @module proxyObject
 * Convert to proxy to protect objects
 * Allows to declare _private, _protected and _mutable - all arrays with prop names
 * @example proxyObject({objectProps..., _protected: array(...)})
 * @param {Object} object
 * @return {Proxy}
 * @usage const proxy = proxyObject({objectProps..., _protected: array(...), _private: array(...), _mutable: array(...)})
 * @usage _protected: array(...) -> Cannot be modified
 * @usage _private: array(...) -> Cannot be accessed
 * @usage _mutable: array(...) -> Can be modified
 */
function proxyObject(object) {
    'use strict';

    // Initialize property access control sets
    const _private = new Set(['_private', ...(object._private || [])]);
    const _protected = new Set(['_protected', ..._private, ...(object._protected || [])]);
    const _mutable = new Set(object._mutable || []);

    const canMutate = (prop) => {
        if (_protected.has(prop) && !_mutable.has(prop)) {
            console.error(`Attempt to modify protected property: ${prop}`);
            return false;
        }
        if (_private.has(prop) && !_mutable.has(prop)) {
            console.error(`Attempt to modify private property: ${prop}`);
            return false;
        }
        return true;
    };

    return new Proxy(object, {
        get(target, prop, receiver) {
            if (_private.has(prop)) {
                console.error(`Attempt to access private property: ${prop}`);
                return undefined;
            }
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            if (!canMutate(prop)) {
                return false;
            }
            return Reflect.set(target, prop, value, receiver);
        },
        deleteProperty(target, prop) {
            if (!canMutate(prop)) {
                return false;
            }
            return Reflect.deleteProperty(target, prop);
        },
        defineProperty(target, prop, descriptor) {
            if (!canMutate(prop)) {
                return false;
            }
            return Reflect.defineProperty(target, prop, descriptor);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target).filter((key) => !_private.has(key));
        },
        enumerate(target) {
            const keys = Reflect.enumerate(target);
            return keys.filter((key) => !_private.has(key));
        },
        has(target, prop) {
            return !_private.has(prop) && Reflect.has(target, prop);
        },
        getOwnPropertyDescriptor(target, prop) {
            if (_private.has(prop)) {
                return undefined;
            }
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
    });
}

/**
 * Enhances a class with proxy functionality to enforce access and mutation rules for its properties.
 * This approach utilizes a higher-order function to wrap the class with a Proxy.
 */

/**
 * Wraps a class with a Proxy to enforce private, protected, and mutable properties.
 * @param {Function} BaseClass - The class to be wrapped.
 * @returns {Proxy} A proxy-wrapped class enforcing the specified access controls.
 * @usage
 * // Example class to use with proxyClass
    class MyClass {
        constructor() {
            this.publicProp = 'This can be accessed and modified.';
            this.protectedProp = 'This cannot be modified.';
            this.privateProp = 'This cannot be accessed or modified.';
            this.mutableProp = 'This can be modified.';
            this._protected = ['protectedProp'];
            this._private = ['privateProp'];
            this._mutable = ['mutableProp'];
        }
    }

    // Enhanced class with proxyClass
    const ProxyEnhancedMyClass = proxyClass(MyClass);

    // Example usage
    const instance = new ProxyEnhancedMyClass();
    console.log(instance.publicProp); // Accessible
    instance.publicProp = 'New value'; // Modifiable
    console.log(instance.privateProp); // Attempt to access private property: privateProp
    instance.mutableProp = 'Changed'; // Modifiable, even if protected
    console.log(instance.mutableProp);
    delete instance.privateProp;
 */
function proxyClass(BaseClass) {
    return new Proxy(BaseClass, {
        construct(target, args) {
            const instance = new target(...args);
            return proxyObject(instance);
        },
    });
}

export {
    proxyObject,
    proxyObject as default,
    proxyObject as ProxyObject,
    proxyClass,
    proxyClass as ProxyClass,
};

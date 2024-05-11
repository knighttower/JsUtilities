import { test } from 'vitest';
import assert from 'assert';
import { proxyObject, proxyClass } from '../src/proxyObject';

class hello {
    constructor() {
        this.publicProp = 'This can be accessed and modified.';
        this.protectedProp = 'This cannot be modified.';
        this.privateProp = 'This cannot be accessed or modified.';
        this.mutableProp = 'This can be modified.';
        this.other = 'Other';
        this._protected = ['protectedProp'];
        this._private = ['privateProp'];
        this._mutable = ['mutableProp'];
    }
    hello() {
        this.publicProp = 'Hello';
        this.other = 'Hello';
        return 'Hello';
    }
}

test('class', () => {
    assert.equal(true, true);
    class MyClass extends hello {
        constructor() {
            super();
            this.publicProp = 'This can be accessed and modified.';
            this.protectedProp = 'This cannot be modified.';
            this.privateProp = 'This cannot be accessed or modified.';
            this.mutableProp = 'This can be modified.';
            this.other = 'Other';
            this._protected = ['protectedProp'];
            this._private = ['privateProp'];
            this._mutable = ['mutableProp'];
        }
        hello() {
            this.publicProp = 'Hello';
            this.other = 'Hello';
            return 'Hello';
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
    instance.hello();
    console.log('______other______', instance.other);
});

test('Proxy object', () => {
    assert.equal(true, true);
    const obj = {
        publicProp: 'This can be accessed and modified.',
        protectedProp: 'This cannot be modified.',
        privateProp: 'This cannot be accessed or modified.',
        mutableProp: 'This can be modified.',
        other: 'Other',
        _protected: ['protectedProp'],
        _private: ['privateProp', 'other'],
        _mutable: ['mutableProp', 'other'],
        hello() {
            this.publicProp = 'Hello';
            this.other = 'Hello';
        },
    };
    const proxyObj = proxyObject(obj);
    console.log(proxyObj.publicProp); // Accessible

    proxyObj.publicProp = 'New value'; // Modifiable
    console.log(proxyObj.publicProp);

    console.log(proxyObj.protectedProp); // Accessible

    console.log(proxyObj.privateProp); // Attempt to access private property: privateProp

    proxyObj.mutableProp = 'Changed'; // Modifiable, even if protected
    console.log(proxyObj.mutableProp);
    proxyObj.hello();
    console.log(proxyObj.other);
    console.log('______other______', proxyObj);
});

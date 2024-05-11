# Documentation for  Proxy Object Library

This JavaScript library provides functionality to enhance object and class security by using JavaScript Proxy to enforce access controls on properties. The library defines two main functions, `proxyObject` and `proxyClass`, which help in setting private, protected, and mutable properties within objects and classes.

## Table of Contents
- [proxyObject](#proxyObject)
- [proxyClass](#proxyClass)

## proxyObject
### Description
Creates a proxy for an object to enforce access rules based on predefined properties `_private`, `_protected`, and `_mutable`. These properties determine the accessibility and modifiability of other properties in the object.

### Syntax
```javascript
function proxyObject(object)
```

### Parameters
- `object` (Object) - The object to proxy. It should include any of the optional properties `_private`, `_protected`, and `_mutable`, each an array of strings representing the names of the properties to be protected under each category.

### Return Type
- (Proxy) - Returns a proxy object with enforced access rules.

### Example
```javascript
const myObject = {
    name: "",
    _private: ["secret"],
    _protected: ["name"],
    _mutable: []
};

const protectedObject = proxyObject(myObject);
console.log(protectedObject.name); // Output: ""
protectedObject.name = "New Name"; // Error: Attempt to modify protected property: name
console.log(protectedObject.secret); // Error: Attempt to access private property: secret
```

## proxyClass
### Description
Wraps a given class with a proxy to enforce private, protected, and mutable properties, using the same access control logic as `proxyObject`. This approach is particularly useful for managing access controls in class instances, providing a clean, declarative way to define property behaviors.

### Syntax
```javascript
function proxyClass(BaseClass)
```

### Parameters
- `BaseClass` (Function) - The class to be wrapped with proxy functionality to enforce specified access controls.

### Return Type
- (Proxy) - Returns a proxy-wrapped class that enforces the specified access controls when instances are created.

### Example
```javascript
class ExampleClass {
    constructor() {
        this.publicProp = "Accessible";
        this._private = ["privateProp"];
        this._protected = ["protectedProp"];
        this._mutable = ["publicProp"];
        this.privateProp = "Hidden";
        this.protectedProp = "Protected";
    }
}

const ProxyEnhancedExampleClass = proxyClass(ExampleClass);
const instance = new ProxyEnhancedExampleClass();

console.log(instance.publicProp); // Output: "Accessible"
instance.publicProp = "Modified"; // Modifiable due to being mutable
console.log(instance.protectedProp); // Output: "Protected"
instance.protectedProp = "Try Modify"; // Error: Attempt to modify protected property: protectedProp
console.log(instance.privateProp); // Error: Attempt to access private property: privateProp
```

This documentation provides a comprehensive guide on how to implement and utilize the `proxyObject` and `proxyClass` functionalities to enhance object and class security through property access controls.

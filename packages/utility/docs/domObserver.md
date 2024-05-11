# Documentation for DomObserver

The DomObserver module provides utilities to observe changes to the DOM (Document Object Model) and execute callbacks based on these changes. It is particularly useful for applications that need to react dynamically to DOM modifications such as nodes being added, removed, or altered.

This documentation details the usage of the DomObserver module, including how to add and remove event listeners for DOM changes, and how to clean up listeners when they are no longer needed.

## Table of Contents
- [addOnNodeChange](#addOnNodeChange)
- [removeOnNodeChange](#removeOnNodeChange)
- [cleanup](#cleanup)

## addOnNodeChange
### Description
Registers a callback function that will be called whenever the specified DOM node changes. This is used to observe dynamic changes like additions, deletions, or modifications within the DOM.

### Syntax
```javascript
domObserver.addOnNodeChange(id, callback)
```

### Parameters
- `id` (String) - The identifier of the DOM element to observe.
- `callback` (Function) - The callback function to execute when the node changes.

### Return Type
- (Void) - This function does not return a value.

### Example
```javascript
// Register a callback on a DOM node change
domObserver.addOnNodeChange('elementIdentifier', () => {
    console.log('Node changed');
});
```

## removeOnNodeChange
### Description
Removes a previously registered callback function from being called when the specified DOM node changes.

### Syntax
```javascript
domObserver.removeOnNodeChange(id)
```

### Parameters
- `id` (String) - The identifier of the DOM element for which to remove the observer.

### Return Type
- (Void) - This function does not return a value.

### Example
```javascript
// Remove a callback from a DOM node observer
domObserver.removeOnNodeChange('elementIdentifier');
```

## cleanup
### Description
Removes all registered callback functions from the observer to prevent them from being called in the future. This is often used to clean up resources when they are no longer needed, such as when removing elements from the page or unloading components.

### Syntax
```javascript
domObserver.cleanup()
```

### Parameters
- None

### Return Type
- (Void) - This function does not return a value.

### Example
```javascript
// Cleanup all registered callbacks
domObserver.cleanup();
```

This module leverages the `MutationObserver` API to watch for changes in the DOM and is designed to handle dynamic content efficiently. It is especially useful in single-page applications (SPAs) where DOM manipulation is frequent.

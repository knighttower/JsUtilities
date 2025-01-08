# BlockUI.js Documentation

**BlockUI.js** is a lightweight JavaScript library designed for blocking user interactions with a specific element or the entire page. This library can be used with jQuery or Cash.js (the latter is preferred due to its smaller size). It is heavily inspired/based on the [jQuery BlockUI plugin](https://malsup.com/jquery/block/) but fully refactored and modified, although it retains most of its functionality API.

---

## Installation

To use BlockUI.js, include the library and either jQuery or Cash.js in your project. Cash.js is recommended for its smaller footprint and performance benefits.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/cash/8.1.1/cash.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/knighttower@latest/packages/block-ui/dist/browser/blockui.js"></script>
```
#### Via npm

```javascript
npm i @knighttower/type-check
```   
there are also EMS and CJS via jsdelivr https://www.jsdelivr.com/package/npm/@knighttower/block-ui

---  

## Features

- Block entire page or specific elements.
- Customizable messages, loaders, and styles.
- Configurable overlay, loader, and animations.
- Supports `onBlock`, `onUnblock`, and `onOverlayClick` callbacks.
- Handles keyboard navigation when blocked.
- Automatic `z-index` adjustments for compatibility.

---

## Usage

### Blocking the Entire Page

```javascript
// Basic usage
$.blockui.on('Please wait...');

// With configuration
$.blockui.on({
    content: '<h4>Loading...</h4>',
    loader: '<div class="custom-loader"></div>',
    css: {
        color: '#fff',
        backgroundColor: '#444',
    },
    overlayCSS: {
        opacity: 0.8,
    },
});
```

### Unblocking the Page

```javascript
$.blockui.off();
```

---

### Blocking Specific Elements

```javascript
// Block an element
$(element).block();

// Custom block message for an element
$(element).block({
    content: 'Loading...',
    css: {
        color: '#888',
    },
});
```

### Unblocking an Element

```javascript
$(element).unblock();
```

---

## Configuration Options

Extend the default configuration to apply custom styles globally.

```javascript
$.extend(true, $.blockui.defaults, {
    content: '<h4>Please wait...</h4>',
    loader: '<div class="spinner"></div>',
    css: {
        color: '#555',
    },
    overlayCSS: {
        opacity: 0.7,
    },
});
```

### Default Configuration

| Option            | Type              | Default Value                     | Description                                   |
|-------------------|-------------------|-----------------------------------|-----------------------------------------------|
| `content`         | `string`           | `<h4>Please wait...</h4>`         | The message displayed in the block UI.        |
| `loader`          | `string`           | Custom HTML for loader.           | The loading animation content.                |
| `tag`             | `string`           | `'div'`                           | The tag for the message container.            |
| `css`             | `object`           | Styling for the block content.    | Styles for the blocking element.              |
| `overlayCSS`      | `object`           | Styling for the overlay.          | Styles for the overlay background.            |
| `fadeIn`          | `number`           | `200`                             | Fade-in duration in milliseconds.             |
| `fadeOut`         | `number`           | `400`                             | Fade-out duration in milliseconds.            |
| `timeout`         | `number`           | `0`                               | Auto unblock after `timeout` milliseconds.    |
| `zindex`          | `string` or `number`| `'auto'`                         | Determines the `z-index` value.               |
| `onBlock`         | `function`         | `null`                            | Callback when blocking starts.                |
| `onUnblock`       | `function`         | `null`                            | Callback when unblocking completes.           |
| `onOverlayClick`  | `function`         | `null`                            | Callback for overlay clicks.                  |

---

## Examples

### Custom Loader and Overlay Styles

```javascript
$.blockui.on({
    content: '<h3>Loading...</h3>',
    loader: '<div class="my-loader"></div>',
    overlayCSS: {
        backgroundColor: '#333',
        opacity: 0.9,
    },
});
```

### Blocking with Timeout

```javascript
$(element).block({
    content: 'Please wait...',
    timeout: 3000, // Unblock after 3 seconds
});
```

### Custom Z-Index and Callbacks

```javascript
$.blockui.on({
    content: '<h4>Processing...</h4>',
    zindex: 9999,
    onBlock: function () {
        console.log('BlockUI activated');
    },
    onUnblock: function () {
        console.log('BlockUI deactivated');
    },
});
```

---

## Loader Styling Example

By default, the library provides a minimal loader:

```html
<style>
.x-ldr, .x-ldr div {
    box-sizing: border-box;
}
.x-ldr {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 30px;
}
.x-ldr div {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #a6a8b5;
    animation: x-ldr2 0.6s infinite;
}
</style>
```

Override it by providing custom `loader` HTML or CSS.

---

## Event Callbacks

| Event           | Description                               |
|-----------------|-------------------------------------------|
| `onBlock`       | Invoked when blocking begins.             |
| `onUnblock`     | Invoked after unblocking is completed.    |
| `onOverlayClick`| Triggered when the overlay is clicked.     |

Example:

```javascript
$.blockui.on({
    onBlock: function () {
        console.log('Blocking started');
    },
    onUnblock: function () {
        console.log('Blocking ended');
    },
    onOverlayClick: function () {
        alert('Overlay clicked!');
    },
});
```

---

## Notes

- Cash.js is recommended due to its smaller size compared to jQuery.
- The library automatically handles browser quirks and sets proper `z-index` for seamless overlays.
- Supports nested elements and ensures `tab` key constraint during blocking.
- Extend the default configuration globally using `$.extend`.
---

Enjoy using **BlockUI.js** to create seamless UI interactions! 🎉

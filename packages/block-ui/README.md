# BlockUI.js Documentation

**BlockUI.js** is a lightweight JavaScript library designed for blocking user interactions with a specific element or the entire page. This library can be used with jQuery or Cash.js (preferred due to its smaller size). It is heavily inspired by the [jQuery BlockUI plugin](https://malsup.com/jquery/block/).

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

- Block the entire page or a specific element.
- Customizable messages, loaders, and CSS styles.
- Fade-in and fade-out animations.
- Configurable overlay styles and behavior.
- Event callbacks for `onBlock`, `onUnblock`, and overlay clicks.

---

## Usage

### Blocking the Entire Page

You can block the entire page by calling `$.blockUI.on()` with a message or configuration object.

```javascript
// Basic usage
$.blockUI.on('Please wait...');

// Using a configuration object
$.blockUI.on({
    message: '<h4>Loading...</h4>',
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

To unblock the page:

```javascript
$.blockUI.off();
```

---

### Blocking Specific Elements

You can block a specific element using the `block()` method on a jQuery or Cash.js element.

```javascript
// Block an element with default options
$(element).block();

// Block an element with custom options
$(element).block({
    message: 'Loading...',
    css: {
        border: 'none',
        color: '#888',
    },
});
```

To unblock the element:

```javascript
$(element).unblock();
```

---

## Default Configuration

The default options can be extended to customize the library's behavior globally:

```javascript
$.extend(true, $.blockUI.defaults, {
    message: '<h4>Processing, please wait...</h4>',
    loader: '<div class="spinner"></div>',
    css: {
        color: '#555',
    },
    overlayCSS: {
        opacity: 0.7,
    },
});
```

### Default Options

| Option               | Type       | Default Value                     | Description                                   |
|----------------------|------------|-----------------------------------|-----------------------------------------------|
| `loader`             | `boolean` or `string` | `false` | HTML for the loader element.                 |
| `message`            | `string`   | `<h4>Please wait...</h4>`         | The message to display.                      |
| `css`                | `object`   | Various styles                   | CSS styles for the message container.        |
| `overlayCSS`         | `object`   | Various styles                   | CSS styles for the overlay.                  |
| `fadeIn`             | `number`   | `200`                             | Fade-in duration (ms).                       |
| `fadeOut`            | `number`   | `400`                             | Fade-out duration (ms).                      |
| `timeout`            | `number`   | `0`                               | Timeout duration (ms) to auto-unblock.       |
| `onBlock`            | `function` | `null`                            | Callback triggered when blocking starts.     |
| `onUnblock`          | `function` | `null`                            | Callback triggered when unblocking completes.|

---

## Examples

### Custom Loader and Overlay

```javascript
$.blockUI.on({
    message: '<h3>Loading...</h3>',
    loader: '<div class="my-loader"></div>',
    overlayCSS: {
        backgroundColor: '#333',
        opacity: 0.9,
    },
});
```

### Blocking an Element with a Timeout

```javascript
$(element).block({
    message: 'Please wait...',
    timeout: 3000, // Auto unblock after 3 seconds
});
```

---

## Event Callbacks

| Event       | Description                                 |
|-------------|---------------------------------------------|
| `onBlock`   | Called when blocking starts.               |
| `onUnblock` | Called when unblocking is complete.        |
| `onOverlayClick` | Triggered when overlay is clicked.     |

Example:

```javascript
$.blockUI.on({
    onBlock: function () {
        console.log('Blocking started');
    },
    onUnblock: function () {
        console.log('Blocking ended');
    },
    onOverlayClick: function () {
        console.log('Overlay clicked');
    },
});
```

---

## Notes

- Cash.js is recommended due to its lightweight size compared to jQuery.
- Also Cash.js is recommended for its flexibility to manipulate the DOM and easy sintax then vanilla JS.
- The library automatically adjusts to quirks mode or standards mode of the browser.
- Extend the default configuration globally using `$.extend`.

---

Enjoy using **BlockUI.js** for seamless UI blocking! 🎉


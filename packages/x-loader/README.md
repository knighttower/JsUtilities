# x-loader Documentation

## Overview
`x-loader` is a lightweight JavaScript library for dynamically loading scripts, CSS, and images. It provides utility methods for handling asset loading and dependency management efficiently.

## Why `x-loader`?

- **Lightweight:** The library is minimal and has no dependencies.
- **Dynamic Loading:** Load assets on-demand or based on user interactions.
- **Customizable:** Configure asset loading sequences and dependencies.
- **Declarative Loading:** Use custom HTML tags for asset loading (`<x-loader>`).

Browser have a built-in way to load assets, but still has limitations. Like async and defer will not trigger loading bundles or cannot be grouped and even wait for other assets to be loaded. We have come a long way with browser support for better loading assets but until it fully baked, solutions like this will be needed.  

---

## Installation
Include the library in your project by linking the JavaScript file:

```html
<script src="path/to/x-loader.js"></script>
```
```html
<script src="https://cdn.jsdelivr.net/npm/knighttower@latest/packages/x-loader/dist/browser/x-loader.js"></script>

---

## Features
- Dynamic loading of scripts, CSS, and images.
- Dependency management and loading sequences.
- Custom HTML tag support for declarative asset loading (`<x-loader>`).
- Utility methods for checking asset readiness and status.

---

## Usage

### Example: Basic Script Loading
```html
<script>
    xloader.scripts.load('https://cdn.example.com/script.js', 'script-group-id').then(() => {
        console.log('Script loaded.');
    });
</script>
```

---

### Example: Using `<x-loader>` Custom Element

#### Scripts
```html
<x-loader
    x-js="https://cdn.example.com/script.js"
    x-id="script-group-id"
></x-loader>
```

#### CSS
```html
<x-loader
    x-css="https://cdn.example.com/styles.css"
    x-id="css-group-id"
></x-loader>
```

#### Images
```html
<x-loader
    x-img="https://cdn.example.com/image.jpg"
    x-id="image-group-id"
></x-loader>
```

---

## API Reference

### Loader Class
#### `xloader.scripts.load(assets, id, loadType, attributes)`
- **Parameters:**
  - `assets` (String|Array): URL(s) of the assets to load.
  - `id` (String, optional): Unique ID for the asset group.
  - `loadType` (String, optional): Loading type (`'eager'` or `'lazy'`).
  - `attributes` (Object, optional): Custom attributes for the asset tag.
- **Returns:** `Promise`
- **Example:**
  ```javascript
  xloader.scripts.load('https://cdn.example.com/script.js', 'group-id').then(() => {
      console.log('Loaded successfully.');
  });
  ```

#### `xloader.scripts.ready(ids)`
- **Parameters:**
  - `ids` (String|Array): ID(s) to check for readiness.
- **Returns:** `Promise`
- **Example:**
  ```javascript
  xloader.scripts.ready('group-id').then(() => {
      console.log('Assets are ready.');
  });
  ```

#### `xloader.scripts.isLoaded(ids)`
- **Parameters:**
  - `ids` (String|Array): ID(s) to check if already loaded.
- **Returns:** `Boolean`

---

### DOM Tracking
#### `domTracking.afterLoad(callback)`
- Executes a callback after the DOM and assets are fully loaded.
- **Example:**
  ```javascript
  domTracking.afterLoad(() => {
      console.log('DOM fully loaded.');
  });
  ```

#### `domTracking.isReady(callback)`
- Executes a callback when the DOM is ready for interaction.
- **Example:**
  ```javascript
  domTracking.isReady(() => {
      console.log('DOM is ready.');
  });
  ```

---

## Attributes for `<x-loader>`
- **`x-js`**: URL(s) of the JavaScript file(s).
- **`x-css`**: URL(s) of the CSS file(s).
- **`x-img`**: URL(s) of the image file(s).
- **`x-id`**: Unique ID for the asset group.
- **`x-dep`**: Dependencies to load before the current asset.
- **`x-loading`**: Loading type (`'eager'` or `'lazy'`).

---

## Test File Example

### Complete Usage Example
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>x-loader Demo</title>
        <script src="../dist/browser/x-loader.js"></script>
    </head>
    <body>
        <!-- Example of loading JavaScript -->
        <x-loader
            x-js="https://code.jquery.com/jquery-3.7.1.min.js"
            x-id="js_jquery"
        ></x-loader>
        <script>
            xloader.loader.ready('js_jquery').then(() => {
                console.log('jQuery is loaded.');
            });
        </script>

        <!-- Example of loading an image -->
        <x-loader
            x-img="https://placehold.co/600x400"
            x-id="placeholder_image"
        ></x-loader>
    </body>
</html>
```

--- 

This was heavily inspired by the https://github.com/ded/script.js library. A great library that I have used in the past.

## License
`x-loader` is open-source and available under the [MIT License](LICENSE).

--- 

For further details, refer to the source code and inline comments.

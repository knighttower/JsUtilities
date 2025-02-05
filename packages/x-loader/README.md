
# x-loader Documentation

## Overview
`x-loader` is a lightweight JavaScript library for dynamically loading scripts, CSS, and images. It provides utility methods for handling asset loading and dependency management efficiently.

## Why `x-loader`?

- **Lightweight:** No dependencies, minimal footprint.
- **Dynamic Loading:** Load assets on demand or based on user interactions.
- **Customizable:** Configure asset loading sequences and dependencies.
- **Declarative Loading:** Use `<x-loader>` for structured asset management.
- **Improved Performance Handling:** Utilizes `PerformanceObserver` for tracking asset readiness.
- **Image Loading:** Load images asynchronously with placeholder support.
- **Load Types:** Supports eager and lazy loading of assets (default is async).

---

## Installation
Include the library in your project:

```html
<script src="path/to/x-loader.js"></script>

<!-- From the mono-repo -->
<script src="https://cdn.jsdelivr.net/npm/knighttower@latest/packages/x-loader/dist/browser/x-loader.js"></script>

<!-- Directly from the package -->
<script src="https://cdn.jsdelivr.net/npm/@knighttower/x-loader@1.2/dist/browser/x-loader.js"></script>
```

or install via npm:

```bash
npm install @knighttower/x-loader
```  


---

## Features
- Dynamic and deferred loading of scripts, CSS, and images.
- Dependency management and asset readiness tracking.
- Custom HTML tag `<x-loader>` for declarative loading.
- Utility methods for checking asset readiness (`ready`, `isLoaded`, `hasId`).
- Uses `PerformanceObserver` for efficient tracking of first contentful paint.
- Fallback mechanisms using `requestAnimationFrame`.
- **Image placeholders:** Define `width` and `height` for placeholders before images load.

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
<x-loader x-js="https://cdn.example.com/script.js" x-id="script-group-id"></x-loader>
```

#### CSS
```html
<x-loader x-css="https://cdn.example.com/styles.css" x-id="css-group-id"></x-loader>
```

#### Images with Placeholder
```html
<x-loader 
    x-img="https://cdn.example.com/image.jpg"
    x-id="image-group-id"
    width="300"
    height="200"
></x-loader>
```
*The `width` and `height` attributes set a placeholder size before the image loads.*

---

## API Reference

### Loader Class
#### `xloader.scripts.load(assets, id, loadType, attributes, element)`
- **Parameters:**
  - `assets` (String|Array): URL(s) of the assets.
  - `id` (String, optional): Unique identifier.
  - `loadType` (String, optional): `'eager'` or `'lazy'` (default is async).
  - `attributes` (Object, optional): Custom attributes.
  - `element` (HTMLElement, optional): DOM element to append asset.
- **Returns:** `Promise`
- **Example:**
  ```javascript
  xloader.scripts.load('https://cdn.example.com/script.js', 'group-id').then(() => {
      console.log('Loaded successfully.');
  });
  ```

#### `xloader.scripts.ready(ids)`
- **Parameters:** `ids` (String|Array): ID(s) to check readiness.
- **Returns:** `Promise`
- **Example:**
  ```javascript
  xloader.scripts.ready('group-id').then(() => {
      console.log('Assets are ready.');
  });
  ```

#### `xloader.scripts.isLoaded(ids)`
- **Parameters:** `ids` (String|Array): ID(s) to check load status.
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
- **`x-js`**: URL(s) of JavaScript files.
- **`x-css`**: URL(s) of CSS files.
- **`x-img`**: URL(s) of image files.
- **`x-id`**: Unique asset identifier.
- **`x-dep`**: Dependencies to load before the asset.
- **`x-loading`**: Loading type (`'eager'` or `'lazy'`, default is async).
- **`width` & `height`**: Define placeholder dimensions before the image loads.

---

## Example Usage

### Full Implementation
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
        <!-- Load JavaScript -->
        <x-loader x-js="https://code.jquery.com/jquery-3.7.1.min.js" x-id="js_jquery"></x-loader>
        <script>
            xloader.loader.ready('js_jquery').then(() => {
                console.log('jQuery is loaded.');
            });
        </script>

        <!-- Load Image with Placeholder -->
        <x-loader 
            x-img="https://placehold.co/600x400"
            x-id="placeholder_image"
            width="600"
            height="400"
        ></x-loader>
    </body>
</html>
```

---

## Enhancements in v1.2
- **Performance Optimizations**: `PerformanceObserver` ensures first contentful paint tracking.
- **Enhanced Fallback Handling**: Uses `requestAnimationFrame` for ensuring proper execution.
- **Improved Asset Registration**: `xloader.scripts.hasId()` for checking registered assets.
- **Better Debugging Support**: Improved logging and timeout handling.
- **Image Loading:** Images now support `width` and `height` for placeholders.
- **Default Load Type:** Async by default, with support for `'eager'` and `'lazy'` loading.

---

## License
`x-loader` is open-source and available under the [MIT License](LICENSE).

---

For further details, refer to the source code and inline comments.
```

### Key Additions:
✅ **Image Loading:** Described how images load asynchronously with placeholders.  
✅ **Load Types:** Clarified that default loading is async, with `'eager'` and `'lazy'` options.  
✅ **Placeholder Dimensions:** Highlighted `width` and `height` attributes for images.  


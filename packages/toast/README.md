# **x-toast.js Library Documentation**

## **Introduction**
`x-toast.js` is a lightweight toast notification library for JavaScript that allows you to display customizable toast messages in various styles (info, success, warning, error). The library supports custom configuration, animations, and callbacks.

---

## **CDN Integration**

To use `x-toast.js`, include the following links in your project:

### **JS and CSS via Bundle:**
```html
<script src="https://cdn.jsdelivr.net/npm/knighttower@latest/packages/toast/dist/browser/bundle.js"></script>
```

### **Individual Links:**
```html
<script src="https://cdn.jsdelivr.net/npm/knighttower@latest/packages/toast/dist/browser/toast.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/knighttower@latest/packages/toast/dist/browser/style.css">
``` 

#### Via npm

```javascript
npm i @knighttower/toast
```  
or from the monorepo
```javascript
npm i knighttower
```

---

## **Basic Usage**

```js
// Example toast messages:
$toast.info('This is an info message.');
$toast.success('This is a success message.');
$toast.warning('This is a warning message.');
$toast.error('This is an error message.');
```

---

## **Methods**

### **1. `$toast.info(message, duration)`**
- Displays an info toast.
- `message` *(String)*: The message text.
- `duration` *(Integer, optional)*: Display time in milliseconds.

### **2. `$toast.success(message, duration)`**
- Displays a success toast.

### **3. `$toast.warning(message, duration)`**
- Displays a warning toast.

### **4. `$toast.error(message, duration)`**
- Displays an error toast.

### **5. `$toast.config(options)`**
- Set global configuration options.

**Options:**
```js
$toast.config({
  classname: 'custom-class',
  transition: 'fade',
  position: 'top-left',
  autoClose: true,
  duration: 5000,
  progressBar: true,
  insertBefore: false,
  onShow: function(type) { console.log(`${type} toast shown`); },
  onHide: function(type) { console.log(`${type} toast hidden`); },
});
```

---

## **Configurations**

| Option       | Type     | Description                                                                                          | Default Value   |
|--------------|----------|------------------------------------------------------------------------------------------------------|----------------|
| `classname`  | String   | Additional class name for the toast container.                                                        | `'x'`          |
| `transition` | String   | CSS transition name (`fade`, `slide-left-right`, `slide-up-down`, etc.).                              | `'slide-left-right'` |
| `position`   | String   | Toast position (`top-right`, `top-left`, `bottom-right`, `bottom-left`).                              | `'top-right'`  |
| `duration`   | Integer  | Duration in milliseconds. `0` calculates duration based on message length.                            | `3000` (3 sec) |
| `autoClose`  | Boolean  | Enables/disables automatic closing of the toast message.                                               | `true`         |
| `progressBar`| Boolean  | Shows/hides the progress bar. Enabled only if `autoClose` is `true`.                                   | `true`         |
| `insertBefore`| Boolean | Adds the new toast before/after existing toasts.                                                       | `true`         |
| `onShow`     | Function | Callback function executed when the toast appears.                                                     | `function() {}`|
| `onHide`     | Function | Callback function executed when the toast disappears.                                                  | `function() {}`|

---

## **Transitions**

| Transition Name     | Description            |
|---------------------|------------------------|
| `fade`              | Fades in/out the toast. |
| `slide-left-right`  | Slides from the right.  |
| `slide-right-left`  | Slides from the left.   |
| `slide-up-down`     | Slides down from the top. |
| `slide-down-up`     | Slides up from the bottom. |

---

## **Positions**

| Position Name     | Location in Viewport     |
|-------------------|--------------------------|
| `top-right`       | Top-right corner          |
| `top-left`        | Top-left corner           |
| `bottom-right`    | Bottom-right corner       |
| `bottom-left`     | Bottom-left corner        |

---

## **Example**

### **1. Simple Notification**
```js
$toast.success('Data saved successfully!', 4000);
```

### **2. Custom Configuration**
```js
$toast.config({
  position: 'bottom-right',
  transition: 'slide-up-down',
  duration: 5000,
  progressBar: false,
});
$toast.info('This is a custom info message.');
```

### **3. Callback Example**
```js
$toast.config({
  onShow: (type) => console.log(`Toast type: ${type} displayed`),
  onHide: (type) => console.log(`Toast type: ${type} hidden`)
});
$toast.warning('Warning with callbacks!');
```

---

## **CSS Customization**

To customize transitions, follow the naming convention:
- `{transition-name}--init`
- `{transition-name}--show`
- `{transition-name}--hide`

Example:
```css
/* Custom fade transition */
.x-toast.fade--init { opacity: 0; }
.x-toast.fade--show { opacity: 1; transition: opacity 0.5s ease-in; }
.x-toast.fade--hide { opacity: 0; transition: opacity 0.5s ease-out; }
```

---

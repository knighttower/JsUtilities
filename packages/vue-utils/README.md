ℹ This package is part of the [Js Utility](https://github.com/knighttower/JsUtility) collection of packages (monorepo)  

# MixinInstaller
Helps to install a mixin in Vue 2 or 3 for both options and composition API

```javascript
/**
 * Supports both, Options & Composition API
 * Use to install mixins that can work with both APIs
 * @mixin installMixin
 * @param {Object} object Mixin object
 * @param {String} name Register name to be used as
 * @example
 * In Application
 * 1. Import your mixin into your app
 *    import { installMixin } from '@knighttower/vue-mixin-installer'; //import into your app
 * 2. register your mixin with the application
 *    app.use(installMixin(ExampleMixinObject<object>, 'NameThatWillBeAssignedToYourMixin'<string>)); //registers your mixin
 * Or Inside your mixin
 *  1. Import into your mixin and use like this
 *      import { installMixin } from '@knighttower/vue-mixin-installer'; //import into your mixin
 *      // ... your mixin code here
 *      export default installMixin(ExampleMixinObject, 'ExportTableHelper'); //exports your mixin
 * 2. Import into your app and use like this
 *      import ExampleMixinObject from '@/mixins/ExampleMixinObject'; //import into your app
 *      app.use(ExampleMixinObject); //registers your mixin
 * 3. Use in your component like this
 *     In Option API: this.YourMixinMethod()
 *     In Composition API: const { YourMixinMethod } = inject('YourMixinMethod');
 *     Or In Composition API: const CustomName = inject('YourMixinMethod'); then CustomName.YourMixinMethod()
 *  
 * @returns {Object} Registration instance used by VUE
 */
```

## Usage  

``npm install @knighttower/vue-utils``  

``import { installMixin } from '@knighttower/vue-utils/mixinInstaller';``  

## Other
Checkout my profile https://github.com/knighttower or https://knighttower.io for more cool freebies and awesome VUE/Laravel/PHP projects

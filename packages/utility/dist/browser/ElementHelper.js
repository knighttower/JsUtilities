(()=>{"use strict";var e={d:(t,n)=>{for(var r in n){e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e){return r(e,t)}var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(l){throw u}}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++){r[n]=e[n]}return r}e.d(t,{elementHelper:()=>y});var o,i={},u=function(){if("undefined"!=typeof window&&!o){var e={childList:!0,subtree:!0};if(o=new MutationObserver((function(e){var t,r=n(e);try{for(r.s();!(t=r.n()).done;){if("childList"===t.value.type){for(var o in i){i[o]()}}}}catch(e){r.e(e)}finally{r.f()}})),document.body){return o.observe(document.body,e)}document.addEventListener("DOMContentLoaded",(function(t){return o.observe(document.body,e)}))}},a=function(e,t){t&&(i[e]=t)},l=function(e){e&&delete i[e]};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=c(e)||!e){return e}var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:t+""}var m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;!function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}(this,e),u(),this.selector=t,"object"===c(t)?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=n.querySelector(t)}return t=e,(n=[{key:"isInDom",value:function(){var e;return Boolean(null===(e=this.domElement)||void 0===e?void 0:e.outerHTML)}},{key:"whenInDom",value:function(){var t=this,n=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(r){t.isInDom()?r(t):a(n,(function(){var o=new e(t.selector);o.isInDom()&&(r(t=o),l(n))}))}))}},{key:"getElementByXpath",value:function(e){return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}},{key:"getXpathTo",value:function(){var t=this.domElement;if(t.id){return"//*[@id='".concat(t.id,"']")}if(t===document.body){return"//"+t.tagName}for(var n=0,r=t.parentNode.childNodes,o=0;o<r.length;o++){var i=r[o];if(i===t){return new e(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(n+1)+"]"}1===i.nodeType&&i.tagName===t.tagName&&n++}}},{key:"getAttribute",value:function(e){return this.domElement.getAttribute(e)||null}},{key:"getHash",value:function(){var e=String(this.getXpathTo()),t=0;if(0===e.length){return t}for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t|=0}return t}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}(),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return new m(e,t)};window.elementHelper=t.elementHelper})();
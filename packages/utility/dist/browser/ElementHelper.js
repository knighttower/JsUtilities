(()=>{"use strict";var e={d:(t,n)=>{for(var r in n){e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e){return}if("string"==typeof e){return r(e,t)}var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n){return Array.from(e)}if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)){return r(e,t)}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(l){throw u}}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++){r[n]=e[n]}return r}e.r(t),e.d(t,{ElementHelper:()=>c,default:()=>c,elementHelper:()=>c,selectElement:()=>m});var o={};!function(){if("undefined"!=typeof window){new MutationObserver((function(e){var t,r=n(e);try{for(r.s();!(t=r.n()).done;){if("childList"===t.value.type){for(var i in o){o[i]()}}}}catch(u){r.e(u)}finally{r.f()}})).observe(document.body,{childList:!0,subtree:!0})}}();var i=function(e,t){t&&(o[e]=t)},u=function(e){e&&delete o[e]};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!=a(e)||!e){return e}var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}var c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;!function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}(this,e),this.selector=t,"object"===a(t)?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=n.querySelector(t)}return t=e,(n=[{key:"isInDom",value:function(){var e;return Boolean(null===(e=this.domElement)||void 0===e?void 0:e.outerHTML)}},{key:"whenInDom",value:function(){var t=this,n=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(r){t.isInDom()?r(t):i(n,(function(){var o=new e(t.selector);o.isInDom()&&(r(t=o),u(n))}))}))}},{key:"getElementByXpath",value:function(e){return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}},{key:"getXpathTo",value:function(){var t=this.domElement;if(t.id){return"//*[@id='".concat(t.id,"']")}if(t===document.body){return"//"+t.tagName}for(var n=0,r=t.parentNode.childNodes,o=0;o<r.length;o++){var i=r[o];if(i===t){return new e(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(n+1)+"]"}1===i.nodeType&&i.tagName===t.tagName&&n++}}},{key:"getAttribute",value:function(e){return this.domElement.getAttribute(e)||null}},{key:"getHash",value:function(){var e=String(this.getXpathTo()),t=0;if(0===e.length){return t}for(var n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t|=0}return t}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,r}(),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return new c(e,t)};window.ElementHelper=t})();
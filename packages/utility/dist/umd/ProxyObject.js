!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ProxyObject",[],e):"object"==typeof exports?exports.ProxyObject=e():t.ProxyObject=e()}(this,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r){t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function o(t){return function(t){if(Array.isArray(t)){return c(t)}}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"]){return Array.from(t)}}(t)||function(t,e){if(!t){return}if("string"==typeof t){return c(t,e)}var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r){return Array.from(t)}if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)){return c(t,e)}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++){n[r]=t[r]}return n}function u(t){var e=new Set(["_private"].concat(o(t._private||[]))),r=new Set(["_protected"].concat(o(e),o(t._protected||[]))),n=new Set(t._mutable||[]),c=function(t){return r.has(t)&&!n.has(t)?(console.error("Attempt to modify protected property: ".concat(t)),!1):!(e.has(t)&&!n.has(t))||(console.error("Attempt to modify private property: ".concat(t)),!1)};return new Proxy(t,{get:function(t,r,n){if(!e.has(r)){return Reflect.get(t,r,n)}console.error("Attempt to access private property: ".concat(r))},set:function(t,e,r,n){return!!c(e)&&Reflect.set(t,e,r,n)},deleteProperty:function(t,e){return!!c(e)&&Reflect.deleteProperty(t,e)},defineProperty:function(t,e,r){return!!c(e)&&Reflect.defineProperty(t,e,r)},ownKeys:function(t){return Reflect.ownKeys(t).filter((function(t){return!e.has(t)}))},enumerate:function(t){return Reflect.enumerate(t).filter((function(t){return!e.has(t)}))},has:function(t,r){return!e.has(r)&&Reflect.has(t,r)},getOwnPropertyDescriptor:function(t,r){if(!e.has(r)){return Reflect.getOwnPropertyDescriptor(t,r)}}})}function f(t){return new Proxy(t,{construct:function(t,e){var c=function(t,e,o){if(r()){return Reflect.construct.apply(null,arguments)}var c=[null];c.push.apply(c,e);var u=new(t.bind.apply(t,c));return o&&n(u,o.prototype),u}(t,o(e));return u(c)}})}return t.r(e),t.d(e,{ProxyClass:()=>f,ProxyObject:()=>u,default:()=>u,proxyClass:()=>f,proxyObject:()=>u}),e})()));
(()=>{"use strict";var n={d:(t,e)=>{for(var r in e){n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};function e(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n){return}if("string"==typeof n){return r(n,t)}var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e){return Array.from(n)}if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)){return r(n,t)}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,f=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){f=!0,u=n},f:function(){try{a||null==e.return||e.return()}finally{if(f){throw u}}}}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++){r[e]=n[e]}return r}n.r(t),n.d(t,{typesMap:()=>E});var o={};!function(){if("undefined"!=typeof window){new MutationObserver((function(n){var t,r=e(n);try{for(r.s();!(t=r.n()).done;){if("childList"===t.value.type){for(var i in o){o[i]()}}}}catch(u){r.e(u)}finally{r.f()}})).observe(document.body,{childList:!0,subtree:!0})}}();function i(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n){return}if("string"==typeof n){return u(n,t)}var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e){return Array.from(n)}if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)){return u(n,t)}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,f=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){f=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(f){throw i}}}}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++){r[e]=n[e]}return r}var a={};!function(){if("undefined"!=typeof window){new MutationObserver((function(n){var t,e=i(n);try{for(e.s();!(t=e.n()).done;){if("childList"===t.value.type){for(var r in a){a[r]()}}}}catch(o){e.e(o)}finally{e.f()}})).observe(document.body,{childList:!0,subtree:!0})}}();function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}function l(n,t){return function(n){if(Array.isArray(n)){return n}}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,u,a=[],f=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e){return}f=!1}else{for(;!(f=(r=i.call(e)).done)&&(a.push(r.value),a.length!==t);f=!0){}}}catch(n){l=!0,o=n}finally{try{if(!f&&null!=e.return&&(u=e.return(),Object(u)!==u)){return}}finally{if(l){throw o}}}return a}}(n,t)||c(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,t){if(n){if("string"==typeof n){return y(n,t)}var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?y(n,t):void 0}}function y(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++){r[e]=n[e]}return r}var s,d,p,b,m,v,h,g,S,w,A,j,I,O,M;d="undefined"!=typeof window?window:void 0,p="undefined"!=typeof document?document:{},b=null==d?void 0:d.location,m=null==b?void 0:b.hash,v=null==b?void 0:b.href,h=null==b?void 0:b.search,g=null==b||null===(s=b.protocol)||void 0===s?void 0:s.replace(":",""),S=null==b?void 0:b.host,w=null==b?void 0:b.pathname,A="".concat(g,"://").concat(S),j="".concat(A).concat(w),I=function(){if(O){return O}var n,t=new URLSearchParams(h),e={},r=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=c(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){a=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(a){throw i}}}}}(t.entries());try{for(r.s();!(n=r.n()).done;){var o=l(n.value,2),i=o[0],u=o[1];e[i]=u}}catch(a){r.e(a)}finally{r.f()}return O={params:t,queryString:t.toString(),search:h,keys:Array.from(t.keys()),values:Array.from(t.values()),collection:e}},O=null,M={getPage:function(){var n;return(null===(n=v)||void 0===n?void 0:n.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return I()},getQuery:function(){return I().queryString},addToQuery:function(n){var t=I().collection;return Object.assign(t,n),{collection:t,queryString:Object.entries(t).map((function(n){var t=l(n,2),e=t[0],r=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(r))})).join("&")}},getHash:function(){var n;return null===(n=m)||void 0===n?void 0:n.substring(1)},setHash:function(n){m=n},deleteHash:function(){history.pushState("",p.title,w+h)},goTo:function(n){return v=n,!1},open:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return d.open(n,t,e)},onChange:function(n){"function"==typeof n&&d.addEventListener("hashchange",n)},fullUrl:j,siteUrl:A,protocol:g,host:S,path:w,readUrl:v},"undefined"!=typeof window&&"object"!==("undefined"==typeof module?"undefined":f(module))?window.UrlHelper=M:"undefined"==typeof module||f(module);function U(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n){return}if("string"==typeof n){return k(n,t)}var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e){return Array.from(n)}if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)){return k(n,t)}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return u=n.done,n},e:function(n){a=!0,i=n},f:function(){try{u||null==e.return||e.return()}finally{if(a){throw i}}}}}function k(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++){r[e]=n[e]}return r}function T(n){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},T(n)}function x(n,t){if(null===n){return t?null===t||"null"===t:"null"}var e;switch(T(n)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":e=T(n);break;case"object":e=Array.isArray(n)?"array":"object";break;default:e="unknown"}if(t){if(t.includes("|")){var r,o=U(t.split("|"));try{for(o.s();!(r=o.n()).done;){var i=r.value;if(e===i){return i}}}catch(u){o.e(u)}finally{o.f()}return!1}return t===e}return e}function C(n){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(n)}var E=new Map([["array",function(n){return x(n,"array")}],["bigInt",function(n){return"bigint"==typeof n}],["boolean",function(n){return"boolean"==typeof n}],["date",function(n){return n instanceof Date}],["float",function(n){return"number"==typeof n&&!Number.isInteger(n)}],["function",function(n){return"function"==typeof n}],["int",function(n){return Number.isInteger(n)}],["map",function(n){return n instanceof Map}],["null",function(n){return null===n}],["number",function(n){return"number"==typeof n}],["object",function(n){return x(n,"object")}],["promise",function(n){return n instanceof Promise}],["regExp",function(n){return n instanceof RegExp}],["set",function(n){return n instanceof Set}],["string",function(n){return"string"==typeof n}],["symbol",function(n){return"symbol"===C(n)}],["undefined",function(n){return void 0===n}],["weakMap",function(n){return n instanceof WeakMap}],["weakSet",function(n){return n instanceof WeakSet}]]);window.types=t})();
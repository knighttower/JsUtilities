(()=>{"use strict";var e={d:(r,t)=>{for(var n in t){e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})}},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=u(e)||!e){return e}var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=u(n)){return n}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==u(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return function(e){if(Array.isArray(e)){return e}}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t){return}c=!1}else{for(;!(c=(n=i.call(t)).done)&&(u.push(n.value),u.length!==r);c=!0){}}}catch(e){l=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a)){return}}finally{if(l){throw o}}}return u}}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){if(e){if("string"==typeof e){return a(e,r)}var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++){n[t]=e[t]}return n}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e){switch(u(e)){case"boolean":return e;case"string":return"false"!==e.toLowerCase()&&"0"!==e;case"number":return 0!==e;default:return Boolean(e)}}function l(e){var r=T(e);return null!==r?r:e}function s(e){return Number(e.replace(/[^0-9.-]+/g,""))}function f(e,r){if(!e||isNaN(new Date(e).getTime())){return null}var t=new Date(e),n=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).format(t);if(r){var o=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:"UTC"}).format(t);return"".concat(n," @ ").concat(o)}return n}function b(e){if(e=l(e)){return new Intl.NumberFormat("en-US",{minimumFractionDigits:2}).format(e)}}function y(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==T(e)||"boolean"==typeof e?e:P(e)?r:e}e.r(r),e.d(r,{convertToBool:()=>c,convertToNumber:()=>l,currencyToDecimal:()=>s,dateFormat:()=>f,decimalToCurrency:()=>b,dynamicId:()=>O,emptyOrValue:()=>y,extend:()=>d,formatPhoneNumber:()=>g,getDynamicId:()=>w,getGoogleMapsAddress:()=>A,getRandomId:()=>j,includes:()=>M,instanceOf:()=>D,isEmpty:()=>P,isNumber:()=>T,isPlainObject:()=>m,makeArray:()=>p,openGoogleMapsAddress:()=>I,randomId:()=>S,toCurrency:()=>k,toDollarString:()=>E,typeOf:()=>N,uniqueId:()=>h,uuid:()=>v,validateEmail:()=>C,validatePhone:()=>_});var m=function(e){return e&&"object"===u(e)&&e.constructor===Object},d=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++){i[a-1]=arguments[a]}return i.reduce((function(e,r){return m(r)?Object.entries(r).forEach((function(r){var t=o(r,2),n=t[0],i=t[1];e[n]=m(i)&&m(e[n])?d(e[n],i):i})):Object.assign(e,r),e}),function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}({},e))};function g(e,r){var t=e.replace(/\D/g,"");if(t.length<10){throw new Error("Invalid phone number length")}var n=0;return r.split("").map((function(e){return"0"===e&&n<t.length?t[n++]:e})).join("")}var p=function(e){return Array.isArray(e)?e:[e]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;e=e||40;for(var r="",t=0;t<e/3+1;t++){r+=Math.random().toString(36).substring(2,15)}return r.substring(0,e)},h=v;function w(){return"id__"+v(8)+"__"+(new Date).getTime()}var j=w,O=w,S=w;function A(e){if(!e){return!1}var r="";if(N(e,"string")){r=e}else{r=["address","address1","city","state","zip","zipcode"].reduce((function(r,t){var n=Object.keys(e).find((function(r){return r.includes(t)&&e[r]}));return n?"".concat(r," ").concat(e[n]):r}),"")}return r=r.trim().replace(/\s+|,/g,"+"),"https://maps.google.it/maps?q=".concat(r)}function M(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;r="string"==typeof r?r.toLowerCase():r;var n=N(e),o=function(n){var o=N(n);return"object"===o||"array"===o?M(n,r,t):"number"===o||"boolean"===o?e.toString().includes(r.toString(),t):n.includes(r,t)};switch(n){case"array":return e.some((function(e){return o(e)}));case"string":return e.toLowerCase().includes(r,t);case"number":case"boolean":return e.toString().includes(r.toString(),t);case"object":return Object.values(e).some((function(e){return o(e)}))}return e.includes(r,t)}function P(e){return null==e||("string"==typeof e||Array.isArray(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:ArrayBuffer.isView(e)?0===e.byteLength:"object"===u(e)&&0===Object.keys(e).length)}function T(e){var r=u(e);switch(e){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==r&&"string"!==r||"number"!=typeof e&&Number.isNaN(Number(e)))){return+e}}return null}function D(e,r){var t="unknown",n="function"==typeof e||"object"===u(e);if(null===e||!n){return!1}for(var o=[Date,RegExp,Promise,Map,Set,WeakMap,WeakSet,ArrayBuffer,DataView],i=o.length;i--;){if(e instanceof o[i]){t=o[i].name;break}}return r?(r="string"==typeof r?r.toLowerCase():r.name.toLowerCase(),"unknown"===t&&(t=e.name),r===t.toLowerCase()):t}function I(e){if(!N(e,"string")||!N(e,"object")){throw new Error("The input must be a string or an object.")}var r=A(e);if(!P(r)||!N(r,"string")){throw new Error("The address you are trying to open is invalid.")}return window.open(r,"_blank")}function k(e){return b(e)}function E(e){return N(e,"string")&&(e=s(e)),Math.abs(e)>999&&Math.abs(e)<999999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"K":Math.abs(e)>999999?Math.sign(e)*(Math.abs(e)/1e6).toFixed(1)+"M":Math.sign(e)*Math.abs(e)}function N(e,r){if(null===e){return r?null===r||"null"===r:"null"}var t;switch(u(e)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":t=u(e);break;case"object":t=Array.isArray(e)?"array":"object";break;default:t="unknown"}if(r){if(r.includes("|")){var n,o=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(c){throw a}}}}}(r.split("|"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if(t===a){return a}}}catch(e){o.e(e)}finally{o.f()}return!1}return r===t}return t}function C(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function _(e){return/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e)}window.utility=r})();
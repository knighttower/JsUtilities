!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Utility",[],t):"object"==typeof exports?exports.Utility=t():e.Utility=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){switch(typeof e){case"boolean":return e;case"string":return"false"!==e&&"0"!==e;case"number":return 0!==e;default:return Boolean(e)}}function r(e){const t=p(e);return null!==t?t:e}function o(e){return Number(e.replace(/[^0-9.-]+/g,""))}function i(e,t){if(!e||isNaN(new Date(e).getTime()))return null;const n=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).format(n);if(t){const e={hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:"UTC"};return`${r} @ ${new Intl.DateTimeFormat("en-US",e).format(n)}`}return r}function a(e){return new Intl.NumberFormat("en-GB",{minimumFractionDigits:2}).format(e)}function u(e,t=null){return null!==p(e)||"boolean"==typeof e?e:y(e)?t:e}function s(e,t){const n=e.replace(/\D/g,"");if(10!==n.length)throw new Error("Invalid phone number length");let r=[],o=0;for(let e=0;e<t.length;e++)"0"===t[e]?(r.push(n[o]),o++):r.push(t[e]);return r.join("")}e.r(t),e.d(t,{Utility:()=>j,convertToBool:()=>n,convertToNumber:()=>r,currencyToDecimal:()=>o,dateFormat:()=>i,decimalToCurrency:()=>a,default:()=>j,emptyOrValue:()=>u,formatPhoneNumber:()=>s,getDynamicId:()=>c,getGoogleMapsAddress:()=>d,getRandomId:()=>f,includes:()=>m,instanceOf:()=>g,isEmpty:()=>y,isNumber:()=>p,makeArray:()=>l,openGoogleMapsAddress:()=>b,toCurrency:()=>h,toDollarString:()=>w,typeOf:()=>M,utility:()=>j,utils:()=>j,validateEmail:()=>A,validatePhone:()=>T});const l=e=>Array.isArray(e)?e:[e];function c(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())}const f=c;function d(e){if(!e)return!1;let t="";return t=M(e,"string")?e:["address","address1","city","state","zip","zipcode"].reduce(((t,n)=>{const r=Object.keys(e).find((t=>t.includes(n)&&e[t]));return r?`${t} ${e[r]}`:t}),""),t=t.trim().replace(/\s+|,/g,"+"),`https://maps.google.it/maps?q=${t}`}function m(e,t,n=0){if(Array.isArray(e)||"string"==typeof e)return e.includes(t,n);if("object"==typeof e)for(let n in e)if(e[n]===t)return!0;return!1}function y(e){return null==e||("string"==typeof e||Array.isArray(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:ArrayBuffer.isView(e)?0===e.byteLength:"object"==typeof e&&0===Object.keys(e).length)}function p(e){const t=typeof e;switch(e){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==t&&"string"!==t||"number"!=typeof e&&Number.isNaN(Number(e))))return+e}return null}function g(e,t){let n="unknown";if(null===e||"function"!=typeof e&&"object"!=typeof e)return!1;const r=[Date,RegExp,Promise,Map,Set,WeakMap,WeakSet,ArrayBuffer,DataView];let o=r.length;for(;o--;)if(e instanceof r[o]){n=r[o].name;break}return t?(t="string"==typeof t?t.toLowerCase():t.name.toLowerCase(),"unknown"===n&&(n=e.name),t===n.toLowerCase()):n}function b(e){if(!M(e,"string")||!M(e,"object"))throw new Error("The input must be a string or an object.");const t=d(e);if(!y(t)||!M(t,"string"))throw new Error("The address you are trying to open is invalid.");return window.open(t,"_blank")}function h(e){return a(e)}function w(e){return M(e,"string")&&(e=o(e)),Math.abs(e)>999&&Math.abs(e)<999999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"K":Math.abs(e)>999999?Math.sign(e)*(Math.abs(e)/1e6).toFixed(1)+"M":Math.sign(e)*Math.abs(e)}function M(e,t){if(null===e)return t?null===t||"null"===t:"null";let n;switch(typeof e){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof e;break;case"object":n=Array.isArray(e)?"array":"object";break;default:n="unknown"}if(t){if(t.includes("|")){for(let e of t.split("|"))if(n===e)return e;return!1}return t===n}return n}function A(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function T(e){return/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e)}const j={convertToBool:n,currencyToDecimal:o,convertToNumber:r,dateFormat:i,decimalToCurrency:a,emptyOrValue:u,formatPhoneNumber:s,getDynamicId:c,getGoogleMapsAddress:d,getRandomId:f,includes:m,isEmpty:y,isNumber:p,instanceOf:g,openGoogleMapsAddress:b,toCurrency:h,toDollarString:w,typeOf:M,validateEmail:A,validatePhone:T,makeArray:l};return t})()));
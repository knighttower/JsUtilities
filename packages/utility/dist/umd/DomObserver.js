!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("DomObserver",[],t):"object"==typeof exports?exports.DomObserver=t():e.DomObserver=t()}(this,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.r(t),e.d(t,{DomObserver:()=>o,default:()=>o,domObserver:()=>o});var n={};"undefined"!=typeof window&&new MutationObserver((function(e){var t,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){f=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw a}}}}(e);try{for(o.s();!(t=o.n()).done;)if("childList"===t.value.type)for(var i in n)n[i]()}catch(e){o.e(e)}finally{o.f()}})).observe(document.body,{childList:!0,subtree:!0});var o={executeOnNodeChanged:n,addOnNodeChange:function(e,t){t&&(n[e]=t)},removeOnNodeChange:function(e){e&&delete n[e]},cleanup:function(){Object.keys(n).forEach((function(e){return delete n[e]}))}};return t})()));
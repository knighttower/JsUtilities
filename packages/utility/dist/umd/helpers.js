var r,t;r=this,t=()=>(()=>{"use strict";var r={d:(t,n)=>{for(var e in n){r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};function n(r,t){var n="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!n){if(Array.isArray(r)||(n=function(r,t){if(r){if("string"==typeof r){return e(r,t)}var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(r)},n:function(){var r=n.next();return u=r.done,r},e:function(r){c=!0,a=r},f:function(){try{u||null==n.return||n.return()}finally{if(c){throw a}}}}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++){e[n]=r[n]}return e}function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}function i(r){switch(o(r)){case"boolean":return r;case"string":return"false"!==r&&"0"!==r;case"number":return 0!==r;default:return Boolean(r)}}function a(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==s(r)||"boolean"==typeof r?r:f(r)?t:r}r.r(t),r.d(t,{addQuotes:()=>b,cleanStr:()=>m,convertKeysToSymbols:()=>h,findAndReplaceInArray:()=>S,findNested:()=>A,fixQuotes:()=>j,getArrObjFromString:()=>O,getChunks:()=>_,getDirectivesFromString:()=>x,getMatchBlock:()=>E,getMatchInBetween:()=>k,getObjectFromPath:()=>w,removeQuotes:()=>I,setExpString:()=>P,setLookUpExp:()=>T,setWildCardString:()=>$,startAndEndWith:()=>M,wildCardStringSearch:()=>N});var u=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;r=r||40;for(var t="",n=0;n<r/3+1;n++){t+=Math.random().toString(36).substring(2,15)}return t.substring(0,r)};function c(){return"id__"+u(8)+"__"+(new Date).getTime()}var l=c;function f(r){return null==r||("string"==typeof r||Array.isArray(r)?0===r.length:r instanceof Map||r instanceof Set?0===r.size:ArrayBuffer.isView(r)?0===r.byteLength:"object"===o(r)&&0===Object.keys(r).length)}function s(r){var t=o(r);switch(r){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==t&&"string"!==t||"number"!=typeof r&&Number.isNaN(Number(r)))){return+r}}return null}function y(r,t){if(null===r){return t?null===t||"null"===t:"null"}var e;switch(o(r)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":e=o(r);break;case"object":e=Array.isArray(r)?"array":"object";break;default:e="unknown"}if(t){if(t.includes("|")){var i,a=n(t.split("|"));try{for(a.s();!(i=a.n()).done;){var u=i.value;if(e===u){return u}}}catch(r){a.e(r)}finally{a.f()}return!1}return t===e}return e}function v(r,t){return function(r){if(Array.isArray(r)){return r}}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(r)).next,0===t){if(Object(n)!==n){return}c=!1}else{for(;!(c=(e=i.call(n)).done)&&(u.push(e.value),u.length!==t);c=!0){}}}catch(r){l=!0,o=r}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(l){throw o}}}return u}}(r,t)||function(r,t){if(r){if("string"==typeof r){return g(r,t)}var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++){e[n]=r[n]}return e}function p(r,t,n){return(t=function(r){var t=function(r,t){if("object"!=d(r)||!r){return r}var n=r[Symbol.toPrimitive];if(void 0!==n){var e=n.call(r,t||"default");if("object"!=d(e)){return e}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==d(t)?t:t+""}(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function d(r){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},d(r)}function b(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'"';return"".concat(t).concat(r).concat(t)}function m(r){if(r){if("string"!=typeof r){return r}for(var t=arguments.length,n=new Array(t>1?t-1:0),e=1;e<t;e++){n[e-1]=arguments[e]}return n.reduce((function(r,t){var n=t instanceof RegExp?t:new RegExp(P(t));return r.replace(n,"")}),r).trim()}}function h(r){if(null===a(r,null)){return{}}var t={},n={};for(var e in r){var o=Symbol(e);t[o]=r[e],n[e]=o}return t.keyToSymbolMap=n,t}function S(r,t,n){var e=!1,o=r.map((function(r){if(Array.isArray(r)){var o=S(r,t,n);return o?(e=!0,o):r}return r===t?(e=!0,Array.isArray(n)?n.map((function(r){return Array.isArray(r)?r:r.trim()})):n):r}));return e?o:null}function A(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"]";if("string"!=typeof r){return r}var e=r.lastIndexOf(t);if(-1===e){return null}var o=r.substring(e),i=o.indexOf(n);return-1===i?null:o.substring(0,i+1)}function j(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'"';return"string"!=typeof r?r:r.replace(/`|'|"/g,t)}function w(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return r.split(".").reduce((function(r,t){return r&&r[t]}),t)}function O(r){if(y(r,"object")||y(r,"array")){return r}var t=M(r,"{","}"),n=M(r,"[","]");if(!t&&!n){return r}var e=t?{}:[],o={},i=function(r){var t=r.match(/^(\[|\{)(.*?)(\]|\})$/);return t?t[2].trim():r}(r),u=function(){for(var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];;){var t=r?A(i,"{","}"):A(i);if(!t){break}var n="__".concat(l(),"__");o[n]=t,i=i.replace(t,n)}};return u(),u(!0),_(i).forEach((function(r,n){var i,u,c=r.includes(":")&&t,l=c?_(r,":"):[],f=I(a(l[0],n));(r=c?l[1]:r)in o&&(r=O(o[r])),i=I(r),r=null!==(u=s(i))?u:i,t?e[f]=r:e.push(r)})),e}function x(r){var t=r;if(!a(t)){return null}var n=function(){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,directive:r}},e=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm,o=d(t);if("object"===o||"array"===o){return n(o,t)}switch(!0){case!!t.match(/^\[((.|\n)*?)\]$/gm):o="array";break;case!!t.match(/^\{((.|\n)*?)\:((.|\n)*?)\}/gm):o="object";break;case!!t.match(/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g):return n("idOrClassWithDirective",p({},t.split("(")[0].trim(),k(t,"(",")")));case!!t.match(/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm):case!!t.match(e):o="dotObject";break;default:return n("string",t)}if("array"===o||"object"===o){var i=j(t);try{return n(o,JSON.parse(i))}catch(r){}return n(o,O(i))}if("dotObject"===o){var u,c,l,f={};return _(t,"&&").forEach((function(r){if(r.match(e)){u=k(r,"](",")"),c=k(r,"[","]"),l=r.split("[")[0].trim()}else{u=k(r,"(",")");var t=v(_(r=r.replace(E(r,"(",")"),""),"."),2);l=t[0],c=t[1]}u=O(u),f[l]||(f[l]={}),_(c,"|").forEach((function(r){f[l][r]=u}))})),n("dotObject",f)}}function E(r,t,n){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof r){return r}t=P(t),n=P(n);var o=new RegExp(T(t,n),"gm"),i=r.match(o);return i?e?i:i[0]:null}function _(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if("string"!=typeof r){return r}if(f(r)){return[]}var n=(r=m(r)).split(t).map((function(r){return m(r)}));return 1===n.length&&""===n[0]?[r]:n}function k(r,t,n){var e,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof r){return r}var i=null!==(e=E(r,t,n,o))&&void 0!==e?e:o?[]:r;return o?i.map((function(r){return m(r,t,n)})):m(i,t,n)}function I(r){return"string"!=typeof r?r:r.replace(/`|'|"/g,"")}function M(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(!t||r.startsWith(t))&&(!n||r.endsWith(n))}function P(r){return r instanceof RegExp?r:r.split("").map((function(r){return["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(r)?"\\".concat(r):r})).join("")}function T(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}if(t.length<2){throw new Error("You need to pass at least two arguments")}var e="";return t.forEach((function(r,t){r instanceof RegExp&&(r=r.source),0===t?e=r:e+="((.|\n)*?)".concat(r)})),e}function $(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof r){return r}if(!r){return null}t=i(t),n=i(n);var e=r.replace(/([.+?^${}()|\[\]\/\\])/g,"\\$&"),o=t?"^":"",a=n?"$":"";return e=e.replace(/\*\*/g,"[_g_]").replace(/\*/g,"(.*?)").replace(/\[_g_\]/g,".*"),"".concat(o).concat(e).concat(a)}function N(r,t){if(!r||!t){return null}var n=new RegExp($(r,arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3]));return a("string"==typeof t?t.match(n):t.filter((function(r){return n.test(r)})))}return t})(),"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("helpers",[],t):"object"==typeof exports?exports.helpers=t():r.helpers=t();
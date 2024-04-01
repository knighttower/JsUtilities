!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PowerHelpers",[],t):"object"==typeof exports?exports.PowerHelpers=t():e.PowerHelpers=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){switch(typeof e){case"boolean":return e;case"string":return"false"!==e&&"0"!==e;case"number":return 0!==e;default:return Boolean(e)}}function n(e,t=null){return null!==u(e)||"boolean"==typeof e?e:i(e)?t:e}e.r(t),e.d(t,{PowerHelper:()=>k,addQuotes:()=>a,cleanStr:()=>s,convertKeysToSymbols:()=>l,default:()=>k,findAndReplaceInArray:()=>f,findNested:()=>p,fixQuotes:()=>g,getArrObjFromString:()=>y,getChunks:()=>h,getDirectivesFromString:()=>m,getMatchBlock:()=>b,getMatchInBetween:()=>w,getObjectFromPath:()=>d,powerHelper:()=>k,removeQuotes:()=>S,setExpString:()=>A,setLookUpExp:()=>x,setWildCardString:()=>E,startAndEndWith:()=>j,wildCardStringSearch:()=>O});const o=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function i(e){return null==e||("string"==typeof e||Array.isArray(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:ArrayBuffer.isView(e)?0===e.byteLength:"object"==typeof e&&0===Object.keys(e).length)}function u(e){const t=typeof e;switch(e){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==t&&"string"!==t||"number"!=typeof e&&Number.isNaN(Number(e))))return+e}return null}function c(e,t){if(null===e)return t?null===t||"null"===t:"null";let r;switch(typeof e){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":r=typeof e;break;case"object":r=Array.isArray(e)?"array":"object";break;default:r="unknown"}if(t){if(t.includes("|")){for(let e of t.split("|"))if(r===e)return e;return!1}return t===r}return r}function a(e,t='"'){return`${t}${e}${t}`}function s(e,...t){if(e)return"string"!=typeof e?e:t.reduce(((e,t)=>{const r=t instanceof RegExp?t:new RegExp(A(t));return e.replace(r,"")}),e).trim()}function l(e){if(null===n(e,null))return{};const t={},r={};for(const n in e){const o=Symbol(n);t[o]=e[n],r[n]=o}return t.keyToSymbolMap=r,t}function f(e,t,r){let n=!1;const o=e.map((e=>{if(Array.isArray(e)){const o=f(e,t,r);return o?(n=!0,o):e}return e===t?(n=!0,Array.isArray(r)?r.map((e=>Array.isArray(e)?e:e.trim())):r):e}));return n?o:null}function p(e,t="[",r="]"){if("string"!=typeof e)return e;const n=e.lastIndexOf(t);if(-1===n)return null;const o=e.substring(n),i=o.indexOf(r);return-1===i?null:o.substring(0,i+1)}function g(e,t='"'){return"string"!=typeof e?e:e.replace(/`|'|"/g,t)}function d(e,t=window){return e.split(".").reduce(((e,t)=>e&&e[t]),t)}function y(e){if(c(e,"object")||c(e,"array"))return e;const t=j(e,"{","}"),r=j(e,"[","]");if(!t&&!r)return e;const i=t?{}:[],a={};let s=function(e){const t=e.match(/^(\[|\{)(.*?)(\]|\})$/);return t?t[2].trim():e}(e);const l=(e=!1)=>{for(;;){let t=e?p(s,"{","}"):p(s);if(!t)break;let r=`__${o()}__`;a[r]=t,s=s.replace(t,r)}};return l(),l(!0),h(s).forEach(((e,r)=>{const o=e.includes(":")&&t,c=o?h(e,":"):[],s=S(n(c[0],r));(e=o?c[1]:e)in a&&(e=y(a[e])),e=function(e){const t=u(e);return null!==t?t:e}(S(e)),t?i[s]=e:i.push(e)})),i}function m(e){const t=e;if(!n(t))return null;const r=(e=null,t=null)=>({type:e,directive:t}),o=/^\[((.|\n)*?)\]$/gm,i=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,u=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,c=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,a=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let s=typeof t;if("object"===s||"array"===s)return r(s,t);switch(!0){case!!t.match(o):s="array";break;case!!t.match(i):s="object";break;case!!t.match(u):return r("idOrClassWithDirective",{[t.split("(")[0].trim()]:w(t,"(",")")});case!!t.match(c):case!!t.match(a):s="dotObject";break;default:return r("string",t)}if("array"===s||"object"===s){let e=g(t);try{return r(s,JSON.parse(e))}catch(e){}return r(s,y(e))}if("dotObject"===s){let e,n,o;const i={};return h(t,"&&").forEach((t=>{t.match(a)?(e=w(t,"](",")"),n=w(t,"[","]"),o=t.split("[")[0].trim()):(e=w(t,"(",")"),t=t.replace(b(t,"(",")"),""),[o,n]=h(t,".")),e=y(e),i[o]||(i[o]={}),h(n,"|").forEach((t=>{i[o][t]=e}))})),r("dotObject",i)}}function b(e,t,r,n=!1){if("string"!=typeof e)return e;t=A(t),r=A(r);let o=new RegExp(x(t,r),"gm");const i=e.match(o);return i?n?i:i[0]:null}function h(e,t=","){if("string"!=typeof e)return e;if(i(e))return[];let r=(e=s(e)).split(t).map((e=>s(e)));return 1===r.length&&""===r[0]?[e]:r}function w(e,t,r,n=!1){if("string"!=typeof e)return e;const o=b(e,t,r,n)??(n?[]:e);return n?o.map((e=>s(e,t,r))):s(o,t,r)}function S(e){return"string"!=typeof e?e:e.replace(/`|'|"/g,"")}function j(e,t=null,r=null){return(!t||e.startsWith(t))&&(!r||e.endsWith(r))}function A(e){return e instanceof RegExp?e:e.split("").map((e=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(e)?`\\${e}`:e)).join("")}function x(...e){if(e.length<2)throw new Error("You need to pass at least two arguments");let t="";return e.forEach(((e,r)=>{e instanceof RegExp&&(e=e.source),0===r?t=e:t+=`((.|\n)*?)${e}`})),t}function E(e,t=!1,n=!1){if("string"!=typeof e)return e;if(!e)return null;t=r(t),n=r(n);let o=e.replace(/([.+?^${}()|\[\]\/\\])/g,"\\$&"),i=t?"^":"",u=n?"$":"";return o=o.replace(/\*\*/g,"[_g_]").replace(/\*/g,"(.*?)").replace(/\[_g_\]/g,".*"),`${i}${o}${u}`}function O(e,t,r=!1,o=!1){if(!e||!t)return null;const i=new RegExp(E(e,r,o));if("string"==typeof t)return n(t.match(i));let u=[];return u=t.filter((e=>i.test(e))),n(u)}const k={addQuotes:a,cleanStr:s,convertKeysToSymbols:l,findAndReplaceInArray:f,findNested:p,fixQuotes:g,getArrObjFromString:y,getChunks:h,getDirectivesFromString:m,getMatchBlock:b,getMatchInBetween:w,getObjectFromPath:d,removeQuotes:S,startAndEndWith:j,setExpString:A,setLookUpExp:x,setWildCardString:E,wildCardStringSearch:O};return t})()));
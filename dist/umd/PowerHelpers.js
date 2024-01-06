!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PowerHelpers",[],t):"object"==typeof exports?exports.PowerHelpers=t():e.PowerHelpers=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{PowerHelper:()=>O,addQuotes:()=>a,cleanStr:()=>l,convertKeysToSymbols:()=>f,default:()=>O,findAndReplaceInArray:()=>p,findNested:()=>g,fixQuotes:()=>d,getArrObjFromString:()=>y,getChunks:()=>h,getDirectivesFromString:()=>b,getMatchBlock:()=>m,getMatchInBetween:()=>w,powerHelper:()=>O,removeQuotes:()=>S,setExpString:()=>j,setLookUpExp:()=>x,setWildCardString:()=>E,startAndEndWith:()=>A,wildCardStringSearch:()=>k});const r={};function n(e){switch(typeof e){case"boolean":return e;case"string":return"false"!==e&&"0"!==e;case"number":return 0!==e;default:return Boolean(e)}}function o(e,t=null){return null!==u(e)||"boolean"==typeof e?e:c(e)?t:e}(()=>{if("undefined"!=typeof window){const e={childList:!0,subtree:!0};new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e in r)r[e]()})).observe(document.body,e)}})();const i=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function c(e){return null==e||("string"==typeof e||Array.isArray(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:ArrayBuffer.isView(e)?0===e.byteLength:"object"==typeof e&&0===Object.keys(e).length)}function u(e){const t=typeof e;switch(e){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==t&&"string"!==t||"number"!=typeof e&&Number.isNaN(Number(e))))return+e}return null}function s(e,t){if(null===e)return t?null===t||"null"===t:"null";let r;switch(typeof e){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":r=typeof e;break;case"object":r=Array.isArray(e)?"array":"object";break;default:r="unknown"}if(t){if(t.includes("|")){for(let e of t.split("|"))if(r===e)return e;return!1}return t===r}return r}function a(e,t='"'){return`${t}${e}${t}`}function l(e,...t){if(e)return"string"!=typeof e?e:t.reduce(((e,t)=>{const r=t instanceof RegExp?t:new RegExp(j(t));return e.replace(r,"")}),e).trim()}function f(e){if(null===o(e,null))return{};const t={},r={};for(const n in e){const o=Symbol(n);t[o]=e[n],r[n]=o}return t.keyToSymbolMap=r,t}function p(e,t,r){let n=!1;const o=e.map((e=>{if(Array.isArray(e)){const o=p(e,t,r);return o?(n=!0,o):e}return e===t?(n=!0,Array.isArray(r)?r.map((e=>Array.isArray(e)?e:e.trim())):r):e}));return n?o:null}function g(e,t="[",r="]"){if("string"!=typeof e)return e;const n=e.lastIndexOf(t);if(-1===n)return null;const o=e.substring(n),i=o.indexOf(r);return-1===i?null:o.substring(0,i+1)}function d(e,t='"'){return"string"!=typeof e?e:e.replace(/`|'|"/g,t)}function y(e){if(s(e,"object")||s(e,"array"))return e;const t=A(e,"{","}"),r=A(e,"[","]");if(!t&&!r)return e;const n=t?{}:[],c={};let a=function(e){const t=e.match(/^(\[|\{)(.*?)(\]|\})$/);return t?t[2].trim():e}(e);const l=(e=!1)=>{for(;;){let t=e?g(a,"{","}"):g(a);if(!t)break;let r=`__${i()}__`;c[r]=t,a=a.replace(t,r)}};return l(),l(!0),h(a).forEach(((e,r)=>{const i=e.includes(":")&&t,s=i?h(e,":"):[],a=S(o(s[0],r));(e=i?s[1]:e)in c&&(e=y(c[e])),e=function(e){const t=u(e);return null!==t?t:e}(S(e)),t?n[a]=e:n.push(e)})),n}function b(e){const t=e;if(!o(t))return null;const r=(e=null,t=null)=>({type:e,directive:t}),n=/^\[((.|\n)*?)\]$/gm,i=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,c=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,u=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,s=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let a=typeof t;if("object"===a||"array"===a)return r(a,t);switch(!0){case!!t.match(n):a="array";break;case!!t.match(i):a="object";break;case!!t.match(c):return r("idOrClassWithDirective",{[t.split("(")[0].trim()]:w(t,"(",")")});case!!t.match(u):case!!t.match(s):a="dotObject";break;default:return r("string",t)}if("array"===a||"object"===a){let e=d(t);try{return r(a,JSON.parse(e))}catch(e){}return r(a,y(e))}if("dotObject"===a){let e,n,o;const i={};return h(t,"&&").forEach((t=>{t.match(s)?(e=w(t,"](",")"),n=w(t,"[","]"),o=t.split("[")[0].trim()):(e=w(t,"(",")"),t=t.replace(m(t,"(",")"),""),[o,n]=h(t,".")),e=y(e),i[o]||(i[o]={}),h(n,"|").forEach((t=>{i[o][t]=e}))})),r("dotObject",i)}}function m(e,t,r,n=!1){if("string"!=typeof e)return e;t=j(t),r=j(r);let o=new RegExp(x(t,r),"gm");const i=e.match(o);return i?n?i:i[0]:null}function h(e,t=","){if("string"!=typeof e)return e;if(c(e))return[];let r=(e=l(e)).split(t).map((e=>l(e)));return 1===r.length&&""===r[0]?[e]:r}function w(e,t,r,n=!1){if("string"!=typeof e)return e;const o=m(e,t,r,n)??(n?[]:e);return n?o.map((e=>l(e,t,r))):l(o,t,r)}function S(e){return"string"!=typeof e?e:e.replace(/`|'|"/g,"")}function A(e,t=null,r=null){return(!t||e.startsWith(t))&&(!r||e.endsWith(r))}function j(e){return e instanceof RegExp?e:e.split("").map((e=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(e)?`\\${e}`:e)).join("")}function x(...e){if(e.length<2)throw new Error("You need to pass at least two arguments");let t="";return e.forEach(((e,r)=>{e instanceof RegExp&&(e=e.source),0===r?t=e:t+=`((.|\n)*?)${e}`})),t}function E(e,t=!1,r=!1){if("string"!=typeof e)return e;if(!e)return null;t=n(t),r=n(r);let o=e.replace(/([.+?^${}()|\[\]\/\\])/g,"\\$&"),i=t?"^":"",c=r?"$":"";return o=o.replace(/\*\*/g,"[_g_]").replace(/\*/g,"(.*?)").replace(/\[_g_\]/g,".*"),`${i}${o}${c}`}function k(e,t,r=!1,n=!1){if(!e||!t)return null;const i=new RegExp(E(e,r,n));if("string"==typeof t)return o(t.match(i));let c=[];return c=t.filter((e=>i.test(e))),o(c)}const O={addQuotes:a,cleanStr:l,convertKeysToSymbols:f,findAndReplaceInArray:p,findNested:g,fixQuotes:d,getArrObjFromString:y,getChunks:h,getDirectivesFromString:b,getMatchBlock:m,getMatchInBetween:w,removeQuotes:S,startAndEndWith:A,setExpString:j,setLookUpExp:x,setWildCardString:E,wildCardStringSearch:k};return t})()));
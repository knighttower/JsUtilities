(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){switch(typeof t){case"boolean":return t;case"string":return"false"!==t&&"0"!==t;case"number":return 0!==t;default:return Boolean(t)}}function n(t,e=null){return null!==u(t)||"boolean"==typeof t?t:i(t)?e:t}t.r(e),t.d(e,{PowerHelper:()=>$,addQuotes:()=>a,cleanStr:()=>s,convertKeysToSymbols:()=>l,default:()=>$,findAndReplaceInArray:()=>f,findNested:()=>g,fixQuotes:()=>p,getArrObjFromString:()=>y,getChunks:()=>h,getDirectivesFromString:()=>m,getMatchBlock:()=>b,getMatchInBetween:()=>w,getObjectFromPath:()=>d,powerHelper:()=>$,removeQuotes:()=>S,setExpString:()=>j,setLookUpExp:()=>E,setWildCardString:()=>O,startAndEndWith:()=>A,wildCardStringSearch:()=>k});const o=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function i(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function u(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t))))return+t}return null}function c(t,e){if(null===t)return e?null===e||"null"===e:"null";let r;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":r=typeof t;break;case"object":r=Array.isArray(t)?"array":"object";break;default:r="unknown"}if(e){if(e.includes("|")){for(let t of e.split("|"))if(r===t)return t;return!1}return e===r}return r}function a(t,e='"'){return`${e}${t}${e}`}function s(t,...e){if(t)return"string"!=typeof t?t:e.reduce(((t,e)=>{const r=e instanceof RegExp?e:new RegExp(j(e));return t.replace(r,"")}),t).trim()}function l(t){if(null===n(t,null))return{};const e={},r={};for(const n in t){const o=Symbol(n);e[o]=t[n],r[n]=o}return e.keyToSymbolMap=r,e}function f(t,e,r){let n=!1;const o=t.map((t=>{if(Array.isArray(t)){const o=f(t,e,r);return o?(n=!0,o):t}return t===e?(n=!0,Array.isArray(r)?r.map((t=>Array.isArray(t)?t:t.trim())):r):t}));return n?o:null}function g(t,e="[",r="]"){if("string"!=typeof t)return t;const n=t.lastIndexOf(e);if(-1===n)return null;const o=t.substring(n),i=o.indexOf(r);return-1===i?null:o.substring(0,i+1)}function p(t,e='"'){return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}function d(t,e=window){return t.split(".").reduce(((t,e)=>t&&t[e]),e)}function y(t){if(c(t,"object")||c(t,"array"))return t;const e=A(t,"{","}"),r=A(t,"[","]");if(!e&&!r)return t;const i=e?{}:[],a={};let s=function(t){const e=t.match(/^(\[|\{)(.*?)(\]|\})$/);return e?e[2].trim():t}(t);const l=(t=!1)=>{for(;;){let e=t?g(s,"{","}"):g(s);if(!e)break;let r=`__${o()}__`;a[r]=e,s=s.replace(e,r)}};return l(),l(!0),h(s).forEach(((t,r)=>{const o=t.includes(":")&&e,c=o?h(t,":"):[],s=S(n(c[0],r));(t=o?c[1]:t)in a&&(t=y(a[t])),t=function(t){const e=u(t);return null!==e?e:t}(S(t)),e?i[s]=t:i.push(t)})),i}function m(t){const e=t;if(!n(e))return null;const r=(t=null,e=null)=>({type:t,directive:e}),o=/^\[((.|\n)*?)\]$/gm,i=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,u=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,c=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,a=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let s=typeof e;if("object"===s||"array"===s)return r(s,e);switch(!0){case!!e.match(o):s="array";break;case!!e.match(i):s="object";break;case!!e.match(u):return r("idOrClassWithDirective",{[e.split("(")[0].trim()]:w(e,"(",")")});case!!e.match(c):case!!e.match(a):s="dotObject";break;default:return r("string",e)}if("array"===s||"object"===s){let t=p(e);try{return r(s,JSON.parse(t))}catch(t){}return r(s,y(t))}if("dotObject"===s){let t,n,o;const i={};return h(e,"&&").forEach((e=>{e.match(a)?(t=w(e,"](",")"),n=w(e,"[","]"),o=e.split("[")[0].trim()):(t=w(e,"(",")"),e=e.replace(b(e,"(",")"),""),[o,n]=h(e,".")),t=y(t),i[o]||(i[o]={}),h(n,"|").forEach((e=>{i[o][e]=t}))})),r("dotObject",i)}}function b(t,e,r,n=!1){if("string"!=typeof t)return t;e=j(e),r=j(r);let o=new RegExp(E(e,r),"gm");const i=t.match(o);return i?n?i:i[0]:null}function h(t,e=","){if("string"!=typeof t)return t;if(i(t))return[];let r=(t=s(t)).split(e).map((t=>s(t)));return 1===r.length&&""===r[0]?[t]:r}function w(t,e,r,n=!1){if("string"!=typeof t)return t;const o=b(t,e,r,n)??(n?[]:t);return n?o.map((t=>s(t,e,r))):s(o,e,r)}function S(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function A(t,e=null,r=null){return(!e||t.startsWith(e))&&(!r||t.endsWith(r))}function j(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}function E(...t){if(t.length<2)throw new Error("You need to pass at least two arguments");let e="";return t.forEach(((t,r)=>{t instanceof RegExp&&(t=t.source),0===r?e=t:e+=`((.|\n)*?)${t}`})),e}function O(t,e=!1,n=!1){if("string"!=typeof t)return t;if(!t)return null;e=r(e),n=r(n);let o=t.replace(/([.+?^${}()|\[\]\/\\])/g,"\\$&"),i=e?"^":"",u=n?"$":"";return o=o.replace(/\*\*/g,"[_g_]").replace(/\*/g,"(.*?)").replace(/\[_g_\]/g,".*"),`${i}${o}${u}`}function k(t,e,r=!1,o=!1){if(!t||!e)return null;const i=new RegExp(O(t,r,o));if("string"==typeof e)return n(e.match(i));let u=[];return u=e.filter((t=>i.test(t))),n(u)}const $={addQuotes:a,cleanStr:s,convertKeysToSymbols:l,findAndReplaceInArray:f,findNested:g,fixQuotes:p,getArrObjFromString:y,getChunks:h,getDirectivesFromString:m,getMatchBlock:b,getMatchInBetween:w,getObjectFromPath:d,removeQuotes:S,startAndEndWith:A,setExpString:j,setLookUpExp:E,setWildCardString:O,wildCardStringSearch:k};window.PowerHelpers=e})();
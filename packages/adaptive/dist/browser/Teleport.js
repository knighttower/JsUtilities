(()=>{"use strict";var t={d:(e,n)=>{for(var r in n){t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Teleport:()=>_t,TeleportGlobal:()=>Kt,default:()=>_t,teleport:()=>_t});const n={};(()=>{if("undefined"!=typeof window){const t={childList:!0,subtree:!0};new MutationObserver((t=>{for(const e of t){if("childList"===e.type){for(const t in n){n[t]()}}}})).observe(document.body,t)}})();const r=(t,e)=>{e&&(n[t]=e)},o=t=>{t&&delete n[t]},i={};(()=>{if("undefined"!=typeof window){const t={childList:!0,subtree:!0};new MutationObserver((t=>{for(const e of t){if("childList"===e.type){for(const t in i){i[t]()}}}})).observe(document.body,t)}})();const a=(t,e)=>{e&&(i[t]=e)},u=t=>{t&&delete i[t]};class ElementHelper{constructor(t,e=document){this.selector=t,"object"==typeof t?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=e.querySelector(t)}isInDom(){return Boolean(this.domElement?.outerHTML)}whenInDom(){let t=this,e=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(n){t.isInDom()?n(t):a(e,(()=>{let r=new ElementHelper(t.selector);r.isInDom()&&(t=r,n(t),u(e))}))}))}getElementByXpath(t){return document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}getXpathTo(){let t=this.domElement;if(t.id){return`//*[@id='${t.id}']`}if(t===document.body){return"//"+t.tagName}let e=0,n=t.parentNode.childNodes;for(let r=0;r<n.length;r++){let o=n[r];if(o===t){return new ElementHelper(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(e+1)+"]"}1===o.nodeType&&o.tagName===t.tagName&&e++}}getAttribute(t){return this.domElement.getAttribute(t)||null}getHash(){let t=String(this.getXpathTo()),e=0;if(0===t.length){return e}for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e|=0}return e}}const s=(t,e=document)=>new ElementHelper(t,e);function l(t,e=null){return null!==y(t)||"boolean"==typeof t?t:f(t)?e:t}const c=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function f(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function y(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t)))){return+t}}return null}function p(t,e){if(null===t){return e?null===e||"null"===e:"null"}let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){for(let t of e.split("|")){if(n===t){return t}}return!1}return e===n}return n}function d(t,...e){if(t){return"string"!=typeof t?t:e.reduce(((t,e)=>{const n=e instanceof RegExp?e:new RegExp(A(e));return t.replace(n,"")}),t).trim()}}function h(t,e="[",n="]"){if("string"!=typeof t){return t}const r=t.lastIndexOf(e);if(-1===r){return null}const o=t.substring(r),i=o.indexOf(n);return-1===i?null:o.substring(0,i+1)}function b(t,e='"'){return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}function m(t){if(p(t,"object")||p(t,"array")){return t}const e=k(t,"{","}"),n=k(t,"[","]");if(!e&&!n){return t}const r=e?{}:[],o={};let i=function(t){const e=t.match(/^(\[|\{)(.*?)(\]|\})$/);return e?e[2].trim():t}(t);const a=(t=!1)=>{for(;;){let e=t?h(i,"{","}"):h(i);if(!e){break}let n=`__${c()}__`;o[n]=e,i=i.replace(e,n)}};return a(),a(!0),w(i).forEach(((t,n)=>{const i=t.includes(":")&&e,a=i?w(t,":"):[],u=O(l(a[0],n));(t=i?a[1]:t)in o&&(t=m(o[t])),t=function(t){const e=y(t);return null!==e?e:t}(O(t)),e?r[u]=t:r.push(t)})),r}function v(t){const e=t;if(!l(e)){return null}const n=(t=null,e=null)=>({type:t,directive:e}),r=/^\[((.|\n)*?)\]$/gm,o=/^\{((.|\n)*?)\:((.|\n)*?)\}/gm,i=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,a=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,u=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let s=typeof e;if("object"===s||"array"===s){return n(s,e)}switch(!0){case!!e.match(r):s="array";break;case!!e.match(o):s="object";break;case!!e.match(i):const t=e.split("(")[0].trim();return n("idOrClassWithDirective",{[t]:j(e,"(",")")});case!!e.match(a):case!!e.match(u):s="dotObject";break;default:return n("string",e)}if("array"===s||"object"===s){let t=b(e);try{return n(s,JSON.parse(t))}catch(c){}return n(s,m(t))}if("dotObject"===s){let t,r,o;const i={};return w(e,"&&").forEach((e=>{e.match(u)?(t=j(e,"](",")"),r=j(e,"[","]"),o=e.split("[")[0].trim()):(t=j(e,"(",")"),e=e.replace(g(e,"(",")"),""),[o,r]=w(e,".")),t=m(t),i[o]||(i[o]={}),w(r,"|").forEach((e=>{i[o][e]=t}))})),n("dotObject",i)}}function g(t,e,n,r=!1){if("string"!=typeof t){return t}e=A(e),n=A(n);let o=new RegExp(E(e,n),"gm");const i=t.match(o);return i?r?i:i[0]:null}function w(t,e=","){if("string"!=typeof t){return t}if(f(t)){return[]}let n=(t=d(t)).split(e).map((t=>d(t)));return 1===n.length&&""===n[0]?[t]:n}function j(t,e,n,r=!1){if("string"!=typeof t){return t}const o=g(t,e,n,r)??(r?[]:t);return r?o.map((t=>d(t,e,n))):d(o,e,n)}function O(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function k(t,e=null,n=null){return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function A(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}function E(...t){if(t.length<2){throw new Error("You need to pass at least two arguments")}let e="";return t.forEach(((t,n)=>{t instanceof RegExp&&(t=t.source),0===n?e=t:e+=`((.|\n)*?)${t}`})),e}(()=>{const t="undefined"!=typeof window?window:void 0,e="undefined"!=typeof document?document:{},n=t.location||{},r=n.protocol?.replace(":",""),o=n.host||"",i=n.pathname||"",a=`${r}://${o}`,u=()=>{if(s){return s}const t=new URLSearchParams(n.search),e={};for(const[n,r]of t.entries()){e[n]=r}return s={params:t,queryString:t.toString(),search:n.search,keys:Array.from(t.keys()),values:Array.from(t.values()),collection:e},s};let s=null;const l={getPage:()=>{const t=n.href?.toLowerCase();return t.split("/").pop().split(".")[0]||"index"},getParams:()=>u(),getQuery:()=>u().queryString,addToQuery:t=>{const e=u().collection;Object.assign(e,t);return{collection:e,queryString:Object.entries(e).map((([t,e])=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&")}},getHash:()=>n.hash?.substring(1),setHash:t=>{n.hash=t},deleteHash:()=>{history.pushState("",e.title,n.pathname+n.search)},goTo:t=>(n.href=t,!1),open:(e,n="_blank",r="")=>t.open(e,n,r),onChange:e=>{"function"==typeof e&&t.addEventListener("hashchange",e)},fullUrl:`${a}${i}`,siteUrl:a,protocol:r,host:o,path:i,readUrl:n.href};"undefined"!=typeof window&&"object"!=typeof module&&(window.UrlHelper=l)})();function S(t,e){if(null===t){return e?null===e||"null"===e:"null"}let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){for(let t of e.split("|")){if(n===t){return t}}return!1}return e===n}return n}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return(e=D(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){return function(t){if(Array.isArray(t)){return L(t)}}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"]){return Array.from(t)}}(t)||K(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,D(r.key),r)}}function R(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function D(t){var e=function(t,e){if("object"!=_(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=_(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==_(e)?e:e+""}function N(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}s=!1}else{for(;!(s=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);s=!0){}}}catch(t){l=!0,o=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(l){throw o}}}return u}}(t,e)||K(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function C(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=K(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u){throw i}}}}}function K(t,e){if(t){if("string"==typeof t){return L(t,e)}var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++){r[n]=t[n]}return r}var $={};!function(){if("undefined"!=typeof window){new MutationObserver((function(t){var e,n=C(t);try{for(n.s();!(e=n.n()).done;){if("childList"===e.value.type){for(var r in $){$[r]()}}}}catch(o){n.e(o)}finally{n.f()}})).observe(document.body,{childList:!0,subtree:!0})}}();var H={};!function(){if("undefined"!=typeof window){new MutationObserver((function(t){var e,n=C(t);try{for(n.s();!(e=n.n()).done;){if("childList"===e.value.type){for(var r in H){H[r]()}}}}catch(o){n.e(o)}finally{n.f()}})).observe(document.body,{childList:!0,subtree:!0})}}();var F,W,q,V,X,z,B,Q,J,Z,Y,G,tt,et,nt,rt=function(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())};function ot(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"===_(t)&&0===Object.keys(t).length)}function it(t){var e=_(t);switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t)))){return+t}}return null}function at(t,e){if(null===t){return e?null===e||"null"===e:"null"}var n;switch(_(t)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=_(t);break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){var r,o=C(e.split("|"));try{for(o.s();!(r=o.n()).done;){var i=r.value;if(n===i){return i}}}catch(a){o.e(a)}finally{o.f()}return!1}return e===n}return n}function ut(t){if(t){if("string"!=typeof t){return t}for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++){n[r-1]=arguments[r]}return n.reduce((function(t,e){var n,r=e instanceof RegExp?e:new RegExp((n=e)instanceof RegExp?n:n.split("").map((function(t){return["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?"\\".concat(t):t})).join(""));return t.replace(r,"")}),t).trim()}}function st(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"]";if("string"!=typeof t){return t}var r=t.lastIndexOf(e);if(-1===r){return null}var o=t.substring(r),i=o.indexOf(n);return-1===i?null:o.substring(0,i+1)}function lt(t){if(at(t,"object")||at(t,"array")){return t}var e=yt(t,"{","}"),n=yt(t,"[","]");if(!e&&!n){return t}var r=e?{}:[],o={},i=function(t){var e=t.match(/^(\[|\{)(.*?)(\]|\})$/);return e?e[2].trim():t}(t),a=function(){for(var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];;){var e=t?st(i,"{","}"):st(i);if(!e){break}var n="__".concat(rt(),"__");o[n]=e,i=i.replace(e,n)}};return a(),a(!0),ct(i).forEach((function(t,n){var i,a,u=t.includes(":")&&e,s=u?ct(t,":"):[],l=ft(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==it(t)||"boolean"==typeof t?t:ot(t)?e:t}(s[0],n));(t=u?s[1]:t)in o&&(t=lt(o[t])),i=ft(t),t=null!==(a=it(i))?a:i,e?r[l]=t:r.push(t)})),r}function ct(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if("string"!=typeof t){return t}if(ot(t)){return[]}var n=(t=ut(t)).split(e).map((function(t){return ut(t)}));return 1===n.length&&""===n[0]?[t]:n}function ft(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function pt(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"===_(t)&&0===Object.keys(t).length)}function dt(t,e){if(null===t){return e?null===e||"null"===e:"null"}var n;switch(_(t)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=_(t);break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){var r,o=C(e.split("|"));try{for(o.s();!(r=o.n()).done;){var i=r.value;if(n===i){return i}}}catch(a){o.e(a)}finally{o.f()}return!1}return e===n}return n}W="undefined"!=typeof window?window:void 0,q="undefined"!=typeof document?document:{},V=null==W?void 0:W.location,X=null==V?void 0:V.hash,z=null==V?void 0:V.href,B=null==V?void 0:V.search,Q=null==V||null===(F=V.protocol)||void 0===F?void 0:F.replace(":",""),J=null==V?void 0:V.host,Z=null==V?void 0:V.pathname,Y="".concat(Q,"://").concat(J),G="".concat(Y).concat(Z),tt=function(){if(et){return et}var t,e=new URLSearchParams(B),n={},r=C(e.entries());try{for(r.s();!(t=r.n()).done;){var o=N(t.value,2),i=o[0],a=o[1];n[i]=a}}catch(u){r.e(u)}finally{r.f()}return et={params:e,queryString:e.toString(),search:B,keys:Array.from(e.keys()),values:Array.from(e.values()),collection:n}},et=null,nt={getPage:function(){var t;return(null===(t=z)||void 0===t?void 0:t.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return tt()},getQuery:function(){return tt().queryString},addToQuery:function(t){var e=tt().collection;return Object.assign(e,t),{collection:e,queryString:Object.entries(e).map((function(t){var e=N(t,2),n=e[0],r=e[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(r))})).join("&")}},getHash:function(){var t;return null===(t=X)||void 0===t?void 0:t.substring(1)},setHash:function(t){X=t},deleteHash:function(){history.pushState("",q.title,Z+B)},goTo:function(t){return z=t,!1},open:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return W.open(t,e,n)},onChange:function(t){"function"==typeof t&&W.addEventListener("hashchange",t)},fullUrl:G,siteUrl:Y,protocol:Q,host:J,path:Z,readUrl:z},"undefined"!=typeof window&&"object"!==("undefined"==typeof module?"undefined":_(module))?window.UrlHelper=nt:"undefined"==typeof module||_(module);var ht=new Map([["array",function(t){return dt(t,"array")}],["bigInt",function(t){return"bigint"==typeof t}],["boolean",function(t){return"boolean"==typeof t}],["date",function(t){return t instanceof Date}],["float",function(t){return"number"==typeof t&&!Number.isInteger(t)}],["function",function(t){return"function"==typeof t}],["int",function(t){return Number.isInteger(t)}],["map",function(t){return t instanceof Map}],["null",function(t){return null===t}],["number",function(t){return"number"==typeof t}],["object",function(t){return dt(t,"object")}],["promise",function(t){return t instanceof Promise}],["regExp",function(t){return t instanceof RegExp}],["set",function(t){return t instanceof Set}],["string",function(t){return"string"==typeof t}],["symbol",function(t){return"symbol"===_(t)}],["undefined",function(t){return void 0===t}],["weakMap",function(t){return t instanceof WeakMap}],["weakSet",function(t){return t instanceof WeakSet}]]),bt=new Map,mt=new Map;function vt(t){throw new Error('Type Error: "'.concat(t,'" is not supported'))}function gt(t){if(dt(t,"array")||dt(t,"object")){return dt(t)}var e=t.trim();return yt(e,"[","]")?"array":yt(e,"{","}")?"object":"basic"}var wt=function(t){return e=t,mt.has(e)?mt.get(e):e.split("|").reduce((function(t,n){var r=!1,o=n.trim();o.endsWith("?")&&(o=o.slice(0,-1),r=!0);var i=ht.get(o),a=null!=i?i:vt(o);return a&&t.push(a),r&&t.push(ht.get("null"),ht.get("undefined")),mt.set(e,t),t}),[]);var e},jt=function(t){return new(function(){return R((function t(){return U(this,t),this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()}),[{key:"checkOptionalKey",value:function(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}},{key:"checkTheAnyKey",value:function(t){if("any"in t){var e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((function(t){return"any"!==t})))}}},{key:"handleObject",value:function(){var e=lt(t);for(var n in this.checkTheAnyKey(e),e){var r=this.checkOptionalKey(n),o=e[n];"..."!==o?this.testUnit.get("tests").set(r,Ot(o)):(delete e[n],this.testUnit.set("testOnly",!0))}return this.testUnit}}])}())};function Ot(t){if(bt.has(t)){return bt.get(t)}var e=new Map([["testMethod",gt(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",wt(t));break;case"array":e.set("tests",function(t){var e=[];return lt(t).forEach((function(t){e.push(Ot(t))})),e}(t));break;case"object":var n=jt(t);e=new Map([].concat(P(e),P(n)));break;default:vt(t)}return bt.set(t,e),e}var kt=[],At=new Map,Et=function(){return R((function t(e,n){U(this,t);var r=P(n.entries()).reduce((function(t,e){var n=N(e,2),r=n[0],o=n[1];return I(I({},t),{},M({},r,o))}),{}),o=r.testOnly,i=r.testFew,a=r.testAllAny,u=r.optionalKeys,s=r.tests;this.testUnitKeys=P(s.keys()),this.testOnly=o,this.testFew=i,this.testAllAny=a,this.optionalKeys=u,this.testCollection=s,this.inputObject=e}),[{key:"handleUnitTest",value:function(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!pt(this.testFew):var t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!pt(this.optionalKeys):var e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(var n in this.inputObject){if(!this.testCollection.has(n)){return Mt(this.inputObject,'Key: "'.concat(n,'" not found in the test collection, or use the "any" (any:[type]) key test or "..." after the last key in the test collection {key1: type, key2: type, ...} to only test a few keys.')),!1}}}return this.defaultTest()}},{key:"filterOutOptionalKeys",value:function(){var t=this;this.testUnitKeys=this.testUnitKeys.filter((function(e){return!t.optionalKeys.includes(e)}))}},{key:"filterOutFew",value:function(){var t=this;this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((function(e){var n=N(e,1)[0];return!t.testFew.includes(n)})))}},{key:"testObjOptionalKeys",value:function(){var t=this;return this.optionalKeys.every((function(e){var n=t.testCollection.get(e),r=t.inputObject[e];return!r||Tt(r,n)}))}},{key:"testObjFew",value:function(){var t=this;return this.testFew.every((function(e){var n=t.testCollection.get(e);return Tt(t.inputObject[e],n)}))}},{key:"testObjAllAny",value:function(){var t=this,e=Object.values(this.inputObject);return 0===e.length?Tt(null,this.testCollection.get("any")):e.every((function(e){return Tt(e,t.testCollection.get("any"))}))}},{key:"defaultTest",value:function(){var t=this;return this.testUnitKeys.every((function(e){var n=t.testCollection.get(e);return Tt(t.inputObject[e],n)}))}}])}(),St=function(t,e){return!!dt(t,"object")&&new Et(t,e).handleUnitTest()};function Tt(t,e){var n=e.get("testMethod"),r=e.get("tests");switch(n){case"basic":return function(t,e){return e.some((function(n){var r=n(t);return r||Mt(t,e),r}))}(t,r);case"array":return function(t,e){return!(!dt(t,"array")||0===t.length)&&e.every((function(e,n){return Tt(t[n],e)}))}(t,r);case"object":return St(t,e);default:return!1}}function It(t){if(t){if(At.has(t)){return At.get(t)}var e=null;switch(_(t)){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return At.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}function Mt(t,e){kt.push({value:JSON.stringify(t),tests:JSON.stringify(e),found:dt(t)})}var Pt=function(t,e,n){return new(function(){return R((function r(){var o;U(this,r),this.unitTest=Ot(e),this.testResult=Tt(t,this.unitTest),this.bool=this.testResult,this.settings=It(n),this.callback=null!==(o=this.settings.callback)&&void 0!==o?o:null,this.testData={typeExp:e,inputVal:t,inputType:dt(t),callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}),[{key:"test",value:function(){return this.testResult}},{key:"log",value:function(){return console.log("-------------------------- \n ::: Test Data Info :::"),console.table(this.testData),this}},{key:"fail",value:function(){var e;return this.testResult?this:(this.log(),(null===(e=this.settings)||void 0===e?void 0:e.error)&&console.log("\n\n-----\x3e Error Message: ",this.settings.error),function(t){var e=kt[kt.length-1];throw console.log("\n::::::::::::: Type error or not valid ::::::::::::::"),console.log("Input Value used: ",t),console.log("---\x3e Value Found:",e.found),console.log("---\x3e Test Permormed:",e.tests),kt.length=0,new Error('\n\n---------------------\nTypeCheck Error ---\x3e\n\n The value must not be of type (Type found) = "'.concat(e.found,'". \n\n The Type used is invalid for value: "').concat(e.value,'". \n\n see logged error for details\n---------------------\n\n'))}(t))}},{key:"return",value:function(){return t}}])}())};function Ut(t){return Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(t)}function xt(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],s=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}s=!1}else{for(;!(s=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);s=!0){}}}catch(t){l=!0,o=t}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(l){throw o}}}return u}}(t,e)||function(t,e){if(!t){return}if("string"==typeof t){return Rt(t,e)}var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n){return Array.from(t)}if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)){return Rt(t,e)}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++){r[n]=t[n]}return r}function Dt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Nt(r.key),r)}}function Nt(t){var e=function(t,e){if("object"!=Ut(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=Ut(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==Ut(e)?e:e+""}var _t=function(){return t=function t(e){if(function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),Pt(e,"string|object").test()){if(this.props=e,!this.props.adaptiveId){var n,r=s(this.props),o=null!==(n=r.getAttribute("data-adaptive-id"))&&void 0!==n?n:null,i=o||r.getHash();o||r.domElement.setAttribute("data-adaptive-id",i),this.props=Object.assign({},this.props,{adaptiveId:i,helper:r,domElement:r.domElement,xpath:r.getXpathTo()})}var a=s('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));a.isInDom()||((a=document.createElement("param")).name="adaptive",a.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",a))}},(e=[{key:"beam",value:function(t){var e=this;switch(S(t=v(t).directive)){case"string":t=["default",t];break;case"object":var n=Object.keys(t)[0];t=[n,t[n]];break;case"array":1===t.length&&(t=["default",t[0]])}var i=xt(t,2),a=i[0],u=i[1],l=s(u),c="beforeend";switch(a){case"before":c="beforebegin";break;case"after":c="afterend"}l.isInDom()?l.domElement.insertAdjacentElement(c,this.props.domElement):r(this.props.adaptiveId,(function(){var t=s(u);t.isInDom()&&(t.domElement.insertAdjacentElement(c,e.props.domElement),o(e.props.adaptiveId))}))}},{key:"back",value:function(){var t=s('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));t.isInDom()&&t.domElement.insertAdjacentElement("afterend",this.props.domElement)}},{key:"cancel",value:function(){o(this.props.adaptiveId)}}])&&Dt(t.prototype,e),n&&Dt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}(),Ct=!1;function Kt(){Ct||(document.querySelectorAll("[data-teleport]").forEach((function(t){new _t(t).beam(t.getAttribute("data-teleport"))})),Ct=!0)}window.Teleport=e})();
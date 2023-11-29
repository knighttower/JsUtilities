!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Utility",[],t):"object"==typeof exports?exports.Utility=t():e.Utility=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Utility:()=>j,convertToBool:()=>o,convertToNumber:()=>i,currencyToDecimal:()=>a,dateFormat:()=>s,decimalToCurrency:()=>u,default:()=>j,emptyOrValue:()=>l,formatPhoneNumber:()=>c,getDynamicId:()=>d,getGoogleMapsAddress:()=>m,getRandomId:()=>f,includes:()=>p,instanceOf:()=>h,isEmpty:()=>y,isNumber:()=>g,openGoogleMapsAddress:()=>b,proxyObject:()=>w,selectElement:()=>M,toCurrency:()=>T,toDollarString:()=>v,typeOf:()=>N,utility:()=>j,utils:()=>j,validateEmail:()=>D,validatePhone:()=>E});const n={};(()=>{if("undefined"!=typeof window){const e={childList:!0,subtree:!0};new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e in n)n[e]()})).observe(document.body,e)}})();class r{constructor(e,t=document){this.selector=e,"object"==typeof e?this.domElement=e:String(e).includes("//")?this.domElement=this.getElementByXpath(e):this.domElement=t.querySelector(e)}isInDom(){return Boolean(this.domElement?.outerHTML)}whenInDom(){let e=this,t=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(o){var i,a;e.isInDom()?o(e):(i=t,a=()=>{let i=new r(e.selector);var a;i.isInDom()&&(e=i,o(e),(a=t)&&delete n[a])},a&&(n[i]=a))}))}getElementByXpath(e){return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}getXpathTo(){let e=this.domElement;if(e.id)return`//*[@id='${e.id}']`;if(e===document.body)return"//"+e.tagName;let t=0,n=e.parentNode.childNodes;for(let o=0;o<n.length;o++){let i=n[o];if(i===e)return new r(e.parentNode).getXpathTo()+"/"+e.tagName+"["+(t+1)+"]";1===i.nodeType&&i.tagName===e.tagName&&t++}}getAttribute(e){return this.domElement.getAttribute(e)||null}getHash(){let e=String(this.getXpathTo()),t=0;if(0===e.length)return t;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t}}function o(e){switch(typeof e){case"boolean":return e;case"string":return"false"!==e&&"0"!==e;case"number":return 0!==e;default:return Boolean(e)}}function i(e){const t=g(e);return null!==t?t:e}function a(e){return Number(e.replace(/[^0-9.-]+/g,""))}function s(e,t){if(!e||isNaN(new Date(e).getTime()))return null;const n=new Date(e),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).format(n);if(t){const e={hour:"2-digit",minute:"2-digit",hour12:!0,timeZone:"UTC"};return`${r} @ ${new Intl.DateTimeFormat("en-US",e).format(n)}`}return r}function u(e){return new Intl.NumberFormat("en-GB",{minimumFractionDigits:2}).format(e)}function l(e,t=null){return null!==g(e)||"boolean"==typeof e?e:y(e)?t:e}function c(e,t){const n=e.replace(/\D/g,"");if(10!==n.length)throw new Error("Invalid phone number length");let r=[],o=0;for(let e=0;e<t.length;e++)"0"===t[e]?(r.push(n[o]),o++):r.push(t[e]);return r.join("")}function d(){return"kn__"+(new Date).getTime()+"__"+Math.floor(899*Math.random())}const f=d;function m(e){if(!e)return!1;let t="";return t=N(e,"string")?e:["address","address1","city","state","zip","zipcode"].reduce(((t,n)=>{const r=Object.keys(e).find((t=>t.includes(n)&&e[t]));return r?`${t} ${e[r]}`:t}),""),t=t.trim().replace(/\s+|,/g,"+"),`https://maps.google.it/maps?q=${t}`}function p(e,t,n=0){if(Array.isArray(e)||"string"==typeof e)return e.includes(t,n);if("object"==typeof e)for(let n in e)if(e[n]===t)return!0;return!1}function y(e){return null==e||("string"==typeof e||Array.isArray(e)?0===e.length:e instanceof Map||e instanceof Set?0===e.size:ArrayBuffer.isView(e)?0===e.byteLength:"object"==typeof e&&0===Object.keys(e).length)}function g(e){const t=typeof e;switch(e){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==t&&"string"!==t||"number"!=typeof e&&Number.isNaN(Number(e))))return+e}return null}function h(e,t){let n="unknown";if(null===e)return n;const r=[{type:"date",inst:Date},{type:"regexp",inst:RegExp},{type:"promise",inst:Promise},{type:"map",inst:Map},{type:"set",inst:Set},{type:"weakMap",inst:WeakMap},{type:"weakSet",inst:WeakSet}];let o=r.length;for(;o--;)if(e instanceof r[o].inst){n=r[o].type;break}return t?t===n:n}function b(e){if(!N(e,"string")||!N(e,"object"))throw new Error("The input must be a string or an object.");const t=m(e);if(!y(t)||!N(t,"string"))throw new Error("The address you are trying to open is invalid.");return window.open(t,"_blank")}function w(e){return function(e){const t=new Map((e._private||["_private"]).map((e=>[e,!0]))),n=new Map([...t,...(e._protected||[]).map((e=>[e,!0]))]),r=new Map((e._mutable||[]).map((e=>[e,!0])));return new Proxy(e,{get:(e,n)=>n in e&&!t.has(String(n))?e[n]:void console.error("Prop is private, not set, or object is protected",n),set:(e,o,i)=>(o=String(o))in e?r.has(o)?(e[o]=i,!0):n.has(o)||t.has(o)?(console.error("The prop is protected or private and cannot be modified",o,i),!1):(e[o]=i,!0):(console.error("Protected Object, cannot set new props",o,i),!1)})}(e)}function M(e,t=document){return new r(e,t)}function T(e){return u(e)}function v(e){return N(e,"string")&&(e=a(e)),Math.abs(e)>999&&Math.abs(e)<999999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"K":Math.abs(e)>999999?Math.sign(e)*(Math.abs(e)/1e6).toFixed(1)+"M":Math.sign(e)*Math.abs(e)}function N(e,t){if(null===e)return t?null===t||"null"===t:"null";let n;switch(typeof e){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof e;break;case"object":n=Array.isArray(e)?"array":"object";break;default:n="unknown"}return t?t===n:n}function D(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function E(e){return/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(e)}const j={convertToBool:o,currencyToDecimal:a,convertToNumber:i,dateFormat:s,decimalToCurrency:u,emptyOrValue:l,formatPhoneNumber:c,getDynamicId:d,getGoogleMapsAddress:m,getRandomId:f,includes:p,isEmpty:y,isNumber:g,instanceOf:h,openGoogleMapsAddress:b,proxyObject:w,selectElement:M,toCurrency:T,toDollarString:v,typeOf:N,validateEmail:D,validatePhone:E};return t})()));
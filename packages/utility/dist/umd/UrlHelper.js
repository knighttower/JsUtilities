var e,n;e=this,n=()=>(()=>{"use strict";var e={d:(n,t)=>{for(var r in t){e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)},n={};function t(e,n){return function(e){if(Array.isArray(e)){return e}}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t){return}u=!1}else{for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);u=!0){}}}catch(e){c=!0,o=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a)){return}}finally{if(c){throw o}}}return l}}(e,n)||r(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e){return o(e,n)}var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++){r[t]=e[t]}return r}e.d(n,{urlHelper:()=>i});var i=function(){var e,n="undefined"!=typeof window?window:void 0,o="undefined"!=typeof document?document:{},i=null==n?void 0:n.location,a=null==i?void 0:i.hash,l=null==i?void 0:i.href,u=null==i?void 0:i.search,c=null==i||null===(e=i.protocol)||void 0===e?void 0:e.replace(":",""),f=null==i?void 0:i.host,d=null==i?void 0:i.pathname,s="".concat(c,"://").concat(f),y="".concat(s).concat(d),p=function(){if(v){return v}var e,n=new URLSearchParams(u),o={},i=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(u){throw a}}}}}(n.entries());try{for(i.s();!(e=i.n()).done;){var a=t(e.value,2),l=a[0],c=a[1];o[l]=c}}catch(f){i.e(f)}finally{i.f()}return v={params:n,queryString:n.toString(),search:u,keys:Array.from(n.keys()),values:Array.from(n.values()),collection:o}},v=null;return{getPage:function(){var e;return(null===(e=l)||void 0===e?void 0:e.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return p()},getQuery:function(){return p().queryString},addToQuery:function(e){var n=p().collection;return Object.assign(n,e),{collection:n,queryString:Object.entries(n).map((function(e){var n=t(e,2),r=n[0],o=n[1];return"".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(o))})).join("&")}},getHash:function(){var e;return null===(e=a)||void 0===e?void 0:e.substring(1)},setHash:function(e){a=e},deleteHash:function(){history.pushState("",o.title,d+u)},goTo:function(e){return l=e,!1},open:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n.open(e,t,r)},onChange:function(e){"function"==typeof e&&n.addEventListener("hashchange",e)},fullUrl:y,siteUrl:s,protocol:c,host:f,path:d,readUrl:l}};return n=n.urlHelper})(),"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("urlHelper",[],n):"object"==typeof exports?exports.urlHelper=n():e.urlHelper=n();
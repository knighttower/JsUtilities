(()=>{"use strict";var n={d:(t,r)=>{for(var e in r){n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t)},t={};function r(n,t){return function(n){if(Array.isArray(n)){return n}}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(n)).next,0===t){if(Object(r)!==r){return}u=!1}else{for(;!(u=(e=i.call(r)).done)&&(l.push(e.value),l.length!==t);u=!0){}}}catch(n){c=!0,o=n}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a)){return}}finally{if(c){throw o}}}return l}}(n,t)||e(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,t){if(n){if("string"==typeof n){return o(n,t)}var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,t):void 0}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++){e[r]=n[r]}return e}n.d(t,{urlHelper:()=>i});var i=function(){var n,t="undefined"!=typeof window?window:void 0,o="undefined"!=typeof document?document:{},i=null==t?void 0:t.location,a=null==i?void 0:i.hash,l=null==i?void 0:i.href,u=null==i?void 0:i.search,c=null==i||null===(n=i.protocol)||void 0===n?void 0:n.replace(":",""),f=null==i?void 0:i.host,d=null==i?void 0:i.pathname,s="".concat(c,"://").concat(f),y="".concat(s).concat(d),v=function(){if(h){return h}var n,t=new URLSearchParams(u),o={},i=function(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=e(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return l=n.done,n},e:function(n){u=!0,a=n},f:function(){try{l||null==r.return||r.return()}finally{if(u){throw a}}}}}(t.entries());try{for(i.s();!(n=i.n()).done;){var a=r(n.value,2),l=a[0],c=a[1];o[l]=c}}catch(n){i.e(n)}finally{i.f()}return h={params:t,queryString:t.toString(),search:u,keys:Array.from(t.keys()),values:Array.from(t.values()),collection:o}},h=null;return{getPage:function(){var n;return(null===(n=l)||void 0===n?void 0:n.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return v()},getQuery:function(){return v().queryString},addToQuery:function(n){var t=v().collection;return Object.assign(t,n),{collection:t,queryString:Object.entries(t).map((function(n){var t=r(n,2),e=t[0],o=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(o))})).join("&")}},getHash:function(){var n;return null===(n=a)||void 0===n?void 0:n.substring(1)},setHash:function(n){a=n},deleteHash:function(){history.pushState("",o.title,d+u)},goTo:function(n){return l=n,!1},open:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.open(n,r,e)},onChange:function(n){"function"==typeof n&&t.addEventListener("hashchange",n)},fullUrl:y,siteUrl:s,protocol:c,host:f,path:d,readUrl:l}};window.urlHelper=t.urlHelper})();
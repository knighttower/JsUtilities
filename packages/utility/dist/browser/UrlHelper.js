(()=>{"use strict";var n={d:(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t)},t={};function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,u,l=[],a=!0,c=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;a=!1}else for(;!(a=(r=i.call(e)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(n){c=!0,o=n}finally{try{if(!a&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(c)throw o}}return l}}(n,t)||o(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t){if(n){if("string"==typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}n.d(t,{default:()=>S});var u,l,a,c,f,d,y,s,p,v,m,h,b,g,w,S=(l="undefined"!=typeof window?window:void 0,a="undefined"!=typeof document?document:{},c=null==l?void 0:l.location,f=null==c?void 0:c.hash,d=null==c?void 0:c.href,y=null==c?void 0:c.search,s=null==c||null===(u=c.protocol)||void 0===u?void 0:u.replace(":",""),p=null==c?void 0:c.host,v=null==c?void 0:c.pathname,m="".concat(s,"://").concat(p),h="".concat(m).concat(v),b=function(){if(g)return g;var n,t=new URLSearchParams(y),e={},i=function(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=o(n))){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,a=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return l=n.done,n},e:function(n){a=!0,u=n},f:function(){try{l||null==e.return||e.return()}finally{if(a)throw u}}}}(t.entries());try{for(i.s();!(n=i.n()).done;){var u=r(n.value,2),l=u[0],a=u[1];e[l]=a}}catch(n){i.e(n)}finally{i.f()}return g={params:t,queryString:t.toString(),search:y,keys:Array.from(t.keys()),values:Array.from(t.values()),collection:e}},g=null,w={getPage:function(){var n;return(null===(n=d)||void 0===n?void 0:n.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return b()},getQuery:function(){return b().queryString},addToQuery:function(n){var t=b().collection;return Object.assign(t,n),{collection:t,queryString:Object.entries(t).map((function(n){var t=r(n,2),e=t[0],o=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(o))})).join("&")}},getHash:function(){var n;return null===(n=f)||void 0===n?void 0:n.substring(1)},setHash:function(n){f=n},deleteHash:function(){history.pushState("",a.title,v+y)},goTo:function(n){return d=n,!1},open:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return l.open(n,t,e)},onChange:function(n){"function"==typeof n&&l.addEventListener("hashchange",n)},fullUrl:h,siteUrl:m,protocol:s,host:p,path:v,readUrl:d},"undefined"!=typeof window&&"object"!==("undefined"==typeof module?"undefined":e(module))?window.UrlHelper=w:"object"===("undefined"==typeof module?"undefined":e(module))?function(){return w}:w);window.UrlHelper=t.default})();
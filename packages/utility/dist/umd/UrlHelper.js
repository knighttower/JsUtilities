!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("UrlHelper",[],n):"object"==typeof exports?exports.UrlHelper=n():t.UrlHelper=n()}(this,(()=>(()=>{"use strict";var t,n,e={};function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(u.push(r.value),u.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||o(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,n){if(t){if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}return t="undefined"!=typeof window?window:void 0,n=function(){var t="undefined"!=typeof window?window:this,n="undefined"!=typeof document?document:{},e=t.location.protocol.replace(":",""),i=t.location.host,a=t.location.pathname,u="".concat(e,"://").concat(i),c="".concat(u).concat(a),l=function(){if(f)return f;var n,e=new URLSearchParams(t.location.search),i={},a=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=o(t))){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}(e.entries());try{for(a.s();!(n=a.n()).done;){var u=r(n.value,2),c=u[0],l=u[1];i[c]=l}}catch(t){a.e(t)}finally{a.f()}return f={params:e,queryString:e.toString(),search:t.location.search,keys:Array.from(e.keys()),values:Array.from(e.values()),collection:i}},f=null,s={getPage:function(){return t.location.href.toLowerCase().split("/").pop().split(".")[0]||"index"},getParams:function(){return l()},getQuery:function(){return l().queryString},addToQuery:function(t){var n=l().collection;return Object.assign(n,t),{collection:n,queryString:Object.entries(n).map((function(t){var n=r(t,2),e=n[0],o=n[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(o))})).join("&")}},getHash:function(){return t.location.hash.substring(1)},setHash:function(n){t.location.hash=n},deleteHash:function(){history.pushState("",n.title,t.location.pathname+t.location.search)},goTo:function(n){return t.location.href=n,!1},open:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.open(n,e,r)},onChange:function(n){"function"==typeof n&&t.addEventListener("hashchange",n)},fullUrl:c,siteUrl:u,protocol:e,host:i,path:a,readUrl:t.location.href};return s},"object"===("undefined"==typeof module?"undefined":a(module))&&module.exports?module.exports=n:t.UrlHelper=n(),e.default})()));
(()=>{"use strict";var n={d:(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)},e={};function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(u.push(r.value),u.length!==e);l=!0);}catch(n){c=!0,o=n}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(n,e)||o(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,e){if(n){if("string"==typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}n.d(e,{default:()=>b});var a,u,l,c,f,d,y,s,p,h,m,v,b=(u="undefined"!=typeof window?window:void 0,l="undefined"!=typeof document?document:{},f=null===(a=(c=u.location||{}).protocol)||void 0===a?void 0:a.replace(":",""),d=c.host||"",y=c.pathname||"",s="".concat(f,"://").concat(d),p="".concat(s).concat(y),h=function(){if(m)return m;var n,e=new URLSearchParams(c.search),t={},i=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=o(n))){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return u=n.done,n},e:function(n){l=!0,a=n},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw a}}}}(e.entries());try{for(i.s();!(n=i.n()).done;){var a=r(n.value,2),u=a[0],l=a[1];t[u]=l}}catch(n){i.e(n)}finally{i.f()}return m={params:e,queryString:e.toString(),search:c.search,keys:Array.from(e.keys()),values:Array.from(e.values()),collection:t}},m=null,v={getPage:function(){var n;return(null===(n=c.href)||void 0===n?void 0:n.toLowerCase()).split("/").pop().split(".")[0]||"index"},getParams:function(){return h()},getQuery:function(){return h().queryString},addToQuery:function(n){var e=h().collection;return Object.assign(e,n),{collection:e,queryString:Object.entries(e).map((function(n){var e=r(n,2),t=e[0],o=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(o))})).join("&")}},getHash:function(){var n;return null===(n=c.hash)||void 0===n?void 0:n.substring(1)},setHash:function(n){c.hash=n},deleteHash:function(){history.pushState("",l.title,c.pathname+c.search)},goTo:function(n){return c.href=n,!1},open:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return u.open(n,e,t)},onChange:function(n){"function"==typeof n&&u.addEventListener("hashchange",n)},fullUrl:p,siteUrl:s,protocol:f,host:d,path:y,readUrl:c.href},"undefined"!=typeof window&&"object"!==("undefined"==typeof module?"undefined":t(module))?window.UrlHelper=v:"object"===("undefined"==typeof module?"undefined":t(module))?function(){return v}:v);window.UrlHelper=e.default})();
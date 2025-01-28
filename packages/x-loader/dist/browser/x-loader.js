(()=>{"use strict";var e={d:(t,r)=>{for(var n in r){e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t,n){return t=c(t),function(e,t){if(t&&("object"==r(t)||"function"==typeof t)){return t}if(void 0!==t){throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0===e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}(e)}(e,i()?Reflect.construct(t,n||[],c(e).constructor):t.apply(e,n))}function o(e){var t="function"==typeof Map?new Map:void 0;return o=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e)){return e}if("function"!=typeof e){throw new TypeError("Super expression must either be null or a function")}if(void 0!==t){if(t.has(e)){return t.get(e)}t.set(e,r)}function r(){return function(e,t,r){if(i()){return Reflect.construct.apply(null,arguments)}var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&a(o,r.prototype),o}(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},o(e)}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e){var t=function(e,t){if("object"!=r(e)||!e){return e}var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o)){return o}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}function b(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e){return v(e,t)}var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c){throw i}}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++){n[r]=e[r]}return n}e.r(t),e.d(t,{default:()=>I,domTracking:()=>L,xloader:()=>I});var m,h,g,w,O,j,P,x,S,A,E,L=function(e){var t={isLoaded:!1,onLoadedCallbacks:[],isReady:function(e){t.isLoaded?e():t.onLoadedCallbacks.push(e)}};t.ready=t.isReady;var r=new Event("appIsReady",{bubbles:!0,cancelable:!1,composed:!0});t.afterLoad=function(e){t.isReady((function(){var t=!1,r=new PerformanceObserver((function(n){var o,i=b(n.getEntries());try{for(i.s();!(o=i.n()).done;){var a=o.value;if("first-contentful-paint"===a.name||"first-paint"===a.name){e(),t=!0,r.disconnect();break}}}catch(e){i.e(e)}finally{i.f()}}));try{r.observe({type:"paint",buffered:!0})}catch(e){console.error("PerformanceObserver error:",e)}setTimeout((function(){t||requestAnimationFrame((function(){t||e(),r.disconnect()}))}),750)}))},t.appHasLoaded=function(){t.isLoaded||(t.isLoaded=!0,e.dispatchEvent(r),t.onLoadedCallbacks.forEach((function(e){e()})))};return"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t.appHasLoaded):t.appHasLoaded(),e.xdom=e.xdom||t}(window),I=(m=window,h=new Map,g=new Map,w=new Map,O=new Map,j=new Map,P=function(){return p((function e(){f(this,e)}),[{key:"ready",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((function(e){return t.ready(e,r)}))):(e=e.trim(),h.get(e)?Promise.resolve(!0):O.get(e)?O.get(e):new Promise((function(t,r){var n,o=function(){n&&clearTimeout(n)},i=setInterval((function(){if(h.get(e)){return clearInterval(i),t(!0),void o()}if(O.get(e)){clearInterval(i),o();var n=setTimeout((function(){o(),r(console.log('Timeout waiting for ID "'.concat(e,'".')))}),3e3);O.get(e).finally((function(){o(),clearTimeout(n),t(!0)}))}}),50);n=setTimeout((function(){clearInterval(i),r(console.log('Timeout waiting for ID "'.concat(e,'".')))}),6e4)}))):Promise.reject(new Error("loader ID is required!"))}},{key:"isLoaded",value:function(e){var t=this;return Array.isArray(e)?e.every((function(e){return t.isLoaded(e)})):!!h.get(e)||!!window[e]}},{key:"hasId",value:function(e){var t=this;return Array.isArray(e)?e.every((function(e){return t.hasId(e)})):!!g.get(e)}},{key:"when",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((function(e){return t.when(e,r)}))):(e=e.trim(),new Promise((function(t,n){var o,i=setInterval((function(){if(window[e]){return clearInterval(i),t(!0),void(o&&clearTimeout(o))}}),50);o=setTimeout((function(){clearInterval(i),n(console.warn('Timeout waiting for script "'.concat(e,'" to be present in window.')))}),r)}))):Promise.reject(new Error("loader ID is required!"))}}])}(),x=function(){return p((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"js";f(this,e),this.type=t;var r=new P;this.ready=r.ready.bind(r),this.isLoaded=r.isLoaded.bind(r),this.hasId=r.hasId.bind(r)}),[{key:"load",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(0===(e=Array.isArray(e)?e:[e]).length){return Promise.reject(new Error("URL is required!"))}if(r=r||"__".concat(Math.random().toString(36).substring(2,15)),g.has(r)){return console.warn('ID "'.concat(r,'" is already registered.')),Promise.resolve(!0)}g.set(r,!0);var i=e.map((function(e){if(j.get(e)&&"img"!==t.type){return j.get(e)}var i=new Promise((function(i,a){if(!w.get(e)||"img"===t.type){return function(){var c;switch(c="img"===t.type?new Image:document.createElement("css"===t.type?"link":"script"),t.type){case"css":c.rel="stylesheet",c.type="text/css",c.href=e;break;case"js":c.src=e,c.async=!0;break;case"img":var u={alt:location.href,width:"auto",height:"auto",class:""};o=l(l({},u),o),Object.keys(o).forEach((function(e){["src","loading"].includes(e)||c.setAttribute(e,o[e])})),c.src=e}if(c.onload=function(){if(w.set(e,!0),"img"===t.type){var o=function(){document.querySelector('[x-id="'.concat(r,'"]')).insertAdjacentElement("afterend",c)};"lazy"===n?L.afterLoad(o):L.isReady(o)}i(e)},c.onerror=function(){return a(new Error("Failed to load: ".concat(e)))},"img"!==t.type){switch(n){case"eager":document.head.appendChild(c);break;case"lazy":L.isReady((function(){document.body.appendChild(c)}));break;default:document.body.appendChild(c)}}return c}()}i(e)}));return j.set(e,i),i})),a=Promise.all(i).then((function(e){return h.set(r,!0),e})).catch((function(e){throw console.error('Error loading asset ID "'.concat(r,'":'),e),e}));return O.set(r,a),a}}])}(),S=function(){return p((function e(){f(this,e),this.scripts=new x,this.css=new x("css"),this.img=new x("img"),this.loader=new P,this.autoLoadScripts()}),[{key:"autoLoadScripts",value:function(e){var t=this;(e||document.querySelectorAll("x-loader:not([x-reg])")).forEach((function(e){var r;if(null===(r=e.attributes["x-reg"])||void 0===r||!r.value){e.setAttribute("x-reg",!0);var n,o,i,a,c,u,l,s=(o={},i=["x-type","x-dep","x-img","x-js","x-loading","x-css","x-id"],a=(null===(n=e.getAttribute("x-dep"))||void 0===n?void 0:n.trim().split(","))||null,c=e.getAttribute("x-loading")||e.getAttribute("x-type"),u=null,l=null,["x-js","x-css","x-img"].some((function(t){var r=e.getAttribute(t);return!!r&&(u="x-js"===t?"scripts":t.slice(2),l=r.split(","),!0)})),Array.from(e.attributes).forEach((function(e){i.includes(e.name)||(o[e.name.replace(/^x-/,"")]=e.value)})),{attributes:o,dep:a,loadType:c,type:u,src:l});if(s.src){var f=e.getAttribute("x-id")||"x__".concat(Math.random().toString(36).substring(2,15));e.setAttribute("x-id",f);var d=function(){return t[s.type].load(s.src,f,s.loadType,s.attributes)};s.dep?t.loader.ready(s.dep).then(d):d()}}}))}}])}(),A=m.xloader=(null==m?void 0:m.xloader)||new S,E=function(e){function t(){return f(this,t),n(this,t)}return function(e,t){if("function"!=typeof t&&null!==t){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(t,e),p(t,[{key:"connectedCallback",value:function(){A.autoLoadScripts([this])}}])}(o(HTMLElement)),customElements.define("x-loader",E),A);window["x-loader"]=t})();
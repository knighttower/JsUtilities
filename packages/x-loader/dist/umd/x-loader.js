var e,t;e=this,t=()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r){e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t,r){return t=a(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t)){return t}if(void 0!==t){throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0===e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}(e)}(e,o()?Reflect.construct(t,r||[],a(e).constructor):t.apply(e,r))}function n(e){var t="function"==typeof Map?new Map:void 0;return n=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e)){return e}if("function"!=typeof e){throw new TypeError("Super expression must either be null or a function")}if(void 0!==t){if(t.has(e)){return t.get(e)}t.set(e,r)}function r(){return function(e,t,r){if(o()){return Reflect.construct.apply(null,arguments)}var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&i(a,r.prototype),a}(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,e)},n(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(o=function(){return!!e})()}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e){var t=function(e,t){if("object"!=l(e)||!e){return e}var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=l(n)){return n}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:t+""}function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e){return b(e,t)}var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c){throw i}}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++){n[r]=e[r]}return n}e.r(t),e.d(t,{default:()=>L,domTracking:()=>E,xloader:()=>L});var v,h,g,w,x,A,j,O,P,S,T,E=function(e){var t={isLoaded:!1,onLoadedCallbacks:[],isReady:function(e){t.isLoaded?e():t.onLoadedCallbacks.push(e)}};t.ready=t.isReady;var r=new Event("appIsReady",{bubbles:!0,cancelable:!1,composed:!0});return t.afterLoad=function(e){return t.isReady((function(){var t=!1,r=new PerformanceObserver((function(n){var o,i=m(n.getEntries());try{for(i.s();!(o=i.n()).done;){var a=o.value;if("first-contentful-paint"===a.name||"first-paint"===a.name){e(),t=!0,r.disconnect();break}}}catch(e){i.e(e)}finally{i.f()}}));try{r.observe({type:"paint",buffered:!0})}catch(e){console.error("PerformanceObserver error:",e)}setTimeout((function(){var n=setTimeout((function(){e(),r.disconnect(),t=!0}),4e3);t||requestAnimationFrame((function(){t||(clearTimeout(n),e(),t=!0),r.disconnect()}))}),750)}))},t.appHasLoaded=function(){t.isLoaded||(t.isLoaded=!0,e.dispatchEvent(r),t.onLoadedCallbacks.forEach((function(e){e()})))},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t.appHasLoaded):t.appHasLoaded(),e.xdom=e.xdom||t}(window),L=(v=window,h=new Map,g=new Map,w=new Map,x=new Map,A=new Map,j=function(){return p((function e(){f(this,e)}),[{key:"ready",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((function(e){return t.ready(e,r)}))):(e=e.trim(),h.get(e)?Promise.resolve(!0):x.get(e)?x.get(e):new Promise((function(t,r){var n,o=function(){n&&clearTimeout(n)},i=setInterval((function(){if(h.get(e)){return clearInterval(i),t(!0),void o()}if(x.get(e)){clearInterval(i),o();var n=setTimeout((function(){o(),r(console.log('Timeout ID "'.concat(e,'".')))}),3e3);x.get(e).finally((function(){o(),clearTimeout(n),t(!0)}))}}),50);n=setTimeout((function(){clearInterval(i),r(console.log('Timeout ID "'.concat(e,'".')))}),6e4)}))):Promise.reject(new Error("loader ID required!"))}},{key:"isLoaded",value:function(e){var t=this;return Array.isArray(e)?e.every((function(e){return t.isLoaded(e)})):!!h.get(e)||!!window[e]}},{key:"hasId",value:function(e){var t=this;return Array.isArray(e)?e.every((function(e){return t.hasId(e)})):!!g.get(e)}},{key:"when",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((function(e){return t.when(e,r)}))):(e=e.trim(),new Promise((function(t,n){var o,i=setInterval((function(){if(window[e]){return clearInterval(i),t(!0),void(o&&clearTimeout(o))}}),50);o=setTimeout((function(){clearInterval(i),n(console.warn('Timeout "'.concat(e,'": not in window.')))}),r)}))):Promise.reject(new Error("loader ID required!"))}}])}(),O=function(){return p((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"js";f(this,e),this.type=t;var r=new j;this.ready=r.ready.bind(r),this.isLoaded=r.isLoaded.bind(r),this.hasId=r.hasId.bind(r)}),[{key:"load",value:function(e){for(var t,r,n,o,i=this,a=arguments.length,c=new Array(a>1?a-1:0),s=1;s<a;s++){c[s-1]=arguments[s]}if("object"===l(c[0])&&null!==c[0]){var f=c[0];t=f.id,r=f.loadType,n=f.attributes,o=f.$element}else{t=c[0],r=c[1],n=c[2],o=c[3]}if(0===(e=Array.isArray(e)?e:[e]).length){return Promise.reject(new Error("URL required!"))}if(t=t||"__".concat(Math.random().toString(36).substring(2,15)),g.has(t)){return console.warn('ID "'.concat(t,'" is already registered.')),Promise.resolve(!0)}g.set(t,!0);var d=e.map((function(e){if(A.get(e)&&"img"!==i.type){return A.get(e)}var a=new Promise((function(a,c){if(!w.get(e)||"img"===i.type){return function(){var s;switch(s="img"===i.type?new Image:document.createElement("css"===i.type?"link":"script"),i.type){case"css":s.rel="stylesheet",s.type="text/css",s.href=e;break;case"js":s.src=e,s.async=!0;break;case"img":var l={alt:location.href,width:"auto",height:"auto",class:""};n=u(u({},l),n||{}),Object.keys(n).forEach((function(e){["src","loading"].includes(e)||s.setAttribute(e,n[e])})),s.src=e}if(s.onload=function(){if(w.set(e,!0),"img"===i.type){var n=function(){(o=o||document.querySelector('[x-id="'.concat(t,'"]'))).replaceChildren(),o.innerHTML="",o.innerText="",o.insertAdjacentElement("afterend",s),o.remove()};"lazy"===r?E.afterLoad(n):E.isReady(n)}a(e)},s.onerror=function(){return c(new Error("Failed to load: ".concat(e)))},"img"!==i.type){switch(r){case"eager":document.head.appendChild(s);break;case"lazy":E.isReady((function(){document.body.appendChild(s)}));break;default:document.body.appendChild(s)}}return s}()}a(e)}));return A.set(e,a),a})),p=Promise.all(d).then((function(e){return h.set(t,!0),e})).catch((function(e){throw console.error('Asset ID "'.concat(t,'":'),e),e}));return x.set(t,p),p}}])}(),P=function(){return p((function e(){f(this,e),this.scripts=new O,this.css=new O("css"),this.img=new O("img"),this.loader=new j,this.autoLoadScripts()}),[{key:"autoLoadScripts",value:function(e){var t=this;(e||document.querySelectorAll("x-loader:not([x-reg])")).forEach((function(e){var r;if(null===(r=e.attributes["x-reg"])||void 0===r||!r.value){e.setAttribute("x-reg",!0);var n,o,i,a,c,u,s,l=(o={},i=["x-type","x-dep","x-img","x-js","x-loading","x-css","x-id"],a=(null===(n=e.getAttribute("x-dep"))||void 0===n?void 0:n.trim().split(","))||null,c=e.getAttribute("x-loading")||e.getAttribute("x-type"),u=null,s=null,["x-js","x-css","x-img"].some((function(t){var r=e.getAttribute(t);return!!r&&(u="x-js"===t?"scripts":t.slice(2),s=r.split(","),!0)})),Array.from(e.attributes).forEach((function(e){i.includes(e.name)||(o[e.name.replace(/^x-/,"")]=e.value)})),{attributes:o,dep:a,loadType:c,type:u,src:s,$element:e});if(l.src){var f=e.getAttribute("x-id")||"x__".concat(Math.random().toString(36).substring(2,15));e.setAttribute("x-id",f);var d=function(){return t[l.type].load(l.src,{id:f,loadType:l.loadType,attributes:l.attributes,$element:l.$element})};l.dep?t.loader.ready(l.dep).then(d):d()}}}))}}])}(),S=v.xloader=(null==v?void 0:v.xloader)||new P,T=function(e){function t(){return f(this,t),r(this,t)}return function(e,t){if("function"!=typeof t&&null!==t){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(t,e),p(t,[{key:"connectedCallback",value:function(){if(this.hasAttribute("x-img")){var e,t=this.getAttribute("x-loader-html");if(t){(e=document.createElement("div")).innerHTML=t}else{e=document.createElement("img");var r=this.getAttribute("width"),n=this.getAttribute("height"),o=n?{maxHeight:"".concat(n,"px"),height:"100%",aspectRatio:"".concat(r||16," / ").concat(n)}:{maxHeight:"100%",height:"auto",aspectRatio:"16 / 9"};Object.assign(e.style,u({maxWidth:"100%",width:r?"".concat(r,"px"):"100%"},o)),e.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}e.classList.add("x-loader"),this.appendChild(e)}S.autoLoadScripts([this])}}])}(n(HTMLElement)),customElements.define("x-loader",T),S);return t})(),"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("x-loader",[],t):"object"==typeof exports?exports["x-loader"]=t():e["x-loader"]=t();
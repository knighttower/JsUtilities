var t,e;t=this,e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n){t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=s(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=s(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}c=!1}else{for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0){}}}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(u){throw o}}}return s}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t){return a(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}t.r(e),t.d(e,{default:()=>v});var c=function(t){return t&&"object"===s(t)&&t.constructor===Object},u=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++){i[a-1]=arguments[a]}return i.reduce((function(t,e){return c(e)?Object.entries(e).forEach((function(e){var n=o(e,2),r=n[0],i=n[1];t[r]=c(i)&&c(t[r])?u(t[r],i):i})):Object.assign(t,e),t}),function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},t))};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!=b(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=b(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==b(e)?e:e+""}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}const v=function(t,e){var n="x-toast",r={classname:"x",transition:"slide-left-right",insertBefore:!0,duration:3e3,autoClose:!0,progressBar:!0,onShow:function(t){},onHide:function(t){},position:"top-right"},o={container:"{:class-name}__container",mainwrap:"{:class-name}__wrapper",toasts:{info:"{:class-name}--info",success:"{:class-name}--success",warning:"{:class-name}--warning",error:"{:class-name}--error"},animate:{init:"{:transition}--init",show:"{:transition}--show",hide:"{:transition}--hide"},progress:"{:class-name}__progress",position:"--{:position}"};function i(t){return e.createElement(t||"div")}function a(t){return t.parentElement||t.parentNode}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++){n[r-1]=arguments[r]}return n.forEach((function(e){(function(t,e){return t.classList.contains(e)})(t,e)||t.classList.add(e)})),t}function c(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.addEventListener(e,n,r),t}function y(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.removeEventListener(e,n,r),t}var v=null;function m(){if(v){return v}var t=document.createElement("div"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e){if(n in t.style){v=e[n];break}}return v}function d(t,e){for(var n in t){if(!0===t.hasOwnProperty(n)){switch(b(t[n])){case"object":d(t[n],e);break;case"string":for(var r in e){!0===e.hasOwnProperty(r)&&(t[n]=t[n].replace(r,e[r]))}}}}return t}var h=function(t,e,n,r,o){var i=function(){var t=a(e);e.remove(),t.childNodes.length<1&&a(t).remove()},u=function(e){y(e.target,e.type,u,!1),i(),"function"==typeof o&&o(t)};setTimeout((function(){var n=m();void 0!==n?c(e,n,u,!1):(i(),"function"==typeof o&&o(t)),s(e,r.hide)}),n)},g=function(t,e){return"string"==typeof e&&(t.classmap[e]=d(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},o),{"{:class-name}":n,"{:transition}":e,"{:position}":t.settings.position})),e},O=function(){return t=function t(e){!function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),this.settings={},this.classmap={},this.config(e||r),this.transition(this.settings.transition)},o=[{key:"config",value:function(t){return this.settings=u(r,this.settings,t||{}),this}},{key:"transition",value:function(t){return this.settings.transition=g(this,t),this}},{key:"toast",value:function(t,r,o){var f=this.classmap,l=this.settings;"number"==typeof o?l.duration=o:l=u(this.settings,o||{}),!1===f.hasOwnProperty(l.transition)&&g(this,l.transition);var p=f[l.transition],b=e.querySelector("."+p.container),v=!!b;if(v){b=b.querySelector("."+p.mainwrap)}else{b=s(i("div"),p.container,p.container,p.position);var d=s(i("div"),p.mainwrap);b.appendChild(b=d)}var O=s(i("div"),n,l.classname,p.toasts[t],p.animate.init);return O.textContent=r,v||e.body.append(a(b)),function(t,e,n,r,o,i,a){var u=function(e){y(e.target,e.type,u,!1),"function"==typeof a&&a(t)},f=n.childNodes;f=f[!0===i?0:f.length],n.insertBefore(e,f),setTimeout((function(){var n=m();void 0!==n?c(e,n,u,!1):"function"==typeof a&&a(t),s(e,r.show)}),100)}(t,O,b,p.animate,l.duration,l.insertBefore,l.onShow),l.autoClose?h(t,O,l.duration,p.animate,l.onHide):function(t,e,n,r,o){s(e,o),c(e,"click",(function(o){o.stopPropagation(),h(t,e,0,n,r)}))}(t,O,p.animate,l.onHide,"close-on-click"),l.progressBar&&l.autoClose&&function(t,e,n,r){setTimeout((function(){var o=s(i("div"),r.progress,r.progress+"--"+t);e.appendChild(o);var a=0,c=0,u=setInterval((function(){a++,(c=Math.round(1e3*a/n))>100?clearInterval(u):o.style.width=c+"%"}),10)}),100)}(t,O,l.duration,p),this}},{key:"info",value:function(t,e){this.toast("info",t,e)}},{key:"success",value:function(t,e){this.toast("success",t,e)}},{key:"warning",value:function(t,e){this.toast("warning",t,e)}},{key:"error",value:function(t,e){this.toast("error",t,e)}}],o&&f(t.prototype,o),l&&f(t,l),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,l}();t.$toast=t.$toast||new O}(window,document);return e})(),"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("toast",[],e):"object"==typeof exports?exports.toast=e():t.toast=e();
(()=>{"use strict";var t={d:(n,e)=>{for(var r in e){t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t,n,e){return(n=i(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){var n=function(t,n){if("object"!=a(t)||!t){return t}var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=a(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==a(n)?n:n+""}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}t.r(n),t.d(n,{default:()=>s});const s=function(t,n){var i="x-toast",s={classname:"x",transition:"slide-left-right",insertBefore:!0,duration:3e3,autoClose:!0,progressBar:!0,onShow:function(t){},onHide:function(t){},position:"top-right"},c={container:"{:class-name}__container",mainwrap:"{:class-name}__wrapper",toasts:{info:"{:class-name}--info",success:"{:class-name}--success",warning:"{:class-name}--warning",error:"{:class-name}--error"},animate:{init:"{:transition}--init",show:"{:transition}--show",hide:"{:transition}--hide"},progress:"{:class-name}__progress",position:"--{:position}"};function u(){var t={},n=!1,e=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var o=function(e){for(var r in e){!0===Object.prototype.hasOwnProperty.call(e,r)&&(n&&"[object Object]"===Object.prototype.toString.call(e[r])?t[r]=u(!0,t[r],e[r]):t[r]=e[r])}};e<r;e++){o(arguments[e])}return t}function f(t){return n.createElement(t||"div")}function l(t){return t.parentElement||t.parentNode}function p(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++){e[r-1]=arguments[r]}return e.forEach((function(n){(function(t,n){return t.classList.contains(n)})(t,n)||t.classList.add(n)})),t}function y(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.addEventListener(n,e,r),t}function v(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.removeEventListener(n,e,r),t}var d=null;function h(){if(d){return d}var t=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in n){if(e in t.style){d=n[e];break}}return d}function b(t,n,e){return 0===(n=n||e.duration)&&(n=100*t.length),Math.floor(n)}function g(t,n){for(var e in t){if(!0===t.hasOwnProperty(e)){switch(a(t[e])){case"object":g(t[e],n);break;case"string":for(var r in n){!0===n.hasOwnProperty(r)&&(t[e]=t[e].replace(r,n[r]))}}}}return t}var m=function(t,n,e,r,o){var i=function(){var t=l(n);n.remove(),t.childNodes.length<1&&l(t).remove()},a=function(n){v(n.target,n.type,a,!1),i(),"function"==typeof o&&o(t)};setTimeout((function(){var e=h();void 0!==e?y(n,e,a,!1):(i(),"function"==typeof o&&o(t)),p(n,r.hide)}),e)},w=function(t,n){return"string"==typeof n&&(t.classmap[n]=g(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},c),{"{:class-name}":i,"{:transition}":n,"{:position}":t.settings.position})),n},O=function(){return t=function t(n){!function(t,n){if(!(t instanceof n)){throw new TypeError("Cannot call a class as a function")}}(this,t),this.settings={},this.classmap={},this.config("object"===a(n)?n:{}),this.transition(this.settings.transition)},r=[{key:"config",value:function(t){return this.settings=u(!0,s,this.settings,t),this}},{key:"transition",value:function(t){return this.settings.transition=w(this,t),this}},{key:"toast",value:function(t,e,r){var o=this.classmap,a=this.settings;!1===o.hasOwnProperty(a.transition)&&w(this,a.transition);var s=o[a.transition],c=n.querySelector("."+s.container),u=!!c;if(u){c=c.querySelector("."+s.mainwrap)}else{c=p(f("div"),s.container,s.container,s.position);var d=p(f("div"),s.mainwrap);c.appendChild(c=d)}var b=p(f("div"),i,a.classname,s.toasts[t],s.animate.init);return b.textContent=e,u||n.body.append(l(c)),function(t,n,e,r,o,i,a){var s=function(n){v(n.target,n.type,s,!1),"function"==typeof a&&a(t)},c=e.childNodes;c=c[!0===i?0:c.length],e.insertBefore(n,c),setTimeout((function(){var e=h();void 0!==e?y(n,e,s,!1):"function"==typeof a&&a(t),p(n,r.show)}),100)}(t,b,c,s.animate,0,a.insertBefore,a.onShow),a.autoClose?m(t,b,r,s.animate,a.onHide):function(t,n,e,r,o){p(n,o),y(n,"click",(function(o){o.stopPropagation(),m(t,n,0,e,r)}))}(t,b,s.animate,a.onHide,"close-on-click"),a.progressBar&&a.autoClose&&function(t,n,e,r){setTimeout((function(){var o=p(f("div"),r.progress,r.progress+"--"+t);n.appendChild(o);var i=0,a=0,s=setInterval((function(){i++,(a=Math.round(1e3*i/e))>100?clearInterval(s):o.style.width=a+"%"}),10)}),100)}(t,b,r,s),this}},{key:"info",value:function(t,n){n=b(t,n,this.settings),this.toast("info",t,n)}},{key:"success",value:function(t,n){n=b(t,n,this.settings),this.toast("success",t,n)}},{key:"warning",value:function(t,n){n=b(t,n,this.settings),this.toast("warning",t,n)}},{key:"error",value:function(t,n){n=b(t,n,this.settings),this.toast("error",t,n)}}],r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,o}();t.$toast=t.$toast||new O}(window,document);window.toast=n})();
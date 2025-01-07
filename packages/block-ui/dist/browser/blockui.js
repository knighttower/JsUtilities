(()=>{"use strict";var e={d:(t,o)=>{for(var n in o){e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e){return e}var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=l(n)){return n}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return function(e){if(Array.isArray(e)){return e}}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i,a,l=[],c=!0,u=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o){return}c=!1}else{for(;!(c=(n=i.call(o)).done)&&(l.push(n.value),l.length!==t);c=!0){}}}catch(e){u=!0,r=e}finally{try{if(!c&&null!=o.return&&(a=o.return(),Object(a)!==a)){return}}finally{if(u){throw r}}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e){return a(e,t)}var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++){n[o]=e[o]}return n}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}e.r(t),e.d(t,{blockui:()=>c,default:()=>c});var c=function(e,t){e.fn._fadeIn=e.fn.fadeIn;var o=e.noop||function(){},r=function(e){return e&&"object"===l(e)&&e.constructor===Object},a=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++){o[l-1]=arguments[l]}return o.reduce((function(e,t){return r(t)&&Object.entries(t).forEach((function(t){var o=i(t,2),n=o[0],l=o[1];e[n]=r(l)&&r(e[n])?a(e[n],l):l})),e}),n({},e))};e.blockUI=e.blockui={on:function(e){var o=arguments.length>1&&arguments[1]!==t?arguments[1]:{};r(e)&&(o=e,e=null),s(window,n({message:e},o))},off:function(){f(window,arguments.length>0&&arguments[0]!==t?arguments[0]:{})},defaults:{loader:!1,tag:"div",message:"<h4>Please wait...</h4>",title:null,css:{padding:0,margin:0,width:"100vw",height:"100vh",top:"0",left:"0",textAlign:"center",color:"#000",border:"1px dashed #000",backgroundColor:"transparent",cursor:"wait",display:"flex"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"default"},cursorReset:"default",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:9e3,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,blockMsgClass:"x-block-ui__message",ignoreIfBlocked:!1}},e.fn.block=function(t){if(this[0]===window){return e.blockUI.on(t),this}var o=a(e.blockUI.defaults,t||{});return this.each((function(){var t=e(this);o.ignoreIfBlocked&&t.data("x-block-ui.isBlocked")||(t.unblock({fadeOut:0}),"static"===e.css(this,"position")&&(this.style.position="relative",t.data("x-block-ui.static",!0)),s(this,o))})),this},e.fn.unblock=function(t){return this[0]===window?(e.blockUI.off(t),this):this.each((function(){f(this,t)}))};var c=null,u=[];function s(t,r){var i;e.blockUI.isOn=!0,r=a(e.blockUI.defaults,r);var l=t===window,s=e(t),f=["<",r.tag,' class="block-ui-message-box" style="color: #FFF;">',null!==(i=r.message)&&void 0!==i?i:e.blockUI.defaults.message,"</",r.tag,">"].join(""),d=("string"==typeof r.loader?r.loader:"")+f;if(!r.ignoreIfBlocked||!s.data("x-block-ui.isBlocked")){if(r.overlayCSS=n(n({},e.blockUI.defaults.overlayCSS),r.overlayCSS||{}),r.onOverlayClick&&(r.overlayCSS.cursor="pointer"),d&&"string"!=typeof d&&(d.parentNode||d.jquery)){var y=d.jquery?d[0]:d,v={};s.data("x-block-ui.history",v),v.el=y,v.parent=y.parentNode,v.display=y.style.display,v.position=y.style.position,v.parent&&v.parent.removeChild(y)}s.data("x-block-ui.onUnblock",r.onUnblock);var h,k,m,g=r.baseZ;r.forceIframe&&(h=e('<iframe class="x-block-ui" style="z-index:'.concat(g++,';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="').concat(r.iframeSrc,'"></iframe>'))),k=e('<div class="x-block-ui x-block-ui__overlay" style="z-index:'.concat(g++,';display:none;border:none;margin:0;padding:0;width:100vw;height:100vh;top:0;left:0"></div>')),m=e('<div class="x-block-ui '.concat(r.blockMsgClass," ").concat(l?"block-ui__page":"block-ui__element",'" style="z-index:').concat(g+10,";display:none;position:").concat(l?"fixed":"absolute",";").concat(l?"flex-direction: column;align-items: center;justify-content: center;":"",'"></div>')),k.css(r.overlayCSS),k.css("position",l?"fixed":"absolute"),r.forceIframe&&h.css("opacity",0);var w=[h,k,m],O=l?e("body"):s;if(w.forEach((function(e){return e&&e.appendTo(O)})),d&&(m.css(n(n({},e.blockUI.defaults.css),r.css||{})),m.append(d),(d.jquery||d.nodeType)&&e(d).show()),r.forceIframe&&r.showOverlay&&h.show(),r.fadeIn){var S=r.onBlock||o,x=r.showOverlay&&!d?S:o,I=d?S:o;r.showOverlay&&k._fadeIn(r.fadeIn,x),d&&m._fadeIn(r.fadeIn,I)}else{r.showOverlay&&k.show(),d&&m.show(),r.onBlock&&r.onBlock.bind(m)()}if(b(1,t,r),l&&(c=m[0],u=e(r.focusableElements,c),r.focusInput&&setTimeout((function(){return p(!1)}),20)),r.timeout){var j=setTimeout((function(){l?e.blockUI.off(r):s.unblock(r)}),r.timeout);s.data("x-block-ui.timeout",j)}}}function f(t,o){e.blockUI.isOn=!1;var n=t===window,r=e(t),i=r.data("x-block-ui.history"),l=r.data("x-block-ui.timeout");l&&(clearTimeout(l),r.removeData("x-block-ui.timeout")),o=a(e.blockUI.defaults,o),b(0,t,o);var c=n?e("body").children(".x-block-ui"):r.children(".x-block-ui");o.fadeOut?c.stop().fadeOut(o.fadeOut,(function(){d(c,i,o,t)})):(c.hide(),d(c,i,o,t))}function d(t,o,n,r){t.each((function(){this.parentNode&&this.parentNode.removeChild(this)}));var i=e(r);if(null!=o&&o.el){var a=o.el,l=o.display,c=o.position,u=o.parent;a.style.display=l,a.style.position=c,u&&u.appendChild(a),i.removeData("x-block-ui.history")}"function"==typeof n.onUnblock&&n.onUnblock(r,n)}function b(t,o,n){var r=o===window,i=e(o);if((t||(!r||c)&&(r||i.data("x-block-ui.isBlocked")))&&(i.data("x-block-ui.isBlocked",t),r&&n.bindEvents&&(!t||n.showOverlay))){e(document)[t?"on":"off"]("mousedown mouseup keydown keypress keyup touchstart touchend touchmove",n,y)}}function y(t){if("keydown"===t.type&&9===t.keyCode&&c&&t.data.constrainTabKey){var o=u,n=!t.shiftKey&&t.target===o[o.length-1],r=t.shiftKey&&t.target===o[0];if(n||r){return setTimeout((function(){return p(r)}),10),!1}}var i=t.data,a=e(t.target);return a.hasClass("x-block-ui__overlay")&&i.onOverlayClick&&i.onOverlayClick(t),a.parents("div.".concat(i.blockMsgClass)).length>0||0===a.parents().children().filter("div.x-block-ui").length}function p(e){if(u){var t=u[!0===e?u.length-1:0];t&&t.focus()}}}(window.$);window.blockui=t})();
var e,o;e=this,o=()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t){e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})}},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{blockui:()=>n,default:()=>n});const t=e=>e&&"object"==typeof e&&e.constructor===Object,i=function(e){for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++){n[l-1]=arguments[l]}return n.reduce(((e,o)=>(t(o)?Object.entries(o).forEach((o=>{let[n,l]=o;e[n]=t(l)&&t(e[n])?i(e[n],l):l})):Object.assign(e,o),e)),{...e})},n=function(e,o){e.fn._fadeIn=e.fn.fadeIn;const n=e.noop||function(){};e.blockUI=e.blockui={on:function(e){let i=arguments.length>1&&arguments[1]!==o?arguments[1]:{};t(e)&&(i=e,e=null),s(window,{content:e,...i})},off:function(){c(window,arguments.length>0&&arguments[0]!==o?arguments[0]:{})},defaults:{loader:"<div class=x-ldr><div></div><div></div><div></div><div></div></div>",showLoader:!0,tag:"div",content:"",css:{padding:0,margin:0,width:"100vw",height:"100vh",top:"0",left:"0",textAlign:"center",color:"#000",border:"1px dashed #000",backgroundColor:"transparent",cursor:"wait",display:"flex",position:"fixed"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"default",position:"fixed"},cursorReset:"default",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,zindex:"auto",bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,blockMsgClass:"x-block-ui__content",ignoreIfBlocked:!1}},e.fn.block=function(o){if(this[0]===window){return e.blockui.on(o),this}const t=i(e.blockui.defaults,o||{});return this.each((function(){const o=e(this);t.ignoreIfBlocked&&o.data("x-block-ui.isBlocked")||(o.unblock({fadeOut:0}),"static"===e.css(this,"position")&&(this.style.position="relative",o.data("x-block-ui.static",!0)),s(this,t))})),this},e.fn.unblock=function(o){return this[0]===window?(e.blockui.off(o),this):this.each((function(){c(this,o)}))};let l=null,a=[];function s(o,t){e.blockui.isOn=!0,t=i(e.blockui.defaults,t);const s=o===window,c=e(o),r=e("body"),u=["<",t.tag,' class="block-ui-content-box" style="color: #FFF;">',t.content??e.blockui.defaults.content,'<span style="display:block; width:100%; height:1px; clear:both;"></span>',t.showLoader?t.loader:"","</",t.tag,">"].join("");if(t.ignoreIfBlocked&&c.data("x-block-ui.isBlocked")){return}t.overlayCSS={...e.blockui.defaults.overlayCSS,...t.overlayCSS||{}},s||(t.overlayCSS={...t.overlayCSS,position:"absolute",width:c.width(),height:c.height()}),t.onOverlayClick&&(t.overlayCSS.cursor="pointer"),c.data("x-block-ui.onUnblock",t.onUnblock);let h,b,p,k="number"!=typeof t.zindex?function(){const e=document.querySelectorAll("div, span, section, header, footer, aside, main, article");let o=0;return e.forEach((e=>{const t=window.getComputedStyle(e).zIndex;isNaN(t)||"auto"===t||(o=Math.max(o,Number(t)))})),o+1}():t.zindex;t.forceIframe&&(h=e(`<iframe class="x-block-ui" style="z-index:${k++};display:none;border:none;margin:0;padding:0;position:absolute;width:100vw;height:100vh;top:0;left:0" src="${t.iframeSrc}"></iframe>`)),b=e(`<div class="x-block-ui x-block-ui__overlay" style="z-index:${k++};display:none;border:none;margin:0;padding:0;width:100vw;height:100vh;top:0;left:0"></div>`),p=e(`<div class="x-block-ui ${t.blockMsgClass} ${s?"block-ui__page":"block-ui__element"}" style="z-index:${k+10};display:none;${s?"flex-direction: column;align-items: center;justify-content: center;":""}"></div>`),b.css(t.overlayCSS),t.forceIframe&&h.css("opacity",0);const y=s?r:c;if([h,b,p].forEach((e=>e&&e.appendTo(y))),u&&(p.css({...e.blockui.defaults.css,...t.css||{}}),s||p.css({position:"absolute",width:c.width(),height:c.height()}),p.append(u),(u.jquery||u.nodeType)&&e(u).show()),t.forceIframe&&t.showOverlay&&h.show(),t.fadeIn){const e=t.onBlock||n,o=t.showOverlay&&!u?e:n,i=u?e:n;t.showOverlay&&b._fadeIn(t.fadeIn,o),u&&p._fadeIn(t.fadeIn,i)}else{t.showOverlay&&b.show(),u&&p.show(),t.onBlock&&t.onBlock.bind(p)()}if(d(1,o,t),s&&(l=p[0],a=e(t.focusableElements,l),r.css("overflow","hidden"),t.focusInput&&setTimeout((()=>f(!1)),20)),t.timeout){const o=setTimeout((()=>{s?e.blockui.off(t):c.unblock(t)}),t.timeout);c.data("x-block-ui.timeout",o)}}function c(o,t){e.blockui.isOn=!1;const n=o===window,s=e(o),c=e("body"),u=s.data("x-block-ui.history"),f=s.data("x-block-ui.timeout");f&&(clearTimeout(f),s.removeData("x-block-ui.timeout")),t=i(e.blockui.defaults,t),d(0,o,t);const h=n?c.children(".x-block-ui"):s.children(".x-block-ui");t.fadeOut?h.stop().fadeOut(t.fadeOut,(()=>{r(h,u,t,o)})):(h.hide(),r(h,u,t,o)),n&&(l=null,a=[],c.css("overflow",""))}function r(o,t,i,n){o.each((function(){this.parentNode&&this.parentNode.removeChild(this)}));const l=e(n);if(t?.el){const{el:e,display:o,position:i,parent:n}=t;e.style.display=o,e.style.position=i,n&&n.appendChild(e),l.removeData("x-block-ui.history")}"function"==typeof i.onUnblock&&i.onUnblock(n,i)}function d(o,t,i){const n=t===window,a=e(t);(o||(!n||l)&&(n||a.data("x-block-ui.isBlocked")))&&(a.data("x-block-ui.isBlocked",o),n&&i.bindEvents&&(!o||i.showOverlay)&&e(document)[o?"on":"off"]("mousedown mouseup keydown keypress keyup touchstart touchend touchmove",i,u))}function u(o){if("keydown"===o.type&&9===o.keyCode&&l&&o.data.constrainTabKey){const e=a,t=!o.shiftKey&&o.target===e[e.length-1],i=o.shiftKey&&o.target===e[0];if(t||i){return setTimeout((()=>f(i)),10),!1}}const t=o.data,i=e(o.target);return i.hasClass("x-block-ui__overlay")&&t.onOverlayClick&&t.onOverlayClick(o),i.parents(`div.${t.blockMsgClass}`).length>0||0===i.parents().children().filter("div.x-block-ui").length}function f(e){if(!a){return}const o=a[!0===e?a.length-1:0];o&&o.focus()}e(document).ready((function(){e("head").append("<style>.x-ldr,.x-ldr div{box-sizing:border-box}.x-ldr{display:inline-block;position:relative;width:80px;height:30px}.x-ldr div{position:absolute;top:25%;width:12px;height:12px;border-radius:50%;background:#a6a8b5;animation-timing-function:cubic-bezier(0,1,1,0)}.x-ldr div:nth-child(1),.x-ldr div:nth-child(2){left:8px}.x-ldr div:nth-child(3){left:32px}.x-ldr div:nth-child(4){left:56px}.x-ldr div:nth-child(1){animation:x-ldr1 0.6s infinite}.x-ldr div:nth-child(2),.x-ldr div:nth-child(3){animation:x-ldr2 0.6s infinite}.x-ldr div:nth-child(4){animation:x-ldr3 0.6s infinite}@keyframes x-ldr1{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes x-ldr3{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes x-ldr2{0%{transform:translate(0,0)}100%{transform:translate(24px,0)}}</style>")}))}(window.$);return o})(),"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("blockui",[],o):"object"==typeof exports?exports.blockui=o():e.blockui=o();
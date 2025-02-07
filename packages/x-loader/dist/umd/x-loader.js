var e,t;e=this,t=()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r){e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>o,domTracking:()=>r,xloader:()=>o});const r=(e=>{const t={isLoaded:!1,onLoadedCallbacks:[],isReady:e=>{t.isLoaded?e():t.onLoadedCallbacks.push(e)}};return t.ready=t.isReady,t.afterLoad=e=>r.isReady((()=>{let t,r,o,s=!1;const a=()=>{s||(s=!0,e(),t&&"function"==typeof t.disconnect&&t.disconnect(),clearTimeout(r),clearTimeout(o))};try{t=new PerformanceObserver((e=>{const t=e.getEntries();for(const e of t){if("first-contentful-paint"===e.name||"first-paint"===e.name){a();break}}})),t.observe({type:"paint",buffered:!0})}catch(e){console.error("PerformanceObserver error:",e)}o=setTimeout((()=>{requestAnimationFrame(a)}),750),r=setTimeout(a,5e3)})),t.domHasLoaded=()=>{t.isLoaded||(t.isLoaded=!0,t.onLoadedCallbacks.forEach((e=>{e()})))},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t.domHasLoaded):t.domHasLoaded(),e.xdom=e.xdom||Object.seal(t)})(window),o=(e=>{const t=new Map,o=new Map,s=new Map,a=new Map,i=new Map;class n{ready(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((e=>this.ready(e,r)))):(e=e.trim(),t.get(e)?Promise.resolve(!0):a.get(e)?a.get(e):new Promise(((o,s)=>{let i;const n=()=>{i&&clearTimeout(i)},d=setInterval((()=>{if(t.get(e)){return clearInterval(d),o(!0),void n()}if(a.get(e)){clearInterval(d),n();const t=setTimeout((()=>{n(),s(console.log(`Timeout ID "${e}".`))}),r);a.get(e).finally((()=>{n(),clearTimeout(t),o(!0)}))}}),50);i=setTimeout((()=>{clearInterval(d),s(console.log(`Timeout ID "${e}".`))}),6e4)}))):Promise.reject(new Error("loader ID required!"))}isLoaded(e){return Array.isArray(e)?e.every((e=>this.isLoaded(e))):!!t.get(e)||!!window[e]}hasId(e){return Array.isArray(e)?e.every((e=>this.hasId(e))):!!o.get(e)}when(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((e=>this.when(e,t)))):(e=e.trim(),new Promise(((r,o)=>{let s;const a=setInterval((()=>{if(window[e]){return clearInterval(a),r(!0),void(s&&clearTimeout(s))}}),50);s=setTimeout((()=>{clearInterval(a),o(console.warn(`Timeout "${e}": not in window.`))}),t)}))):Promise.reject(new Error("loader ID required!"))}}class d{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"js";this.type=e;const t=new n;this.ready=t.ready.bind(t),this.isLoaded=t.isLoaded.bind(t),this.hasId=t.hasId.bind(t)}load(e){let n,d,l,c;for(var u=arguments.length,m=new Array(u>1?u-1:0),h=1;h<u;h++){m[h-1]=arguments[h]}if("object"==typeof m[0]&&null!==m[0]?({id:n,loadType:d,attributes:l,$element:c}=m[0]):[n,d,l,c]=m,0===(e=Array.isArray(e)?e:[e]).length){return Promise.reject(new Error("URL required!"))}if(n=n||`__${Math.random().toString(36).substring(2,15)}`,o.has(n)){return console.warn(`ID "${n}" is already registered.`),Promise.resolve(!0)}o.set(n,!0);const p=e.map((e=>{if(i.get(e)&&"img"!==this.type){return i.get(e)}const t=new Promise(((t,o)=>{if(!s.get(e)||"img"===this.type){return(()=>{let a;switch(a="img"===this.type?new Image:document.createElement("css"===this.type?"link":"script"),this.type){case"css":a.rel="stylesheet",a.type="text/css",a.href=e;break;case"js":a.src=e,a.async=!0;break;case"img":const t={alt:location.href,width:"auto",height:"auto",class:""};l={...t,...l||{}},Object.keys(l).forEach((e=>{["src","loading"].includes(e)||a.setAttribute(e,l[e])})),a.src=e}if(a.onload=()=>{if(s.set(e,!0),"img"===this.type){const e=()=>{c=c||document.querySelector(`[x-id="${n}"]`),c.style.display="none",c.insertAdjacentElement("afterend",a),c.remove()};"lazy"===d?(a.setAttribute("fetchpriority","low"),r.afterLoad(e)):r.isReady(e)}t(e)},a.onerror=()=>o(new Error(`Failed to load: ${e}`)),"img"!==this.type){switch(d){case"eager":document.head.appendChild(a);break;case"lazy":r.isReady((()=>{document.body.appendChild(a)}));break;default:document.body.appendChild(a)}}return a})()}t(e)}));return i.set(e,t),t})),y=Promise.all(p).then((e=>(t.set(n,!0),e))).catch((e=>{throw console.error(`Asset ID "${n}":`,e),e}));return a.set(n,y),y}}const l=e.xloader=e?.xloader||new class{constructor(){this.scripts=new d,this.css=new d("css"),this.img=new d("img"),this.loader=new n,this.autoLoadScripts()}autoLoadScripts(e){(e||document.querySelectorAll("x-loader:not([x-reg])")).forEach((e=>{if(e.attributes["x-reg"]?.value){return}e.setAttribute("x-reg",!0);const t=(()=>{const t={},r=["x-type","x-dep","x-img","x-js","x-loading","x-css","x-id"],o=e.getAttribute("x-dep")?.trim().split(",")||null,s=e.getAttribute("x-loading")||e.getAttribute("x-type");let a=null,i=null;return["x-js","x-css","x-img"].some((t=>{const r=e.getAttribute(t);return!!r&&(a="x-js"===t?"scripts":t.slice(2),i=r.split(","),!0)})),Array.from(e.attributes).forEach((e=>{r.includes(e.name)||(t[e.name.replace(/^x-/,"")]=e.value)})),{attributes:t,dep:o,loadType:s,type:a,src:i,$element:e}})();if(t.src){const r=e.getAttribute("x-id")||`x__${Math.random().toString(36).substring(2,15)}`;e.setAttribute("x-id",r);const o=()=>this[t.type].load(t.src,{id:r,loadType:t.loadType,attributes:t.attributes,$element:t.$element});t.dep?this.loader.ready(t.dep).then(o):o()}}))}};class c extends HTMLElement{constructor(){super()}connectedCallback(){if(this.hasAttribute("x-img")){let e;const t=this.getAttribute("x-loader-html");if(t){e=document.createElement("div"),e.innerHTML=t}else{e=document.createElement("img");const t=this.getAttribute("width"),r=this.getAttribute("height"),o=r?{maxHeight:`${r}px`,height:"100%",aspectRatio:`${t||16} / ${r}`}:{maxHeight:"100%",height:"auto",aspectRatio:"16 / 9"};Object.assign(e.style,{maxWidth:"100%",width:t?`${t}px`:"100%",...o});const s="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";e.src=s}e.classList.add("x-loader"),this.appendChild(e)}l.autoLoadScripts([this])}}return customElements.define("x-loader",c),l})(window);return t})(),"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("x-loader",[],t):"object"==typeof exports?exports["x-loader"]=t():e["x-loader"]=t();
var e,t;e=this,t=()=>(()=>{"use strict";var e={d:(t,r)=>{for(var s in r){e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>s,domTracking:()=>r,xloader:()=>s});const r=(e=>{const t={isLoaded:!1,onLoadedCallbacks:[],isReady:e=>{t.isLoaded?e():t.onLoadedCallbacks.push(e)}};t.ready=t.isReady;const s=new Event("appIsReady",{bubbles:!0,cancelable:!1,composed:!0});return t.afterLoad=e=>r.isReady((()=>{let t=!1;const r=new PerformanceObserver((s=>{const a=s.getEntries();for(const s of a){if("first-contentful-paint"===s.name||"first-paint"===s.name){e(),t=!0,r.disconnect();break}}}));try{r.observe({type:"paint",buffered:!0})}catch(e){console.error("PerformanceObserver error:",e)}setTimeout((()=>{const s=setTimeout((()=>{e(),r.disconnect(),t=!0}),4e3);t||requestAnimationFrame((()=>{t||(clearTimeout(s),e(),t=!0),r.disconnect()}))}),750)})),t.appHasLoaded=()=>{t.isLoaded||(t.isLoaded=!0,e.dispatchEvent(s),t.onLoadedCallbacks.forEach((e=>{e()})))},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t.appHasLoaded):t.appHasLoaded(),e.xdom=e.xdom||t})(window),s=(e=>{const t=new Map,s=new Map,a=new Map,o=new Map,i=new Map;class n{ready(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((e=>this.ready(e,r)))):(e=e.trim(),t.get(e)?Promise.resolve(!0):o.get(e)?o.get(e):new Promise(((r,s)=>{let a;const i=()=>{a&&clearTimeout(a)},n=setInterval((()=>{if(t.get(e)){return clearInterval(n),r(!0),void i()}if(o.get(e)){clearInterval(n),i();const t=setTimeout((()=>{i(),s(console.log(`Timeout ID "${e}".`))}),3e3);o.get(e).finally((()=>{i(),clearTimeout(t),r(!0)}))}}),50);a=setTimeout((()=>{clearInterval(n),s(console.log(`Timeout ID "${e}".`))}),6e4)}))):Promise.reject(new Error("loader ID required!"))}isLoaded(e){return Array.isArray(e)?e.every((e=>this.isLoaded(e))):!!t.get(e)||!!window[e]}hasId(e){return Array.isArray(e)?e.every((e=>this.hasId(e))):!!s.get(e)}when(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;return e?Array.isArray(e)?Promise.all(e.map((e=>this.when(e,t)))):(e=e.trim(),new Promise(((r,s)=>{let a;const o=setInterval((()=>{if(window[e]){return clearInterval(o),r(!0),void(a&&clearTimeout(a))}}),50);a=setTimeout((()=>{clearInterval(o),s(console.warn(`Timeout "${e}": not in window.`))}),t)}))):Promise.reject(new Error("loader ID required!"))}}class d{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"js";this.type=e;const t=new n;this.ready=t.ready.bind(t),this.isLoaded=t.isLoaded.bind(t),this.hasId=t.hasId.bind(t)}load(e){let n,d,l,c;for(var u=arguments.length,m=new Array(u>1?u-1:0),h=1;h<u;h++){m[h-1]=arguments[h]}if("object"==typeof m[0]&&null!==m[0]?({id:n,loadType:d,attributes:l,$element:c}=m[0]):[n,d,l,c]=m,0===(e=Array.isArray(e)?e:[e]).length){return Promise.reject(new Error("URL required!"))}if(n=n||`__${Math.random().toString(36).substring(2,15)}`,s.has(n)){return console.warn(`ID "${n}" is already registered.`),Promise.resolve(!0)}s.set(n,!0);const p=e.map((e=>{if(i.get(e)&&"img"!==this.type){return i.get(e)}const t=new Promise(((t,s)=>{if(!a.get(e)||"img"===this.type){return(()=>{let o;switch(o="img"===this.type?new Image:document.createElement("css"===this.type?"link":"script"),this.type){case"css":o.rel="stylesheet",o.type="text/css",o.href=e;break;case"js":o.src=e,o.async=!0;break;case"img":const t={alt:location.href,width:"auto",height:"auto",class:""};l={...t,...l||{}},Object.keys(l).forEach((e=>{["src","loading"].includes(e)||o.setAttribute(e,l[e])})),o.src=e}if(o.onload=()=>{if(a.set(e,!0),"img"===this.type){const e=()=>{c=c||document.querySelector(`[x-id="${n}"]`),c.replaceChildren(),c.style.display="none",c.insertAdjacentElement("afterend",o),c.remove()};"lazy"===d?r.afterLoad(e):r.isReady(e)}t(e)},o.onerror=()=>s(new Error(`Failed to load: ${e}`)),"img"!==this.type){switch(d){case"eager":document.head.appendChild(o);break;case"lazy":r.isReady((()=>{document.body.appendChild(o)}));break;default:document.body.appendChild(o)}}return o})()}t(e)}));return i.set(e,t),t})),y=Promise.all(p).then((e=>(t.set(n,!0),e))).catch((e=>{throw console.error(`Asset ID "${n}":`,e),e}));return o.set(n,y),y}}const l=e.xloader=e?.xloader||new class{constructor(){this.scripts=new d,this.css=new d("css"),this.img=new d("img"),this.loader=new n,this.autoLoadScripts()}autoLoadScripts(e){(e||document.querySelectorAll("x-loader:not([x-reg])")).forEach((e=>{if(e.attributes["x-reg"]?.value){return}e.setAttribute("x-reg",!0);const t=(()=>{const t={},r=["x-type","x-dep","x-img","x-js","x-loading","x-css","x-id"],s=e.getAttribute("x-dep")?.trim().split(",")||null,a=e.getAttribute("x-loading")||e.getAttribute("x-type");let o=null,i=null;return["x-js","x-css","x-img"].some((t=>{const r=e.getAttribute(t);return!!r&&(o="x-js"===t?"scripts":t.slice(2),i=r.split(","),!0)})),Array.from(e.attributes).forEach((e=>{r.includes(e.name)||(t[e.name.replace(/^x-/,"")]=e.value)})),{attributes:t,dep:s,loadType:a,type:o,src:i,$element:e}})();if(t.src){const r=e.getAttribute("x-id")||`x__${Math.random().toString(36).substring(2,15)}`;e.setAttribute("x-id",r);const s=()=>this[t.type].load(t.src,{id:r,loadType:t.loadType,attributes:t.attributes,$element:t.$element});t.dep?this.loader.ready(t.dep).then(s):s()}}))}};class c extends HTMLElement{constructor(){super()}connectedCallback(){if(this.hasAttribute("x-img")&&!this.hasAttribute("x-reg")){let e;const t=this.getAttribute("x-loader-html");if(t){e=document.createElement("div"),e.innerHTML=t}else{e=document.createElement("img");const t=this.getAttribute("width"),r=this.getAttribute("height"),s=r?{maxHeight:`${r}px`,height:"100%",aspectRatio:`${t||16} / ${r}`}:{maxHeight:"100%",height:"auto",aspectRatio:"16 / 9"};Object.assign(e.style,{maxWidth:"100%",width:t?`${t}px`:"100%",...s});const a="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";e.src=a}e.classList.add("x-loader"),this.appendChild(e)}l.autoLoadScripts([this])}}return customElements.define("x-loader",c),l})(window);return t})(),"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("x-loader",[],t):"object"==typeof exports?exports["x-loader"]=t():e["x-loader"]=t();
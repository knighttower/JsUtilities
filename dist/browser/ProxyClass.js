(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){return new Proxy(e,{construct(e,t){const r=new e(...t),o=new Set(r._private||[]),n=new Set([...o,...r._protected||[]]),p=new Set(r._mutable||[]);return new Proxy(r,{get(e,t,r){if(!o.has(t))return Reflect.get(e,t,r);console.error("Attempt to access private property:",t)},set:(e,t,r)=>o.has(t)||n.has(t)&&!p.has(t)?(console.error("Attempt to modify protected/private property:",t),!1):Reflect.set(e,t,r),deleteProperty:(e,t)=>o.has(t)||n.has(t)?(console.error("Attempt to delete protected/private property:",t),!1):Reflect.deleteProperty(e,t),defineProperty:(e,t,r)=>o.has(t)||n.has(t)?(console.error("Attempt to define protected/private property:",t),!1):Reflect.defineProperty(e,t,r),ownKeys:e=>Reflect.ownKeys(e).filter((e=>!o.has(e)))})}})}e.r(t),e.d(t,{ProxyClass:()=>r,default:()=>r,proxyClass:()=>r}),window.ProxyClass=t})();
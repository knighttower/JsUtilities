!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ProxyObject",[],t):"object"==typeof exports?exports.ProxyObject=t():e.ProxyObject=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){const t=new Set(e._private||["_private"]),r=new Set([...t,...e._protected||[]]),o=new Set(e._mutable||[]),n=e=>r.has(e)&&!o.has(e)?(console.error(`Attempt to modify protected property: ${e}`),!1):!(t.has(e)&&!o.has(e)&&(console.error(`Attempt to modify private property: ${e}`),1));return new Proxy(e,{get(e,r,o){if(!t.has(r))return Reflect.get(e,r,o);console.error(`Attempt to access private property: ${r}`)},set:(e,t,r,o)=>!!n(t)&&Reflect.set(e,t,r,o),deleteProperty:(e,t)=>!!n(t)&&Reflect.deleteProperty(e,t),defineProperty:(e,t,r)=>!!n(t)&&Reflect.defineProperty(e,t,r),ownKeys:e=>Reflect.ownKeys(e).filter((e=>!t.has(e))),enumerate:e=>Reflect.enumerate(e).filter((e=>!t.has(e))),has:(e,r)=>!t.has(r)&&Reflect.has(e,r),getOwnPropertyDescriptor(e,r){if(!t.has(r))return Reflect.getOwnPropertyDescriptor(e,r)}})}return e.r(t),e.d(t,{proxyObject:()=>r}),t})()));
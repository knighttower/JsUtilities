!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ProxyObject",[],t):"object"==typeof exports?exports.ProxyObject=t():e.ProxyObject=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){const t=new Set(e._private||["_private"]),o=new Set([...t,...e._protected||[]]),r=new Set(e._mutable||[]);return new Proxy(e,{get(e,o,r){if(!t.has(o))return Reflect.get(e,o,r);console.error(`Attempt to access private property: ${o}`)},set:(e,p,n,c)=>o.has(p)&&!r.has(p)?(console.error(`Attempt to modify protected property: ${p}`),!1):t.has(p)?(console.error(`Attempt to modify private property: ${p}`),!1):Reflect.set(e,p,n,c),deleteProperty:(e,r)=>o.has(r)||t.has(r)?(console.error(`Attempt to delete protected/private property: ${r}`),!1):Reflect.deleteProperty(e,r),defineProperty:(e,r,p)=>o.has(r)||t.has(r)?(console.error(`Attempt to define protected/private property: ${r}`),!1):Reflect.defineProperty(e,r,p),ownKeys:e=>Reflect.ownKeys(e).filter((e=>!t.has(e)))})}return e.r(t),e.d(t,{ProxyObject:()=>o,default:()=>o,proxyObject:()=>o}),t})()));
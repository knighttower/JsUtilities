(()=>{"use strict";var e={d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function o(e){const r=new Map((e._private||["_private"]).map((e=>[e,!0]))),o=new Map([...r,...(e._protected||[]).map((e=>[e,!0]))]),t=new Map((e._mutable||[]).map((e=>[e,!0])));return new Proxy(e,{get:(e,o)=>o in e&&!r.has(String(o))?e[o]:void console.error("Prop is private, not set, or object is protected",o),set:(e,n,p)=>(n=String(n))in e?t.has(n)?(e[n]=p,!0):o.has(n)||r.has(n)?(console.error("The prop is protected or private and cannot be modified",n,p),!1):(e[n]=p,!0):(console.error("Protected Object, cannot set new props",n,p),!1)})}e.r(r),e.d(r,{ProxyHelper:()=>o,default:()=>o,proxyHelper:()=>o}),window.ProxyHelper=r})();
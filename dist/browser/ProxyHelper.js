(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function r(e){const o=new Map((e._private||["_private"]).map((e=>[e,!0]))),r=new Map([...o,...(e._protected||[]).map((e=>[e,!0]))]),t=new Map((e._mutable||[]).map((e=>[e,!0])));return new Proxy(e,{get:(e,r)=>r in e&&!o.has(String(r))?e[r]:void console.error("Prop is private, not set, or object is protected",r),set:(e,n,a)=>(n=String(n))in e?t.has(n)?(e[n]=a,!0):r.has(n)||o.has(n)?(console.error("The prop is protected or private and cannot be modified",n,a),!1):(e[n]=a,!0):(console.error("Protected Object, cannot set new props",n,a),!1)})}e.r(o),e.d(o,{default:()=>r}),window.ProxyHelper=o})();
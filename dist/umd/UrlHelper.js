!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("UrlHelper",[],t):"object"==typeof exports?exports.UrlHelper=t():e.UrlHelper=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){const t=window,o=document,r=t.$HOST||!1,n=t.$TEMPLATE||!1,a=t.location.protocol.replace(":",""),l=r||t.location.host,i=n||"",s=location.pathname,c=r||`${a}://${l}`,p=r?`${r}${s}`:`${a}://${l}${s}`;let u=null;const f=()=>{if(u)return u;const e=new URLSearchParams(t.location.search),o={};for(const[t,r]of e.entries())o[t]=r;return u={params:e,queryString:e.toString(),search:t.location.search,keys:Array.from(e.keys()),values:Array.from(e.values()),collection:o},u};e.getPage=()=>o.location.toString().toLowerCase().split("/").pop().split(".")[0]||"index",e.getParams=()=>f(),e.getQuery=()=>f().queryString,e.addToQuery=e=>{const t=f().collection;return Object.assign(t,e),{collection:t,queryString:Object.entries(t).map((([e,t])=>`${e}=${t}`)).join("&")}},e.getHash=()=>t.location.hash.substring(1),e.setHash=e=>{o.location.hash=e},e.deleteHash=()=>{history.pushState("",o.title,t.location.pathname)},e.goTo=e=>(t.location.href=e,!1),e.open=(e,o="_blank",r="")=>t.open(e,o,r),e.onChange=e=>{"function"==typeof e&&t.addEventListener("hashchange",e)},e.fullUrl=p,e.siteUrl=c,e.template=i,e.protocol=a,e.host=l,e.path=s,e.readUrl=o.URL}return e.r(t),e.d(t,{UrlHelper:()=>o,default:()=>o,urlHelper:()=>o}),t})()));
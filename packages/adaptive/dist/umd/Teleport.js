var t,e;t=this,e=()=>(()=>{"use strict";var t={d:(e,n)=>{for(var s in n){t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){const e=a(t);return null!==e?e:t}function s(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==a(t)||"boolean"==typeof t?t:l(t)?e:t}t.r(e),t.d(e,{Teleport:()=>L,TeleportGlobal:()=>z,default:()=>L,teleport:()=>L});const r=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;t=t||40;for(var e="",n=0;n<t/3+1;n++){e+=Math.random().toString(36).substring(2,15)}return e.substring(0,t)};function i(){return"id__"+r(8)+"__"+(new Date).getTime()}const o=i;function l(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function a(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t)))){return+t}}return null}function c(t,e){if(null===t){return e?null===e||"null"===e:"null"}let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){for(let t of e.split("|")){if(n===t){return t}}return!1}return e===n}return n}function u(t){const e=t.match(/^(\{.*\}|\[.*\])$/);return e?e[0].slice(1,-1).trim():t}function h(t){if(t){if("string"!=typeof t){return t}for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++){n[s-1]=arguments[s]}return n.reduce(((t,e)=>{const n=e instanceof RegExp?e:new RegExp(v(e));return t.replace(n,"")}),t).trim()}}function f(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"]";if("string"!=typeof t){return t}const s=t.lastIndexOf(e);if(-1===s){return null}const r=t.substring(s),i=r.indexOf(n);return-1===i?null:r.substring(0,i+1)}function p(t){if(c(t,"object")||c(t,"array")||!t){return t}const e=t=>m(t,"{","}"),r=t=>m(t,"[","]"),i=(e(t)?"object":null)||(r(t)?"array":null);if(!i){return t}const l={},a=t=>{if(!t){return}let n=(t=>{const e=f(t,"{","}"),n=f(t,"[","]");return t.indexOf(e)>t.indexOf(n)?e||null:n||null})(u(t));return n?(t=((t,n)=>{let s=`__${o()}__`,i=(e(n)?"object":null)||(r(n)?"array":null)||"string";return t=t.replace(n,s),l[s]={type:i,matched:n},t})(t,n),a(t)||t):void 0},h=(t,e)=>{t=u(t);let r="object"===e?{}:[];return y(t).forEach(((t,i)=>{const o=t.includes(":")&&"object"===e,a=o?y(t,":"):[],c=g(s(a[0],i));if((t=o?a[1]:t)in l){const e=l[t];t=h(e.matched,e.type)}t=n(g(t)),"object"===e?r[c]=t:r.push(t)})),r};return h(a(t)||t,i)}function d(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof t){return t}e=v(e),n=v(n);let r=new RegExp(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++){e[n]=arguments[n]}if(e.length<2){throw new Error("You need to pass at least two arguments")}let s="";return e.forEach(((t,e)=>{t instanceof RegExp&&(t=t.source),0===e?s=t:s+=`((.|\n)*?)${t}`})),s}(e,n),"gm");const i=t.match(r);return i?s?i:i[0]:null}function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if("string"!=typeof t){return t}if(l(t)){return[]}let n=(t=h(t)).split(e).map((t=>h(t)));return 1===n.length&&""===n[0]?[t]:n}function b(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof t){return t}const r=d(t,e,n,s)??(s?[]:t);return s?r.map((t=>h(t,e,n))):h(r,e,n)}function g(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function v(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}const j={};let O;const w=()=>{if("undefined"!=typeof window&&!O){const t={childList:!0,subtree:!0};if(O=new MutationObserver((t=>{for(const e of t){if("childList"===e.type){for(const t in j){j[t]()}}}})),document.body){return O.observe(document.body,t)}document.addEventListener("DOMContentLoaded",(e=>O.observe(document.body,t)))}},E=(t,e)=>{e&&(j[t]=e)},k=t=>{t&&delete j[t]};class A{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;w(),this.selector=t,"object"==typeof t?this.domElement=t:String(t).includes("//")?this.domElement=this.getElementByXpath(t):this.domElement=e.querySelector(t)}isInDom(){return Boolean(this.domElement?.outerHTML)}whenInDom(){let t=this,e=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(n){t.isInDom()?n(t):E(e,(()=>{let s=new A(t.selector);s.isInDom()&&(t=s,n(t),k(e))}))}))}getElementByXpath(t){return document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}getXpathTo(){let t=this.domElement;if(t.id){return`//*[@id='${t.id}']`}if(t===document.body){return"//"+t.tagName}let e=0,n=t.parentNode.childNodes;for(let s=0;s<n.length;s++){let r=n[s];if(r===t){return new A(t.parentNode).getXpathTo()+"/"+t.tagName+"["+(e+1)+"]"}1===r.nodeType&&r.tagName===t.tagName&&e++}}getAttribute(t){return this.domElement.getAttribute(t)||null}getHash(){let t=String(this.getXpathTo()),e=0;if(0===t.length){return e}for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e|=0}return e}}const T=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return new A(t,e)},M=new Map([["array",t=>c(t,"array")],["bigInt",t=>"bigint"==typeof t],["boolean",t=>"boolean"==typeof t],["date",t=>t instanceof Date],["float",t=>"number"==typeof t&&!Number.isInteger(t)],["function",t=>"function"==typeof t],["int",t=>Number.isInteger(t)],["map",t=>t instanceof Map],["null",t=>null===t],["number",t=>"number"==typeof t],["object",t=>c(t,"object")],["promise",t=>t instanceof Promise],["regExp",t=>t instanceof RegExp],["set",t=>t instanceof Set],["string",t=>"string"==typeof t],["symbol",t=>"symbol"==typeof t],["undefined",t=>void 0===t],["weakMap",t=>t instanceof WeakMap],["weakSet",t=>t instanceof WeakSet]]),I=new Map,x=new Map;function D(t){throw new Error(`Type Error: "${t}" is not supported`)}function K(t){if(c(t,"array")||c(t,"object")){return c(t)}const e=t.trim();return m(e,"[","]")?"array":m(e,"{","}")?"object":"basic"}const N=t=>{return e=t,x.has(e)?x.get(e):e.split("|").reduce(((t,n)=>{let s=!1,r=n.trim();r.endsWith("?")&&(r=r.slice(0,-1),s=!0);const i=M.get(r)??D(r);return i&&t.push(i),s&&t.push(M.get("null"),M.get("undefined")),x.set(e,t),t}),[]);var e},S=t=>new class{constructor(){return this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()}checkOptionalKey(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}checkTheAnyKey(t){if("any"in t){const e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((t=>"any"!==t)))}}handleObject(){const e=p(t);this.checkTheAnyKey(e);for(const t in e){const n=this.checkOptionalKey(t),s=e[t];"..."!==s?this.testUnit.get("tests").set(n,R(s)):(delete e[t],this.testUnit.set("testOnly",!0))}return this.testUnit}};function R(t){if(I.has(t)){return I.get(t)}let e=new Map([["testMethod",K(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",N(t));break;case"array":e.set("tests",(t=>{const e=[];return p(t).forEach((t=>{e.push(R(t))})),e})(t));break;case"object":const n=S(t);e=new Map([...e,...n]);break;default:D(t)}return I.set(t,e),e}const $=[],F=new Map;class U{constructor(t,e){const{testOnly:n,testFew:s,testAllAny:r,optionalKeys:i,tests:o}=[...e.entries()].reduce(((t,e)=>{let[n,s]=e;return{...t,[n]:s}}),{});this.testUnitKeys=[...o.keys()],this.testOnly=n,this.testFew=s,this.testAllAny=r,this.optionalKeys=i,this.testCollection=o,this.inputObject=t}handleUnitTest(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!l(this.testFew):const t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!l(this.optionalKeys):const e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(const t in this.inputObject){if(!this.testCollection.has(t)){return W(this.inputObject,`Key: "${t}" not found in the test collection, or use the "any" (any:[type]) key test or "..." after the last key in the test collection {key1: type, key2: type, ...} to only test a few keys.`),!1}}}return this.defaultTest()}filterOutOptionalKeys(){this.testUnitKeys=this.testUnitKeys.filter((t=>!this.optionalKeys.includes(t)))}filterOutFew(){this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((t=>{let[e]=t;return!this.testFew.includes(e)})))}testObjOptionalKeys(){return this.optionalKeys.every((t=>{const e=this.testCollection.get(t),n=this.inputObject[t];return!n||C(n,e)}))}testObjFew(){return this.testFew.every((t=>{const e=this.testCollection.get(t);return C(this.inputObject[t],e)}))}testObjAllAny(){const t=Object.values(this.inputObject);return 0===t.length?C(null,this.testCollection.get("any")):t.every((t=>C(t,this.testCollection.get("any"))))}defaultTest(){return this.testUnitKeys.every((t=>{const e=this.testCollection.get(t);return C(this.inputObject[t],e)}))}}const _=(t,e)=>!!c(t,"object")&&new U(t,e).handleUnitTest();function C(t,e){const n=e.get("testMethod"),s=e.get("tests");switch(n){case"basic":return((t,e)=>e.some((n=>{const s=n(t);return s||W(t,e),s})))(t,s);case"array":return((t,e)=>!(!c(t,"array")||0===t.length)&&e.every(((e,n)=>C(t[n],e))))(t,s);case"object":return _(t,e);default:return!1}}function P(t){if(t){if(F.has(t)){return F.get(t)}let e=null;switch(typeof t){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return F.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}function W(t,e){$.push({value:JSON.stringify(t),tests:JSON.stringify(e),found:c(t)})}const X=(t,e,n)=>new class{constructor(){this.unitTest=R(e),this.testResult=C(t,this.unitTest),this.bool=this.testResult,this.settings=P(n),this.callback=this.settings.callback??null,this.testData={typeExp:e,inputVal:t,inputType:c(t),callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}test(){return this.testResult}log(){return console.log("-------------------------- \n ::: Test Data Info :::"),console.table(this.testData),this}fail(){return this.testResult?this:(this.log(),this.settings?.error&&console.log("\n\n-----\x3e Error Message: ",this.settings.error),function(t){const e=$[$.length-1];throw console.log("\n::::::::::::: Type error or not valid ::::::::::::::"),console.log("Input Value used: ",t),console.log("---\x3e Value Found:",e.found),console.log("---\x3e Test Permormed:",e.tests),$.length=0,new Error(`\n\n---------------------\nTypeCheck Error ---\x3e\n\n The value must not be of type (Type found) = "${e.found}". \n\n The Type used is invalid for value: "${e.value}". \n\n see logged error for details\n---------------------\n\n`)}(t))}return(){return t}};class L{constructor(t){if(w(),!X(t,"string|object").test()){return}if(this.props=t,!this.props.adaptiveId){const t=T(this.props),e=t.getAttribute("data-adaptive-id")??null,n=e||t.getHash();e||t.domElement.setAttribute("data-adaptive-id",n),this.props=Object.assign({},this.props,{adaptiveId:n,helper:t,domElement:t.domElement,xpath:t.getXpathTo()})}let e=T(`[name="adaptive"][value="${this.props.adaptiveId}"`);e.isInDom()||(e=document.createElement("param"),e.name="adaptive",e.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",e))}beam(t){if(t=function(t){const e=t;if(!s(e)){return null}const n=function(){return{type:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,directive:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}},r=/^\[((.|\n)*?)\]$/gm,i=/^\{((.|\n)*?)\:((.|\n)*?)\}$/gm,o=/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g,l=/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm,a=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;let c=typeof e;if("object"===c||"array"===c){return n(c,e)}switch(!0){case!!e.match(r):c="array";break;case!!e.match(i):c="object";break;case!!e.match(o):const t=e.split("(")[0].trim();return n("idOrClassWithDirective",{[t]:b(e,"(",")")});case!!e.match(l):case!!e.match(a):c="dotObject";break;default:return n("string",e)}if("array"===c||"object"===c){let t=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'"';return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}(e);try{return n(c,JSON.parse(t))}catch(t){}return n(c,p(t))}if("dotObject"===c){let t,s,r;const i={};return y(e,"&&").forEach((e=>{e.match(a)?(t=b(e,"](",")"),s=b(e,"[","]"),r=e.split("[")[0].trim()):(t=b(e,"(",")"),e=e.replace(d(e,"(",")"),""),[r,s]=y(e,".")),t=p(t),i[r]||(i[r]={}),y(s,"|").forEach((e=>{i[r][e]=t}))})),n("dotObject",i)}}(t).directive,c(t,"object")&&t.teleport){return this.props.domElement.removeAttribute("data-adaptive-id"),void $adaptive.registerElement(this.props.domElement,t)}switch(c(t)){case"string":t=["default",t];break;case"object":const e=Object.keys(t)[0];t=[e,t[e]];break;case"array":1===t.length&&(t=["default",t[0]])}const[e,n]=t,r=T(n);let i="beforeend";switch(e){case"before":i="beforebegin";break;case"after":i="afterend"}r.isInDom()?r.domElement.insertAdjacentElement(i,this.props.domElement):E(this.props.adaptiveId,(()=>{const t=T(n);t.isInDom()&&(t.domElement.insertAdjacentElement(i,this.props.domElement),k(this.props.adaptiveId))}))}back(){let t=T(`[name="adaptive"][value="${this.props.adaptiveId}"`);t.isInDom()&&t.domElement.insertAdjacentElement("afterend",this.props.domElement)}cancel(){k(this.props.adaptiveId)}}let V=!1;function z(){V||(document.querySelectorAll("[data-teleport]").forEach((t=>{new L(t).beam(t.getAttribute("data-teleport"))})),V=!0)}return e})(),"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Teleport",[],e):"object"==typeof exports?exports.Teleport=e():t.Teleport=e();
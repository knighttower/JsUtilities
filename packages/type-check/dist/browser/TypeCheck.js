(()=>{"use strict";var t={d:(e,n)=>{for(var s in n){t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t){const e=l(t);return null!==e?e:t}t.d(e,{typeCheck:()=>R});const s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;t=t||40;for(var e="",n=0;n<t/3+1;n++){e+=Math.random().toString(36).substring(2,15)}return e.substring(0,t)};function r(){return"id__"+s(8)+"__"+(new Date).getTime()}const i=r;function o(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"==typeof t&&0===Object.keys(t).length)}function l(t){const e=typeof t;switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t)))){return+t}}return null}function u(t,e){if(null===t){return e?null===e||"null"===e:"null"}let n;switch(typeof t){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":n=typeof t;break;case"object":n=Array.isArray(t)?"array":"object";break;default:n="unknown"}if(e){if(e.includes("|")){for(let t of e.split("|")){if(n===t){return t}}return!1}return e===n}return n}function c(t){const e=t.match(/^(\{.*\}|\[.*\])$/);return e?e[0].slice(1,-1).trim():t}function a(t){if(t){if("string"!=typeof t){return t}for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++){n[s-1]=arguments[s]}return n.reduce(((t,e)=>{const n=e instanceof RegExp?e:new RegExp(g(e));return t.replace(n,"")}),t).trim()}}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"]";if("string"!=typeof t){return t}const s=t.lastIndexOf(e);if(-1===s){return null}const r=t.substring(s),i=r.indexOf(n);return-1===i?null:r.substring(0,i+1)}function f(t){if(u(t,"object")||u(t,"array")||!t){return t}const e=t=>b(t,"{","}"),s=t=>b(t,"[","]"),r=(e(t)?"object":null)||(s(t)?"array":null);if(!r){return t}const a={},f=t=>{if(!t){return}let n=(t=>{const e=h(t,"{","}"),n=h(t,"[","]");return t.indexOf(e)>t.indexOf(n)?e||null:n||null})(c(t));if(!n){return}return t=((t,n)=>{let r=`__${i()}__`,o=(e(n)?"object":null)||(s(n)?"array":null)||"string";return t=t.replace(n,r),a[r]={type:o,matched:n},t})(t,n),f(t)||t},g=(t,e)=>{t=c(t);let s="object"===e?{}:[];return y(t).forEach(((t,r)=>{const i=t.includes(":")&&"object"===e,u=i?y(t,":"):[],c=p(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==l(t)||"boolean"==typeof t?t:o(t)?e:t}(u[0],r));if((t=i?u[1]:t)in a){const e=a[t];t=g(e.matched,e.type)}t=n(p(t)),"object"===e?s[c]=t:s.push(t)})),s};return g(f(t)||t,r)}function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if("string"!=typeof t){return t}if(o(t)){return[]}let n=(t=a(t)).split(e).map((t=>a(t)));return 1===n.length&&""===n[0]?[t]:n}function p(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function b(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function g(t){return t instanceof RegExp?t:t.split("").map((t=>["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?`\\${t}`:t)).join("")}const d=new Map([["array",t=>u(t,"array")],["bigInt",t=>"bigint"==typeof t],["boolean",t=>"boolean"==typeof t],["date",t=>t instanceof Date],["float",t=>"number"==typeof t&&!Number.isInteger(t)],["function",t=>"function"==typeof t],["int",t=>Number.isInteger(t)],["map",t=>t instanceof Map],["null",t=>null===t],["number",t=>"number"==typeof t],["object",t=>u(t,"object")],["promise",t=>t instanceof Promise],["regExp",t=>t instanceof RegExp],["set",t=>t instanceof Set],["string",t=>"string"==typeof t],["symbol",t=>"symbol"==typeof t],["undefined",t=>void 0===t],["weakMap",t=>t instanceof WeakMap],["weakSet",t=>t instanceof WeakSet]]),O=new Map,w=new Map;function j(t){throw new Error(`Type Error: "${t}" is not supported`)}function k(t){if(u(t,"array")||u(t,"object")){return u(t)}const e=t.trim();return b(e,"[","]")?"array":b(e,"{","}")?"object":"basic"}const m=t=>{return e=t,w.has(e)?w.get(e):e.split("|").reduce(((t,n)=>{let s=!1,r=n.trim();r.endsWith("?")&&(r=r.slice(0,-1),s=!0);const i=d.get(r)??j(r);return i&&t.push(i),s&&t.push(d.get("null"),d.get("undefined")),w.set(e,t),t}),[]);var e},v=t=>new class{constructor(){return this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()}checkOptionalKey(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}checkTheAnyKey(t){if("any"in t){const e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((t=>"any"!==t)))}}handleObject(){const e=f(t);this.checkTheAnyKey(e);for(const t in e){const n=this.checkOptionalKey(t),s=e[t];"..."!==s?this.testUnit.get("tests").set(n,A(s)):(delete e[t],this.testUnit.set("testOnly",!0))}return this.testUnit}};function A(t){if(O.has(t)){return O.get(t)}let e=new Map([["testMethod",k(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",m(t));break;case"array":e.set("tests",(t=>{const e=[];return f(t).forEach((t=>{e.push(A(t))})),e})(t));break;case"object":const n=v(t);e=new Map([...e,...n]);break;default:j(t)}return O.set(t,e),e}const T=[],K=new Map;class M{constructor(t,e){const{testOnly:n,testFew:s,testAllAny:r,optionalKeys:i,tests:o}=[...e.entries()].reduce(((t,e)=>{let[n,s]=e;return{...t,[n]:s}}),{});this.testUnitKeys=[...o.keys()],this.testOnly=n,this.testFew=s,this.testAllAny=r,this.optionalKeys=i,this.testCollection=o,this.inputObject=t}handleUnitTest(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!o(this.testFew):const t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!o(this.optionalKeys):const e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(const t in this.inputObject){if(!this.testCollection.has(t)){return F(this.inputObject,`Key: "${t}" not found in the test collection, or use the "any" (any:[type]) key test or "..." after the last key in the test collection {key1: type, key2: type, ...} to only test a few keys.`),!1}}}return this.defaultTest()}filterOutOptionalKeys(){this.testUnitKeys=this.testUnitKeys.filter((t=>!this.optionalKeys.includes(t)))}filterOutFew(){this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((t=>{let[e]=t;return!this.testFew.includes(e)})))}testObjOptionalKeys(){return this.optionalKeys.every((t=>{const e=this.testCollection.get(t),n=this.inputObject[t];return!n||E(n,e)}))}testObjFew(){return this.testFew.every((t=>{const e=this.testCollection.get(t);return E(this.inputObject[t],e)}))}testObjAllAny(){const t=Object.values(this.inputObject);return 0===t.length?E(null,this.testCollection.get("any")):t.every((t=>E(t,this.testCollection.get("any"))))}defaultTest(){return this.testUnitKeys.every((t=>{const e=this.testCollection.get(t);return E(this.inputObject[t],e)}))}}const x=(t,e)=>!!u(t,"object")&&new M(t,e).handleUnitTest();function E(t,e){const n=e.get("testMethod"),s=e.get("tests");switch(n){case"basic":return((t,e)=>e.some((n=>{const s=n(t);return s||F(t,e),s})))(t,s);case"array":return((t,e)=>!(!u(t,"array")||0===t.length)&&e.every(((e,n)=>E(t[n],e))))(t,s);case"object":return x(t,e);default:return!1}}function U(t){if(t){if(K.has(t)){return K.get(t)}let e=null;switch(typeof t){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return K.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}function F(t,e){T.push({value:JSON.stringify(t),tests:JSON.stringify(e),found:u(t)})}const C=(t,e,n)=>new class{constructor(){this.unitTest=A(e),this.testResult=E(t,this.unitTest),this.bool=this.testResult,this.settings=U(n),this.callback=this.settings.callback??null,this.testData={typeExp:e,inputVal:t,inputType:u(t),callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}test(){return this.testResult}log(){return console.log("-------------------------- \n ::: Test Data Info :::"),console.table(this.testData),this}fail(){return this.testResult?this:(this.log(),this.settings?.error&&console.log("\n\n-----\x3e Error Message: ",this.settings.error),function(t){const e=T[T.length-1];throw console.log("\n::::::::::::: Type error or not valid ::::::::::::::"),console.log("Input Value used: ",t),console.log("---\x3e Value Found:",e.found),console.log("---\x3e Test Permormed:",e.tests),T.length=0,new Error(`\n\n---------------------\nTypeCheck Error ---\x3e\n\n The value must not be of type (Type found) = "${e.found}". \n\n The Type used is invalid for value: "${e.value}". \n\n see logged error for details\n---------------------\n\n`)}(t))}return(){return t}},R=function(t,e){return C(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:null).fail()};window.typeCheck=e.typeCheck})();
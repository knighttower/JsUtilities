(()=>{"use strict";var t={d:(e,n)=>{for(var r in n){t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){if(t){if("string"==typeof t){return r(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){var e=f(t);return null!==e?e:t}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==f(t)||"boolean"==typeof t?t:s(t)?e:t}t.r(e),t.d(e,{Teleport:()=>At,TeleportGlobal:()=>Et,default:()=>At,teleport:()=>At});var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;t=t||40;for(var e="",n=0;n<t/3+1;n++){e+=Math.random().toString(36).substring(2,15)}return e.substring(0,t)};function l(){return"id__"+u(8)+"__"+(new Date).getTime()}var c=l;function s(t){return null==t||("string"==typeof t||Array.isArray(t)?0===t.length:t instanceof Map||t instanceof Set?0===t.size:ArrayBuffer.isView(t)?0===t.byteLength:"object"===o(t)&&0===Object.keys(t).length)}function f(t){var e=o(t);switch(t){case null:case void 0:case"":return null;case"0":case 0:return 0;default:if(!("number"!==e&&"string"!==e||"number"!=typeof t&&Number.isNaN(Number(t)))){return+t}}return null}function y(t,e){if(null===t){return e?null===e||"null"===e:"null"}var r;switch(o(t)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":r=o(t);break;case"object":r=Array.isArray(t)?"array":"object";break;default:r="unknown"}if(e){if(e.includes("|")){var i,a=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=n(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){l=!0,a=t},f:function(){try{u||null==r.return||r.return()}finally{if(l){throw a}}}}}(e.split("|"));try{for(a.s();!(i=a.n()).done;){var u=i.value;if(r===u){return u}}}catch(t){a.e(t)}finally{a.f()}return!1}return e===r}return r}function p(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}l=!1}else{for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0){}}}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(c){throw o}}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t){return b(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function v(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=m(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=m(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==m(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t){var e=t.match(/^(\{.*\}|\[.*\])$/);return e?e[0].slice(1,-1).trim():t}function d(t){if(t){if("string"!=typeof t){return t}for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++){n[r-1]=arguments[r]}return n.reduce((function(t,e){var n=e instanceof RegExp?e:new RegExp(E(e));return t.replace(n,"")}),t).trim()}}function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"]";if("string"!=typeof t){return t}var r=t.lastIndexOf(e);if(-1===r){return null}var o=t.substring(r),i=o.indexOf(n);return-1===i?null:o.substring(0,i+1)}function w(t){if(y(t,"object")||y(t,"array")||!t){return t}var e=function(t){return k(t,"{","}")},n=function(t){return k(t,"[","]")},r=(e(t)?"object":null)||(n(t)?"array":null);if(!r){return t}var o={},u=function(t){if(t){var r=function(t){var e=g(t,"{","}"),n=g(t,"[","]");return t.indexOf(e)>t.indexOf(n)?e||null:n||null}(h(t));if(r){return t=function(t,r){var i="__".concat(c(),"__"),a=(e(r)?"object":null)||(n(r)?"array":null)||"string";return t=t.replace(r,i),o[i]={type:a,matched:r},t}(t,r),u(t)||t}}},l=function(t,e){t=h(t);var n="object"===e?{}:[];return O(t).forEach((function(t,r){var u=t.includes(":")&&"object"===e,c=u?O(t,":"):[],s=A(a(c[0],r));if((t=u?c[1]:t)in o){var f=o[t];t=l(f.matched,f.type)}t=i(A(t)),"object"===e?n[s]=t:n.push(t)})),n};return l(u(t)||t,r)}function j(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof t){return t}e=E(e),n=E(n);var o=new RegExp(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++){e[n]=arguments[n]}if(e.length<2){throw new Error("You need to pass at least two arguments")}var r="";return e.forEach((function(t,e){t instanceof RegExp&&(t=t.source),0===e?r=t:r+="((.|\n)*?)".concat(t)})),r}(e,n),"gm"),i=t.match(o);return i?r?i:i[0]:null}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";if("string"!=typeof t){return t}if(s(t)){return[]}var n=(t=d(t)).split(e).map((function(t){return d(t)}));return 1===n.length&&""===n[0]?[t]:n}function S(t,e,n){var r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof t){return t}var i=null!==(r=j(t,e,n,o))&&void 0!==r?r:o?[]:t;return o?i.map((function(t){return d(t,e,n)})):d(i,e,n)}function A(t){return"string"!=typeof t?t:t.replace(/`|'|"/g,"")}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(!e||t.startsWith(e))&&(!n||t.endsWith(n))}function E(t){return t instanceof RegExp?t:t.split("").map((function(t){return["$","^",".","*","+","?","(",")","[","]","{","}","|","\\"].includes(t)?"\\".concat(t):t})).join("")}function T(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t){return I(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u){throw i}}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}var P,M={},D=function(){if("undefined"!=typeof window&&!P){var t={childList:!0,subtree:!0};if(P=new MutationObserver((function(t){var e,n=T(t);try{for(n.s();!(e=n.n()).done;){if("childList"===e.value.type){for(var r in M){M[r]()}}}}catch(t){n.e(t)}finally{n.f()}})),document.body){return P.observe(document.body,t)}document.addEventListener("DOMContentLoaded",(function(e){return P.observe(document.body,t)}))}},N=function(t,e){e&&(M[t]=e)},x=function(t){t&&delete M[t]};function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,U(r.key),r)}}function U(t){var e=function(t,e){if("object"!=C(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=C(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==C(e)?e:e+""}var R=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;!function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),D(),this.selector=e,"object"===C(e)?this.domElement=e:String(e).includes("//")?this.domElement=this.getElementByXpath(e):this.domElement=n.querySelector(e)}return e=t,(n=[{key:"isInDom",value:function(){var t;return Boolean(null===(t=this.domElement)||void 0===t?void 0:t.outerHTML)}},{key:"whenInDom",value:function(){var e=this,n=Date.now()+Math.floor(1e3*Math.random());return new Promise((function(r){e.isInDom()?r(e):N(n,(function(){var o=new t(e.selector);o.isInDom()&&(r(e=o),x(n))}))}))}},{key:"getElementByXpath",value:function(t){return document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}},{key:"getXpathTo",value:function(){var e=this.domElement;if(e.id){return"//*[@id='".concat(e.id,"']")}if(e===document.body){return"//"+e.tagName}for(var n=0,r=e.parentNode.childNodes,o=0;o<r.length;o++){var i=r[o];if(i===e){return new t(e.parentNode).getXpathTo()+"/"+e.tagName+"["+(n+1)+"]"}1===i.nodeType&&i.tagName===e.tagName&&n++}}},{key:"getAttribute",value:function(t){return this.domElement.getAttribute(t)||null}},{key:"getHash",value:function(){var t=String(this.getXpathTo()),e=0;if(0===t.length){return e}for(var n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e|=0}return e}}])&&K(e.prototype,n),r&&K(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,r}(),F=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return new R(t,e)};function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}var $=new Map([["array",function(t){return y(t,"array")}],["bigInt",function(t){return"bigint"==typeof t}],["boolean",function(t){return"boolean"==typeof t}],["date",function(t){return t instanceof Date}],["float",function(t){return"number"==typeof t&&!Number.isInteger(t)}],["function",function(t){return"function"==typeof t}],["int",function(t){return Number.isInteger(t)}],["map",function(t){return t instanceof Map}],["null",function(t){return null===t}],["number",function(t){return"number"==typeof t}],["object",function(t){return y(t,"object")}],["promise",function(t){return t instanceof Promise}],["regExp",function(t){return t instanceof RegExp}],["set",function(t){return t instanceof Set}],["string",function(t){return"string"==typeof t}],["symbol",function(t){return"symbol"===_(t)}],["undefined",function(t){return void 0===t}],["weakMap",function(t){return t instanceof WeakMap}],["weakSet",function(t){return t instanceof WeakSet}]]);function W(t){return W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(t)}function X(t){return function(t){if(Array.isArray(t)){return L(t)}}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"]){return Array.from(t)}}(t)||function(t,e){if(t){if("string"==typeof t){return L(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,z(r.key),r)}}function z(t){var e=function(t,e){if("object"!=W(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=W(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==W(e)?e:e+""}var B=new Map,H=new Map;function J(t){throw new Error('Type Error: "'.concat(t,'" is not supported'))}function Z(t){if(y(t,"array")||y(t,"object")){return y(t)}var e=t.trim();return k(e,"[","]")?"array":k(e,"{","}")?"object":"basic"}var q=function(t){return e=t,H.has(e)?H.get(e):e.split("|").reduce((function(t,n){var r=!1,o=n.trim();o.endsWith("?")&&(o=o.slice(0,-1),r=!0);var i=$.get(o),a=null!=i?i:J(o);return a&&t.push(a),r&&t.push($.get("null"),$.get("undefined")),H.set(e,t),t}),[]);var e},Y=function(t){return new(function(){return e=function t(){return function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),this.testUnit=new Map([["tests",new Map],["optionalKeys",[]],["testFew",[]],["testAllAny",!1],["testOnly",!1]]),this.handleObject()},(n=[{key:"checkOptionalKey",value:function(t){return t.endsWith("?")&&(t=t.slice(0,-1),this.testUnit.get("optionalKeys").push(t)),t}},{key:"checkTheAnyKey",value:function(t){if("any"in t){var e=Object.keys(t);1===e.length?this.testUnit.set("testAllAny",!0):this.testUnit.set("testFew",e.filter((function(t){return"any"!==t})))}}},{key:"handleObject",value:function(){var e=w(t);for(var n in this.checkTheAnyKey(e),e){var r=this.checkOptionalKey(n),o=e[n];"..."!==o?this.testUnit.get("tests").set(r,G(o)):(delete e[n],this.testUnit.set("testOnly",!0))}return this.testUnit}}])&&V(e.prototype,n),r&&V(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,r}())};function G(t){if(B.has(t)){return B.get(t)}var e=new Map([["testMethod",Z(t)],["tests",null]]);switch(e.get("testMethod")){case"basic":e.set("tests",q(t));break;case"array":e.set("tests",function(t){var e=[];return w(t).forEach((function(t){e.push(G(t))})),e}(t));break;case"object":var n=Y(t);e=new Map([].concat(X(e),X(n)));break;default:J(t)}return B.set(t,e),e}function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){nt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function nt(t,e,n){return(e=st(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rt(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}l=!1}else{for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0){}}}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(c){throw o}}}return u}}(t,e)||it(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ot(t){return function(t){if(Array.isArray(t)){return at(t)}}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"]){return Array.from(t)}}(t)||it(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(t,e){if(t){if("string"==typeof t){return at(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?at(t,e):void 0}}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function ut(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,st(r.key),r)}}function ct(t,e,n){return e&&lt(t.prototype,e),n&&lt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t){var e=function(t,e){if("object"!=Q(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=Q(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==Q(e)?e:e+""}var ft=[],yt=new Map,pt=function(){return ct((function t(e,n){ut(this,t);var r=ot(n.entries()).reduce((function(t,e){var n=rt(e,2),r=n[0],o=n[1];return et(et({},t),{},nt({},r,o))}),{}),o=r.testOnly,i=r.testFew,a=r.testAllAny,u=r.optionalKeys,l=r.tests;this.testUnitKeys=ot(l.keys()),this.testOnly=o,this.testFew=i,this.testAllAny=a,this.optionalKeys=u,this.testCollection=l,this.inputObject=e}),[{key:"handleUnitTest",value:function(){switch(!0){case this.testAllAny:return this.testObjAllAny();case!s(this.testFew):var t=this.testObjFew();return this.filterOutFew(),t&&this.testObjAllAny();case!s(this.optionalKeys):var e=this.testObjOptionalKeys();return this.filterOutOptionalKeys(),e&&this.defaultTest();case!this.testOnly:for(var n in this.inputObject){if(!this.testCollection.has(n)){return ht(this.inputObject,'Key: "'.concat(n,'" not found in the test collection, or use the "any" (any:[type]) key test or "..." after the last key in the test collection {key1: type, key2: type, ...} to only test a few keys.')),!1}}}return this.defaultTest()}},{key:"filterOutOptionalKeys",value:function(){var t=this;this.testUnitKeys=this.testUnitKeys.filter((function(e){return!t.optionalKeys.includes(e)}))}},{key:"filterOutFew",value:function(){var t=this;this.inputObject=Object.fromEntries(Object.entries(this.inputObject).filter((function(e){var n=rt(e,1)[0];return!t.testFew.includes(n)})))}},{key:"testObjOptionalKeys",value:function(){var t=this;return this.optionalKeys.every((function(e){var n=t.testCollection.get(e),r=t.inputObject[e];return!r||vt(r,n)}))}},{key:"testObjFew",value:function(){var t=this;return this.testFew.every((function(e){var n=t.testCollection.get(e);return vt(t.inputObject[e],n)}))}},{key:"testObjAllAny",value:function(){var t=this,e=Object.values(this.inputObject);return 0===e.length?vt(null,this.testCollection.get("any")):e.every((function(e){return vt(e,t.testCollection.get("any"))}))}},{key:"defaultTest",value:function(){var t=this;return this.testUnitKeys.every((function(e){var n=t.testCollection.get(e);return vt(t.inputObject[e],n)}))}}])}(),bt=function(t,e){return!!y(t,"object")&&new pt(t,e).handleUnitTest()};function vt(t,e){var n=e.get("testMethod"),r=e.get("tests");switch(n){case"basic":return function(t,e){return e.some((function(n){var r=n(t);return r||ht(t,e),r}))}(t,r);case"array":return function(t,e){return!(!y(t,"array")||0===t.length)&&e.every((function(e,n){return vt(t[n],e)}))}(t,r);case"object":return bt(t,e);default:return!1}}function mt(t){if(t){if(yt.has(t)){return yt.get(t)}var e=null;switch(Q(t)){case"function":e={callback:t};break;case"object":e=t;break;case"string":switch(t){case"log":e={log:!0};break;case"fail":e={fail:!0};break;case"return":e={return:!0};break;case"validOutput":e={validOutput:t}}}return yt.set(t,e),e}return{log:!1,fail:!1,return:!1,validOutput:!1,callback:null}}function ht(t,e){ft.push({value:JSON.stringify(t),tests:JSON.stringify(e),found:y(t)})}var dt=function(t,e,n){return new(function(){return ct((function r(){var o;ut(this,r),this.unitTest=G(e),this.testResult=vt(t,this.unitTest),this.bool=this.testResult,this.settings=mt(n),this.callback=null!==(o=this.settings.callback)&&void 0!==o?o:null,this.testData={typeExp:e,inputVal:t,inputType:y(t),callback:this.callback,unitTest:this.unitTest,testResult:this.testResult},this.settings.log&&this.log(),this.settings.fail&&this.fail(),this.callback&&this.callback(this.testData)}),[{key:"test",value:function(){return this.testResult}},{key:"log",value:function(){return console.log("-------------------------- \n ::: Test Data Info :::"),console.table(this.testData),this}},{key:"fail",value:function(){var e;return this.testResult?this:(this.log(),(null===(e=this.settings)||void 0===e?void 0:e.error)&&console.log("\n\n-----\x3e Error Message: ",this.settings.error),function(t){var e=ft[ft.length-1];throw console.log("\n::::::::::::: Type error or not valid ::::::::::::::"),console.log("Input Value used: ",t),console.log("---\x3e Value Found:",e.found),console.log("---\x3e Test Permormed:",e.tests),ft.length=0,new Error('\n\n---------------------\nTypeCheck Error ---\x3e\n\n The value must not be of type (Type found) = "'.concat(e.found,'". \n\n The Type used is invalid for value: "').concat(e.value,'". \n\n see logged error for details\n---------------------\n\n'))}(t))}},{key:"return",value:function(){return t}}])}())};function gt(t){return gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(t)}function wt(t,e){return function(t){if(Array.isArray(t)){return t}}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n){return}l=!1}else{for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);l=!0){}}}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a)){return}}finally{if(c){throw o}}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t){return jt(t,e)}var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?jt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++){r[n]=t[n]}return r}function Ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,St(r.key),r)}}function St(t){var e=function(t,e){if("object"!=gt(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=gt(r)){return r}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==gt(e)?e:e+""}var At=function(){return t=function t(e){if(function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),D(),dt(e,"string|object").test()){if(this.props=e,!this.props.adaptiveId){var n,r=F(this.props),o=null!==(n=r.getAttribute("data-adaptive-id"))&&void 0!==n?n:null,i=o||r.getHash();o||r.domElement.setAttribute("data-adaptive-id",i),this.props=Object.assign({},this.props,{adaptiveId:i,helper:r,domElement:r.domElement,xpath:r.getXpathTo()})}var a=F('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));a.isInDom()||((a=document.createElement("param")).name="adaptive",a.value=this.props.adaptiveId,this.props.domElement.insertAdjacentElement("beforebegin",a))}},e=[{key:"beam",value:function(t){var e=this;if(t=function(t){var e=t;if(!a(e)){return null}var n=function(){return{type:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,directive:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null}},r=/([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm,o=m(e);if("object"===o||"array"===o){return n(o,e)}switch(!0){case!!e.match(/^\[((.|\n)*?)\]$/gm):o="array";break;case!!e.match(/^\{((.|\n)*?)\:((.|\n)*?)\}$/gm):o="object";break;case!!e.match(/^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g):return n("idOrClassWithDirective",v({},e.split("(")[0].trim(),S(e,"(",")")));case!!e.match(/([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm):case!!e.match(r):o="dotObject";break;default:return n("string",e)}if("array"===o||"object"===o){var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'"';return"string"!=typeof t?t:t.replace(/`|'|"/g,e)}(e);try{return n(o,JSON.parse(i))}catch(t){}return n(o,w(i))}if("dotObject"===o){var u,l,c,s={};return O(e,"&&").forEach((function(t){if(t.match(r)){u=S(t,"](",")"),l=S(t,"[","]"),c=t.split("[")[0].trim()}else{u=S(t,"(",")");var e=p(O(t=t.replace(j(t,"(",")"),""),"."),2);c=e[0],l=e[1]}u=w(u),s[c]||(s[c]={}),O(l,"|").forEach((function(t){s[c][t]=u}))})),n("dotObject",s)}}(t).directive,y(t,"object")&&t.teleport){return this.props.domElement.removeAttribute("data-adaptive-id"),void $adaptive.registerElement(this.props.domElement,t)}switch(y(t)){case"string":t=["default",t];break;case"object":var n=Object.keys(t)[0];t=[n,t[n]];break;case"array":1===t.length&&(t=["default",t[0]])}var r=wt(t,2),o=r[0],i=r[1],u=F(i),l="beforeend";switch(o){case"before":l="beforebegin";break;case"after":l="afterend"}u.isInDom()?u.domElement.insertAdjacentElement(l,this.props.domElement):N(this.props.adaptiveId,(function(){var t=F(i);t.isInDom()&&(t.domElement.insertAdjacentElement(l,e.props.domElement),x(e.props.adaptiveId))}))}},{key:"back",value:function(){var t=F('[name="adaptive"][value="'.concat(this.props.adaptiveId,'"'));t.isInDom()&&t.domElement.insertAdjacentElement("afterend",this.props.domElement)}},{key:"cancel",value:function(){x(this.props.adaptiveId)}}],e&&Ot(t.prototype,e),n&&Ot(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,n}(),kt=!1;function Et(){kt||(document.querySelectorAll("[data-teleport]").forEach((function(t){new At(t).beam(t.getAttribute("data-teleport"))})),kt=!0)}window.Teleport=e})();
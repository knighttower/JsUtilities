(()=>{"use strict";var t={d:(e,r)=>{for(var n in r){t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t){return function(t){if(Array.isArray(t)){return o(t)}}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"]){return Array.from(t)}}(t)||function(t,e){if(!t){return}if("string"==typeof t){return o(t,e)}var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r){return Array.from(t)}if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)){return o(t,e)}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++){n[r]=t[r]}return n}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var e=function(t,e){if("object"!=r(t)||!t){return t}var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o)){return o}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}t.r(e),t.d(e,{doAsync:()=>I,doPoll:()=>E,doTimeout:()=>A,promisePool:()=>L,promiseQueue:()=>x});var a=function(){return t=function t(){!function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}(this,t),this.listeners={}},e=[{key:"on",value:function(t,e){this.registerListener(t,e)}},{key:"once",value:function(t,e){this.registerListener(t,e,1)}},{key:"exactly",value:function(t,e,r){this.registerListener(t,e,r)}},{key:"off",value:function(t){delete this.listeners[t]}},{key:"detach",value:function(t,e){var r=(this.listeners[t]||[]).filter((function(t){return t.callback!==e}));return t in this.listeners&&(this.listeners[t]=r,!0)}},{key:"emit",value:function(t){for(var e=this,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++){o[i-1]=arguments[i]}var u=[],a=null,c=this.extractContextFromArgs(o),s=c[0];if(o=c[1],this.hasListener(t)){u=this.listeners[t]}else if(t.includes("*")){(a=this.patternSearch(t,Object.keys(this.listeners))).length>0&&a.forEach((function(t){u=u.concat(e.listeners[t])}))}else{for(var l in this.listeners){l.includes("*")&&(a=this.patternSearch(l,[t]))&&(u=u.concat(this.listeners[l]))}}u.forEach((function(r,i){var a=r.callback;s&&(a=a.bind(s)),void 0!==r.triggerCapacity&&(r.triggerCapacity--,u[i].triggerCapacity=r.triggerCapacity),e.checkToRemoveListener(r)&&e.listeners[t].splice(i,1),a.apply(void 0,n(o))}))}},{key:"patternSearch",value:function(t,e){var r,n=new RegExp(this.setWildCardString(t),"g");return 0===(r=e.filter((function(t){return n.test(t)}))).length?null:r}},{key:"setWildCardString",value:function(t){var e=t.replace(/([.+?^${}()|\[\]\/\\])/g,"\\$&");return e=e.replace(/\*/g,"(.*?)"),"^".concat(e)}},{key:"extractContextFromArgs",value:function(t){for(var e=null,n=0;n<t.length;n++){var o=t[n];if(o&&"object"===r(o)&&o.hasOwnProperty("__context")){e=o.__context,t.splice(n,1);break}}return[e,t]}},{key:"registerListener",value:function(t,e,r){this.hasListener(t)||(this.listeners[t]=[]),this.listeners[t].push({callback:e,triggerCapacity:r})}},{key:"checkToRemoveListener",value:function(t){return void 0!==t.triggerCapacity&&t.triggerCapacity<=0}},{key:"hasListener",value:function(t){return t in this.listeners}}],e&&i(t.prototype,e),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,o}();function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t){return}if("string"==typeof t){return s(t,e)}var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r){return Array.from(t)}if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)){return s(t,e)}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(a){throw i}}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++){n[r]=t[r]}return n}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}var f=function(t){return Array.isArray(t)?t:[t]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;t=t||40;for(var e="",r=0;r<t/3+1;r++){e+=Math.random().toString(36).substring(2,15)}return e.substring(0,t)};function p(){return"id__"+h(8)+"__"+(new Date).getTime()}function y(t,e){if(null===t){return e?null===e||"null"===e:"null"}var r;switch(l(t)){case"number":case"string":case"boolean":case"undefined":case"bigint":case"symbol":case"function":r=l(t);break;case"object":r=Array.isArray(t)?"array":"object";break;default:r="unknown"}if(e){if(e.includes("|")){var n,o=c(e.split("|"));try{for(o.s();!(n=o.n()).done;){var i=n.value;if(r===i){return i}}}catch(t){o.e(t)}finally{o.f()}return!1}return e===r}return r}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,u=Object.create(i.prototype),a=new I(n||[]);return o(u,"_invoke",{value:E(t,r,a)}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",m="completed",g={};function b(){}function w(){}function _(){}var j={};s(j,u,(function(){return this}));var S=Object.getPrototypeOf,P=S&&S(S(C([])));P&&P!==r&&n.call(P,u)&&(j=P);var k=_.prototype=b.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,u,a){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==v(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=h;return function(i,u){if(o===y){throw Error("Generator is already running")}if(o===m){if("throw"===i){throw u}return{value:t,done:!0}}for(n.method=i,n.arg=u;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===g){continue}return c}}if("next"===n.method){n.sent=n._sent=n.arg}else if("throw"===n.method){if(o===h){throw o=m,n.arg}n.dispatchException(n.arg)}else{"return"===n.method&&n.abrupt("return",n.arg)}o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?m:p,s.arg===g){continue}return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t){return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g}var i=f(o,e.iterator,r.arg);if("throw"===i.type){return r.method="throw",r.arg=i.arg,r.delegate=null,g}var u=i.arg;return u?u.done?(r[e.resultName]=u.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):u:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[u];if(r){return r.call(e)}if("function"==typeof e.next){return e}if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;){if(n.call(e,o)){return r.value=e[o],r.done=!1,r}}return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return w.prototype=_,o(k,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:w,configurable:!0}),w.displayName=s(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},O(x.prototype),s(x.prototype,a,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var u=new x(l(t,r,n,o),i);return e.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},O(k),s(k,c,"Generator"),s(k,u,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e){r.push(n)}return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e){return t.value=n,t.done=!1,t}}return t.done=!0,t}},e.values=C,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e){for(var r in this){"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)}}},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type){throw t.arg}return this.rval},dispatchException:function(e){if(this.done){throw e}var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc){return o("end")}if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),s=n.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc){return o(u.catchLoc,!0)}if(this.prev<u.finallyLoc){return o(u.finallyLoc)}}else if(c){if(this.prev<u.catchLoc){return o(u.catchLoc,!0)}}else{if(!s){throw Error("try statement without catch or finally")}if(this.prev<u.finallyLoc){return o(u.finallyLoc)}}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(u)},complete:function(t,e){if("throw"===t.type){throw t.arg}return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t){return this.complete(r.completion,r.afterLoc),A(r),g}}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function m(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function g(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_(n.key),n)}}function w(t,e,r){return e&&b(t.prototype,e),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t){var e=function(t,e){if("object"!=v(t)||!t){return t}var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=v(n)){return n}throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==v(e)?e:e+""}function j(t,e,r){return e=P(e),function(t,e){if(e&&("object"===v(e)||"function"==typeof e)){return e}if(void 0!==e){throw new TypeError("Derived constructors may only return object or undefined")}return function(t){if(void 0===t){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t}(t)}(t,S()?Reflect.construct(e,r||[],P(t).constructor):e.apply(t,r))}function S(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(S=function(){return!!t})()}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function k(t,e){if("function"!=typeof e&&null!==e){throw new TypeError("Super expression must either be null or a function")}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}var x=function(){return new(function(t){function e(){var t;return g(this,e),(t=j(this,e)).queue=[],t.inProgress=!1,t._timer=null,t._stats={completed:0,rejected:0,pending:0,total:0},t}return k(e,t),w(e,[{key:"add",value:function(t){var e=this;if(!(t instanceof Promise||!!Array.isArray(t)&&t.length>0&&t.every((function(t){return t instanceof Promise})))){if(!y(t,"function")){return console.error("---\x3e Invalid promise added to the Queue:",t.toString()),this.emit("fail",t.toString())}t=new Promise(function(){var e,r=(e=d().mark((function e(r){var n;return d().wrap((function(e){for(;;){switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.abrupt("return",r(n));case 4:case"end":return e.stop()}}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(t){m(i,n,o,u,a,"next",t)}function a(t){m(i,n,o,u,a,"throw",t)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}())}f(t).forEach((function(t){e._stats.total++,e._stats.pending++,e.queue.push({promiseFunction:t,status:"pending"})})),this.inProgress||this._next(),this._setTimer()}},{key:"clear",value:function(){this.queue=[]}},{key:"_setTimer",value:function(){var t=this;this._timer&&clearInterval(this._timer),this._timer=setInterval((function(){"done"===t.status()&&(t.emit("completed"),t.emit("done"),clearInterval(t._timer),t._timer=null)}),10)}},{key:"_next",value:function(){var t=this;0!==this.queue.length?(this.inProgress=!0,this.queue[0].promiseFunction.then((function(){t.queue[0].status="fulfilled",t._stats.completed++})).catch((function(){t.queue[0].status="rejected",t._stats.rejected++})).finally((function(){t._stats.pending--,t.queue.shift(),t._next()}))):this.inProgress=!1}},{key:"stats",value:function(){return this._stats}},{key:"status",value:function(){return 0===this.queue.length?"done":"in-progress"}}])}(a))},E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"!=typeof t&&"object"!==v(t)){throw new Error("doPoll: The first argument must be a function or Promise.")}var r,n,o,i,u=function(t){return t instanceof Promise},a=e.interval,c=void 0===a?200:a,s=e.timeout,l=void 0===s?1e3:s,f=e.timeoutMsg,h=void 0===f?"===> doPoll: cancelled or timed out.":f,p=!1,y=!1,d=function(){g(),i(console.info(h))},m=function(t){g(),o(t)};function g(){p=!0,clearTimeout(r),clearInterval(n)}var b=new Promise((function(e,a){o=e,i=a;var s=function(){if(!p&&!y){var e=u(t)?t:t();u(e)?(y=!0,e.then((function(t){y=!1,t&&m(t)})).catch(i)):(Boolean(e)||e)&&m(e)}};n=setInterval(s,c),s(),r=setTimeout((function(){p||d()}),l)}));return b.catch((function(){d()})),{promise:b,stop:d}},L=function(){var t="not-started",e={},r=[],n={completed:0,rejected:0,pending:0,total:0,errors:""};return new(function(o){function i(){var t;g(this,i);var e=t=j(this,i);return t._currentPoll=null,setTimeout((function(){e._poll()}),100),t}return k(i,o),w(i,[{key:"_poll",value:function(){var t=this;return this._currentPoll&&this._currentPoll.stop(),this._currentPoll=E((function(){if(t.isDone()){return!0}}),{timeoutMsg:""}),this._currentPoll}},{key:"clear",value:function(){t="not-started",n={completed:0,rejected:0,pending:0,total:0,errors:""},r.length=0,Object.keys(e).forEach((function(t){e[t].rejecter("Promise pool cleared."),delete e[t]})),this._currentPoll=this._poll()}},{key:"add",value:function(o){var i=this;o?(t="in-progress",f(o).forEach((function(t){if(!(t instanceof Promise)){if("function"!=typeof t){return console.info("---\x3e Invalid promise added to the pool."),void r.push(t.toString())}t=I((function(){return t()}))}n.total++;var o=p();e[o]={status:"in-progress",response:null,error:null,resolver:null,rejecter:null},new Promise((function(n,u){e[o].resolver=function(t){"rejected"!==e[o].status&&(e[o].status="completed",e[o].response=t,i._updateStatus(),n(t))},e[o].rejecter=function(t){e[o].status="rejected",e[o].error=t,r.push(t),i._updateStatus(),u()},t.then((function(t){var r;null===(r=e[o])||void 0===r||r.resolver(t)})).catch((function(t){var r;null===(r=e[o])||void 0===r||r.rejecter(t)}))})).catch((function(t){var r;null===(r=e[o])||void 0===r||r.rejecter(t)}))}))):i._updateStatus()}},{key:"status",value:function(){return this._updateStatus(),t}},{key:"isDone",value:function(){return this._updateStatus(),"done"===t}},{key:"isEmpty",value:function(){return 0===n.total}},{key:"results",value:function(){return this._updateStatus(),n}},{key:"stats",value:function(){return this.results()}},{key:"_updateStatus",value:function(){if("done"!==t){var o=Object.values(e);n={completed:o.filter((function(t){return"completed"===t.status})).length,rejected:o.filter((function(t){return"rejected"===t.status})).length,pending:o.filter((function(t){return"in-progress"===t.status})).length,total:o.length,errors:r.join("\n"),promises:e},this.emit("stats",n);var i=o.every((function(t){return"completed"===t.status||"rejected"===t.status}));"done"===(t=i||0===n.total?"done":"in-progress")&&(this.emit("done",n),n.total>0&&(this.emit("completed",n),this.emit("rejected",r,n)))}}}])}(a))},T={};function A(t,e,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++){o[i-3]=arguments[i]}var u,a;if("string"==typeof t&&"number"==typeof e){u=t,a=e}else{if("number"!=typeof t||"function"!=typeof e){throw new Error("Invalid parameters")}a=t,r=e}var c=u?"_doTimeout_"+u:null;function s(){c&&c in T&&delete T[c]}if(c&&c in T&&(clearTimeout(T[c]),delete T[c]),"function"==typeof r&&"number"==typeof a){return function t(){T[c]=setTimeout((function(){!0===r.apply(void 0,o)?t():s()}),a)}(),!0}u&&void 0===a&&s()}function I(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++){r[n-1]=arguments[n]}return new Promise((function(e,n){try{Promise.resolve(t.apply(void 0,r)).then((function(t){return e(t)})).catch((function(t){return n(t)}))}catch(t){n(t)}}))}window.promises=e})();
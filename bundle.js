(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n}\n\n.header {\n  height: 10vh;\n  display: flex;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  display: flex;\n  height: 10vh;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main {\n  display: grid;\n  height: 80vh;\n  grid-template-columns: 1fr 4fr;\n  /* border: 5px solid red; */\n  /* background-color: red; */\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: lightblue;\n  /* border: 1px solid black; */\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainDisplay {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  /* border: 5px solid red; */\n}\n\nbutton {\n  width: 150px;\n  padding: 0.75rem;\n  font-weight: 900;\n  font-size: 14px;\n  border-radius: 0.75rem;\n  margin: 0.25rem;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  background-color: silver;\n}\n\n.tasksContainer {\n  display: grid;\n  background-color: blue;\n  border: 5px solid yellow;\n}\n\n.taskElement {\n  width: max(80%, 500px);\n  display: flex;\n  flex-direction: column;\n  border: 3px solid black;\n  border-radius: 0.75rem;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\ninput {\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.taskForm {\n  display: flex;\n  flex-direction: column;\n  width: max(40%, 200px);\n  align-self: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.addNewTask {\n  align-self: center;\n}\n\n.projectName {\n  background-color: black;\n  color: white;\n  word-wrap: wrap;\n  /* width: min(80%, 125px) */\n}\n\n.projectsContainer {\n  display: flex;\nflex-direction: column;\nbackground-color: yellow;\n}\n\n.projectDelete {\n  width: 100px;\n}\n\n.projectTasksContainer {\n  /* border: 3px solid red; */\n}\n\n.taskForm {\n  border: 2px solid black;\n  padding: 1rem;\n}\n\n.taskElement > input {\n  background-color: lightblue;\n  border: none;\n}\n\n.taskElement > input:hover {\n  background-color: rgba(138, 29, 138, 0.5);\n}",""]);const d=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(o[u]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],d=0;d<e.length;d++){var u=e[d],s=r.base?u[0]+r.base:u[0],c=i[s]||0,l="".concat(s," ").concat(c);i[s]=c+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=d,t.splice(d,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=n(i[o]);t[d].references--}for(var u=r(e,a),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"04be58c17b3d5e974442.svg";let t=[],r=[],a=null,i=null,o=null;class d{constructor(e){this.id=s(),this.name=e,this.taskList=[],t.push(this)}removeProject(e){a=this.id;const t=e.findIndex((e=>e.id===a));-1!==t&&e.splice(t,1)}addTask(e){this.taskList.push(e)}static findProjectById(e){return t.find((t=>t.id===e))}}class u{constructor(e,t,n,a){this.id=s(),this.title=e,this.description=t,this.priority=n,this.dueDate=a,r.push(this)}removeTask(e){i=this.id;const t=e.findIndex((e=>e.id===i));-1!==t&&e.splice(t,1)}}function s(){return Date.now().toString()}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function m(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===c(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function h(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function f(e){l(1,arguments);var t=m(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function p(e){l(1,arguments);var t=m(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=f(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=f(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}var g={};function v(){return g}function b(e,t){var n,r,a,i,o,d,u,s;l(1,arguments);var c=v(),f=h(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.weekStartsOn)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=m(e),g=p.getUTCDay(),b=(g<f?7:0)+g-f;return p.setUTCDate(p.getUTCDate()-b),p.setUTCHours(0,0,0,0),p}function y(e,t){var n,r,a,i,o,d,u,s;l(1,arguments);var c=m(e),f=c.getUTCFullYear(),p=v(),g=h(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:p.firstWeekContainsDate)&&void 0!==r?r:null===(u=p.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(f+1,0,g),y.setUTCHours(0,0,0,0);var w=b(y,t),T=new Date(0);T.setUTCFullYear(f,0,g),T.setUTCHours(0,0,0,0);var k=b(T,t);return c.getTime()>=w.getTime()?f+1:c.getTime()>=k.getTime()?f:f-1}function w(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const T=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===t?r%100:r,t.length)},k=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},C=function(e,t){return w(e.getUTCDate(),t.length)},M=function(e,t){return w(e.getUTCHours()%12||12,t.length)},E=function(e,t){return w(e.getUTCHours(),t.length)},x=function(e,t){return w(e.getUTCMinutes(),t.length)},D=function(e,t){return w(e.getUTCSeconds(),t.length)},L=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),t.length)};var S={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(e,t)},Y:function(e,t,n,r){var a=y(e,r),i=a>0?a:1-a;return"YY"===t?w(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):w(i,t.length)},R:function(e,t){return w(p(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return k(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){l(1,arguments);var n=m(e),r=b(n,t).getTime()-function(e,t){var n,r,a,i,o,d,u,s;l(1,arguments);var c=v(),m=h(null!==(n=null!==(r=null!==(a=null!==(i=null==t?void 0:t.firstWeekContainsDate)&&void 0!==i?i:null==t||null===(o=t.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=y(e,t),p=new Date(0);return p.setUTCFullYear(f,0,m),p.setUTCHours(0,0,0,0),b(p,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):w(a,t.length)},I:function(e,t,n){var r=function(e){l(1,arguments);var t=m(e),n=f(t).getTime()-function(e){l(1,arguments);var t=p(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),f(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):w(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):C(e,t)},D:function(e,t,n){var r=function(e){l(1,arguments);var t=m(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return w(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return w(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return M(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):E(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):x(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):D(e,t)},S:function(e,t){return L(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return U(a);case"XXXX":case"XX":return j(a);default:return j(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return U(a);case"xxxx":case"xx":return j(a);default:return j(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+j(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+j(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return w(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return w((r._originalDate||e).getTime(),t.length)}};function P(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+w(i,2)}function U(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):j(e,t)}function j(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}const H=S;var W=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},N=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const q={p:N,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return W(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",W(a,t)).replace("{{time}}",N(i,t))}};var O=["D","DD"],Y=["YY","YYYY"];function F(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function A(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const z={date:A({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:A({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:A({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var B={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Q(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const G={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function R(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,d=i[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(u);return o=e.valueCallback?e.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(d.length)}}}var X,J={ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(X.matchPattern);if(!n)return null;var r=n[0],a=e.match(X.parsePattern);if(!a)return null;var i=X.valueCallback?X.valueCallback(a[0]):a[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:R({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:R({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:R({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:R({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:R({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const _={code:"en-US",formatDistance:function(e,t,n){var r,a=I[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:z,formatRelative:function(e,t,n,r){return B[e]},localize:G,match:J,options:{weekStartsOn:0,firstWeekContainsDate:1}};var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,V=/''/g,ee=/[a-zA-Z]/;function te(e,t,n){var r,a,i,o,d,u,s,f,p,g,b,y,w,T,k,C,M,E;l(2,arguments);var x=String(t),D=v(),L=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:_,S=h(null!==(i=null!==(o=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(f=s.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==o?o:null===(p=D.locale)||void 0===p||null===(g=p.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==i?i:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=h(null!==(b=null!==(y=null!==(w=null!==(T=null==n?void 0:n.weekStartsOn)&&void 0!==T?T:null==n||null===(k=n.locale)||void 0===k||null===(C=k.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==w?w:D.weekStartsOn)&&void 0!==y?y:null===(M=D.locale)||void 0===M||null===(E=M.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!L.localize)throw new RangeError("locale must contain localize property");if(!L.formatLong)throw new RangeError("locale must contain formatLong property");var U=m(e);if(!function(e){if(l(1,arguments),!function(e){return l(1,arguments),e instanceof Date||"object"===c(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=m(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var j=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),W=function(e,t){return l(2,arguments),function(e,t){l(2,arguments);var n=m(e).getTime(),r=h(t);return new Date(n+r)}(e,-h(t))}(U,j),N={firstWeekContainsDate:S,weekStartsOn:P,locale:L,_originalDate:U};return x.match($).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,q[t])(e,L.formatLong):e})).join("").match(Z).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(K))?i[1].replace(V,"'"):a;var d,u=H[o];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(d=r,-1===Y.indexOf(d))||F(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==O.indexOf(e)}(r)||F(r,t,String(e)),u(W,r,L.localize,N);if(o.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}const ne=new u("pranie","osobno biale i czarne","medium","2023/06/30"),re=new u("obiad","pizza giuseppe","high","1994/10/02"),ae=new d("mati bambati");function ie(){const e=document.querySelector(".taskTitleInput"),t=document.querySelector(".taskDescriptionInput"),n=document.querySelector(".dueDateInput");if(console.log(n.value),document.getElementsByName("priority").forEach((e=>{e.checked&&(o=e.value)})),""!=e.value&&0!=e.value.length&&null===a){const r=new u(e.value,t.value,o,n.value);return de(),ce(),r}if(null!=a){const r=new u(e.value,t.value,o,n.value);d.findProjectById(a).addTask(r),ue(),ce()}}function oe(e){const n=document.querySelector(".projectTasksContainer"),i=document.createElement("div");i.classList.add("taskElement");const o=document.createElement("input");o.type="text",o.classList.add("taskTitleDisplay"),o.value=e.title,o.readOnly=!0;const u=document.createElement("input");u.type="text",u.classList.add("taskDescriptionDisplay"),u.value=e.description,u.readOnly=!0;const s=document.createElement("input");s.type="text",s.classList.add("taskDueDateDisplay"),s.value=te(new Date(e.dueDate),"dd/MM/yyyy"),s.readOnly=!0;const c=document.createElement("h3");c.classList.add("taskPriorityInput"),c.innerHTML=`Priority: ${e.priority}`;const l=document.createElement("button");if(l.classList.add("taskEdit"),l.innerHTML="Edit",l.addEventListener("click",(()=>{"Edit"===l.innerHTML?(o.removeAttribute("readOnly"),u.removeAttribute("readOnly"),s.removeAttribute("readonly"),s.type="date",s.value=e.dueDate,console.log("task dueDate",e.dueDate),l.innerHTML="Save"):"Save"===l.innerHTML&&(o.setAttribute("readonly","readonly"),u.setAttribute("readonly","readonly"),s.setAttribute("readonly","readonly"),s.type="text",e.dueDate=s.value,s.value=te(new Date(e.dueDate),"dd/MM/yyyy"),e.title=o.value,e.description=u.value,l.innerHTML="Edit")})),null===a){const a=document.createElement("button");a.classList.add("taskDelete"),a.innerHTML="Delete task",a.addEventListener("click",(()=>{const n=function(e){return t.find((t=>t.taskList.includes(e)))||null}(e);if(null!==n){const t=n.taskList.findIndex((t=>t.id===e.id));-1!==t&&n.taskList.splice(t,1)}e.removeTask(r),de()})),i.appendChild(o),i.appendChild(u),i.appendChild(s),i.appendChild(c),i.appendChild(l),i.appendChild(a),n.appendChild(i)}else if(null!==a){const t=document.createElement("button");t.classList.add("taskDelete"),t.innerHTML="Delete task",t.addEventListener("click",(()=>{const t=d.findProjectById(a).taskList;e.removeTask(t),e.removeTask(r),ue()})),i.appendChild(o),i.appendChild(u),i.appendChild(s),i.appendChild(c),i.appendChild(l),i.appendChild(t),n.appendChild(i)}}function de(){document.querySelector(".projectTasksContainer").innerHTML="",a=null,r.forEach((e=>{oe(e)}))}function ue(){document.querySelector(".projectTasksContainer").innerHTML="",d.findProjectById(a).taskList.forEach((e=>{oe(e)}))}function se(){const e=document.querySelector(".projectsContainer");e.innerHTML="",t.forEach((n=>{const i=document.createElement("div");i.classList.add("project");const o=document.createElement("button");o.classList.add("projectName"),o.innerHTML=n.name;const d=document.createElement("button");d.classList.add("projectDelete"),d.innerHTML="Delete",o.addEventListener("click",(()=>{a=n.id,ue()})),d.addEventListener("click",(()=>{n.taskList.forEach((e=>{const t=r.findIndex((t=>t.id===e.id));-1!==t&&r.splice(t,1)})),n.removeProject(t),se(),de()})),i.appendChild(o),i.appendChild(d),e.appendChild(i)}))}re.id=ne.id+1,ae.taskList.push(re);function ce(){const e=document.querySelector(".taskForm"),t=document.querySelector(".taskTitleInput"),n=document.querySelector(".taskDescriptionInput"),r=document.getElementsByName("priority");r.forEach((e=>{e.checked=!1,r[1].checked=!0})),t.value="",n.value="",e.classList.toggle("hidden")}var le=n(379),me=n.n(le),he=n(795),fe=n.n(he),pe=n(569),ge=n.n(pe),ve=n(565),be=n.n(ve),ye=n(216),we=n.n(ye),Te=n(589),ke=n.n(Te),Ce=n(426),Me={};Me.styleTagTransform=ke(),Me.setAttributes=be(),Me.insert=ge().bind(null,"head"),Me.domAPI=fe(),Me.insertStyleElement=we(),me()(Ce.Z,Me),Ce.Z&&Ce.Z.locals&&Ce.Z.locals,function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");return t.innerHTML="To-do List",e.appendChild(t),e}()),t.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const t=document.createElement("div");t.classList.add("mainDisplay");const n=document.createElement("div");n.classList.add("sidebar");const r=document.createElement("div");r.classList.add("home");const a=document.createElement("h2");a.innerHTML="Home";const i=document.createElement("button");i.classList.add("allTasks"),i.innerHTML="All Tasks";const o=document.createElement("button");o.classList.add("todayTasks"),o.innerHTML="Today";const d=document.createElement("div");d.classList.add("projects");const u=document.createElement("h2");u.innerHTML="Projects";const s=document.createElement("input");s.classList.add("inputProject"),s.type="text",s.placeholder="Enter project name";const c=document.createElement("button");c.classList.add("addProject"),c.innerHTML="Add Project";const l=document.createElement("div");l.classList.add("projectsContainer");const m=document.createElement("div");m.classList.add("taskForm");const h=document.createElement("input");h.classList.add("taskTitleInput"),h.type="text",h.id="taskTtitleInput",h.placeholder="* Task name";const f=document.createElement("label");f.htmlFor="taskTtitleInput",f.innerHTML="Name";const p=document.createElement("input");p.classList.add("taskDescriptionInput"),p.type="text",p.id="taskDescriptionInput",p.placeholder="Task description";const g=document.createElement("label");g.htmlFor="taskDescriptionInput",g.innerHTML="Description";const v=document.createElement("input");v.classList.add("dueDateInput"),v.type="date",v.name="dueDate",v.id="dueDate",v.value=new Date,v.min=new Date;const b=document.createElement("label");b.htmlFor="dueDate",b.innerHTML="Due date";const y=document.createElement("button");y.classList.add("taskButton"),y.innerHTML="Add task",y.addEventListener("click",ce);const w=document.createElement("button");w.classList.add("createNewTask"),w.innerHTML="Create task",w.addEventListener("click",ie);const T=document.createElement("button");T.classList.add("cancelTask"),T.innerHTML="Cancel",T.addEventListener("click",ce);const k=document.createElement("div");k.classList.add("projectTasksContainer");const C=document.createElement("div"),M=document.createElement("label");M.innerHTML="Priority";const E=document.createElement("input");E.type="radio",E.id="radio1",E.name="priority",E.value="low",E.classList.add("radioButtons");const x=document.createElement("label");x.htmlFor="radio1",x.innerHTML="Low";const D=document.createElement("input");D.type="radio",D.id="radio2",D.name="priority",D.value="medium",D.checked="true",D.classList.add("radioButtons");const L=document.createElement("label");L.htmlFor="radio2",L.innerHTML="Medium";const S=document.createElement("input");S.type="radio",S.id="radio3",S.name="priority",S.value="high",S.classList.add("radioButtons");const P=document.createElement("label");return P.htmlFor="radio3",P.innerHTML="High",C.appendChild(E),C.appendChild(x),C.appendChild(D),C.appendChild(L),C.appendChild(S),C.appendChild(P),m.appendChild(f),m.appendChild(h),m.appendChild(g),m.appendChild(p),m.appendChild(b),m.appendChild(v),m.appendChild(M),m.appendChild(C),m.appendChild(w),m.appendChild(T),t.appendChild(y),t.appendChild(m),t.appendChild(k),d.appendChild(l),d.appendChild(u),d.appendChild(s),d.appendChild(c),n.appendChild(r),n.appendChild(d),r.appendChild(a),r.appendChild(i),r.appendChild(o),e.appendChild(n),e.appendChild(t),o.addEventListener("click",(()=>{})),e}()),t.appendChild(function(){const t=document.createElement("div");t.classList.add("footer");const n=document.createElement("h4");n.innerHTML="Mateusz Kuruc 2023";const r=document.createElement("img");r.src=e;const a=document.createElement("a");return a.href="https://github.com/MateuszKuruc?tab=repositories",a.target="blank",a.appendChild(r),t.appendChild(n),t.appendChild(a),t}())}(),function(){const e=document.querySelector(".inputProject");document.querySelector(".addProject").addEventListener("click",(()=>{if(""!=e.value&&0!=e.value.length){const t=new d(e.value);return se(),e.value="",a=t.id,t}}))}(),se(),document.querySelector(".allTasks").addEventListener("click",de),document.querySelector(".todayTasks").addEventListener("click",(()=>{console.log(date2)})),console.log(t)})()})();
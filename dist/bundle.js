(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n}\n\n.header {\n  height: 10vh;\n  display: flex;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  display: flex;\n  height: 10vh;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main {\n  display: grid;\n  height: 80vh;\n  grid-template-columns: 1fr 4fr;\n  /* border: 5px solid red; */\n  /* background-color: red; */\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: lightblue;\n  /* border: 1px solid black; */\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainDisplay {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  /* border: 5px solid red; */\n}\n\nbutton {\n  width: 150px;\n  padding: 0.75rem;\n  font-weight: 900;\n  font-size: 14px;\n  border-radius: 0.75rem;\n  margin: 0.25rem;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  background-color: silver;\n}\n\n.tasksContainer {\n  display: grid;\n  background-color: blue;\n  border: 5px solid yellow;\n}\n\n.taskElement {\n  width: max(80%, 500px);\n  display: flex;\n  flex-direction: column;\n  border: 3px solid black;\n  border-radius: 0.75rem;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\ninput {\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.taskForm {\n  display: flex;\n  flex-direction: column;\n  width: max(40%, 200px);\n  align-self: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.addNewTask {\n  align-self: center;\n}\n\n.projectName {\n  background-color: black;\n  color: white;\n  word-wrap: wrap;\n  width: min(80%, 125px)\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"04be58c17b3d5e974442.svg";var n=t(379),r=t.n(n),o=t(795),a=t.n(o),c=t(569),i=t.n(c),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),m=t.n(p),h=t(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let v=[];class g{constructor(e){this.id=Date.now().toString(),this.name=e,this.taskList=[],v.push(this)}removeProject(e){const n=e.findIndex((e=>e.id===this.id));-1!==n&&e.splice(n,1)}addTask(e){this.taskList.push(e)}}function b(){console.log("test");const e=document.querySelector(".mainDisplay");e.innerHTML="";const n=document.createElement("div");n.classList.add("taskForm"),n.classList.add("hidden");const t=document.createElement("input");t.classList.add("taskTitle"),t.type="text",t.placeholder="* Task name";const r=document.createElement("input");r.classList.add("taskDescription"),r.type="text",r.placeholder="Task description";const o=document.createElement("button");o.classList.add("taskButton"),o.innerHTML="Create task",o.addEventListener("click",y);const a=document.createElement("button");a.classList.add("cancelTask"),a.innerHTML="Cancel",a.addEventListener("click",x),n.appendChild(t),n.appendChild(r),n.appendChild(a),e.appendChild(o),e.appendChild(n)}function y(){console.log("creating task"),x()}function x(){const e=document.querySelector(".taskForm"),n=document.querySelector(".taskTitle"),t=document.querySelector(".taskDescription");n.value="",t.value="",e.classList.toggle("hidden")}(function(){const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.innerHTML="To-do List",e.appendChild(n),e}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("div");n.classList.add("mainDisplay");const t=document.createElement("div");t.classList.add("sidebar");const r=document.createElement("div");r.classList.add("home");const o=document.createElement("h2");o.innerHTML="Home";const a=document.createElement("button");a.classList.add("allTasks"),a.innerHTML="All Tasks";const c=document.createElement("button");c.classList.add("todayTasks"),c.innerHTML="Today";const i=document.createElement("div");i.classList.add("projects");const s=document.createElement("h2");s.innerHTML="Projects";const d=document.createElement("input");d.classList.add("inputProject"),d.type="text",d.placeholder="Enter project name";const l=document.createElement("button");l.classList.add("addProject"),l.innerHTML="Add Project";const u=document.createElement("div");return u.classList.add("projectsContainer"),i.appendChild(u),i.appendChild(s),i.appendChild(d),i.appendChild(l),t.appendChild(r),t.appendChild(i),r.appendChild(o),r.appendChild(a),r.appendChild(c),e.appendChild(t),e.appendChild(n),e}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const t=document.createElement("h4");t.innerHTML="Mateusz Kuruc 2023";const r=document.createElement("img");r.src=e;const o=document.createElement("a");return o.href="https://github.com/MateuszKuruc?tab=repositories",o.target="blank",o.appendChild(r),n.appendChild(t),n.appendChild(o),n}())})(),function(){const e=document.querySelector(".inputProject");document.querySelector(".addProject").addEventListener("click",(()=>{if(""!=e.value&&0!=e.value.length){const n=new g(e.value);return console.log(n),console.log(v),function(){const e=document.querySelector(".projectsContainer");e.innerHTML="",v.forEach((n=>{const t=document.createElement("div");t.classList.add("project");const r=document.createElement("button");r.classList.add("projectName"),r.innerHTML=n.name,r.addEventListener("click",b),t.appendChild(r),e.appendChild(t)}))}(),e.value="",n}}))}()})()})();
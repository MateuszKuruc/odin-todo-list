(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n}\n\n.header {\n  height: 10vh;\n  display: flex;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  display: flex;\n  height: 10vh;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main {\n  display: grid;\n  height: 80vh;\n  grid-template-columns: 1fr 4fr;\n  /* border: 5px solid red; */\n  /* background-color: red; */\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: lightblue;\n  /* border: 1px solid black; */\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainDisplay {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  /* border: 5px solid red; */\n}\n\nbutton {\n  width: 150px;\n  padding: 0.75rem;\n  font-weight: 900;\n  font-size: 14px;\n  border-radius: 0.75rem;\n  margin: 0.25rem;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  background-color: silver;\n}\n\n.tasksContainer {\n  display: grid;\n  background-color: blue;\n  border: 5px solid yellow;\n}\n\n.taskElement {\n  width: max(80%, 500px);\n  display: flex;\n  flex-direction: column;\n  border: 3px solid black;\n  border-radius: 0.75rem;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\ninput {\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.taskForm {\n  display: flex;\n  flex-direction: column;\n  width: max(40%, 200px);\n  align-self: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.addNewTask {\n  align-self: center;\n}\n\n.projectName {\n  background-color: black;\n  color: white;\n  word-wrap: wrap;\n  /* width: min(80%, 125px) */\n}\n\n.projectsContainer {\n  display: flex;\nflex-direction: column;\nbackground-color: yellow;\n}\n\n.projectDelete {\n  width: 100px;\n}\n\n.projectTasksContainer {\n  /* border: 3px solid red; */\n}\n\n.taskForm {\n  border: 2px solid black;\n  padding: 1rem;\n}\n\n.taskElement > input {\n  background-color: lightblue;\n  border: none;\n}\n\n.taskElement > input:hover {\n  background-color: rgba(138, 29, 138, 0.5);\n}",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var d=r(e,a),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"04be58c17b3d5e974442.svg";let n=[],r=[],a=null,i=null,o=null;class c{constructor(e){this.id=s(),this.name=e,this.taskList=[],n.push(this)}removeProject(e){a=this.id;const n=e.findIndex((e=>e.id===a));-1!==n&&e.splice(n,1)}addTask(e){this.taskList.push(e)}static findProjectById(e){return n.find((n=>n.id===e))}}class d{constructor(e,n,t){this.id=s(),this.title=e,this.description=n,this.priority=t,r.push(this)}removeTask(e){i=this.id;const n=e.findIndex((e=>e.id===i));-1!==n&&e.splice(n,1)}}function s(){return Date.now().toString()}const l=new d("pranie","osobno biale i czarne","medium"),u=new d("obiad","pizza giuseppe","high"),p=new c("mati bambati");function m(){const e=document.querySelector(".taskTitleInput"),n=document.querySelector(".taskDescriptionInput");if(document.getElementsByName("priority").forEach((e=>{e.checked&&(o=e.value)})),""!=e.value&&0!=e.value.length&&null===a){const t=new d(e.value,n.value,o);return f(),k(),t}if(null!=a){const t=new d(e.value,n.value,o);c.findProjectById(a).addTask(t),v(),k()}}function h(e){const t=document.querySelector(".projectTasksContainer"),i=document.createElement("div");i.classList.add("taskElement");const o=document.createElement("input");o.type="text",o.classList.add("taskTitleDisplay"),o.value=e.title,o.readOnly=!0;const d=document.createElement("input");d.type="text",d.classList.add("taskDescriptionDisplay"),d.value=e.description,d.readOnly=!0;const s=document.createElement("h3");s.classList.add("taskPriorityInput"),s.innerHTML=`Priority: ${e.priority}`;const l=document.createElement("button");if(l.classList.add("taskEdit"),l.innerHTML="Edit",l.addEventListener("click",(()=>{d.removeAttribute("readOnly"),l.innerHTML="Save","Save"===l.innerHTML&&l.addEventListener("click",(()=>{d.setAttribute("readonly","readonly"),e.description=d.value,l.innerHTML="Edit"}))})),null===a){const a=document.createElement("button");a.classList.add("taskDelete"),a.innerHTML="Delete task",a.addEventListener("click",(()=>{const t=function(e){return n.find((n=>n.taskList.includes(e)))||null}(e);if(null!==t){const n=t.taskList.findIndex((n=>n.id===e.id));-1!==n&&t.taskList.splice(n,1)}e.removeTask(r),f()})),i.appendChild(o),i.appendChild(d),i.appendChild(s),i.appendChild(l),i.appendChild(a),t.appendChild(i)}else if(null!==a){const n=document.createElement("button");n.classList.add("taskDelete"),n.innerHTML="Delete task",n.addEventListener("click",(()=>{const n=c.findProjectById(a).taskList;e.removeTask(n),e.removeTask(r),v()})),i.appendChild(o),i.appendChild(d),i.appendChild(s),i.appendChild(l),i.appendChild(n),t.appendChild(i)}}function f(){document.querySelector(".projectTasksContainer").innerHTML="",a=null,r.forEach((e=>{h(e)}))}function v(){document.querySelector(".projectTasksContainer").innerHTML="",c.findProjectById(a).taskList.forEach((e=>{h(e)}))}function y(){document.querySelector(".taskTitleInput"),document.querySelector(".taskDescriptionInput"),document.querySelector(".mainDisplay"),document.querySelector(".taskButton");const e=document.querySelector(".projectsContainer");e.innerHTML="",n.forEach((t=>{const r=document.createElement("div");r.classList.add("project");const i=document.createElement("button");i.classList.add("projectName"),i.innerHTML=t.name;const o=document.createElement("button");o.classList.add("projectDelete"),o.innerHTML="Delete",i.addEventListener("click",(()=>{a=t.id,v()})),o.addEventListener("click",(()=>{t.removeProject(n),y()})),r.appendChild(i),r.appendChild(o),e.appendChild(r)}))}u.id=l.id+1,p.taskList.push(u);function k(){const e=document.querySelector(".taskForm"),n=document.querySelector(".taskTitleInput"),t=document.querySelector(".taskDescriptionInput"),r=document.getElementsByName("priority");r.forEach((e=>{e.checked=!1,r[1].checked=!0})),n.value="",t.value="",e.classList.toggle("hidden")}var b=t(379),L=t.n(b),g=t(795),E=t.n(g),C=t(569),T=t.n(C),x=t(565),w=t.n(x),M=t(216),j=t.n(M),H=t(589),S=t.n(H),I=t(426),D={};D.styleTagTransform=S(),D.setAttributes=w(),D.insert=T().bind(null,"head"),D.domAPI=E(),D.insertStyleElement=j(),L()(I.Z,D),I.Z&&I.Z.locals&&I.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.innerHTML="To-do List",e.appendChild(n),e}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("div");n.classList.add("mainDisplay");const t=document.createElement("div");t.classList.add("sidebar");const r=document.createElement("div");r.classList.add("home");const a=document.createElement("h2");a.innerHTML="Home";const i=document.createElement("button");i.classList.add("allTasks"),i.innerHTML="All Tasks";const o=document.createElement("button");o.classList.add("todayTasks"),o.innerHTML="Today";const c=document.createElement("div");c.classList.add("projects");const d=document.createElement("h2");d.innerHTML="Projects";const s=document.createElement("input");s.classList.add("inputProject"),s.type="text",s.placeholder="Enter project name";const l=document.createElement("button");l.classList.add("addProject"),l.innerHTML="Add Project";const u=document.createElement("div");u.classList.add("projectsContainer");const p=document.createElement("div");p.classList.add("taskForm"),p.classList.add("hidden");const h=document.createElement("input");h.classList.add("taskTitleInput"),h.type="text",h.placeholder="* Task name";const f=document.createElement("input");f.classList.add("taskDescriptionInput"),f.type="text",f.placeholder="Task description";const v=document.createElement("button");v.classList.add("taskButton"),v.innerHTML="Add task",v.addEventListener("click",k);const y=document.createElement("button");y.classList.add("createNewTask"),y.innerHTML="Create task",y.addEventListener("click",m);const b=document.createElement("button");b.classList.add("cancelTask"),b.innerHTML="Cancel",b.addEventListener("click",k);const L=document.createElement("div");L.classList.add("projectTasksContainer");const g=document.createElement("div"),E=document.createElement("h3");E.classList.add("radioDescription"),E.innerHTML="Priority";const C=document.createElement("input");C.type="radio",C.id="radio1",C.name="priority",C.value="low",C.classList.add("radioButtons");const T=document.createElement("label");T.htmlFor="radio1",T.innerHTML="Low";const x=document.createElement("input");x.type="radio",x.id="radio2",x.name="priority",x.value="medium",x.checked="true",x.classList.add("radioButtons");const w=document.createElement("label");w.htmlFor="radio2",w.innerHTML="Medium";const M=document.createElement("input");M.type="radio",M.id="radio3",M.name="priority",M.value="high",M.classList.add("radioButtons");const j=document.createElement("label");return j.htmlFor="radio3",j.innerHTML="High",g.appendChild(E),g.appendChild(C),g.appendChild(T),g.appendChild(x),g.appendChild(w),g.appendChild(M),g.appendChild(j),p.appendChild(h),p.appendChild(f),p.appendChild(g),p.appendChild(y),p.appendChild(b),n.appendChild(v),n.appendChild(p),n.appendChild(L),c.appendChild(u),c.appendChild(d),c.appendChild(s),c.appendChild(l),t.appendChild(r),t.appendChild(c),r.appendChild(a),r.appendChild(i),r.appendChild(o),e.appendChild(t),e.appendChild(n),o.addEventListener("click",(()=>{})),e}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const t=document.createElement("h4");t.innerHTML="Mateusz Kuruc 2023";const r=document.createElement("img");r.src=e;const a=document.createElement("a");return a.href="https://github.com/MateuszKuruc?tab=repositories",a.target="blank",a.appendChild(r),n.appendChild(t),n.appendChild(a),n}())}(),function(){const e=document.querySelector(".inputProject");document.querySelector(".addProject").addEventListener("click",(()=>{if(""!=e.value&&0!=e.value.length){const n=new c(e.value);return y(),e.value="",a=n.id,n}}))}(),y(),document.querySelector(".allTasks").addEventListener("click",f),document.querySelector(".todayTasks"),console.log(n)})()})();
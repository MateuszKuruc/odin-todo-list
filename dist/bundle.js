(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([e.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  display: grid;\n}\n\n.header {\n  height: 10vh;\n  display: flex;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  display: flex;\n  height: 10vh;\n  background-color: chocolate;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.main {\n  display: grid;\n  height: 80vh;\n  grid-template-columns: 1fr 4fr;\n  /* border: 5px solid red; */\n  /* background-color: red; */\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: lightblue;\n  /* border: 1px solid black; */\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n}\n\n.mainDisplay {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  /* border: 5px solid red; */\n}\n\nbutton {\n  width: 150px;\n  padding: 0.75rem;\n  font-weight: 900;\n  font-size: 14px;\n  border-radius: 0.75rem;\n  margin: 0.25rem;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  background-color: silver;\n}\n\n.tasksContainer {\n  display: grid;\n  background-color: blue;\n  border: 5px solid yellow;\n}\n\n.taskElement {\n  width: max(80%, 500px);\n  display: flex;\n  flex-direction: column;\n  border: 3px solid black;\n  border-radius: 0.75rem;\n  background-color: lightblue;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n}\n\ninput {\n  height: 2rem;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n\n.taskForm {\n  display: flex;\n  flex-direction: column;\n  width: max(40%, 200px);\n  align-self: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.addNewTask {\n  align-self: center;\n}\n\n.projectName {\n  background-color: black;\n  color: white;\n  word-wrap: wrap;\n  /* width: min(80%, 125px) */\n}\n\n.projectsContainer {\n  display: flex;\nflex-direction: column;\nbackground-color: yellow;\n}\n\n.projectDelete {\n  width: 100px;\n}\n\n.projectTasksContainer {\n  /* border: 3px solid red; */\n}\n\n.taskForm {\n  border: 2px solid black;\n  padding: 1rem;\n}\n\n.taskElement > input {\n  background-color: lightblue;\n  border: none;\n}\n\n.taskElement > input:hover {\n  background-color: rgba(138, 29, 138, 0.5);\n}",""]);const d=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],d=0;d<e.length;d++){var c=e[d],s=a.base?c[0]+a.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,a);a.byIndex=d,n.splice(d,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=t(i[o]);n[d].references--}for(var c=a(e,r),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"04be58c17b3d5e974442.svg";let n=[],a=[],r=null,i=null,o=null;class d{constructor(e){this.id=s(),this.name=e,this.taskList=[],n.push(this)}removeProject(e){r=this.id;const n=e.findIndex((e=>e.id===r));-1!==n&&e.splice(n,1)}addTask(e){this.taskList.push(e)}static findProjectById(e){return n.find((n=>n.id===e))}}class c{constructor(e,n,t,r){this.id=s(),this.title=e,this.description=n,this.priority=t,this.dueDate=r,a.push(this)}removeTask(e){i=this.id;const n=e.findIndex((e=>e.id===i));-1!==n&&e.splice(n,1)}}function s(){return Date.now().toString()}const l=new c("pranie","osobno biale i czarne","medium"),u=new c("obiad","pizza giuseppe","high"),p=new d("mati bambati");function m(){const e=document.querySelector(".taskTitleInput"),n=document.querySelector(".taskDescriptionInput"),t=document.querySelector(".dueDateInput");if(console.log(t.value),document.getElementsByName("priority").forEach((e=>{e.checked&&(o=e.value)})),""!=e.value&&0!=e.value.length&&null===r){const a=new c(e.value,n.value,o,t.value);return f(),k(),a}if(null!=r){const a=new c(e.value,n.value,o,t.value);d.findProjectById(r).addTask(a),v(),k()}}function h(e){const t=document.querySelector(".projectTasksContainer"),i=document.createElement("div");i.classList.add("taskElement");const o=document.createElement("input");o.type="text",o.classList.add("taskTitleDisplay"),o.value=e.title,o.readOnly=!0;const c=document.createElement("input");c.type="text",c.classList.add("taskDescriptionDisplay"),c.value=e.description,c.readOnly=!0;const s=document.createElement("input");s.type="text",s.classList.add("taskDueDateDisplay"),s.value=e.dueDate,s.readOnly=!0;const l=document.createElement("h3");l.classList.add("taskPriorityInput"),l.innerHTML=`Priority: ${e.priority}`;const u=document.createElement("button");if(u.classList.add("taskEdit"),u.innerHTML="Edit",u.addEventListener("click",(()=>{"Edit"===u.innerHTML?(o.removeAttribute("readOnly"),c.removeAttribute("readOnly"),u.innerHTML="Save"):"Save"===u.innerHTML&&(o.setAttribute("readonly","readonly"),c.setAttribute("readonly","readonly"),e.title=o.value,e.description=c.value,u.innerHTML="Edit")})),null===r){const r=document.createElement("button");r.classList.add("taskDelete"),r.innerHTML="Delete task",r.addEventListener("click",(()=>{const t=function(e){return n.find((n=>n.taskList.includes(e)))||null}(e);if(null!==t){const n=t.taskList.findIndex((n=>n.id===e.id));-1!==n&&t.taskList.splice(n,1)}e.removeTask(a),f()})),i.appendChild(o),i.appendChild(c),i.appendChild(s),i.appendChild(l),i.appendChild(u),i.appendChild(r),t.appendChild(i)}else if(null!==r){const n=document.createElement("button");n.classList.add("taskDelete"),n.innerHTML="Delete task",n.addEventListener("click",(()=>{const n=d.findProjectById(r).taskList;e.removeTask(n),e.removeTask(a),v()})),i.appendChild(o),i.appendChild(c),i.appendChild(s),i.appendChild(l),i.appendChild(u),i.appendChild(n),t.appendChild(i)}}function f(){document.querySelector(".projectTasksContainer").innerHTML="",r=null,a.forEach((e=>{h(e)}))}function v(){document.querySelector(".projectTasksContainer").innerHTML="",d.findProjectById(r).taskList.forEach((e=>{h(e)}))}function y(){const e=document.querySelector(".projectsContainer");e.innerHTML="",n.forEach((t=>{const i=document.createElement("div");i.classList.add("project");const o=document.createElement("button");o.classList.add("projectName"),o.innerHTML=t.name;const d=document.createElement("button");d.classList.add("projectDelete"),d.innerHTML="Delete",o.addEventListener("click",(()=>{r=t.id,v()})),d.addEventListener("click",(()=>{t.taskList.forEach((e=>{const n=a.findIndex((n=>n.id===e.id));-1!==n&&a.splice(n,1)})),t.removeProject(n),y(),f()})),i.appendChild(o),i.appendChild(d),e.appendChild(i)}))}u.id=l.id+1,p.taskList.push(u);function k(){const e=document.querySelector(".taskForm"),n=document.querySelector(".taskTitleInput"),t=document.querySelector(".taskDescriptionInput"),a=document.getElementsByName("priority");a.forEach((e=>{e.checked=!1,a[1].checked=!0})),n.value="",t.value="",e.classList.toggle("hidden")}var b=t(379),L=t.n(b),g=t(795),E=t.n(g),C=t(569),T=t.n(C),x=t(565),w=t.n(x),M=t(216),j=t.n(M),H=t(589),D=t.n(H),I=t(426),S={};S.styleTagTransform=D(),S.setAttributes=w(),S.insert=T().bind(null,"head"),S.domAPI=E(),S.insertStyleElement=j(),L()(I.Z,S),I.Z&&I.Z.locals&&I.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");return n.innerHTML="To-do List",e.appendChild(n),e}()),n.appendChild(function(){const e=document.createElement("div");e.classList.add("main");const n=document.createElement("div");n.classList.add("mainDisplay");const t=document.createElement("div");t.classList.add("sidebar");const a=document.createElement("div");a.classList.add("home");const r=document.createElement("h2");r.innerHTML="Home";const i=document.createElement("button");i.classList.add("allTasks"),i.innerHTML="All Tasks";const o=document.createElement("button");o.classList.add("todayTasks"),o.innerHTML="Today";const d=document.createElement("div");d.classList.add("projects");const c=document.createElement("h2");c.innerHTML="Projects";const s=document.createElement("input");s.classList.add("inputProject"),s.type="text",s.placeholder="Enter project name";const l=document.createElement("button");l.classList.add("addProject"),l.innerHTML="Add Project";const u=document.createElement("div");u.classList.add("projectsContainer");const p=document.createElement("div");p.classList.add("taskForm");const h=document.createElement("input");h.classList.add("taskTitleInput"),h.type="text",h.id="taskTtitleInput",h.placeholder="* Task name";const f=document.createElement("label");f.htmlFor="taskTtitleInput",f.innerHTML="Name";const v=document.createElement("input");v.classList.add("taskDescriptionInput"),v.type="text",v.id="taskDescriptionInput",v.placeholder="Task description";const y=document.createElement("label");y.htmlFor="taskDescriptionInput",y.innerHTML="Description";const b=document.createElement("input");b.classList.add("dueDateInput"),b.type="date",b.name="dueDate",b.id="dueDate",b.value=new Date,b.min=new Date;const L=document.createElement("label");L.htmlFor="dueDate",L.innerHTML="Due date";const g=document.createElement("button");g.classList.add("taskButton"),g.innerHTML="Add task",g.addEventListener("click",k);const E=document.createElement("button");E.classList.add("createNewTask"),E.innerHTML="Create task",E.addEventListener("click",m);const C=document.createElement("button");C.classList.add("cancelTask"),C.innerHTML="Cancel",C.addEventListener("click",k);const T=document.createElement("div");T.classList.add("projectTasksContainer");const x=document.createElement("div"),w=document.createElement("label");w.innerHTML="Priority";const M=document.createElement("input");M.type="radio",M.id="radio1",M.name="priority",M.value="low",M.classList.add("radioButtons");const j=document.createElement("label");j.htmlFor="radio1",j.innerHTML="Low";const H=document.createElement("input");H.type="radio",H.id="radio2",H.name="priority",H.value="medium",H.checked="true",H.classList.add("radioButtons");const D=document.createElement("label");D.htmlFor="radio2",D.innerHTML="Medium";const I=document.createElement("input");I.type="radio",I.id="radio3",I.name="priority",I.value="high",I.classList.add("radioButtons");const S=document.createElement("label");return S.htmlFor="radio3",S.innerHTML="High",x.appendChild(M),x.appendChild(j),x.appendChild(H),x.appendChild(D),x.appendChild(I),x.appendChild(S),p.appendChild(f),p.appendChild(h),p.appendChild(y),p.appendChild(v),p.appendChild(L),p.appendChild(b),p.appendChild(w),p.appendChild(x),p.appendChild(E),p.appendChild(C),n.appendChild(g),n.appendChild(p),n.appendChild(T),d.appendChild(u),d.appendChild(c),d.appendChild(s),d.appendChild(l),t.appendChild(a),t.appendChild(d),a.appendChild(r),a.appendChild(i),a.appendChild(o),e.appendChild(t),e.appendChild(n),o.addEventListener("click",(()=>{})),e}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const t=document.createElement("h4");t.innerHTML="Mateusz Kuruc 2023";const a=document.createElement("img");a.src=e;const r=document.createElement("a");return r.href="https://github.com/MateuszKuruc?tab=repositories",r.target="blank",r.appendChild(a),n.appendChild(t),n.appendChild(r),n}())}(),function(){const e=document.querySelector(".inputProject");document.querySelector(".addProject").addEventListener("click",(()=>{if(""!=e.value&&0!=e.value.length){const n=new d(e.value);return y(),e.value="",r=n.id,n}}))}(),y(),document.querySelector(".allTasks").addEventListener("click",f),document.querySelector(".todayTasks").addEventListener("click",(()=>{console.log(date2)})),console.log(n)})()})();
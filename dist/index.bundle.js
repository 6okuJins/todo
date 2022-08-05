(()=>{"use strict";var e={859:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},254:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* Side Bar */\n.side-bar {\n  grid-column: 1 / 2;\n  background-color: yellow;\n  display: flex;\n  flex-direction: column;\n  \n}\n.side-bar .active {\n  background-color:  rgba(0, 0, 0, 0.2);\n}\n.side-bar-button {\n  background: none;\n}\n.project-container::-webkit-scrollbar  {\n  width: 10px;\n}\n.project-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 20px;\n}\n.project-container::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 20px;\n  transition: background-color 0.5s ease-in-out;\n  -webkit-transition: background-color 0.5s ease-in-out;\n  -ms-transition: background-color 0.5s ease-in-out;\n  -o-transition: background-color 0.5s ease-in-out;\n}\n\n/* Handle on hover */\n.project-container::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.project-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 20px;\n  max-height: 400px;\n  width: 80%;\n  overflow: scroll;\n  overflow-x: hidden;\n}\n.project-container>.project:hover {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.project-container>.project {\n  display:flex;\n}\n.project-container>.project>.open-project {\n  flex-grow: 1;\n  background: none;\n  border: none;\n}\n.project-container>.project>.delete {\n  position:relative;\n  background:none;\n  border:none;\n}",""]);const c=i},890:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n  margin: 0px;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: min-content 1fr min-content;\n  height: 100vh;\n}\n.header {\n  background-color: blue;\n  grid-row: 1 / 2;\n  grid-column: 1 / -1;\n  height: 120px;\n}\n\n.add-new-container.inactive .popup,\n.add-new-container.active .open-popup {\n  display: none;\n}\n.add-new-container {\n  display: flex;\n  justify-content: center;\n}\n.content {\n  background-color: green;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.todo {\n  display:flex;\n  width: 80%;\n  justify-content: space-between;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n.footer {\nbackground-color: red;\nheight: 60px;\ngrid-column: 1 / -1;\n}\n",""]);const c=i},474:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".todo.completed .title { \ntext-decoration: line-through;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=(e="",t="",n="",r="",o="",a=crypto.randomUUID(),i=!1)=>{const c=a;let s=e,d=n,l=r;const u=t;let p=o,m=i;return{toJSON:()=>({title:s,project:u,description:d,dueDate:l,priority:p,ID:c,status:m}),setTitle:e=>{s=e},setDescription:e=>{d=e},setDueDate:e=>{l=e},setPriority:e=>{p=e},toggleStatus:()=>{m=!m},getTitle:()=>s,getID:()=>c,getDescription:()=>d,getDueDate:()=>l,getProject:()=>u,getPriority:()=>p,getStatus:()=>m}},t=e=>{const t=(()=>{const t=document.createElement("div");return t.classList.add(`add-${e}-container`,"add-new-container","inactive"),t.toggle=()=>{t.classList.toggle("active"),t.classList.toggle("inactive")},t})(),n=(()=>{const n=document.createElement("button");n.classList.add("open-popup");const r=document.createElement("svg");n.innerHTML='<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /></svg>';const o=document.createElement("div");return o.textContent=`Add new ${e}`,n.append(r,o),n.addEventListener("click",(()=>{t.toggle(),document.forms[`${e}Popup`].title.focus()})),n})(),r=(()=>{const n=document.createElement("form");n.classList.add("popup"),n.name=`${e}Popup`,n.addEventListener("submit",t.toggle);const r=document.createElement("input");r.setAttribute("type","text"),r.name="title",r.required=!0;const o=document.createElement("button");o.setAttribute("type","submit"),o.textContent="Add";const a=document.createElement("button");return a.setAttribute("type","reset"),a.classList.add("cancel"),a.textContent="Cancel",a.addEventListener("click",t.toggle),n.append(r,o,a),n})();return t.append(n,r),t},r=e=>{const t=document.createElement("button");return t.classList.add("side-bar-button",e),t.textContent=e,t},o=e=>{const t=document.createElement("div");t.classList.add("todo"),t.dataset.uuid=e.getID();const n=document.createElement("input");n.setAttribute("type","checkbox"),n.checked=e.getStatus(),n.checked&&t.classList.add("completed"),n.addEventListener("click",(()=>{e.toggleStatus(),t.classList.toggle("completed")}));const r=document.createElement("div");r.classList.add("title"),r.textContent=e.getTitle();const o=document.createElement("input");o.setAttribute("type","date"),o.classList.add("dueDate"),o.value=e.getDueDate(),o.addEventListener("change",(()=>{e.setDueDate(o.value)}));const a=document.createElement("button"),i=document.createElement("svg");return a.classList.add("delete"),i.innerHTML='<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>',a.append(i),t.append(n,r,o,a),t},a=(e,t)=>{for(let n=0;n<e.length;n++)t.insertBefore(o(e[n]),t.lastChild)},i=()=>{const e=document.querySelector("body"),n=(()=>{const e=document.createElement("div");return e.classList.add("header"),e})(),o=(()=>{const e=document.createElement("div");e.classList.add("side-bar");const n=r("Inbox");n.classList.add("active");const o=r("Today"),a=r("Week");e.append(n,o,a);const i=document.createElement("div");i.textContent="Projects";const c=document.createElement("div");c.classList.add("project-container");const s=t("project");return s.classList.add("side-bar-button"),e.emptySideBar=()=>{for(;c.firstChild;)c.removeChild(c.firstChild)},e.fillSideBar=e=>{for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("project","side-bar-button");const r=document.createElement("button");r.classList.add("open-project"),r.textContent=e[t];const o=document.createElement("button");o.textContent="x",o.classList.add("delete"),n.append(r,o),c.append(n)}},e.append(i,c,s),e})(),a=(()=>{const e=document.createElement("div");return e.classList.add("content"),e.append(t("todo")),e})(),i=(()=>{const e=document.createElement("div");return e.classList.add("footer"),e})();return e.append(n,o,a,i),{sideBar:o,content:a}};function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function l(e,t){c(1,arguments);var n=t||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,a=null==o?0:d(o),i=null==n.weekStartsOn?a:d(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=s(e),u=l.getDay(),p=(u<i?7:0)+u-i;return l.setDate(l.getDate()-p),l.setHours(0,0,0,0),l}Math.pow(10,8);var u=36e5;function p(e,t){c(1,arguments);var n=t||{},r=null==n.additionalDigits?2:d(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,a=b(e);if(a.date){var i=h(a.date,r);o=y(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,l=o.getTime(),u=0;if(a.time&&(u=D(a.time),isNaN(u)))return new Date(NaN);if(!a.timezone){var p=new Date(l+u),m=new Date(0);return m.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),m.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),m}return s=S(a.timezone),isNaN(s)?new Date(NaN):new Date(l+u+s)}var m={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},g=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,f=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function b(e){var t,n={},r=e.split(m.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],m.timeZoneDelimiter.test(n.date)&&(n.date=e.split(m.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=m.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}function h(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function y(e,t){if(null===t)return new Date(NaN);var n=e.match(g);if(!n)return new Date(NaN);var r=!!n[4],o=w(n[1]),a=w(n[2])-1,i=w(n[3]),c=w(n[4]),s=w(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(t,c,s):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(T[t]||(k(e)?29:28))}(t,a,i)&&function(e,t){return t>=1&&t<=(k(e)?366:365)}(t,o)?(d.setUTCFullYear(t,a,Math.max(o,i)),d):new Date(NaN)}function w(e){return e?parseInt(e):1}function D(e){var t=e.match(f);if(!t)return NaN;var n=x(t[1]),r=x(t[2]),o=x(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,o)?n*u+6e4*r+1e3*o:NaN}function x(e){return e&&parseFloat(e.replace(",","."))||0}function S(e){if("Z"===e)return 0;var t=e.match(v);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,o)?n*(r*u+6e4*o):NaN}var T=[31,null,31,30,31,30,31,31,30,31,30,31];function k(e){return e%400==0||e%4==0&&e%100!=0}function E(e){c(1,arguments);var t=s(e);return t.setHours(0,0,0,0),t}const j=(e=[],t=[])=>{let n=e,r=t;const o=new Date;return{toJSON:()=>({container:[...n],projects:[...r]}),getContainer:()=>[...n],addTodo:e=>n.push(e),getTodoByUUID:e=>n.filter((t=>t.getID()===e)).pop(),removeTodoByUUID:e=>{n=n.filter((t=>t.getID()!==e))},getAllProjects:()=>[...r],getProject:e=>n.filter((t=>t.getProject()===e)),addProject:e=>{r.includes(e)||r.push(e)},removeProject:e=>{r=r.filter((t=>t!==e)),n=n.filter((t=>t.getProject()!==e))},filterByDay:()=>n.filter((e=>function(e,t){c(2,arguments);var n=E(e),r=E(t);return n.getTime()===r.getTime()}(p(e.getDueDate()),o))),filterByWeek:()=>n.filter((e=>function(e,t,n){c(2,arguments);var r=l(e,n),o=l(t,n);return r.getTime()===o.getTime()}(p(e.getDueDate()),o)))}},C=e=>{for(;e.children.length>1;)e.removeChild(e.children[0])};var L=n(379),N=n.n(L),P=n(795),I=n.n(P),H=n(569),Z=n.n(H),q=n(565),U=n.n(q),A=n(216),M=n.n(A),V=n(589),B=n.n(V),O=n(890),F={};F.styleTagTransform=B(),F.setAttributes=U(),F.insert=Z().bind(null,"head"),F.domAPI=I(),F.insertStyleElement=M(),N()(O.Z,F),O.Z&&O.Z.locals&&O.Z.locals;var $=n(859),W={};W.styleTagTransform=B(),W.setAttributes=U(),W.insert=Z().bind(null,"head"),W.domAPI=I(),W.insertStyleElement=M(),N()($.Z,W),$.Z&&$.Z.locals&&$.Z.locals;var z=n(254),G={};G.styleTagTransform=B(),G.setAttributes=U(),G.insert=Z().bind(null,"head"),G.domAPI=I(),G.insertStyleElement=M(),N()(z.Z,G),z.Z&&z.Z.locals&&z.Z.locals;var Y=n(474),J={};J.styleTagTransform=B(),J.setAttributes=U(),J.insert=Z().bind(null,"head"),J.domAPI=I(),J.insertStyleElement=M(),N()(Y.Z,J),Y.Z&&Y.Z.locals&&Y.Z.locals,(()=>{const{sideBar:t,content:n}=i(),r=(()=>{const t=JSON.parse(localStorage.getItem("todoContainer"));let n;if(t){const r=t.container.map((t=>e(...Object.values(t))));n=j(r,t.projects)}else n=j();return n})();let o;function c(e){C(n),n.firstChild.style.display="block";let t=e;t||(t=o?r.getProject(o):r.getContainer()),a(t,n),d()}function s(e,r){o="",c(r),t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),r&&(n.lastChild.style.display="none")}function d(){document.querySelectorAll(".todo").forEach((e=>{e.querySelector(".delete").addEventListener("click",(()=>{r.removeTodoByUUID(e.dataset.uuid),n.removeChild(e),u()}))}))}function l(){const e=document.querySelector(".project-container");e.querySelectorAll(".project").forEach((n=>{const a=n.querySelector(".open-project");a.addEventListener("click",(()=>{o=a.textContent,t.querySelector(".active").classList.remove("active"),n.classList.add("active"),c()})),n.querySelector(".delete").addEventListener("click",(()=>{o===a.textContent&&(o=""),r.removeProject(a.textContent),c(),u(),e.removeChild(n)}))}))}function u(){localStorage.setItem("todoContainer",JSON.stringify(r))}a(r.getContainer(),n),t.fillSideBar(r.getAllProjects()),d(),l(),document.querySelector(".add-todo-container .popup").addEventListener("submit",(t=>{t.preventDefault();const i=e(document.forms.todoPopup.title.value,o);r.addTodo(i),u(),C(n),a(o?r.getProject(o):r.getContainer(),n),d(),t.target.reset()})),document.querySelector(".add-project-container .popup").addEventListener("submit",(e=>{e.preventDefault(),r.addProject(document.forms.projectPopup.title.value),u(),t.emptySideBar(),t.fillSideBar(r.getAllProjects()),d(),l(),e.target.reset()})),document.querySelector(".side-bar-button.Inbox").addEventListener("click",(e=>s(e))),document.querySelector(".side-bar-button.Today").addEventListener("click",(e=>s(e,r.filterByDay()))),document.querySelector(".side-bar-button.Week").addEventListener("click",(e=>s(e,r.filterByWeek()))),n.addEventListener("change",u)})()})()})();
!function(){"use strict";var e,t,n,r,o={},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,c),n.exports}c.m=o,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);c.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},c.d(o,i),o},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return"math.chunk.js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="webpack-learn:",c.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var u,a;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==r+o){u=s;break}}u||(a=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.setAttribute("data-webpack",r+o),u.src=e),n[e]=[t];var d=function(t,r){u.onerror=u.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),a&&document.head.appendChild(u)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e}(),function(){var e={179:0};c.f.j=function(t,n){var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=c.p+c.u(t),u=new Error;c.l(i,(function(n){if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var r,o,i=n[0],u=n[1],a=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)c.o(u,r)&&(c.m[r]=u[r]);if(a)a(c)}for(t&&t(n);l<i.length;l++)o=i[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkwebpack_learn=self.webpackChunkwebpack_learn||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var u=function(){console.log("hello world")},a=c.p+"images/57842576a3.png";u();(function(e,t,n){console.log(e,t,n)}).apply(void 0,[1,2,3]);var l=document.createElement("img");l.src=a,document.body.appendChild(l);var f=document.createElement("div");f.textContent="哈哈哈哈",f.classList.add("block-bg"),document.body.appendChild(f),l.onclick=function(){c.e(600).then(c.t.bind(c,77,23)).then((function(e){console.log("模块加载成功",e)})).catch((function(e){console.log("模块加载失败",e)}))},"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("注册成功",e)})).catch((function(e){console.log("注册失败",e)}))}))}();
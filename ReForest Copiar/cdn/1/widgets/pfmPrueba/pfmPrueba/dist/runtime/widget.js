System.register(["jimu-core","jimu-arcgis","jimu-core/react","jimu-ui"],(function(e,t){var r={},n={},o={},a={};return{setters:[function(e){r.React=e.React},function(e){n.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.useState=e.useState},function(e){a.Button=e.Button}],execute:function(){e((()=>{var e={6681:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(8081),o=r.n(n),a=r(3645),c=r.n(a)()(o());c.push([e.id,".primerWidget{color:black}.cuadro{background-color:azure}.recuadro{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px;margin-top:10px}.veinte{background-color:transparent;border:2px solid white;border-radius:60px;box-shadow:inset 0 0 5px #5bc0eb, 0 0 10px #5bc0eb;max-width:400px;padding:20px;text-align:center;color:#fff;margin:0;font-size:15px;text-shadow:0 0 5px #5bc0eb,0 0 15px #5bc0eb,0 0 30px #5bc0eb,0 0 50px #5bc0eb}.treinta{background-color:transparent;border:2px solid white;border-radius:60px;box-shadow:inset 0 0 5px #fde74c, 0 0 10px #fde74c;max-width:400px;margin:auto;padding:20px;text-align:center;color:#fff;margin:0;font-size:15px;text-shadow:0 0 5px #fde74c, 0 0 15px #fde74c, 0 0 30px #fde74c, 0 0 50px #fde74c}.cuarenta{background-color:transparent;border:2px solid white;border-radius:60px;box-shadow:inset 0 0 5px #9bc53d, 0 0 10px #9bc53d;max-width:400px;margin:auto;padding:20px;text-align:center;color:#fff;margin:0;font-size:15px;text-shadow:0 0 5px #9bc53d, 0 0 15px #9bc53d, 0 0 30px #9bc53d, 0 0 50px #9bc53d}\n",""]);const i=c},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},3379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=n.base?s[0]+n.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,n);n.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}c.push(p)}return c}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);t[i].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},6826:e=>{"use strict";e.exports=n},8891:e=>{"use strict";e.exports=r},1315:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=a}},t={};function c(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,c),o.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="",c.nc=void 0;var i={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(i),c.d(i,{__set_webpack_public_path__:()=>w,default:()=>y});var e=c(8891),t=c(6826),r=c(1315),n=c(3379),o=c.n(n),a=c(7795),s=c.n(a),u=c(569),l=c.n(u),p=c(3565),d=c.n(p),f=c(9216),m=c.n(f),b=c(4589),v=c.n(b),x=c(6681),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m(),o()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals;var g=c(726);const y=n=>{const[o,a]=(0,r.useState)();return e.React.createElement("div",{className:"variablesVisuales"},n.useMapWidgetIds&&1===n.useMapWidgetIds.length&&e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:n.useMapWidgetIds[0],onActiveViewChange:function(e){e&&a(e)}}),o?e.React.createElement(e.React.Fragment,null,e.React.createElement("div",{className:"recuadro"},e.React.createElement(g.Button,{className:"veinte",onClick:function(){o.view.map.layers.forEach((e=>{e.renderer.visualVariables=[{type:"color",field:"20 años",stops:[{value:0,color:"#5bc0eb"},{value:1,color:"#5bc0eb"}]}]}))}},"CO2 absorbido a los 20 años"),e.React.createElement(g.Button,{className:"treinta",onClick:function(){o.view.map.layers.forEach((e=>{e.renderer.visualVariables=[{type:"color",field:"30 años",stops:[{value:0,color:"#fde74c"},{value:1,color:"#fde74c"}]}]}))}},"CO2 absorbido a los 30 años"),e.React.createElement(g.Button,{className:"cuarenta",onClick:function(){o.view.map.layers.forEach((e=>{e.renderer.visualVariables=[{type:"color",field:"40 años",stops:[{value:0,color:"#9bc53d"},{value:1,color:"#9bc53d"}]}]}))}},"CO2 absorbido a los 40 años"))):e.React.createElement("h3",null,"Selecciona el Mapa"))};function w(e){c.p=e}})(),i})())}}}));
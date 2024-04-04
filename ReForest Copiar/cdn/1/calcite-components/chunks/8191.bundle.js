/*! For license information please see 8191.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8191],{8191:(e,t,i)=>{i.r(t),i.d(t,{calcite_sortable_list:()=>d});var s=i(8641),n=i(9336),r=i(5527),o=i(8046),a=i(2322);i(8274);const d=class{constructor(e){(0,s.r)(this,e),this.calciteListOrderChange=(0,s.c)(this,"calciteListOrderChange",6),this.items=[],this.mutationObserver=(0,r.c)("mutation",(()=>{this.setUpSorting()})),this.dragEnabled=!0,this.canPull=void 0,this.canPut=void 0,this.dragSelector=void 0,this.group=void 0,this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1}connectedCallback(){(0,o.d)(this)||(this.setUpSorting(),this.beginObserving(),(0,n.c)(this))}disconnectedCallback(){(0,o.d)(this)||((0,n.d)(this),(0,o.a)(this),this.endObserving())}componentDidRender(){(0,n.u)(this)}calciteHandleNudgeNextHandler(e){this.handleNudgeEvent(e)}onDragStart(){this.endObserving()}onDragEnd(){this.beginObserving()}onDragSort(){this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()}handleNudgeEvent(e){const{direction:t}=e.detail,i=e.composedPath().find((e=>e.matches(this.handleSelector))),s=this.items.find((t=>t.contains(i)||e.composedPath().includes(t))),n=this.items.length-1,r=this.items.indexOf(s);let o,d=!1;"up"===t?0===r?d=!0:o=r-1:r===n?o=0:r===n-1?d=!0:o=r+2,this.endObserving(),d?s.parentElement.appendChild(s):s.parentElement.insertBefore(s,this.items[o]),this.items=Array.from(this.el.children),this.beginObserving(),requestAnimationFrame((()=>(0,a.d)(i))),"activated"in i&&(i.activated=!0)}setUpSorting(){this.items=Array.from(this.el.children),(0,o.c)(this)}beginObserving(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}endObserving(){this.mutationObserver?.disconnect()}render(){const{layout:e}=this,t="horizontal"===e||!1;return(0,s.h)("div",{class:{container:!0,"container--vertical":!t,"container--horizontal":t}},(0,s.h)("slot",null))}get el(){return(0,s.a)(this)}};d.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}"},5527:(e,t,i)=>{function s(e,t,i){const s=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new s(t,i)}i.d(t,{c:()=>s})}}]);
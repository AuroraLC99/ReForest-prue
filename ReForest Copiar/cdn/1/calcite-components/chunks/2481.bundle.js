/*! For license information please see 2481.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2481],{2481:(e,s,t)=>{t.r(s),t.d(s,{calcite_scrim:()=>l});var i=t(8641),n=t(4879),a=t(339),c=t(5527),o=t(2322);t(8274);const l=class{constructor(e){(0,i.r)(this,e),this.resizeObserver=(0,c.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,o.x)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}connectedCallback(){(0,n.c)(this),(0,a.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,a.s)(this)}disconnectedCallback(){(0,n.d)(this),(0,a.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:s,messages:t}=this;return(0,i.h)("div",{class:"scrim"},s?(0,i.h)("calcite-loader",{label:t.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,(0,i.h)("div",{class:"content",hidden:!e},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<72?"s":e>=480?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return(0,i.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};l.style=":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"},339:(e,s,t)=>{t.d(s,{c:()=>d,d:()=>g,s:()=>l,u:()=>h});var i=t(8641),n=t(4879);const a={};function c(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await r(e,e.effectiveLocale),o(e)}async function r(e,s){const{el:t}=e,o=t.tagName.toLowerCase().replace("calcite-","");return async function(e,s){const t=`${s}_${e}`;return a[t]||(a[t]=fetch((0,i.g)(`./assets/${s}/t9n/messages_${e}.json`)).then((e=>(e.ok||c(),e.json()))).catch((()=>c()))),a[t]}((0,n.g)(s,"t9n"),o)}async function h(e,s){e.defaultMessages=await r(e,s),o(e)}function d(e){e.onMessagesChange=u}function g(e){e.onMessagesChange=void 0}function u(){o(this)}}}]);
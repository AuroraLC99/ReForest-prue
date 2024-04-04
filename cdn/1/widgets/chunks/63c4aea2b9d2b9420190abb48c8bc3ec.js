"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[89289],{89289:(e,t,s)=>{s.d(t,{e:()=>a,f:()=>_e,p:()=>pe});var r=s(58574),n=s(47817);const i="20210506",o="b02ca94fa7b6dac5fa148245a7cdc7caae582829";class a{constructor(){this._tasks=new Array}get length(){return this._tasks.length}push(e,t){return new Promise(((s,r)=>this._tasks.push(new l(s,r,e,t))))}unshift(e,t){return new Promise(((s,r)=>this._tasks.unshift(new l(s,r,e,t))))}process(){if(0===this._tasks.length)return!1;const e=this._tasks.shift();try{(0,n.ah)(e.signal);const t=e.callback();t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then?t.then(e.resolve,e.reject):e.resolve(t)}catch(t){e.reject(t)}return!0}cancelAll(){const e=(0,n.b9)();for(const t of this._tasks)t.reject(e);this._tasks.length=0}}class l{constructor(e,t,s,r){this.resolve=e,this.reject=t,this.callback=s,this.signal=r}}let h=class extends n.a1{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};(0,n.Z)([(0,n._)()],h.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,n.Z)([(0,n._)()],h.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),h=(0,n.Z)([(0,n.a0)("esri.views.support.DebugFlags")],h);const c=new h,u=n.S.getLogger("esri.views.support.Scheduler");var d,_;(_=d||(d={})).REMOTE_CLIENT="worker messages",_.SLIDE="slide",_.STAGE="stage",_.STREAM_DATA_LOADER="stream loader",_.ELEVATION_QUERY="elevation query",_.TERRAIN_SURFACE="terrain",_.SURFACE_GEOMETRY_UPDATES="surface geometry updates",_.GRAPHICS_CORE="Graphics3D",_.I3S_CONTROLLER="I3S",_.POINT_CLOUD_LAYER="point cloud",_.FEATURE_TILE_FETCHER="feature fetcher",_.LABELER="labeler",_.GRAPHICS_DECONFLICTOR="graphics deconflictor",_.FILTER_VISIBILITY="Graphics3D filter visibility",_.FEATURE_QUERY_ENGINE="feature query",_.SCALE_VISIBILITY="Graphics3D scale visibility",_.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",_.POINT_OF_INTEREST_FREQUENT="POI frequent",_.POINT_OF_INTEREST_INFREQUENT="POI infrequent",_.FEATURE_TILE_TREE="feature tile tree",_.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",_.ELEVATION_ALIGNMENT="elevation alignment",_.TEXT_TEXTURE_ATLAS="text texture atlas",_.TEXTURE_UNLOAD="texture unload",_.OVERLAY_MANAGER="overlay manager",_.LINE_OF_SIGHT_TOOL="line of sight tool",_.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",_.ELEVATION_PROFILE="elevation profile",_.SNAPPING="snapping",_[_.TEST_PRIO=1]="TEST_PRIO";const g={[d.REMOTE_CLIENT]:0,[d.SLIDE]:0,[d.STREAM_DATA_LOADER]:0,[d.ELEVATION_QUERY]:0,[d.STAGE]:1,[d.TERRAIN_SURFACE]:1,[d.SURFACE_GEOMETRY_UPDATES]:1,[d.GRAPHICS_CORE]:2,[d.I3S_CONTROLLER]:2,[d.POINT_CLOUD_LAYER]:2,[d.FEATURE_TILE_FETCHER]:2,[d.LABELER]:8,[d.GRAPHICS_DECONFLICTOR]:4,[d.FILTER_VISIBILITY]:4,[d.FEATURE_QUERY_ENGINE]:8,[d.SCALE_VISIBILITY]:4,[d.FRUSTUM_VISIBILITY]:4,[d.POINT_OF_INTEREST_FREQUENT]:6,[d.POINT_OF_INTEREST_INFREQUENT]:30,[d.FEATURE_TILE_TREE]:16,[d.FEATURE_TILE_TREE_ACTIVE]:0,[d.ELEVATION_ALIGNMENT]:12,[d.TEXT_TEXTURE_ATLAS]:12,[d.TEXTURE_UNLOAD]:12,[d.OVERLAY_MANAGER]:12,[d.LINE_OF_SIGHT_TOOL]:16,[d.LINE_OF_SIGHT_TOOL_INTERACTIVE]:0,[d.SNAPPING]:0};function p(e){return e in g?g[e]:"number"==typeof e?e:1}const E=1e3/30;var m,f;!function(e){let t=class extends n.a1{constructor(e){super(e),this.updating=!0,this.performanceInfo={total:new n.bh("total"),tasks:new Array},this._budget=null,this._state=1,this._tasks=new n.b5,this._runQueue=new n.b5,this._load=0,this._idleStateCallbacks=new n.b5,this._idleUpdatesStartFired=!1,this._maxReschedule=I,this._forceTask=!1,this._debug=!1,this._debugHandle=(0,n.b7)(c,"SCHEDULER_LOG_SLOW_TASKS",(e=>this._debug=e)),this._budget=new r(e.nowFunc),T.length=0;for(const e in d)v.set(d[e],this.performanceInfo.tasks.length),this.performanceInfo.tasks.push(new n.bh(d[e])),T.push(0);let t;const s=this;this._test={get state(){return(0,n.t)(t)?s._state:t},set state(e){t=e},FRAME_SAFETY_BUDGET:6.5,INTERACTING_BUDGET:E,IDLE_BUDGET:100,get budget(){return s._budget.budget},usedBudget:0,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}destroy(){this._debugHandle&&this._debugHandle.remove()}registerTask(e,t,r){const n=p(e),i=new s(this,e,t,r,n);return this._tasks.push(i),i}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),2===this.state&&this._idleUpdatesStartFired&&s.idleBegin();const r=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){r._idleUpdatesStartFired&&(s.idleEnd(),2===r._state&&e()),s.idleBegin=e},set idleEnd(e){s.idleEnd=e}}}get now(){return this.nowFunc()}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}get state(){return(0,n.t)(this._test.state)?this._state:this._test.state}updateBudget(e){this._test.usedBudget=0;let t=6.5,s=e.frameDuration,r=1;switch(this.state){case 2:t=0,s=Math.max(100,e.frameDuration),r=30;break;case 1:s=Math.max(E,e.frameDuration)}return s-=e.elapsedFrameTime+t,2!==this.state&&s<1&&!this._forceTask?(this._forceTask=!0,!1):(s=Math.max(s,r),this._budget.reset(s,this.state),this._maxReschedule=I,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e)}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))}_getState(e){if(this._runQueue.some((t=>t.name===e)))return f.SCHEDULED;let t=f.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=f.READY:t!==f.READY&&(t=f.WAITING))})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime)})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0))}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`})),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=.9*this._load+e*(1-.9)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.priority,!1))),this._tasks.forAll((e=>{0===e.priority&&e.needsUpdate&&!this._runQueue.some((t=>t===e))&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{s.needsUpdate&&0!==s.schedulePriority&&0!==s.priority&&(1===(e=!0,t=Math.max(t,s.priority),s.schedulePriority)?(s.schedulePriority=0,this._runQueue.push(s)):--s.schedulePriority)})),!e)return this.updating=!1,!1;this._maxReschedule===I&&(this._maxReschedule=t),--this._maxReschedule}return this.updating=!0,!0}_run(){const e=this._budget.now();for(let e=0;e<T.length;++e)T[e]=0;do{for(;this._runQueue.length>0;){const t=this._budget.now(),s=this._runQueue.pop();this._budget.resetProgress();try{s.update(this._budget)}catch(e){u.error(`Exception in task "${s.name}"`,e)}s.schedulePriority=s.priority;const r=this._budget.now()-t;if(s.runtime+=r,T[v.get(s.task)]+=r,this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",s.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return void this._recordFrameTaskTimes(T,this._budget.now()-e)}}while(this._schedule());this._recordFrameTaskTimes(T,this._budget.now()-e)}_recordFrameTaskTimes(e,t){for(let t=0;t<e.length;++t)this.performanceInfo.tasks[t].record(e[t]);this.performanceInfo.total.record(t)}get test(){return this._test}};(0,n.Z)([(0,n._)()],t.prototype,"updating",void 0),(0,n.Z)([(0,n._)()],t.prototype,"nowFunc",void 0),t=(0,n.Z)([(0,n.a0)("esri.views.support.Scheduler")],t),e.Scheduler=t;let s=class extends n.a1{constructor(e,t,s,r,n){super({}),this._scheduler=e,this.name=t,this.update=s,this._needsUpdateCB=r,this._priority=n,this.runtime=0,this._queue=new a,this.updating=!1,this.schedulePriority=this._priority}normalizeCtorArgs(){return{}}remove(){this.processQueue(b),this._scheduler.removeTask(this),this.schedule=k.schedule,this.reschedule=k.reschedule}get priority(){return this._priority}setPriority(e){this.name=e;const t=p(e);0!==this._priority&&0===this.schedulePriority||(this.schedulePriority=t),this._priority=t}get task(){return this.name}set task(e){this.setPriority(e)}get needsUpdate(){return this.updating||this._needsUpdateCB()}schedule(e,t){return this.updating=!0,this._queue.push(e,t)}reschedule(e,t){return this.updating=!0,this._queue.unshift(e,t)}processQueue(e){for(;!e.done&&this._queue.process();)e.madeProgress();this.updating=this._queue.length>0}};(0,n.Z)([(0,n._)()],s.prototype,"updating",void 0),s=(0,n.Z)([(0,n.a0)("esri.views.support.SchedulerTask")],s);class r{constructor(e){this.now=e,this._begin=0,this._budget=0,this._state=2,this._didWork=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&(this._didWork=!0),!0)}get done(){return this._didWork&&this.elapsed>=this._budget&&this._enabled}get budget(){return this._budget}madeProgress(){this._didWork=!0}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._didWork=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}get elapsed(){return this.now()-this._begin}resetProgress(){this._didWork=!1}get hasProgressed(){return this._didWork}}e.Budget=r}(m||(m={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(f||(f={}));const b=(()=>{const e=new m.Budget((()=>performance.now()));return e.enabled=!1,e})(),k=new class{remove(){}processQueue(){}schedule(e){return(0,n.bi)(e())}reschedule(e){return(0,n.bi)(e())}},I=Number.MAX_SAFE_INTEGER,v=new Map,T=new Array,w={geometryEngineWorker:()=>Promise.all([s.e(7972),s.e(54861)]).then(s.bind(s,37551)),CSVSourceWorker:()=>Promise.all([s.e(74970),s.e(19601),s.e(64465),s.e(88713),s.e(75117)]).then(s.bind(s,75117)),EdgeProcessingWorker:()=>Promise.all([s.e(35644),s.e(73724)]).then(s.bind(s,73724)),ElevationSamplerWorker:()=>s.e(4965).then(s.bind(s,4965)),GeoJSONSourceWorker:()=>Promise.all([s.e(74970),s.e(19601),s.e(64465),s.e(88713),s.e(21879),s.e(53682)]).then(s.bind(s,53682)),LercWorker:()=>s.e(29120).then(s.bind(s,29120)),MemorySourceWorker:()=>Promise.all([s.e(74970),s.e(19601),s.e(64465),s.e(88713),s.e(21879),s.e(51354)]).then(s.bind(s,51354)),PBFDecoderWorker:()=>s.e(19098).then(s.bind(s,19098)),Pipeline:()=>Promise.all([s.e(78624),s.e(74970),s.e(19601),s.e(64465),s.e(78899),s.e(88713),s.e(77232),s.e(33462)]).then(s.bind(s,56919)).then((function(e){return e.b})),PointCloudWorker:()=>Promise.all([s.e(74970),s.e(19601),s.e(70304)]).then(s.bind(s,70304)),RasterWorker:()=>Promise.all([s.e(88768),s.e(88007)]).then(s.bind(s,88007)),SceneLayerWorker:()=>s.e(39918).then(s.bind(s,39918)),WorkerTileHandler:()=>Promise.all([s.e(16301),s.e(10661),s.e(28560)]).then(s.bind(s,32689)),FeatureServiceSnappingSourceWorker:()=>Promise.all([s.e(78624),s.e(74970),s.e(19601),s.e(64465),s.e(78899),s.e(88713),s.e(80426)]).then(s.bind(s,80426))};var y;!function(e){e[e.HANDSHAKE=0]="HANDSHAKE",e[e.OPEN=1]="OPEN",e[e.OPENED=2]="OPENED",e[e.RESPONSE=3]="RESPONSE",e[e.INVOKE=4]="INVOKE",e[e.ABORT=5]="ABORT",e[e.CLOSE=6]="CLOSE",e[e.OPEN_PORT=7]="OPEN_PORT",e[e.ON=8]="ON"}(y||(y={}));let S=0;function P(){return S++}function R(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function O(e,t,s,r){if(t.type===y.OPEN_PORT)return void e.postMessage(t,[t.port]);if(t.type!==y.INVOKE&&t.type!==y.RESPONSE)return void e.postMessage(t);let n;!function(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}(s)?(n=N(r),t.data=s):(n=N(s.transferList),t.data=s.result),n?e.postMessage(t,n):e.postMessage(t)}function A(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function N(e){if(!e||!e.length)return null;if((0,r.t)("esri-workers-arraybuffer-transfer"))return e;const t=e.filter((e=>!function(e){return e instanceof ArrayBuffer||e&&e.constructor&&"ArrayBuffer"===e.constructor.name}(e)));return t.length?t:null}const{CLOSE:L,ABORT:C,INVOKE:M,RESPONSE:U,OPEN_PORT:D,ON:F}=y;class H{constructor(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}push(e){e.type===y.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class j{constructor(e,t){this._port=e,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new H((e=>this._onInvokeMessage(e))),this._messageQueue=new Array,this._client=t.client,this._onMessage=this._onMessage.bind(this),this._channel=t.channel,(0,n.H)(t.scheduler)&&(this._frameTask=t.scheduler.registerTask(d.REMOTE_CLIENT,(e=>this._update(e)),(()=>this._messageQueue.length>0))),this._port.addEventListener("message",this._onMessage),this._port.start()}static connect(e){const t=new MessageChannel;let s;s="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const r=new j(t.port1,{channel:t,client:s});return"object"==typeof s&&"remoteClient"in s&&(s.remoteClient=r),j.clients.set(r,s),t.port2}static loadWorker(e){const t=w[e];return t?t():Promise.resolve(null)}close(){this._post({type:L}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,t,s){const r=s&&s.signal,i=s&&s.transferList;if(!this._port)return Promise.reject(new n.s("worker:port-closed",`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const o=P();return new Promise(((s,a)=>{const l=(0,n.bj)(r,(()=>{var e;const t=this._outJobs.get(o);t&&(this._outJobs.delete(o),null==(e=t.abortHandle)||e.remove(),this._post({type:C,jobId:o}),a((0,n.b9)()))})),h={resolve:s,reject:a,abortHandle:l,debugInfo:e};this._outJobs.set(o,h),this._post({type:M,jobId:o,methodName:e,abortable:null!=r},t,i)}))}on(e,t){const s=new MessageChannel;function r(e){t(e.data)}return this._port.postMessage({type:y.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",r),s.port1.start(),{remove(){s.port1.postMessage({type:y.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",r)}}}openPort(){const e=new MessageChannel;return this._post({type:D,port:e.port2}),e.port1}_close(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{var t;null==(t=e.abortHandle)||t.remove(),e.reject((0,n.b9)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=null,this._frameTask=(0,n.bk)(this._frameTask)}_onMessage(e){(0,n.H)(this._frameTask)?this._messageQueue.push(e):this._processMessage(e)}_processMessage(e){const t=A(e);if(t)switch(t.type){case U:this._onResponseMessage(t);break;case M:this._invokeQueue.push(t);break;case C:this._onAbortMessage(t);break;case L:this._onCloseMessage();break;case D:this._onOpenPortMessage(t);break;case F:this._onOnMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,r=t.get(s);this._invokeQueue.push(e),r&&(r.controller&&r.controller.abort(),t.delete(s))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&j.clients.get(this)===e&&e.destroy(),j.clients.delete(this),e&&e.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:t,jobId:s,data:r,abortable:i}=e,o=i?(0,n.az)():null,a=this._inJobs;let l,h=this._client,c=h[t];try{if(!c&&t&&-1!==t.indexOf(".")){const e=t.split(".");for(let t=0;t<e.length-1;t++)h=h[e[t]],c=h[e[t+1]]}if("function"!=typeof c)throw new TypeError(`${t} is not a function`);l=c.call(h,r,{client:this,signal:o?o.signal:null})}catch(e){return void this._post({type:U,jobId:s,error:R(e)})}(0,n.Q)(l)?(a.set(s,{controller:o,promise:l}),l.then((e=>{a.has(s)&&(a.delete(s),this._post({type:U,jobId:s},e))}),(e=>{a.has(s)&&(a.delete(s),(0,n.aD)(e)||this._post({type:U,jobId:s,error:R(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:U,jobId:s},l)}_onOpenPortMessage(e){new j(e.port,{client:this._client})}_onOnMessage(e){const{port:t}=e,s=this._client.on(e.eventType,(e=>{t.postMessage(e)})),r=(0,n.bl)(e.port,"message",(e=>{A(e).type===y.CLOSE&&(r.remove(),s.remove(),t.close())}))}_onResponseMessage(e){var t;const{jobId:s,error:r,data:i}=e,o=this._outJobs;if(!o.has(s))return;const a=o.get(s);o.delete(s),null==(t=a.abortHandle)||t.remove(),r?a.reject(n.s.fromJSON(JSON.parse(r))):a.resolve(i)}_update(e){for(;!e.done&&this._messageQueue.length>0;)this._processMessage(this._messageQueue.shift()),e.madeProgress()}_post(e,t,s){return O(this._port,e,t,s)}}j.kernelInfo={revision:o,version:n.N,buildDate:i},j.clients=new Map;const J=n.S.getLogger("esri.core.workers.Connection");class W{constructor(){this._clients=new Array,this._clientPromises=new Array,this._clientIdx=0}destroy(){this.close()}get closed(){return!this._clients||!this._clients.length}open(e,t){return new Promise(((s,r)=>{let i=!0;const o=e=>{(0,n.ah)(t.signal),i&&(i=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length;for(let i=0;i<e.length;++i){const a=e[i];(0,n.Q)(a)?this._clientPromises[i]=a.then((e=>(this._clients[i]=new j(e,t),o(s),this._clients[i])),(()=>(o(r),null))):(this._clients[i]=new j(a,t),this._clientPromises[i]=Promise.resolve(this._clients[i]),o(s))}}))}broadcast(e,t,s){const r=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const i=this._clientPromises[n];r[n]=i.then((r=>r.invoke(e,t,s)))}return r}close(){for(const e of this._clientPromises)e.then((e=>e.close()));this._clients.length=0,this._clientPromises.length=0}getAvailableClient(){let e;for(let t=0;t<this._clients.length;++t){const s=this._clients[t];if(s){if(!s.isBusy())return Promise.resolve(s)}else e=e||[],e.push(this._clientPromises[t])}return e?Promise.race(e):(this._clientIdx=(this._clientIdx+1)%this._clients.length,Promise.resolve(this._clients[this._clientIdx]))}invoke(e,t,s){let r=null;return Array.isArray(s)?(J.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),r={transferList:s}):r=s,this.closed?Promise.reject(new Error("Connection closed")):this.getAvailableClient().then((s=>s.invoke(e,t,r)))}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,n.bm)(this._clients.map((s=>s.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then((n=>{t[r]=n.openPort(),0==--s&&e(t)}))}))}get test(){return{numClients:this._clients.length}}}const G={};function B(e){var t;const s={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages&&e.packages.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(s.async=!0),e.hasOwnProperty("isDebug")||(s.isDebug=!1),e.baseUrl||(s.baseUrl=G.baseUrl),null==(t=G.packages)||t.forEach((e=>{!function(e,t){for(const s of e)if(s.name===t.name)return;e.push(t)}(s.packages,e)})),s}class x{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...s)=>e[t](...s)}))}}const Q=r.e.MutationObserver||r.e.WebKitMutationObserver,V=function(){let e;if(r.e.process&&r.e.process.nextTick)e=e=>{r.e.process.nextTick(e)};else if(r.e.Promise)e=e=>{r.e.Promise.resolve().then(e)};else if(Q){const t=[],s=document.createElement("div");new Q((()=>{for(;t.length>0;)t.shift()()})).observe(s,{attributes:!0}),e=e=>{t.push(e),s.setAttribute("queueStatus","1")}}return e}(),Y=(()=>{const e=r.e.MessageEvent;try{new e("message",{data:null})}catch{return(e,t={})=>{const{data:s,bubbles:r=!1,cancelable:n=!1}=t,i=document.createEvent("Event");return i.initEvent(e,r,n),i.data=s,i}}return(t,s)=>new e(t,s)})();class q{constructor(){this._dispatcher=new x,this._workerPostMessage({type:y.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){V((()=>{this._workerMessageHandler(Y("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,s){this._dispatcher.addEventListener(e,t,s)}removeEventListener(e,t,s){this._dispatcher.removeEventListener(e,t,s)}_workerPostMessage(e){V((()=>{this.dispatchEvent(Y("message",{data:e}))}))}async _workerMessageHandler(e){const t=A(e);if(t&&t.type===y.OPEN){const{modulePath:e,jobId:s}=t;let r=await j.loadWorker(e);r||(r=await import(e));const n=j.connect(r);this._workerPostMessage({type:y.OPENED,jobId:s,data:n})}}}const $=n.S.getLogger("esri.core.workers");r.t.add("esri-workers-arraybuffer-transfer",!(0,r.t)("safari")||(0,r.t)("safari")>=12);const{HANDSHAKE:K}=y;let Z,X;const z="Failed to create Worker. Fallback to execute module in main thread";async function ee(e){return new Promise((t=>{function s(n){const i=A(n);i&&i.type===K&&(e.removeEventListener("message",s),e.removeEventListener("error",r),t(e))}function r(t){t.preventDefault(),e.removeEventListener("message",s),e.removeEventListener("error",r),$.warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new q).addEventListener("message",s),e.addEventListener("error",r)}e.addEventListener("message",s),e.addEventListener("error",r)}))}function te(){let e;if(null!=n.aw.default){const t={...n.aw};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(n.aw));e.assetsPath=(0,n.a9)(e.assetsPath),e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,r.b)(),e.has={"csp-restrictions":(0,r.t)("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,r.t)("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":(0,r.t)("esri-2d-query-centroid-enabled"),"featurelayer-pbf":(0,r.t)("featurelayer-pbf"),"featurelayer-snapshot-point-threshold":(0,r.t)("featurelayer-snapshot-point-threshold"),"esri-atomics":(0,r.t)("esri-atomics"),"esri-shared-array-buffer":(0,r.t)("esri-shared-array-buffer"),"esri-tiles-debug":(0,r.t)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,r.t)("esri-workers-arraybuffer-transfer"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=(0,n.a9)(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=(0,n.a9)(e.workers.workerPath):e.workers.workerPath=(0,n.a9)((0,n.a7)("esri/core/workers/RemoteClient.js"));const t=n.aw.workers.loaderConfig,s=B({baseUrl:null==t?void 0:t.baseUrl,locale:(0,r.b)(),has:{"csp-restrictions":(0,r.t)("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==t?void 0:t.has},map:{...null==t?void 0:t.map},paths:{...null==t?void 0:t.paths},packages:(null==t?void 0:t.packages)||[]}),a={version:n.N,buildDate:i,revision:o};return JSON.stringify({esriConfig:e,loaderConfig:s,kernelInfo:a})}let se=0;const re=n.S.getLogger("esri.core.workers"),{ABORT:ne,INVOKE:ie,OPEN:oe,OPENED:ae,RESPONSE:le}=y;class he{constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),re.error(e)}))}static async create(e){const t=await async function(){if(!(0,r.t)("esri-workers"))return ee(new q);if(!Z&&!X)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace('"{CONFIGURATION}"',`'${te()}'`);Z=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){X=e||{}}let e;if(Z)try{e=new Worker(Z,{name:"esri-worker-"+se++})}catch(t){$.warn(z,X),e=new q}else $.warn(z,X),e=new q;return ee(e)}();return new he(t,e)}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:s}=t,r=P();return new Promise(((t,i)=>{const o={resolve:t,reject:i,abortHandle:(0,n.bj)(s,(()=>{this._outJobs.delete(r),this._post({type:ne,jobId:r})}))};this._outJobs.set(r,o),this._post({type:oe,jobId:r,modulePath:e})}))}_onMessage(e){const t=A(e);if(t)switch(t.type){case ae:this._onOpenedMessage(t);break;case le:this._onResponseMessage(t);break;case ne:this._onAbortMessage(t);break;case ie:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,r=t.get(s);r&&(r.controller&&r.controller.abort(),t.delete(s))}_onInvokeMessage(e){const{methodName:t,jobId:s,data:r,abortable:i}=e,o=i?(0,n.az)():null,a=this._inJobs,l=n.bn[t];let h;try{if("function"!=typeof l)throw new TypeError(`${t} is not a function`);h=l.call(null,r,{signal:o?o.signal:null})}catch(e){return void this._post({type:le,jobId:s,error:R(e)})}(0,n.Q)(h)?(a.set(s,{controller:o,promise:h}),h.then((e=>{a.has(s)&&(a.delete(s),this._post({type:le,jobId:s},e))}),(e=>{a.has(s)&&(a.delete(s),e||(e={message:"Error encountered at method"+t}),(0,n.aD)(e)||this._post({type:le,jobId:s,error:R(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:le,jobId:s},h)}_onOpenedMessage(e){var t;const{jobId:s,data:r}=e,n=this._outJobs.get(s);n&&(this._outJobs.delete(s),null==(t=n.abortHandle)||t.remove(),n.resolve(r))}_onResponseMessage(e){var t;const{jobId:s,error:r,data:i}=e,o=this._outJobs.get(s);o&&(this._outJobs.delete(s),null==(t=o.abortHandle)||t.remove(),r?o.reject(n.s.fromJSON(JSON.parse(r))):o.resolve(i))}_post(e,t,s){return O(this.worker,e,t,s)}}let ce=(0,r.t)("esri-workers-debug")?1:(0,r.t)("host-browser")?navigator.hardwareConcurrency-1:0;ce||(ce=(0,r.t)("safari")&&(0,r.t)("mac")||(0,r.t)("trident")?7:2);let ue=0;const de=[];function _e(e,t){return ge(e,{client:t})}async function ge(e,t){const s=new W;return await s.open(e,t),s}async function pe(e,t={}){if("string"!=typeof e)throw new n.s("workers:undefined-module","modulePath is missing");let s=t.strategy||"distributed";if((0,r.t)("host-webworker")&&!(0,r.t)("esri-workers")&&(s="local"),"local"===s){let s=await j.loadWorker(e);s||(s=await import(e)),(0,n.ah)(t.signal);const r=t.client||s;return ge([j.connect(s)],{...t,client:r})}if(await async function(){if(Ee)return Ee;(0,n.az)();const e=[];for(let t=0;t<ce;t++){const s=he.create(t).then((e=>(de[t]=e,e)));e.push(s)}return Ee=Promise.all(e),Ee}(),(0,n.ah)(t.signal),"dedicated"===s){const s=ue++%ce;return ge([await de[s].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const s=Math.min(t.maxNumWorkers,ce);if(s<ce){const r=new Array(s);for(let n=0;n<s;++n){const s=ue++%ce;r[n]=de[s].open(e,t)}return ge(r,t)}}return ge(de.map((s=>s.open(e,t))),t)}let Ee=null}}]);
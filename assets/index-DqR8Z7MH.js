(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var Wr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(t,e){if(!t)throw $t(e)},$t=function(t){return new Error("Firebase Database ("+Zo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eu=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(n[u],n[d],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ea(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new tu;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ta=function(t){const e=ea(t);return Ns.encodeByteArray(e,!0)},zn=function(t){return ta(t).replace(/\./g,"")},qn=function(t){try{return Ns.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){return na(void 0,t)}function na(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iu(n)||(t[n]=na(t[n],e[n]));return t}function iu(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=()=>su().__FIREBASE_DEFAULTS__,ou=()=>{if(typeof process>"u"||typeof Wr>"u")return;const t=Wr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},au=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qn(t[1]);return e&&JSON.parse(e)},Ps=()=>{try{return ru()||ou()||au()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ia=t=>{var e,n;return(n=(e=Ps())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lu=t=>{const e=ia(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},sa=()=>{var t;return(t=Ps())===null||t===void 0?void 0:t.config},ra=t=>{var e;return(e=Ps())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zn(JSON.stringify(n)),zn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Os(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function uu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function du(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hu(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fu(){return Zo.NODE_ADMIN===!0}function pu(){try{return typeof indexedDB=="object"}catch{return!1}}function mu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="FirebaseError";class tt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=_u,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?gu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new tt(s,a,i)}}function gu(t,e){return t.replace(vu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const vu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){return JSON.parse(t)}function W(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=an(qn(r[0])||""),n=an(qn(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},yu=function(t){const e=aa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bu=function(t){const e=aa(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function at(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ns(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gn(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Kn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Vr(r)&&Vr(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Vr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Eu(t,e){const n=new Iu(t,e);return n.subscribe.bind(n)}class Iu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Cu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Wi),s.error===void 0&&(s.error=Wi),s.complete===void 0&&(s.complete=Wi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wi(){}function vi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yi=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return t&&t._delegate?t._delegate:t}class lt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ft;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Au(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ku(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ku(t){return t===it?void 0:t}function Au(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const Nu={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Pu=k.INFO,Ou={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Mu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Ou[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ms{constructor(e){this.name=e,this._logLevel=Pu,this._logHandler=Mu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Lu=(t,e)=>e.some(n=>t instanceof n);let Hr,jr;function Du(){return Hr||(Hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xu(){return jr||(jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const la=new WeakMap,is=new WeakMap,ca=new WeakMap,Vi=new WeakMap,Ls=new WeakMap;function $u(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(He(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&la.set(n,t)}).catch(()=>{}),Ls.set(e,t),e}function Fu(t){if(is.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});is.set(t,e)}let ss={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ca.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return He(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uu(t){ss=t(ss)}function Bu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Hi(this),e,...n);return ca.set(i,e.sort?e.sort():[e]),He(i)}:xu().includes(t)?function(...e){return t.apply(Hi(this),e),He(la.get(this))}:function(...e){return He(t.apply(Hi(this),e))}}function Wu(t){return typeof t=="function"?Bu(t):(t instanceof IDBTransaction&&Fu(t),Lu(t,Du())?new Proxy(t,ss):t)}function He(t){if(t instanceof IDBRequest)return $u(t);if(Vi.has(t))return Vi.get(t);const e=Wu(t);return e!==t&&(Vi.set(t,e),Ls.set(e,t)),e}const Hi=t=>Ls.get(t);function Vu(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=He(o);return i&&o.addEventListener("upgradeneeded",l=>{i(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hu=["get","getKey","getAll","getAllKeys","count"],ju=["put","add","delete","clear"],ji=new Map;function zr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ju.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Hu.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ji.set(e,r),r}Uu(t=>({...t,get:(e,n,i)=>zr(e,n)||t.get(e,n,i),has:(e,n)=>!!zr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function qu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rs="@firebase/app",qr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Ms("@firebase/app"),Gu="@firebase/app-compat",Ku="@firebase/analytics-compat",Yu="@firebase/analytics",Qu="@firebase/app-check-compat",Ju="@firebase/app-check",Xu="@firebase/auth",Zu="@firebase/auth-compat",ed="@firebase/database",td="@firebase/data-connect",nd="@firebase/database-compat",id="@firebase/functions",sd="@firebase/functions-compat",rd="@firebase/installations",od="@firebase/installations-compat",ad="@firebase/messaging",ld="@firebase/messaging-compat",cd="@firebase/performance",ud="@firebase/performance-compat",dd="@firebase/remote-config",hd="@firebase/remote-config-compat",fd="@firebase/storage",pd="@firebase/storage-compat",md="@firebase/firestore",_d="@firebase/vertexai-preview",gd="@firebase/firestore-compat",vd="firebase",yd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]",bd={[rs]:"fire-core",[Gu]:"fire-core-compat",[Yu]:"fire-analytics",[Ku]:"fire-analytics-compat",[Ju]:"fire-app-check",[Qu]:"fire-app-check-compat",[Xu]:"fire-auth",[Zu]:"fire-auth-compat",[ed]:"fire-rtdb",[td]:"fire-data-connect",[nd]:"fire-rtdb-compat",[id]:"fire-fn",[sd]:"fire-fn-compat",[rd]:"fire-iid",[od]:"fire-iid-compat",[ad]:"fire-fcm",[ld]:"fire-fcm-compat",[cd]:"fire-perf",[ud]:"fire-perf-compat",[dd]:"fire-rc",[hd]:"fire-rc-compat",[fd]:"fire-gcs",[pd]:"fire-gcs-compat",[md]:"fire-fst",[gd]:"fire-fst-compat",[_d]:"fire-vertex","fire-js":"fire-js",[vd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map,wd=new Map,as=new Map;function Gr(t,e){try{t.container.addComponent(e)}catch(n){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(as.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,t);for(const n of Yn.values())Gr(n,t);for(const n of wd.values())Gr(n,t);return!0}function Ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ue(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new wn("app","Firebase",Ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=yd;function ua(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:os,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw je.create("bad-app-name",{appName:String(s)});if(n||(n=sa()),!n)throw je.create("no-options");const r=Yn.get(s);if(r){if(Kn(n,r.options)&&Kn(i,r.config))return r;throw je.create("duplicate-app",{appName:s})}const o=new Ru(s);for(const l of as.values())o.addComponent(l);const a=new Id(n,i,o);return Yn.set(s,a),a}function da(t=os){const e=Yn.get(t);if(!e&&t===os&&sa())return ua();if(!e)throw je.create("no-app",{appName:t});return e}function ze(t,e,n){var i;let s=(i=bd[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(a.join(" "));return}kt(new lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebase-heartbeat-database",Sd=1,ln="firebase-heartbeat-store";let zi=null;function ha(){return zi||(zi=Vu(Cd,Sd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ln)}catch(n){console.warn(n)}}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),zi}async function Td(t){try{const n=(await ha()).transaction(ln),i=await n.objectStore(ln).get(fa(t));return await n.done,i}catch(e){if(e instanceof tt)Ne.warn(e.message);else{const n=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ne.warn(n.message)}}}async function Kr(t,e){try{const i=(await ha()).transaction(ln,"readwrite");await i.objectStore(ln).put(e,fa(t)),await i.done}catch(n){if(n instanceof tt)Ne.warn(n.message);else{const i=je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ne.warn(i.message)}}}function fa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=1024,Ad=30*24*60*60*1e3;class Rd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ad}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ne.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yr(),{heartbeatsToSend:i,unsentEntries:s}=Nd(this._heartbeatsCache.heartbeats),r=zn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ne.warn(n),""}}}function Yr(){return new Date().toISOString().substring(0,10)}function Nd(t,e=kd){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Qr(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Pd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?mu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Td(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qr(t){return zn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){kt(new lt("platform-logger",e=>new zu(e),"PRIVATE")),kt(new lt("heartbeat",e=>new Rd(e),"PRIVATE")),ze(rs,qr,t),ze(rs,qr,"esm2017"),ze("fire-js","")}Od("");var Md="firebase",Ld="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Md,Ld,"app");function xs(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function pa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dd=pa,ma=new wn("auth","Firebase",pa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Ms("@firebase/auth");function xd(t,...e){Qn.logLevel<=k.WARN&&Qn.warn(`Auth (${Bt}): ${t}`,...e)}function Bn(t,...e){Qn.logLevel<=k.ERROR&&Qn.error(`Auth (${Bt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,...e){throw $s(t,...e)}function be(t,...e){return $s(t,...e)}function _a(t,e,n){const i=Object.assign(Object.assign({},Dd()),{[e]:n});return new wn("auth","Firebase",i).create(e,{appName:t.name})}function ot(t){return _a(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $s(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ma.create(t,...e)}function b(t,e,...n){if(!t)throw $s(e,...n)}function Se(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bn(e),new Error(e)}function Oe(t,e){t||Se(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $d(){return Jr()==="http:"||Jr()==="https:"}function Jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($d()||du()||"connection"in navigator)?navigator.onLine:!0}function Ud(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.shortDelay=e,this.longDelay=n,Oe(n>e,"Short delay should be less than long delay!"),this.isMobile=Os()||oa()}get(){return Fd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){Oe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new En(3e4,6e4);function Us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wt(t,e,n,i,s={}){return va(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ut(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return uu()||(c.referrerPolicy="no-referrer"),ga.fetch()(ya(t,t.config.apiHost,n,a),c)})}async function va(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bd),e);try{const s=new Hd(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Dn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dn(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _a(t,u,c);Pe(t,u)}}catch(s){if(s instanceof tt)throw s;Pe(t,"network-request-failed",{message:String(s)})}}async function Vd(t,e,n,i,s={}){const r=await Wt(t,e,n,i,s);return"mfaPendingCredential"in r&&Pe(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ya(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Fs(t.config,s):`${t.config.apiScheme}://${s}`}class Hd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(be(this.auth,"network-request-failed")),Wd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=be(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jd(t,e){return Wt(t,"POST","/v1/accounts:delete",e)}async function ba(t,e){return Wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zd(t,e=!1){const n=Q(t),i=await n.getIdToken(e),s=Bs(i);b(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Xt(qi(s.auth_time)),issuedAtTime:Xt(qi(s.iat)),expirationTime:Xt(qi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qi(t){return Number(t)*1e3}function Bs(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Bn("JWT malformed, contained fewer than 3 sections"),null;try{const s=qn(n);return s?JSON.parse(s):(Bn("Failed to decode base64 JWT payload"),null)}catch(s){return Bn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xr(t){const e=Bs(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof tt&&qd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function qd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xt(this.lastLoginAt),this.creationTime=Xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t){var e;const n=t.auth,i=await t.getIdToken(),s=await cn(t,ba(n,{idToken:i}));b(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?wa(r.providerUserInfo):[],a=Yd(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new cs(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Kd(t){const e=Q(t);await Jn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yd(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function wa(t){return t.map(e=>{var{providerId:n}=e,i=xs(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e){const n=await va(t,{},async()=>{const i=Ut({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ya(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ga.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jd(t,e){return Wt(t,"POST","/v2/accounts:revokeToken",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Xr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Qd(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new It;return i&&(b(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(b(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(b(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new It,this.toJSON())}_performRefresh(){return Se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Te{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=xs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new cs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await cn(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zd(this,e)}reload(){return Kd(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Te(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Jn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await cn(this,jd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,J=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:he,emailVerified:ye,isAnonymous:Ur,providerData:Ui,stsTokenManager:Br}=n;b(he&&Br,e,"internal-error");const Xc=It.fromJSON(this.name,Br);b(typeof he=="string",e,"internal-error"),Le(d,e.name),Le(h,e.name),b(typeof ye=="boolean",e,"internal-error"),b(typeof Ur=="boolean",e,"internal-error"),Le(f,e.name),Le(m,e.name),Le(v,e.name),Le(w,e.name),Le(U,e.name),Le(J,e.name);const Bi=new Te({uid:he,auth:e,email:h,emailVerified:ye,displayName:d,isAnonymous:Ur,photoURL:m,phoneNumber:f,tenantId:v,stsTokenManager:Xc,createdAt:U,lastLoginAt:J});return Ui&&Array.isArray(Ui)&&(Bi.providerData=Ui.map(Zc=>Object.assign({},Zc))),w&&(Bi._redirectEventId=w),Bi}static async _fromIdTokenResponse(e,n,i=!1){const s=new It;s.updateFromServerResponse(n);const r=new Te({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Jn(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];b(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?wa(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new It;a.updateFromIdToken(i);const l=new Te({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new cs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Map;function ke(t){Oe(t instanceof Function,"Expected a class definition");let e=Zr.get(t);return e?(Oe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ea.type="NONE";const eo=Ea;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ct{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Wn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Wn("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Te._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ct(ke(eo),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ke(eo);const o=Wn(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Te._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ct(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ct(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ta(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ia(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aa(e))return"Blackberry";if(Ra(e))return"Webos";if(Ca(e))return"Safari";if((e.includes("chrome/")||Sa(e))&&!e.includes("edge/"))return"Chrome";if(ka(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ia(t=te()){return/firefox\//i.test(t)}function Ca(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sa(t=te()){return/crios\//i.test(t)}function Ta(t=te()){return/iemobile/i.test(t)}function ka(t=te()){return/android/i.test(t)}function Aa(t=te()){return/blackberry/i.test(t)}function Ra(t=te()){return/webos/i.test(t)}function Ws(t=te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xd(t=te()){var e;return Ws(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zd(){return hu()&&document.documentMode===10}function Na(t=te()){return Ws(t)||ka(t)||Ra(t)||Aa(t)||/windows phone/i.test(t)||Ta(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e=[]){let n;switch(t){case"Browser":n=to(te());break;case"Worker":n=`${to(te())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e={}){return Wt(t,"GET","/v2/passwordPolicy",Us(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=6;class ih{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new no(this),this.idTokenSubscription=new no(this),this.beforeStateQueue=new eh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ma,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ke(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ct.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ba(this,{idToken:e}),i=await Te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ud()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ot(this));const n=e?Q(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await th(this),n=new ih(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Jd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ke(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Ct.create(this,[ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return Q(t)}class no{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rh(t){Hs=t}function oh(t){return Hs.loadJS(t)}function ah(){return Hs.gapiScript}function lh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){const n=Ds(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Kn(r,e??{}))return s;Pe(s,"already-initialized")}return n.initialize({options:e})}function uh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function dh(t,e,n){const i=Vs(t);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Oa(e),{host:o,port:a}=hh(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),fh()}function Oa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hh(t){const e=Oa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:io(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:io(o)}}}function io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Se("not implemented")}_getIdTokenResponse(e){return Se("not implemented")}_linkToIdToken(e,n){return Se("not implemented")}_getReauthenticationResolver(e){return Se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e){return Vd(t,"POST","/v1/accounts:signInWithIdp",Us(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="http://localhost";class ct extends Ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=xs(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ct(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return St(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,St(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,St(e,n)}buildRequest(){const e={requestUri:ph,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ut(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends La{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends In{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends In{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ct._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return xe.credential(n,i)}catch{return null}}}xe.GOOGLE_SIGN_IN_METHOD="google.com";xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends In{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends In{constructor(){super("twitter.com")}static credential(e,n){return ct._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Fe.credential(n,i)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Te._fromIdTokenResponse(e,i,s),o=so(i);return new At({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=so(i);return new At({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function so(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends tt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Xn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Xn(e,n,i,s)}}function Da(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Xn._fromErrorAndOperation(t,r,e,i):r})}async function mh(t,e,n=!1){const i=await cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t,e,n=!1){const{auth:i}=t;if(Ue(i.app))return Promise.reject(ot(i));const s="reauthenticate";try{const r=await cn(t,Da(i,s,e,t),n);b(r.idToken,i,"internal-error");const o=Bs(r.idToken);b(o,i,"internal-error");const{sub:a}=o;return b(t.uid===a,i,"user-mismatch"),At._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(t,e,n=!1){if(Ue(t.app))return Promise.reject(ot(t));const i="signIn",s=await Da(t,i,e),r=await At._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function vh(t,e,n,i){return Q(t).onIdTokenChanged(e,n,i)}function yh(t,e,n){return Q(t).beforeAuthStateChanged(e,n)}function bh(t,e,n,i){return Q(t).onAuthStateChanged(e,n,i)}const Zn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zn,"1"),this.storage.removeItem(Zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=1e3,Eh=10;class $a extends xa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Na(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Zd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Eh):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},wh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$a.type="LOCAL";const Ih=$a;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends xa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fa.type="SESSION";const Ua=Fa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new bi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Ch(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=js("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return window}function Th(t){we().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return typeof we().WorkerGlobalScope<"u"&&typeof we().importScripts=="function"}async function kh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ah(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rh(){return Ba()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="firebaseLocalStorageDb",Nh=1,ei="firebaseLocalStorage",Va="fbase_key";class Cn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wi(t,e){return t.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function Ph(){const t=indexedDB.deleteDatabase(Wa);return new Cn(t).toPromise()}function us(){const t=indexedDB.open(Wa,Nh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ei,{keyPath:Va})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ei)?e(i):(i.close(),await Ph(),e(await us()))})})}async function ro(t,e,n){const i=wi(t,!0).put({[Va]:e,value:n});return new Cn(i).toPromise()}async function Oh(t,e){const n=wi(t,!1).get(e),i=await new Cn(n).toPromise();return i===void 0?null:i.value}function oo(t,e){const n=wi(t,!0).delete(e);return new Cn(n).toPromise()}const Mh=800,Lh=3;class Ha{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await us(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Lh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ba()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bi._getInstance(Rh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kh(),!this.activeServiceWorker)return;this.sender=new Sh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ah()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await us();return await ro(e,Zn,"1"),await oo(e,Zn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ro(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Oh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=wi(s,!1).getAll();return new Cn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ha.type="LOCAL";const Dh=Ha;new En(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){return e?ke(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends Ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return St(e,this._buildIdpRequest())}_linkToIdToken(e,n){return St(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return St(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $h(t){return gh(t.auth,new zs(t),t.bypassAuthState)}function Fh(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),_h(n,new zs(t),t.bypassAuthState)}async function Uh(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),mh(n,new zs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $h;case"linkViaPopup":case"linkViaRedirect":return Uh;case"reauthViaPopup":case"reauthViaRedirect":return Fh;default:Pe(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new En(2e3,1e4);class wt extends ja{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=js();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bh.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="pendingRedirect",Vn=new Map;class Vh extends ja{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Vn.get(this.auth._key());if(!e){try{const i=await Hh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Vn.set(this.auth._key(),e)}return this.bypassAuthState||Vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hh(t,e){const n=qh(e),i=zh(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function jh(t,e){Vn.set(t._key(),e)}function zh(t){return ke(t._redirectPersistence)}function qh(t){return Wn(Wh,t.config.apiKey,t.name)}async function Gh(t,e,n=!1){if(Ue(t.app))return Promise.reject(ot(t));const i=Vs(t),s=xh(i,e),o=await new Vh(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=10*60*1e3;class Yh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!za(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kh&&this.cachedEventUids.clear(),this.cachedEventUids.has(ao(e))}saveEventToCache(e){this.cachedEventUids.add(ao(e)),this.lastProcessedEventTime=Date.now()}}function ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function za({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return za(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e={}){return Wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zh=/^https?/;async function ef(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jh(t);for(const n of e)try{if(tf(n))return}catch{}Pe(t,"unauthorized-domain")}function tf(t){const e=ls(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Zh.test(n))return!1;if(Xh.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new En(3e4,6e4);function lo(){const t=we().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sf(t){return new Promise((e,n)=>{var i,s,r;function o(){lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lo(),n(be(t,"network-request-failed"))},timeout:nf.get()})}if(!((s=(i=we().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=we().gapi)===null||r===void 0)&&r.load)o();else{const a=lh("iframefcb");return we()[a]=()=>{gapi.load?o():n(be(t,"network-request-failed"))},oh(`${ah()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hn=null,e})}let Hn=null;function rf(t){return Hn=Hn||sf(t),Hn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new En(5e3,15e3),af="__/auth/iframe",lf="emulator/auth/iframe",cf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function df(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fs(e,lf):`https://${t.config.authDomain}/${af}`,i={apiKey:e.apiKey,appName:t.name,v:Bt},s=uf.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ut(i).slice(1)}`}async function hf(t){const e=await rf(t),n=we().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:df(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=be(t,"network-request-failed"),a=we().setTimeout(()=>{r(o)},of.get());function l(){we().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pf=500,mf=600,_f="_blank",gf="http://localhost";class co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vf(t,e,n,i=pf,s=mf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ff),{width:i.toString(),height:s.toString(),top:r,left:o}),c=te().toLowerCase();n&&(a=Sa(c)?_f:n),Ia(c)&&(e=e||gf,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(Xd(c)&&a!=="_self")return yf(e||"",a),new co(null);const d=window.open(e||"",a,u);b(d,t,"popup-blocked");try{d.focus()}catch{}return new co(d)}function yf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="__/auth/handler",wf="emulator/auth/handler",Ef=encodeURIComponent("fac");async function uo(t,e,n,i,s,r){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Bt,eventId:s};if(e instanceof La){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ns(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof In){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ef}=${encodeURIComponent(l)}`:"";return`${If(t)}?${Ut(a).slice(1)}${c}`}function If({config:t}){return t.emulator?Fs(t,wf):`https://${t.authDomain}/${bf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class Cf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ua,this._completeRedirectFn=Gh,this._overrideRedirectResult=jh}async _openPopup(e,n,i,s){var r;Oe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await uo(e,n,i,ls(),s);return vf(e,o,js())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await uo(e,n,i,ls(),s);return Th(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Oe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await hf(e),i=new Yh(e);return n.register("authEvent",s=>(b(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gi,{type:Gi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Gi];o!==void 0&&n(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ef(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Na()||Ca()||Ws()}}const Sf=Cf;var ho="@firebase/auth",fo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Af(t){kt(new lt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pa(t)},c=new sh(i,s,r,l);return uh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),kt(new lt("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(i=>new Tf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(ho,fo,kf(t)),ze(ho,fo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=5*60,Nf=ra("authIdTokenMaxAge")||Rf;let po=null;const Pf=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Nf)return;const s=n==null?void 0:n.token;po!==s&&(po=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Of(t=da()){const e=Ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ch(t,{popupRedirectResolver:Sf,persistence:[Dh,Ih,Ua]}),i=ra("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Pf(r.toString());yh(n,o,()=>o(n.currentUser)),vh(n,a=>o(a))}}const s=ia("auth");return s&&dh(n,`http://${s}`),n}function Mf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rh({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=be("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Mf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Af("Browser");var mo={};const _o="@firebase/database",go="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa="";function Lf(t){qa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:an(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Df(e)}}catch{}return new xf},rt=Ga("localStorage"),$f=Ga("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Ms("@firebase/database"),Ka=function(){let t=1;return function(){return t++}}(),Ya=function(t){const e=Su(t),n=new wu;n.update(e);const i=n.digest();return Ns.encodeByteArray(i)},Sn=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Sn.apply(null,i):typeof i=="object"?e+=W(i):e+=i,e+=" "}return e};let Zt=null,vo=!0;const Ff=function(t,e){_(!0,"Can't turn on custom loggers persistently."),Tt.logLevel=k.VERBOSE,Zt=Tt.log.bind(Tt)},G=function(...t){if(vo===!0&&(vo=!1,Zt===null&&$f.get("logging_enabled")===!0&&Ff()),Zt){const e=Sn.apply(null,t);Zt(e)}},Tn=function(t){return function(...e){G(t,...e)}},ds=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sn(...t);Tt.error(e)},Me=function(...t){const e=`FIREBASE FATAL ERROR: ${Sn(...t)}`;throw Tt.error(e),new Error(e)},ee=function(...t){const e="FIREBASE WARNING: "+Sn(...t);Tt.warn(e)},Uf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qs=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Bf=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ut="[MIN_NAME]",Qe="[MAX_NAME]",ft=function(t,e){if(t===e)return 0;if(t===ut||e===Qe)return-1;if(e===ut||t===Qe)return 1;{const n=yo(t),i=yo(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Wf=function(t,e){return t===e?0:t<e?-1:1},zt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+W(e))},Gs=function(t){if(typeof t!="object"||t===null)return W(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=W(e[i]),n+=":",n+=Gs(t[e[i]]);return n+="}",n},Qa=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Y(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ja=function(t){_(!qs(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Vf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Hf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jf(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const zf=new RegExp("^-?(0*)\\d{1,10}$"),qf=-2147483648,Gf=2147483647,yo=function(t){if(zf.test(t)){const e=Number(t);if(e>=qf&&e<=Gf)return e}return null},Vt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ee("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},en=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class jn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}jn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="5",Xa="v",Za="s",el="r",tl="f",nl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,il="ls",sl="p",hs="ac",rl="websocket",ol="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Jf(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ll(t,e,n){_(typeof e=="string","typeof type must == string"),_(typeof n=="object","typeof params must == object");let i;if(e===rl)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ol)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jf(t)&&(n.ns=t.namespace);const s=[];return Y(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.counters_={}}incrementCounter(e,n=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={},Yi={};function Ys(t){const e=t.toString();return Ki[e]||(Ki[e]=new Xf),Ki[e]}function Zf(t,e){const n=t.toString();return Yi[n]||(Yi[n]=e()),Yi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Vt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="start",tp="close",np="pLPCommand",ip="pRTLPCB",cl="id",ul="pw",dl="ser",sp="cb",rp="seg",op="ts",ap="d",lp="dframe",hl=1870,fl=30,cp=hl-fl,up=25e3,dp=3e4;class Et{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tn(e),this.stats_=Ys(n),this.urlFn=l=>(this.appCheckToken&&(l[hs]=this.appCheckToken),ll(n,ol,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ep(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dp)),Bf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qs((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bo)this.id=a,this.password=l;else if(o===tp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[bo]="t",i[dl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[sp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Xa]=Ks,this.transportSessionId&&(i[Za]=this.transportSessionId),this.lastSessionId&&(i[il]=this.lastSessionId),this.applicationId&&(i[sl]=this.applicationId),this.appCheckToken&&(i[hs]=this.appCheckToken),typeof location<"u"&&location.hostname&&nl.test(location.hostname)&&(i[el]=tl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Et.forceAllow_=!0}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){return Et.forceAllow_?!0:!Et.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vf()&&!Hf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ta(n),s=Qa(i,cp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[lp]="t",i[cl]=e,i[ul]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=W(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qs{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ka(),window[np+this.uniqueCallbackIdentifier]=e,window[ip+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){G("frame writing exception"),a.stack&&G(a.stack),G(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[cl]=this.myID,e[ul]=this.myPW,e[dl]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+fl+i.length<=hl;){const o=this.pendingSegs.shift();i=i+"&"+rp+s+"="+o.seg+"&"+op+s+"="+o.ts+"&"+ap+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(up)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=16384,fp=45e3;let ti=null;typeof MozWebSocket<"u"?ti=MozWebSocket:typeof WebSocket<"u"&&(ti=WebSocket);class pe{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tn(this.connId),this.stats_=Ys(n),this.connURL=pe.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Xa]=Ks,typeof location<"u"&&location.hostname&&nl.test(location.hostname)&&(o[el]=tl),n&&(o[Za]=n),i&&(o[il]=i),s&&(o[hs]=s),r&&(o[sl]=r),ll(e,rl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rt.set("previous_websocket_failure",!0);try{let i;fu(),this.mySock=new ti(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ti!==null&&!pe.forceDisallow_}static previouslyFailed(){return rt.isInMemoryStorage||rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=an(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=W(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Qa(n,hp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Et,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pe&&pe.isAvailable();let i=n&&!pe.previouslyFailed();if(e.webSocketOnly&&(n||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{const s=this.transports_=[];for(const r of un.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);un.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}un.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=6e4,mp=5e3,_p=10*1024,gp=100*1024,Qi="t",wo="d",vp="s",Eo="r",yp="e",Io="o",Co="a",So="n",To="p",bp="h";class wp{constructor(e,n,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tn("c:"+this.id+":"),this.transportManager_=new un(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=en(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_p?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qi in e){const n=e[Qi];n===Co?this.upgradeIfSecondaryHealthy_():n===Eo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Io&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zt("t",e),i=zt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:To,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Co,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:So,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zt("t",e),i=zt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zt(Qi,e);if(wo in e){const i=e[wo];if(n===bp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===So){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vp?this.onConnectionShutdown_(i):n===Eo?this.onReset_(i):n===yp?ds("Server Error: "+i):n===Io?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ds("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ks!==i&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),en(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):en(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:To,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Os()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ni}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=32,Ao=768;class R{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function T(){return new R("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Je(t){return t.pieces_.length-t.pieceNum_}function P(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new R(t.pieces_,e)}function Js(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ep(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function dn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _l(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new R(e,0)}function D(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof R)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new R(n,0)}function S(t){return t.pieceNum_>=t.pieces_.length}function Z(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return Z(P(t),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ip(t,e){const n=dn(t,0),i=dn(e,0);for(let s=0;s<n.length&&s<i.length;s++){const r=ft(n[s],i[s]);if(r!==0)return r}return n.length===i.length?0:n.length<i.length?-1:1}function Xs(t,e){if(Je(t)!==Je(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function fe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Je(t)>Je(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Cp{constructor(e,n){this.errorPrefix_=n,this.parts_=dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=yi(this.parts_[i]);gl(this)}}function Sp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yi(e),gl(t)}function Tp(t){const e=t.parts_.pop();t.byteLength_-=yi(e),t.parts_.length>0&&(t.byteLength_-=1)}function gl(t){if(t.byteLength_>Ao)throw new Error(t.errorPrefix_+"has a key path longer than "+Ao+" bytes ("+t.byteLength_+").");if(t.parts_.length>ko)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ko+") or object contains a cycle "+st(t))}function st(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends ml{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Zs}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1e3,kp=60*5*1e3,Ro=30*1e3,Ap=1.3,Rp=3e4,Np="server_kill",No=3;class Re extends pl{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=Tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qt,this.maxReconnectDelay_=kp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ni.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(W(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ft,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Re.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ve(e,"w")){const i=at(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ro)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ds("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Rp&&(this.reconnectDelay_=qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ap)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new wp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Np)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ee(d),l())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ns(this.interruptReasons_)&&(this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Gs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new R(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){G("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=No&&(this.reconnectDelay_=Ro,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){G("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=No&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qa.replace(/\./g,"-")]=1,Os()?e["framework.cordova"]=1:oa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ni.getInstance().currentlyOnline();return ns(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new C(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new C(ut,e),s=new C(ut,n);return this.compare(i,s)!==0}minPost(){return C.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn;class vl extends Ei{static get __EMPTY_NODE(){return xn}static set __EMPTY_NODE(e){xn=e}compare(e,n){return ft(e.name,n.name)}isDefinedOn(e){throw $t("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return C.MIN}maxPost(){return new C(Qe,xn)}makePost(e,n){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new C(e,xn)}toString(){return".key"}}const qe=new vl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class j{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??j.RED,this.left=s??se.EMPTY_NODE,this.right=r??se.EMPTY_NODE}copy(e,n,i,s,r){return new j(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return se.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}j.RED=!0;j.BLACK=!1;class Pp{copy(e,n,i,s,r){return this}insert(e,n,i){return new j(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class se{constructor(e,n=se.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new se(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,j.BLACK,null,null))}remove(e){return new se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,j.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $n(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $n(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $n(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $n(this.root_,null,this.comparator_,!0,e)}}se.EMPTY_NODE=new Pp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){return ft(t.name,e.name)}function er(t,e){return ft(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;function Mp(t){fs=t}const yl=function(t){return typeof t=="number"?"number:"+Ja(t):"string:"+t},bl=function(t){if(t.isLeafNode()){const e=t.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ve(e,".sv"),"Priority must be a string or number.")}else _(t===fs||t.isEmpty(),"priority of unexpected type.");_(t===fs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class H{constructor(e,n=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bl(this.priorityNode_)}static set __childrenNodeConstructor(e){Po=e}static get __childrenNodeConstructor(){return Po}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:I(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||Je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ja(this.value_):e+=this.value_,this.lazyHash_=Ya(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=H.VALUE_TYPE_ORDER.indexOf(n),r=H.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+n),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl,El;function Lp(t){wl=t}function Dp(t){El=t}class xp extends Ei{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?ft(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return C.MIN}maxPost(){return new C(Qe,new H("[PRIORITY-POST]",El))}makePost(e,n){const i=wl(e);return new C(n,new H("[PRIORITY-POST]",i))}toString(){return".priority"}}const L=new xp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=Math.log(2);class Fp{constructor(e){const n=r=>parseInt(Math.log(r)/$p,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ii=function(t,e,n,i){t.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new j(h,d.node,j.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=s(l,f),v=s(f+1,c);return d=t[f],h=n?n(d):d,new j(h,d.node,j.BLACK,m,v)}},r=function(l){let c=null,u=null,d=t.length;const h=function(m,v){const w=d-m,U=d;d-=m;const J=s(w+1,U),he=t[w],ye=n?n(he):he;f(new j(ye,he.node,v,null,J))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(m+1));v?h(w,j.BLACK):(h(w,j.BLACK),h(w,j.RED))}return u},o=new Fp(t.length),a=r(o);return new se(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;const _t={};class Ae{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return _(_t&&L,"ChildrenNode.ts has not been loaded"),Ji=Ji||new Ae({".priority":_t},{".priority":L}),Ji}get(e){const n=at(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof se?n:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,n){_(e!==qe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(C.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ii(i,e.getCompare()):a=_t;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ae(u,c)}addToIndexes(e,n){const i=Gn(this.indexes_,(s,r)=>{const o=at(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===_t)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(C.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ii(a,o.getCompare())}else return _t;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new C(e.name,a))),l.insert(e,e.node)}});return new Ae(i,this.indexSet_)}removeFromIndexes(e,n){const i=Gn(this.indexes_,s=>{if(s===_t)return s;{const r=n.get(e.name);return r?s.remove(new C(e.name,r)):s}});return new Ae(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;class y{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&bl(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gt||(Gt=new y(new se(er),null,Ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gt}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(_(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new C(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Gt:this.priorityNode_;return new y(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{_(I(e)!==".priority"||Je(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(P(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(L,(o,a)=>{n[o]=a.val(e),i++,r&&y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yl(this.getPriority().val())+":"),this.forEachChild(L,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Ya(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new C(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new C(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new C(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kn?-1:0}withIndex(e){if(e===qe||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(L),s=n.getIterator(L);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qe?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Up extends y{constructor(){super(new se(er),y.EMPTY_NODE,Ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const kn=new Up;Object.defineProperties(C,{MIN:{value:new C(ut,y.EMPTY_NODE)},MAX:{value:new C(Qe,kn)}});vl.__EMPTY_NODE=y.EMPTY_NODE;H.__childrenNodeConstructor=y;Mp(kn);Dp(kn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=!0;function F(t,e=null){if(t===null)return y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new H(n,F(e))}if(!(t instanceof Array)&&Bp){const n=[];let i=!1;if(Y(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=F(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new C(o,l)))}}),n.length===0)return y.EMPTY_NODE;const r=ii(n,Op,o=>o.name,er);if(i){const o=ii(n,L.getCompare());return new y(r,F(e),new Ae({".priority":o},{".priority":L}))}else return new y(r,F(e),Ae.Default)}else{let n=y.EMPTY_NODE;return Y(t,(i,s)=>{if(ve(t,i)&&i.substring(0,1)!=="."){const r=F(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(F(e))}}Lp(F);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends Ei{constructor(e){super(),this.indexPath_=e,_(!S(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?ft(e.name,n.name):r}makePost(e,n){const i=F(e),s=y.EMPTY_NODE.updateChild(this.indexPath_,i);return new C(n,s)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,kn);return new C(Qe,e)}toString(){return dn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Ei{compare(e,n){const i=e.node.compareTo(n.node);return i===0?ft(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return C.MIN}maxPost(){return C.MAX}makePost(e,n){const i=F(e);return new C(n,i)}toString(){return".value"}}const Cl=new Wp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return{type:"value",snapshotNode:t}}function Rt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vp(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(hn(n,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rt(n,i)):o.trackChildChange(fn(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(L,(s,r)=>{n.hasChild(s)||i.trackChildChange(hn(s,r))}),n.isLeafNode()||n.forEachChild(L,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(fn(s,r,o))}else i.trackChildChange(Rt(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.indexedFilter_=new tr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pn.getStartPost_(e),this.endPost_=pn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new C(n,i))||(i=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(y.EMPTY_NODE);const r=this;return n.forEachChild(L,(o,a)=>{r.matches(new C(o,a))||(s=s.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new pn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new C(n,i))||(i=y.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new C(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(fn(n,i,d)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(hn(n,d));const v=a.updateImmediateChild(n,y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Rt(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(hn(c.name,c.node)),r.trackChildChange(Rt(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ut}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){const e=new nr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jp(t){return t.loadsAllData()?new tr(t.getIndex()):t.hasLimit()?new Hp(t):new pn(t)}function zp(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function qp(t,e){const n=t.copy();return n.index_=e,n}function Oo(t){const e={};if(t.isDefault())return e;let n;if(t.index_===L?n="$priority":t.index_===Cl?n="$value":t.index_===qe?n="$key":(_(t.index_ instanceof Il,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=W(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=W(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+W(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=W(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+W(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Mo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==L&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends pl{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Tn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=si.getListenId_(e,i),a={};this.listens_[o]=a;const l=Oo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),at(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=si.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Oo(e._queryParams),i=e._path.toString(),s=new Ft;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ut(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=an(a.responseText)}catch{ee("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ee("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return{value:null,children:new Map}}function Tl(t,e,n){if(S(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,ri());const s=t.children.get(i);e=P(e),Tl(s,e,n)}}function ps(t,e,n){t.value!==null?n(e,t.value):Kp(t,(i,s)=>{const r=new R(e.toString()+"/"+i);ps(s,r,n)})}function Kp(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Y(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=10*1e3,Qp=30*1e3,Jp=5*60*1e3;class Xp{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Yp(e);const i=Lo+(Qp-Lo)*Math.random();en(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Y(e,(s,r)=>{r>0&&ve(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),en(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function ir(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=me.ACK_USER_WRITE,this.source=ir()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new R(e));return new oi(T(),n,this.revert)}}else return _(I(this.path)===e,"operationForChild called for unrelated child."),new oi(P(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){this.source=e,this.path=n,this.type=me.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new mn(this.source,T()):new mn(this.source,P(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=me.OVERWRITE}operationForChild(e){return S(this.path)?new dt(this.source,T(),this.snap.getImmediateChild(e)):new dt(this.source,P(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=me.MERGE}operationForChild(e){if(S(this.path)){const n=this.children.subtree(new R(e));return n.isEmpty()?null:n.value?new dt(this.source,T(),n.value):new Nt(this.source,T(),n)}else return _(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function em(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vp(o.childName,o.snapshotNode))}),Kt(t,s,"child_removed",e,i,n),Kt(t,s,"child_added",e,i,n),Kt(t,s,"child_moved",r,i,n),Kt(t,s,"child_changed",e,i,n),Kt(t,s,"value",e,i,n),s}function Kt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>nm(t,a,l)),o.forEach(a=>{const l=tm(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function tm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nm(t,e,n){if(e.childName==null||n.childName==null)throw $t("Should only compare child_ events.");const i=new C(e.childName,e.snapshotNode),s=new C(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e){return{eventCache:t,serverCache:e}}function tn(t,e,n,i){return Ii(new Xe(e,n,i),t.serverCache)}function kl(t,e,n,i){return Ii(t.eventCache,new Xe(e,n,i))}function ai(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ht(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;const im=()=>(Xi||(Xi=new se(Wf)),Xi);class N{constructor(e,n=im()){this.value=e,this.children=n}static fromObject(e){let n=new N(null);return Y(e,(i,s)=>{n=n.set(new R(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:T(),value:this.value};if(S(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(P(e),n);return r!=null?{path:D(new R(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(P(e)):new N(null)}}set(e,n){if(S(e))return new N(n,this.children);{const i=I(e),r=(this.children.get(i)||new N(null)).set(P(e),n),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(P(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(P(e)):null}}setTree(e,n){if(S(e))return n;{const i=I(e),r=(this.children.get(i)||new N(null)).setTree(P(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(D(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,T(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(S(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(P(e),D(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,T(),n)}foreachOnPath_(e,n,i){if(S(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(P(e),D(n,s),i):new N(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(D(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.writeTree_=e}static empty(){return new ge(new N(null))}}function nn(t,e,n){if(S(e))return new ge(new N(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Z(s,e);return r=r.updateChild(o,n),new ge(t.writeTree_.set(s,r))}else{const s=new N(n),r=t.writeTree_.setTree(e,s);return new ge(r)}}}function ms(t,e,n){let i=t;return Y(n,(s,r)=>{i=nn(i,D(e,s),r)}),i}function Do(t,e){if(S(e))return ge.empty();{const n=t.writeTree_.setTree(e,new N(null));return new ge(n)}}function _s(t,e){return pt(t,e)!=null}function pt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Z(n.path,e)):null}function xo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(L,(i,s)=>{e.push(new C(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new C(i,s.value))}),e}function Ge(t,e){if(S(e))return t;{const n=pt(t,e);return n!=null?new ge(new N(n)):new ge(t.writeTree_.subtree(e))}}function gs(t){return t.writeTree_.isEmpty()}function Pt(t,e){return Al(T(),t.writeTree_,e)}function Al(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Al(D(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(D(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){return Ol(e,t)}function sm(t,e,n,i,s){_(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=nn(t.visibleWrites,e,n)),t.lastWriteId=i}function rm(t,e,n,i){_(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=ms(t.visibleWrites,e,n),t.lastWriteId=i}function om(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function am(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);_(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lm(a,i.path)?s=!1:fe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return cm(t),!0;if(i.snap)t.visibleWrites=Do(t.visibleWrites,i.path);else{const a=i.children;Y(a,l=>{t.visibleWrites=Do(t.visibleWrites,D(i.path,l))})}return!0}else return!1}function lm(t,e){if(t.snap)return fe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fe(D(t.path,n),e))return!0;return!1}function cm(t){t.visibleWrites=Rl(t.allWrites,um,T()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function um(t){return t.visible}function Rl(t,e,n){let i=ge.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)fe(n,o)?(a=Z(n,o),i=nn(i,a,r.snap)):fe(o,n)&&(a=Z(o,n),i=nn(i,T(),r.snap.getChild(a)));else if(r.children){if(fe(n,o))a=Z(n,o),i=ms(i,a,r.children);else if(fe(o,n))if(a=Z(o,n),S(a))i=ms(i,T(),r.children);else{const l=at(r.children,I(a));if(l){const c=l.getChild(P(a));i=nn(i,T(),c)}}}else throw $t("WriteRecord should have .snap or .children")}}return i}function Nl(t,e,n,i,s){if(!i&&!s){const r=pt(t.visibleWrites,e);if(r!=null)return r;{const o=Ge(t.visibleWrites,e);if(gs(o))return n;if(n==null&&!_s(o,T()))return null;{const a=n||y.EMPTY_NODE;return Pt(o,a)}}}else{const r=Ge(t.visibleWrites,e);if(!s&&gs(r))return n;if(!s&&n==null&&!_s(r,T()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(fe(c.path,e)||fe(e,c.path))},a=Rl(t.allWrites,o,e),l=n||y.EMPTY_NODE;return Pt(a,l)}}}function dm(t,e,n){let i=y.EMPTY_NODE;const s=pt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(L,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ge(t.visibleWrites,e);return n.forEachChild(L,(o,a)=>{const l=Pt(Ge(r,new R(o)),a);i=i.updateImmediateChild(o,l)}),xo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ge(t.visibleWrites,e);return xo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function hm(t,e,n,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=D(e,n);if(_s(t.visibleWrites,r))return null;{const o=Ge(t.visibleWrites,r);return gs(o)?s.getChild(n):Pt(o,s.getChild(n))}}function fm(t,e,n,i){const s=D(e,n),r=pt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ge(t.visibleWrites,s);return Pt(o,i.getNode().getImmediateChild(n))}else return null}function pm(t,e){return pt(t.visibleWrites,e)}function mm(t,e,n,i,s,r,o){let a;const l=Ge(t.visibleWrites,e),c=pt(l,T());if(c!=null)a=c;else if(n!=null)a=Pt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function _m(){return{visibleWrites:ge.empty(),allWrites:[],lastWriteId:-1}}function li(t,e,n,i){return Nl(t.writeTree,t.treePath,e,n,i)}function or(t,e){return dm(t.writeTree,t.treePath,e)}function $o(t,e,n,i){return hm(t.writeTree,t.treePath,e,n,i)}function ci(t,e){return pm(t.writeTree,D(t.treePath,e))}function gm(t,e,n,i,s,r){return mm(t.writeTree,t.treePath,e,n,i,s,r)}function ar(t,e,n){return fm(t.writeTree,t.treePath,e,n)}function Pl(t,e){return Ol(D(t.treePath,e),t.writeTree)}function Ol(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;_(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,fn(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,hn(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Rt(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,fn(i,e.snapshotNode,s.oldSnap));else throw $t("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ml=new ym;class lr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Xe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ar(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ht(this.viewCache_),r=gm(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){return{filter:t}}function wm(t,e){_(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Em(t,e,n,i,s){const r=new vm;let o,a;if(n.type===me.OVERWRITE){const c=n;c.source.fromUser?o=vs(t,e,c.path,c.snap,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!S(c.path),o=ui(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===me.MERGE){const c=n;c.source.fromUser?o=Cm(t,e,c.path,c.children,i,s,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ys(t,e,c.path,c.children,i,s,a,r))}else if(n.type===me.ACK_USER_WRITE){const c=n;c.revert?o=km(t,e,c.path,i,s,r):o=Sm(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===me.LISTEN_COMPLETE)o=Tm(t,e,n.path,i,r);else throw $t("Unknown operation type: "+n.type);const l=r.getChanges();return Im(e,o,l),{viewCache:o,changes:l}}function Im(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ai(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Sl(ai(e)))}}function Ll(t,e,n,i,s,r){const o=e.eventCache;if(ci(i,n)!=null)return e;{let a,l;if(S(n))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ht(e),u=c instanceof y?c:y.EMPTY_NODE,d=or(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=li(i,ht(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=I(n);if(c===".priority"){_(Je(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=$o(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=P(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=$o(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ar(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return tn(e,a,o.isFullyInitialized()||S(n),t.filter.filtersNodes())}}function ui(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(S(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=I(n);if(!l.isCompleteForPath(n)&&Je(n)>1)return e;const m=P(n),w=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),f,w,m,Ml,null)}const d=kl(e,c,l.isFullyInitialized()||S(n),u.filtersNodes()),h=new lr(s,d,r);return Ll(t,d,n,s,h,a)}function vs(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const u=new lr(s,e,r);if(S(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=tn(e,c,!0,t.filter.filtersNodes());else{const d=I(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=tn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=P(n),f=a.getNode().getImmediateChild(d);let m;if(S(h))m=i;else{const v=u.getCompleteChild(d);v!=null?Js(h)===".priority"&&v.getChild(_l(h)).isEmpty()?m=v:m=v.updateChild(h,i):m=y.EMPTY_NODE}if(f.equals(m))l=e;else{const v=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=tn(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Fo(t,e){return t.eventCache.isCompleteForChild(e)}function Cm(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=D(n,l);Fo(e,I(u))&&(a=vs(t,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=D(n,l);Fo(e,I(u))||(a=vs(t,a,u,c,s,r,o))}),a}function Uo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ys(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;S(n)?c=i:c=new N(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=Uo(t,f,h);l=ui(t,l,new R(d),m,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),v=Uo(t,m,h);l=ui(t,l,new R(d),v,s,r,o,a)}}),l}function Sm(t,e,n,i,s,r,o){if(ci(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(S(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ui(t,e,n,l.getNode().getChild(n),s,r,a,o);if(S(n)){let c=new N(null);return l.getNode().forEachChild(qe,(u,d)=>{c=c.set(new R(u),d)}),ys(t,e,n,c,s,r,a,o)}else return e}else{let c=new N(null);return i.foreach((u,d)=>{const h=D(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ys(t,e,n,c,s,r,a,o)}}function Tm(t,e,n,i,s){const r=e.serverCache,o=kl(e,r.getNode(),r.isFullyInitialized()||S(n),r.isFiltered());return Ll(t,o,n,i,Ml,s)}function km(t,e,n,i,s,r){let o;if(ci(i,n)!=null)return e;{const a=new lr(i,e,s),l=e.eventCache.getNode();let c;if(S(n)||I(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=li(i,ht(e));else{const d=e.serverCache.getNode();_(d instanceof y,"serverChildren would be complete if leaf node"),u=or(i,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=I(n);let d=ar(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,P(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,y.EMPTY_NODE,P(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=li(i,ht(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ci(i,T())!=null,tn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new tr(i.getIndex()),r=jp(i);this.processor_=bm(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),u=new Xe(l,o.isFullyInitialized(),s.filtersNodes()),d=new Xe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ii(d,u),this.eventGenerator_=new Zp(this.query_)}get query(){return this.query_}}function Rm(t){return t.viewCache_.serverCache.getNode()}function Nm(t){return ai(t.viewCache_)}function Pm(t,e){const n=ht(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!S(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function Bo(t){return t.eventRegistrations_.length===0}function Om(t,e){t.eventRegistrations_.push(e)}function Wo(t,e,n){const i=[];if(n){_(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Vo(t,e,n,i){e.type===me.MERGE&&e.source.queryId!==null&&(_(ht(t.viewCache_),"We should always have a full cache before handling merges"),_(ai(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Em(t.processor_,s,e,n,i);return wm(t.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Dl(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Mm(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(L,(r,o)=>{i.push(Rt(r,o))}),n.isFullyInitialized()&&i.push(Sl(n.getNode())),Dl(t,i,n.getNode(),e)}function Dl(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return em(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class xl{constructor(){this.views=new Map}}function Lm(t){_(!di,"__referenceConstructor has already been defined"),di=t}function Dm(){return _(di,"Reference.ts has not been loaded"),di}function xm(t){return t.views.size===0}function cr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),Vo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Vo(o,e,n,i));return r}}function $l(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=li(n,s?i:null),l=!1;a?l=!0:i instanceof y?(a=or(n,i),l=!1):(a=y.EMPTY_NODE,l=!1);const c=Ii(new Xe(a,l,!1),new Xe(i,s,!1));return new Am(e,c)}return o}function $m(t,e,n,i,s,r){const o=$l(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Om(o,n),Mm(o,n)}function Fm(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ze(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Wo(c,n,i)),Bo(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Wo(l,n,i)),Bo(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ze(t)&&r.push(new(Dm())(e._repo,e._path)),{removed:r,events:o}}function Fl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ke(t,e){let n=null;for(const i of t.views.values())n=n||Pm(i,e);return n}function Ul(t,e){if(e._queryParams.loadsAllData())return Si(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Bl(t,e){return Ul(t,e)!=null}function Ze(t){return Si(t)!=null}function Si(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function Um(t){_(!hi,"__referenceConstructor has already been defined"),hi=t}function Bm(){return _(hi,"Reference.ts has not been loaded"),hi}let Wm=1;class Ho{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=_m(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ur(t,e,n,i,s){return sm(t.pendingWriteTree_,e,n,i,s),s?Ht(t,new dt(ir(),e,n)):[]}function Vm(t,e,n,i){rm(t.pendingWriteTree_,e,n,i);const s=N.fromObject(n);return Ht(t,new Nt(ir(),e,s))}function Be(t,e,n=!1){const i=om(t.pendingWriteTree_,e);if(am(t.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(T(),!0):Y(i.children,o=>{r=r.set(new R(o),!0)}),Ht(t,new oi(i.path,r,n))}else return[]}function An(t,e,n){return Ht(t,new dt(sr(),e,n))}function Hm(t,e,n){const i=N.fromObject(n);return Ht(t,new Nt(sr(),e,i))}function jm(t,e){return Ht(t,new mn(sr(),e))}function zm(t,e,n){const i=dr(t,n);if(i){const s=hr(i),r=s.path,o=s.queryId,a=Z(r,e),l=new mn(rr(o),a);return fr(t,r,l)}else return[]}function fi(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Bl(o,e))){const l=Fm(o,e,n,i);xm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,f)=>Ze(f));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Km(h);for(let m=0;m<f.length;++m){const v=f[m],w=v.query,U=jl(t,v);t.listenProvider_.startListening(sn(w),_n(t,w),U.hashFn,U.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(sn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(ki(h));t.listenProvider_.stopListening(sn(h),f)}))}Ym(t,c)}return a}function Wl(t,e,n,i){const s=dr(t,i);if(s!=null){const r=hr(s),o=r.path,a=r.queryId,l=Z(o,e),c=new dt(rr(a),l,n);return fr(t,o,c)}else return[]}function qm(t,e,n,i){const s=dr(t,i);if(s){const r=hr(s),o=r.path,a=r.queryId,l=Z(o,e),c=N.fromObject(n),u=new Nt(rr(a),l,c);return fr(t,o,u)}else return[]}function bs(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,f)=>{const m=Z(h,s);r=r||Ke(f,m),o=o||Ze(f)});let a=t.syncPointTree_.get(s);a?(o=o||Ze(a),r=r||Ke(a,T())):(a=new xl,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,m)=>{const v=Ke(m,T());v&&(r=r.updateImmediateChild(f,v))}));const c=Bl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ki(e);_(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Qm();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=Ci(t.pendingWriteTree_,s);let d=$m(a,e,n,u,r,l);if(!c&&!o&&!i){const h=Ul(a,e);d=d.concat(Jm(t,e,h))}return d}function Ti(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Z(o,e),c=Ke(a,l);if(c)return c});return Nl(s,e,r,n,!0)}function Gm(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Z(c,n);i=i||Ke(u,d)});let s=t.syncPointTree_.get(n);s?i=i||Ke(s,T()):(s=new xl,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Xe(i,!0,!1):null,a=Ci(t.pendingWriteTree_,e._path),l=$l(s,e,a,r?o.getNode():y.EMPTY_NODE,r);return Nm(l)}function Ht(t,e){return Vl(e,t.syncPointTree_,null,Ci(t.pendingWriteTree_,T()))}function Vl(t,e,n,i){if(S(t.path))return Hl(t,e,n,i);{const s=e.get(T());n==null&&s!=null&&(n=Ke(s,T()));let r=[];const o=I(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Pl(i,o);r=r.concat(Vl(a,l,c,u))}return s&&(r=r.concat(cr(s,t,i,n))),r}}function Hl(t,e,n,i){const s=e.get(T());n==null&&s!=null&&(n=Ke(s,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Pl(i,o),u=t.operationForChild(o);u&&(r=r.concat(Hl(u,a,l,c)))}),s&&(r=r.concat(cr(s,t,i,n))),r}function jl(t,e){const n=e.query,i=_n(t,n);return{hashFn:()=>(Rm(e)||y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?zm(t,n._path,i):jm(t,n._path);{const r=jf(s,n);return fi(t,n,null,r)}}}}function _n(t,e){const n=ki(e);return t.queryToTagMap.get(n)}function ki(t){return t._path.toString()+"$"+t._queryIdentifier}function dr(t,e){return t.tagToQueryMap.get(e)}function hr(t){const e=t.indexOf("$");return _(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new R(t.substr(0,e))}}function fr(t,e,n){const i=t.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=Ci(t.pendingWriteTree_,e);return cr(i,n,s,null)}function Km(t){return t.fold((e,n,i)=>{if(n&&Ze(n))return[Si(n)];{let s=[];return n&&(s=Fl(n)),Y(i,(r,o)=>{s=s.concat(o)}),s}})}function sn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Bm())(t._repo,t._path):t}function Ym(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=ki(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Qm(){return Wm++}function Jm(t,e,n){const i=e._path,s=_n(t,e),r=jl(t,n),o=t.listenProvider_.startListening(sn(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)_(!Ze(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!S(c)&&u&&Ze(u))return[Si(u).query];{let h=[];return u&&(h=h.concat(Fl(u).map(f=>f.query))),Y(d,(f,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(sn(u),_n(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pr(n)}node(){return this.node_}}class mr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=D(this.path_,e);return new mr(this.syncTree_,n)}node(){return Ti(this.syncTree_,this.path_)}}const Xm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jo=function(t,e,n){if(!t||typeof t!="object")return t;if(_(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Zm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return e_(t[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Zm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+t)}},e_=function(t,e,n){t.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},zl=function(t,e,n,i){return gr(e,new mr(n,t),i)},_r=function(t,e,n){return gr(t,new pr(e),n)};function gr(t,e,n){const i=t.getPriority().val(),s=jo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jo(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new H(a,F(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new H(s))),o.forEachChild(L,(a,l)=>{const c=gr(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ai(t,e){let n=e instanceof R?e:new R(e),i=t,s=I(n);for(;s!==null;){const r=at(i.node.children,s)||{children:{},childCount:0};i=new vr(s,i,r),n=P(n),s=I(n)}return i}function mt(t){return t.node.value}function yr(t,e){t.node.value=e,ws(t)}function ql(t){return t.node.childCount>0}function t_(t){return mt(t)===void 0&&!ql(t)}function Ri(t,e){Y(t.node.children,(n,i)=>{e(new vr(n,t,i))})}function Gl(t,e,n,i){n&&e(t),Ri(t,s=>{Gl(s,e,!0)})}function n_(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Rn(t){return new R(t.parent===null?t.name:Rn(t.parent)+"/"+t.name)}function ws(t){t.parent!==null&&i_(t.parent,t.name,t)}function i_(t,e,n){const i=t_(n),s=ve(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ws(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ws(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=/[\[\].#$\/\u0000-\u001F\u007F]/,r_=/[\[\].#$\u0000-\u001F\u007F]/,Zi=10*1024*1024,br=function(t){return typeof t=="string"&&t.length!==0&&!s_.test(t)},Kl=function(t){return typeof t=="string"&&t.length!==0&&!r_.test(t)},o_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kl(t)},pi=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qs(t)||t&&typeof t=="object"&&ve(t,".sv")},Yl=function(t,e,n,i){i&&e===void 0||Nn(vi(t,"value"),e,n)},Nn=function(t,e,n){const i=n instanceof R?new Cp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+st(i));if(typeof e=="function")throw new Error(t+"contains a function "+st(i)+" with contents = "+e.toString());if(qs(e))throw new Error(t+"contains "+e.toString()+" "+st(i));if(typeof e=="string"&&e.length>Zi/3&&yi(e)>Zi)throw new Error(t+"contains a string greater than "+Zi+" utf8 bytes "+st(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Y(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!br(o)))throw new Error(t+" contains an invalid key ("+o+") "+st(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Sp(i,o),Nn(t,a,i),Tp(i)}),s&&r)throw new Error(t+' contains ".value" child '+st(i)+" in addition to actual children.")}},a_=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const r=dn(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!br(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ip);let s=null;for(n=0;n<e.length;n++){if(i=e[n],s!==null&&fe(s,i))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},l_=function(t,e,n,i){const s=vi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];Y(e,(o,a)=>{const l=new R(o);if(Nn(s,a,D(n,l)),Js(l)===".priority"&&!pi(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),a_(s,r)},Ql=function(t,e,n,i){if(!Kl(n))throw new Error(vi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},c_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ql(t,e,n)},wr=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},u_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!br(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!o_(n))throw new Error(vi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ni(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Xs(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Jl(t,e,n){Ni(t,n),Xl(t,i=>Xs(i,e))}function ce(t,e,n){Ni(t,n),Xl(t,i=>fe(i,e)||fe(e,i))}function Xl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(h_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function h_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Zt&&G("event: "+n.toString()),Vt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="repo_interrupt",p_=25;class m_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new d_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ri(),this.transactionQueueTree_=new vr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function __(t,e,n){if(t.stats_=Ys(t.repoInfo_),t.forceRestClient_||Kf())t.server_=new si(t.repoInfo_,(i,s,r,o)=>{zo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>qo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Re(t.repoInfo_,e,(i,s,r,o)=>{zo(t,i,s,r,o)},i=>{qo(t,i)},i=>{g_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Zf(t.repoInfo_,()=>new Xp(t.stats_,t.server_)),t.infoData_=new Gp,t.infoSyncTree_=new Ho({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=An(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Er(t,"connected",!1),t.serverSyncTree_=new Ho({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ce(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Zl(t){const n=t.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pn(t){return Xm({timestamp:Zl(t)})}function zo(t,e,n,i,s){t.dataUpdateCount++;const r=new R(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Gn(n,c=>F(c));o=qm(t.serverSyncTree_,r,l,s)}else{const l=F(n);o=Wl(t.serverSyncTree_,r,l,s)}else if(i){const l=Gn(n,c=>F(c));o=Hm(t.serverSyncTree_,r,l)}else{const l=F(n);o=An(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ot(t,r)),ce(t.eventQueue_,a,o)}function qo(t,e){Er(t,"connected",e),e===!1&&w_(t)}function g_(t,e){Y(e,(n,i)=>{Er(t,n,i)})}function Er(t,e,n){const i=new R("/.info/"+e),s=F(n);t.infoData_.updateSnapshot(i,s);const r=An(t.infoSyncTree_,i,s);ce(t.eventQueue_,i,r)}function Pi(t){return t.nextWriteId_++}function v_(t,e,n){const i=Gm(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(s=>{const r=F(s).withIndex(e._queryParams.getIndex());bs(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=An(t.serverSyncTree_,e._path,r);else{const a=_n(t.serverSyncTree_,e);o=Wl(t.serverSyncTree_,e._path,r,a)}return ce(t.eventQueue_,e._path,o),fi(t.serverSyncTree_,e,n,null,!0),r},s=>(jt(t,"get for query "+W(e)+" failed: "+s),Promise.reject(new Error(s))))}function y_(t,e,n,i,s){jt(t,"set",{path:e.toString(),value:n,priority:i});const r=Pn(t),o=F(n,i),a=Ti(t.serverSyncTree_,e),l=_r(o,a,r),c=Pi(t),u=ur(t.serverSyncTree_,e,l,c,!0);Ni(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||ee("set at "+e+" failed: "+h);const v=Be(t.serverSyncTree_,c,!m);ce(t.eventQueue_,e,v),Es(t,s,h,f)});const d=Cr(t,e);Ot(t,d),ce(t.eventQueue_,d,[])}function b_(t,e,n,i){jt(t,"update",{path:e.toString(),value:n});let s=!0;const r=Pn(t),o={};if(Y(n,(a,l)=>{s=!1,o[a]=zl(D(e,a),F(l),t.serverSyncTree_,r)}),s)G("update() called with empty data.  Don't do anything."),Es(t,i,"ok",void 0);else{const a=Pi(t),l=Vm(t.serverSyncTree_,e,o,a);Ni(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ee("update at "+e+" failed: "+c);const h=Be(t.serverSyncTree_,a,!d),f=h.length>0?Ot(t,e):e;ce(t.eventQueue_,f,h),Es(t,i,c,u)}),Y(n,c=>{const u=Cr(t,D(e,c));Ot(t,u)}),ce(t.eventQueue_,e,[])}}function w_(t){jt(t,"onDisconnectEvents");const e=Pn(t),n=ri();ps(t.onDisconnect_,T(),(s,r)=>{const o=zl(s,r,t.serverSyncTree_,e);Tl(n,s,o)});let i=[];ps(n,T(),(s,r)=>{i=i.concat(An(t.serverSyncTree_,s,r));const o=Cr(t,s);Ot(t,o)}),t.onDisconnect_=ri(),ce(t.eventQueue_,T(),i)}function E_(t,e,n){let i;I(e._path)===".info"?i=bs(t.infoSyncTree_,e,n):i=bs(t.serverSyncTree_,e,n),Jl(t.eventQueue_,e._path,i)}function I_(t,e,n){let i;I(e._path)===".info"?i=fi(t.infoSyncTree_,e,n):i=fi(t.serverSyncTree_,e,n),Jl(t.eventQueue_,e._path,i)}function C_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(f_)}function jt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),G(n,...e)}function Es(t,e,n,i){e&&Vt(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function S_(t,e,n,i,s,r){jt(t,"transaction on "+e);const o={path:e,update:n,onComplete:i,status:null,order:Ka(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ir(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Nn("transaction failed: Data returned ",l,o.path),o.status=0;const c=Ai(t.transactionQueueTree_,e),u=mt(c)||[];u.push(o),yr(c,u);let d;typeof l=="object"&&l!==null&&ve(l,".priority")?(d=at(l,".priority"),_(pi(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ti(t.serverSyncTree_,e)||y.EMPTY_NODE).getPriority().val();const h=Pn(t),f=F(l,d),m=_r(f,a,h);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=Pi(t);const v=ur(t.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);ce(t.eventQueue_,e,v),Oi(t,t.transactionQueueTree_)}}function Ir(t,e,n){return Ti(t.serverSyncTree_,e,n)||y.EMPTY_NODE}function Oi(t,e=t.transactionQueueTree_){if(e||Mi(t,e),mt(e)){const n=tc(t,e);_(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&T_(t,Rn(e),n)}else ql(e)&&Ri(e,n=>{Oi(t,n)})}function T_(t,e,n){const i=n.map(c=>c.currentWriteId),s=Ir(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Z(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{jt(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Be(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Mi(t,Ai(t.transactionQueueTree_,e)),Oi(t,t.transactionQueueTree_),ce(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Vt(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ee("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ot(t,e)}},o)}function Ot(t,e){const n=ec(t,e),i=Rn(n),s=tc(t,n);return k_(t,s,i),i}function k_(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Z(n,l.path);let u=!1,d;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Be(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=p_)u=!0,d="maxretry",s=s.concat(Be(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Ir(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Nn("transaction failed: Data returned ",f,l.path);let m=F(f);typeof f=="object"&&f!=null&&ve(f,".priority")||(m=m.updatePriority(h.getPriority()));const w=l.currentWriteId,U=Pn(t),J=_r(m,h,U);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=J,l.currentWriteId=Pi(t),o.splice(o.indexOf(w),1),s=s.concat(ur(t.serverSyncTree_,l.path,J,l.currentWriteId,l.applyLocally)),s=s.concat(Be(t.serverSyncTree_,w,!0))}else u=!0,d="nodata",s=s.concat(Be(t.serverSyncTree_,l.currentWriteId,!0))}ce(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Mi(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Vt(i[a]);Oi(t,t.transactionQueueTree_)}function ec(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&mt(i)===void 0;)i=Ai(i,n),e=P(e),n=I(e);return i}function tc(t,e){const n=[];return nc(t,e,n),n.sort((i,s)=>i.order-s.order),n}function nc(t,e,n){const i=mt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Ri(e,s=>{nc(t,s,n)})}function Mi(t,e){const n=mt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,yr(e,n.length>0?n:void 0)}Ri(e,i=>{Mi(t,i)})}function Cr(t,e){const n=Rn(ec(t,e)),i=Ai(t.transactionQueueTree_,e);return n_(i,s=>{es(t,s)}),es(t,i),Gl(i,s=>{es(t,s)}),n}function es(t,e){const n=mt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(_(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Be(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?yr(e,void 0):n.length=r+1,ce(t.eventQueue_,Rn(e),s);for(let o=0;o<i.length;o++)Vt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function R_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ee(`Invalid query segment '${n}' in query '${t}'`)}return e}const Go=function(t,e){const n=N_(t),i=n.namespace;n.domain==="firebase.com"&&Me(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Uf();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new al(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new R(n.pathString)}},N_=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=A_(t.substring(u,d)));const h=R_(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",P_=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Ko.charAt(n%64),n=Math.floor(n/64);_(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Ko.charAt(e[s]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class M_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return S(this._path)?null:Js(this._path)}get ref(){return new Ie(this._repo,this._path)}get _queryIdentifier(){const e=Mo(this._queryParams),n=Gs(e);return n==="{}"?"default":n}get _queryObject(){return Mo(this._queryParams)}isEqual(e){if(e=Q(e),!(e instanceof On))return!1;const n=this._repo===e._repo,i=Xs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ep(this._path)}}function L_(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function D_(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===qe){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ut)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Qe)throw new Error(i);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===L){if(e!=null&&!pi(e)||n!=null&&!pi(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(_(t.getIndex()instanceof Il||t.getIndex()===Cl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ie extends On{constructor(e,n){super(e,n,new nr,!1)}get parent(){const e=_l(this._path);return e===null?null:new Ie(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new R(e),i=gn(this.ref,e);return new Mt(this._node.getChild(n),i,L)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Mt(s,gn(this.ref,i),L)))}hasChild(e){const n=new R(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function K(t,e){return t=Q(t),t._checkNotDeleted("ref"),e!==void 0?gn(t._root,e):t._root}function gn(t,e){return t=Q(t),I(t._path)===null?c_("child","path",e):Ql("child","path",e),new Ie(t._repo,D(t._path,e))}function et(t,e){t=Q(t),wr("push",t._path),Yl("push",e,t._path,!0);const n=Zl(t._repo),i=P_(n),s=gn(t,i),r=gn(t,i);let o;return e!=null?o=Sr(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Sr(t,e){t=Q(t),wr("set",t._path),Yl("set",e,t._path,!1);const n=new Ft;return y_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ee(t,e){l_("update",e,t._path);const n=new Ft;return b_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vt(t){t=Q(t);const e=new ic(()=>{}),n=new Li(e);return v_(t._repo,t,n).then(i=>new Mt(i,new Ie(t._repo,t._path),t._queryParams.getIndex()))}class Li{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new O_("value",this,new Mt(e.snapshotNode,new Ie(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}matches(e){return e instanceof Li?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function x_(t,e,n,i,s){const r=new ic(n,void 0),o=new Li(r);return E_(t._repo,t,o),()=>I_(t._repo,t,o)}function $_(t,e,n,i){return x_(t,"value",e)}class sc{}class F_ extends sc{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new On(e._repo,e._path,zp(e._queryParams,this._limit),e._orderByCalled)}}function U_(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new F_(t)}class B_ extends sc{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){L_(e,"orderByKey");const n=qp(e._queryParams,qe);return D_(n),new On(e._repo,e._path,n,!0)}}function W_(){return new B_}function V_(t,...e){let n=Q(t);for(const i of e)n=i._apply(n);return n}Lm(Ie);Um(Ie);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="FIREBASE_DATABASE_EMULATOR_HOST",Is={};let j_=!1;function z_(t,e,n,i){t.repoInfo_=new al(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function q_(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||Me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Go(r,s),a=o.repoInfo,l;typeof process<"u"&&mo&&(l=mo[H_]),l?(r=`http://${l}?ns=${a.namespace}`,o=Go(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Qf(t.name,t.options,e);u_("Invalid Firebase Database URL",o),S(o.path)||Me("Database URL must point to the root of a Firebase Database (not including a child path).");const u=K_(a,t,c,new Yf(t.name,n));return new Y_(u,t)}function G_(t,e){const n=Is[e];(!n||n[t.key]!==t)&&Me(`Database ${e}(${t.repoInfo_}) has already been deleted.`),C_(t),delete n[t.key]}function K_(t,e,n,i){let s=Is[e.name];s||(s={},Is[e.name]=s);let r=s[t.toURLString()];return r&&Me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new m_(t,j_,n,i),s[t.toURLString()]=r,r}class Y_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(__(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ie(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Me("Cannot call "+e+" on a deleted database.")}}function Q_(t=da(),e){const n=Ds(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=lu("database");i&&J_(n,...i)}return n}function J_(t,e,n,i={}){t=Q(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Me("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new jn(jn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:cu(i.mockUserToken,t.app.options.projectId);r=new jn(o)}z_(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){Lf(Bt),kt(new lt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return q_(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ze(_o,go,t),ze(_o,go,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ue(t,e,n){var i;if(t=Q(t),wr("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(i=void 0)!==null&&i!==void 0?i:!0,r=new Ft,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new Mt(u,new Ie(t._repo,t._path),L),r.resolve(new Z_(c,d)))},a=$_(t,()=>{});return S_(t._repo,t._path,e,o,a,s),r.promise}Re.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Re.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};X_();const Cs={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},eg=!!Cs.apiKey&&!!Cs.databaseURL;let Yt=null,Yo=null,Qo=null;function z(){return Yt||(Yt=ua(Cs),Yo=Of(Yt),Qo=Q_(Yt)),{app:Yt,auth:Yo,db:Qo}}function tg(){const{auth:t}=z();return new Promise(e=>{let n=!1;const i=bh(t,s=>{n||(n=!0,i(),e(s||null))},()=>e(null));setTimeout(()=>{n||(n=!0,e(t.currentUser||null))},4e3)})}const ng="../STONK-Home/index.html",ts=2600;function ig(t){return String(t||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function sg(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function rg(t){const e=ig(t);return ng+(e?`?room=${encodeURIComponent(e)}`:"")}function og({title:t="STONK Home에서 입장해 주세요",message:e="",roomCode:n="",auto:i=!0}={}){var l;const s=rg(n),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(54,211,153,0.20), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=i&&!sg();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(54,211,153,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#36d399;margin-bottom:8px">STONK COMPANY</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${t}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인은 STONK Home에서 진행합니다. 같은 계정의 자산이 그대로 연결됩니다."}</p>
      <a data-home-go href="${s}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#6ee7b0,#36d399);box-shadow:0 10px 30px rgba(54,211,153,0.4)">STONK Home으로 이동</a>
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(ts/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(l=o.querySelector("[data-home-go]"))==null||l.addEventListener("click",c=>{c.preventDefault(),location.href=s}),a){let c=Math.ceil(ts/1e3);const u=o.querySelector("[data-gate-count]"),d=setInterval(()=>{c-=1,u&&(u.textContent=String(Math.max(0,c))),c<=0&&clearInterval(d)},1e3);setTimeout(()=>{location.href=s},ts)}return o}const q="MAIN",Di=1e7,Tr=60*60*1e3,kr=.012;function V(t){const e=Number(t);return Number.isFinite(e)?e:0}function p(t){return Math.trunc(V(t))}function x(t){return p(t).toLocaleString("ko-KR")+"원"}function $(t,e,n){return t=V(t),Math.max(e,Math.min(n,t))}const We={fintech:{id:"fintech",label:"핀테크",icon:"💳",revCoef:.04,valCoef:.42,vol:.18,eventSens:1.4,note:"Bank 이벤트 영향이 큼"},game:{id:"game",label:"게임",icon:"🎮",revCoef:.045,valCoef:.45,vol:.28,eventSens:1,note:"변동성 높음 · Gacha/Arcade 확장"},bio:{id:"bio",label:"바이오",icon:"🧬",revCoef:.046,valCoef:.5,vol:.34,eventSens:1,note:"성장 변동성이 큼"},semicon:{id:"semicon",label:"반도체",icon:"🔬",revCoef:.038,valCoef:.55,vol:.22,eventSens:1,note:"시설 영향 큼 · 가치 상승 큼"},ent:{id:"ent",label:"엔터테인먼트",icon:"🎬",revCoef:.042,valCoef:.44,vol:.24,eventSens:1,note:"브랜드 점수 영향 큼"},food:{id:"food",label:"식품",icon:"🍱",revCoef:.036,valCoef:.38,vol:.1,eventSens:.8,note:"안정적 매출"},robot:{id:"robot",label:"로봇",icon:"🤖",revCoef:.044,valCoef:.5,vol:.3,eventSens:1,note:"연구개발 중심"},energy:{id:"energy",label:"친환경 에너지",icon:"🌱",revCoef:.04,valCoef:.46,vol:.2,eventSens:1.2,note:"이벤트 보너스 가능"},logistics:{id:"logistics",label:"물류",icon:"🚚",revCoef:.037,valCoef:.4,vol:.12,eventSens:.8,note:"꾸준한 수익"},security:{id:"security",label:"보안",icon:"🛡️",revCoef:.039,valCoef:.42,vol:.16,eventSens:.9,note:"리스크 감소"}},ag=Object.keys(We),Lt={stable:{id:"stable",label:"안정형",revMod:.95,growth:.9,riskBase:18,brand:0,ipo:0,note:"변동성·리스크 낮음"},aggressive:{id:"aggressive",label:"공격형",revMod:1.15,growth:1.2,riskBase:38,brand:0,ipo:0,note:"성장↑ 비용·리스크↑"},brand:{id:"brand",label:"브랜드형",revMod:.92,growth:1,riskBase:24,brand:12,ipo:0,note:"브랜드 점수↑ 초기 수익↓"},rnd:{id:"rnd",label:"연구개발형",revMod:.9,growth:1.05,riskBase:26,brand:0,ipo:12,note:"IPO 준비도 보너스 · 초기 비용↑"}},re={dev:{id:"dev",label:"개발자",icon:"👨‍💻",cost:2e6,upkeep:12e4,effect:"성장률 +"},marketer:{id:"marketer",label:"마케터",icon:"📣",cost:18e5,upkeep:11e4,effect:"브랜드 +"},sales:{id:"sales",label:"영업 담당",icon:"🤝",cost:18e5,upkeep:11e4,effect:"매출 +"},account:{id:"account",label:"회계 담당",icon:"🧮",cost:16e5,upkeep:1e5,effect:"비용 −"},risk:{id:"risk",label:"리스크 매니저",icon:"🧯",cost:22e5,upkeep:13e4,effect:"리스크 −"},researcher:{id:"researcher",label:"연구원",icon:"🔭",cost:24e5,upkeep:14e4,effect:"IPO 준비도 +"},ops:{id:"ops",label:"운영 매니저",icon:"🛠️",cost:2e6,upkeep:12e4,effect:"시설 효율 +"},brand:{id:"brand",label:"브랜드 매니저",icon:"✨",cost:22e5,upkeep:13e4,effect:"엔터 보너스"}},rc=Object.keys(re),Ve={office:{id:"office",label:"사무실",icon:"🏢",baseCost:3e6,upkeep:6e4,effect:"직원 한도 +"},server:{id:"server",label:"서버실",icon:"🖥️",baseCost:4e6,upkeep:8e4,effect:"핀테크/게임/보안 매출 +"},lab:{id:"lab",label:"연구소",icon:"🧪",baseCost:5e6,upkeep:9e4,effect:"바이오/로봇/반도체 성장 +"},marketing:{id:"marketing",label:"마케팅룸",icon:"📈",baseCost:35e5,upkeep:7e4,effect:"브랜드 +"},accounting:{id:"accounting",label:"회계실",icon:"📒",baseCost:3e6,upkeep:6e4,effect:"비용 −"},security:{id:"security",label:"보안실",icon:"🔒",baseCost:35e5,upkeep:7e4,effect:"리스크 −"}},oc=Object.keys(Ve),ac=["STARTUP","SMALL_BIZ","SCALE_UP","ENTERPRISE","PRE_IPO","LISTED"],yt={STARTUP:"스타트업",SMALL_BIZ:"소기업",SCALE_UP:"성장기업",ENTERPRISE:"대기업",PRE_IPO:"상장 준비",LISTED:"상장기업"};function lg(t){return Math.max(0,ac.indexOf(t||"STARTUP"))}const xi=t=>K(z().db,`rooms/${q}/players/${t}/cash`),cg=t=>K(z().db,`rooms/${q}/players/${t}`),ne=t=>K(z().db,`rooms/${q}/companies/${t}`),lc=t=>K(z().db,`rooms/${q}/companies/${t}/logs`),ug=t=>K(z().db,`rooms/${q}/bank/${t}`),vn=t=>K(z().db,`rooms/${q}/bank/${t}/businessLoan`),dg=()=>K(z().db,`rooms/${q}/bankEvents/current`);function cc(t,e,n,i){return{companyId:"co"+i.toString(36),ownerUid:t,ownerNickname:e||"플레이어",name:n.name,slogan:n.slogan||"",sector:n.sector,strategy:n.strategy,stage:"STARTUP",level:1,companyValue:3e7,companyCash:0,totalRevenue:0,totalCost:0,lastProfit:0,growthRate:0,brandScore:$((Lt[n.strategy]||{}).brand||0,0,100),riskScore:$((Lt[n.strategy]||{}).riskBase||20,0,100),ipoReadiness:0,employees:{},facilities:{},upgrades:{},createdAt:i,updatedAt:i,lastSettledAt:i}}function hg(t){const e=t&&typeof t=="object"?t:{};return{companyId:e.companyId||"",ownerUid:e.ownerUid||"",ownerNickname:e.ownerNickname||"플레이어",name:e.name||"",slogan:e.slogan||"",sector:e.sector||"fintech",strategy:e.strategy||"stable",stage:e.stage||"STARTUP",level:Math.max(1,p(e.level)||1),companyValue:Math.max(0,p(e.companyValue)),companyCash:p(e.companyCash),totalRevenue:Math.max(0,p(e.totalRevenue)),totalCost:Math.max(0,p(e.totalCost)),lastProfit:p(e.lastProfit),growthRate:V(e.growthRate),brandScore:$(e.brandScore,0,100),riskScore:$(e.riskScore,0,100),ipoReadiness:$(e.ipoReadiness,0,100),employees:e.employees&&typeof e.employees=="object"?e.employees:{},facilities:e.facilities&&typeof e.facilities=="object"?e.facilities:{},upgrades:e.upgrades&&typeof e.upgrades=="object"?e.upgrades:{},createdAt:p(e.createdAt),updatedAt:p(e.updatedAt),lastSettledAt:p(e.lastSettledAt)||p(e.createdAt)}}function Ar(t){return Object.values(t.employees||{}).reduce((e,n)=>e+Math.max(0,p(n&&n.count)),0)}function Rr(t){return Object.values(t.facilities||{}).reduce((e,n)=>e+Math.max(0,p(n&&n.level)),0)}function Jt(t,e){const n=(t.employees||{})[e];return Math.max(0,p(n&&n.count))}function bt(t,e){const n=(t.facilities||{})[e];return Math.max(0,p(n&&n.level))}function uc(t,e){const n=bt(t,e);return Math.floor((Ve[e]||{}).baseCost*Math.pow(1.6,n))}function dc(t,e){const n=Jt(t,e);return Math.floor((re[e]||{}).cost*Math.pow(1.18,n))}function hc(t){const e={valBonus:1,loanMult:1,riskBonus:0,warnBoost:!1},n=t&&t.type;return t&&t.custom&&t.effects?(e.loanMult=$(t.effects.loanRateMultiplier,.5,1.5),e.loanMult!==1&&(e.loanMult=e.loanMult),e):(n==="lowrate"?e.loanMult=.7:n==="highrate"?(e.loanMult=1.3,e.warnBoost=!0):n==="boom"?e.valBonus=1.08:n==="bust"?(e.valBonus=.96,e.riskBonus=3,e.warnBoost=!0):n==="caution"&&(e.warnBoost=!0),e)}function fc(t,e){if(e=e||Date.now(),t&&t.manual&&(!t.expiresAt||V(t.expiresAt)>e)&&(t.title||t.type))return t;const n=new Date(e+9*36e5),i="bankevt:"+n.getUTCFullYear()+"-"+(n.getUTCMonth()+1)+"-"+n.getUTCDate();let s=2166136261;for(let l=0;l<i.length;l++)s^=i.charCodeAt(l),s=Math.imul(s,16777619);const r=["lowrate","highrate","boom","bust","insurance","cashback","vipweek","caution"],o={lowrate:"저금리 데이",highrate:"고금리 데이",boom:"투자 호황",bust:"투자 침체",insurance:"보험 우대 기간",cashback:"카드 캐시백 이벤트",vipweek:"VIP 우대 기간",caution:"금융 경계주의보"},a=r[(s>>>0)%r.length];return{type:a,title:o[a],manual:!1}}function Mn(t){return t=$(t,0,100),t>=90?"S":t>=75?"A":t>=55?"B":t>=35?"C":t>=15?"D":"F"}const fg={NORMAL:0,SILVER:1,GOLD:2,PLATINUM:3,BLACK:4};function Ss(t){return fg[t]||0}const Dt={F:0,D:1,C:2,B:3,A:4,S:5};function pc(t){let e=0;const n=Mn((t&&t.creditScore)!=null?t.creditScore:60);Dt[n]>=Dt.A&&(e+=.05);const i=t&&t.vipTier||"NORMAL";return i==="SILVER"?e+=.03:i==="GOLD"?e+=.05:i==="PLATINUM"?e+=.08:i==="BLACK"&&(e+=.1),Math.min(.2,e)}const mc={S:2e8,A:12e7,B:6e7,C:3e7,D:12e6,F:0};function Nr(t){const e=Mn((t&&t.creditScore)!=null?t.creditScore:60);let n=mc[e]||0;const i=t&&t.vipTier||"NORMAL";return Ss(i)>=3?n=Math.floor(n*1.3):Ss(i)>=2&&(n=Math.floor(n*1.1)),n}function pg(t){let e=2166136261;const n=String(t);for(let i=0;i<n.length;i++)e^=n.charCodeAt(i),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e5/1e5}function $i(t,e,n){const i=p(t.lastSettledAt)||e,s=Math.max(0,e-i),r=s/864e5;if(r<=0)return{applied:!1,elapsed:s};const o=We[t.sector]||We.fintech,a=Lt[t.strategy]||Lt.stable,l=hc(n);let c=a.revMod;c*=1+Math.min(.6,Jt(t,"sales")*.04),t.sector==="ent"&&(c*=1+Math.min(.3,t.brandScore/300)),(t.sector==="fintech"||t.sector==="game"||t.sector==="security")&&(c*=1+Math.min(.3,bt(t,"server")*.05)),(t.sector==="bio"||t.sector==="robot"||t.sector==="semicon")&&(c*=1+Math.min(.3,bt(t,"lab")*.05));const u=Math.floor(t.companyValue*o.revCoef*r*c);let d=0;for(const ye of rc)d+=Jt(t,ye)*re[ye].upkeep;let h=0;for(const ye of oc)h+=bt(t,ye)*Ve[ye].upkeep;let f=Math.floor((d+h)*r);f=Math.floor(f*(1-Math.min(.4,Jt(t,"account")*.05+bt(t,"accounting")*.04)));const m=Math.max(0,t.riskScore-Jt(t,"risk")*5-bt(t,"security")*4),v=Math.floor(t.companyValue*(m/100)*.01*r);f+=v;const U=(pg(t.companyId+":"+i)-.5)*2*o.vol;let J=Math.floor((u-f)*(1+U)*l.valBonus);const he=Math.max(0,Math.floor(J*o.valCoef*a.growth));return{applied:!0,elapsed:s,days:r,revenue:u,cost:f,profit:J,valueGain:he,riskAdd:l.riskBonus,eventTitle:n&&n.title}}function mi(t,e){const n=Math.min(40,Math.floor(t.companyValue/125e6)),i=Math.min(25,Math.floor(t.brandScore*.25)),s=t.lastProfit>0?12:0,r=Math.min(12,Rr(t)*1.5),o=Math.min(8,Ar(t)),a=Math.floor(t.riskScore*.25),c=(e&&e.businessLoan?p(e.businessLoan.principal)+p(e.businessLoan.interest):0)>0?8:0;return $(n+i+s+r+o-a-c,0,100)}function _c(t,e){const n=t.companyValue,i=Ar(t),s=Rr(t),r=t.ipoReadiness,o=Mn((e&&e.creditScore)!=null?e.creditScore:60),a=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;switch(t.stage){case"STARTUP":if(n>=5e7&&i>=3&&s>=2)return"SMALL_BIZ";break;case"SMALL_BIZ":if(n>=2e8&&t.brandScore>=30&&t.lastProfit>=1e7)return"SCALE_UP";break;case"SCALE_UP":if(n>=1e9&&i>=20&&t.brandScore>=60)return"ENTERPRISE";break;case"ENTERPRISE":if(n>=5e9&&r>=70&&t.riskScore<=40)return"PRE_IPO";break;case"PRE_IPO":if(r>=100&&Dt[o]>=Dt.B&&!a)return"LISTED";break}return null}function ae(t,e,n,i){return{type:t,title:e||"",amount:p(n),memo:i||"",createdAt:Date.now()}}async function de(t,e){await et(lc(t),e)}async function Pr(t){const e=Date.now(),[n,i,s,r,o]=await Promise.all([vt(cg(t)),vt(ne(t)),vt(ug(t)),vt(dg()),vt(V_(lc(t),W_(),U_(15)))]),a=n.val()||{},l=p(a.cash),c=a.nickname||s.val()&&s.val().nickname||"플레이어",u=s.val()||{},d=fc(r.val(),e);let f=i.exists()?hg(i.val()):null,m=null;if(f){await mg(t,u,e);const w=$i(f,e,d);w.applied&&w.elapsed>=Tr?(f=gc(f,w,e),f.ipoReadiness=mi(f,u),await Ee(ne(t),Or(f)),await de(t,ae("settle","실적 정산",w.profit,`매출 ${x(w.revenue)} · 비용 ${x(w.cost)}${w.eventTitle?" · "+w.eventTitle:""}`)),m=w):f.ipoReadiness=mi(f,u)}const v=o.exists()?Object.entries(o.val()).map(([w,U])=>({id:w,...U})).sort((w,U)=>V(U.createdAt)-V(w.createdAt)):[];return{uid:t,cash:l,nickname:c,company:f,bank:u,event:d,logs:v,settleFeed:m}}function gc(t,e,n){const i={...t};return i.companyCash=Math.max(0,p(t.companyCash)+e.profit),i.companyValue=Math.max(0,p(t.companyValue)+e.valueGain),i.totalRevenue=p(t.totalRevenue)+Math.max(0,e.revenue),i.totalCost=p(t.totalCost)+Math.max(0,e.cost),i.lastProfit=e.profit,i.growthRate=i.companyValue>0?e.profit/i.companyValue:0,i.riskScore=$(t.riskScore+(e.riskAdd||0)+(e.profit<0?2:-1),0,100),i.lastSettledAt=n,i}function Or(t){return{companyId:t.companyId,ownerUid:t.ownerUid,ownerNickname:t.ownerNickname,name:t.name,slogan:t.slogan,sector:t.sector,strategy:t.strategy,stage:t.stage,level:Math.max(1,p(t.level)),companyValue:Math.max(0,p(t.companyValue)),companyCash:p(t.companyCash),totalRevenue:Math.max(0,p(t.totalRevenue)),totalCost:Math.max(0,p(t.totalCost)),lastProfit:p(t.lastProfit),growthRate:V(t.growthRate),brandScore:$(t.brandScore,0,100),riskScore:$(t.riskScore,0,100),ipoReadiness:$(t.ipoReadiness,0,100),employees:t.employees||{},facilities:t.facilities||{},upgrades:t.upgrades||{},createdAt:p(t.createdAt),updatedAt:Date.now(),lastSettledAt:p(t.lastSettledAt)}}async function vc(t,e,n){if(e=Math.max(0,p(e)),e<=0)return 0;const i=Date.now(),s=(await vt(K(z().db,`rooms/${q}/bank/${t}/card`))).val()||{};if(!s.enabled||s.suspended||s.lost)return-1;if(s.overdue)return-3;const r=p(s.cardLimit),o=p(s.usedAmount);if(o+e>r)return-2;const a=V(s.dueAt)>0?V(s.dueAt):i+24*3600*1e3;return await Ee(K(z().db,`rooms/${q}/bank/${t}/card`),{usedAmount:o+e,dueAt:a,updatedAt:i}),await et(K(z().db,`rooms/${q}/bank/${t}/tx`),{type:"card_use",title:n||"Company 결제",amount:-e,beforeCash:0,afterCash:0,memo:"게임머니 카드 결제(청구 예정) · Company",createdAt:i}),await et(K(z().db,`rooms/${q}/bank/${t}/messages`),{type:"card",title:"STONK Card 결제",body:`${n||"Company 결제"} ${x(e)}이 카드로 결제되었습니다(청구 예정).`,amount:-e,relatedId:"",read:!1,actionLabel:"",actionUrl:"",createdAt:i}),e}function yc(t){return t===-2?"STONK Card 한도 초과로 결제할 수 없습니다.":t===-3?"카드 미납 상태로 결제할 수 없습니다. 먼저 청구액을 납부해 주세요.":"카드가 미발급/정지/분실 상태입니다. 결제수단을 변경해 주세요."}async function mg(t,e,n){const i=e&&e.businessLoan;if(!i||p(i.principal)<=0)return;const s=p(i.lastSettledAt)||n,r=Math.max(0,n-s)/864e5;if(r<Tr/864e5)return;const o=Math.floor(p(i.principal)*kr*r);o<=0||(await Ee(vn(t),{interest:p(i.interest)+o,lastSettledAt:n,updatedAt:n}),e.businessLoan.interest=p(i.interest)+o,e.businessLoan.lastSettledAt=n)}async function bc(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const i=n.bank&&n.bank.businessLoan||{},s=Nr(n.bank),r=p(i.principal);if(s<=0)throw new Error("현재 신용등급으로는 사업대출이 불가합니다.");if(r+e>s)throw new Error(`사업대출 한도 초과 (한도 ${x(s)}, 현재 ${x(r)})`);const o=Date.now();return await Ee(vn(t),{principal:r+e,interest:p(i.interest),limit:s,companyId:n.company.companyId,lastSettledAt:p(i.lastSettledAt)||o,createdAt:p(i.createdAt)||o,updatedAt:o}),await ue(ne(t),a=>a&&(a.companyCash=p(a.companyCash)+e,a.updatedAt=o,a)),await et(K(z().db,`rooms/${q}/bank/${t}/tx`),{type:"biz_loan",title:"사업대출 실행",amount:e,beforeCash:0,afterCash:0,memo:`회사자금 입금 · 잔액 ${x(r+e)}`,createdAt:o}),await de(t,ae("loan","사업대출 실행",e,`회사 자금 +${x(e)}`)),`사업대출 완료 (+${x(e)} → 회사 자금)`}async function Ts(t,e,n,i){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");const s=i.bank&&i.bank.businessLoan||{},r=p(s.principal)+p(s.interest);if(r<=0)throw new Error("상환할 사업대출이 없습니다.");const o=Math.min(e,r),a=Date.now();if(n==="cash"){if(!(await ue(xi(t),m=>{const v=m==null?p(i.cash):p(m);if(!(v<o))return v-o})).committed)throw new Error("보유 현금이 부족합니다.")}else{if(!i.company||p(i.company.companyCash)<o)throw new Error("회사 자금이 부족합니다.");await ue(ne(t),f=>{if(!f)return f;if(!(p(f.companyCash)<o))return f.companyCash=p(f.companyCash)-o,f.updatedAt=a,f})}let l=o;const c=Math.min(l,p(s.interest));l-=c;const u=Math.min(l,p(s.principal)),d=Math.max(0,p(s.principal)-u),h=Math.max(0,p(s.interest)-c);return await Ee(vn(t),{principal:d,interest:h,updatedAt:a}),await et(K(z().db,`rooms/${q}/bank/${t}/tx`),{type:"biz_repay",title:"사업대출 상환",amount:-o,beforeCash:0,afterCash:0,memo:`이자 ${x(c)} · 원금 ${x(u)} · ${n==="cash"?"개인현금":"회사자금"}`,createdAt:a}),await de(t,ae("loan","사업대출 상환",-o,`이자 ${x(c)} · 원금 ${x(u)}`)),d+h<=0?"사업대출 전액 상환 완료 🎉":`상환 완료 (잔액 ${x(d+h)})`}function wc(t){return String(t||"").replace(/[<>{}\[\]\\/]/g,"").trim().slice(0,24)}function Ec(t){return Math.max(1,Math.floor(Di*(1-pc(t))))}async function Ic(t,e,n){if(n.company)throw new Error("이미 회사를 보유하고 있습니다. (유저당 1개)");const i=wc(e.name);if(!i)throw new Error("회사명을 입력하세요.");if(!We[e.sector])throw new Error("업종을 선택하세요.");if(!Lt[e.strategy])throw new Error("시작 전략을 선택하세요.");const s=Ec(n.bank),r=Date.now(),o=e.payMethod||"cash";if(o==="card"){const l=await vc(t,s,"회사 설립");if(l<=0)throw new Error(yc(l))}else if(o==="loan"){const l=Nr(n.bank),c=n.bank&&n.bank.businessLoan||{};if(l<=0||p(c.principal)+s>l)throw new Error("사업대출 한도가 부족합니다. 현금/카드로 설립하거나 한도를 확인하세요.");await Ee(vn(t),{principal:p(c.principal)+s,interest:p(c.interest),limit:l,companyId:"pending",lastSettledAt:p(c.lastSettledAt)||r,createdAt:p(c.createdAt)||r,updatedAt:r})}else if(!(await ue(xi(t),c=>{const u=c==null?p(n.cash):p(c);if(!(u<s))return u-s})).committed)throw new Error("보유 현금이 부족합니다. (Bank 사업대출/카드 결제를 이용할 수 있습니다)");const a=cc(t,n.nickname,{name:i,slogan:e.slogan,sector:e.sector,strategy:e.strategy},r);return await Sr(ne(t),Or(a)),o==="loan"&&await Ee(vn(t),{companyId:a.companyId}),await de(t,ae("found","회사 설립",-s,`${We[e.sector].label} · ${o==="card"?"카드 결제":o==="loan"?"사업대출":"현금"}`)),await et(K(z().db,`rooms/${q}/companyNews`),{uid:t,companyName:i,type:"found",title:`${i} 설립`,body:`${We[e.sector].label} 업종의 새 회사가 STONK 타이쿤에 등장했습니다.`,impact:"neutral",createdAt:r}),`${i} 설립 완료! (${We[e.sector].label})`}async function Cc(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");if(!(await ue(xi(t),r=>{const o=r==null?p(n.cash):p(r);if(!(o<e))return o-e})).committed)throw new Error("보유 현금이 부족합니다.");const s=Date.now();return await ue(ne(t),r=>r&&(r.companyCash=p(r.companyCash)+e,r.companyValue=p(r.companyValue)+Math.floor(e*.3),r.updatedAt=s,r)),await de(t,ae("invest","회사에 출자",e,"개인 현금 → 회사 자금")),`출자 완료 (+${x(e)} 회사 자금)`}async function Sc(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company||p(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다.");const i=Date.now();return await ue(ne(t),s=>{if(!s)return s;if(!(p(s.companyCash)<e))return s.companyCash=p(s.companyCash)-e,s.brandScore=$(V(s.brandScore)-1,0,100),s.riskScore=$(V(s.riskScore)+1,0,100),s.updatedAt=i,s}),await ue(xi(t),s=>p(s)+e),await de(t,ae("withdraw","회사 자금 인출",e,"회사 자금 → 개인 현금")),`인출 완료 (+${x(e)} 개인 현금)`}async function Mr(t,e,n,i,s){if(i==="card"){const r=await vc(t,e,s);if(r<=0)throw new Error(yc(r));return"card"}if(!n.company||p(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다. (출자/사업대출/카드 결제를 이용하세요)");return await ue(ne(t),r=>{if(!r)return r;if(!(p(r.companyCash)<e))return r.companyCash=p(r.companyCash)-e,r.updatedAt=Date.now(),r}),"company"}async function Tc(t,e,n,i){if(!re[e])throw new Error("직원 타입을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const s=dc(n.company,e);await Mr(t,s,n,i,`${re[e].label} 고용`);const r=Date.now();return await ue(ne(t),o=>{if(!o)return o;o.employees=o.employees||{};const a=o.employees[e]||{count:0,level:1};return a.count=p(a.count)+1,a.level=Math.max(1,p(a.level)),o.employees[e]=a,Dr(o,e,1),o.updatedAt=r,o}),await de(t,ae("hire",`${re[e].label} 고용`,-s,i==="card"?"카드 결제":"회사 자금")),`${re[e].label} 고용 완료`}async function kc(t,e,n){if(!n.company)throw new Error("회사가 없습니다.");const i=(n.company.employees||{})[e];if(!i||p(i.count)<=0)throw new Error("해고할 직원이 없습니다.");return await ue(ne(t),s=>{if(!s)return s;const r=(s.employees||{})[e];if(!(!r||p(r.count)<=0))return r.count=p(r.count)-1,Dr(s,e,-1),s.updatedAt=Date.now(),s}),await de(t,ae("fire",`${re[e].label} 해고`,0,"인건비 절감")),`${re[e].label} 1명 해고`}function Ac(t,e){const n=(t.employees||{})[e]||{};return Math.floor((re[e]||{}).cost*.6*Math.max(1,p(n.level)))}async function Lr(t,e,n,i){if(!n.company)throw new Error("회사가 없습니다.");const s=(n.company.employees||{})[e];if(!s||p(s.count)<=0)throw new Error("먼저 직원을 고용하세요.");const r=Ac(n.company,e);return await Mr(t,r,n,i,`${re[e].label} 레벨업`),await ue(ne(t),o=>{if(!o)return o;const a=(o.employees||{})[e];if(a)return a.level=Math.max(1,p(a.level))+1,Dr(o,e,.5),o.updatedAt=Date.now(),o}),await de(t,ae("levelup",`${re[e].label} 레벨업`,-r,"")),`${re[e].label} 레벨업 완료`}function Dr(t,e,n){e==="marketer"?t.brandScore=$(V(t.brandScore)+3*n,0,100):e==="risk"?t.riskScore=$(V(t.riskScore)-4*n,0,100):e==="researcher"?t.ipoReadiness=$(V(t.ipoReadiness)+2*n,0,100):e==="brand"?t.brandScore=$(V(t.brandScore)+2*n,0,100):e==="dev"&&(t.growthRate=V(t.growthRate))}async function Rc(t,e,n,i){if(!Ve[e])throw new Error("시설을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const s=uc(n.company,e);return await Mr(t,s,n,i,`${Ve[e].label} 업그레이드`),await ue(ne(t),r=>{if(!r)return r;r.facilities=r.facilities||{};const o=r.facilities[e]||{level:0};return o.level=p(o.level)+1,r.facilities[e]=o,e==="marketing"&&(r.brandScore=$(V(r.brandScore)+3,0,100)),e==="security"&&(r.riskScore=$(V(r.riskScore)-3,0,100)),r.companyValue=p(r.companyValue)+Math.floor(s*.4),r.updatedAt=Date.now(),r}),await de(t,ae("facility",`${Ve[e].label} 업그레이드`,-s,i==="card"?"카드 결제":"회사 자금")),`${Ve[e].label} 업그레이드 완료`}async function Nc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=Date.now(),i=$i(e.company,n,e.event);if(!i.applied)throw new Error("정산할 내용이 없습니다.");const s=gc(e.company,i,n);return s.ipoReadiness=mi(s,e.bank),await Ee(ne(t),Or(s)),await de(t,ae("settle","실적 정산",i.profit,`매출 ${x(i.revenue)} · 비용 ${x(i.cost)}${i.eventTitle?" · "+i.eventTitle:""}`)),i.profit>=0?`정산 완료: 순이익 +${x(i.profit)}`:`정산 완료: 손실 ${x(i.profit)} (경영 주의)`}async function Pc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=_c(e.company,e.bank);if(!n)throw new Error("아직 다음 단계 조건을 충족하지 않았습니다.");return await Ee(ne(t),{stage:n,level:p(e.company.level)+1,updatedAt:Date.now()}),await de(t,ae("stage","단계 승급",0,`${yt[e.company.stage]} → ${yt[n]}`)),await et(K(z().db,`rooms/${q}/companyNews`),{uid:t,companyName:e.company.name,type:"stage",title:`${e.company.name} ${yt[n]} 승급`,body:`${e.company.name}이(가) ${yt[n]} 단계로 성장했습니다.`,impact:"up",createdAt:Date.now()}),`🎉 ${yt[n]} 단계로 승급했습니다!`}function Oc(t,e){const n=Mn((e&&e.creditScore)!=null?e.creditScore:60);e&&e.businessLoan&&p(e.businessLoan.principal)+p(e.businessLoan.interest);const i=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;return[{ok:t.companyValue>=5e9,label:"회사 가치 50억원 이상"},{ok:t.brandScore>=70,label:"브랜드 점수 70 이상"},{ok:t.riskScore<=40,label:"리스크 점수 40 이하"},{ok:t.lastProfit>0,label:"최근 순이익 플러스"},{ok:Dt[n]>=Dt.B,label:"Bank 신용등급 B 이상"},{ok:!i,label:"사업대출 연체 없음"}]}async function Mc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=e.company;if(n.ipoReadiness<100)throw new Error("IPO 준비도가 100%가 아닙니다.");if(!Oc(n,e.bank).every(l=>l.ok))throw new Error("IPO 체크리스트를 모두 충족해야 합니다.");const s=Date.now(),r=("STK"+(n.name.replace(/[^A-Za-z0-9가-힣]/g,"").slice(0,3).toUpperCase()||"CO")+String(s%100)).slice(0,8),o=Math.max(1e3,Math.floor(n.companyValue/1e6)),a=n.companyValue;return await Sr(K(z().db,`rooms/${q}/companyMarket/${t}`),{listed:!1,status:"candidate",ticker:r,ipoPrice:o,marketCap:a,sector:n.sector,companyName:n.name,listedAt:0,createdAt:s,updatedAt:s}),await Ee(ne(t),{stage:"LISTED",level:p(n.level)+1,updatedAt:s}),await de(t,ae("ipo","IPO 상장 후보 등록",0,`티커 ${r} · 공모가 ${x(o)}`)),await et(K(z().db,`rooms/${q}/companyNews`),{uid:t,companyName:n.name,type:"ipo",title:`${n.name} 상장 후보 등록`,body:`${n.name}이(가) IPO 심사를 통과해 상장 후보(${r})로 등록되었습니다. Battle 종목 편입은 v3.1에서 진행됩니다.`,impact:"up",createdAt:s}),`🏆 IPO 상장 후보 등록 완료! (티커 ${r})`}const _g=Object.freeze(Object.defineProperty({__proto__:null,BIZ_LIMIT_BY_GRADE:mc,BIZ_LOAN_RATE_DAY:kr,EMPLOYEES:re,EMPLOYEE_IDS:rc,FACILITIES:Ve,FACILITY_IDS:oc,FOUND_COST:Di,ROOM:q,SECTORS:We,SECTOR_IDS:ag,SETTLE_MIN_MS:Tr,STAGES:ac,STAGE_LABEL:yt,STRATEGIES:Lt,applyIpo:Mc,bizLoanLimit:Nr,clamp:$,computeIpo:mi,computeSettle:$i,defaultCompany:cc,empCount:Ar,employeeCost:dc,employeeLevelCost:Ac,eventEffects:hc,facilityCost:uc,facilityTotal:Rr,fireEmployee:kc,foundCompany:Ic,foundCost:Ec,foundDiscount:pc,gradeFromScore:Mn,hireEmployee:Tc,int:p,investToCompany:Cc,ipoChecklist:Oc,levelUpEmployee:Lr,loadState:Pr,logItem:ae,nextStage:_c,num:V,promoteStage:Pc,repayBusinessLoan:Ts,resolveEvent:fc,sanitizeName:wc,settleNow:Nc,stageRank:lg,takeBusinessLoan:bc,upgradeFacility:Rc,vipRank:Ss,withdrawFromCompany:Sc,won:x},Symbol.toStringTag,{value:"Module"})),{won:E,int:O,num:gg,SECTORS:X,SECTOR_IDS:Lc,STRATEGIES:Fn,EMPLOYEES:Dc,EMPLOYEE_IDS:xc,FACILITIES:xr,FACILITY_IDS:$r,STAGE_LABEL:xt,stageRank:vg,empCount:Ln,facilityTotal:rn,facilityCost:$c,employeeCost:Fc,employeeLevelCost:Uc,foundCost:Fr,foundDiscount:Bc,gradeFromScore:Wc,bizLoanLimit:yg,nextStage:bg,ipoChecklist:wg}=_g,Eg="yaV8N60yIiUggaWNpNF2VhkCwxb2",B=document.getElementById("app");let g=null,le="dashboard",Vc=!1,Ye=!1,oe="cash",ie={name:"",sector:"fintech",strategy:"stable",slogan:""},ks=!1,_i=null,gi=null;Ig();async function Ig(){if(!eg){Jo("Firebase 설정이 비어 있습니다.");return}Sg();let t=null;try{t=await tg()}catch{}if(!t){og({message:"STONK Home에서 로그인 후 이용해 주세요. 같은 계정의 자산이 그대로 연결됩니다."}),Tg();return}try{Vc=t.uid===Eg||String(t.email||"").toLowerCase()==="tomem@naver.com",g=await Pr(t.uid),Ce(),Cg()}catch(e){console.error("[company] 로드 실패:",e),Jo("회사 데이터를 불러오지 못했습니다: "+(e&&e.message))}}async function Hc(){if(g){try{g=await Pr(g.uid)}catch(t){console.warn(t)}Ce()}}function M(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function yn(t,e="ok"){const n=document.createElement("div");n.className="co-toast "+e,n.textContent=t,document.body.appendChild(n),setTimeout(()=>{n.classList.add("hide"),setTimeout(()=>n.remove(),280)},2400)}async function _e(t){if(!Ye){Ye=!0;try{const e=await t();e&&yn(e,"ok"),await Hc()}catch(e){yn(e&&e.message||"오류가 발생했습니다.","err")}finally{Ye=!1}}}function Qt(t){const e=document.getElementById(t);return e?Math.floor(Number(e.value)||0):0}function jc(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function Cg(){if(g&&g.settleFeed&&g.settleFeed.applied){const t=g.settleFeed.profit;yn(`실적 정산: ${t>=0?"+":""}${E(t)}`,t>=0?"ok":"warn")}}function Sg(){B.innerHTML='<div class="co-center"><div class="co-spin"></div><p>STONK Company 연결 중…</p></div>'}function Jo(t){B.innerHTML=`<div class="co-center"><h2>⚠️ 오류</h2><p>${M(t)}</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로</a></div>`}function Tg(){B.innerHTML='<div class="co-center"><div class="co-logo"><span class="co-mark">🏢</span><b>STONK</b> Company</div><h2>로그인이 필요합니다</h2><p class="muted">STONK Home에서 로그인 후 이용해 주세요.</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로 이동</a></div>'}function Ce(){if(!g)return;g.company;const t=g.bank||{};B.className=t.vipTier==="BLACK"?"is-black":"";const e=[["dashboard","대시보드"],["company","회사정보"],["employees","직원"],["facilities","시설"],["funds","자금/Bank"],["ipo","IPO"],["logs","뉴스/로그"]];B.innerHTML=`
    <header class="co-header">
      <a class="co-brand" href="#" data-home title="STONK Company 메인"><span class="co-mark">🏢</span><b>STONK</b> Company</a>
      <div class="co-nav">
        <a href="../STONK-Home/index.html">홈</a>
        <a href="../STONK-Battle/index.html">주식시장</a>
        <a href="../STONK-Bank/index.html">은행</a>
        <a href="../STONK-Board/index.html">주식소식</a>
        ${Vc?'<a href="../STONK-Admin/market-admin.html">관리자</a>':""}
      </div>
      <div class="co-user"><span class="co-nick">${M(g.nickname)}</span>${t.vipTier&&t.vipTier!=="NORMAL"?`<span class="co-vip v-${t.vipTier}">${zc(t.vipTier)}</span>`:""}</div>
    </header>
    <nav class="co-tabs">${e.map(([n,i])=>`<button class="co-tab ${le===n?"active":""}" data-tab="${n}">${i}</button>`).join("")}</nav>
    <main class="co-main">${Ag()}</main>
    <footer class="co-footer">STONK Company는 게임머니 기반 경영 시스템입니다. 실제 회사 설립·투자·주식과 무관합니다.</footer>`,tv()}const kg={NORMAL:"일반",SILVER:"실버",GOLD:"골드",PLATINUM:"플래티넘",BLACK:"블랙"};function zc(t){return kg[t]||"일반"}function Ag(){return!g.company&&le!=="dashboard"&&le!=="company"&&(le="dashboard"),le==="company"?Kg():le==="employees"?Yg():le==="facilities"?Qg():le==="funds"?Jg():le==="ipo"?Xg():le==="logs"?ev():Ng()}function As(){const t=g.event;return t?`<div class="co-event"><span>📰</span><div><b>오늘의 금융 이벤트 · ${M(t.title)}</b><small>Bank 이벤트가 회사 가치·사업대출에 소폭 반영됩니다. (게임머니)</small></div></div>`:""}function Rg(t){const e=Math.min(5,1+Math.floor(rn(t)/2)+vg(t.stage)),n=(g.bank||{}).vipTier==="BLACK";return`<div class="co-hq tier-${e} ${n?"black":""}">
    <div class="hq-sky"></div>
    <div class="hq-building">${"🏢".repeat(Math.min(3,1+Math.floor(rn(t)/4)))}</div>
    <div class="hq-meta"><b>${M(t.name)}</b><span>${X[t.sector].icon} ${X[t.sector].label} · ${xt[t.stage]}</span>
      <small>직원 ${Ln(t)}명 · 시설 Lv.${rn(t)} · 브랜드 ${O(t.brandScore)}</small></div>
  </div>`}function on(t,e,n){return`<div class="co-gauge"><div class="cg-head"><span>${t}</span><b>${O(e)}%</b></div><div class="cg-bar ${n||""}"><span style="width:${Math.max(0,Math.min(100,O(e)))}%"></span></div></div>`}function A(t,e,n){return`<div class="co-row"><span>${t}</span><b class="${n||""}">${e}</b></div>`}function Ng(){const t=g.company,e=g.bank||{};if(!t){const o=Fr(e),a=Bc(e);return`${As()}
      <div class="co-card hero">
        <h2>아직 설립한 회사가 없습니다.</h2>
        <p class="muted">내 회사를 세우고, 키우고, 상장시키는 <b>STONK 타이쿤</b>을 시작하세요. 모든 금액은 게임머니입니다.</p>
        <div class="co-row"><span>설립 비용</span><b>${a>0?`<s class="muted">${E(Di)}</s> ${E(o)} <small class="ok">${Math.round(a*100)}% 할인</small>`:E(o)}</b></div>
        <div class="co-row"><span>보유 현금</span><b>${E(g.cash)}</b></div>
        <button class="co-btn primary big" data-tab="company">회사 설립하러 가기</button>
        <p class="co-note">현금이 부족하면 자금/Bank 탭에서 <b>사업대출</b>을 받거나 <b>STONK Card</b>로 결제할 수 있습니다.</p>
      </div>
      <div class="co-grid">${Lc.slice(0,6).map(l=>Og(l)).join("")}</div>`}const n=t.ipoReadiness,i=bg(t,e),s=e.businessLoan||{},r=O(s.principal)+O(s.interest);return ks?qg(t,e):`${As()}
    <div class="co-grid">
      <div class="co-card span2 office-card">
        <h3>라이브 오피스 <span class="co-tag">${X[t.sector].icon} ${X[t.sector].label} · ${xt[t.stage]}</span>
          <button class="co-btn ghost small" data-act="photo" style="float:right">📷 스냅샷</button></h3>
        ${Gc(t,e)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${i?`<button class="co-btn gold" data-act="promote">⬆️ ${xt[i]} 승급</button>`:""}
        </div>
      </div>
      <div class="co-card office-status">${zg(t,e)}</div>
      <div class="co-card">
        <h3>경영 지표</h3>
        ${A("회사 가치",E(t.companyValue))}
        ${A("회사 자금",E(t.companyCash),t.companyCash<=0?"warn":"")}
        ${A("최근 순이익",(t.lastProfit>=0?"+":"")+E(t.lastProfit),t.lastProfit<0?"warn":"ok")}
        ${A("누적 매출 / 비용",E(t.totalRevenue)+" / "+E(t.totalCost))}
        ${A("성장률",(gg(t.growthRate)*100).toFixed(2)+"%")}
      </div>
      <div class="co-card">
        <h3>회사 상태</h3>
        ${on("IPO 준비도",n,n>=70?"ok":"")}
        ${on("브랜드 점수",t.brandScore,"blue")}
        ${on("리스크 점수",t.riskScore,t.riskScore>60?"danger":"warn")}
      </div>
      <div class="co-card">
        <h3>Bank 연동</h3>
        ${A("신용등급",Wc(e.creditScore!=null?e.creditScore:60))}
        ${A("VIP 등급",zc(e.vipTier))}
        ${A("카드",Pg(e.card))}
        ${A("사업대출",r>0?E(r):"없음",r>0?"warn":"")}
        <button class="co-btn ghost small" data-tab="funds">자금/Bank 관리</button>
      </div>
      <div class="co-card span2">
        <h3>최근 경영 로그</h3>
        ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.slice(0,6).map(Jc).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
      </div>
    </div>`}function Pg(t){return t=t||{},t.enabled?t.lost?"분실":t.suspended?"정지":t.overdue?"미납":"정상":"미발급"}function Og(t){const e=X[t];return`<div class="co-card sector-mini"><div class="sm-ico">${e.icon}</div><b>${e.label}</b><small>${M(e.note)}</small></div>`}const bn={dev:{e:"💻",cls:"dev",act:"typing",bub:"코드 작성 중"},marketer:{e:"📣",cls:"marketer",act:"presenting",bub:"신규 캠페인 준비 중"},sales:{e:"🤝",cls:"sales",act:"walking",bub:"고객 미팅 준비 중"},account:{e:"🧮",cls:"account",act:"typing",bub:"비용 정산 중"},risk:{e:"🧯",cls:"risk",act:"checking",bub:"리스크 점검 중"},researcher:{e:"🔭",cls:"researcher",act:"researching",bub:"IPO 자료 검토 중"},ops:{e:"🛠️",cls:"ops",act:"walking",bub:"사무실 순찰 중"},brand:{e:"✨",cls:"brand",act:"presenting",bub:"브랜드 지표 상승 중"}},qc={office:"🏢",server:"🖥️",lab:"🧪",marketing:"📈",accounting:"📒",security:"🔒"},Mg=16;function Lg(t){const e=[];for(const n of xc){const i=(t.employees||{})[n]||{},s=Math.max(0,O(i.count)),r=Math.max(1,O(i.level));for(let o=0;o<s;o++)e.push({type:n,level:r})}return e}const gt={entrance:{x:3,y:5,w:24,h:26,label:"입구"},desk:{x:30,y:5,w:40,h:30,label:"책상"},server:{x:73,y:5,w:24,h:26,label:"서버실"},meeting:{x:3,y:37,w:24,h:26,label:"회의실"},corridor:{x:29,y:40,w:42,h:18,label:"복도"},lab:{x:73,y:37,w:24,h:26,label:"연구소"},accounting:{x:3,y:68,w:24,h:27,label:"회계실"},lounge:{x:29,y:62,w:42,h:33,label:"휴게"},security:{x:73,y:68,w:24,h:27,label:"보안실"}},Dg={dev:"desk",marketer:"meeting",sales:"corridor",account:"accounting",risk:"security",researcher:"lab",ops:"corridor",brand:"meeting"},xg={office:"desk",server:"server",lab:"lab",marketing:"meeting",accounting:"accounting",security:"security"};function Xo(t){let e=2166136261;t=String(t);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e3/1e3}function $g(t,e){const n=e.businessLoan?O(e.businessLoan.principal)+O(e.businessLoan.interest):0;return Ye?"settle":t.riskScore>60?"risk":t.ipoReadiness>=70&&t.stage!=="LISTED"?"ipo":n>5e7?"loan":Ln(t)<3?"understaff":rn(t)<4?"underfac":"normal"}const Fg={settle:["이번 실적 정리 중","매출 데이터 확인 중"],risk:["보안 점검이 필요합니다","리스크 보고서 작성 중"],ipo:["상장 자료 검토 중","IR 자료 준비 중"],loan:["이자 부담을 확인 중","상환 계획 검토 중"],understaff:["인력이 부족합니다","채용이 필요합니다"],underfac:["시설 업그레이드가 필요","서버 공간이 부족합니다"],normal:null};function Ug(t,e){const n=Fg[e];return n?n[(t._i||0)%n.length]:(bn[t.type]||bn.dev).bub}function Bg(t,e){e=e||{};const n=bn[t.type]||bn.dev,i=e.pos?`left:${e.pos.x}%;top:${e.pos.y}%;`:"";return`<div class="av av-${n.cls} act-${n.act}${e.arrive?" av-arrive":""}" style="${i}--d:${e.i%8*.35}s" data-emp-detail="${t.type}" role="button" tabindex="0" aria-label="${M(n.cls)} 직원 상세">
    <div class="av-person"><span class="av-head"></span><span class="av-torso"></span></div>
    <span class="av-badge">${n.e}</span>${t.level>1?`<i class="av-lv">Lv${t.level}</i>`:""}
    ${e.bubble?`<span class="av-bubble">${M(e.bubble)}</span>`:""}
  </div>`}function Gc(t,e){const n=(e||{}).vipTier==="BLACK",i=Lg(t),s=i.length,r=typeof window<"u"&&window.innerWidth<=760?10:Mg,o=i.slice(0,r),a=s-o.length;o.forEach((m,v)=>{m._i=v});const l=$g(t,e),c=l==="settle"||t.ipoReadiness>=70&&t.stage!=="LISTED";let u=null;const d=o.map((m,v)=>{const w=gt[Dg[m.type]||"desk"],U=w.x+3+Xo(t.companyId+":"+m.type+":x:"+v)*Math.max(2,w.w-12),J=w.y+4+Xo(t.companyId+":"+m.type+":y:"+v)*Math.max(2,w.h-16);let he=!1;return _i&&_i.type===m.type&&u!==m.type&&(he=!0,u=m.type),Bg(m,{pos:{x:Math.round(U),y:Math.round(J)},i:v,bubble:v<3?Ug(m,l):null,arrive:he})}).join(""),h=Object.entries(gt).map(([m,v])=>`<div class="zone zone-${m}" data-zone="${m}" style="left:${v.x}%;top:${v.y}%;width:${v.w}%;height:${v.h}%"><i>${v.label}</i></div>`).join(""),f=$r.map(m=>{const v=O(((t.facilities||{})[m]||{}).level),w=gt[xg[m]]||gt.desk,U=m==="server"&&["fintech","game","security"].includes(t.sector)||m==="lab"&&["bio","robot","semicon"].includes(t.sector),J=gi&&gi.type===m;return`<div class="fac-o fac-${m} ${v>0?"lv"+Math.min(4,v):"locked"} ${U?"hot":""} ${J?"building":""}" style="left:${w.x+w.w-17}%;top:${w.y+2}%" data-fac-detail="${m}" role="button" tabindex="0" aria-label="${M(xr[m].label)} 상세">
      <span class="fo-ico">${qc[m]}</span>${v>0?`<b>${v}</b>`:""}${J?'<span class="fo-build">공사중</span>':""}</div>`}).join("");return`<div class="office stage-${t.stage} sector-${t.sector} ${n?"black":""} ${c?"collab":""} ${Ye?"settling":""}" aria-label="라이브 오피스">
    <div class="office-stage">
      ${h}
      ${f}
      ${d}
      ${c?`<div class="collab-ring" style="left:${gt.meeting.x+6}%;top:${gt.meeting.y+6}%"></div>`:""}
      ${s===0?'<div class="office-empty">🪑 텅 빈 사무실 — <b>직원을 고용해 회사를 움직여 보세요</b></div>':""}
    </div>
    ${a>0?`<div class="office-more">+${a}명 근무 중</div>`:""}
    <div class="office-tag">게임머니 기반 타이쿤 오피스 · 클릭해서 직원/시설 상세 보기</div>
  </div>`}function nt(){var t;(t=document.getElementById("officeDetail"))==null||t.remove()}function Kc(t,e){nt();const n=document.createElement("div");n.id="officeDetail",n.className="office-detail-dim",n.innerHTML=`<div class="office-detail"><div class="od-top"><b>${M(e)}</b><button class="co-btn ghost small" data-od-x>닫기</button></div>${t}</div>`,document.body.appendChild(n),n.addEventListener("click",i=>{i.target===n&&nt()}),n.querySelector("[data-od-x]").onclick=nt,n.querySelectorAll("[data-od-hire]").forEach(i=>i.addEventListener("click",()=>{nt(),Yc(i.dataset.odHire)})),n.querySelectorAll("[data-od-level]").forEach(i=>i.addEventListener("click",()=>{nt(),_e(()=>Lr(g.uid,i.dataset.odLevel,g,oe==="card"?"card":"company"))})),n.querySelectorAll("[data-od-fac]").forEach(i=>i.addEventListener("click",()=>{nt(),Qc(i.dataset.odFac)})),n.querySelectorAll("[data-tab]").forEach(i=>i.addEventListener("click",()=>{nt(),le=i.dataset.tab,Ce()}))}const Wg={dev:"서버실을 업그레이드하면 개발 효율이 더 좋아집니다.",marketer:"마케팅룸을 함께 강화하면 브랜드가 빠르게 오릅니다.",sales:"영업 인원이 많을수록 매출이 늘어납니다.",account:"회계실과 함께 강화하면 비용이 더 절감됩니다.",risk:"보안실을 함께 강화하면 리스크가 더 낮아집니다.",researcher:"연구소 레벨이 높으면 IPO 준비도가 더 빨리 오릅니다.",ops:"운영 매니저는 시설 효율을 높여 줍니다.",brand:"엔터테인먼트 업종에서 특히 효과가 큽니다."};function Vg(t){const e=g.company;if(!e)return;const n=(e.employees||{})[t]||{count:0,level:1},i=Dc[t],s=bn[t],r=O(n.count),o=Math.max(1,O(n.level));Kc(`<div class="od-head"><span class="od-ico">${s.e}</span><div><b>${i.label} Lv.${o}</b><small>현재 업무: ${s.bub}</small></div></div>
    ${A("효과",i.effect)}
    ${A("회사 내 인원 / 평균 레벨",r+"명 · Lv."+o)}
    ${A("고용비 / 레벨업비",E(Fc(e,t))+" / "+E(Uc(e,t)))}
    <p class="co-note">추천: ${M(Wg[t]||"레벨업하면 효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-hire="${t}">고용</button><button class="co-btn small" data-od-level="${t}" ${r>0?"":"disabled"}>레벨업</button><button class="co-btn ghost small" data-tab="employees">직원 탭</button></div>`,"직원 상세")}const Hg={office:"직원 수용량과 책상이 늘어납니다.",server:"서버 랙이 추가되고 매출 보정이 커집니다.",lab:"연구 장비가 추가되고 성장/IPO 보너스가 커집니다.",marketing:"광고판이 추가되고 브랜드 상승이 커집니다.",accounting:"비용 절감 효과가 커집니다.",security:"리스크 감소 효과가 커집니다."};function jg(t){const e=g.company;if(!e)return;const n=xr[t],i=O(((e.facilities||{})[t]||{}).level);Kc(`<div class="od-head"><span class="od-ico">${qc[t]}</span><div><b>${n.label} Lv.${i}</b><small>${n.effect}</small></div></div>
    ${i===0?'<p class="co-note">아직 미설치(잠김) 시설입니다. 업그레이드로 설치하세요.</p>':A("가동률",Math.min(100,40+i*15)+"%")}
    ${A("다음 레벨 / 비용","Lv."+(i+1)+" · "+E($c(e,t)))}
    <p class="co-note">다음 레벨: ${M(Hg[t]||"효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-fac="${t}">업그레이드</button><button class="co-btn ghost small" data-tab="facilities">시설 탭</button></div>`,"시설 상세")}function Yc(t){_i={type:t},_e(()=>Tc(g.uid,t,g,oe==="card"?"card":"company")).finally(()=>{setTimeout(()=>{_i=null},1300)})}function Qc(t){gi={type:t},_e(()=>Rc(g.uid,t,g,oe==="card"?"card":"company")).finally(()=>{setTimeout(()=>{gi=null},1100)})}function zg(t,e){const n=g.event||{},i=Ln(t),s=rn(t),r=t.companyCash>0&&i>0?"활발":i>0?"유지":"정지",o=Math.min(100,Math.round(s/($r.length*3)*100)),a=e.businessLoan?O(e.businessLoan.principal)+O(e.businessLoan.interest):0,l=[];return i===0?l.push({t:"직원을 고용해 회사를 가동하세요.",tab:"employees"}):i<3&&l.push({t:"직원을 1명 더 고용하면 정산 효율이 좋아집니다.",tab:"employees"}),t.companyCash<=0&&l.push({t:"회사 자금이 부족합니다. 출자/사업대출을 검토하세요.",tab:"funds"}),t.riskScore>60&&l.push({t:"리스크가 높습니다. 보안실 또는 리스크 매니저를 강화하세요.",tab:"facilities"}),t.brandScore<30&&l.push({t:"브랜드가 낮습니다. 마케팅룸/브랜드 매니저를 강화하세요.",tab:"facilities"}),s<4&&l.push({t:"사무실을 업그레이드하면 더 많은 직원을 수용할 수 있습니다.",tab:"facilities"}),t.ipoReadiness>=70&&t.stage!=="LISTED"&&l.push({t:"IPO 준비도 70%↑ — 상장 심사 준비를 시작하세요.",tab:"ipo"}),a>0&&l.push({t:"사업대출 상환 계획을 확인하세요.",tab:"funds"}),n.type==="lowrate"&&l.push({t:"저금리 이벤트 중 — 사업대출 조건이 유리합니다.",tab:"funds"}),(n.type==="highrate"||n.type==="caution")&&l.push({t:"금융 경계 분위기 — 고액 대출/카드 사용에 주의하세요.",tab:"funds"}),l.length||l.push({t:"직원들이 안정적으로 업무 중입니다.",tab:""}),`<h3>오늘의 사무실</h3>
    <div class="co-row"><span>분위기</span><b>${{활발:"활기찬 사무실 🌟",유지:"차분한 사무실 🙂",정지:"조용한 사무실 😴"}[r]}</b></div>
    <div class="co-row"><span>직원 활동도</span><b>${i}명 · ${r}</b></div>
    ${on("시설 가동률",o,o>=60?"ok":"")}
    <div class="co-row"><span>리스크 경보</span><b class="${t.riskScore>60?"warn":"ok"}">${t.riskScore>60?"주의":"안정"}</b></div>
    <div class="co-row"><span>Bank 이벤트</span><b>${M(n.title||"—")}</b></div>
    <div class="co-row"><span>사업대출 부담</span><b class="${a>0?"warn":""}">${a>0?E(a):"없음"}</b></div>
    <div class="office-recs"><b>다음 추천 행동</b><ul>${l.slice(0,3).map(u=>`<li ${u.tab?`data-tab="${u.tab}" role="button" tabindex="0"`:""}>${M(u.t)}${u.tab?' <i class="rec-go">→</i>':""}</li>`).join("")}</ul></div>`}function qg(t,e){return`<div class="photo-wrap">
    <div class="co-card office-card photo">
      <div class="photo-head"><div><b>${M(t.name)}</b><small>${X[t.sector].icon} ${X[t.sector].label} · ${xt[t.stage]}</small></div>
        <button class="co-btn ghost small" data-act="photo">닫기</button></div>
      ${Gc(t,e)}
      <div class="photo-stats">
        <div><span>회사 가치</span><b>${E(t.companyValue)}</b></div>
        <div><span>IPO 준비도</span><b>${O(t.ipoReadiness)}%</b></div>
        <div><span>직원</span><b>${Ln(t)}명</b></div>
        <div><span>단계</span><b>${xt[t.stage]}</b></div>
      </div>
      <p class="co-note">내 회사 스냅샷 · 게임머니 기반 타이쿤입니다.</p>
    </div>
  </div>`}function Gg(t){try{const e=document.createElement("div");e.className="co-settle-dim";const n=t.profit>=0;e.innerHTML=`<div class="co-settle ${n?"good":"bad"}">
      <h3>${n?"📈 실적 정산 완료":"📉 실적 정산 · 손실 주의"}</h3>
      <div class="cs-rows">
        <div><span>매출</span><b class="ok">+${E(t.revenue)}</b></div>
        <div><span>비용</span><b class="warn">−${E(t.cost)}</b></div>
        <div class="cs-profit"><span>순이익</span><b class="cs-count ${n?"ok":"warn"}" data-to="${t.profit}">${n?"+":"−"}${E(0)}</b></div>
        <div><span>회사가치</span><b class="ok">+${E(t.valueGain)}</b></div>
      </div>
      <button class="co-btn primary" data-settle-close>확인</button>
    </div>`,document.body.appendChild(e);const i=()=>e.remove();e.querySelector("[data-settle-close]").onclick=i,e.addEventListener("click",a=>{a.target===e&&i()});const s=e.querySelector(".cs-count"),r=Math.abs(O(t.profit)),o=t.profit>=0?"+":"−";if(jc()||r===0)s.textContent=o+E(r);else{const a=performance.now(),l=700,c=u=>{const d=Math.min(1,(u-a)/l);s.textContent=o+E(Math.round(r*d)),d<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}setTimeout(()=>{document.body.contains(e)&&i()},6e3)}catch{}}function Kg(){const t=g.company,e=g.bank||{};if(t)return`<div class="co-card">
      <h3>회사 정보</h3>
      ${Rg(t)}
      ${A("회사명",M(t.name))}
      ${A("슬로건",M(t.slogan)||"—")}
      ${A("업종",X[t.sector].icon+" "+X[t.sector].label)}
      ${A("전략",Fn[t.strategy].label)}
      ${A("단계 / 레벨",xt[t.stage]+" · Lv."+t.level)}
      ${A("설립일",new Date(O(t.createdAt)).toLocaleDateString("ko-KR"))}
      <p class="co-note">유저당 회사 1개를 운영합니다(v1.0). 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>
    </div>`;const n=Fr(e),i=Bc(e);return`${As()}
    <div class="co-card">
      <h3>회사 설립 <span class="co-tag">게임머니 타이쿤</span></h3>
      <label class="co-field"><span>회사명</span><input id="foName" maxlength="24" placeholder="예: STONK테크" value="${M(ie.name)}" /></label>
      <label class="co-field"><span>슬로건(선택)</span><input id="foSlogan" maxlength="40" placeholder="예: 세상을 바꾸는 기술" value="${M(ie.slogan)}" /></label>
      <div class="co-sub">업종 선택</div>
      <div class="co-pick">${Lc.map(s=>`<button class="co-opt ${ie.sector===s?"on":""}" data-found-sector="${s}">${X[s].icon} ${X[s].label}</button>`).join("")}</div>
      <p class="co-note">${X[ie.sector].icon} <b>${X[ie.sector].label}</b> · ${M(X[ie.sector].note)}</p>
      <div class="co-sub">시작 전략</div>
      <div class="co-pick">${Object.keys(Fn).map(s=>`<button class="co-opt ${ie.strategy===s?"on":""}" data-found-strategy="${s}">${Fn[s].label}</button>`).join("")}</div>
      <p class="co-note">${M(Fn[ie.strategy].note)}</p>
      <div class="co-sub">결제수단</div>
      <div class="co-pick">
        <button class="co-opt ${oe==="cash"?"on":""}" data-pm="cash">현금</button>
        <button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button>
        <button class="co-opt ${oe==="loan"?"on":""}" data-pm="loan">사업대출</button>
      </div>
      <div class="co-row"><span>설립 비용</span><b>${i>0?`<s class="muted">${E(Di)}</s> ${E(n)} <small class="ok">${Math.round(i*100)}% 할인</small>`:E(n)}</b></div>
      <div class="co-row"><span>보유 현금</span><b>${E(g.cash)}</b></div>
      <button class="co-btn primary big" data-act="found">${X[ie.sector].label} 회사 설립</button>
      <p class="co-note">결제 성공 후에만 회사가 생성됩니다. 카드/사업대출 결제 실패 시 회사는 생성되지 않습니다. 모든 금액은 게임머니입니다.</p>
    </div>`}function Yg(){const t=g.company;return t?`<div class="co-card"><h3>직원 결제수단 <span class="co-tag">${Ln(t)}명</span></h3>
    <div class="co-pick"><button class="co-opt ${oe==="company"||oe!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${E(t.companyCash)} · 카드는 Bank 청구 예정으로 누적됩니다.</p></div>
    <div class="co-grid">${xc.map(e=>{const n=Dc[e],i=(t.employees||{})[e]||{count:0,level:1};return`<div class="co-card emp">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label}</b><small>${n.effect}</small></div></div>
        ${A("보유 / 레벨",O(i.count)+"명 · Lv."+Math.max(1,O(i.level)))}
        ${A("고용비",E(Fc(t,e)))}
        <div class="co-btnrow">
          <button class="co-btn primary small" data-emp-hire="${e}">고용</button>
          <button class="co-btn small" data-emp-level="${e}" ${O(i.count)>0?"":"disabled"}>레벨업 ${E(Uc(t,e))}</button>
          <button class="co-btn ghost small" data-emp-fire="${e}" ${O(i.count)>0?"":"disabled"}>해고</button>
        </div>
      </div>`}).join("")}</div>`:Fi()}function Qg(){const t=g.company;return t?`<div class="co-card"><h3>시설 결제수단</h3>
    <div class="co-pick"><button class="co-opt ${oe!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${E(t.companyCash)}. 시설 레벨이 오르면 본사가 커집니다.</p></div>
    <div class="co-grid">${$r.map(e=>{const n=xr[e],i=O(((t.facilities||{})[e]||{}).level);return`<div class="co-card fac">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label} <small class="co-tag">Lv.${i}</small></b><small>${n.effect}</small></div></div>
        ${A("업그레이드 비용",E($c(t,e)))}
        <button class="co-btn primary small" data-fac-up="${e}">Lv.${i+1} 업그레이드</button>
      </div>`}).join("")}</div>`:Fi()}function Jg(){const t=g.company,e=g.bank||{},n=e.businessLoan||{},i=O(n.principal)+O(n.interest),s=yg(e);return t?`<div class="co-grid">
    <div class="co-card">
      <h3>자금 이동</h3>
      ${A("개인 현금",E(g.cash))}
      ${A("회사 자금",E(t.companyCash),t.companyCash<=0?"warn":"")}
      <div class="co-amount"><input id="moveAmt" type="number" inputmode="numeric" placeholder="금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn primary" data-act="invest">출자(개인→회사)</button>
        <button class="co-btn" data-act="withdraw">인출(회사→개인)</button>
      </div>
      <p class="co-note">인출 시 브랜드 점수가 소폭 감소하고 리스크가 소폭 증가합니다.</p>
    </div>
    <div class="co-card">
      <h3>Bank 사업대출 <span class="co-tag">개인 대출과 별개</span></h3>
      ${A("신용등급 / 한도",Wc(e.creditScore!=null?e.creditScore:60)+" · "+E(s))}
      ${A("사업대출 잔액",E(i),i>0?"warn":"")}
      ${A("원금 / 이자",E(n.principal)+" / "+E(n.interest))}
      <div class="co-amount"><input id="bizAmt" type="number" inputmode="numeric" placeholder="대출/상환 금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn danger" data-act="bizLoan" ${s<=0?"disabled":""}>사업대출 받기</button>
        <button class="co-btn" data-act="bizRepayCompany" ${i>0?"":"disabled"}>회사자금 상환</button>
        <button class="co-btn ghost" data-act="bizRepayCash" ${i>0?"":"disabled"}>개인현금 상환</button>
      </div>
      <p class="co-note">사업대출금은 <b>회사 자금</b>으로 입금됩니다. 이자 하루 ${(kr*100).toFixed(1)}%. 연체 시 리스크가 오릅니다.</p>
    </div>
  </div>`:Fi()}function Xg(){const t=g.company,e=g.bank||{};if(!t)return Fi();const n=wg(t,e),i=n.every(r=>r.ok),s=t.ipoReadiness;return`<div class="co-card ipo-card ${e.vipTier==="BLACK"?"black":""}">
      <h3>IPO 준비 ${t.stage==="LISTED"?'<span class="co-tag ok">상장 후보</span>':""}</h3>
      ${on("IPO 준비도",s,s>=100?"ok":"")}
      <ul class="co-check">${n.map(r=>`<li class="${r.ok?"on":""}">${r.ok?"✅":"⬜"} ${M(r.label)}</li>`).join("")}</ul>
      ${t.stage==="LISTED"?'<p class="co-note ok">상장 후보 등록 완료. Battle 종목 편입 준비 완료 · Board/Wiki 연동 데이터 생성 완료. 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>':`<button class="co-btn gold big" data-act="ipo" ${s>=100&&i?"":"disabled"}>${s>=100?"상장 심사 신청":`준비도 ${s}% (100% 필요)`}</button>
           <p class="co-note">IPO 준비도는 회사 가치·브랜드·순이익·시설·직원에서 오르고 리스크·사업대출 연체로 내려갑니다.</p>`}
    </div>`}const Zg={found:"🏗️",settle:"📊",invest:"💰",withdraw:"🏧",hire:"👤",fire:"👋",levelup:"⬆️",facility:"🏢",loan:"📝",stage:"🎉",ipo:"🏆"};function Jc(t){return`<li><span class="lg-ico">${Zg[t.type]||"•"}</span><div class="lg-mid"><b>${M(t.title)}</b><small>${M(t.memo||"")}</small></div>${t.amount?`<b class="lg-amt ${t.amount>=0?"plus":"minus"}">${t.amount>=0?"+":"−"}${E(Math.abs(t.amount))}</b>`:""}</li>`}function ev(){return`<div class="co-card"><h3>경영 로그 / 뉴스</h3>
    ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.map(Jc).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
    <p class="co-note">회사 뉴스는 Board 연동용(rooms/MAIN/companyNews)으로도 기록됩니다.</p></div>`}function Fi(){return'<div class="co-card"><p class="co-empty">먼저 회사를 설립하세요.</p><button class="co-btn primary" data-tab="company">회사 설립</button></div>'}function tv(){var t;(t=B.querySelector("[data-home]"))==null||t.addEventListener("click",e=>{e.preventDefault(),le="dashboard",window.scrollTo(0,0),Ce()}),B.querySelectorAll("[data-tab]").forEach(e=>e.addEventListener("click",()=>{le=e.dataset.tab,Ce()})),B.querySelectorAll("[data-found-sector]").forEach(e=>e.addEventListener("click",()=>{ie.sector=e.dataset.foundSector,Rs(),Ce()})),B.querySelectorAll("[data-found-strategy]").forEach(e=>e.addEventListener("click",()=>{ie.strategy=e.dataset.foundStrategy,Rs(),Ce()})),B.querySelectorAll("[data-pm]").forEach(e=>e.addEventListener("click",()=>{oe=e.dataset.pm,Ce()})),B.querySelectorAll("[data-emp-hire]").forEach(e=>e.addEventListener("click",()=>Yc(e.dataset.empHire))),B.querySelectorAll("[data-emp-fire]").forEach(e=>e.addEventListener("click",()=>_e(()=>kc(g.uid,e.dataset.empFire,g)))),B.querySelectorAll("[data-emp-level]").forEach(e=>e.addEventListener("click",()=>_e(()=>Lr(g.uid,e.dataset.empLevel,g,oe==="card"?"card":"company")))),B.querySelectorAll("[data-fac-up]").forEach(e=>e.addEventListener("click",()=>Qc(e.dataset.facUp))),B.querySelectorAll("[data-emp-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),Vg(e.dataset.empDetail)})),B.querySelectorAll("[data-fac-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),jg(e.dataset.facDetail)})),B.querySelectorAll("[data-zone]").forEach(e=>e.addEventListener("click",()=>{const n=e.classList.contains("focus");B.querySelectorAll(".zone.focus").forEach(i=>i.classList.remove("focus")),n||e.classList.add("focus")})),B.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>iv(e.dataset.act)))}function Rs(){const t=document.getElementById("foName"),e=document.getElementById("foSlogan");t&&(ie.name=t.value),e&&(ie.slogan=e.value)}async function nv(){if(Ye)return;Ye=!0;const t=document.querySelector(".office");t&&t.classList.add("settling");let e=null;try{e=$i(g.company,Date.now(),g.event)}catch{}try{await Nc(g.uid,g),await Hc(),e&&e.applied?Gg(e):yn("정산 완료","ok")}catch(n){yn(n&&n.message||"정산할 내용이 없습니다.","err")}finally{Ye=!1}}function iv(t){if(t==="found"){Rs();const e=Fr(g.bank);return Un(e,"설립 심사 중...",()=>Ic(g.uid,{...ie,payMethod:oe},g))}if(t==="photo"){ks=!ks,window.scrollTo(0,0),Ce();return}if(t==="settle")return nv();if(t==="promote")return _e(()=>Pc(g.uid,g));if(t==="invest"){const e=Qt("moveAmt");return Un(e,"금고 이체 처리 중...",()=>Cc(g.uid,e,g))}if(t==="withdraw"){const e=Qt("moveAmt");return Un(e,"인출 처리 중...",()=>Sc(g.uid,e,g))}if(t==="bizLoan"){const e=Qt("bizAmt");return Un(e,"대출 심사 중...",()=>bc(g.uid,e,g))}if(t==="bizRepayCompany")return _e(()=>Ts(g.uid,Qt("bizAmt"),"company",g));if(t==="bizRepayCash")return _e(()=>Ts(g.uid,Qt("bizAmt"),"cash",g));if(t==="ipo")return _e(()=>Mc(g.uid,g))}function sv(t){return t=O(t),t>=1e7||g&&g.cash>0&&t>=g.cash*.3}function Un(t,e,n){if(!sv(t))return _e(n);const i=document.createElement("div");i.className="co-modal-dim",i.innerHTML=`<div class="co-modal"><h3>거래 확인</h3><p class="co-modal-amt">${E(t)}</p><p class="co-note">STONK 가상 게임머니 거래입니다.</p>
    <div class="co-modal-stage" hidden><span class="co-spin sm"></span> <span>${M(e)}</span></div>
    <div class="co-modal-btns"><button class="co-btn" data-mc="cancel">취소</button><button class="co-btn primary" data-mc="ok">확인</button></div></div>`,document.body.appendChild(i);const s=()=>i.remove();i.querySelector('[data-mc="cancel"]').onclick=s,i.addEventListener("click",r=>{r.target===i&&s()}),i.querySelector('[data-mc="ok"]').onclick=()=>{i.querySelector(".co-modal-btns").hidden=!0,i.querySelector(".co-modal-stage").hidden=!1,setTimeout(()=>{s(),_e(n)},jc()?0:600)}}

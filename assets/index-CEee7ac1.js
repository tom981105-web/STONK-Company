(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var po={};/**
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
 */const Ca={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw Ht(e)},Ht=function(t){return new Error("Firebase Database ("+Ca.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$u=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ji={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[d],n[u],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$u(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Fu;const h=r<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),u!==64){const g=c<<6&192|u;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ta=function(t){const e=Sa(t);return Ji.encodeByteArray(e,!0)},os=function(t){return Ta(t).replace(/\./g,"")},as=function(t){try{return Ji.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uu(t){return ka(void 0,t)}function ka(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bu(n)||(t[n]=ka(t[n],e[n]));return t}function Bu(t){return t!=="__proto__"}/**
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
 */function Vu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wu=()=>Vu().__FIREBASE_DEFAULTS__,Hu=()=>{if(typeof process>"u"||typeof po>"u")return;const t=po.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ju=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&as(t[1]);return e&&JSON.parse(e)},Xi=()=>{try{return Wu()||Hu()||ju()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Aa=t=>{var e,n;return(n=(e=Xi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qu=t=>{const e=Aa(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ra=()=>{var t;return(t=Xi())===null||t===void 0?void 0:t.config},Na=t=>{var e;return(e=Xi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[os(JSON.stringify(n)),os(JSON.stringify(o)),""].join(".")}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function Gu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ku(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yu(){const t=ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qu(){return Ca.NODE_ADMIN===!0}function Ju(){try{return typeof indexedDB=="object"}catch{return!1}}function Xu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zu="FirebaseError";class at extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zu,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ed(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new at(i,a,s)}}function ed(t,e){return t.replace(td,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const td=/\{\$([^}]+)}/g;/**
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
 */function yn(t){return JSON.parse(t)}function H(t){return JSON.stringify(t)}/**
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
 */const Oa=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=yn(as(r[0])||""),n=yn(as(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},nd=function(t){const e=Oa(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sd=function(t){const e=Oa(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ie(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ft(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ii(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function cs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(mo(r)&&mo(o)){if(!cs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function mo(t){return t!==null&&typeof t=="object"}/**
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
 */function qt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class id{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rd(t,e){const n=new od(t,e);return n.subscribe.bind(n)}class od{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ad(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=li),i.error===void 0&&(i.error=li),i.complete===void 0&&(i.complete=li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ad(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function li(){}function xs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ld=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$s=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Z(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lt="[DEFAULT]";/**
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
 */class cd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new jt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dd(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ud(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ud(t){return t===lt?void 0:t}function dd(t){return t.instantiationMode==="EAGER"}/**
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
 */class hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const fd={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},pd=N.INFO,md={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},_d=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=md[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class er{constructor(e){this.name=e,this._logLevel=pd,this._logHandler=_d,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const gd=(t,e)=>e.some(n=>t instanceof n);let _o,go;function vd(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yd(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ma=new WeakMap,Ci=new WeakMap,La=new WeakMap,ci=new WeakMap,tr=new WeakMap;function bd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Qe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ma.set(n,t)}).catch(()=>{}),tr.set(e,t),e}function wd(t){if(Ci.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ci.set(t,e)}let Si={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ci.get(t);if(e==="objectStoreNames")return t.objectStoreNames||La.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ed(t){Si=t(Si)}function Id(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ui(this),e,...n);return La.set(s,e.sort?e.sort():[e]),Qe(s)}:yd().includes(t)?function(...e){return t.apply(ui(this),e),Qe(Ma.get(this))}:function(...e){return Qe(t.apply(ui(this),e))}}function Cd(t){return typeof t=="function"?Id(t):(t instanceof IDBTransaction&&wd(t),gd(t,vd())?new Proxy(t,Si):t)}function Qe(t){if(t instanceof IDBRequest)return bd(t);if(ci.has(t))return ci.get(t);const e=Cd(t);return e!==t&&(ci.set(t,e),tr.set(e,t)),e}const ui=t=>tr.get(t);function Sd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Qe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Qe(o.result),l.oldVersion,l.newVersion,Qe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Td=["get","getKey","getAll","getAllKeys","count"],kd=["put","add","delete","clear"],di=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(di.get(e))return di.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=kd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Td.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return di.set(e,r),r}Ed(t=>({...t,get:(e,n,s)=>vo(e,n)||t.get(e,n,s),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class Ad{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ti="@firebase/app",yo="0.10.13";/**
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
 */const Le=new er("@firebase/app"),Nd="@firebase/app-compat",Pd="@firebase/analytics-compat",Od="@firebase/analytics",Md="@firebase/app-check-compat",Ld="@firebase/app-check",Dd="@firebase/auth",xd="@firebase/auth-compat",$d="@firebase/database",Fd="@firebase/data-connect",Ud="@firebase/database-compat",Bd="@firebase/functions",Vd="@firebase/functions-compat",Wd="@firebase/installations",Hd="@firebase/installations-compat",jd="@firebase/messaging",qd="@firebase/messaging-compat",zd="@firebase/performance",Gd="@firebase/performance-compat",Kd="@firebase/remote-config",Yd="@firebase/remote-config-compat",Qd="@firebase/storage",Jd="@firebase/storage-compat",Xd="@firebase/firestore",Zd="@firebase/vertexai-preview",eh="@firebase/firestore-compat",th="firebase",nh="10.14.1";/**
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
 */const ki="[DEFAULT]",sh={[Ti]:"fire-core",[Nd]:"fire-core-compat",[Od]:"fire-analytics",[Pd]:"fire-analytics-compat",[Ld]:"fire-app-check",[Md]:"fire-app-check-compat",[Dd]:"fire-auth",[xd]:"fire-auth-compat",[$d]:"fire-rtdb",[Fd]:"fire-data-connect",[Ud]:"fire-rtdb-compat",[Bd]:"fire-fn",[Vd]:"fire-fn-compat",[Wd]:"fire-iid",[Hd]:"fire-iid-compat",[jd]:"fire-fcm",[qd]:"fire-fcm-compat",[zd]:"fire-perf",[Gd]:"fire-perf-compat",[Kd]:"fire-rc",[Yd]:"fire-rc-compat",[Qd]:"fire-gcs",[Jd]:"fire-gcs-compat",[Xd]:"fire-fst",[eh]:"fire-fst-compat",[Zd]:"fire-vertex","fire-js":"fire-js",[th]:"fire-js-all"};/**
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
 */const us=new Map,ih=new Map,Ai=new Map;function bo(t,e){try{t.container.addComponent(e)}catch(n){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mt(t){const e=t.name;if(Ai.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,t);for(const n of us.values())bo(n,t);for(const n of ih.values())bo(n,t);return!0}function nr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ze(t){return t.settings!==void 0}/**
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
 */const rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Je=new Ln("app","Firebase",rh);/**
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
 */class oh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
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
 */const zt=nh;function Da(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ki,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Je.create("bad-app-name",{appName:String(i)});if(n||(n=Ra()),!n)throw Je.create("no-options");const r=us.get(i);if(r){if(cs(n,r.options)&&cs(s,r.config))return r;throw Je.create("duplicate-app",{appName:i})}const o=new hd(i);for(const l of Ai.values())o.addComponent(l);const a=new oh(n,s,o);return us.set(i,a),a}function xa(t=ki){const e=us.get(t);if(!e&&t===ki&&Ra())return Da();if(!e)throw Je.create("no-app",{appName:t});return e}function Xe(t,e,n){var s;let i=(s=sh[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(a.join(" "));return}Mt(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ah="firebase-heartbeat-database",lh=1,bn="firebase-heartbeat-store";let hi=null;function $a(){return hi||(hi=Sd(ah,lh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),hi}async function ch(t){try{const n=(await $a()).transaction(bn),s=await n.objectStore(bn).get(Fa(t));return await n.done,s}catch(e){if(e instanceof at)Le.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(n.message)}}}async function wo(t,e){try{const s=(await $a()).transaction(bn,"readwrite");await s.objectStore(bn).put(e,Fa(t)),await s.done}catch(n){if(n instanceof at)Le.warn(n.message);else{const s=Je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Le.warn(s.message)}}}function Fa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uh=1024,dh=30*24*60*60*1e3;class hh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ph(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Eo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dh}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Le.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eo(),{heartbeatsToSend:s,unsentEntries:i}=fh(this._heartbeatsCache.heartbeats),r=os(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Le.warn(n),""}}}function Eo(){return new Date().toISOString().substring(0,10)}function fh(t,e=uh){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Io(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Io(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ju()?Xu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ch(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Io(t){return os(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mh(t){Mt(new pt("platform-logger",e=>new Ad(e),"PRIVATE")),Mt(new pt("heartbeat",e=>new hh(e),"PRIVATE")),Xe(Ti,yo,t),Xe(Ti,yo,"esm2017"),Xe("fire-js","")}mh("");var _h="firebase",gh="10.14.1";/**
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
 */Xe(_h,gh,"app");function sr(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ua(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vh=Ua,Ba=new Ln("auth","Firebase",Ua());/**
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
 */const ds=new er("@firebase/auth");function yh(t,...e){ds.logLevel<=N.WARN&&ds.warn(`Auth (${zt}): ${t}`,...e)}function ts(t,...e){ds.logLevel<=N.ERROR&&ds.error(`Auth (${zt}): ${t}`,...e)}/**
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
 */function De(t,...e){throw ir(t,...e)}function Te(t,...e){return ir(t,...e)}function Va(t,e,n){const s=Object.assign(Object.assign({},vh()),{[e]:n});return new Ln("auth","Firebase",s).create(e,{appName:t.name})}function ht(t){return Va(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ir(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ba.create(t,...e)}function w(t,e,...n){if(!t)throw ir(e,...n)}function Re(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ts(e),new Error(e)}function xe(t,e){t||Re(e)}/**
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
 */function Ri(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bh(){return Co()==="http:"||Co()==="https:"}function Co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bh()||Ku()||"connection"in navigator)?navigator.onLine:!0}function Eh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Zi()||Pa()}get(){return wh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rr(t,e){xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wa{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Re("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Re("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Re("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ih={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ch=new Dn(3e4,6e4);function or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gt(t,e,n,s,i={}){return Ha(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=qt(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Gu()||(c.referrerPolicy="no-referrer"),Wa.fetch()(ja(t,t.config.apiHost,n,a),c)})}async function Ha(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ih),e);try{const i=new Th(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jn(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Va(t,d,c);De(t,d)}}catch(i){if(i instanceof at)throw i;De(t,"network-request-failed",{message:String(i)})}}async function Sh(t,e,n,s,i={}){const r=await Gt(t,e,n,s,i);return"mfaPendingCredential"in r&&De(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ja(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?rr(t.config,i):`${t.config.apiScheme}://${i}`}class Th{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Te(this.auth,"network-request-failed")),Ch.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Te(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function kh(t,e){return Gt(t,"POST","/v1/accounts:delete",e)}async function qa(t,e){return Gt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function un(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ah(t,e=!1){const n=Z(t),s=await n.getIdToken(e),i=ar(s);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:un(fi(i.auth_time)),issuedAtTime:un(fi(i.iat)),expirationTime:un(fi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function fi(t){return Number(t)*1e3}function ar(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const i=as(n);return i?JSON.parse(i):(ts("Failed to decode base64 JWT payload"),null)}catch(i){return ts("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function So(t){const e=ar(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof at&&Rh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Rh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Nh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ni{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=un(this.lastLoginAt),this.creationTime=un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hs(t){var e;const n=t.auth,s=await t.getIdToken(),i=await wn(t,qa(n,{idToken:s}));w(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?za(r.providerUserInfo):[],a=Oh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ni(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function Ph(t){const e=Z(t);await hs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oh(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function za(t){return t.map(e=>{var{providerId:n}=e,s=sr(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Mh(t,e){const n=await Ha(t,{},async()=>{const s=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ja(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lh(t,e){return Gt(t,"POST","/v2/accounts:revokeToken",or(t,e))}/**
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
 */class Rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):So(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=So(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Mh(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Rt;return s&&(w(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(w(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rt,this.toJSON())}_performRefresh(){return Re("not implemented")}}/**
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
 */function Be(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ni(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ah(this,e)}reload(){return Ph(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await hs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await wn(this,kh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,d;const u=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(c=n.createdAt)!==null&&c!==void 0?c:void 0,de=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:ve,emailVerified:pe,isAnonymous:Kn,providerData:Jt,stsTokenManager:Yn}=n;w(ve&&Yn,e,"internal-error");const Xt=Rt.fromJSON(this.name,Yn);w(typeof ve=="string",e,"internal-error"),Be(u,e.name),Be(h,e.name),w(typeof pe=="boolean",e,"internal-error"),w(typeof Kn=="boolean",e,"internal-error"),Be(p,e.name),Be(g,e.name),Be(b,e.name),Be(E,e.name),Be($,e.name),Be(de,e.name);const Et=new Ne({uid:ve,auth:e,email:h,emailVerified:pe,displayName:u,isAnonymous:Kn,photoURL:g,phoneNumber:p,tenantId:b,stsTokenManager:Xt,createdAt:$,lastLoginAt:de});return Jt&&Array.isArray(Jt)&&(Et.providerData=Jt.map(Zt=>Object.assign({},Zt))),E&&(Et._redirectEventId=E),Et}static async _fromIdTokenResponse(e,n,s=!1){const i=new Rt;i.updateFromServerResponse(n);const r=new Ne({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await hs(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];w(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?za(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Rt;a.updateFromIdToken(s);const l=new Ne({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ni(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const To=new Map;function Pe(t){xe(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
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
 */class Ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ga.type="NONE";const ko=Ga;/**
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
 */function ns(t,e,n){return`firebase:${t}:${e}:${n}`}class Nt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ns(this.userKey,i.apiKey,r),this.fullPersistenceKey=ns("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Nt(Pe(ko),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Pe(ko);const o=ns(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Ne._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Nt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Nt(r,e,s))}}/**
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
 */function Ao(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ja(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ka(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Za(e))return"Blackberry";if(el(e))return"Webos";if(Ya(e))return"Safari";if((e.includes("chrome/")||Qa(e))&&!e.includes("edge/"))return"Chrome";if(Xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ka(t=ie()){return/firefox\//i.test(t)}function Ya(t=ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qa(t=ie()){return/crios\//i.test(t)}function Ja(t=ie()){return/iemobile/i.test(t)}function Xa(t=ie()){return/android/i.test(t)}function Za(t=ie()){return/blackberry/i.test(t)}function el(t=ie()){return/webos/i.test(t)}function lr(t=ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dh(t=ie()){var e;return lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xh(){return Yu()&&document.documentMode===10}function tl(t=ie()){return lr(t)||Xa(t)||el(t)||Za(t)||/windows phone/i.test(t)||Ja(t)}/**
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
 */function nl(t,e=[]){let n;switch(t){case"Browser":n=Ao(ie());break;case"Worker":n=`${Ao(ie())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zt}/${s}`}/**
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
 */class $h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Fh(t,e={}){return Gt(t,"GET","/v2/passwordPolicy",or(t,e))}/**
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
 */const Uh=6;class Bh{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Uh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Vh{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ro(this),this.idTokenSubscription=new Ro(this),this.beforeStateQueue=new $h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ba,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pe(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qa(this,{idToken:e}),s=await Ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(ht(this));const n=e?Z(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fh(this),n=new Bh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Lh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pe(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[Pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cr(t){return Z(t)}class Ro{constructor(e){this.auth=e,this.observer=null,this.addObserver=rd(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ur={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wh(t){ur=t}function Hh(t){return ur.loadJS(t)}function jh(){return ur.gapiScript}function qh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function zh(t,e){const n=nr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(cs(r,e??{}))return i;De(i,"already-initialized")}return n.initialize({options:e})}function Gh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Pe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Kh(t,e,n){const s=cr(t);w(s._canInitEmulator,s,"emulator-config-failed"),w(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=sl(e),{host:o,port:a}=Yh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Qh()}function sl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yh(t){const e=sl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:No(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:No(o)}}}function No(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class il{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Re("not implemented")}_getIdTokenResponse(e){return Re("not implemented")}_linkToIdToken(e,n){return Re("not implemented")}_getReauthenticationResolver(e){return Re("not implemented")}}/**
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
 */async function Pt(t,e){return Sh(t,"POST","/v1/accounts:signInWithIdp",or(t,e))}/**
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
 */const Jh="http://localhost";class mt extends il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=sr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new mt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Pt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pt(e,n)}buildRequest(){const e={requestUri:Jh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qt(n)}return e}}/**
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
 */class rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class We extends xn{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
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
 */class He extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return He.credential(n,s)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
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
 */class je extends xn{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
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
 */class qe extends xn{constructor(){super("twitter.com")}static credential(e,n){return mt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qe.credential(n,s)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
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
 */class Lt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ne._fromIdTokenResponse(e,s,i),o=Po(s);return new Lt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Po(s);return new Lt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fs extends at{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new fs(e,n,s,i)}}function ol(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(t,r,e,s):r})}async function Xh(t,e,n=!1){const s=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lt._forOperation(t,"link",s)}/**
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
 */async function Zh(t,e,n=!1){const{auth:s}=t;if(ze(s.app))return Promise.reject(ht(s));const i="reauthenticate";try{const r=await wn(t,ol(s,i,e,t),n);w(r.idToken,s,"internal-error");const o=ar(r.idToken);w(o,s,"internal-error");const{sub:a}=o;return w(t.uid===a,s,"user-mismatch"),Lt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&De(s,"user-mismatch"),r}}/**
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
 */async function ef(t,e,n=!1){if(ze(t.app))return Promise.reject(ht(t));const s="signIn",i=await ol(t,s,e),r=await Lt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function tf(t,e,n,s){return Z(t).onIdTokenChanged(e,n,s)}function nf(t,e,n){return Z(t).beforeAuthStateChanged(e,n)}function sf(t,e,n,s){return Z(t).onAuthStateChanged(e,n,s)}const ps="__sak";/**
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
 */class al{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rf=1e3,of=10;class ll extends al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);xh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,of):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ll.type="LOCAL";const af=ll;/**
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
 */class cl extends al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cl.type="SESSION";const ul=cl;/**
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
 */function lf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Fs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await lf(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fs.receivers=[];/**
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
 */function dr(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=dr("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ke(){return window}function uf(t){ke().location.href=t}/**
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
 */function dl(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function df(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ff(){return dl()?self:null}/**
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
 */const hl="firebaseLocalStorageDb",pf=1,ms="firebaseLocalStorage",fl="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Us(t,e){return t.transaction([ms],e?"readwrite":"readonly").objectStore(ms)}function mf(){const t=indexedDB.deleteDatabase(hl);return new $n(t).toPromise()}function Pi(){const t=indexedDB.open(hl,pf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ms,{keyPath:fl})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ms)?e(s):(s.close(),await mf(),e(await Pi()))})})}async function Oo(t,e,n){const s=Us(t,!0).put({[fl]:e,value:n});return new $n(s).toPromise()}async function _f(t,e){const n=Us(t,!1).get(e),s=await new $n(n).toPromise();return s===void 0?null:s.value}function Mo(t,e){const n=Us(t,!0).delete(e);return new $n(n).toPromise()}const gf=800,vf=3;class pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fs._getInstance(ff()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await df(),!this.activeServiceWorker)return;this.sender=new cf(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await Oo(e,ps,"1"),await Mo(e,ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>_f(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Us(i,!1).getAll();return new $n(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pl.type="LOCAL";const yf=pl;new Dn(3e4,6e4);/**
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
 */function bf(t,e){return e?Pe(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hr extends il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wf(t){return ef(t.auth,new hr(t),t.bypassAuthState)}function Ef(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Zh(n,new hr(t),t.bypassAuthState)}async function If(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Xh(n,new hr(t),t.bypassAuthState)}/**
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
 */class ml{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wf;case"linkViaPopup":case"linkViaRedirect":return If;case"reauthViaPopup":case"reauthViaRedirect":return Ef;default:De(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cf=new Dn(2e3,1e4);class kt extends ml{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=dr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cf.get())};e()}}kt.currentPopupAction=null;/**
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
 */const Sf="pendingRedirect",ss=new Map;class Tf extends ml{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ss.get(this.auth._key());if(!e){try{const s=await kf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ss.set(this.auth._key(),e)}return this.bypassAuthState||ss.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kf(t,e){const n=Nf(e),s=Rf(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Af(t,e){ss.set(t._key(),e)}function Rf(t){return Pe(t._redirectPersistence)}function Nf(t){return ns(Sf,t.config.apiKey,t.name)}async function Pf(t,e,n=!1){if(ze(t.app))return Promise.reject(ht(t));const s=cr(t),i=bf(s,e),o=await new Tf(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Of=10*60*1e3;class Mf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_l(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Te(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Of&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lo(e))}saveEventToCache(e){this.cachedEventUids.add(Lo(e)),this.lastProcessedEventTime=Date.now()}}function Lo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _l({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _l(t);default:return!1}}/**
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
 */async function Df(t,e={}){return Gt(t,"GET","/v1/projects",e)}/**
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
 */const xf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$f=/^https?/;async function Ff(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Df(t);for(const n of e)try{if(Uf(n))return}catch{}De(t,"unauthorized-domain")}function Uf(t){const e=Ri(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!$f.test(n))return!1;if(xf.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Bf=new Dn(3e4,6e4);function Do(){const t=ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vf(t){return new Promise((e,n)=>{var s,i,r;function o(){Do(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Do(),n(Te(t,"network-request-failed"))},timeout:Bf.get()})}if(!((i=(s=ke().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ke().gapi)===null||r===void 0)&&r.load)o();else{const a=qh("iframefcb");return ke()[a]=()=>{gapi.load?o():n(Te(t,"network-request-failed"))},Hh(`${jh()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw is=null,e})}let is=null;function Wf(t){return is=is||Vf(t),is}/**
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
 */const Hf=new Dn(5e3,15e3),jf="__/auth/iframe",qf="emulator/auth/iframe",zf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kf(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rr(e,qf):`https://${t.config.authDomain}/${jf}`,s={apiKey:e.apiKey,appName:t.name,v:zt},i=Gf.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${qt(s).slice(1)}`}async function Yf(t){const e=await Wf(t),n=ke().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:Kf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zf,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Te(t,"network-request-failed"),a=ke().setTimeout(()=>{r(o)},Hf.get());function l(){ke().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Qf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jf=500,Xf=600,Zf="_blank",ep="http://localhost";class xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tp(t,e,n,s=Jf,i=Xf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Qf),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ie().toLowerCase();n&&(a=Qa(c)?Zf:n),Ka(c)&&(e=e||ep,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(Dh(c)&&a!=="_self")return np(e||"",a),new xo(null);const u=window.open(e||"",a,d);w(u,t,"popup-blocked");try{u.focus()}catch{}return new xo(u)}function np(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sp="__/auth/handler",ip="emulator/auth/handler",rp=encodeURIComponent("fac");async function $o(t,e,n,s,i,r){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:zt,eventId:i};if(e instanceof rl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ii(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof xn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${rp}=${encodeURIComponent(l)}`:"";return`${op(t)}?${qt(a).slice(1)}${c}`}function op({config:t}){return t.emulator?rr(t,ip):`https://${t.authDomain}/${sp}`}/**
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
 */const pi="webStorageSupport";class ap{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ul,this._completeRedirectFn=Pf,this._overrideRedirectResult=Af}async _openPopup(e,n,s,i){var r;xe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await $o(e,n,s,Ri(),i);return tp(e,o,dr())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await $o(e,n,s,Ri(),i);return uf(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(xe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Yf(e),s=new Mf(e);return n.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pi,{type:pi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[pi];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ff(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tl()||Ya()||lr()}}const lp=ap;var Fo="@firebase/auth",Uo="1.7.9";/**
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
 */class cp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function up(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dp(t){Mt(new pt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nl(t)},c=new Vh(s,i,r,l);return Gh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Mt(new pt("auth-internal",e=>{const n=cr(e.getProvider("auth").getImmediate());return(s=>new cp(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Fo,Uo,up(t)),Xe(Fo,Uo,"esm2017")}/**
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
 */const hp=5*60,fp=Na("authIdTokenMaxAge")||hp;let Bo=null;const pp=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fp)return;const i=n==null?void 0:n.token;Bo!==i&&(Bo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mp(t=xa()){const e=nr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zh(t,{popupRedirectResolver:lp,persistence:[yf,af,ul]}),s=Na("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=pp(r.toString());nf(n,o,()=>o(n.currentUser)),tf(n,a=>o(a))}}const i=Aa("auth");return i&&Kh(n,`http://${i}`),n}function _p(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Wh({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Te("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",_p().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dp("Browser");var Vo={};const Wo="@firebase/database",Ho="1.0.8";/**
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
 */let gl="";function gp(t){gl=t}/**
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
 */class vp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:yn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class yp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vp(e)}}catch{}return new yp},dt=vl("localStorage"),bp=vl("sessionStorage");/**
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
 */const Ot=new er("@firebase/database"),yl=function(){let t=1;return function(){return t++}}(),bl=function(t){const e=ld(t),n=new id;n.update(e);const s=n.digest();return Ji.encodeByteArray(s)},Fn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Fn.apply(null,s):typeof s=="object"?e+=H(s):e+=s,e+=" "}return e};let dn=null,jo=!0;const wp=function(t,e){m(!0,"Can't turn on custom loggers persistently."),Ot.logLevel=N.VERBOSE,dn=Ot.log.bind(Ot)},Q=function(...t){if(jo===!0&&(jo=!1,dn===null&&bp.get("logging_enabled")===!0&&wp()),dn){const e=Fn.apply(null,t);dn(e)}},Un=function(t){return function(...e){Q(t,...e)}},Oi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fn(...t);Ot.error(e)},$e=function(...t){const e=`FIREBASE FATAL ERROR: ${Fn(...t)}`;throw Ot.error(e),new Error(e)},ne=function(...t){const e="FIREBASE WARNING: "+Fn(...t);Ot.warn(e)},Ep=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ip=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_t="[MIN_NAME]",st="[MAX_NAME]",yt=function(t,e){if(t===e)return 0;if(t===_t||e===st)return-1;if(e===_t||t===st)return 1;{const n=qo(t),s=qo(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cp=function(t,e){return t===e?0:t<e?-1:1},en=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+H(e))},pr=function(t){if(typeof t!="object"||t===null)return H(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=H(e[s]),n+=":",n+=pr(t[e[s]]);return n+="}",n},wl=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function J(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const El=function(t){m(!fr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Sp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ap=new RegExp("^-?(0*)\\d{1,10}$"),Rp=-2147483648,Np=2147483647,qo=function(t){if(Ap.test(t)){const e=Number(t);if(e>=Rp&&e<=Np)return e}return null},Kt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},Pp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Op{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
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
 */const mr="5",Il="v",Cl="s",Sl="r",Tl="f",kl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Al="ls",Rl="p",Mi="ac",Nl="websocket",Pl="long_polling";/**
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
 */class Ol{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Lp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ml(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let s;if(e===Nl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pl)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Lp(t)&&(n.ns=t.namespace);const i=[];return J(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Dp{constructor(){this.counters_={}}incrementCounter(e,n=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Uu(this.counters_)}}/**
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
 */const mi={},_i={};function _r(t){const e=t.toString();return mi[e]||(mi[e]=new Dp),mi[e]}function xp(t,e){const n=t.toString();return _i[n]||(_i[n]=e()),_i[n]}/**
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
 */class $p{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Kt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const zo="start",Fp="close",Up="pLPCommand",Bp="pRTLPCB",Ll="id",Dl="pw",xl="ser",Vp="cb",Wp="seg",Hp="ts",jp="d",qp="dframe",$l=1870,Fl=30,zp=$l-Fl,Gp=25e3,Kp=3e4;class At{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Un(e),this.stats_=_r(n),this.urlFn=l=>(this.appCheckToken&&(l[Mi]=this.appCheckToken),Ml(n,Pl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $p(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kp)),Ip(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gr((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zo)this.id=a,this.password=l;else if(o===Fp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zo]="t",s[xl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Vp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Il]=mr,this.transportSessionId&&(s[Cl]=this.transportSessionId),this.lastSessionId&&(s[Al]=this.lastSessionId),this.applicationId&&(s[Rl]=this.applicationId),this.appCheckToken&&(s[Mi]=this.appCheckToken),typeof location<"u"&&location.hostname&&kl.test(location.hostname)&&(s[Sl]=Tl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){At.forceAllow_=!0}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){return At.forceAllow_?!0:!At.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sp()&&!Tp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=H(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ta(n),i=wl(s,zp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[qp]="t",s[Ll]=e,s[Dl]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=H(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gr{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yl(),window[Up+this.uniqueCallbackIdentifier]=e,window[Bp+this.uniqueCallbackIdentifier]=n,this.myIFrame=gr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Q("frame writing exception"),a.stack&&Q(a.stack),Q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Q("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ll]=this.myID,e[Dl]=this.myPW,e[xl]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fl+s.length<=$l;){const o=this.pendingSegs.shift();s=s+"&"+Wp+i+"="+o.seg+"&"+Hp+i+"="+o.ts+"&"+jp+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Gp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Yp=16384,Qp=45e3;let _s=null;typeof MozWebSocket<"u"?_s=MozWebSocket:typeof WebSocket<"u"&&(_s=WebSocket);class ye{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Un(this.connId),this.stats_=_r(n),this.connURL=ye.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Il]=mr,typeof location<"u"&&location.hostname&&kl.test(location.hostname)&&(o[Sl]=Tl),n&&(o[Cl]=n),s&&(o[Al]=s),i&&(o[Mi]=i),r&&(o[Rl]=r),Ml(e,Nl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dt.set("previous_websocket_failure",!0);try{let s;Qu(),this.mySock=new _s(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&_s!==null&&!ye.forceDisallow_}static previouslyFailed(){return dt.isInMemoryStorage||dt.get("previous_websocket_failure")===!0}markConnectionHealthy(){dt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=yn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=H(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wl(n,Yp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
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
 */class En{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[At,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ye&&ye.isAvailable();let s=n&&!ye.previouslyFailed();if(e.webSocketOnly&&(n||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of En.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);En.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}En.globalTransportInitialized_=!1;/**
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
 */const Jp=6e4,Xp=5e3,Zp=10*1024,em=100*1024,gi="t",Go="d",tm="s",Ko="r",nm="e",Yo="o",Qo="a",Jo="n",Xo="p",sm="h";class im{constructor(e,n,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Un("c:"+this.id+":"),this.transportManager_=new En(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>em?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gi in e){const n=e[gi];n===Qo?this.upgradeIfSecondaryHealthy_():n===Ko?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=en("t",e),s=en("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=en("t",e),s=en("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=en(gi,e);if(Go in e){const s=e[Go];if(n===sm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tm?this.onConnectionShutdown_(s):n===Ko?this.onReset_(s):n===nm?Oi("Server Error: "+s):n===Yo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mr!==s&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),hn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ul{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Bl{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class gs extends Bl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gs}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zo=32,ea=768;class O{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function k(){return new O("")}function C(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function it(t){return t.pieces_.length-t.pieceNum_}function L(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new O(t.pieces_,e)}function vr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function In(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new O(e,0)}function F(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof O)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new O(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function te(t,e){const n=C(t),s=C(e);if(n===null)return e;if(n===s)return te(L(t),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function om(t,e){const n=In(t,0),s=In(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=yt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function yr(t,e){if(it(t)!==it(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function _e(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(it(t)>it(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class am{constructor(e,n){this.errorPrefix_=n,this.parts_=In(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$s(this.parts_[s]);Wl(this)}}function lm(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$s(e),Wl(t)}function cm(t){const e=t.parts_.pop();t.byteLength_-=$s(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wl(t){if(t.byteLength_>ea)throw new Error(t.errorPrefix_+"has a key path longer than "+ea+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zo)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zo+") or object contains a cycle "+ct(t))}function ct(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class br extends Bl{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new br}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const tn=1e3,um=60*5*1e3,ta=30*1e3,dm=1.3,hm=3e4,fm="server_kill",na=3;class Me extends Ul{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Me.nextPersistentConnectionId_++,this.log_=Un("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tn,this.maxReconnectDelay_=um,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");br.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(H(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new jt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Me.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ie(e,"w")){const s=ft(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ta)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nd(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Oi("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hm&&(this.reconnectDelay_=tn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Me.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Q("getToken() completed but was canceled"):(Q("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new im(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{ne(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(fm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ne(u),l())}}}interrupt(e){Q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ii(this.interruptReasons_)&&(this.reconnectDelay_=tn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>pr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new O(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Q("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=na&&(this.reconnectDelay_=ta,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Q("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=na&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gl.replace(/\./g,"-")]=1,Zi()?e["framework.cordova"]=1:Pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gs.getInstance().currentlyOnline();return Ii(this.interruptReasons_)&&e}}Me.nextPersistentConnectionId_=0;Me.nextConnectionId_=0;/**
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
 */class S{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new S(e,n)}}/**
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
 */class Bs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new S(_t,e),i=new S(_t,n);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
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
 */let Xn;class Hl extends Bs{static get __EMPTY_NODE(){return Xn}static set __EMPTY_NODE(e){Xn=e}compare(e,n){return yt(e.name,n.name)}isDefinedOn(e){throw Ht("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return S.MIN}maxPost(){return new S(st,Xn)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Xn)}toString(){return".key"}}const Ze=new Hl;/**
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
 */class Zn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class K{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??K.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,n,s,i,r){return new K(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}K.RED=!0;K.BLACK=!1;class pm{copy(e,n,s,i,r){return this}insert(e,n,s){return new K(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,n=ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,K.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,K.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zn(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new pm;/**
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
 */function mm(t,e){return yt(t.name,e.name)}function wr(t,e){return yt(t,e)}/**
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
 */let Li;function _m(t){Li=t}const jl=function(t){return typeof t=="number"?"number:"+El(t):"string:"+t},ql=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else m(t===Li||t.isEmpty(),"priority of unexpected type.");m(t===Li||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sa;class G{constructor(e,n=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ql(this.priorityNode_)}static set __childrenNodeConstructor(e){sa=e}static get __childrenNodeConstructor(){return sa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:C(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=C(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||it(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=El(this.value_):e+=this.value_,this.lazyHash_=bl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=G.VALUE_TYPE_ORDER.indexOf(n),r=G.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let zl,Gl;function gm(t){zl=t}function vm(t){Gl=t}class ym extends Bs{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?yt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return S.MIN}maxPost(){return new S(st,new G("[PRIORITY-POST]",Gl))}makePost(e,n){const s=zl(e);return new S(n,new G("[PRIORITY-POST]",s))}toString(){return".priority"}}const x=new ym;/**
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
 */const bm=Math.log(2);class wm{constructor(e){const n=r=>parseInt(Math.log(r)/bm,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vs=function(t,e,n,s){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new K(h,u.node,K.BLACK,null,null);{const p=parseInt(d/2,10)+l,g=i(l,p),b=i(p+1,c);return u=t[p],h=n?n(u):u,new K(h,u.node,K.BLACK,g,b)}},r=function(l){let c=null,d=null,u=t.length;const h=function(g,b){const E=u-g,$=u;u-=g;const de=i(E+1,$),ve=t[E],pe=n?n(ve):ve;p(new K(pe,ve.node,b,null,de))},p=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));b?h(E,K.BLACK):(h(E,K.BLACK),h(E,K.RED))}return d},o=new wm(t.length),a=r(o);return new ae(s||e,a)};/**
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
 */let vi;const It={};class Oe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m(It&&x,"ChildrenNode.ts has not been loaded"),vi=vi||new Oe({".priority":It},{".priority":x}),vi}get(e){const n=ft(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ae?n:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Ze,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=vs(s,e.getCompare()):a=It;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Oe(d,c)}addToIndexes(e,n){const s=ls(this.indexes_,(i,r)=>{const o=ft(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===It)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(S.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),vs(a,o.getCompare())}else return It;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new Oe(s,this.indexSet_)}removeFromIndexes(e,n){const s=ls(this.indexes_,i=>{if(i===It)return i;{const r=n.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new Oe(s,this.indexSet_)}}/**
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
 */let nn;class y{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ql(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nn||(nn=new y(new ae(wr),null,Oe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nn}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?nn:n}}getChild(e){const n=C(e);return n===null?this:this.getImmediateChild(n).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new S(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?nn:this.priorityNode_;return new y(i,o,r)}}updateChild(e,n){const s=C(e);if(s===null)return n;{m(C(e)!==".priority"||it(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(L(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(x,(o,a)=>{n[o]=a.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jl(this.getPriority().val())+":"),this.forEachChild(x,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bl(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bn?-1:0}withIndex(e){if(e===Ze||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ze||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(x),i=n.getIterator(x);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ze?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Em extends y{constructor(){super(new ae(wr),y.EMPTY_NODE,Oe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const Bn=new Em;Object.defineProperties(S,{MIN:{value:new S(_t,y.EMPTY_NODE)},MAX:{value:new S(st,Bn)}});Hl.__EMPTY_NODE=y.EMPTY_NODE;G.__childrenNodeConstructor=y;_m(Bn);vm(Bn);/**
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
 */const Im=!0;function W(t,e=null){if(t===null)return y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new G(n,W(e))}if(!(t instanceof Array)&&Im){const n=[];let s=!1;if(J(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=W(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new S(o,l)))}}),n.length===0)return y.EMPTY_NODE;const r=vs(n,mm,o=>o.name,wr);if(s){const o=vs(n,x.getCompare());return new y(r,W(e),new Oe({".priority":o},{".priority":x}))}else return new y(r,W(e),Oe.Default)}else{let n=y.EMPTY_NODE;return J(t,(s,i)=>{if(Ie(t,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(W(e))}}gm(W);/**
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
 */class Kl extends Bs{constructor(e){super(),this.indexPath_=e,m(!T(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?yt(e.name,n.name):r}makePost(e,n){const s=W(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(n,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,Bn);return new S(st,e)}toString(){return In(this.indexPath_,0).join("/")}}/**
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
 */class Cm extends Bs{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,n){const s=W(e);return new S(n,s)}toString(){return".value"}}const Yl=new Cm;/**
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
 */function Ql(t){return{type:"value",snapshotNode:t}}function Dt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Cn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Sn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Er{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Cn(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Dt(n,s)):o.trackChildChange(Sn(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(x,(i,r)=>{n.hasChild(i)||s.trackChildChange(Cn(i,r))}),n.isLeafNode()||n.forEachChild(x,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Sn(i,r,o))}else s.trackChildChange(Dt(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Tn{constructor(e){this.indexedFilter_=new Er(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tn.getStartPost_(e),this.endPost_=Tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new S(n,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return n.forEachChild(x,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new S(n,s))||(s=y.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new S(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Sn(n,s,u)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Cn(n,u));const b=a.updateImmediateChild(n,y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Dt(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return s.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Cn(c.name,c.node)),r.trackChildChange(Dt(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
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
 */class Ir{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=x}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_t}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:st}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===x}copy(){const e=new Ir;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function km(t){return t.loadsAllData()?new Er(t.getIndex()):t.hasLimit()?new Tm(t):new Tn(t)}function Am(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Rm(t,e){const n=t.copy();return n.index_=e,n}function ia(t){const e={};if(t.isDefault())return e;let n;if(t.index_===x?n="$priority":t.index_===Yl?n="$value":t.index_===Ze?n="$key":(m(t.index_ instanceof Kl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=H(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=H(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+H(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=H(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+H(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ra(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==x&&(e.i=t.index_.toString()),e}/**
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
 */class ys extends Ul{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Un("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ys.getListenId_(e,s),a={};this.listens_[o]=a;const l=ia(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),ft(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=ys.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ia(e._queryParams),s=e._path.toString(),i=new jt;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qt(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=yn(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Nm{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function bs(){return{value:null,children:new Map}}function Jl(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=C(e);t.children.has(s)||t.children.set(s,bs());const i=t.children.get(s);e=L(e),Jl(i,e,n)}}function Di(t,e,n){t.value!==null?n(e,t.value):Pm(t,(s,i)=>{const r=new O(e.toString()+"/"+s);Di(i,r,n)})}function Pm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Om{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&J(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const oa=10*1e3,Mm=30*1e3,Lm=5*60*1e3;class Dm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Om(e);const s=oa+(Mm-oa)*Math.random();hn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;J(e,(i,r)=>{r>0&&Ie(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),hn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lm))}}/**
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
 */var be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(be||(be={}));function Cr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class ws{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=be.ACK_USER_WRITE,this.source=Cr()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new O(e));return new ws(k(),n,this.revert)}}else return m(C(this.path)===e,"operationForChild called for unrelated child."),new ws(L(this.path),this.affectedTree,this.revert)}}/**
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
 */class kn{constructor(e,n){this.source=e,this.path=n,this.type=be.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new kn(this.source,k()):new kn(this.source,L(this.path))}}/**
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
 */class gt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=be.OVERWRITE}operationForChild(e){return T(this.path)?new gt(this.source,k(),this.snap.getImmediateChild(e)):new gt(this.source,L(this.path),this.snap)}}/**
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
 */class xt{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=be.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new O(e));return n.isEmpty()?null:n.value?new gt(this.source,k(),n.value):new xt(this.source,k(),n)}else return m(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xt(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class rt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=C(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $m(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sm(o.childName,o.snapshotNode))}),sn(t,i,"child_removed",e,s,n),sn(t,i,"child_added",e,s,n),sn(t,i,"child_moved",r,s,n),sn(t,i,"child_changed",e,s,n),sn(t,i,"value",e,s,n),i}function sn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Um(t,a,l)),o.forEach(a=>{const l=Fm(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Fm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Um(t,e,n){if(e.childName==null||n.childName==null)throw Ht("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Vs(t,e){return{eventCache:t,serverCache:e}}function fn(t,e,n,s){return Vs(new rt(e,n,s),t.serverCache)}function Xl(t,e,n,s){return Vs(t.eventCache,new rt(e,n,s))}function Es(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yi;const Bm=()=>(yi||(yi=new ae(Cp)),yi);class M{constructor(e,n=Bm()){this.value=e,this.children=n}static fromObject(e){let n=new M(null);return J(e,(s,i)=>{n=n.set(new O(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:k(),value:this.value};if(T(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(L(e),n);return r!=null?{path:F(new O(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=C(e),s=this.children.get(n);return s!==null?s.subtree(L(e)):new M(null)}}set(e,n){if(T(e))return new M(n,this.children);{const s=C(e),r=(this.children.get(s)||new M(null)).set(L(e),n),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const n=C(e),s=this.children.get(n);if(s){const i=s.remove(L(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const n=C(e),s=this.children.get(n);return s?s.get(L(e)):null}}setTree(e,n){if(T(e))return n;{const s=C(e),r=(this.children.get(s)||new M(null)).setTree(L(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(F(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,k(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(T(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(L(e),F(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,k(),n)}foreachOnPath_(e,n,s){if(T(e))return this;{this.value&&s(n,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(L(e),F(n,i),s):new M(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(F(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new M(null))}}function pn(t,e,n){if(T(e))return new we(new M(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=te(i,e);return r=r.updateChild(o,n),new we(t.writeTree_.set(i,r))}else{const i=new M(n),r=t.writeTree_.setTree(e,i);return new we(r)}}}function xi(t,e,n){let s=t;return J(n,(i,r)=>{s=pn(s,F(e,i),r)}),s}function aa(t,e){if(T(e))return we.empty();{const n=t.writeTree_.setTree(e,new M(null));return new we(n)}}function $i(t,e){return bt(t,e)!=null}function bt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(te(n.path,e)):null}function la(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(x,(s,i)=>{e.push(new S(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function et(t,e){if(T(e))return t;{const n=bt(t,e);return n!=null?new we(new M(n)):new we(t.writeTree_.subtree(e))}}function Fi(t){return t.writeTree_.isEmpty()}function $t(t,e){return Zl(k(),t.writeTree_,e)}function Zl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Zl(F(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(F(t,".priority"),s)),n}}/**
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
 */function Ws(t,e){return sc(e,t)}function Vm(t,e,n,s,i){m(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=pn(t.visibleWrites,e,n)),t.lastWriteId=s}function Wm(t,e,n,s){m(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=xi(t.visibleWrites,e,n),t.lastWriteId=s}function Hm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function jm(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&qm(a,s.path)?i=!1:_e(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zm(t),!0;if(s.snap)t.visibleWrites=aa(t.visibleWrites,s.path);else{const a=s.children;J(a,l=>{t.visibleWrites=aa(t.visibleWrites,F(s.path,l))})}return!0}else return!1}function qm(t,e){if(t.snap)return _e(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_e(F(t.path,n),e))return!0;return!1}function zm(t){t.visibleWrites=ec(t.allWrites,Gm,k()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gm(t){return t.visible}function ec(t,e,n){let s=we.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)_e(n,o)?(a=te(n,o),s=pn(s,a,r.snap)):_e(o,n)&&(a=te(o,n),s=pn(s,k(),r.snap.getChild(a)));else if(r.children){if(_e(n,o))a=te(n,o),s=xi(s,a,r.children);else if(_e(o,n))if(a=te(o,n),T(a))s=xi(s,k(),r.children);else{const l=ft(r.children,C(a));if(l){const c=l.getChild(L(a));s=pn(s,k(),c)}}}else throw Ht("WriteRecord should have .snap or .children")}}return s}function tc(t,e,n,s,i){if(!s&&!i){const r=bt(t.visibleWrites,e);if(r!=null)return r;{const o=et(t.visibleWrites,e);if(Fi(o))return n;if(n==null&&!$i(o,k()))return null;{const a=n||y.EMPTY_NODE;return $t(o,a)}}}else{const r=et(t.visibleWrites,e);if(!i&&Fi(r))return n;if(!i&&n==null&&!$i(r,k()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(_e(c.path,e)||_e(e,c.path))},a=ec(t.allWrites,o,e),l=n||y.EMPTY_NODE;return $t(a,l)}}}function Km(t,e,n){let s=y.EMPTY_NODE;const i=bt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(x,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=et(t.visibleWrites,e);return n.forEachChild(x,(o,a)=>{const l=$t(et(r,new O(o)),a);s=s.updateImmediateChild(o,l)}),la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=et(t.visibleWrites,e);return la(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ym(t,e,n,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,n);if($i(t.visibleWrites,r))return null;{const o=et(t.visibleWrites,r);return Fi(o)?i.getChild(n):$t(o,i.getChild(n))}}function Qm(t,e,n,s){const i=F(e,n),r=bt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=et(t.visibleWrites,i);return $t(o,s.getNode().getImmediateChild(n))}else return null}function Jm(t,e){return bt(t.visibleWrites,e)}function Xm(t,e,n,s,i,r,o){let a;const l=et(t.visibleWrites,e),c=bt(l,k());if(c!=null)a=c;else if(n!=null)a=$t(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&d.length<i;)u(p,s)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Zm(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Is(t,e,n,s){return tc(t.writeTree,t.treePath,e,n,s)}function kr(t,e){return Km(t.writeTree,t.treePath,e)}function ca(t,e,n,s){return Ym(t.writeTree,t.treePath,e,n,s)}function Cs(t,e){return Jm(t.writeTree,F(t.treePath,e))}function e_(t,e,n,s,i,r){return Xm(t.writeTree,t.treePath,e,n,s,i,r)}function Ar(t,e,n){return Qm(t.writeTree,t.treePath,e,n)}function nc(t,e){return sc(F(t.treePath,e),t.writeTree)}function sc(t,e){return{treePath:t,writeTree:e}}/**
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
 */class t_{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Cn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Dt(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Sn(s,e.snapshotNode,i.oldSnap));else throw Ht("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class n_{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ic=new n_;class Rr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ar(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vt(this.viewCache_),r=e_(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function s_(t){return{filter:t}}function i_(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function r_(t,e,n,s,i){const r=new t_;let o,a;if(n.type===be.OVERWRITE){const c=n;c.source.fromUser?o=Ui(t,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!T(c.path),o=Ss(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===be.MERGE){const c=n;c.source.fromUser?o=a_(t,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bi(t,e,c.path,c.children,s,i,a,r))}else if(n.type===be.ACK_USER_WRITE){const c=n;c.revert?o=u_(t,e,c.path,s,i,r):o=l_(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===be.LISTEN_COMPLETE)o=c_(t,e,n.path,s,r);else throw Ht("Unknown operation type: "+n.type);const l=r.getChanges();return o_(e,o,l),{viewCache:o,changes:l}}function o_(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Es(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ql(Es(e)))}}function rc(t,e,n,s,i,r){const o=e.eventCache;if(Cs(s,n)!=null)return e;{let a,l;if(T(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=vt(e),d=c instanceof y?c:y.EMPTY_NODE,u=kr(s,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Is(s,vt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(n);if(c===".priority"){m(it(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=ca(s,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=L(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ca(s,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=Ar(s,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,r):a=o.getNode()}}return fn(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function Ss(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(T(n))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=d.updateFullNode(l.getNode(),p,null)}else{const p=C(n);if(!l.isCompleteForPath(n)&&it(n)>1)return e;const g=L(n),E=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=d.updatePriority(l.getNode(),E):c=d.updateChild(l.getNode(),p,E,g,ic,null)}const u=Xl(e,c,l.isFullyInitialized()||T(n),d.filtersNodes()),h=new Rr(i,u,r);return rc(t,u,n,i,h,a)}function Ui(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const d=new Rr(i,e,r);if(T(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=fn(e,c,!0,t.filter.filtersNodes());else{const u=C(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=fn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=L(n),p=a.getNode().getImmediateChild(u);let g;if(T(h))g=s;else{const b=d.getCompleteChild(u);b!=null?vr(h)===".priority"&&b.getChild(Vl(h)).isEmpty()?g=b:g=b.updateChild(h,s):g=y.EMPTY_NODE}if(p.equals(g))l=e;else{const b=t.filter.updateChild(a.getNode(),u,g,h,d,o);l=fn(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ua(t,e){return t.eventCache.isCompleteForChild(e)}function a_(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=F(n,l);ua(e,C(d))&&(a=Ui(t,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=F(n,l);ua(e,C(d))||(a=Ui(t,a,d,c,i,r,o))}),a}function da(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Bi(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;T(n)?c=s:c=new M(null).setTree(n,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=da(t,p,h);l=Ss(t,l,new O(u),g,i,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),b=da(t,g,h);l=Ss(t,l,new O(u),b,i,r,o,a)}}),l}function l_(t,e,n,s,i,r,o){if(Cs(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(T(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ss(t,e,n,l.getNode().getChild(n),i,r,a,o);if(T(n)){let c=new M(null);return l.getNode().forEachChild(Ze,(d,u)=>{c=c.set(new O(d),u)}),Bi(t,e,n,c,i,r,a,o)}else return e}else{let c=new M(null);return s.foreach((d,u)=>{const h=F(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Bi(t,e,n,c,i,r,a,o)}}function c_(t,e,n,s,i){const r=e.serverCache,o=Xl(e,r.getNode(),r.isFullyInitialized()||T(n),r.isFiltered());return rc(t,o,n,s,ic,i)}function u_(t,e,n,s,i,r){let o;if(Cs(s,n)!=null)return e;{const a=new Rr(s,e,i),l=e.eventCache.getNode();let c;if(T(n)||C(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Is(s,vt(e));else{const u=e.serverCache.getNode();m(u instanceof y,"serverChildren would be complete if leaf node"),d=kr(s,u)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=C(n);let u=Ar(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,L(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,y.EMPTY_NODE,L(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Is(s,vt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Cs(s,k())!=null,fn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class d_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Er(s.getIndex()),r=km(s);this.processor_=s_(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),d=new rt(l,o.isFullyInitialized(),i.filtersNodes()),u=new rt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vs(u,d),this.eventGenerator_=new xm(this.query_)}get query(){return this.query_}}function h_(t){return t.viewCache_.serverCache.getNode()}function f_(t){return Es(t.viewCache_)}function p_(t,e){const n=vt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(C(e)).isEmpty())?n.getChild(e):null}function ha(t){return t.eventRegistrations_.length===0}function m_(t,e){t.eventRegistrations_.push(e)}function fa(t,e,n){const s=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pa(t,e,n,s){e.type===be.MERGE&&e.source.queryId!==null&&(m(vt(t.viewCache_),"We should always have a full cache before handling merges"),m(Es(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=r_(t.processor_,i,e,n,s);return i_(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,oc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function __(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(x,(r,o)=>{s.push(Dt(r,o))}),n.isFullyInitialized()&&s.push(Ql(n.getNode())),oc(t,s,n.getNode(),e)}function oc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return $m(t.eventGenerator_,e,n,i)}/**
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
 */let Ts;class ac{constructor(){this.views=new Map}}function g_(t){m(!Ts,"__referenceConstructor has already been defined"),Ts=t}function v_(){return m(Ts,"Reference.ts has not been loaded"),Ts}function y_(t){return t.views.size===0}function Nr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),pa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pa(o,e,n,s));return r}}function lc(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Is(n,i?s:null),l=!1;a?l=!0:s instanceof y?(a=kr(n,s),l=!1):(a=y.EMPTY_NODE,l=!1);const c=Vs(new rt(a,l,!1),new rt(s,i,!1));return new d_(e,c)}return o}function b_(t,e,n,s,i,r){const o=lc(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),m_(o,n),__(o,n)}function w_(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ot(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(fa(c,n,s)),ha(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(fa(l,n,s)),ha(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ot(t)&&r.push(new(v_())(e._repo,e._path)),{removed:r,events:o}}function cc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tt(t,e){let n=null;for(const s of t.views.values())n=n||p_(s,e);return n}function uc(t,e){if(e._queryParams.loadsAllData())return Hs(t);{const s=e._queryIdentifier;return t.views.get(s)}}function dc(t,e){return uc(t,e)!=null}function ot(t){return Hs(t)!=null}function Hs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ks;function E_(t){m(!ks,"__referenceConstructor has already been defined"),ks=t}function I_(){return m(ks,"Reference.ts has not been loaded"),ks}let C_=1;class ma{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Zm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pr(t,e,n,s,i){return Vm(t.pendingWriteTree_,e,n,s,i),i?Yt(t,new gt(Cr(),e,n)):[]}function S_(t,e,n,s){Wm(t.pendingWriteTree_,e,n,s);const i=M.fromObject(n);return Yt(t,new xt(Cr(),e,i))}function Ge(t,e,n=!1){const s=Hm(t.pendingWriteTree_,e);if(jm(t.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(k(),!0):J(s.children,o=>{r=r.set(new O(o),!0)}),Yt(t,new ws(s.path,r,n))}else return[]}function Vn(t,e,n){return Yt(t,new gt(Sr(),e,n))}function T_(t,e,n){const s=M.fromObject(n);return Yt(t,new xt(Sr(),e,s))}function k_(t,e){return Yt(t,new kn(Sr(),e))}function A_(t,e,n){const s=Or(t,n);if(s){const i=Mr(s),r=i.path,o=i.queryId,a=te(r,e),l=new kn(Tr(o),a);return Lr(t,r,l)}else return[]}function As(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||dc(o,e))){const l=w_(o,e,n,s);y_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,p)=>ot(p));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=P_(h);for(let g=0;g<p.length;++g){const b=p[g],E=b.query,$=mc(t,b);t.listenProvider_.startListening(mn(E),An(t,E),$.hashFn,$.onComplete)}}}!u&&c.length>0&&!s&&(d?t.listenProvider_.stopListening(mn(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(qs(h));t.listenProvider_.stopListening(mn(h),p)}))}O_(t,c)}return a}function hc(t,e,n,s){const i=Or(t,s);if(i!=null){const r=Mr(i),o=r.path,a=r.queryId,l=te(o,e),c=new gt(Tr(a),l,n);return Lr(t,o,c)}else return[]}function R_(t,e,n,s){const i=Or(t,s);if(i){const r=Mr(i),o=r.path,a=r.queryId,l=te(o,e),c=M.fromObject(n),d=new xt(Tr(a),l,c);return Lr(t,o,d)}else return[]}function Vi(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const g=te(h,i);r=r||tt(p,g),o=o||ot(p)});let a=t.syncPointTree_.get(i);a?(o=o||ot(a),r=r||tt(a,k())):(a=new ac,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const b=tt(g,k());b&&(r=r.updateImmediateChild(p,b))}));const c=dc(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=qs(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=M_();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=Ws(t.pendingWriteTree_,i);let u=b_(a,e,n,d,r,l);if(!c&&!o&&!s){const h=uc(a,e);u=u.concat(L_(t,e,h))}return u}function js(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=te(o,e),c=tt(a,l);if(c)return c});return tc(i,e,r,n,!0)}function N_(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=te(c,n);s=s||tt(d,u)});let i=t.syncPointTree_.get(n);i?s=s||tt(i,k()):(i=new ac,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new rt(s,!0,!1):null,a=Ws(t.pendingWriteTree_,e._path),l=lc(i,e,a,r?o.getNode():y.EMPTY_NODE,r);return f_(l)}function Yt(t,e){return fc(e,t.syncPointTree_,null,Ws(t.pendingWriteTree_,k()))}function fc(t,e,n,s){if(T(t.path))return pc(t,e,n,s);{const i=e.get(k());n==null&&i!=null&&(n=tt(i,k()));let r=[];const o=C(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=nc(s,o);r=r.concat(fc(a,l,c,d))}return i&&(r=r.concat(Nr(i,t,s,n))),r}}function pc(t,e,n,s){const i=e.get(k());n==null&&i!=null&&(n=tt(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=nc(s,o),d=t.operationForChild(o);d&&(r=r.concat(pc(d,a,l,c)))}),i&&(r=r.concat(Nr(i,t,s,n))),r}function mc(t,e){const n=e.query,s=An(t,n);return{hashFn:()=>(h_(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?A_(t,n._path,s):k_(t,n._path);{const r=kp(i,n);return As(t,n,null,r)}}}}function An(t,e){const n=qs(e);return t.queryToTagMap.get(n)}function qs(t){return t._path.toString()+"$"+t._queryIdentifier}function Or(t,e){return t.tagToQueryMap.get(e)}function Mr(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new O(t.substr(0,e))}}function Lr(t,e,n){const s=t.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Ws(t.pendingWriteTree_,e);return Nr(s,n,i,null)}function P_(t){return t.fold((e,n,s)=>{if(n&&ot(n))return[Hs(n)];{let i=[];return n&&(i=cc(n)),J(s,(r,o)=>{i=i.concat(o)}),i}})}function mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(I_())(t._repo,t._path):t}function O_(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=qs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function M_(){return C_++}function L_(t,e,n){const s=e._path,i=An(t,e),r=mc(t,n),o=t.listenProvider_.startListening(mn(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)m(!ot(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!T(c)&&d&&ot(d))return[Hs(d).query];{let h=[];return d&&(h=h.concat(cc(d).map(p=>p.query))),J(u,(p,g)=>{h=h.concat(g)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(mn(d),An(t,d))}}return o}/**
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
 */class Dr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dr(n)}node(){return this.node_}}class xr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=F(this.path_,e);return new xr(this.syncTree_,n)}node(){return js(this.syncTree_,this.path_)}}const D_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_a=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $_(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},$_=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_c=function(t,e,n,s){return Fr(e,new xr(n,t),s)},$r=function(t,e,n){return Fr(t,new Dr(e),n)};function Fr(t,e,n){const s=t.getPriority().val(),i=_a(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=_a(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new G(a,W(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new G(i))),o.forEachChild(x,(a,l)=>{const c=Fr(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ur{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function zs(t,e){let n=e instanceof O?e:new O(e),s=t,i=C(n);for(;i!==null;){const r=ft(s.node.children,i)||{children:{},childCount:0};s=new Ur(i,s,r),n=L(n),i=C(n)}return s}function wt(t){return t.node.value}function Br(t,e){t.node.value=e,Wi(t)}function gc(t){return t.node.childCount>0}function F_(t){return wt(t)===void 0&&!gc(t)}function Gs(t,e){J(t.node.children,(n,s)=>{e(new Ur(n,t,s))})}function vc(t,e,n,s){n&&e(t),Gs(t,i=>{vc(i,e,!0)})}function U_(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Wn(t){return new O(t.parent===null?t.name:Wn(t.parent)+"/"+t.name)}function Wi(t){t.parent!==null&&B_(t.parent,t.name,t)}function B_(t,e,n){const s=F_(n),i=Ie(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wi(t))}/**
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
 */const V_=/[\[\].#$\/\u0000-\u001F\u007F]/,W_=/[\[\].#$\u0000-\u001F\u007F]/,bi=10*1024*1024,Vr=function(t){return typeof t=="string"&&t.length!==0&&!V_.test(t)},yc=function(t){return typeof t=="string"&&t.length!==0&&!W_.test(t)},H_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yc(t)},Rs=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!fr(t)||t&&typeof t=="object"&&Ie(t,".sv")},bc=function(t,e,n,s){s&&e===void 0||Hn(xs(t,"value"),e,n)},Hn=function(t,e,n){const s=n instanceof O?new am(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ct(s));if(typeof e=="function")throw new Error(t+"contains a function "+ct(s)+" with contents = "+e.toString());if(fr(e))throw new Error(t+"contains "+e.toString()+" "+ct(s));if(typeof e=="string"&&e.length>bi/3&&$s(e)>bi)throw new Error(t+"contains a string greater than "+bi+" utf8 bytes "+ct(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vr(o)))throw new Error(t+" contains an invalid key ("+o+") "+ct(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lm(s,o),Hn(t,a,s),cm(s)}),i&&r)throw new Error(t+' contains ".value" child '+ct(s)+" in addition to actual children.")}},j_=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=In(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(om);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&_e(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},q_=function(t,e,n,s){const i=xs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];J(e,(o,a)=>{const l=new O(o);if(Hn(i,a,F(n,l)),vr(l)===".priority"&&!Rs(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),j_(i,r)},wc=function(t,e,n,s){if(!yc(n))throw new Error(xs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},z_=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wc(t,e,n)},Wr=function(t,e){if(C(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},G_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!H_(n))throw new Error(xs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class K_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ks(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!yr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ec(t,e,n){Ks(t,n),Ic(t,s=>yr(s,e))}function fe(t,e,n){Ks(t,n),Ic(t,s=>_e(s,e)||_e(e,s))}function Ic(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Y_(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Y_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();dn&&Q("event: "+n.toString()),Kt(s)}}}/**
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
 */const Q_="repo_interrupt",J_=25;class X_{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new K_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bs(),this.transactionQueueTree_=new Ur,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Z_(t,e,n){if(t.stats_=_r(t.repoInfo_),t.forceRestClient_||Pp())t.server_=new ys(t.repoInfo_,(s,i,r,o)=>{ga(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>va(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Me(t.repoInfo_,e,(s,i,r,o)=>{ga(t,s,i,r,o)},s=>{va(t,s)},s=>{eg(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=xp(t.repoInfo_,()=>new Dm(t.stats_,t.server_)),t.infoData_=new Nm,t.infoSyncTree_=new ma({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Vn(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Hr(t,"connected",!1),t.serverSyncTree_=new ma({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);fe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Cc(t){const n=t.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jn(t){return D_({timestamp:Cc(t)})}function ga(t,e,n,s,i){t.dataUpdateCount++;const r=new O(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ls(n,c=>W(c));o=R_(t.serverSyncTree_,r,l,i)}else{const l=W(n);o=hc(t.serverSyncTree_,r,l,i)}else if(s){const l=ls(n,c=>W(c));o=T_(t.serverSyncTree_,r,l)}else{const l=W(n);o=Vn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ft(t,r)),fe(t.eventQueue_,a,o)}function va(t,e){Hr(t,"connected",e),e===!1&&ig(t)}function eg(t,e){J(e,(n,s)=>{Hr(t,n,s)})}function Hr(t,e,n){const s=new O("/.info/"+e),i=W(n);t.infoData_.updateSnapshot(s,i);const r=Vn(t.infoSyncTree_,s,i);fe(t.eventQueue_,s,r)}function Ys(t){return t.nextWriteId_++}function tg(t,e,n){const s=N_(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());Vi(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Vn(t.serverSyncTree_,e._path,r);else{const a=An(t.serverSyncTree_,e);o=hc(t.serverSyncTree_,e._path,r,a)}return fe(t.eventQueue_,e._path,o),As(t.serverSyncTree_,e,n,null,!0),r},i=>(Qt(t,"get for query "+H(e)+" failed: "+i),Promise.reject(new Error(i))))}function ng(t,e,n,s,i){Qt(t,"set",{path:e.toString(),value:n,priority:s});const r=jn(t),o=W(n,s),a=js(t.serverSyncTree_,e),l=$r(o,a,r),c=Ys(t),d=Pr(t.serverSyncTree_,e,l,c,!0);Ks(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const g=h==="ok";g||ne("set at "+e+" failed: "+h);const b=Ge(t.serverSyncTree_,c,!g);fe(t.eventQueue_,e,b),Hi(t,i,h,p)});const u=qr(t,e);Ft(t,u),fe(t.eventQueue_,u,[])}function sg(t,e,n,s){Qt(t,"update",{path:e.toString(),value:n});let i=!0;const r=jn(t),o={};if(J(n,(a,l)=>{i=!1,o[a]=_c(F(e,a),W(l),t.serverSyncTree_,r)}),i)Q("update() called with empty data.  Don't do anything."),Hi(t,s,"ok",void 0);else{const a=Ys(t),l=S_(t.serverSyncTree_,e,o,a);Ks(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||ne("update at "+e+" failed: "+c);const h=Ge(t.serverSyncTree_,a,!u),p=h.length>0?Ft(t,e):e;fe(t.eventQueue_,p,h),Hi(t,s,c,d)}),J(n,c=>{const d=qr(t,F(e,c));Ft(t,d)}),fe(t.eventQueue_,e,[])}}function ig(t){Qt(t,"onDisconnectEvents");const e=jn(t),n=bs();Di(t.onDisconnect_,k(),(i,r)=>{const o=_c(i,r,t.serverSyncTree_,e);Jl(n,i,o)});let s=[];Di(n,k(),(i,r)=>{s=s.concat(Vn(t.serverSyncTree_,i,r));const o=qr(t,i);Ft(t,o)}),t.onDisconnect_=bs(),fe(t.eventQueue_,k(),s)}function rg(t,e,n){let s;C(e._path)===".info"?s=Vi(t.infoSyncTree_,e,n):s=Vi(t.serverSyncTree_,e,n),Ec(t.eventQueue_,e._path,s)}function og(t,e,n){let s;C(e._path)===".info"?s=As(t.infoSyncTree_,e,n):s=As(t.serverSyncTree_,e,n),Ec(t.eventQueue_,e._path,s)}function ag(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Q_)}function Qt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Q(n,...e)}function Hi(t,e,n,s){e&&Kt(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lg(t,e,n,s,i,r){Qt(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:yl(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=jr(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Hn("transaction failed: Data returned ",l,o.path),o.status=0;const c=zs(t.transactionQueueTree_,e),d=wt(c)||[];d.push(o),Br(c,d);let u;typeof l=="object"&&l!==null&&Ie(l,".priority")?(u=ft(l,".priority"),m(Rs(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(js(t.serverSyncTree_,e)||y.EMPTY_NODE).getPriority().val();const h=jn(t),p=W(l,u),g=$r(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=g,o.currentWriteId=Ys(t);const b=Pr(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);fe(t.eventQueue_,e,b),Qs(t,t.transactionQueueTree_)}}function jr(t,e,n){return js(t.serverSyncTree_,e,n)||y.EMPTY_NODE}function Qs(t,e=t.transactionQueueTree_){if(e||Js(t,e),wt(e)){const n=Tc(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cg(t,Wn(e),n)}else gc(e)&&Gs(e,n=>{Qs(t,n)})}function cg(t,e,n){const s=n.map(c=>c.currentWriteId),i=jr(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=te(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qt(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ge(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Js(t,zs(t.transactionQueueTree_,e)),Qs(t,t.transactionQueueTree_),fe(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Kt(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ne("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ft(t,e)}},o)}function Ft(t,e){const n=Sc(t,e),s=Wn(n),i=Tc(t,n);return ug(t,i,s),s}function ug(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=te(n,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Ge(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=J_)d=!0,u="maxretry",i=i.concat(Ge(t.serverSyncTree_,l.currentWriteId,!0));else{const h=jr(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Hn("transaction failed: Data returned ",p,l.path);let g=W(p);typeof p=="object"&&p!=null&&Ie(p,".priority")||(g=g.updatePriority(h.getPriority()));const E=l.currentWriteId,$=jn(t),de=$r(g,h,$);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=de,l.currentWriteId=Ys(t),o.splice(o.indexOf(E),1),i=i.concat(Pr(t.serverSyncTree_,l.path,de,l.currentWriteId,l.applyLocally)),i=i.concat(Ge(t.serverSyncTree_,E,!0))}else d=!0,u="nodata",i=i.concat(Ge(t.serverSyncTree_,l.currentWriteId,!0))}fe(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Js(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Kt(s[a]);Qs(t,t.transactionQueueTree_)}function Sc(t,e){let n,s=t.transactionQueueTree_;for(n=C(e);n!==null&&wt(s)===void 0;)s=zs(s,n),e=L(e),n=C(e);return s}function Tc(t,e){const n=[];return kc(t,e,n),n.sort((s,i)=>s.order-i.order),n}function kc(t,e,n){const s=wt(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gs(e,i=>{kc(t,i,n)})}function Js(t,e){const n=wt(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Br(e,n.length>0?n:void 0)}Gs(e,s=>{Js(t,s)})}function qr(t,e){const n=Wn(Sc(t,e)),s=zs(t.transactionQueueTree_,e);return U_(s,i=>{wi(t,i)}),wi(t,s),vc(s,i=>{wi(t,i)}),n}function wi(t,e){const n=wt(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ge(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Br(e,void 0):n.length=r+1,fe(t.eventQueue_,Wn(e),i);for(let o=0;o<s.length;o++)Kt(s[o])}}/**
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
 */function dg(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hg(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const ya=function(t,e){const n=fg(t),s=n.namespace;n.domain==="firebase.com"&&$e(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&$e("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ep();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ol(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new O(n.pathString)}},fg=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=dg(t.substring(d,u)));const h=hg(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const ba="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",pg=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ba.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ba.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class mg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class _g{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ac{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return T(this._path)?null:vr(this._path)}get ref(){return new Ae(this._repo,this._path)}get _queryIdentifier(){const e=ra(this._queryParams),n=pr(e);return n==="{}"?"default":n}get _queryObject(){return ra(this._queryParams)}isEqual(e){if(e=Z(e),!(e instanceof qn))return!1;const n=this._repo===e._repo,s=yr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rm(this._path)}}function gg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function vg(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ze){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==_t)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==st)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===x){if(e!=null&&!Rs(e)||n!=null&&!Rs(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(m(t.getIndex()instanceof Kl||t.getIndex()===Yl,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ae extends qn{constructor(e,n){super(e,n,new Ir,!1)}get parent(){const e=Vl(this._path);return e===null?null:new Ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ut{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new O(e),s=Rn(this.ref,e);return new Ut(this._node.getChild(n),s,x)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ut(i,Rn(this.ref,s),x)))}hasChild(e){const n=new O(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Y(t,e){return t=Z(t),t._checkNotDeleted("ref"),e!==void 0?Rn(t._root,e):t._root}function Rn(t,e){return t=Z(t),C(t._path)===null?z_("child","path",e):wc("child","path",e),new Ae(t._repo,F(t._path,e))}function Fe(t,e){t=Z(t),Wr("push",t._path),bc("push",e,t._path,!0);const n=Cc(t._repo),s=pg(n),i=Rn(t,s),r=Rn(t,s);let o;return e!=null?o=zr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function zr(t,e){t=Z(t),Wr("set",t._path),bc("set",e,t._path,!1);const n=new jt;return ng(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ee(t,e){q_("update",e,t._path);const n=new jt;return sg(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ct(t){t=Z(t);const e=new Ac(()=>{}),n=new Xs(e);return tg(t._repo,t,n).then(s=>new Ut(s,new Ae(t._repo,t._path),t._queryParams.getIndex()))}class Xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mg("value",this,new Ut(e.snapshotNode,new Ae(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _g(this,e,n):null}matches(e){return e instanceof Xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function yg(t,e,n,s,i){const r=new Ac(n,void 0),o=new Xs(r);return rg(t._repo,t,o),()=>og(t._repo,t,o)}function bg(t,e,n,s){return yg(t,"value",e)}class Rc{}class wg extends Rc{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qn(e._repo,e._path,Am(e._queryParams,this._limit),e._orderByCalled)}}function Eg(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new wg(t)}class Ig extends Rc{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){gg(e,"orderByKey");const n=Rm(e._queryParams,Ze);return vg(n),new qn(e._repo,e._path,n,!0)}}function Cg(){return new Ig}function Sg(t,...e){let n=Z(t);for(const s of e)n=s._apply(n);return n}g_(Ae);E_(Ae);/**
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
 */const Tg="FIREBASE_DATABASE_EMULATOR_HOST",ji={};let kg=!1;function Ag(t,e,n,s){t.repoInfo_=new Ol(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Rg(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||$e("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Q("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ya(r,i),a=o.repoInfo,l;typeof process<"u"&&Vo&&(l=Vo[Tg]),l?(r=`http://${l}?ns=${a.namespace}`,o=ya(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Mp(t.name,t.options,e);G_("Invalid Firebase Database URL",o),T(o.path)||$e("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Pg(a,t,c,new Op(t.name,n));return new Og(d,t)}function Ng(t,e){const n=ji[e];(!n||n[t.key]!==t)&&$e(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ag(t),delete n[t.key]}function Pg(t,e,n,s){let i=ji[e.name];i||(i={},ji[e.name]=i);let r=i[t.toURLString()];return r&&$e("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new X_(t,kg,n,s),i[t.toURLString()]=r,r}class Og{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Z_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ae(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ng(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$e("Cannot call "+e+" on a deleted database.")}}function Mg(t=xa(),e){const n=nr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=qu("database");s&&Lg(n,...s)}return n}function Lg(t,e,n,s={}){t=Z(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$e("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&$e('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new rs(rs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:zu(s.mockUserToken,t.app.options.projectId);r=new rs(o)}Ag(i,e,n,r)}/**
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
 */function Dg(t){gp(zt),Mt(new pt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Rg(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Xe(Wo,Ho,t),Xe(Wo,Ho,"esm2017")}/**
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
 */class xg{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function ce(t,e,n){var s;if(t=Z(t),Wr("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new jt,o=(l,c,d)=>{let u=null;l?r.reject(l):(u=new Ut(d,new Ae(t._repo,t._path),x),r.resolve(new xg(c,u)))},a=bg(t,()=>{});return lg(t._repo,t._path,e,o,a,i),r.promise}Me.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Me.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Dg();const qi={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},$g=!!qi.apiKey&&!!qi.databaseURL;let rn=null,wa=null,Ea=null;function q(){return rn||(rn=Da(qi),wa=mp(rn),Ea=Mg(rn)),{app:rn,auth:wa,db:Ea}}function Fg(){const{auth:t}=q();return new Promise(e=>{let n=!1;const s=sf(t,i=>{n||(n=!0,s(),e(i||null))},()=>e(null));setTimeout(()=>{n||(n=!0,e(t.currentUser||null))},4e3)})}const Ug="../STONK-Home/index.html",Ei=2600;function Bg(t){return String(t||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function Vg(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function Wg(t){const e=Bg(t);return Ug+(e?`?room=${encodeURIComponent(e)}`:"")}function Hg({title:t="STONK Home에서 입장해 주세요",message:e="",roomCode:n="",auto:s=!0}={}){var l;const i=Wg(n),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(54,211,153,0.20), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!Vg();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(54,211,153,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#36d399;margin-bottom:8px">STONK COMPANY</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${t}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인은 STONK Home에서 진행합니다. 같은 계정의 자산이 그대로 연결됩니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#6ee7b0,#36d399);box-shadow:0 10px 30px rgba(54,211,153,0.4)">STONK Home으로 이동</a>
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Ei/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(l=o.querySelector("[data-home-go]"))==null||l.addEventListener("click",c=>{c.preventDefault(),location.href=i}),a){let c=Math.ceil(Ei/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{c-=1,d&&(d.textContent=String(Math.max(0,c))),c<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},Ei)}return o}const z="MAIN",Zs=1e7,Nn=8,Nc=3e7,Ns={desk:{id:"desk",label:"개발·회계팀",icon:"💻",emps:["dev","account","ops"],fac:"office"},marketing:{id:"marketing",label:"마케팅·브랜드팀",icon:"📣",emps:["marketer","brand"],fac:"marketing"},lab:{id:"lab",label:"연구팀",icon:"🔬",emps:["researcher"],fac:"lab"},server:{id:"server",label:"서버·인프라",icon:"🖥️",emps:[],fac:"server"},accounting:{id:"accounting",label:"회계실",icon:"📒",emps:[],fac:"accounting"},security:{id:"security",label:"보안팀",icon:"🛡️",emps:["risk","sales"],fac:"security"}},jg=Object.keys(Ns);function Pc(t){return Math.floor(Nc*Math.pow(1.8,Math.max(0,f(t.floors)-1)))}function qg(t,e){return Math.max(0,Math.min(f(t.floors)-1,f((t.floorMap||{})[e])))}const Gr=60*60*1e3,Kr=.012;function j(t){const e=Number(t);return Number.isFinite(e)?e:0}function f(t){return Math.trunc(j(t))}function U(t){return f(t).toLocaleString("ko-KR")+"원"}function B(t,e,n){return t=j(t),Math.max(e,Math.min(n,t))}const Ke={fintech:{id:"fintech",label:"핀테크",icon:"💳",revCoef:.04,valCoef:.42,vol:.18,eventSens:1.4,note:"Bank 이벤트 영향이 큼"},game:{id:"game",label:"게임",icon:"🎮",revCoef:.045,valCoef:.45,vol:.28,eventSens:1,note:"변동성 높음 · Gacha/Arcade 확장"},bio:{id:"bio",label:"바이오",icon:"🧬",revCoef:.046,valCoef:.5,vol:.34,eventSens:1,note:"성장 변동성이 큼"},semicon:{id:"semicon",label:"반도체",icon:"🔬",revCoef:.038,valCoef:.55,vol:.22,eventSens:1,note:"시설 영향 큼 · 가치 상승 큼"},ent:{id:"ent",label:"엔터테인먼트",icon:"🎬",revCoef:.042,valCoef:.44,vol:.24,eventSens:1,note:"브랜드 점수 영향 큼"},food:{id:"food",label:"식품",icon:"🍱",revCoef:.036,valCoef:.38,vol:.1,eventSens:.8,note:"안정적 매출"},robot:{id:"robot",label:"로봇",icon:"🤖",revCoef:.044,valCoef:.5,vol:.3,eventSens:1,note:"연구개발 중심"},energy:{id:"energy",label:"친환경 에너지",icon:"🌱",revCoef:.04,valCoef:.46,vol:.2,eventSens:1.2,note:"이벤트 보너스 가능"},logistics:{id:"logistics",label:"물류",icon:"🚚",revCoef:.037,valCoef:.4,vol:.12,eventSens:.8,note:"꾸준한 수익"},security:{id:"security",label:"보안",icon:"🛡️",revCoef:.039,valCoef:.42,vol:.16,eventSens:.9,note:"리스크 감소"}},zg=Object.keys(Ke),Bt={stable:{id:"stable",label:"안정형",revMod:.95,growth:.9,riskBase:18,brand:0,ipo:0,note:"변동성·리스크 낮음"},aggressive:{id:"aggressive",label:"공격형",revMod:1.15,growth:1.2,riskBase:38,brand:0,ipo:0,note:"성장↑ 비용·리스크↑"},brand:{id:"brand",label:"브랜드형",revMod:.92,growth:1,riskBase:24,brand:12,ipo:0,note:"브랜드 점수↑ 초기 수익↓"},rnd:{id:"rnd",label:"연구개발형",revMod:.9,growth:1.05,riskBase:26,brand:0,ipo:12,note:"IPO 준비도 보너스 · 초기 비용↑"}},le={dev:{id:"dev",label:"개발자",icon:"👨‍💻",cost:2e6,upkeep:12e4,effect:"성장률 +"},marketer:{id:"marketer",label:"마케터",icon:"📣",cost:18e5,upkeep:11e4,effect:"브랜드 +"},sales:{id:"sales",label:"영업 담당",icon:"🤝",cost:18e5,upkeep:11e4,effect:"매출 +"},account:{id:"account",label:"회계 담당",icon:"🧮",cost:16e5,upkeep:1e5,effect:"비용 −"},risk:{id:"risk",label:"리스크 매니저",icon:"🧯",cost:22e5,upkeep:13e4,effect:"리스크 −"},researcher:{id:"researcher",label:"연구원",icon:"🔭",cost:24e5,upkeep:14e4,effect:"IPO 준비도 +"},ops:{id:"ops",label:"운영 매니저",icon:"🛠️",cost:2e6,upkeep:12e4,effect:"시설 효율 +"},brand:{id:"brand",label:"브랜드 매니저",icon:"✨",cost:22e5,upkeep:13e4,effect:"엔터 보너스"}},Oc=Object.keys(le),Ye={office:{id:"office",label:"사무실",icon:"🏢",baseCost:3e6,upkeep:6e4,effect:"직원 한도 +"},server:{id:"server",label:"서버실",icon:"🖥️",baseCost:4e6,upkeep:8e4,effect:"핀테크/게임/보안 매출 +"},lab:{id:"lab",label:"연구소",icon:"🧪",baseCost:5e6,upkeep:9e4,effect:"바이오/로봇/반도체 성장 +"},marketing:{id:"marketing",label:"마케팅룸",icon:"📈",baseCost:35e5,upkeep:7e4,effect:"브랜드 +"},accounting:{id:"accounting",label:"회계실",icon:"📒",baseCost:3e6,upkeep:6e4,effect:"비용 −"},security:{id:"security",label:"보안실",icon:"🔒",baseCost:35e5,upkeep:7e4,effect:"리스크 −"}},Mc=Object.keys(Ye),Lc=["STARTUP","SMALL_BIZ","SCALE_UP","ENTERPRISE","PRE_IPO","LISTED"],St={STARTUP:"스타트업",SMALL_BIZ:"소기업",SCALE_UP:"성장기업",ENTERPRISE:"대기업",PRE_IPO:"상장 준비",LISTED:"상장기업"};function Gg(t){return Math.max(0,Lc.indexOf(t||"STARTUP"))}const ei=t=>Y(q().db,`rooms/${z}/players/${t}/cash`),Kg=t=>Y(q().db,`rooms/${z}/players/${t}`),X=t=>Y(q().db,`rooms/${z}/companies/${t}`),Dc=t=>Y(q().db,`rooms/${z}/companies/${t}/logs`),Yg=t=>Y(q().db,`rooms/${z}/bank/${t}`),Pn=t=>Y(q().db,`rooms/${z}/bank/${t}/businessLoan`),Qg=()=>Y(q().db,`rooms/${z}/bankEvents/current`);function xc(t,e,n,s){return{companyId:"co"+s.toString(36),ownerUid:t,ownerNickname:e||"플레이어",name:n.name,slogan:n.slogan||"",sector:n.sector,strategy:n.strategy,stage:"STARTUP",level:1,companyValue:3e7,companyCash:0,totalRevenue:0,totalCost:0,lastProfit:0,growthRate:0,brandScore:B((Bt[n.strategy]||{}).brand||0,0,100),riskScore:B((Bt[n.strategy]||{}).riskBase||20,0,100),ipoReadiness:0,employees:{},facilities:{},upgrades:{},floors:1,floorMap:{},createdAt:s,updatedAt:s,lastSettledAt:s}}function Jg(t){const e=t&&typeof t=="object"?t:{};return{companyId:e.companyId||"",ownerUid:e.ownerUid||"",ownerNickname:e.ownerNickname||"플레이어",name:e.name||"",slogan:e.slogan||"",sector:e.sector||"fintech",strategy:e.strategy||"stable",stage:e.stage||"STARTUP",level:Math.max(1,f(e.level)||1),companyValue:Math.max(0,f(e.companyValue)),companyCash:f(e.companyCash),totalRevenue:Math.max(0,f(e.totalRevenue)),totalCost:Math.max(0,f(e.totalCost)),lastProfit:f(e.lastProfit),growthRate:j(e.growthRate),brandScore:B(e.brandScore,0,100),riskScore:B(e.riskScore,0,100),ipoReadiness:B(e.ipoReadiness,0,100),employees:e.employees&&typeof e.employees=="object"?e.employees:{},facilities:e.facilities&&typeof e.facilities=="object"?e.facilities:{},upgrades:e.upgrades&&typeof e.upgrades=="object"?e.upgrades:{},floors:Math.max(1,Math.min(Nn,f(e.floors)||1)),floorMap:e.floorMap&&typeof e.floorMap=="object"?e.floorMap:{},createdAt:f(e.createdAt),updatedAt:f(e.updatedAt),lastSettledAt:f(e.lastSettledAt)||f(e.createdAt)}}function Yr(t){return Object.values(t.employees||{}).reduce((e,n)=>e+Math.max(0,f(n&&n.count)),0)}function Qr(t){return Object.values(t.facilities||{}).reduce((e,n)=>e+Math.max(0,f(n&&n.level)),0)}function cn(t,e){const n=(t.employees||{})[e];return Math.max(0,f(n&&n.count))}function Tt(t,e){const n=(t.facilities||{})[e];return Math.max(0,f(n&&n.level))}function $c(t,e){const n=Tt(t,e);return Math.floor((Ye[e]||{}).baseCost*Math.pow(1.6,n))}function Fc(t,e){const n=cn(t,e);return Math.floor((le[e]||{}).cost*Math.pow(1.18,n))}function Uc(t){const e={valBonus:1,loanMult:1,riskBonus:0,warnBoost:!1},n=t&&t.type;return t&&t.custom&&t.effects?(e.loanMult=B(t.effects.loanRateMultiplier,.5,1.5),e.loanMult!==1&&(e.loanMult=e.loanMult),e):(n==="lowrate"?e.loanMult=.7:n==="highrate"?(e.loanMult=1.3,e.warnBoost=!0):n==="boom"?e.valBonus=1.08:n==="bust"?(e.valBonus=.96,e.riskBonus=3,e.warnBoost=!0):n==="caution"&&(e.warnBoost=!0),e)}function Bc(t,e){if(e=e||Date.now(),t&&t.manual&&(!t.expiresAt||j(t.expiresAt)>e)&&(t.title||t.type))return t;const n=new Date(e+9*36e5),s="bankevt:"+n.getUTCFullYear()+"-"+(n.getUTCMonth()+1)+"-"+n.getUTCDate();let i=2166136261;for(let l=0;l<s.length;l++)i^=s.charCodeAt(l),i=Math.imul(i,16777619);const r=["lowrate","highrate","boom","bust","insurance","cashback","vipweek","caution"],o={lowrate:"저금리 데이",highrate:"고금리 데이",boom:"투자 호황",bust:"투자 침체",insurance:"보험 우대 기간",cashback:"카드 캐시백 이벤트",vipweek:"VIP 우대 기간",caution:"금융 경계주의보"},a=r[(i>>>0)%r.length];return{type:a,title:o[a],manual:!1}}function zn(t){return t=B(t,0,100),t>=90?"S":t>=75?"A":t>=55?"B":t>=35?"C":t>=15?"D":"F"}const Xg={NORMAL:0,SILVER:1,GOLD:2,PLATINUM:3,BLACK:4};function zi(t){return Xg[t]||0}const Vt={F:0,D:1,C:2,B:3,A:4,S:5};function Vc(t){let e=0;const n=zn((t&&t.creditScore)!=null?t.creditScore:60);Vt[n]>=Vt.A&&(e+=.05);const s=t&&t.vipTier||"NORMAL";return s==="SILVER"?e+=.03:s==="GOLD"?e+=.05:s==="PLATINUM"?e+=.08:s==="BLACK"&&(e+=.1),Math.min(.2,e)}const Wc={S:2e8,A:12e7,B:6e7,C:3e7,D:12e6,F:0};function Jr(t){const e=zn((t&&t.creditScore)!=null?t.creditScore:60);let n=Wc[e]||0;const s=t&&t.vipTier||"NORMAL";return zi(s)>=3?n=Math.floor(n*1.3):zi(s)>=2&&(n=Math.floor(n*1.1)),n}function Zg(t){let e=2166136261;const n=String(t);for(let s=0;s<n.length;s++)e^=n.charCodeAt(s),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e5/1e5}function ti(t,e,n){const s=f(t.lastSettledAt)||e,i=Math.max(0,e-s),r=i/864e5;if(r<=0)return{applied:!1,elapsed:i};const o=Ke[t.sector]||Ke.fintech,a=Bt[t.strategy]||Bt.stable,l=Uc(n);let c=a.revMod;c*=1+Math.min(.6,cn(t,"sales")*.04),t.sector==="ent"&&(c*=1+Math.min(.3,t.brandScore/300)),(t.sector==="fintech"||t.sector==="game"||t.sector==="security")&&(c*=1+Math.min(.3,Tt(t,"server")*.05)),(t.sector==="bio"||t.sector==="robot"||t.sector==="semicon")&&(c*=1+Math.min(.3,Tt(t,"lab")*.05));const d=Math.floor(t.companyValue*o.revCoef*r*c);let u=0;for(const pe of Oc)u+=cn(t,pe)*le[pe].upkeep;let h=0;for(const pe of Mc)h+=Tt(t,pe)*Ye[pe].upkeep;let p=Math.floor((u+h)*r);p=Math.floor(p*(1-Math.min(.4,cn(t,"account")*.05+Tt(t,"accounting")*.04)));const g=Math.max(0,t.riskScore-cn(t,"risk")*5-Tt(t,"security")*4),b=Math.floor(t.companyValue*(g/100)*.01*r);p+=b;const $=(Zg(t.companyId+":"+s)-.5)*2*o.vol;let de=Math.floor((d-p)*(1+$)*l.valBonus);const ve=Math.max(0,Math.floor(de*o.valCoef*a.growth));return{applied:!0,elapsed:i,days:r,revenue:d,cost:p,profit:de,valueGain:ve,riskAdd:l.riskBonus,eventTitle:n&&n.title}}function Ps(t,e){const n=Math.min(40,Math.floor(t.companyValue/125e6)),s=Math.min(25,Math.floor(t.brandScore*.25)),i=t.lastProfit>0?12:0,r=Math.min(12,Qr(t)*1.5),o=Math.min(8,Yr(t)),a=Math.floor(t.riskScore*.25),c=(e&&e.businessLoan?f(e.businessLoan.principal)+f(e.businessLoan.interest):0)>0?8:0;return B(n+s+i+r+o-a-c,0,100)}function Hc(t,e){const n=t.companyValue,s=Yr(t),i=Qr(t),r=t.ipoReadiness,o=zn((e&&e.creditScore)!=null?e.creditScore:60),a=e&&e.businessLoan&&f(e.businessLoan.interest)>f(e.businessLoan.principal)*.3;switch(t.stage){case"STARTUP":if(n>=5e7&&s>=3&&i>=2)return"SMALL_BIZ";break;case"SMALL_BIZ":if(n>=2e8&&t.brandScore>=30&&t.lastProfit>=1e7)return"SCALE_UP";break;case"SCALE_UP":if(n>=1e9&&s>=20&&t.brandScore>=60)return"ENTERPRISE";break;case"ENTERPRISE":if(n>=5e9&&r>=70&&t.riskScore<=40)return"PRE_IPO";break;case"PRE_IPO":if(r>=100&&Vt[o]>=Vt.B&&!a)return"LISTED";break}return null}function re(t,e,n,s){return{type:t,title:e||"",amount:f(n),memo:s||"",createdAt:Date.now()}}async function ue(t,e){await Fe(Dc(t),e)}async function Xr(t){const e=Date.now(),[n,s,i,r,o]=await Promise.all([Ct(Kg(t)),Ct(X(t)),Ct(Yg(t)),Ct(Qg()),Ct(Sg(Dc(t),Cg(),Eg(15)))]),a=n.val()||{},l=f(a.cash),c=a.nickname||i.val()&&i.val().nickname||"플레이어",d=i.val()||{},u=Bc(r.val(),e);let p=s.exists()?Jg(s.val()):null,g=null;if(p){await ev(t,d,e);const E=ti(p,e,u);E.applied&&E.elapsed>=Gr?(p=jc(p,E,e),p.ipoReadiness=Ps(p,d),await Ee(X(t),Zr(p)),await ue(t,re("settle","실적 정산",E.profit,`매출 ${U(E.revenue)} · 비용 ${U(E.cost)}${E.eventTitle?" · "+E.eventTitle:""}`)),g=E):p.ipoReadiness=Ps(p,d)}const b=o.exists()?Object.entries(o.val()).map(([E,$])=>({id:E,...$})).sort((E,$)=>j($.createdAt)-j(E.createdAt)):[];return{uid:t,cash:l,nickname:c,company:p,bank:d,event:u,logs:b,settleFeed:g}}function jc(t,e,n){const s={...t};return s.companyCash=Math.max(0,f(t.companyCash)+e.profit),s.companyValue=Math.max(0,f(t.companyValue)+e.valueGain),s.totalRevenue=f(t.totalRevenue)+Math.max(0,e.revenue),s.totalCost=f(t.totalCost)+Math.max(0,e.cost),s.lastProfit=e.profit,s.growthRate=s.companyValue>0?e.profit/s.companyValue:0,s.riskScore=B(t.riskScore+(e.riskAdd||0)+(e.profit<0?2:-1),0,100),s.lastSettledAt=n,s}function Zr(t){return{companyId:t.companyId,ownerUid:t.ownerUid,ownerNickname:t.ownerNickname,name:t.name,slogan:t.slogan,sector:t.sector,strategy:t.strategy,stage:t.stage,level:Math.max(1,f(t.level)),companyValue:Math.max(0,f(t.companyValue)),companyCash:f(t.companyCash),totalRevenue:Math.max(0,f(t.totalRevenue)),totalCost:Math.max(0,f(t.totalCost)),lastProfit:f(t.lastProfit),growthRate:j(t.growthRate),brandScore:B(t.brandScore,0,100),riskScore:B(t.riskScore,0,100),ipoReadiness:B(t.ipoReadiness,0,100),employees:t.employees||{},facilities:t.facilities||{},upgrades:t.upgrades||{},floors:Math.max(1,Math.min(Nn,f(t.floors)||1)),floorMap:t.floorMap||{},createdAt:f(t.createdAt),updatedAt:Date.now(),lastSettledAt:f(t.lastSettledAt)}}async function qc(t,e,n){if(e=Math.max(0,f(e)),e<=0)return 0;const s=Date.now(),i=(await Ct(Y(q().db,`rooms/${z}/bank/${t}/card`))).val()||{};if(!i.enabled||i.suspended||i.lost)return-1;if(i.overdue)return-3;const r=f(i.cardLimit),o=f(i.usedAmount);if(o+e>r)return-2;const a=j(i.dueAt)>0?j(i.dueAt):s+24*3600*1e3;return await Ee(Y(q().db,`rooms/${z}/bank/${t}/card`),{usedAmount:o+e,dueAt:a,updatedAt:s}),await Fe(Y(q().db,`rooms/${z}/bank/${t}/tx`),{type:"card_use",title:n||"Company 결제",amount:-e,beforeCash:0,afterCash:0,memo:"게임머니 카드 결제(청구 예정) · Company",createdAt:s}),await Fe(Y(q().db,`rooms/${z}/bank/${t}/messages`),{type:"card",title:"STONK Card 결제",body:`${n||"Company 결제"} ${U(e)}이 카드로 결제되었습니다(청구 예정).`,amount:-e,relatedId:"",read:!1,actionLabel:"",actionUrl:"",createdAt:s}),e}function zc(t){return t===-2?"STONK Card 한도 초과로 결제할 수 없습니다.":t===-3?"카드 미납 상태로 결제할 수 없습니다. 먼저 청구액을 납부해 주세요.":"카드가 미발급/정지/분실 상태입니다. 결제수단을 변경해 주세요."}async function ev(t,e,n){const s=e&&e.businessLoan;if(!s||f(s.principal)<=0)return;const i=f(s.lastSettledAt)||n,r=Math.max(0,n-i)/864e5;if(r<Gr/864e5)return;const o=Math.floor(f(s.principal)*Kr*r);o<=0||(await Ee(Pn(t),{interest:f(s.interest)+o,lastSettledAt:n,updatedAt:n}),e.businessLoan.interest=f(s.interest)+o,e.businessLoan.lastSettledAt=n)}async function Gc(t,e,n){if(e=f(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const s=n.bank&&n.bank.businessLoan||{},i=Jr(n.bank),r=f(s.principal);if(i<=0)throw new Error("현재 신용등급으로는 사업대출이 불가합니다.");if(r+e>i)throw new Error(`사업대출 한도 초과 (한도 ${U(i)}, 현재 ${U(r)})`);const o=Date.now();return await Ee(Pn(t),{principal:r+e,interest:f(s.interest),limit:i,companyId:n.company.companyId,lastSettledAt:f(s.lastSettledAt)||o,createdAt:f(s.createdAt)||o,updatedAt:o}),await ce(X(t),a=>a&&(a.companyCash=f(a.companyCash)+e,a.updatedAt=o,a)),await Fe(Y(q().db,`rooms/${z}/bank/${t}/tx`),{type:"biz_loan",title:"사업대출 실행",amount:e,beforeCash:0,afterCash:0,memo:`회사자금 입금 · 잔액 ${U(r+e)}`,createdAt:o}),await ue(t,re("loan","사업대출 실행",e,`회사 자금 +${U(e)}`)),`사업대출 완료 (+${U(e)} → 회사 자금)`}async function Gi(t,e,n,s){if(e=f(e),e<=0)throw new Error("금액을 확인하세요.");const i=s.bank&&s.bank.businessLoan||{},r=f(i.principal)+f(i.interest);if(r<=0)throw new Error("상환할 사업대출이 없습니다.");const o=Math.min(e,r),a=Date.now();if(n==="cash"){if(!(await ce(ei(t),g=>{const b=g==null?f(s.cash):f(g);if(!(b<o))return b-o})).committed)throw new Error("보유 현금이 부족합니다.")}else{if(!s.company||f(s.company.companyCash)<o)throw new Error("회사 자금이 부족합니다.");await ce(X(t),p=>{if(!p)return p;if(!(f(p.companyCash)<o))return p.companyCash=f(p.companyCash)-o,p.updatedAt=a,p})}let l=o;const c=Math.min(l,f(i.interest));l-=c;const d=Math.min(l,f(i.principal)),u=Math.max(0,f(i.principal)-d),h=Math.max(0,f(i.interest)-c);return await Ee(Pn(t),{principal:u,interest:h,updatedAt:a}),await Fe(Y(q().db,`rooms/${z}/bank/${t}/tx`),{type:"biz_repay",title:"사업대출 상환",amount:-o,beforeCash:0,afterCash:0,memo:`이자 ${U(c)} · 원금 ${U(d)} · ${n==="cash"?"개인현금":"회사자금"}`,createdAt:a}),await ue(t,re("loan","사업대출 상환",-o,`이자 ${U(c)} · 원금 ${U(d)}`)),u+h<=0?"사업대출 전액 상환 완료 🎉":`상환 완료 (잔액 ${U(u+h)})`}function Kc(t){return String(t||"").replace(/[<>{}\[\]\\/]/g,"").trim().slice(0,24)}function Yc(t){return Math.max(1,Math.floor(Zs*(1-Vc(t))))}async function Qc(t,e,n){if(n.company)throw new Error("이미 회사를 보유하고 있습니다. (유저당 1개)");const s=Kc(e.name);if(!s)throw new Error("회사명을 입력하세요.");if(!Ke[e.sector])throw new Error("업종을 선택하세요.");if(!Bt[e.strategy])throw new Error("시작 전략을 선택하세요.");const i=Yc(n.bank),r=Date.now(),o=e.payMethod||"cash";if(o==="card"){const l=await qc(t,i,"회사 설립");if(l<=0)throw new Error(zc(l))}else if(o==="loan"){const l=Jr(n.bank),c=n.bank&&n.bank.businessLoan||{};if(l<=0||f(c.principal)+i>l)throw new Error("사업대출 한도가 부족합니다. 현금/카드로 설립하거나 한도를 확인하세요.");await Ee(Pn(t),{principal:f(c.principal)+i,interest:f(c.interest),limit:l,companyId:"pending",lastSettledAt:f(c.lastSettledAt)||r,createdAt:f(c.createdAt)||r,updatedAt:r})}else if(!(await ce(ei(t),c=>{const d=c==null?f(n.cash):f(c);if(!(d<i))return d-i})).committed)throw new Error("보유 현금이 부족합니다. (Bank 사업대출/카드 결제를 이용할 수 있습니다)");const a=xc(t,n.nickname,{name:s,slogan:e.slogan,sector:e.sector,strategy:e.strategy},r);return await zr(X(t),Zr(a)),o==="loan"&&await Ee(Pn(t),{companyId:a.companyId}),await ue(t,re("found","회사 설립",-i,`${Ke[e.sector].label} · ${o==="card"?"카드 결제":o==="loan"?"사업대출":"현금"}`)),await Fe(Y(q().db,`rooms/${z}/companyNews`),{uid:t,companyName:s,type:"found",title:`${s} 설립`,body:`${Ke[e.sector].label} 업종의 새 회사가 STONK 타이쿤에 등장했습니다.`,impact:"neutral",createdAt:r}),`${s} 설립 완료! (${Ke[e.sector].label})`}async function Jc(t,e,n){if(e=f(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");if(!(await ce(ei(t),r=>{const o=r==null?f(n.cash):f(r);if(!(o<e))return o-e})).committed)throw new Error("보유 현금이 부족합니다.");const i=Date.now();return await ce(X(t),r=>r&&(r.companyCash=f(r.companyCash)+e,r.companyValue=f(r.companyValue)+Math.floor(e*.3),r.updatedAt=i,r)),await ue(t,re("invest","회사에 출자",e,"개인 현금 → 회사 자금")),`출자 완료 (+${U(e)} 회사 자금)`}async function Xc(t,e,n){if(e=f(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company||f(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다.");const s=Date.now();return await ce(X(t),i=>{if(!i)return i;if(!(f(i.companyCash)<e))return i.companyCash=f(i.companyCash)-e,i.brandScore=B(j(i.brandScore)-1,0,100),i.riskScore=B(j(i.riskScore)+1,0,100),i.updatedAt=s,i}),await ce(ei(t),i=>f(i)+e),await ue(t,re("withdraw","회사 자금 인출",e,"회사 자금 → 개인 현금")),`인출 완료 (+${U(e)} 개인 현금)`}async function ni(t,e,n,s,i){if(s==="card"){const r=await qc(t,e,i);if(r<=0)throw new Error(zc(r));return"card"}if(!n.company||f(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다. (출자/사업대출/카드 결제를 이용하세요)");return await ce(X(t),r=>{if(!r)return r;if(!(f(r.companyCash)<e))return r.companyCash=f(r.companyCash)-e,r.updatedAt=Date.now(),r}),"company"}async function Zc(t,e,n,s){if(!le[e])throw new Error("직원 타입을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const i=Fc(n.company,e);await ni(t,i,n,s,`${le[e].label} 고용`);const r=Date.now();return await ce(X(t),o=>{if(!o)return o;o.employees=o.employees||{};const a=o.employees[e]||{count:0,level:1};return a.count=f(a.count)+1,a.level=Math.max(1,f(a.level)),o.employees[e]=a,to(o,e,1),o.updatedAt=r,o}),await ue(t,re("hire",`${le[e].label} 고용`,-i,s==="card"?"카드 결제":"회사 자금")),`${le[e].label} 고용 완료`}async function eu(t,e,n){if(!n.company)throw new Error("회사가 없습니다.");const s=(n.company.employees||{})[e];if(!s||f(s.count)<=0)throw new Error("해고할 직원이 없습니다.");return await ce(X(t),i=>{if(!i)return i;const r=(i.employees||{})[e];if(!(!r||f(r.count)<=0))return r.count=f(r.count)-1,to(i,e,-1),i.updatedAt=Date.now(),i}),await ue(t,re("fire",`${le[e].label} 해고`,0,"인건비 절감")),`${le[e].label} 1명 해고`}function tu(t,e){const n=(t.employees||{})[e]||{};return Math.floor((le[e]||{}).cost*.6*Math.max(1,f(n.level)))}async function eo(t,e,n,s){if(!n.company)throw new Error("회사가 없습니다.");const i=(n.company.employees||{})[e];if(!i||f(i.count)<=0)throw new Error("먼저 직원을 고용하세요.");const r=tu(n.company,e);return await ni(t,r,n,s,`${le[e].label} 레벨업`),await ce(X(t),o=>{if(!o)return o;const a=(o.employees||{})[e];if(a)return a.level=Math.max(1,f(a.level))+1,to(o,e,.5),o.updatedAt=Date.now(),o}),await ue(t,re("levelup",`${le[e].label} 레벨업`,-r,"")),`${le[e].label} 레벨업 완료`}function to(t,e,n){e==="marketer"?t.brandScore=B(j(t.brandScore)+3*n,0,100):e==="risk"?t.riskScore=B(j(t.riskScore)-4*n,0,100):e==="researcher"?t.ipoReadiness=B(j(t.ipoReadiness)+2*n,0,100):e==="brand"?t.brandScore=B(j(t.brandScore)+2*n,0,100):e==="dev"&&(t.growthRate=j(t.growthRate))}async function nu(t,e,n,s){if(!Ye[e])throw new Error("시설을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const i=$c(n.company,e);return await ni(t,i,n,s,`${Ye[e].label} 업그레이드`),await ce(X(t),r=>{if(!r)return r;r.facilities=r.facilities||{};const o=r.facilities[e]||{level:0};return o.level=f(o.level)+1,r.facilities[e]=o,e==="marketing"&&(r.brandScore=B(j(r.brandScore)+3,0,100)),e==="security"&&(r.riskScore=B(j(r.riskScore)-3,0,100)),r.companyValue=f(r.companyValue)+Math.floor(i*.4),r.updatedAt=Date.now(),r}),await ue(t,re("facility",`${Ye[e].label} 업그레이드`,-i,s==="card"?"카드 결제":"회사 자금")),`${Ye[e].label} 업그레이드 완료`}async function su(t,e,n){if(!e.company)throw new Error("먼저 회사를 설립하세요.");const s=Math.max(1,f(e.company.floors));if(s>=Nn)throw new Error(`최대 ${Nn}층까지 확장할 수 있습니다.`);const i=Pc(e.company);return await ni(t,i,e,n,`${s+1}층 확장`),await ce(X(t),r=>r&&(r.floors=Math.max(1,f(r.floors))+1,r.companyValue=f(r.companyValue)+Math.floor(i*.5),r.updatedAt=Date.now(),r)),await ue(t,re("floor",`${s+1}층 확장`,-i,n==="card"?"카드 결제":"회사 자금")),await Fe(Y(q().db,`rooms/${z}/companyNews`),{uid:t,companyName:e.company.name,type:"floor",title:`${e.company.name} ${s+1}층 확장`,body:`${e.company.name} 본사가 ${s+1}층으로 확장되었습니다.`,impact:"up",createdAt:Date.now()}),`${s+1}층 확장 완료! 이제 팀을 층별로 배치할 수 있습니다.`}async function iu(t,e,n,s){if(!s.company)throw new Error("회사가 없습니다.");if(!Ns[e])throw new Error("팀을 확인하세요.");const i=Math.max(0,Math.min(f(s.company.floors)-1,f(n)));return await Ee(X(t),{[`floorMap/${e}`]:i,updatedAt:Date.now()}),`${Ns[e].label}을(를) ${i+1}층으로 배치했습니다.`}async function ru(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=Date.now(),s=ti(e.company,n,e.event);if(!s.applied)throw new Error("정산할 내용이 없습니다.");const i=jc(e.company,s,n);return i.ipoReadiness=Ps(i,e.bank),await Ee(X(t),Zr(i)),await ue(t,re("settle","실적 정산",s.profit,`매출 ${U(s.revenue)} · 비용 ${U(s.cost)}${s.eventTitle?" · "+s.eventTitle:""}`)),s.profit>=0?`정산 완료: 순이익 +${U(s.profit)}`:`정산 완료: 손실 ${U(s.profit)} (경영 주의)`}async function ou(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=Hc(e.company,e.bank);if(!n)throw new Error("아직 다음 단계 조건을 충족하지 않았습니다.");return await Ee(X(t),{stage:n,level:f(e.company.level)+1,updatedAt:Date.now()}),await ue(t,re("stage","단계 승급",0,`${St[e.company.stage]} → ${St[n]}`)),await Fe(Y(q().db,`rooms/${z}/companyNews`),{uid:t,companyName:e.company.name,type:"stage",title:`${e.company.name} ${St[n]} 승급`,body:`${e.company.name}이(가) ${St[n]} 단계로 성장했습니다.`,impact:"up",createdAt:Date.now()}),`🎉 ${St[n]} 단계로 승급했습니다!`}function au(t,e){const n=zn((e&&e.creditScore)!=null?e.creditScore:60);e&&e.businessLoan&&f(e.businessLoan.principal)+f(e.businessLoan.interest);const s=e&&e.businessLoan&&f(e.businessLoan.interest)>f(e.businessLoan.principal)*.3;return[{ok:t.companyValue>=5e9,label:"회사 가치 50억원 이상"},{ok:t.brandScore>=70,label:"브랜드 점수 70 이상"},{ok:t.riskScore<=40,label:"리스크 점수 40 이하"},{ok:t.lastProfit>0,label:"최근 순이익 플러스"},{ok:Vt[n]>=Vt.B,label:"Bank 신용등급 B 이상"},{ok:!s,label:"사업대출 연체 없음"}]}async function lu(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=e.company;if(n.ipoReadiness<100)throw new Error("IPO 준비도가 100%가 아닙니다.");if(!au(n,e.bank).every(l=>l.ok))throw new Error("IPO 체크리스트를 모두 충족해야 합니다.");const i=Date.now(),r=("STK"+(n.name.replace(/[^A-Za-z0-9가-힣]/g,"").slice(0,3).toUpperCase()||"CO")+String(i%100)).slice(0,8),o=Math.max(1e3,Math.floor(n.companyValue/1e6)),a=n.companyValue;return await zr(Y(q().db,`rooms/${z}/companyMarket/${t}`),{listed:!1,status:"candidate",ticker:r,ipoPrice:o,marketCap:a,sector:n.sector,companyName:n.name,listedAt:0,createdAt:i,updatedAt:i}),await Ee(X(t),{stage:"LISTED",level:f(n.level)+1,updatedAt:i}),await ue(t,re("ipo","IPO 상장 후보 등록",0,`티커 ${r} · 공모가 ${U(o)}`)),await Fe(Y(q().db,`rooms/${z}/companyNews`),{uid:t,companyName:n.name,type:"ipo",title:`${n.name} 상장 후보 등록`,body:`${n.name}이(가) IPO 심사를 통과해 상장 후보(${r})로 등록되었습니다. Battle 종목 편입은 v3.1에서 진행됩니다.`,impact:"up",createdAt:i}),`🏆 IPO 상장 후보 등록 완료! (티커 ${r})`}const tv=Object.freeze(Object.defineProperty({__proto__:null,BIZ_LIMIT_BY_GRADE:Wc,BIZ_LOAN_RATE_DAY:Kr,DEPARTMENTS:Ns,DEPARTMENT_IDS:jg,EMPLOYEES:le,EMPLOYEE_IDS:Oc,FACILITIES:Ye,FACILITY_IDS:Mc,FLOOR_BASE_COST:Nc,FOUND_COST:Zs,MAX_FLOORS:Nn,ROOM:z,SECTORS:Ke,SECTOR_IDS:zg,SETTLE_MIN_MS:Gr,STAGES:Lc,STAGE_LABEL:St,STRATEGIES:Bt,applyIpo:lu,bizLoanLimit:Jr,clamp:B,computeIpo:Ps,computeSettle:ti,defaultCompany:xc,deptFloor:qg,empCount:Yr,employeeCost:Fc,employeeLevelCost:tu,eventEffects:Uc,expandFloor:su,facilityCost:$c,facilityTotal:Qr,fireEmployee:eu,floorExpandCost:Pc,foundCompany:Qc,foundCost:Yc,foundDiscount:Vc,gradeFromScore:zn,hireEmployee:Zc,int:f,investToCompany:Jc,ipoChecklist:au,levelUpEmployee:eo,loadState:Xr,logItem:re,nextStage:Hc,num:j,promoteStage:ou,repayBusinessLoan:Gi,resolveEvent:Bc,sanitizeName:Kc,setFloorAssign:iu,settleNow:ru,stageRank:Gg,takeBusinessLoan:Gc,upgradeFacility:nu,vipRank:zi,withdrawFromCompany:Xc,won:U},Symbol.toStringTag,{value:"Module"})),{won:I,int:R,num:nv,SECTORS:ee,SECTOR_IDS:cu,STRATEGIES:es,EMPLOYEES:uu,EMPLOYEE_IDS:du,FACILITIES:hu,FACILITY_IDS:fu,STAGE_LABEL:Wt,stageRank:sv,empCount:Gn,facilityTotal:_n,facilityCost:pu,employeeCost:mu,employeeLevelCost:_u,foundCost:no,foundDiscount:gu,gradeFromScore:vu,bizLoanLimit:iv,nextStage:rv,ipoChecklist:ov,MAX_FLOORS:gn,DEPARTMENTS:Os,DEPARTMENT_IDS:so,floorExpandCost:Ms,deptFloor:io}=tv,av="yaV8N60yIiUggaWNpNF2VhkCwxb2",V=document.getElementById("app");let _=null,he="dashboard",yu=!1,nt=!1,se="cash",oe={name:"",sector:"fintech",strategy:"stable",slogan:""},Ki=!1,Ls=null,Ds=null,ut=0;lv();async function lv(){if(!$g){Ia("Firebase 설정이 비어 있습니다.");return}uv();let t=null;try{t=await Fg()}catch{}if(!t){Hg({message:"STONK Home에서 로그인 후 이용해 주세요. 같은 계정의 자산이 그대로 연결됩니다."}),dv();return}try{yu=t.uid===av||String(t.email||"").toLowerCase()==="tomem@naver.com",_=await Xr(t.uid),Se(),cv()}catch(e){console.error("[company] 로드 실패:",e),Ia("회사 데이터를 불러오지 못했습니다: "+(e&&e.message))}}async function bu(){if(_){try{_=await Xr(_.uid)}catch(t){console.warn(t)}Se()}}function D(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function On(t,e="ok"){const n=document.createElement("div");n.className="co-toast "+e,n.textContent=t,document.body.appendChild(n),setTimeout(()=>{n.classList.add("hide"),setTimeout(()=>n.remove(),280)},2400)}async function ge(t){if(!nt){nt=!0;try{const e=await t();e&&On(e,"ok"),await bu()}catch(e){On(e&&e.message||"오류가 발생했습니다.","err")}finally{nt=!1}}}function on(t){const e=document.getElementById(t);return e?Math.floor(Number(e.value)||0):0}function ro(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function cv(){if(_&&_.settleFeed&&_.settleFeed.applied){const t=_.settleFeed.profit;On(`실적 정산: ${t>=0?"+":""}${I(t)}`,t>=0?"ok":"warn")}}function uv(){V.innerHTML='<div class="co-center"><div class="co-spin"></div><p>STONK Company 연결 중…</p></div>'}function Ia(t){V.innerHTML=`<div class="co-center"><h2>⚠️ 오류</h2><p>${D(t)}</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로</a></div>`}function dv(){V.innerHTML='<div class="co-center"><div class="co-logo"><span class="co-mark">🏢</span><b>STONK</b> Company</div><h2>로그인이 필요합니다</h2><p class="muted">STONK Home에서 로그인 후 이용해 주세요.</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로 이동</a></div>'}function Se(){if(!_)return;_.company;const t=_.bank||{};V.className=t.vipTier==="BLACK"?"is-black":"";const e=[["dashboard","대시보드"],["company","회사정보"],["employees","직원"],["facilities","시설"],["funds","자금/Bank"],["ipo","IPO"],["logs","뉴스/로그"]];V.innerHTML=`
    <header class="co-header">
      <a class="co-brand" href="#" data-home title="STONK Company 메인"><span class="co-mark">🏢</span><b>STONK</b> Company</a>
      <div class="co-nav">
        <a href="../STONK-Home/index.html">홈</a>
        <a href="../STONK-Battle/index.html">주식시장</a>
        <a href="../STONK-Bank/index.html">은행</a>
        <a href="../STONK-Board/index.html">주식소식</a>
        ${yu?'<a href="../STONK-Admin/market-admin.html">관리자</a>':""}
      </div>
      <div class="co-user"><span class="co-nick">${D(_.nickname)}</span>${t.vipTier&&t.vipTier!=="NORMAL"?`<span class="co-vip v-${t.vipTier}">${wu(t.vipTier)}</span>`:""}</div>
    </header>
    <nav class="co-tabs">${e.map(([n,s])=>`<button class="co-tab ${he===n?"active":""}" data-tab="${n}">${s}</button>`).join("")}</nav>
    <main class="co-main">${fv()}</main>
    <footer class="co-footer">STONK Company는 게임머니 기반 경영 시스템입니다. 실제 회사 설립·투자·주식과 무관합니다.</footer>`,Vv()}const hv={NORMAL:"일반",SILVER:"실버",GOLD:"골드",PLATINUM:"플래티넘",BLACK:"블랙"};function wu(t){return hv[t]||"일반"}function fv(){return!_.company&&he!=="dashboard"&&he!=="company"&&(he="dashboard"),he==="company"?Lv():he==="employees"?Dv():he==="facilities"?xv():he==="funds"?$v():he==="ipo"?Fv():he==="logs"?Bv():mv()}function Yi(){const t=_.event;return t?`<div class="co-event"><span>📰</span><div><b>오늘의 금융 이벤트 · ${D(t.title)}</b><small>Bank 이벤트가 회사 가치·사업대출에 소폭 반영됩니다. (게임머니)</small></div></div>`:""}function pv(t){const e=Math.min(5,1+Math.floor(_n(t)/2)+sv(t.stage)),n=(_.bank||{}).vipTier==="BLACK";return`<div class="co-hq tier-${e} ${n?"black":""}">
    <div class="hq-sky"></div>
    <div class="hq-building">${"🏢".repeat(Math.min(3,1+Math.floor(_n(t)/4)))}</div>
    <div class="hq-meta"><b>${D(t.name)}</b><span>${ee[t.sector].icon} ${ee[t.sector].label} · ${Wt[t.stage]}</span>
      <small>직원 ${Gn(t)}명 · 시설 Lv.${_n(t)} · 브랜드 ${R(t.brandScore)}</small></div>
  </div>`}function vn(t,e,n){return`<div class="co-gauge"><div class="cg-head"><span>${t}</span><b>${R(e)}%</b></div><div class="cg-bar ${n||""}"><span style="width:${Math.max(0,Math.min(100,R(e)))}%"></span></div></div>`}function P(t,e,n){return`<div class="co-row"><span>${t}</span><b class="${n||""}">${e}</b></div>`}function mv(){const t=_.company,e=_.bank||{};if(!t){const o=no(e),a=gu(e);return`${Yi()}
      <div class="co-card hero">
        <h2>아직 설립한 회사가 없습니다.</h2>
        <p class="muted">내 회사를 세우고, 키우고, 상장시키는 <b>STONK 타이쿤</b>을 시작하세요. 모든 금액은 게임머니입니다.</p>
        <div class="co-row"><span>설립 비용</span><b>${a>0?`<s class="muted">${I(Zs)}</s> ${I(o)} <small class="ok">${Math.round(a*100)}% 할인</small>`:I(o)}</b></div>
        <div class="co-row"><span>보유 현금</span><b>${I(_.cash)}</b></div>
        <button class="co-btn primary big" data-tab="company">회사 설립하러 가기</button>
        <p class="co-note">현금이 부족하면 자금/Bank 탭에서 <b>사업대출</b>을 받거나 <b>STONK Card</b>로 결제할 수 있습니다.</p>
      </div>
      <div class="co-grid">${cu.slice(0,6).map(l=>gv(l)).join("")}</div>`}const n=t.ipoReadiness,s=rv(t,e),i=e.businessLoan||{},r=R(i.principal)+R(i.interest);return Ki?Ov(t,e):`${Yi()}
    <div class="co-grid">
      <div class="co-card span2 office-card">
        <h3>라이브 오피스 <span class="co-tag">${ee[t.sector].icon} ${ee[t.sector].label} · ${Wt[t.stage]}</span>
          <button class="co-btn ghost small" data-act="photo" style="float:right">📷 스냅샷</button></h3>
        ${Cu(t,e)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${s?`<button class="co-btn gold" data-act="promote">⬆️ ${Wt[s]} 승급</button>`:""}
        </div>
      </div>
      <div class="co-card office-status">${Pv(t,e)}</div>
      <div class="co-card">
        <h3>경영 지표</h3>
        ${P("회사 가치",I(t.companyValue))}
        ${P("회사 자금",I(t.companyCash),t.companyCash<=0?"warn":"")}
        ${P("최근 순이익",(t.lastProfit>=0?"+":"")+I(t.lastProfit),t.lastProfit<0?"warn":"ok")}
        ${P("누적 매출 / 비용",I(t.totalRevenue)+" / "+I(t.totalCost))}
        ${P("성장률",(nv(t.growthRate)*100).toFixed(2)+"%")}
      </div>
      <div class="co-card">
        <h3>회사 상태</h3>
        ${vn("IPO 준비도",n,n>=70?"ok":"")}
        ${vn("브랜드 점수",t.brandScore,"blue")}
        ${vn("리스크 점수",t.riskScore,t.riskScore>60?"danger":"warn")}
      </div>
      <div class="co-card">
        <h3>Bank 연동</h3>
        ${P("신용등급",vu(e.creditScore!=null?e.creditScore:60))}
        ${P("VIP 등급",wu(e.vipTier))}
        ${P("카드",_v(e.card))}
        ${P("사업대출",r>0?I(r):"없음",r>0?"warn":"")}
        <button class="co-btn ghost small" data-tab="funds">자금/Bank 관리</button>
      </div>
      <div class="co-card span2">
        <h3>최근 경영 로그</h3>
        ${(_.logs||[]).length?`<ul class="co-loglist">${_.logs.slice(0,6).map(Ru).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
      </div>
    </div>`}function _v(t){return t=t||{},t.enabled?t.lost?"분실":t.suspended?"정지":t.overdue?"미납":"정상":"미발급"}function gv(t){const e=ee[t];return`<div class="co-card sector-mini"><div class="sm-ico">${e.icon}</div><b>${e.label}</b><small>${D(e.note)}</small></div>`}const Mn={dev:{e:"💻",cls:"dev",act:"typing",bub:"코드 작성 중"},marketer:{e:"📣",cls:"marketer",act:"presenting",bub:"신규 캠페인 준비 중"},sales:{e:"🤝",cls:"sales",act:"walking",bub:"고객 미팅 준비 중"},account:{e:"🧮",cls:"account",act:"typing",bub:"비용 정산 중"},risk:{e:"🧯",cls:"risk",act:"checking",bub:"리스크 점검 중"},researcher:{e:"🔭",cls:"researcher",act:"researching",bub:"IPO 자료 검토 중"},ops:{e:"🛠️",cls:"ops",act:"walking",bub:"사무실 순찰 중"},brand:{e:"✨",cls:"brand",act:"presenting",bub:"브랜드 지표 상승 중"}},vv={office:"🏢",server:"🖥️",lab:"🧪",marketing:"📈",accounting:"📒",security:"🔒"},yv=16;function bv(t){const e=[];for(const n of du){const s=(t.employees||{})[n]||{},i=Math.max(0,R(s.count)),r=Math.max(1,R(s.level));for(let o=0;o<i;o++)e.push({type:n,level:r})}return e}const wv={entrance:{x:3,y:5,w:24,h:26,label:"입구"},desk:{x:30,y:5,w:40,h:30,label:"책상"},server:{x:73,y:5,w:24,h:26,label:"서버실"},meeting:{x:3,y:37,w:24,h:26,label:"회의실"},corridor:{x:29,y:40,w:42,h:18,label:"복도"},lab:{x:73,y:37,w:24,h:26,label:"연구소"},accounting:{x:3,y:68,w:24,h:27,label:"회계실"},lounge:{x:29,y:62,w:42,h:33,label:"휴게"},security:{x:73,y:68,w:24,h:27,label:"보안실"}},Eu={};so.forEach(t=>Os[t].emps.forEach(e=>{Eu[e]=t}));function Ev(t,e,n){return io(t,e)===n}function Iv(t){let e=2166136261;t=String(t);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e3/1e3}function Cv(t,e){const n=e.businessLoan?R(e.businessLoan.principal)+R(e.businessLoan.interest):0;return nt?"settle":t.riskScore>60?"risk":t.ipoReadiness>=70&&t.stage!=="LISTED"?"ipo":n>5e7?"loan":Gn(t)<3?"understaff":_n(t)<4?"underfac":"normal"}const Sv={settle:["이번 실적 정리 중","매출 데이터 확인 중"],risk:["보안 점검이 필요합니다","리스크 보고서 작성 중"],ipo:["상장 자료 검토 중","IR 자료 준비 중"],loan:["이자 부담을 확인 중","상환 계획 검토 중"],understaff:["인력이 부족합니다","채용이 필요합니다"],underfac:["시설 업그레이드가 필요","서버 공간이 부족합니다"],normal:null};function Tv(t,e){const n=Sv[e];return n?n[(t._i||0)%n.length]:(Mn[t.type]||Mn.dev).bub}function Iu(t,e){e=e||{};const n=Mn[t.type]||Mn.dev,s=e.pos?`left:${e.pos.x}%;top:${e.pos.y}%;`:"";return`<div class="emp emp-${n.cls} act-${n.act}${e.arrive?" emp-arrive":""}${e.sit?" sitting":""}" style="${s}--d:${e.i%8*.4}s" data-emp-detail="${t.type}" role="button" tabindex="0" aria-label="${D(n.cls)} 직원 상세">
    <span class="emp-arm la"></span><span class="emp-arm ra"></span>
    <span class="emp-head"></span><span class="emp-body"></span>
    <span class="emp-tag">${n.e}</span>${t.level>1?`<i class="emp-lv">${t.level}</i>`:""}
    ${e.bubble?`<span class="emp-bubble">${D(e.bubble)}</span>`:""}
  </div>`}function an(t,e,n,s,i,r){const o=Ds&&Ds.type===n;return`<div class="fgroup ${s>0?"lv"+Math.min(4,R(s)):"locked"} ${o?"building":""}" style="left:${t}%;top:${e}%" data-fac-detail="${n}" role="button" tabindex="0" aria-label="${D(r)} 상세">
    ${i}<span class="fg-lv">${s>0?"Lv."+s:"🔒"}</span>${o?'<span class="fg-build">공사중</span>':""}</div>`}function Cu(t,e){const n=(e||{}).vipTier==="BLACK",s=bv(t),i=s.length,r=typeof window<"u"&&window.innerWidth<=760,o=r?10:yv,a=s.slice(0,o),l=i-a.length;a.forEach((v,A)=>{v._i=A});const c=Cv(t,e),d=c==="settle"||t.ipoReadiness>=70&&t.stage!=="LISTED",u=v=>R(((t.facilities||{})[v]||{}).level);let h=null,p=r?0:3;const g=(v,A,me,Ce)=>{let Ue=!1;Ls&&Ls.type===v.type&&h!==v.type&&(Ue=!0,h=v.type);const ai=p>0&&v._i<4?(p--,Tv(v,c)):null;return Iu(v,{pos:{x:A,y:me},i:v._i,bubble:ai,arrive:Ue,sit:Ce})},b=Math.max(1,R(t.floors));ut>=b&&(ut=0);const E=v=>Ev(t,v,ut),$=v=>E(Eu[v.type]||"desk"),de=a.filter(v=>(v.type==="dev"||v.type==="account")&&$(v)),ve=a.filter(v=>(v.type==="sales"||v.type==="ops")&&$(v)),pe=a.filter(v=>(v.type==="marketer"||v.type==="brand")&&$(v)),Kn=a.filter(v=>v.type==="researcher"&&$(v)),Jt=a.filter(v=>v.type==="risk"&&$(v)),Yn=a.filter($).length;let Xt="",Et="";if(E("desk")){const v=u("office"),A=Math.max(de.length,v*2+2,3),me=r?2:3,Ce=r?4:6;for(let Ue=0;Ue<Math.min(A,Ce);Ue++){const ai=Ue%me,xu=Math.floor(Ue/me),ho=30+ai*13,fo=8+xu*13,Qn=de[Ue];Xt+=`<div class="furn desk ${Qn?"busy":""}" style="left:${ho}%;top:${fo}%" data-fac-detail="office" role="button" tabindex="0" aria-label="사무실(책상) 상세"><span class="dk-mon ${Qn?"on":""}"></span><span class="dk-top"></span><span class="dk-chair"></span></div>`,Qn&&(Et+=g(Qn,ho+2,fo+7,!0))}}let Zt="";if(E("server")){const v=u("server"),A=v>0?Math.min(3,v):1;let me="";for(let Ce=0;Ce<A;Ce++)me+=`<span class="rack ${v>0?"":"off"}"><i></i><i></i><i></i></span>`;Zt=an(75,7,"server",v,`<div class="racks ${["fintech","game","security"].includes(t.sector)?"hot":""}">${me}</div>`,"서버실")}let ii="",ao="";if(E("marketing")){const v=t.ipoReadiness>=60;ii=an(4,39,"marketing",u("marketing"),`<div class="whiteboard ${v?"ipo":""}"><span class="wb-line"></span><span class="wb-line s"></span>${v?'<span class="wb-graph"></span>':""}</div><div class="mtable"></div>`,"회의실/마케팅"),ao=pe.map((A,me)=>g(A,6+me%3*6,51+Math.floor(me/3)*6,!1)).join("")}let ri="",lo="";E("lab")&&(ri=an(74,39,"lab",u("lab"),`<div class="labtable ${["bio","robot","semicon"].includes(t.sector)?"hot":""}"><span class="flask"></span><span class="bulb ${u("lab")>1?"on":""}"></span></div>`,"연구소"),lo=Kn.map((v,A)=>g(v,75+A%2*7,51+Math.floor(A/2)*6,!1)).join(""));const co=E("accounting")?an(4,70,"accounting",u("accounting"),'<div class="cabinet"><i></i><i></i><i></i></div><div class="safe"><span></span></div>',"회계실"):"";let oi="",uo="";E("security")&&(oi=an(75,70,"security",u("security"),`<div class="secpanel ${t.riskScore>60?"alert":""}"><span class="sp-shield"></span><span class="sp-led"></span></div>`,"보안실"),uo=Jt.map((v,A)=>g(v,75+A%2*7,82+Math.floor(A/2)*5,!1)).join(""));const Pu=ve.map((v,A)=>g(v,31+A%4*9+Math.round(Iv(t.companyId+"w"+A)*4),44+A%2*7,!1)).join(""),Ou=`<div class="furn door" style="left:3%;top:9%"></div>
    <span class="prop" style="left:5%;top:30%">🪴</span><span class="prop" style="left:67%;top:34%">🪴</span>
    <span class="prop" style="left:34%;top:65%">☕</span><div class="furn sofa" style="left:41%;top:67%"></div><span class="prop" style="left:58%;top:65%">📦</span>`,Mu=Object.entries(wv).map(([v,A])=>`<div class="zone zone-${v}" data-zone="${v}" style="left:${A.x}%;top:${A.y}%;width:${A.w}%;height:${A.h}%"></div>`).join(""),Lu=`<div class="floor-bar">
    <div class="floor-tabs">${Array.from({length:b},(v,A)=>{const me=so.filter(Ce=>io(t,Ce)===A).map(Ce=>Os[Ce].icon).join("");return`<button class="floor-tab ${A===ut?"on":""}" data-floor="${A}" title="${A+1}층"><b>${A+1}F</b><span>${me||"·"}</span></button>`}).reverse().join("")}</div>
    <div class="floor-acts">
      <button class="co-btn ghost small" data-act="floorAssign">🧭 팀 배치</button>
      <button class="co-btn small ${b>=gn?"":"gold"}" data-act="floorExpand" ${b>=gn?"disabled":""}>${b>=gn?"최고층":"🏗️ 층 확장 "+I(Ms(t))}</button>
    </div>
  </div>`,Du=Yn===0&&!Xt&&!Zt&&!ii&&!ri&&!co&&!oi;return`<div class="office stage-${t.stage} sector-${t.sector} ${n?"black":""} ${d?"collab":""} ${nt?"settling":""}" aria-label="라이브 오피스">
    ${b>1?Lu:`<div class="floor-bar"><span class="floor-hint">1개 층 · 모든 팀이 같은 층을 사용 중</span><button class="co-btn small gold" data-act="floorExpand">🏗️ 층 확장 ${I(Ms(t))}</button></div>`}
    <div class="office-stage">
      <div class="wall"></div><div class="floor"></div>
      ${Mu}
      ${Ou}
      ${Xt}${Zt}${ii}${ri}${co}${oi}
      ${Et}${ao}${lo}${uo}${Pu}
      ${d&&E("marketing")?'<div class="collab-ring" style="left:11%;top:46%"></div>':""}
      ${i===0?'<div class="office-empty">🪑 텅 빈 사무실 — <b>직원을 고용해 회사를 움직여 보세요</b></div>':Du?`<div class="office-empty">${ut+1}층은 비어 있습니다 — <b>팀 배치</b>에서 팀을 옮겨 보세요</div>`:""}
      <div class="floor-badge">${ut+1}F / 총 ${b}층</div>
    </div>
    ${l>0?`<div class="office-more">+${l}명 근무 중</div>`:""}
    <div class="office-tag">클릭해서 직원/시설 상세 · 층 탭으로 이동 · 게임머니 타이쿤</div>
  </div>`}function Ve(){var t;(t=document.getElementById("officeDetail"))==null||t.remove(),document.querySelectorAll(".hl").forEach(e=>e.classList.remove("hl"))}function Su(t){document.querySelectorAll(".hl").forEach(e=>e.classList.remove("hl")),document.querySelectorAll(t).forEach(e=>e.classList.add("hl"))}function oo(t,e){Ve();const n=document.createElement("div");n.id="officeDetail",n.className="office-detail-dim",n.innerHTML=`<div class="office-detail"><div class="od-top"><b>${D(e)}</b><button class="co-btn ghost small" data-od-x>닫기</button></div>${t}</div>`,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&Ve()}),n.querySelector("[data-od-x]").onclick=Ve,n.querySelectorAll("[data-od-hire]").forEach(s=>s.addEventListener("click",()=>{Ve(),ku(s.dataset.odHire)})),n.querySelectorAll("[data-od-level]").forEach(s=>s.addEventListener("click",()=>{Ve(),ge(()=>eo(_.uid,s.dataset.odLevel,_,se==="card"?"card":"company"))})),n.querySelectorAll("[data-od-fac]").forEach(s=>s.addEventListener("click",()=>{Ve(),Au(s.dataset.odFac)})),n.querySelectorAll("[data-assign]").forEach(s=>s.addEventListener("click",async()=>{const[i,r]=s.dataset.assign.split(":");await ge(()=>iu(_.uid,i,Number(r),_)),Tu()})),n.querySelectorAll("[data-act-inline]").forEach(s=>s.addEventListener("click",()=>{Ve(),Nu(s.dataset.actInline)})),n.querySelectorAll("[data-tab]").forEach(s=>s.addEventListener("click",()=>{Ve(),he=s.dataset.tab,Se()}))}function Tu(){const t=_.company;if(!t)return;const e=Math.max(1,R(t.floors)),n=so.map(s=>{const i=io(t,s),r=Array.from({length:e},(o,a)=>`<button class="fa-btn ${a===i?"on":""}" data-assign="${s}:${a}">${a+1}F</button>`).join("");return`<div class="fa-row"><span class="fa-dept">${Os[s].icon} ${D(Os[s].label)}</span><div class="fa-btns">${r}</div></div>`}).join("");oo(`<p class="co-note">팀(부서)을 원하는 층에 배치하세요. 처음엔 모두 1층을 공유하지만, 확장할수록 팀을 분산해 사무실을 넓힐 수 있습니다.</p>
    ${n}
    ${e<gn?`<div class="co-btnrow"><button class="co-btn small gold" data-act-inline="floorExpand">🏗️ 층 확장 ${I(Ms(t))}</button></div>`:`<p class="co-note">최대 ${gn}층까지 확장했습니다.</p>`}`,`팀 배치 · 총 ${e}층`)}const kv={dev:"서버실을 업그레이드하면 개발 효율이 더 좋아집니다.",marketer:"마케팅룸을 함께 강화하면 브랜드가 빠르게 오릅니다.",sales:"영업 인원이 많을수록 매출이 늘어납니다.",account:"회계실과 함께 강화하면 비용이 더 절감됩니다.",risk:"보안실을 함께 강화하면 리스크가 더 낮아집니다.",researcher:"연구소 레벨이 높으면 IPO 준비도가 더 빨리 오릅니다.",ops:"운영 매니저는 시설 효율을 높여 줍니다.",brand:"엔터테인먼트 업종에서 특히 효과가 큽니다."};function Av(t){const e=_.company;if(!e)return;const n=(e.employees||{})[t]||{count:0,level:1},s=uu[t],i=Mn[t],r=R(n.count),o=Math.max(1,R(n.level));Su(`[data-emp-detail="${t}"]`),oo(`<div class="od-head"><span class="od-prev emp-${i.cls}">${Iu({type:t,level:o},{i:0})}</span><div><b>${s.label} Lv.${o}</b><small>현재 업무: ${i.bub}</small></div></div>
    ${P("효과",s.effect)}
    ${P("회사 내 인원 / 평균 레벨",r+"명 · Lv."+o)}
    ${P("고용비 / 레벨업비",I(mu(e,t))+" / "+I(_u(e,t)))}
    <p class="co-note">추천: ${D(kv[t]||"레벨업하면 효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-hire="${t}">고용</button><button class="co-btn small" data-od-level="${t}" ${r>0?"":"disabled"}>레벨업</button><button class="co-btn ghost small" data-tab="employees">직원 탭</button></div>`,"직원 상세")}const Rv={office:"직원 수용량과 책상이 늘어납니다.",server:"서버 랙이 추가되고 매출 보정이 커집니다.",lab:"연구 장비가 추가되고 성장/IPO 보너스가 커집니다.",marketing:"광고판이 추가되고 브랜드 상승이 커집니다.",accounting:"비용 절감 효과가 커집니다.",security:"리스크 감소 효과가 커집니다."};function Nv(t){const e=_.company;if(!e)return;const n=hu[t],s=R(((e.facilities||{})[t]||{}).level);Su(`[data-fac-detail="${t}"]`),oo(`<div class="od-head"><span class="od-ico">${vv[t]}</span><div><b>${n.label} Lv.${s}</b><small>${n.effect}</small></div></div>
    <div class="od-gauge"><span style="width:${Math.min(100,s*20)}%"></span></div>
    ${s===0?'<p class="co-note">아직 미설치(잠김) 시설입니다. 업그레이드로 설치하세요.</p>':P("가동률",Math.min(100,40+s*15)+"%")}
    ${P("다음 레벨 / 비용","Lv."+(s+1)+" · "+I(pu(e,t)))}
    <p class="co-note">다음 레벨: ${D(Rv[t]||"효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-fac="${t}">업그레이드</button><button class="co-btn ghost small" data-tab="facilities">시설 탭</button></div>`,"시설 상세")}function ku(t){Ls={type:t},ge(()=>Zc(_.uid,t,_,se==="card"?"card":"company")).finally(()=>{setTimeout(()=>{Ls=null},1300)})}function Au(t){Ds={type:t},ge(()=>nu(_.uid,t,_,se==="card"?"card":"company")).finally(()=>{setTimeout(()=>{Ds=null},1100)})}function Pv(t,e){const n=_.event||{},s=Gn(t),i=_n(t),r=t.companyCash>0&&s>0?"활발":s>0?"유지":"정지",o=Math.min(100,Math.round(i/(fu.length*3)*100)),a=e.businessLoan?R(e.businessLoan.principal)+R(e.businessLoan.interest):0,l=[];return s===0?l.push({t:"직원을 고용해 회사를 가동하세요.",tab:"employees"}):s<3&&l.push({t:"직원을 1명 더 고용하면 정산 효율이 좋아집니다.",tab:"employees"}),t.companyCash<=0&&l.push({t:"회사 자금이 부족합니다. 출자/사업대출을 검토하세요.",tab:"funds"}),t.riskScore>60&&l.push({t:"리스크가 높습니다. 보안실 또는 리스크 매니저를 강화하세요.",tab:"facilities"}),t.brandScore<30&&l.push({t:"브랜드가 낮습니다. 마케팅룸/브랜드 매니저를 강화하세요.",tab:"facilities"}),i<4&&l.push({t:"사무실을 업그레이드하면 더 많은 직원을 수용할 수 있습니다.",tab:"facilities"}),t.ipoReadiness>=70&&t.stage!=="LISTED"&&l.push({t:"IPO 준비도 70%↑ — 상장 심사 준비를 시작하세요.",tab:"ipo"}),a>0&&l.push({t:"사업대출 상환 계획을 확인하세요.",tab:"funds"}),n.type==="lowrate"&&l.push({t:"저금리 이벤트 중 — 사업대출 조건이 유리합니다.",tab:"funds"}),(n.type==="highrate"||n.type==="caution")&&l.push({t:"금융 경계 분위기 — 고액 대출/카드 사용에 주의하세요.",tab:"funds"}),l.length||l.push({t:"직원들이 안정적으로 업무 중입니다.",tab:""}),`<h3>오늘의 사무실</h3>
    <div class="co-row"><span>분위기</span><b>${{활발:"활기찬 사무실 🌟",유지:"차분한 사무실 🙂",정지:"조용한 사무실 😴"}[r]}</b></div>
    <div class="co-row"><span>직원 활동도</span><b>${s}명 · ${r}</b></div>
    ${vn("시설 가동률",o,o>=60?"ok":"")}
    <div class="co-row"><span>리스크 경보</span><b class="${t.riskScore>60?"warn":"ok"}">${t.riskScore>60?"주의":"안정"}</b></div>
    <div class="co-row"><span>Bank 이벤트</span><b>${D(n.title||"—")}</b></div>
    <div class="co-row"><span>사업대출 부담</span><b class="${a>0?"warn":""}">${a>0?I(a):"없음"}</b></div>
    <div class="office-recs"><b>다음 추천 행동</b><ul>${l.slice(0,3).map(d=>`<li ${d.tab?`data-tab="${d.tab}" role="button" tabindex="0"`:""}>${D(d.t)}${d.tab?' <i class="rec-go">→</i>':""}</li>`).join("")}</ul></div>`}function Ov(t,e){return`<div class="photo-wrap">
    <div class="co-card office-card photo">
      <div class="photo-head"><div><b>${D(t.name)}</b><small>${ee[t.sector].icon} ${ee[t.sector].label} · ${Wt[t.stage]}</small></div>
        <button class="co-btn ghost small" data-act="photo">닫기</button></div>
      ${Cu(t,e)}
      <div class="photo-stats">
        <div><span>회사 가치</span><b>${I(t.companyValue)}</b></div>
        <div><span>IPO 준비도</span><b>${R(t.ipoReadiness)}%</b></div>
        <div><span>직원</span><b>${Gn(t)}명</b></div>
        <div><span>단계</span><b>${Wt[t.stage]}</b></div>
      </div>
      <p class="co-note">내 회사 스냅샷 · 게임머니 기반 타이쿤입니다.</p>
    </div>
  </div>`}function Mv(t){try{const e=document.createElement("div");e.className="co-settle-dim";const n=t.profit>=0;e.innerHTML=`<div class="co-settle ${n?"good":"bad"}">
      <h3>${n?"📈 실적 정산 완료":"📉 실적 정산 · 손실 주의"}</h3>
      <div class="cs-rows">
        <div><span>매출</span><b class="ok">+${I(t.revenue)}</b></div>
        <div><span>비용</span><b class="warn">−${I(t.cost)}</b></div>
        <div class="cs-profit"><span>순이익</span><b class="cs-count ${n?"ok":"warn"}" data-to="${t.profit}">${n?"+":"−"}${I(0)}</b></div>
        <div><span>회사가치</span><b class="ok">+${I(t.valueGain)}</b></div>
      </div>
      <button class="co-btn primary" data-settle-close>확인</button>
    </div>`,document.body.appendChild(e);const s=()=>e.remove();e.querySelector("[data-settle-close]").onclick=s,e.addEventListener("click",a=>{a.target===e&&s()});const i=e.querySelector(".cs-count"),r=Math.abs(R(t.profit)),o=t.profit>=0?"+":"−";if(ro()||r===0)i.textContent=o+I(r);else{const a=performance.now(),l=700,c=d=>{const u=Math.min(1,(d-a)/l);i.textContent=o+I(Math.round(r*u)),u<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}setTimeout(()=>{document.body.contains(e)&&s()},6e3)}catch{}}function Lv(){const t=_.company,e=_.bank||{};if(t)return`<div class="co-card">
      <h3>회사 정보</h3>
      ${pv(t)}
      ${P("회사명",D(t.name))}
      ${P("슬로건",D(t.slogan)||"—")}
      ${P("업종",ee[t.sector].icon+" "+ee[t.sector].label)}
      ${P("전략",es[t.strategy].label)}
      ${P("단계 / 레벨",Wt[t.stage]+" · Lv."+t.level)}
      ${P("설립일",new Date(R(t.createdAt)).toLocaleDateString("ko-KR"))}
      <p class="co-note">유저당 회사 1개를 운영합니다(v1.0). 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>
    </div>`;const n=no(e),s=gu(e);return`${Yi()}
    <div class="co-card">
      <h3>회사 설립 <span class="co-tag">게임머니 타이쿤</span></h3>
      <label class="co-field"><span>회사명</span><input id="foName" maxlength="24" placeholder="예: STONK테크" value="${D(oe.name)}" /></label>
      <label class="co-field"><span>슬로건(선택)</span><input id="foSlogan" maxlength="40" placeholder="예: 세상을 바꾸는 기술" value="${D(oe.slogan)}" /></label>
      <div class="co-sub">업종 선택</div>
      <div class="co-pick">${cu.map(i=>`<button class="co-opt ${oe.sector===i?"on":""}" data-found-sector="${i}">${ee[i].icon} ${ee[i].label}</button>`).join("")}</div>
      <p class="co-note">${ee[oe.sector].icon} <b>${ee[oe.sector].label}</b> · ${D(ee[oe.sector].note)}</p>
      <div class="co-sub">시작 전략</div>
      <div class="co-pick">${Object.keys(es).map(i=>`<button class="co-opt ${oe.strategy===i?"on":""}" data-found-strategy="${i}">${es[i].label}</button>`).join("")}</div>
      <p class="co-note">${D(es[oe.strategy].note)}</p>
      <div class="co-sub">결제수단</div>
      <div class="co-pick">
        <button class="co-opt ${se==="cash"?"on":""}" data-pm="cash">현금</button>
        <button class="co-opt ${se==="card"?"on":""}" data-pm="card">STONK Card</button>
        <button class="co-opt ${se==="loan"?"on":""}" data-pm="loan">사업대출</button>
      </div>
      <div class="co-row"><span>설립 비용</span><b>${s>0?`<s class="muted">${I(Zs)}</s> ${I(n)} <small class="ok">${Math.round(s*100)}% 할인</small>`:I(n)}</b></div>
      <div class="co-row"><span>보유 현금</span><b>${I(_.cash)}</b></div>
      <button class="co-btn primary big" data-act="found">${ee[oe.sector].label} 회사 설립</button>
      <p class="co-note">결제 성공 후에만 회사가 생성됩니다. 카드/사업대출 결제 실패 시 회사는 생성되지 않습니다. 모든 금액은 게임머니입니다.</p>
    </div>`}function Dv(){const t=_.company;return t?`<div class="co-card"><h3>직원 결제수단 <span class="co-tag">${Gn(t)}명</span></h3>
    <div class="co-pick"><button class="co-opt ${se==="company"||se!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${se==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${I(t.companyCash)} · 카드는 Bank 청구 예정으로 누적됩니다.</p></div>
    <div class="co-grid">${du.map(e=>{const n=uu[e],s=(t.employees||{})[e]||{count:0,level:1};return`<div class="co-card emp">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label}</b><small>${n.effect}</small></div></div>
        ${P("보유 / 레벨",R(s.count)+"명 · Lv."+Math.max(1,R(s.level)))}
        ${P("고용비",I(mu(t,e)))}
        <div class="co-btnrow">
          <button class="co-btn primary small" data-emp-hire="${e}">고용</button>
          <button class="co-btn small" data-emp-level="${e}" ${R(s.count)>0?"":"disabled"}>레벨업 ${I(_u(t,e))}</button>
          <button class="co-btn ghost small" data-emp-fire="${e}" ${R(s.count)>0?"":"disabled"}>해고</button>
        </div>
      </div>`}).join("")}</div>`:si()}function xv(){const t=_.company;return t?`<div class="co-card"><h3>시설 결제수단</h3>
    <div class="co-pick"><button class="co-opt ${se!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${se==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${I(t.companyCash)}. 시설 레벨이 오르면 본사가 커집니다.</p></div>
    <div class="co-grid">${fu.map(e=>{const n=hu[e],s=R(((t.facilities||{})[e]||{}).level);return`<div class="co-card fac">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label} <small class="co-tag">Lv.${s}</small></b><small>${n.effect}</small></div></div>
        ${P("업그레이드 비용",I(pu(t,e)))}
        <button class="co-btn primary small" data-fac-up="${e}">Lv.${s+1} 업그레이드</button>
      </div>`}).join("")}</div>`:si()}function $v(){const t=_.company,e=_.bank||{},n=e.businessLoan||{},s=R(n.principal)+R(n.interest),i=iv(e);return t?`<div class="co-grid">
    <div class="co-card">
      <h3>자금 이동</h3>
      ${P("개인 현금",I(_.cash))}
      ${P("회사 자금",I(t.companyCash),t.companyCash<=0?"warn":"")}
      <div class="co-amount"><input id="moveAmt" type="number" inputmode="numeric" placeholder="금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn primary" data-act="invest">출자(개인→회사)</button>
        <button class="co-btn" data-act="withdraw">인출(회사→개인)</button>
      </div>
      <p class="co-note">인출 시 브랜드 점수가 소폭 감소하고 리스크가 소폭 증가합니다.</p>
    </div>
    <div class="co-card">
      <h3>Bank 사업대출 <span class="co-tag">개인 대출과 별개</span></h3>
      ${P("신용등급 / 한도",vu(e.creditScore!=null?e.creditScore:60)+" · "+I(i))}
      ${P("사업대출 잔액",I(s),s>0?"warn":"")}
      ${P("원금 / 이자",I(n.principal)+" / "+I(n.interest))}
      <div class="co-amount"><input id="bizAmt" type="number" inputmode="numeric" placeholder="대출/상환 금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn danger" data-act="bizLoan" ${i<=0?"disabled":""}>사업대출 받기</button>
        <button class="co-btn" data-act="bizRepayCompany" ${s>0?"":"disabled"}>회사자금 상환</button>
        <button class="co-btn ghost" data-act="bizRepayCash" ${s>0?"":"disabled"}>개인현금 상환</button>
      </div>
      <p class="co-note">사업대출금은 <b>회사 자금</b>으로 입금됩니다. 이자 하루 ${(Kr*100).toFixed(1)}%. 연체 시 리스크가 오릅니다.</p>
    </div>
  </div>`:si()}function Fv(){const t=_.company,e=_.bank||{};if(!t)return si();const n=ov(t,e),s=n.every(r=>r.ok),i=t.ipoReadiness;return`<div class="co-card ipo-card ${e.vipTier==="BLACK"?"black":""}">
      <h3>IPO 준비 ${t.stage==="LISTED"?'<span class="co-tag ok">상장 후보</span>':""}</h3>
      ${vn("IPO 준비도",i,i>=100?"ok":"")}
      <ul class="co-check">${n.map(r=>`<li class="${r.ok?"on":""}">${r.ok?"✅":"⬜"} ${D(r.label)}</li>`).join("")}</ul>
      ${t.stage==="LISTED"?'<p class="co-note ok">상장 후보 등록 완료. Battle 종목 편입 준비 완료 · Board/Wiki 연동 데이터 생성 완료. 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>':`<button class="co-btn gold big" data-act="ipo" ${i>=100&&s?"":"disabled"}>${i>=100?"상장 심사 신청":`준비도 ${i}% (100% 필요)`}</button>
           <p class="co-note">IPO 준비도는 회사 가치·브랜드·순이익·시설·직원에서 오르고 리스크·사업대출 연체로 내려갑니다.</p>`}
    </div>`}const Uv={found:"🏗️",settle:"📊",invest:"💰",withdraw:"🏧",hire:"👤",fire:"👋",levelup:"⬆️",facility:"🏢",floor:"🏢",loan:"📝",stage:"🎉",ipo:"🏆"};function Ru(t){return`<li><span class="lg-ico">${Uv[t.type]||"•"}</span><div class="lg-mid"><b>${D(t.title)}</b><small>${D(t.memo||"")}</small></div>${t.amount?`<b class="lg-amt ${t.amount>=0?"plus":"minus"}">${t.amount>=0?"+":"−"}${I(Math.abs(t.amount))}</b>`:""}</li>`}function Bv(){return`<div class="co-card"><h3>경영 로그 / 뉴스</h3>
    ${(_.logs||[]).length?`<ul class="co-loglist">${_.logs.map(Ru).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
    <p class="co-note">회사 뉴스는 Board 연동용(rooms/MAIN/companyNews)으로도 기록됩니다.</p></div>`}function si(){return'<div class="co-card"><p class="co-empty">먼저 회사를 설립하세요.</p><button class="co-btn primary" data-tab="company">회사 설립</button></div>'}function Vv(){var t;(t=V.querySelector("[data-home]"))==null||t.addEventListener("click",e=>{e.preventDefault(),he="dashboard",window.scrollTo(0,0),Se()}),V.querySelectorAll("[data-tab]").forEach(e=>e.addEventListener("click",()=>{he=e.dataset.tab,Se()})),V.querySelectorAll("[data-found-sector]").forEach(e=>e.addEventListener("click",()=>{oe.sector=e.dataset.foundSector,Qi(),Se()})),V.querySelectorAll("[data-found-strategy]").forEach(e=>e.addEventListener("click",()=>{oe.strategy=e.dataset.foundStrategy,Qi(),Se()})),V.querySelectorAll("[data-pm]").forEach(e=>e.addEventListener("click",()=>{se=e.dataset.pm,Se()})),V.querySelectorAll("[data-emp-hire]").forEach(e=>e.addEventListener("click",()=>ku(e.dataset.empHire))),V.querySelectorAll("[data-emp-fire]").forEach(e=>e.addEventListener("click",()=>ge(()=>eu(_.uid,e.dataset.empFire,_)))),V.querySelectorAll("[data-emp-level]").forEach(e=>e.addEventListener("click",()=>ge(()=>eo(_.uid,e.dataset.empLevel,_,se==="card"?"card":"company")))),V.querySelectorAll("[data-fac-up]").forEach(e=>e.addEventListener("click",()=>Au(e.dataset.facUp))),V.querySelectorAll("[data-emp-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),Av(e.dataset.empDetail)})),V.querySelectorAll("[data-fac-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),Nv(e.dataset.facDetail)})),V.querySelectorAll("[data-zone]").forEach(e=>e.addEventListener("click",()=>{const n=e.classList.contains("focus");V.querySelectorAll(".zone.focus").forEach(s=>s.classList.remove("focus")),n||e.classList.add("focus")})),V.querySelectorAll("[data-floor]").forEach(e=>e.addEventListener("click",()=>{ut=Math.max(0,parseInt(e.dataset.floor,10)||0),Se()})),V.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>Nu(e.dataset.act)))}function Qi(){const t=document.getElementById("foName"),e=document.getElementById("foSlogan");t&&(oe.name=t.value),e&&(oe.slogan=e.value)}async function Wv(){if(nt)return;nt=!0;const t=document.querySelector(".office");t&&t.classList.add("settling");let e=null;try{e=ti(_.company,Date.now(),_.event)}catch{}try{await ru(_.uid,_),await bu(),e&&e.applied?(Mv(e),Hv((e.profit>=0?"+":"−")+I(Math.abs(e.profit)),e.profit>=0)):On("정산 완료","ok")}catch(n){On(n&&n.message||"정산할 내용이 없습니다.","err")}finally{nt=!1}}function Hv(t,e){try{const n=document.querySelector(".office-stage");if(!n||ro())return;[{l:42,t:28},{l:60,t:18}].forEach((s,i)=>{const r=document.createElement("div");r.className="office-float "+(e?"up":"down"),r.textContent=i===0?t:e?"📈":"📉",r.style.left=s.l+"%",r.style.top=s.t+"%",r.style.animationDelay=i*.12+"s",n.appendChild(r),setTimeout(()=>r.remove(),1500)})}catch{}}function Nu(t){if(t==="found"){Qi();const e=no(_.bank);return ln(e,"설립 심사 중...",()=>Qc(_.uid,{...oe,payMethod:se},_))}if(t==="photo"){Ki=!Ki,window.scrollTo(0,0),Se();return}if(t==="floorExpand"){const e=Ms(_.company);return ln(e,"층 공사 중...",()=>su(_.uid,_,se==="card"?"card":"company"))}if(t==="floorAssign")return Tu();if(t==="settle")return Wv();if(t==="promote")return ge(()=>ou(_.uid,_));if(t==="invest"){const e=on("moveAmt");return ln(e,"금고 이체 처리 중...",()=>Jc(_.uid,e,_))}if(t==="withdraw"){const e=on("moveAmt");return ln(e,"인출 처리 중...",()=>Xc(_.uid,e,_))}if(t==="bizLoan"){const e=on("bizAmt");return ln(e,"대출 심사 중...",()=>Gc(_.uid,e,_))}if(t==="bizRepayCompany")return ge(()=>Gi(_.uid,on("bizAmt"),"company",_));if(t==="bizRepayCash")return ge(()=>Gi(_.uid,on("bizAmt"),"cash",_));if(t==="ipo")return ge(()=>lu(_.uid,_))}function jv(t){return t=R(t),t>=1e7||_&&_.cash>0&&t>=_.cash*.3}function ln(t,e,n){if(!jv(t))return ge(n);const s=document.createElement("div");s.className="co-modal-dim",s.innerHTML=`<div class="co-modal"><h3>거래 확인</h3><p class="co-modal-amt">${I(t)}</p><p class="co-note">STONK 가상 게임머니 거래입니다.</p>
    <div class="co-modal-stage" hidden><span class="co-spin sm"></span> <span>${D(e)}</span></div>
    <div class="co-modal-btns"><button class="co-btn" data-mc="cancel">취소</button><button class="co-btn primary" data-mc="ok">확인</button></div></div>`,document.body.appendChild(s);const i=()=>s.remove();s.querySelector('[data-mc="cancel"]').onclick=i,s.addEventListener("click",r=>{r.target===s&&i()}),s.querySelector('[data-mc="ok"]').onclick=()=>{s.querySelector(".co-modal-btns").hidden=!0,s.querySelector(".co-modal-stage").hidden=!1,setTimeout(()=>{i(),ge(n)},ro()?0:600)}}

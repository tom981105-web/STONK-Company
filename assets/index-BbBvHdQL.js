(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Qr={};/**
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
 */const aa={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw Vt(e)},Vt=function(t){return new Error("Firebase Database ("+aa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const la=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Bi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[d],n[u],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(la(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Cu;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ca=function(t){const e=la(t);return Bi.encodeByteArray(e,!0)},ns=function(t){return ca(t).replace(/\./g,"")},ss=function(t){try{return Bi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Su(t){return ua(void 0,t)}function ua(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Tu(n)||(t[n]=ua(t[n],e[n]));return t}function Tu(t){return t!=="__proto__"}/**
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
 */function ku(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Au=()=>ku().__FIREBASE_DEFAULTS__,Ru=()=>{if(typeof process>"u"||typeof Qr>"u")return;const t=Qr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ss(t[1]);return e&&JSON.parse(e)},Wi=()=>{try{return Au()||Ru()||Nu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},da=t=>{var e,n;return(n=(e=Wi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pu=t=>{const e=da(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ha=()=>{var t;return(t=Wi())===null||t===void 0?void 0:t.config},fa=t=>{var e;return(e=Wi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ou(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ns(JSON.stringify(n)),ns(JSON.stringify(o)),""].join(".")}/**
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
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Mu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Du(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xu(){return aa.NODE_ADMIN===!0}function $u(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Uu="FirebaseError";class st extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Uu,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Bu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new st(i,a,s)}}function Bu(t,e){return t.replace(Wu,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Wu=/\{\$([^}]+)}/g;/**
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
 */function pn(t){return JSON.parse(t)}function V(t){return JSON.stringify(t)}/**
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
 */const ma=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=pn(ss(r[0])||""),n=pn(ss(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Vu=function(t){const e=ma(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Hu=function(t){const e=ma(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function we(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ct(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function is(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Jr(r)&&Jr(o)){if(!rs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Jr(t){return t!==null&&typeof t=="object"}/**
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
 */function jt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class ju{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qu(t,e){const n=new zu(t,e);return n.subscribe.bind(n)}class zu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Gu(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Js),i.error===void 0&&(i.error=Js),i.complete===void 0&&(i.complete=Js);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Js(){}function Rs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ku=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ns=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function X(t){return t&&t._delegate?t._delegate:t}class ut{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rt="[DEFAULT]";/**
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
 */class Yu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ht;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ju(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Qu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qu(t){return t===rt?void 0:t}function Ju(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const Zu={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ed=A.INFO,td={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},nd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=td[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=ed,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const sd=(t,e)=>e.some(n=>t instanceof n);let Xr,Zr;function id(){return Xr||(Xr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rd(){return Zr||(Zr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _a=new WeakMap,fi=new WeakMap,ga=new WeakMap,Xs=new WeakMap,ji=new WeakMap;function od(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qe(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_a.set(n,t)}).catch(()=>{}),ji.set(e,t),e}function ad(t){if(fi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let pi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ga.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ld(t){pi=t(pi)}function cd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Zs(this),e,...n);return ga.set(s,e.sort?e.sort():[e]),qe(s)}:rd().includes(t)?function(...e){return t.apply(Zs(this),e),qe(_a.get(this))}:function(...e){return qe(t.apply(Zs(this),e))}}function ud(t){return typeof t=="function"?cd(t):(t instanceof IDBTransaction&&ad(t),sd(t,id())?new Proxy(t,pi):t)}function qe(t){if(t instanceof IDBRequest)return od(t);if(Xs.has(t))return Xs.get(t);const e=ud(t);return e!==t&&(Xs.set(t,e),ji.set(e,t)),e}const Zs=t=>ji.get(t);function dd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qe(o.result),l.oldVersion,l.newVersion,qe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hd=["get","getKey","getAll","getAllKeys","count"],fd=["put","add","delete","clear"],ei=new Map;function eo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ei.get(e))return ei.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=fd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||hd.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ei.set(e,r),r}ld(t=>({...t,get:(e,n,s)=>eo(e,n)||t.get(e,n,s),has:(e,n)=>!!eo(e,n)||t.has(e,n)}));/**
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
 */class pd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(md(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function md(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mi="@firebase/app",to="0.10.13";/**
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
 */const Oe=new Hi("@firebase/app"),_d="@firebase/app-compat",gd="@firebase/analytics-compat",vd="@firebase/analytics",yd="@firebase/app-check-compat",bd="@firebase/app-check",wd="@firebase/auth",Ed="@firebase/auth-compat",Id="@firebase/database",Cd="@firebase/data-connect",Sd="@firebase/database-compat",Td="@firebase/functions",kd="@firebase/functions-compat",Ad="@firebase/installations",Rd="@firebase/installations-compat",Nd="@firebase/messaging",Pd="@firebase/messaging-compat",Od="@firebase/performance",Md="@firebase/performance-compat",Ld="@firebase/remote-config",Dd="@firebase/remote-config-compat",xd="@firebase/storage",$d="@firebase/storage-compat",Fd="@firebase/firestore",Ud="@firebase/vertexai-preview",Bd="@firebase/firestore-compat",Wd="firebase",Vd="10.14.1";/**
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
 */const _i="[DEFAULT]",Hd={[mi]:"fire-core",[_d]:"fire-core-compat",[vd]:"fire-analytics",[gd]:"fire-analytics-compat",[bd]:"fire-app-check",[yd]:"fire-app-check-compat",[wd]:"fire-auth",[Ed]:"fire-auth-compat",[Id]:"fire-rtdb",[Cd]:"fire-data-connect",[Sd]:"fire-rtdb-compat",[Td]:"fire-fn",[kd]:"fire-fn-compat",[Ad]:"fire-iid",[Rd]:"fire-iid-compat",[Nd]:"fire-fcm",[Pd]:"fire-fcm-compat",[Od]:"fire-perf",[Md]:"fire-perf-compat",[Ld]:"fire-rc",[Dd]:"fire-rc-compat",[xd]:"fire-gcs",[$d]:"fire-gcs-compat",[Fd]:"fire-fst",[Bd]:"fire-fst-compat",[Ud]:"fire-vertex","fire-js":"fire-js",[Wd]:"fire-js-all"};/**
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
 */const os=new Map,jd=new Map,gi=new Map;function no(t,e){try{t.container.addComponent(e)}catch(n){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ot(t){const e=t.name;if(gi.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const n of os.values())no(n,t);for(const n of jd.values())no(n,t);return!0}function qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function We(t){return t.settings!==void 0}/**
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
 */const qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ze=new An("app","Firebase",qd);/**
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
 */class zd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=Vd;function va(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_i,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ze.create("bad-app-name",{appName:String(i)});if(n||(n=ha()),!n)throw ze.create("no-options");const r=os.get(i);if(r){if(rs(n,r.options)&&rs(s,r.config))return r;throw ze.create("duplicate-app",{appName:i})}const o=new Xu(i);for(const l of gi.values())o.addComponent(l);const a=new zd(n,s,o);return os.set(i,a),a}function ya(t=_i){const e=os.get(t);if(!e&&t===_i&&ha())return va();if(!e)throw ze.create("no-app",{appName:t});return e}function Ge(t,e,n){var s;let i=(s=Hd[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oe.warn(a.join(" "));return}Ot(new ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gd="firebase-heartbeat-database",Kd=1,mn="firebase-heartbeat-store";let ti=null;function ba(){return ti||(ti=dd(Gd,Kd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mn)}catch(n){console.warn(n)}}}}).catch(t=>{throw ze.create("idb-open",{originalErrorMessage:t.message})})),ti}async function Yd(t){try{const n=(await ba()).transaction(mn),s=await n.objectStore(mn).get(wa(t));return await n.done,s}catch(e){if(e instanceof st)Oe.warn(e.message);else{const n=ze.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(n.message)}}}async function so(t,e){try{const s=(await ba()).transaction(mn,"readwrite");await s.objectStore(mn).put(e,wa(t)),await s.done}catch(n){if(n instanceof st)Oe.warn(n.message);else{const s=ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oe.warn(s.message)}}}function wa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qd=1024,Jd=30*24*60*60*1e3;class Xd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=io();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Jd}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Oe.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=io(),{heartbeatsToSend:s,unsentEntries:i}=Zd(this._heartbeatsCache.heartbeats),r=ns(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Oe.warn(n),""}}}function io(){return new Date().toISOString().substring(0,10)}function Zd(t,e=Qd){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ro(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ro(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $u()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return so(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ro(t){return ns(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function th(t){Ot(new ut("platform-logger",e=>new pd(e),"PRIVATE")),Ot(new ut("heartbeat",e=>new Xd(e),"PRIVATE")),Ge(mi,to,t),Ge(mi,to,"esm2017"),Ge("fire-js","")}th("");var nh="firebase",sh="10.14.1";/**
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
 */Ge(nh,sh,"app");function zi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ea(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ih=Ea,Ia=new An("auth","Firebase",Ea());/**
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
 */const as=new Hi("@firebase/auth");function rh(t,...e){as.logLevel<=A.WARN&&as.warn(`Auth (${qt}): ${t}`,...e)}function Jn(t,...e){as.logLevel<=A.ERROR&&as.error(`Auth (${qt}): ${t}`,...e)}/**
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
 */function Me(t,...e){throw Gi(t,...e)}function Ee(t,...e){return Gi(t,...e)}function Ca(t,e,n){const s=Object.assign(Object.assign({},ih()),{[e]:n});return new An("auth","Firebase",s).create(e,{appName:t.name})}function lt(t){return Ca(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ia.create(t,...e)}function y(t,e,...n){if(!t)throw Gi(e,...n)}function ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jn(e),new Error(e)}function Le(t,e){t||ke(e)}/**
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
 */function vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oh(){return oo()==="http:"||oo()==="https:"}function oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ah(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oh()||Lu()||"connection"in navigator)?navigator.onLine:!0}function lh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Le(n>e,"Short delay should be less than long delay!"),this.isMobile=Vi()||pa()}get(){return ah()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ki(t,e){Le(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sa{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ch={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uh=new Rn(3e4,6e4);function Yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zt(t,e,n,s,i={}){return Ta(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=jt(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Mu()||(c.referrerPolicy="no-referrer"),Sa.fetch()(ka(t,t.config.apiHost,n,a),c)})}async function Ta(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ch),e);try{const i=new hh(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zn(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ca(t,d,c);Me(t,d)}}catch(i){if(i instanceof st)throw i;Me(t,"network-request-failed",{message:String(i)})}}async function dh(t,e,n,s,i={}){const r=await zt(t,e,n,s,i);return"mfaPendingCredential"in r&&Me(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ka(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ki(t.config,i):`${t.config.apiScheme}://${i}`}class hh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ee(this.auth,"network-request-failed")),uh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ee(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function fh(t,e){return zt(t,"POST","/v1/accounts:delete",e)}async function Aa(t,e){return zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function on(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ph(t,e=!1){const n=X(t),s=await n.getIdToken(e),i=Qi(s);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:on(ni(i.auth_time)),issuedAtTime:on(ni(i.iat)),expirationTime:on(ni(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ni(t){return Number(t)*1e3}function Qi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Jn("JWT malformed, contained fewer than 3 sections"),null;try{const i=ss(n);return i?JSON.parse(i):(Jn("Failed to decode base64 JWT payload"),null)}catch(i){return Jn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ao(t){const e=Qi(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof st&&mh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ls(t){var e;const n=t.auth,s=await t.getIdToken(),i=await _n(t,Aa(n,{idToken:s}));y(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ra(r.providerUserInfo):[],a=vh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yi(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function gh(t){const e=X(t);await ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vh(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Ra(t){return t.map(e=>{var{providerId:n}=e,s=zi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yh(t,e){const n=await Ta(t,{},async()=>{const s=jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=ka(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sa.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bh(t,e){return zt(t,"POST","/v2/accounts:revokeToken",Yi(t,e))}/**
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
 */class At{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){y(e.length!==0,"internal-error");const n=ao(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await yh(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new At;return s&&(y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new At,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function xe(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ae{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ph(this,e)}reload(){return gh(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ls(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await _n(this,fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,d;const u=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,K=(c=n.createdAt)!==null&&c!==void 0?c:void 0,fe=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_e,emailVerified:pe,isAnonymous:Vn,providerData:vt,stsTokenManager:Hn}=n;y(_e&&Hn,e,"internal-error");const jn=At.fromJSON(this.name,Hn);y(typeof _e=="string",e,"internal-error"),xe(u,e.name),xe(h,e.name),y(typeof pe=="boolean",e,"internal-error"),y(typeof Vn=="boolean",e,"internal-error"),xe(f,e.name),xe(_,e.name),xe(w,e.name),xe(I,e.name),xe(K,e.name),xe(fe,e.name);const yt=new Ae({uid:_e,auth:e,email:h,emailVerified:pe,displayName:u,isAnonymous:Vn,photoURL:_,phoneNumber:f,tenantId:w,stsTokenManager:jn,createdAt:K,lastLoginAt:fe});return vt&&Array.isArray(vt)&&(yt.providerData=vt.map(bt=>Object.assign({},bt))),I&&(yt._redirectEventId=I),yt}static async _fromIdTokenResponse(e,n,s=!1){const i=new At;i.updateFromServerResponse(n);const r=new Ae({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ls(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];y(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Ra(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new At;a.updateFromIdToken(s);const l=new Ae({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new yi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const lo=new Map;function Re(t){Le(t instanceof Function,"Expected a class definition");let e=lo.get(t);return e?(Le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lo.set(t,e),e)}/**
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
 */class Na{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Na.type="NONE";const co=Na;/**
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
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class Rt{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Xn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Xn("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rt(Re(co),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Re(co);const o=Xn(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Ae._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Rt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Rt(r,e,s))}}/**
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
 */function uo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(La(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xa(e))return"Blackberry";if($a(e))return"Webos";if(Oa(e))return"Safari";if((e.includes("chrome/")||Ma(e))&&!e.includes("edge/"))return"Chrome";if(Da(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pa(t=ne()){return/firefox\//i.test(t)}function Oa(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ma(t=ne()){return/crios\//i.test(t)}function La(t=ne()){return/iemobile/i.test(t)}function Da(t=ne()){return/android/i.test(t)}function xa(t=ne()){return/blackberry/i.test(t)}function $a(t=ne()){return/webos/i.test(t)}function Ji(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wh(t=ne()){var e;return Ji(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Eh(){return Du()&&document.documentMode===10}function Fa(t=ne()){return Ji(t)||Da(t)||$a(t)||xa(t)||/windows phone/i.test(t)||La(t)}/**
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
 */function Ua(t,e=[]){let n;switch(t){case"Browser":n=uo(ne());break;case"Worker":n=`${uo(ne())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qt}/${s}`}/**
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
 */class Ih{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ch(t,e={}){return zt(t,"GET","/v2/passwordPolicy",Yi(t,e))}/**
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
 */const Sh=6;class Th{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Sh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class kh{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new Ih(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ia,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Re(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Rt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Aa(this,{idToken:e}),s=await Ae._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ls(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(lt(this));const n=e?X(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ch(this),n=new Th(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Re(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await Rt.create(this,[Re(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ua(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return X(t)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=qu(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ah(t){Zi=t}function Rh(t){return Zi.loadJS(t)}function Nh(){return Zi.gapiScript}function Ph(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Oh(t,e){const n=qi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(rs(r,e??{}))return i;Me(i,"already-initialized")}return n.initialize({options:e})}function Mh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Re);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Lh(t,e,n){const s=Xi(t);y(s._canInitEmulator,s,"emulator-config-failed"),y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ba(e),{host:o,port:a}=Dh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),xh()}function Ba(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dh(t){const e=Ba(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fo(o)}}}function fo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,n){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}/**
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
 */async function Nt(t,e){return dh(t,"POST","/v1/accounts:signInWithIdp",Yi(t,e))}/**
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
 */const $h="http://localhost";class dt extends Wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=zi(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new dt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Nt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nt(e,n)}buildRequest(){const e={requestUri:$h,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jt(n)}return e}}/**
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
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nn extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $e extends Nn{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
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
 */class Fe extends Nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Fe.credential(n,s)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
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
 */class Ue extends Nn{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
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
 */class Be extends Nn{constructor(){super("twitter.com")}static credential(e,n){return dt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Be.credential(n,s)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ae._fromIdTokenResponse(e,s,i),o=po(s);return new Mt({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=po(s);return new Mt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cs extends st{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new cs(e,n,s,i)}}function Ha(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(t,r,e,s):r})}async function Fh(t,e,n=!1){const s=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",s)}/**
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
 */async function Uh(t,e,n=!1){const{auth:s}=t;if(We(s.app))return Promise.reject(lt(s));const i="reauthenticate";try{const r=await _n(t,Ha(s,i,e,t),n);y(r.idToken,s,"internal-error");const o=Qi(r.idToken);y(o,s,"internal-error");const{sub:a}=o;return y(t.uid===a,s,"user-mismatch"),Mt._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Me(s,"user-mismatch"),r}}/**
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
 */async function Bh(t,e,n=!1){if(We(t.app))return Promise.reject(lt(t));const s="signIn",i=await Ha(t,s,e),r=await Mt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Wh(t,e,n,s){return X(t).onIdTokenChanged(e,n,s)}function Vh(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function Hh(t,e,n,s){return X(t).onAuthStateChanged(e,n,s)}const us="__sak";/**
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
 */class ja{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jh=1e3,qh=10;class qa extends ja{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Eh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qh):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qa.type="LOCAL";const zh=qa;/**
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
 */class za extends ja{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}za.type="SESSION";const Ga=za;/**
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
 */function Gh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ps(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Gh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
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
 */function er(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=er("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ie(){return window}function Yh(t){Ie().location.href=t}/**
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
 */function Ka(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Qh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xh(){return Ka()?self:null}/**
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
 */const Ya="firebaseLocalStorageDb",Zh=1,ds="firebaseLocalStorage",Qa="fbase_key";class Pn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Os(t,e){return t.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function ef(){const t=indexedDB.deleteDatabase(Ya);return new Pn(t).toPromise()}function bi(){const t=indexedDB.open(Ya,Zh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ds,{keyPath:Qa})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ds)?e(s):(s.close(),await ef(),e(await bi()))})})}async function mo(t,e,n){const s=Os(t,!0).put({[Qa]:e,value:n});return new Pn(s).toPromise()}async function tf(t,e){const n=Os(t,!1).get(e),s=await new Pn(n).toPromise();return s===void 0?null:s.value}function _o(t,e){const n=Os(t,!0).delete(e);return new Pn(n).toPromise()}const nf=800,sf=3;class Ja{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ka()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(Xh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Qh(),!this.activeServiceWorker)return;this.sender=new Kh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bi();return await mo(e,us,"1"),await _o(e,us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tf(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Os(i,!1).getAll();return new Pn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ja.type="LOCAL";const rf=Ja;new Rn(3e4,6e4);/**
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
 */function of(t,e){return e?Re(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tr extends Wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function af(t){return Bh(t.auth,new tr(t),t.bypassAuthState)}function lf(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Uh(n,new tr(t),t.bypassAuthState)}async function cf(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),Fh(n,new tr(t),t.bypassAuthState)}/**
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
 */class Xa{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return af;case"linkViaPopup":case"linkViaRedirect":return cf;case"reauthViaPopup":case"reauthViaRedirect":return lf;default:Me(this.auth,"internal-error")}}resolve(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uf=new Rn(2e3,1e4);class Tt extends Xa{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Le(this.filter.length===1,"Popup operations only handle one event");const e=er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uf.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const df="pendingRedirect",Zn=new Map;class hf extends Xa{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const s=await ff(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ff(t,e){const n=_f(e),s=mf(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function pf(t,e){Zn.set(t._key(),e)}function mf(t){return Re(t._redirectPersistence)}function _f(t){return Xn(df,t.config.apiKey,t.name)}async function gf(t,e,n=!1){if(We(t.app))return Promise.reject(lt(t));const s=Xi(t),i=of(s,e),o=await new hf(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const vf=10*60*1e3;class yf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Za(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ee(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vf&&this.cachedEventUids.clear(),this.cachedEventUids.has(go(e))}saveEventToCache(e){this.cachedEventUids.add(go(e)),this.lastProcessedEventTime=Date.now()}}function go(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Za({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(t);default:return!1}}/**
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
 */async function wf(t,e={}){return zt(t,"GET","/v1/projects",e)}/**
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
 */const Ef=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,If=/^https?/;async function Cf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wf(t);for(const n of e)try{if(Sf(n))return}catch{}Me(t,"unauthorized-domain")}function Sf(t){const e=vi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!If.test(n))return!1;if(Ef.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Tf=new Rn(3e4,6e4);function vo(){const t=Ie().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kf(t){return new Promise((e,n)=>{var s,i,r;function o(){vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vo(),n(Ee(t,"network-request-failed"))},timeout:Tf.get()})}if(!((i=(s=Ie().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ie().gapi)===null||r===void 0)&&r.load)o();else{const a=Ph("iframefcb");return Ie()[a]=()=>{gapi.load?o():n(Ee(t,"network-request-failed"))},Rh(`${Nh()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw es=null,e})}let es=null;function Af(t){return es=es||kf(t),es}/**
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
 */const Rf=new Rn(5e3,15e3),Nf="__/auth/iframe",Pf="emulator/auth/iframe",Of={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lf(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ki(e,Pf):`https://${t.config.authDomain}/${Nf}`,s={apiKey:e.apiKey,appName:t.name,v:qt},i=Mf.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${jt(s).slice(1)}`}async function Df(t){const e=await Af(t),n=Ie().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Lf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Of,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ee(t,"network-request-failed"),a=Ie().setTimeout(()=>{r(o)},Rf.get());function l(){Ie().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const xf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$f=500,Ff=600,Uf="_blank",Bf="http://localhost";class yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wf(t,e,n,s=$f,i=Ff){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xf),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ne().toLowerCase();n&&(a=Ma(c)?Uf:n),Pa(c)&&(e=e||Bf,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(wh(c)&&a!=="_self")return Vf(e||"",a),new yo(null);const u=window.open(e||"",a,d);y(u,t,"popup-blocked");try{u.focus()}catch{}return new yo(u)}function Vf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Hf="__/auth/handler",jf="emulator/auth/handler",qf=encodeURIComponent("fac");async function bo(t,e,n,s,i,r){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:qt,eventId:i};if(e instanceof Va){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Nn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${qf}=${encodeURIComponent(l)}`:"";return`${zf(t)}?${jt(a).slice(1)}${c}`}function zf({config:t}){return t.emulator?Ki(t,jf):`https://${t.authDomain}/${Hf}`}/**
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
 */const si="webStorageSupport";class Gf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ga,this._completeRedirectFn=gf,this._overrideRedirectResult=pf}async _openPopup(e,n,s,i){var r;Le((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bo(e,n,s,vi(),i);return Wf(e,o,er())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await bo(e,n,s,vi(),i);return Yh(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Le(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Df(e),s=new yf(e);return n.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(si,{type:si},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[si];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fa()||Oa()||Ji()}}const Kf=Gf;var wo="@firebase/auth",Eo="1.7.9";/**
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
 */class Yf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jf(t){Ot(new ut("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ua(t)},c=new kh(s,i,r,l);return Mh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ot(new ut("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(s=>new Yf(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(wo,Eo,Qf(t)),Ge(wo,Eo,"esm2017")}/**
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
 */const Xf=5*60,Zf=fa("authIdTokenMaxAge")||Xf;let Io=null;const ep=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Zf)return;const i=n==null?void 0:n.token;Io!==i&&(Io=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tp(t=ya()){const e=qi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Oh(t,{popupRedirectResolver:Kf,persistence:[rf,zh,Ga]}),s=fa("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=ep(r.toString());Vh(n,o,()=>o(n.currentUser)),Wh(n,a=>o(a))}}const i=da("auth");return i&&Lh(n,`http://${i}`),n}function np(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ah({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ee("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",np().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jf("Browser");var Co={};const So="@firebase/database",To="1.0.8";/**
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
 */let el="";function sp(t){el=t}/**
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
 */class ip{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tl=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ip(e)}}catch{}return new rp},at=tl("localStorage"),op=tl("sessionStorage");/**
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
 */const Pt=new Hi("@firebase/database"),nl=function(){let t=1;return function(){return t++}}(),sl=function(t){const e=Ku(t),n=new ju;n.update(e);const s=n.digest();return Bi.encodeByteArray(s)},On=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=On.apply(null,s):typeof s=="object"?e+=V(s):e+=s,e+=" "}return e};let an=null,ko=!0;const ap=function(t,e){m(!0,"Can't turn on custom loggers persistently."),Pt.logLevel=A.VERBOSE,an=Pt.log.bind(Pt)},Y=function(...t){if(ko===!0&&(ko=!1,an===null&&op.get("logging_enabled")===!0&&ap()),an){const e=On.apply(null,t);an(e)}},Mn=function(t){return function(...e){Y(t,...e)}},wi=function(...t){const e="FIREBASE INTERNAL ERROR: "+On(...t);Pt.error(e)},De=function(...t){const e=`FIREBASE FATAL ERROR: ${On(...t)}`;throw Pt.error(e),new Error(e)},te=function(...t){const e="FIREBASE WARNING: "+On(...t);Pt.warn(e)},lp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},nr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ht="[MIN_NAME]",Xe="[MAX_NAME]",mt=function(t,e){if(t===e)return 0;if(t===ht||e===Xe)return-1;if(e===ht||t===Xe)return 1;{const n=Ao(t),s=Ao(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},up=function(t,e){return t===e?0:t<e?-1:1},Jt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+V(e))},sr=function(t){if(typeof t!="object"||t===null)return V(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=V(e[s]),n+=":",n+=sr(t[e[s]]);return n+="}",n},il=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function J(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const rl=function(t){m(!nr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},dp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const pp=new RegExp("^-?(0*)\\d{1,10}$"),mp=-2147483648,_p=2147483647,Ao=function(t){if(pp.test(t)){const e=Number(t);if(e>=mp&&e<=_p)return e}return null},Gt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw te("Exception was thrown by user callback.",n),e},Math.floor(0))}},gp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ln=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class vp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class ts{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ts.OWNER="owner";/**
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
 */const ir="5",ol="v",al="s",ll="r",cl="f",ul=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dl="ls",hl="p",Ei="ac",fl="websocket",pl="long_polling";/**
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
 */class ml{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=at.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&at.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _l(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let s;if(e===fl)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pl)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bp(t)&&(n.ns=t.namespace);const i=[];return J(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class wp{constructor(){this.counters_={}}incrementCounter(e,n=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Su(this.counters_)}}/**
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
 */const ii={},ri={};function rr(t){const e=t.toString();return ii[e]||(ii[e]=new wp),ii[e]}function Ep(t,e){const n=t.toString();return ri[n]||(ri[n]=e()),ri[n]}/**
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
 */class Ip{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ro="start",Cp="close",Sp="pLPCommand",Tp="pRTLPCB",gl="id",vl="pw",yl="ser",kp="cb",Ap="seg",Rp="ts",Np="d",Pp="dframe",bl=1870,wl=30,Op=bl-wl,Mp=25e3,Lp=3e4;class kt{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mn(e),this.stats_=rr(n),this.urlFn=l=>(this.appCheckToken&&(l[Ei]=this.appCheckToken),_l(n,pl,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ip(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lp)),cp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new or((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ro)this.id=a,this.password=l;else if(o===Cp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ro]="t",s[yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ol]=ir,this.transportSessionId&&(s[al]=this.transportSessionId),this.lastSessionId&&(s[dl]=this.lastSessionId),this.applicationId&&(s[hl]=this.applicationId),this.appCheckToken&&(s[Ei]=this.appCheckToken),typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(s[ll]=cl);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){kt.forceAllow_=!0}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){return kt.forceAllow_?!0:!kt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dp()&&!hp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=V(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ca(n),i=il(s,Op);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Pp]="t",s[gl]=e,s[vl]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=V(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class or{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nl(),window[Sp+this.uniqueCallbackIdentifier]=e,window[Tp+this.uniqueCallbackIdentifier]=n,this.myIFrame=or.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gl]=this.myID,e[vl]=this.myPW,e[yl]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wl+s.length<=bl;){const o=this.pendingSegs.shift();s=s+"&"+Ap+i+"="+o.seg+"&"+Rp+i+"="+o.ts+"&"+Np+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Mp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Dp=16384,xp=45e3;let hs=null;typeof MozWebSocket<"u"?hs=MozWebSocket:typeof WebSocket<"u"&&(hs=WebSocket);class ge{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mn(this.connId),this.stats_=rr(n),this.connURL=ge.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ol]=ir,typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(o[ll]=cl),n&&(o[al]=n),s&&(o[dl]=s),i&&(o[Ei]=i),r&&(o[hl]=r),_l(e,fl,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,at.set("previous_websocket_failure",!0);try{let s;xu(),this.mySock=new hs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hs!==null&&!ge.forceDisallow_}static previouslyFailed(){return at.isInMemoryStorage||at.get("previous_websocket_failure")===!0}markConnectionHealthy(){at.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=pn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=V(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=il(n,Dp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ge.responsesRequiredToBeHealthy=2;ge.healthyTimeout=3e4;/**
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
 */class gn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[kt,ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ge&&ge.isAvailable();let s=n&&!ge.previouslyFailed();if(e.webSocketOnly&&(n||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ge];else{const i=this.transports_=[];for(const r of gn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);gn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gn.globalTransportInitialized_=!1;/**
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
 */const $p=6e4,Fp=5e3,Up=10*1024,Bp=100*1024,oi="t",No="d",Wp="s",Po="r",Vp="e",Oo="o",Mo="a",Lo="n",Do="p",Hp="h";class jp{constructor(e,n,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mn("c:"+this.id+":"),this.transportManager_=new gn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Up?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oi in e){const n=e[oi];n===Mo?this.upgradeIfSecondaryHealthy_():n===Po?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Oo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Jt("t",e),s=Jt("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Do,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Jt("t",e),s=Jt("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Jt(oi,e);if(No in e){const s=e[No];if(n===Hp){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wp?this.onConnectionShutdown_(s):n===Po?this.onReset_(s):n===Vp?wi("Server Error: "+s):n===Oo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ir!==s&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($p))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Do,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(at.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class El{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Il{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class fs extends Il{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new fs}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xo=32,$o=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function k(){return new N("")}function C(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ze(t){return t.pieces_.length-t.pieceNum_}function M(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function ar(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function qp(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function vn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cl(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function $(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof N)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new N(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function ee(t,e){const n=C(t),s=C(e);if(n===null)return e;if(n===s)return ee(M(t),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zp(t,e){const n=vn(t,0),s=vn(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=mt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function lr(t,e){if(Ze(t)!==Ze(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function me(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ze(t)>Ze(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Gp{constructor(e,n){this.errorPrefix_=n,this.parts_=vn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ns(this.parts_[s]);Sl(this)}}function Kp(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ns(e),Sl(t)}function Yp(t){const e=t.parts_.pop();t.byteLength_-=Ns(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sl(t){if(t.byteLength_>$o)throw new Error(t.errorPrefix_+"has a key path longer than "+$o+" bytes ("+t.byteLength_+").");if(t.parts_.length>xo)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xo+") or object contains a cycle "+ot(t))}function ot(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class cr extends Il{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new cr}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xt=1e3,Qp=60*5*1e3,Fo=30*1e3,Jp=1.3,Xp=3e4,Zp="server_kill",Uo=3;class Pe extends El{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pe.nextPersistentConnectionId_++,this.log_=Mn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xt,this.maxReconnectDelay_=Qp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(V(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ht,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Pe.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&we(e,"w")){const s=ct(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Hu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Fo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Vu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wi("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xp&&(this.reconnectDelay_=Xt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new jp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{te(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Zp)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&te(u),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hi(this.interruptReasons_)&&(this.reconnectDelay_=Xt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>sr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new N(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Y("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uo&&(this.reconnectDelay_=Fo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Y("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+el.replace(/\./g,"-")]=1,Vi()?e["framework.cordova"]=1:pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fs.getInstance().currentlyOnline();return hi(this.interruptReasons_)&&e}}Pe.nextPersistentConnectionId_=0;Pe.nextConnectionId_=0;/**
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
 */class Ms{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new S(ht,e),i=new S(ht,n);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
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
 */let Gn;class Tl extends Ms{static get __EMPTY_NODE(){return Gn}static set __EMPTY_NODE(e){Gn=e}compare(e,n){return mt(e.name,n.name)}isDefinedOn(e){throw Vt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return S.MIN}maxPost(){return new S(Xe,Gn)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,Gn)}toString(){return".key"}}const Ke=new Tl;/**
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
 */class Kn{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class q{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??q.RED,this.left=i??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,n,s,i,r){return new q(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}q.RED=!0;q.BLACK=!1;class em{copy(e,n,s,i,r){return this}insert(e,n,s){return new q(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,n=re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,q.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,q.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Kn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Kn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Kn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new em;/**
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
 */function tm(t,e){return mt(t.name,e.name)}function ur(t,e){return mt(t,e)}/**
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
 */let Ii;function nm(t){Ii=t}const kl=function(t){return typeof t=="number"?"number:"+rl(t):"string:"+t},Al=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else m(t===Ii||t.isEmpty(),"priority of unexpected type.");m(t===Ii||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bo;class j{constructor(e,n=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Al(this.priorityNode_)}static set __childrenNodeConstructor(e){Bo=e}static get __childrenNodeConstructor(){return Bo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:C(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=C(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kl(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=rl(this.value_):e+=this.value_,this.lazyHash_=sl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=j.VALUE_TYPE_ORDER.indexOf(n),r=j.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Rl,Nl;function sm(t){Rl=t}function im(t){Nl=t}class rm extends Ms{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?mt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Xe,new j("[PRIORITY-POST]",Nl))}makePost(e,n){const s=Rl(e);return new S(n,new j("[PRIORITY-POST]",s))}toString(){return".priority"}}const D=new rm;/**
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
 */const om=Math.log(2);class am{constructor(e){const n=r=>parseInt(Math.log(r)/om,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ps=function(t,e,n,s){t.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=t[l],h=n?n(u):u,new q(h,u.node,q.BLACK,null,null);{const f=parseInt(d/2,10)+l,_=i(l,f),w=i(f+1,c);return u=t[f],h=n?n(u):u,new q(h,u.node,q.BLACK,_,w)}},r=function(l){let c=null,d=null,u=t.length;const h=function(_,w){const I=u-_,K=u;u-=_;const fe=i(I+1,K),_e=t[I],pe=n?n(_e):_e;f(new q(pe,_e.node,w,null,fe))},f=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));w?h(I,q.BLACK):(h(I,q.BLACK),h(I,q.RED))}return d},o=new am(t.length),a=r(o);return new re(s||e,a)};/**
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
 */let ai;const Et={};class Ne{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return m(Et&&D,"ChildrenNode.ts has not been loaded"),ai=ai||new Ne({".priority":Et},{".priority":D}),ai}get(e){const n=ct(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof re?n:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ps(s,e.getCompare()):a=Et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Ne(d,c)}addToIndexes(e,n){const s=is(this.indexes_,(i,r)=>{const o=ct(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Et)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(S.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ps(a,o.getCompare())}else return Et;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new Ne(s,this.indexSet_)}removeFromIndexes(e,n){const s=is(this.indexes_,i=>{if(i===Et)return i;{const r=n.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new Ne(s,this.indexSet_)}}/**
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
 */let Zt;class v{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Al(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zt||(Zt=new v(new re(ur),null,Ne.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Zt:n}}getChild(e){const n=C(e);return n===null?this:this.getImmediateChild(n).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new S(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Zt:this.priorityNode_;return new v(i,o,r)}}updateChild(e,n){const s=C(e);if(s===null)return n;{m(C(e)!==".priority"||Ze(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(M(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(D,(o,a)=>{n[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kl(this.getPriority().val())+":"),this.forEachChild(D,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":sl(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new S(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new S(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ln?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(D),i=n.getIterator(D);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lm extends v{constructor(){super(new re(ur),v.EMPTY_NODE,Ne.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Ln=new lm;Object.defineProperties(S,{MIN:{value:new S(ht,v.EMPTY_NODE)},MAX:{value:new S(Xe,Ln)}});Tl.__EMPTY_NODE=v.EMPTY_NODE;j.__childrenNodeConstructor=v;nm(Ln);im(Ln);/**
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
 */const cm=!0;function B(t,e=null){if(t===null)return v.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new j(n,B(e))}if(!(t instanceof Array)&&cm){const n=[];let s=!1;if(J(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=B(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new S(o,l)))}}),n.length===0)return v.EMPTY_NODE;const r=ps(n,tm,o=>o.name,ur);if(s){const o=ps(n,D.getCompare());return new v(r,B(e),new Ne({".priority":o},{".priority":D}))}else return new v(r,B(e),Ne.Default)}else{let n=v.EMPTY_NODE;return J(t,(s,i)=>{if(we(t,s)&&s.substring(0,1)!=="."){const r=B(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(B(e))}}sm(B);/**
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
 */class Pl extends Ms{constructor(e){super(),this.indexPath_=e,m(!T(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?mt(e.name,n.name):r}makePost(e,n){const s=B(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(n,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Ln);return new S(Xe,e)}toString(){return vn(this.indexPath_,0).join("/")}}/**
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
 */class um extends Ms{compare(e,n){const s=e.node.compareTo(n.node);return s===0?mt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,n){const s=B(e);return new S(n,s)}toString(){return".value"}}const Ol=new um;/**
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
 */function Ml(t){return{type:"value",snapshotNode:t}}function Lt(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function yn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dm(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class dr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(yn(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Lt(n,s)):o.trackChildChange(bn(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(D,(i,r)=>{n.hasChild(i)||s.trackChildChange(yn(i,r))}),n.isLeafNode()||n.forEachChild(D,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(bn(i,r,o))}else s.trackChildChange(Lt(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class wn{constructor(e){this.indexedFilter_=new dr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wn.getStartPost_(e),this.endPost_=wn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new S(n,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=v.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return n.forEachChild(D,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class hm{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new wn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new S(n,s))||(s=v.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,f)=>u(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new S(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(d&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(bn(n,s,u)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(yn(n,u));const w=a.updateImmediateChild(n,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Lt(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return s.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(yn(c.name,c.node)),r.trackChildChange(Lt(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ht}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fm(t){return t.loadsAllData()?new dr(t.getIndex()):t.hasLimit()?new hm(t):new wn(t)}function pm(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function mm(t,e){const n=t.copy();return n.index_=e,n}function Wo(t){const e={};if(t.isDefault())return e;let n;if(t.index_===D?n="$priority":t.index_===Ol?n="$value":t.index_===Ke?n="$key":(m(t.index_ instanceof Pl,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=V(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=V(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+V(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=V(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+V(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vo(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==D&&(e.i=t.index_.toString()),e}/**
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
 */class ms extends El{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ms.getListenId_(e,s),a={};this.listens_[o]=a;const l=Wo(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),ct(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=ms.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wo(e._queryParams),s=e._path.toString(),i=new Ht;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jt(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pn(a.responseText)}catch{te("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&te("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class _m{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _s(){return{value:null,children:new Map}}function Ll(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=C(e);t.children.has(s)||t.children.set(s,_s());const i=t.children.get(s);e=M(e),Ll(i,e,n)}}function Ci(t,e,n){t.value!==null?n(e,t.value):gm(t,(s,i)=>{const r=new N(e.toString()+"/"+s);Ci(i,r,n)})}function gm(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class vm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&J(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ho=10*1e3,ym=30*1e3,bm=5*60*1e3;class wm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vm(e);const s=Ho+(ym-Ho)*Math.random();ln(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;J(e,(i,r)=>{r>0&&we(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*bm))}}/**
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
 */var ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ve||(ve={}));function fr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class gs{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ve.ACK_USER_WRITE,this.source=fr()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new gs(k(),n,this.revert)}}else return m(C(this.path)===e,"operationForChild called for unrelated child."),new gs(M(this.path),this.affectedTree,this.revert)}}/**
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
 */class En{constructor(e,n){this.source=e,this.path=n,this.type=ve.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new En(this.source,k()):new En(this.source,M(this.path))}}/**
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
 */class ft{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ve.OVERWRITE}operationForChild(e){return T(this.path)?new ft(this.source,k(),this.snap.getImmediateChild(e)):new ft(this.source,M(this.path),this.snap)}}/**
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
 */class Dt{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ve.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new ft(this.source,k(),n.value):new Dt(this.source,k(),n)}else return m(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dt(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class et{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=C(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Em{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Im(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(dm(o.childName,o.snapshotNode))}),en(t,i,"child_removed",e,s,n),en(t,i,"child_added",e,s,n),en(t,i,"child_moved",r,s,n),en(t,i,"child_changed",e,s,n),en(t,i,"value",e,s,n),i}function en(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Sm(t,a,l)),o.forEach(a=>{const l=Cm(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Cm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Sm(t,e,n){if(e.childName==null||n.childName==null)throw Vt("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ls(t,e){return{eventCache:t,serverCache:e}}function cn(t,e,n,s){return Ls(new et(e,n,s),t.serverCache)}function Dl(t,e,n,s){return Ls(t.eventCache,new et(e,n,s))}function vs(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let li;const Tm=()=>(li||(li=new re(up)),li);class O{constructor(e,n=Tm()){this.value=e,this.children=n}static fromObject(e){let n=new O(null);return J(e,(s,i)=>{n=n.set(new N(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:k(),value:this.value};if(T(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(M(e),n);return r!=null?{path:$(new N(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=C(e),s=this.children.get(n);return s!==null?s.subtree(M(e)):new O(null)}}set(e,n){if(T(e))return new O(n,this.children);{const s=C(e),r=(this.children.get(s)||new O(null)).set(M(e),n),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const n=C(e),s=this.children.get(n);if(s){const i=s.remove(M(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const n=C(e),s=this.children.get(n);return s?s.get(M(e)):null}}setTree(e,n){if(T(e))return n;{const s=C(e),r=(this.children.get(s)||new O(null)).setTree(M(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,k(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(T(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(M(e),$(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,k(),n)}foreachOnPath_(e,n,s){if(T(e))return this;{this.value&&s(n,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(M(e),$(n,i),s):new O(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_($(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class be{constructor(e){this.writeTree_=e}static empty(){return new be(new O(null))}}function un(t,e,n){if(T(e))return new be(new O(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ee(i,e);return r=r.updateChild(o,n),new be(t.writeTree_.set(i,r))}else{const i=new O(n),r=t.writeTree_.setTree(e,i);return new be(r)}}}function Si(t,e,n){let s=t;return J(n,(i,r)=>{s=un(s,$(e,i),r)}),s}function jo(t,e){if(T(e))return be.empty();{const n=t.writeTree_.setTree(e,new O(null));return new be(n)}}function Ti(t,e){return _t(t,e)!=null}function _t(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ee(n.path,e)):null}function qo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(D,(s,i)=>{e.push(new S(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function Ye(t,e){if(T(e))return t;{const n=_t(t,e);return n!=null?new be(new O(n)):new be(t.writeTree_.subtree(e))}}function ki(t){return t.writeTree_.isEmpty()}function xt(t,e){return xl(k(),t.writeTree_,e)}function xl(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=xl($(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($(t,".priority"),s)),n}}/**
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
 */function Ds(t,e){return Bl(e,t)}function km(t,e,n,s,i){m(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=un(t.visibleWrites,e,n)),t.lastWriteId=s}function Am(t,e,n,s){m(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Si(t.visibleWrites,e,n),t.lastWriteId=s}function Rm(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Nm(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Pm(a,s.path)?i=!1:me(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Om(t),!0;if(s.snap)t.visibleWrites=jo(t.visibleWrites,s.path);else{const a=s.children;J(a,l=>{t.visibleWrites=jo(t.visibleWrites,$(s.path,l))})}return!0}else return!1}function Pm(t,e){if(t.snap)return me(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&me($(t.path,n),e))return!0;return!1}function Om(t){t.visibleWrites=$l(t.allWrites,Mm,k()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Mm(t){return t.visible}function $l(t,e,n){let s=be.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)me(n,o)?(a=ee(n,o),s=un(s,a,r.snap)):me(o,n)&&(a=ee(o,n),s=un(s,k(),r.snap.getChild(a)));else if(r.children){if(me(n,o))a=ee(n,o),s=Si(s,a,r.children);else if(me(o,n))if(a=ee(o,n),T(a))s=Si(s,k(),r.children);else{const l=ct(r.children,C(a));if(l){const c=l.getChild(M(a));s=un(s,k(),c)}}}else throw Vt("WriteRecord should have .snap or .children")}}return s}function Fl(t,e,n,s,i){if(!s&&!i){const r=_t(t.visibleWrites,e);if(r!=null)return r;{const o=Ye(t.visibleWrites,e);if(ki(o))return n;if(n==null&&!Ti(o,k()))return null;{const a=n||v.EMPTY_NODE;return xt(o,a)}}}else{const r=Ye(t.visibleWrites,e);if(!i&&ki(r))return n;if(!i&&n==null&&!Ti(r,k()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(me(c.path,e)||me(e,c.path))},a=$l(t.allWrites,o,e),l=n||v.EMPTY_NODE;return xt(a,l)}}}function Lm(t,e,n){let s=v.EMPTY_NODE;const i=_t(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(D,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ye(t.visibleWrites,e);return n.forEachChild(D,(o,a)=>{const l=xt(Ye(r,new N(o)),a);s=s.updateImmediateChild(o,l)}),qo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ye(t.visibleWrites,e);return qo(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dm(t,e,n,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$(e,n);if(Ti(t.visibleWrites,r))return null;{const o=Ye(t.visibleWrites,r);return ki(o)?i.getChild(n):xt(o,i.getChild(n))}}function xm(t,e,n,s){const i=$(e,n),r=_t(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ye(t.visibleWrites,i);return xt(o,s.getNode().getImmediateChild(n))}else return null}function $m(t,e){return _t(t.visibleWrites,e)}function Fm(t,e,n,s,i,r,o){let a;const l=Ye(t.visibleWrites,e),c=_t(l,k());if(c!=null)a=c;else if(n!=null)a=xt(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&d.length<i;)u(f,s)!==0&&d.push(f),f=h.getNext();return d}else return[]}function Um(){return{visibleWrites:be.empty(),allWrites:[],lastWriteId:-1}}function ys(t,e,n,s){return Fl(t.writeTree,t.treePath,e,n,s)}function _r(t,e){return Lm(t.writeTree,t.treePath,e)}function zo(t,e,n,s){return Dm(t.writeTree,t.treePath,e,n,s)}function bs(t,e){return $m(t.writeTree,$(t.treePath,e))}function Bm(t,e,n,s,i,r){return Fm(t.writeTree,t.treePath,e,n,s,i,r)}function gr(t,e,n){return xm(t.writeTree,t.treePath,e,n)}function Ul(t,e){return Bl($(t.treePath,e),t.writeTree)}function Bl(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Wm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,bn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,yn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Lt(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,bn(s,e.snapshotNode,i.oldSnap));else throw Vt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Vm{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wl=new Vm;class vr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new et(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=Bm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Hm(t){return{filter:t}}function jm(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qm(t,e,n,s,i){const r=new Wm;let o,a;if(n.type===ve.OVERWRITE){const c=n;c.source.fromUser?o=Ai(t,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!T(c.path),o=ws(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ve.MERGE){const c=n;c.source.fromUser?o=Gm(t,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ri(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ve.ACK_USER_WRITE){const c=n;c.revert?o=Qm(t,e,c.path,s,i,r):o=Km(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ve.LISTEN_COMPLETE)o=Ym(t,e,n.path,s,r);else throw Vt("Unknown operation type: "+n.type);const l=r.getChanges();return zm(e,o,l),{viewCache:o,changes:l}}function zm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=vs(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Ml(vs(e)))}}function Vl(t,e,n,s,i,r){const o=e.eventCache;if(bs(s,n)!=null)return e;{let a,l;if(T(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),d=c instanceof v?c:v.EMPTY_NODE,u=_r(s,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ys(s,pt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(n);if(c===".priority"){m(Ze(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=zo(s,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=M(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=zo(s,n,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=gr(s,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,r):a=o.getNode()}}return cn(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function ws(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(T(n))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=d.updateFullNode(l.getNode(),f,null)}else{const f=C(n);if(!l.isCompleteForPath(n)&&Ze(n)>1)return e;const _=M(n),I=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=d.updatePriority(l.getNode(),I):c=d.updateChild(l.getNode(),f,I,_,Wl,null)}const u=Dl(e,c,l.isFullyInitialized()||T(n),d.filtersNodes()),h=new vr(i,u,r);return Vl(t,u,n,i,h,a)}function Ai(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const d=new vr(i,e,r);if(T(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=cn(e,c,!0,t.filter.filtersNodes());else{const u=C(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=cn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=M(n),f=a.getNode().getImmediateChild(u);let _;if(T(h))_=s;else{const w=d.getCompleteChild(u);w!=null?ar(h)===".priority"&&w.getChild(Cl(h)).isEmpty()?_=w:_=w.updateChild(h,s):_=v.EMPTY_NODE}if(f.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),u,_,h,d,o);l=cn(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Go(t,e){return t.eventCache.isCompleteForChild(e)}function Gm(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=$(n,l);Go(e,C(d))&&(a=Ai(t,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=$(n,l);Go(e,C(d))||(a=Ai(t,a,d,c,i,r,o))}),a}function Ko(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ri(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;T(n)?c=s:c=new O(null).setTree(n,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=Ko(t,f,h);l=ws(t,l,new N(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const f=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),w=Ko(t,_,h);l=ws(t,l,new N(u),w,i,r,o,a)}}),l}function Km(t,e,n,s,i,r,o){if(bs(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(T(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ws(t,e,n,l.getNode().getChild(n),i,r,a,o);if(T(n)){let c=new O(null);return l.getNode().forEachChild(Ke,(d,u)=>{c=c.set(new N(d),u)}),Ri(t,e,n,c,i,r,a,o)}else return e}else{let c=new O(null);return s.foreach((d,u)=>{const h=$(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Ri(t,e,n,c,i,r,a,o)}}function Ym(t,e,n,s,i){const r=e.serverCache,o=Dl(e,r.getNode(),r.isFullyInitialized()||T(n),r.isFiltered());return Vl(t,o,n,s,Wl,i)}function Qm(t,e,n,s,i,r){let o;if(bs(s,n)!=null)return e;{const a=new vr(s,e,i),l=e.eventCache.getNode();let c;if(T(n)||C(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ys(s,pt(e));else{const u=e.serverCache.getNode();m(u instanceof v,"serverChildren would be complete if leaf node"),d=_r(s,u)}d=d,c=t.filter.updateFullNode(l,d,r)}else{const d=C(n);let u=gr(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,M(n),a,r):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,v.EMPTY_NODE,M(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ys(s,pt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||bs(s,k())!=null,cn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Jm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new dr(s.getIndex()),r=fm(s);this.processor_=Hm(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),d=new et(l,o.isFullyInitialized(),i.filtersNodes()),u=new et(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ls(u,d),this.eventGenerator_=new Em(this.query_)}get query(){return this.query_}}function Xm(t){return t.viewCache_.serverCache.getNode()}function Zm(t){return vs(t.viewCache_)}function e_(t,e){const n=pt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(C(e)).isEmpty())?n.getChild(e):null}function Yo(t){return t.eventRegistrations_.length===0}function t_(t,e){t.eventRegistrations_.push(e)}function Qo(t,e,n){const s=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Jo(t,e,n,s){e.type===ve.MERGE&&e.source.queryId!==null&&(m(pt(t.viewCache_),"We should always have a full cache before handling merges"),m(vs(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qm(t.processor_,i,e,n,s);return jm(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hl(t,r.changes,r.viewCache.eventCache.getNode(),null)}function n_(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(D,(r,o)=>{s.push(Lt(r,o))}),n.isFullyInitialized()&&s.push(Ml(n.getNode())),Hl(t,s,n.getNode(),e)}function Hl(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Im(t.eventGenerator_,e,n,i)}/**
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
 */let Es;class jl{constructor(){this.views=new Map}}function s_(t){m(!Es,"__referenceConstructor has already been defined"),Es=t}function i_(){return m(Es,"Reference.ts has not been loaded"),Es}function r_(t){return t.views.size===0}function yr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Jo(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Jo(o,e,n,s));return r}}function ql(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ys(n,i?s:null),l=!1;a?l=!0:s instanceof v?(a=_r(n,s),l=!1):(a=v.EMPTY_NODE,l=!1);const c=Ls(new et(a,l,!1),new et(s,i,!1));return new Jm(e,c)}return o}function o_(t,e,n,s,i,r){const o=ql(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),t_(o,n),n_(o,n)}function a_(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=tt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Qo(c,n,s)),Yo(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Qo(l,n,s)),Yo(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!tt(t)&&r.push(new(i_())(e._repo,e._path)),{removed:r,events:o}}function zl(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qe(t,e){let n=null;for(const s of t.views.values())n=n||e_(s,e);return n}function Gl(t,e){if(e._queryParams.loadsAllData())return xs(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Kl(t,e){return Gl(t,e)!=null}function tt(t){return xs(t)!=null}function xs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Is;function l_(t){m(!Is,"__referenceConstructor has already been defined"),Is=t}function c_(){return m(Is,"Reference.ts has not been loaded"),Is}let u_=1;class Xo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=Um(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function br(t,e,n,s,i){return km(t.pendingWriteTree_,e,n,s,i),i?Kt(t,new ft(fr(),e,n)):[]}function d_(t,e,n,s){Am(t.pendingWriteTree_,e,n,s);const i=O.fromObject(n);return Kt(t,new Dt(fr(),e,i))}function Ve(t,e,n=!1){const s=Rm(t.pendingWriteTree_,e);if(Nm(t.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(k(),!0):J(s.children,o=>{r=r.set(new N(o),!0)}),Kt(t,new gs(s.path,r,n))}else return[]}function Dn(t,e,n){return Kt(t,new ft(pr(),e,n))}function h_(t,e,n){const s=O.fromObject(n);return Kt(t,new Dt(pr(),e,s))}function f_(t,e){return Kt(t,new En(pr(),e))}function p_(t,e,n){const s=wr(t,n);if(s){const i=Er(s),r=i.path,o=i.queryId,a=ee(r,e),l=new En(mr(o),a);return Ir(t,r,l)}else return[]}function Cs(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Kl(o,e))){const l=a_(o,e,n,s);r_(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(h,f)=>tt(f));if(d&&!u){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=g_(h);for(let _=0;_<f.length;++_){const w=f[_],I=w.query,K=Xl(t,w);t.listenProvider_.startListening(dn(I),In(t,I),K.hashFn,K.onComplete)}}}!u&&c.length>0&&!s&&(d?t.listenProvider_.stopListening(dn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(Fs(h));t.listenProvider_.stopListening(dn(h),f)}))}v_(t,c)}return a}function Yl(t,e,n,s){const i=wr(t,s);if(i!=null){const r=Er(i),o=r.path,a=r.queryId,l=ee(o,e),c=new ft(mr(a),l,n);return Ir(t,o,c)}else return[]}function m_(t,e,n,s){const i=wr(t,s);if(i){const r=Er(i),o=r.path,a=r.queryId,l=ee(o,e),c=O.fromObject(n),d=new Dt(mr(a),l,c);return Ir(t,o,d)}else return[]}function Ni(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const _=ee(h,i);r=r||Qe(f,_),o=o||tt(f)});let a=t.syncPointTree_.get(i);a?(o=o||tt(a),r=r||Qe(a,k())):(a=new jl,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,_)=>{const w=Qe(_,k());w&&(r=r.updateImmediateChild(f,w))}));const c=Kl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Fs(e);m(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=y_();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const d=Ds(t.pendingWriteTree_,i);let u=o_(a,e,n,d,r,l);if(!c&&!o&&!s){const h=Gl(a,e);u=u.concat(b_(t,e,h))}return u}function $s(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ee(o,e),c=Qe(a,l);if(c)return c});return Fl(i,e,r,n,!0)}function __(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=ee(c,n);s=s||Qe(d,u)});let i=t.syncPointTree_.get(n);i?s=s||Qe(i,k()):(i=new jl,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new et(s,!0,!1):null,a=Ds(t.pendingWriteTree_,e._path),l=ql(i,e,a,r?o.getNode():v.EMPTY_NODE,r);return Zm(l)}function Kt(t,e){return Ql(e,t.syncPointTree_,null,Ds(t.pendingWriteTree_,k()))}function Ql(t,e,n,s){if(T(t.path))return Jl(t,e,n,s);{const i=e.get(k());n==null&&i!=null&&(n=Qe(i,k()));let r=[];const o=C(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Ul(s,o);r=r.concat(Ql(a,l,c,d))}return i&&(r=r.concat(yr(i,t,s,n))),r}}function Jl(t,e,n,s){const i=e.get(k());n==null&&i!=null&&(n=Qe(i,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ul(s,o),d=t.operationForChild(o);d&&(r=r.concat(Jl(d,a,l,c)))}),i&&(r=r.concat(yr(i,t,s,n))),r}function Xl(t,e){const n=e.query,s=In(t,n);return{hashFn:()=>(Xm(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?p_(t,n._path,s):f_(t,n._path);{const r=fp(i,n);return Cs(t,n,null,r)}}}}function In(t,e){const n=Fs(e);return t.queryToTagMap.get(n)}function Fs(t){return t._path.toString()+"$"+t._queryIdentifier}function wr(t,e){return t.tagToQueryMap.get(e)}function Er(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function Ir(t,e,n){const s=t.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Ds(t.pendingWriteTree_,e);return yr(s,n,i,null)}function g_(t){return t.fold((e,n,s)=>{if(n&&tt(n))return[xs(n)];{let i=[];return n&&(i=zl(n)),J(s,(r,o)=>{i=i.concat(o)}),i}})}function dn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(c_())(t._repo,t._path):t}function v_(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Fs(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function y_(){return u_++}function b_(t,e,n){const s=e._path,i=In(t,e),r=Xl(t,n),o=t.listenProvider_.startListening(dn(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)m(!tt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!T(c)&&d&&tt(d))return[xs(d).query];{let h=[];return d&&(h=h.concat(zl(d).map(f=>f.query))),J(u,(f,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(dn(d),In(t,d))}}return o}/**
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
 */class Cr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cr(n)}node(){return this.node_}}class Sr{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$(this.path_,e);return new Sr(this.syncTree_,n)}node(){return $s(this.syncTree_,this.path_)}}const w_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zo=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return E_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return I_(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},E_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},I_=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zl=function(t,e,n,s){return kr(e,new Sr(n,t),s)},Tr=function(t,e,n){return kr(t,new Cr(e),n)};function kr(t,e,n){const s=t.getPriority().val(),i=Zo(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Zo(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new j(a,B(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new j(i))),o.forEachChild(D,(a,l)=>{const c=kr(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ar{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Us(t,e){let n=e instanceof N?e:new N(e),s=t,i=C(n);for(;i!==null;){const r=ct(s.node.children,i)||{children:{},childCount:0};s=new Ar(i,s,r),n=M(n),i=C(n)}return s}function gt(t){return t.node.value}function Rr(t,e){t.node.value=e,Pi(t)}function ec(t){return t.node.childCount>0}function C_(t){return gt(t)===void 0&&!ec(t)}function Bs(t,e){J(t.node.children,(n,s)=>{e(new Ar(n,t,s))})}function tc(t,e,n,s){n&&e(t),Bs(t,i=>{tc(i,e,!0)})}function S_(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xn(t){return new N(t.parent===null?t.name:xn(t.parent)+"/"+t.name)}function Pi(t){t.parent!==null&&T_(t.parent,t.name,t)}function T_(t,e,n){const s=C_(n),i=we(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Pi(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pi(t))}/**
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
 */const k_=/[\[\].#$\/\u0000-\u001F\u007F]/,A_=/[\[\].#$\u0000-\u001F\u007F]/,ci=10*1024*1024,Nr=function(t){return typeof t=="string"&&t.length!==0&&!k_.test(t)},nc=function(t){return typeof t=="string"&&t.length!==0&&!A_.test(t)},R_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nc(t)},Ss=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!nr(t)||t&&typeof t=="object"&&we(t,".sv")},sc=function(t,e,n,s){s&&e===void 0||$n(Rs(t,"value"),e,n)},$n=function(t,e,n){const s=n instanceof N?new Gp(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ot(s));if(typeof e=="function")throw new Error(t+"contains a function "+ot(s)+" with contents = "+e.toString());if(nr(e))throw new Error(t+"contains "+e.toString()+" "+ot(s));if(typeof e=="string"&&e.length>ci/3&&Ns(e)>ci)throw new Error(t+"contains a string greater than "+ci+" utf8 bytes "+ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nr(o)))throw new Error(t+" contains an invalid key ("+o+") "+ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kp(s,o),$n(t,a,s),Yp(s)}),i&&r)throw new Error(t+' contains ".value" child '+ot(s)+" in addition to actual children.")}},N_=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=vn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Nr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zp);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&me(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},P_=function(t,e,n,s){const i=Rs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];J(e,(o,a)=>{const l=new N(o);if($n(i,a,$(n,l)),ar(l)===".priority"&&!Ss(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),N_(i,r)},ic=function(t,e,n,s){if(!nc(n))throw new Error(Rs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},O_=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ic(t,e,n)},Pr=function(t,e){if(C(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},M_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!R_(n))throw new Error(Rs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class L_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ws(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function rc(t,e,n){Ws(t,n),oc(t,s=>lr(s,e))}function ue(t,e,n){Ws(t,n),oc(t,s=>me(s,e)||me(e,s))}function oc(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(D_(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function D_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();an&&Y("event: "+n.toString()),Gt(s)}}}/**
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
 */const x_="repo_interrupt",$_=25;class F_{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_s(),this.transactionQueueTree_=new Ar,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function U_(t,e,n){if(t.stats_=rr(t.repoInfo_),t.forceRestClient_||gp())t.server_=new ms(t.repoInfo_,(s,i,r,o)=>{ea(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ta(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Pe(t.repoInfo_,e,(s,i,r,o)=>{ea(t,s,i,r,o)},s=>{ta(t,s)},s=>{B_(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ep(t.repoInfo_,()=>new wm(t.stats_,t.server_)),t.infoData_=new _m,t.infoSyncTree_=new Xo({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Dn(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Or(t,"connected",!1),t.serverSyncTree_=new Xo({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ue(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ac(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fn(t){return w_({timestamp:ac(t)})}function ea(t,e,n,s,i){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=is(n,c=>B(c));o=m_(t.serverSyncTree_,r,l,i)}else{const l=B(n);o=Yl(t.serverSyncTree_,r,l,i)}else if(s){const l=is(n,c=>B(c));o=h_(t.serverSyncTree_,r,l)}else{const l=B(n);o=Dn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$t(t,r)),ue(t.eventQueue_,a,o)}function ta(t,e){Or(t,"connected",e),e===!1&&j_(t)}function B_(t,e){J(e,(n,s)=>{Or(t,n,s)})}function Or(t,e,n){const s=new N("/.info/"+e),i=B(n);t.infoData_.updateSnapshot(s,i);const r=Dn(t.infoSyncTree_,s,i);ue(t.eventQueue_,s,r)}function Vs(t){return t.nextWriteId_++}function W_(t,e,n){const s=__(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=B(i).withIndex(e._queryParams.getIndex());Ni(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Dn(t.serverSyncTree_,e._path,r);else{const a=In(t.serverSyncTree_,e);o=Yl(t.serverSyncTree_,e._path,r,a)}return ue(t.eventQueue_,e._path,o),Cs(t.serverSyncTree_,e,n,null,!0),r},i=>(Yt(t,"get for query "+V(e)+" failed: "+i),Promise.reject(new Error(i))))}function V_(t,e,n,s,i){Yt(t,"set",{path:e.toString(),value:n,priority:s});const r=Fn(t),o=B(n,s),a=$s(t.serverSyncTree_,e),l=Tr(o,a,r),c=Vs(t),d=br(t.serverSyncTree_,e,l,c,!0);Ws(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const _=h==="ok";_||te("set at "+e+" failed: "+h);const w=Ve(t.serverSyncTree_,c,!_);ue(t.eventQueue_,e,w),Oi(t,i,h,f)});const u=Lr(t,e);$t(t,u),ue(t.eventQueue_,u,[])}function H_(t,e,n,s){Yt(t,"update",{path:e.toString(),value:n});let i=!0;const r=Fn(t),o={};if(J(n,(a,l)=>{i=!1,o[a]=Zl($(e,a),B(l),t.serverSyncTree_,r)}),i)Y("update() called with empty data.  Don't do anything."),Oi(t,s,"ok",void 0);else{const a=Vs(t),l=d_(t.serverSyncTree_,e,o,a);Ws(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||te("update at "+e+" failed: "+c);const h=Ve(t.serverSyncTree_,a,!u),f=h.length>0?$t(t,e):e;ue(t.eventQueue_,f,h),Oi(t,s,c,d)}),J(n,c=>{const d=Lr(t,$(e,c));$t(t,d)}),ue(t.eventQueue_,e,[])}}function j_(t){Yt(t,"onDisconnectEvents");const e=Fn(t),n=_s();Ci(t.onDisconnect_,k(),(i,r)=>{const o=Zl(i,r,t.serverSyncTree_,e);Ll(n,i,o)});let s=[];Ci(n,k(),(i,r)=>{s=s.concat(Dn(t.serverSyncTree_,i,r));const o=Lr(t,i);$t(t,o)}),t.onDisconnect_=_s(),ue(t.eventQueue_,k(),s)}function q_(t,e,n){let s;C(e._path)===".info"?s=Ni(t.infoSyncTree_,e,n):s=Ni(t.serverSyncTree_,e,n),rc(t.eventQueue_,e._path,s)}function z_(t,e,n){let s;C(e._path)===".info"?s=Cs(t.infoSyncTree_,e,n):s=Cs(t.serverSyncTree_,e,n),rc(t.eventQueue_,e._path,s)}function G_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(x_)}function Yt(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Y(n,...e)}function Oi(t,e,n,s){e&&Gt(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function K_(t,e,n,s,i,r){Yt(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:nl(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Mr(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{$n("transaction failed: Data returned ",l,o.path),o.status=0;const c=Us(t.transactionQueueTree_,e),d=gt(c)||[];d.push(o),Rr(c,d);let u;typeof l=="object"&&l!==null&&we(l,".priority")?(u=ct(l,".priority"),m(Ss(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=($s(t.serverSyncTree_,e)||v.EMPTY_NODE).getPriority().val();const h=Fn(t),f=B(l,u),_=Tr(f,a,h);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=_,o.currentWriteId=Vs(t);const w=br(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);ue(t.eventQueue_,e,w),Hs(t,t.transactionQueueTree_)}}function Mr(t,e,n){return $s(t.serverSyncTree_,e,n)||v.EMPTY_NODE}function Hs(t,e=t.transactionQueueTree_){if(e||js(t,e),gt(e)){const n=cc(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Y_(t,xn(e),n)}else ec(e)&&Bs(e,n=>{Hs(t,n)})}function Y_(t,e,n){const s=n.map(c=>c.currentWriteId),i=Mr(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ee(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Yt(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ve(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();js(t,Us(t.transactionQueueTree_,e)),Hs(t,t.transactionQueueTree_),ue(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)Gt(u[h])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{te("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}$t(t,e)}},o)}function $t(t,e){const n=lc(t,e),s=xn(n),i=cc(t,n);return Q_(t,i,s),s}function Q_(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ee(n,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Ve(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=$_)d=!0,u="maxretry",i=i.concat(Ve(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Mr(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){$n("transaction failed: Data returned ",f,l.path);let _=B(f);typeof f=="object"&&f!=null&&we(f,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,K=Fn(t),fe=Tr(_,h,K);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=fe,l.currentWriteId=Vs(t),o.splice(o.indexOf(I),1),i=i.concat(br(t.serverSyncTree_,l.path,fe,l.currentWriteId,l.applyLocally)),i=i.concat(Ve(t.serverSyncTree_,I,!0))}else d=!0,u="nodata",i=i.concat(Ve(t.serverSyncTree_,l.currentWriteId,!0))}ue(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}js(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Gt(s[a]);Hs(t,t.transactionQueueTree_)}function lc(t,e){let n,s=t.transactionQueueTree_;for(n=C(e);n!==null&&gt(s)===void 0;)s=Us(s,n),e=M(e),n=C(e);return s}function cc(t,e){const n=[];return uc(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uc(t,e,n){const s=gt(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Bs(e,i=>{uc(t,i,n)})}function js(t,e){const n=gt(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Rr(e,n.length>0?n:void 0)}Bs(e,s=>{js(t,s)})}function Lr(t,e){const n=xn(lc(t,e)),s=Us(t.transactionQueueTree_,e);return S_(s,i=>{ui(t,i)}),ui(t,s),tc(s,i=>{ui(t,i)}),n}function ui(t,e){const n=gt(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ve(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rr(e,void 0):n.length=r+1,ue(t.eventQueue_,xn(e),i);for(let o=0;o<s.length;o++)Gt(s[o])}}/**
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
 */function J_(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function X_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):te(`Invalid query segment '${n}' in query '${t}'`)}return e}const na=function(t,e){const n=Z_(t),s=n.namespace;n.domain==="firebase.com"&&De(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&De("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ml(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new N(n.pathString)}},Z_=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=J_(t.substring(d,u)));const h=X_(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const sa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",eg=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=sa.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=sa.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class tg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class ng{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class dc{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Un{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return T(this._path)?null:ar(this._path)}get ref(){return new Se(this._repo,this._path)}get _queryIdentifier(){const e=Vo(this._queryParams),n=sr(e);return n==="{}"?"default":n}get _queryObject(){return Vo(this._queryParams)}isEqual(e){if(e=X(e),!(e instanceof Un))return!1;const n=this._repo===e._repo,s=lr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+qp(this._path)}}function sg(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function ig(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Ke){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ht)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Xe)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===D){if(e!=null&&!Ss(e)||n!=null&&!Ss(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(m(t.getIndex()instanceof Pl||t.getIndex()===Ol,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Se extends Un{constructor(e,n){super(e,n,new hr,!1)}get parent(){const e=Cl(this._path);return e===null?null:new Se(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ft{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new N(e),s=Cn(this.ref,e);return new Ft(this._node.getChild(n),s,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ft(i,Cn(this.ref,s),D)))}hasChild(e){const n=new N(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Q(t,e){return t=X(t),t._checkNotDeleted("ref"),e!==void 0?Cn(t._root,e):t._root}function Cn(t,e){return t=X(t),C(t._path)===null?O_("child","path",e):ic("child","path",e),new Se(t._repo,$(t._path,e))}function nt(t,e){t=X(t),Pr("push",t._path),sc("push",e,t._path,!0);const n=ac(t._repo),s=eg(n),i=Cn(t,s),r=Cn(t,s);let o;return e!=null?o=Dr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Dr(t,e){t=X(t),Pr("set",t._path),sc("set",e,t._path,!1);const n=new Ht;return V_(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ce(t,e){P_("update",e,t._path);const n=new Ht;return H_(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function It(t){t=X(t);const e=new dc(()=>{}),n=new qs(e);return W_(t._repo,t,n).then(s=>new Ft(s,new Se(t._repo,t._path),t._queryParams.getIndex()))}class qs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new tg("value",this,new Ft(e.snapshotNode,new Se(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ng(this,e,n):null}matches(e){return e instanceof qs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rg(t,e,n,s,i){const r=new dc(n,void 0),o=new qs(r);return q_(t._repo,t,o),()=>z_(t._repo,t,o)}function og(t,e,n,s){return rg(t,"value",e)}class hc{}class ag extends hc{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Un(e._repo,e._path,pm(e._queryParams,this._limit),e._orderByCalled)}}function lg(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new ag(t)}class cg extends hc{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){sg(e,"orderByKey");const n=mm(e._queryParams,Ke);return ig(n),new Un(e._repo,e._path,n,!0)}}function ug(){return new cg}function dg(t,...e){let n=X(t);for(const s of e)n=s._apply(n);return n}s_(Se);l_(Se);/**
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
 */const hg="FIREBASE_DATABASE_EMULATOR_HOST",Mi={};let fg=!1;function pg(t,e,n,s){t.repoInfo_=new ml(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function mg(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||De("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=na(r,i),a=o.repoInfo,l;typeof process<"u"&&Co&&(l=Co[hg]),l?(r=`http://${l}?ns=${a.namespace}`,o=na(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new yp(t.name,t.options,e);M_("Invalid Firebase Database URL",o),T(o.path)||De("Database URL must point to the root of a Firebase Database (not including a child path).");const d=gg(a,t,c,new vp(t.name,n));return new vg(d,t)}function _g(t,e){const n=Mi[e];(!n||n[t.key]!==t)&&De(`Database ${e}(${t.repoInfo_}) has already been deleted.`),G_(t),delete n[t.key]}function gg(t,e,n,s){let i=Mi[e.name];i||(i={},Mi[e.name]=i);let r=i[t.toURLString()];return r&&De("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new F_(t,fg,n,s),i[t.toURLString()]=r,r}class vg{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(U_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Se(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_g(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&De("Cannot call "+e+" on a deleted database.")}}function yg(t=ya(),e){const n=qi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Pu("database");s&&bg(n,...s)}return n}function bg(t,e,n,s={}){t=X(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&De("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&De('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ts(ts.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ou(s.mockUserToken,t.app.options.projectId);r=new ts(o)}pg(i,e,n,r)}/**
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
 */function wg(t){sp(qt),Ot(new ut("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mg(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ge(So,To,t),Ge(So,To,"esm2017")}/**
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
 */class Eg{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function de(t,e,n){var s;if(t=X(t),Pr("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new Ht,o=(l,c,d)=>{let u=null;l?r.reject(l):(u=new Ft(d,new Se(t._repo,t._path),D),r.resolve(new Eg(c,u)))},a=og(t,()=>{});return K_(t._repo,t._path,e,o,a,i),r.promise}Pe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wg();const Li={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},Ig=!!Li.apiKey&&!!Li.databaseURL;let tn=null,ia=null,ra=null;function z(){return tn||(tn=va(Li),ia=tp(tn),ra=yg(tn)),{app:tn,auth:ia,db:ra}}function Cg(){const{auth:t}=z();return new Promise(e=>{let n=!1;const s=Hh(t,i=>{n||(n=!0,s(),e(i||null))},()=>e(null));setTimeout(()=>{n||(n=!0,e(t.currentUser||null))},4e3)})}const Sg="../STONK-Home/index.html",di=2600;function Tg(t){return String(t||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function kg(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function Ag(t){const e=Tg(t);return Sg+(e?`?room=${encodeURIComponent(e)}`:"")}function Rg({title:t="STONK Home에서 입장해 주세요",message:e="",roomCode:n="",auto:s=!0}={}){var l;const i=Ag(n),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(54,211,153,0.20), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!kg();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(54,211,153,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#36d399;margin-bottom:8px">STONK COMPANY</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${t}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인은 STONK Home에서 진행합니다. 같은 계정의 자산이 그대로 연결됩니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#6ee7b0,#36d399);box-shadow:0 10px 30px rgba(54,211,153,0.4)">STONK Home으로 이동</a>
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(di/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(l=o.querySelector("[data-home-go]"))==null||l.addEventListener("click",c=>{c.preventDefault(),location.href=i}),a){let c=Math.ceil(di/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{c-=1,d&&(d.textContent=String(Math.max(0,c))),c<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},di)}return o}const G="MAIN",zs=1e7,xr=60*60*1e3,$r=.012;function H(t){const e=Number(t);return Number.isFinite(e)?e:0}function p(t){return Math.trunc(H(t))}function F(t){return p(t).toLocaleString("ko-KR")+"원"}function U(t,e,n){return t=H(t),Math.max(e,Math.min(n,t))}const He={fintech:{id:"fintech",label:"핀테크",icon:"💳",revCoef:.04,valCoef:.42,vol:.18,eventSens:1.4,note:"Bank 이벤트 영향이 큼"},game:{id:"game",label:"게임",icon:"🎮",revCoef:.045,valCoef:.45,vol:.28,eventSens:1,note:"변동성 높음 · Gacha/Arcade 확장"},bio:{id:"bio",label:"바이오",icon:"🧬",revCoef:.046,valCoef:.5,vol:.34,eventSens:1,note:"성장 변동성이 큼"},semicon:{id:"semicon",label:"반도체",icon:"🔬",revCoef:.038,valCoef:.55,vol:.22,eventSens:1,note:"시설 영향 큼 · 가치 상승 큼"},ent:{id:"ent",label:"엔터테인먼트",icon:"🎬",revCoef:.042,valCoef:.44,vol:.24,eventSens:1,note:"브랜드 점수 영향 큼"},food:{id:"food",label:"식품",icon:"🍱",revCoef:.036,valCoef:.38,vol:.1,eventSens:.8,note:"안정적 매출"},robot:{id:"robot",label:"로봇",icon:"🤖",revCoef:.044,valCoef:.5,vol:.3,eventSens:1,note:"연구개발 중심"},energy:{id:"energy",label:"친환경 에너지",icon:"🌱",revCoef:.04,valCoef:.46,vol:.2,eventSens:1.2,note:"이벤트 보너스 가능"},logistics:{id:"logistics",label:"물류",icon:"🚚",revCoef:.037,valCoef:.4,vol:.12,eventSens:.8,note:"꾸준한 수익"},security:{id:"security",label:"보안",icon:"🛡️",revCoef:.039,valCoef:.42,vol:.16,eventSens:.9,note:"리스크 감소"}},Ng=Object.keys(He),Ut={stable:{id:"stable",label:"안정형",revMod:.95,growth:.9,riskBase:18,brand:0,ipo:0,note:"변동성·리스크 낮음"},aggressive:{id:"aggressive",label:"공격형",revMod:1.15,growth:1.2,riskBase:38,brand:0,ipo:0,note:"성장↑ 비용·리스크↑"},brand:{id:"brand",label:"브랜드형",revMod:.92,growth:1,riskBase:24,brand:12,ipo:0,note:"브랜드 점수↑ 초기 수익↓"},rnd:{id:"rnd",label:"연구개발형",revMod:.9,growth:1.05,riskBase:26,brand:0,ipo:12,note:"IPO 준비도 보너스 · 초기 비용↑"}},oe={dev:{id:"dev",label:"개발자",icon:"👨‍💻",cost:2e6,upkeep:12e4,effect:"성장률 +"},marketer:{id:"marketer",label:"마케터",icon:"📣",cost:18e5,upkeep:11e4,effect:"브랜드 +"},sales:{id:"sales",label:"영업 담당",icon:"🤝",cost:18e5,upkeep:11e4,effect:"매출 +"},account:{id:"account",label:"회계 담당",icon:"🧮",cost:16e5,upkeep:1e5,effect:"비용 −"},risk:{id:"risk",label:"리스크 매니저",icon:"🧯",cost:22e5,upkeep:13e4,effect:"리스크 −"},researcher:{id:"researcher",label:"연구원",icon:"🔭",cost:24e5,upkeep:14e4,effect:"IPO 준비도 +"},ops:{id:"ops",label:"운영 매니저",icon:"🛠️",cost:2e6,upkeep:12e4,effect:"시설 효율 +"},brand:{id:"brand",label:"브랜드 매니저",icon:"✨",cost:22e5,upkeep:13e4,effect:"엔터 보너스"}},fc=Object.keys(oe),je={office:{id:"office",label:"사무실",icon:"🏢",baseCost:3e6,upkeep:6e4,effect:"직원 한도 +"},server:{id:"server",label:"서버실",icon:"🖥️",baseCost:4e6,upkeep:8e4,effect:"핀테크/게임/보안 매출 +"},lab:{id:"lab",label:"연구소",icon:"🧪",baseCost:5e6,upkeep:9e4,effect:"바이오/로봇/반도체 성장 +"},marketing:{id:"marketing",label:"마케팅룸",icon:"📈",baseCost:35e5,upkeep:7e4,effect:"브랜드 +"},accounting:{id:"accounting",label:"회계실",icon:"📒",baseCost:3e6,upkeep:6e4,effect:"비용 −"},security:{id:"security",label:"보안실",icon:"🔒",baseCost:35e5,upkeep:7e4,effect:"리스크 −"}},pc=Object.keys(je),mc=["STARTUP","SMALL_BIZ","SCALE_UP","ENTERPRISE","PRE_IPO","LISTED"],Ct={STARTUP:"스타트업",SMALL_BIZ:"소기업",SCALE_UP:"성장기업",ENTERPRISE:"대기업",PRE_IPO:"상장 준비",LISTED:"상장기업"};function Pg(t){return Math.max(0,mc.indexOf(t||"STARTUP"))}const Gs=t=>Q(z().db,`rooms/${G}/players/${t}/cash`),Og=t=>Q(z().db,`rooms/${G}/players/${t}`),se=t=>Q(z().db,`rooms/${G}/companies/${t}`),_c=t=>Q(z().db,`rooms/${G}/companies/${t}/logs`),Mg=t=>Q(z().db,`rooms/${G}/bank/${t}`),Sn=t=>Q(z().db,`rooms/${G}/bank/${t}/businessLoan`),Lg=()=>Q(z().db,`rooms/${G}/bankEvents/current`);function gc(t,e,n,s){return{companyId:"co"+s.toString(36),ownerUid:t,ownerNickname:e||"플레이어",name:n.name,slogan:n.slogan||"",sector:n.sector,strategy:n.strategy,stage:"STARTUP",level:1,companyValue:3e7,companyCash:0,totalRevenue:0,totalCost:0,lastProfit:0,growthRate:0,brandScore:U((Ut[n.strategy]||{}).brand||0,0,100),riskScore:U((Ut[n.strategy]||{}).riskBase||20,0,100),ipoReadiness:0,employees:{},facilities:{},upgrades:{},createdAt:s,updatedAt:s,lastSettledAt:s}}function Dg(t){const e=t&&typeof t=="object"?t:{};return{companyId:e.companyId||"",ownerUid:e.ownerUid||"",ownerNickname:e.ownerNickname||"플레이어",name:e.name||"",slogan:e.slogan||"",sector:e.sector||"fintech",strategy:e.strategy||"stable",stage:e.stage||"STARTUP",level:Math.max(1,p(e.level)||1),companyValue:Math.max(0,p(e.companyValue)),companyCash:p(e.companyCash),totalRevenue:Math.max(0,p(e.totalRevenue)),totalCost:Math.max(0,p(e.totalCost)),lastProfit:p(e.lastProfit),growthRate:H(e.growthRate),brandScore:U(e.brandScore,0,100),riskScore:U(e.riskScore,0,100),ipoReadiness:U(e.ipoReadiness,0,100),employees:e.employees&&typeof e.employees=="object"?e.employees:{},facilities:e.facilities&&typeof e.facilities=="object"?e.facilities:{},upgrades:e.upgrades&&typeof e.upgrades=="object"?e.upgrades:{},createdAt:p(e.createdAt),updatedAt:p(e.updatedAt),lastSettledAt:p(e.lastSettledAt)||p(e.createdAt)}}function Fr(t){return Object.values(t.employees||{}).reduce((e,n)=>e+Math.max(0,p(n&&n.count)),0)}function Ur(t){return Object.values(t.facilities||{}).reduce((e,n)=>e+Math.max(0,p(n&&n.level)),0)}function rn(t,e){const n=(t.employees||{})[e];return Math.max(0,p(n&&n.count))}function St(t,e){const n=(t.facilities||{})[e];return Math.max(0,p(n&&n.level))}function vc(t,e){const n=St(t,e);return Math.floor((je[e]||{}).baseCost*Math.pow(1.6,n))}function yc(t,e){const n=rn(t,e);return Math.floor((oe[e]||{}).cost*Math.pow(1.18,n))}function bc(t){const e={valBonus:1,loanMult:1,riskBonus:0,warnBoost:!1},n=t&&t.type;return t&&t.custom&&t.effects?(e.loanMult=U(t.effects.loanRateMultiplier,.5,1.5),e.loanMult!==1&&(e.loanMult=e.loanMult),e):(n==="lowrate"?e.loanMult=.7:n==="highrate"?(e.loanMult=1.3,e.warnBoost=!0):n==="boom"?e.valBonus=1.08:n==="bust"?(e.valBonus=.96,e.riskBonus=3,e.warnBoost=!0):n==="caution"&&(e.warnBoost=!0),e)}function wc(t,e){if(e=e||Date.now(),t&&t.manual&&(!t.expiresAt||H(t.expiresAt)>e)&&(t.title||t.type))return t;const n=new Date(e+9*36e5),s="bankevt:"+n.getUTCFullYear()+"-"+(n.getUTCMonth()+1)+"-"+n.getUTCDate();let i=2166136261;for(let l=0;l<s.length;l++)i^=s.charCodeAt(l),i=Math.imul(i,16777619);const r=["lowrate","highrate","boom","bust","insurance","cashback","vipweek","caution"],o={lowrate:"저금리 데이",highrate:"고금리 데이",boom:"투자 호황",bust:"투자 침체",insurance:"보험 우대 기간",cashback:"카드 캐시백 이벤트",vipweek:"VIP 우대 기간",caution:"금융 경계주의보"},a=r[(i>>>0)%r.length];return{type:a,title:o[a],manual:!1}}function Bn(t){return t=U(t,0,100),t>=90?"S":t>=75?"A":t>=55?"B":t>=35?"C":t>=15?"D":"F"}const xg={NORMAL:0,SILVER:1,GOLD:2,PLATINUM:3,BLACK:4};function Di(t){return xg[t]||0}const Bt={F:0,D:1,C:2,B:3,A:4,S:5};function Ec(t){let e=0;const n=Bn((t&&t.creditScore)!=null?t.creditScore:60);Bt[n]>=Bt.A&&(e+=.05);const s=t&&t.vipTier||"NORMAL";return s==="SILVER"?e+=.03:s==="GOLD"?e+=.05:s==="PLATINUM"?e+=.08:s==="BLACK"&&(e+=.1),Math.min(.2,e)}const Ic={S:2e8,A:12e7,B:6e7,C:3e7,D:12e6,F:0};function Br(t){const e=Bn((t&&t.creditScore)!=null?t.creditScore:60);let n=Ic[e]||0;const s=t&&t.vipTier||"NORMAL";return Di(s)>=3?n=Math.floor(n*1.3):Di(s)>=2&&(n=Math.floor(n*1.1)),n}function $g(t){let e=2166136261;const n=String(t);for(let s=0;s<n.length;s++)e^=n.charCodeAt(s),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e5/1e5}function Ks(t,e,n){const s=p(t.lastSettledAt)||e,i=Math.max(0,e-s),r=i/864e5;if(r<=0)return{applied:!1,elapsed:i};const o=He[t.sector]||He.fintech,a=Ut[t.strategy]||Ut.stable,l=bc(n);let c=a.revMod;c*=1+Math.min(.6,rn(t,"sales")*.04),t.sector==="ent"&&(c*=1+Math.min(.3,t.brandScore/300)),(t.sector==="fintech"||t.sector==="game"||t.sector==="security")&&(c*=1+Math.min(.3,St(t,"server")*.05)),(t.sector==="bio"||t.sector==="robot"||t.sector==="semicon")&&(c*=1+Math.min(.3,St(t,"lab")*.05));const d=Math.floor(t.companyValue*o.revCoef*r*c);let u=0;for(const pe of fc)u+=rn(t,pe)*oe[pe].upkeep;let h=0;for(const pe of pc)h+=St(t,pe)*je[pe].upkeep;let f=Math.floor((u+h)*r);f=Math.floor(f*(1-Math.min(.4,rn(t,"account")*.05+St(t,"accounting")*.04)));const _=Math.max(0,t.riskScore-rn(t,"risk")*5-St(t,"security")*4),w=Math.floor(t.companyValue*(_/100)*.01*r);f+=w;const K=($g(t.companyId+":"+s)-.5)*2*o.vol;let fe=Math.floor((d-f)*(1+K)*l.valBonus);const _e=Math.max(0,Math.floor(fe*o.valCoef*a.growth));return{applied:!0,elapsed:i,days:r,revenue:d,cost:f,profit:fe,valueGain:_e,riskAdd:l.riskBonus,eventTitle:n&&n.title}}function Ts(t,e){const n=Math.min(40,Math.floor(t.companyValue/125e6)),s=Math.min(25,Math.floor(t.brandScore*.25)),i=t.lastProfit>0?12:0,r=Math.min(12,Ur(t)*1.5),o=Math.min(8,Fr(t)),a=Math.floor(t.riskScore*.25),c=(e&&e.businessLoan?p(e.businessLoan.principal)+p(e.businessLoan.interest):0)>0?8:0;return U(n+s+i+r+o-a-c,0,100)}function Cc(t,e){const n=t.companyValue,s=Fr(t),i=Ur(t),r=t.ipoReadiness,o=Bn((e&&e.creditScore)!=null?e.creditScore:60),a=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;switch(t.stage){case"STARTUP":if(n>=5e7&&s>=3&&i>=2)return"SMALL_BIZ";break;case"SMALL_BIZ":if(n>=2e8&&t.brandScore>=30&&t.lastProfit>=1e7)return"SCALE_UP";break;case"SCALE_UP":if(n>=1e9&&s>=20&&t.brandScore>=60)return"ENTERPRISE";break;case"ENTERPRISE":if(n>=5e9&&r>=70&&t.riskScore<=40)return"PRE_IPO";break;case"PRE_IPO":if(r>=100&&Bt[o]>=Bt.B&&!a)return"LISTED";break}return null}function le(t,e,n,s){return{type:t,title:e||"",amount:p(n),memo:s||"",createdAt:Date.now()}}async function he(t,e){await nt(_c(t),e)}async function Wr(t){const e=Date.now(),[n,s,i,r,o]=await Promise.all([It(Og(t)),It(se(t)),It(Mg(t)),It(Lg()),It(dg(_c(t),ug(),lg(15)))]),a=n.val()||{},l=p(a.cash),c=a.nickname||i.val()&&i.val().nickname||"플레이어",d=i.val()||{},u=wc(r.val(),e);let f=s.exists()?Dg(s.val()):null,_=null;if(f){await Fg(t,d,e);const I=Ks(f,e,u);I.applied&&I.elapsed>=xr?(f=Sc(f,I,e),f.ipoReadiness=Ts(f,d),await Ce(se(t),Vr(f)),await he(t,le("settle","실적 정산",I.profit,`매출 ${F(I.revenue)} · 비용 ${F(I.cost)}${I.eventTitle?" · "+I.eventTitle:""}`)),_=I):f.ipoReadiness=Ts(f,d)}const w=o.exists()?Object.entries(o.val()).map(([I,K])=>({id:I,...K})).sort((I,K)=>H(K.createdAt)-H(I.createdAt)):[];return{uid:t,cash:l,nickname:c,company:f,bank:d,event:u,logs:w,settleFeed:_}}function Sc(t,e,n){const s={...t};return s.companyCash=Math.max(0,p(t.companyCash)+e.profit),s.companyValue=Math.max(0,p(t.companyValue)+e.valueGain),s.totalRevenue=p(t.totalRevenue)+Math.max(0,e.revenue),s.totalCost=p(t.totalCost)+Math.max(0,e.cost),s.lastProfit=e.profit,s.growthRate=s.companyValue>0?e.profit/s.companyValue:0,s.riskScore=U(t.riskScore+(e.riskAdd||0)+(e.profit<0?2:-1),0,100),s.lastSettledAt=n,s}function Vr(t){return{companyId:t.companyId,ownerUid:t.ownerUid,ownerNickname:t.ownerNickname,name:t.name,slogan:t.slogan,sector:t.sector,strategy:t.strategy,stage:t.stage,level:Math.max(1,p(t.level)),companyValue:Math.max(0,p(t.companyValue)),companyCash:p(t.companyCash),totalRevenue:Math.max(0,p(t.totalRevenue)),totalCost:Math.max(0,p(t.totalCost)),lastProfit:p(t.lastProfit),growthRate:H(t.growthRate),brandScore:U(t.brandScore,0,100),riskScore:U(t.riskScore,0,100),ipoReadiness:U(t.ipoReadiness,0,100),employees:t.employees||{},facilities:t.facilities||{},upgrades:t.upgrades||{},createdAt:p(t.createdAt),updatedAt:Date.now(),lastSettledAt:p(t.lastSettledAt)}}async function Tc(t,e,n){if(e=Math.max(0,p(e)),e<=0)return 0;const s=Date.now(),i=(await It(Q(z().db,`rooms/${G}/bank/${t}/card`))).val()||{};if(!i.enabled||i.suspended||i.lost)return-1;if(i.overdue)return-3;const r=p(i.cardLimit),o=p(i.usedAmount);if(o+e>r)return-2;const a=H(i.dueAt)>0?H(i.dueAt):s+24*3600*1e3;return await Ce(Q(z().db,`rooms/${G}/bank/${t}/card`),{usedAmount:o+e,dueAt:a,updatedAt:s}),await nt(Q(z().db,`rooms/${G}/bank/${t}/tx`),{type:"card_use",title:n||"Company 결제",amount:-e,beforeCash:0,afterCash:0,memo:"게임머니 카드 결제(청구 예정) · Company",createdAt:s}),await nt(Q(z().db,`rooms/${G}/bank/${t}/messages`),{type:"card",title:"STONK Card 결제",body:`${n||"Company 결제"} ${F(e)}이 카드로 결제되었습니다(청구 예정).`,amount:-e,relatedId:"",read:!1,actionLabel:"",actionUrl:"",createdAt:s}),e}function kc(t){return t===-2?"STONK Card 한도 초과로 결제할 수 없습니다.":t===-3?"카드 미납 상태로 결제할 수 없습니다. 먼저 청구액을 납부해 주세요.":"카드가 미발급/정지/분실 상태입니다. 결제수단을 변경해 주세요."}async function Fg(t,e,n){const s=e&&e.businessLoan;if(!s||p(s.principal)<=0)return;const i=p(s.lastSettledAt)||n,r=Math.max(0,n-i)/864e5;if(r<xr/864e5)return;const o=Math.floor(p(s.principal)*$r*r);o<=0||(await Ce(Sn(t),{interest:p(s.interest)+o,lastSettledAt:n,updatedAt:n}),e.businessLoan.interest=p(s.interest)+o,e.businessLoan.lastSettledAt=n)}async function Ac(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const s=n.bank&&n.bank.businessLoan||{},i=Br(n.bank),r=p(s.principal);if(i<=0)throw new Error("현재 신용등급으로는 사업대출이 불가합니다.");if(r+e>i)throw new Error(`사업대출 한도 초과 (한도 ${F(i)}, 현재 ${F(r)})`);const o=Date.now();return await Ce(Sn(t),{principal:r+e,interest:p(s.interest),limit:i,companyId:n.company.companyId,lastSettledAt:p(s.lastSettledAt)||o,createdAt:p(s.createdAt)||o,updatedAt:o}),await de(se(t),a=>a&&(a.companyCash=p(a.companyCash)+e,a.updatedAt=o,a)),await nt(Q(z().db,`rooms/${G}/bank/${t}/tx`),{type:"biz_loan",title:"사업대출 실행",amount:e,beforeCash:0,afterCash:0,memo:`회사자금 입금 · 잔액 ${F(r+e)}`,createdAt:o}),await he(t,le("loan","사업대출 실행",e,`회사 자금 +${F(e)}`)),`사업대출 완료 (+${F(e)} → 회사 자금)`}async function xi(t,e,n,s){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");const i=s.bank&&s.bank.businessLoan||{},r=p(i.principal)+p(i.interest);if(r<=0)throw new Error("상환할 사업대출이 없습니다.");const o=Math.min(e,r),a=Date.now();if(n==="cash"){if(!(await de(Gs(t),_=>{const w=_==null?p(s.cash):p(_);if(!(w<o))return w-o})).committed)throw new Error("보유 현금이 부족합니다.")}else{if(!s.company||p(s.company.companyCash)<o)throw new Error("회사 자금이 부족합니다.");await de(se(t),f=>{if(!f)return f;if(!(p(f.companyCash)<o))return f.companyCash=p(f.companyCash)-o,f.updatedAt=a,f})}let l=o;const c=Math.min(l,p(i.interest));l-=c;const d=Math.min(l,p(i.principal)),u=Math.max(0,p(i.principal)-d),h=Math.max(0,p(i.interest)-c);return await Ce(Sn(t),{principal:u,interest:h,updatedAt:a}),await nt(Q(z().db,`rooms/${G}/bank/${t}/tx`),{type:"biz_repay",title:"사업대출 상환",amount:-o,beforeCash:0,afterCash:0,memo:`이자 ${F(c)} · 원금 ${F(d)} · ${n==="cash"?"개인현금":"회사자금"}`,createdAt:a}),await he(t,le("loan","사업대출 상환",-o,`이자 ${F(c)} · 원금 ${F(d)}`)),u+h<=0?"사업대출 전액 상환 완료 🎉":`상환 완료 (잔액 ${F(u+h)})`}function Rc(t){return String(t||"").replace(/[<>{}\[\]\\/]/g,"").trim().slice(0,24)}function Nc(t){return Math.max(1,Math.floor(zs*(1-Ec(t))))}async function Pc(t,e,n){if(n.company)throw new Error("이미 회사를 보유하고 있습니다. (유저당 1개)");const s=Rc(e.name);if(!s)throw new Error("회사명을 입력하세요.");if(!He[e.sector])throw new Error("업종을 선택하세요.");if(!Ut[e.strategy])throw new Error("시작 전략을 선택하세요.");const i=Nc(n.bank),r=Date.now(),o=e.payMethod||"cash";if(o==="card"){const l=await Tc(t,i,"회사 설립");if(l<=0)throw new Error(kc(l))}else if(o==="loan"){const l=Br(n.bank),c=n.bank&&n.bank.businessLoan||{};if(l<=0||p(c.principal)+i>l)throw new Error("사업대출 한도가 부족합니다. 현금/카드로 설립하거나 한도를 확인하세요.");await Ce(Sn(t),{principal:p(c.principal)+i,interest:p(c.interest),limit:l,companyId:"pending",lastSettledAt:p(c.lastSettledAt)||r,createdAt:p(c.createdAt)||r,updatedAt:r})}else if(!(await de(Gs(t),c=>{const d=c==null?p(n.cash):p(c);if(!(d<i))return d-i})).committed)throw new Error("보유 현금이 부족합니다. (Bank 사업대출/카드 결제를 이용할 수 있습니다)");const a=gc(t,n.nickname,{name:s,slogan:e.slogan,sector:e.sector,strategy:e.strategy},r);return await Dr(se(t),Vr(a)),o==="loan"&&await Ce(Sn(t),{companyId:a.companyId}),await he(t,le("found","회사 설립",-i,`${He[e.sector].label} · ${o==="card"?"카드 결제":o==="loan"?"사업대출":"현금"}`)),await nt(Q(z().db,`rooms/${G}/companyNews`),{uid:t,companyName:s,type:"found",title:`${s} 설립`,body:`${He[e.sector].label} 업종의 새 회사가 STONK 타이쿤에 등장했습니다.`,impact:"neutral",createdAt:r}),`${s} 설립 완료! (${He[e.sector].label})`}async function Oc(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");if(!(await de(Gs(t),r=>{const o=r==null?p(n.cash):p(r);if(!(o<e))return o-e})).committed)throw new Error("보유 현금이 부족합니다.");const i=Date.now();return await de(se(t),r=>r&&(r.companyCash=p(r.companyCash)+e,r.companyValue=p(r.companyValue)+Math.floor(e*.3),r.updatedAt=i,r)),await he(t,le("invest","회사에 출자",e,"개인 현금 → 회사 자금")),`출자 완료 (+${F(e)} 회사 자금)`}async function Mc(t,e,n){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!n.company||p(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다.");const s=Date.now();return await de(se(t),i=>{if(!i)return i;if(!(p(i.companyCash)<e))return i.companyCash=p(i.companyCash)-e,i.brandScore=U(H(i.brandScore)-1,0,100),i.riskScore=U(H(i.riskScore)+1,0,100),i.updatedAt=s,i}),await de(Gs(t),i=>p(i)+e),await he(t,le("withdraw","회사 자금 인출",e,"회사 자금 → 개인 현금")),`인출 완료 (+${F(e)} 개인 현금)`}async function Hr(t,e,n,s,i){if(s==="card"){const r=await Tc(t,e,i);if(r<=0)throw new Error(kc(r));return"card"}if(!n.company||p(n.company.companyCash)<e)throw new Error("회사 자금이 부족합니다. (출자/사업대출/카드 결제를 이용하세요)");return await de(se(t),r=>{if(!r)return r;if(!(p(r.companyCash)<e))return r.companyCash=p(r.companyCash)-e,r.updatedAt=Date.now(),r}),"company"}async function Lc(t,e,n,s){if(!oe[e])throw new Error("직원 타입을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const i=yc(n.company,e);await Hr(t,i,n,s,`${oe[e].label} 고용`);const r=Date.now();return await de(se(t),o=>{if(!o)return o;o.employees=o.employees||{};const a=o.employees[e]||{count:0,level:1};return a.count=p(a.count)+1,a.level=Math.max(1,p(a.level)),o.employees[e]=a,qr(o,e,1),o.updatedAt=r,o}),await he(t,le("hire",`${oe[e].label} 고용`,-i,s==="card"?"카드 결제":"회사 자금")),`${oe[e].label} 고용 완료`}async function Dc(t,e,n){if(!n.company)throw new Error("회사가 없습니다.");const s=(n.company.employees||{})[e];if(!s||p(s.count)<=0)throw new Error("해고할 직원이 없습니다.");return await de(se(t),i=>{if(!i)return i;const r=(i.employees||{})[e];if(!(!r||p(r.count)<=0))return r.count=p(r.count)-1,qr(i,e,-1),i.updatedAt=Date.now(),i}),await he(t,le("fire",`${oe[e].label} 해고`,0,"인건비 절감")),`${oe[e].label} 1명 해고`}function xc(t,e){const n=(t.employees||{})[e]||{};return Math.floor((oe[e]||{}).cost*.6*Math.max(1,p(n.level)))}async function jr(t,e,n,s){if(!n.company)throw new Error("회사가 없습니다.");const i=(n.company.employees||{})[e];if(!i||p(i.count)<=0)throw new Error("먼저 직원을 고용하세요.");const r=xc(n.company,e);return await Hr(t,r,n,s,`${oe[e].label} 레벨업`),await de(se(t),o=>{if(!o)return o;const a=(o.employees||{})[e];if(a)return a.level=Math.max(1,p(a.level))+1,qr(o,e,.5),o.updatedAt=Date.now(),o}),await he(t,le("levelup",`${oe[e].label} 레벨업`,-r,"")),`${oe[e].label} 레벨업 완료`}function qr(t,e,n){e==="marketer"?t.brandScore=U(H(t.brandScore)+3*n,0,100):e==="risk"?t.riskScore=U(H(t.riskScore)-4*n,0,100):e==="researcher"?t.ipoReadiness=U(H(t.ipoReadiness)+2*n,0,100):e==="brand"?t.brandScore=U(H(t.brandScore)+2*n,0,100):e==="dev"&&(t.growthRate=H(t.growthRate))}async function $c(t,e,n,s){if(!je[e])throw new Error("시설을 확인하세요.");if(!n.company)throw new Error("먼저 회사를 설립하세요.");const i=vc(n.company,e);return await Hr(t,i,n,s,`${je[e].label} 업그레이드`),await de(se(t),r=>{if(!r)return r;r.facilities=r.facilities||{};const o=r.facilities[e]||{level:0};return o.level=p(o.level)+1,r.facilities[e]=o,e==="marketing"&&(r.brandScore=U(H(r.brandScore)+3,0,100)),e==="security"&&(r.riskScore=U(H(r.riskScore)-3,0,100)),r.companyValue=p(r.companyValue)+Math.floor(i*.4),r.updatedAt=Date.now(),r}),await he(t,le("facility",`${je[e].label} 업그레이드`,-i,s==="card"?"카드 결제":"회사 자금")),`${je[e].label} 업그레이드 완료`}async function Fc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=Date.now(),s=Ks(e.company,n,e.event);if(!s.applied)throw new Error("정산할 내용이 없습니다.");const i=Sc(e.company,s,n);return i.ipoReadiness=Ts(i,e.bank),await Ce(se(t),Vr(i)),await he(t,le("settle","실적 정산",s.profit,`매출 ${F(s.revenue)} · 비용 ${F(s.cost)}${s.eventTitle?" · "+s.eventTitle:""}`)),s.profit>=0?`정산 완료: 순이익 +${F(s.profit)}`:`정산 완료: 손실 ${F(s.profit)} (경영 주의)`}async function Uc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=Cc(e.company,e.bank);if(!n)throw new Error("아직 다음 단계 조건을 충족하지 않았습니다.");return await Ce(se(t),{stage:n,level:p(e.company.level)+1,updatedAt:Date.now()}),await he(t,le("stage","단계 승급",0,`${Ct[e.company.stage]} → ${Ct[n]}`)),await nt(Q(z().db,`rooms/${G}/companyNews`),{uid:t,companyName:e.company.name,type:"stage",title:`${e.company.name} ${Ct[n]} 승급`,body:`${e.company.name}이(가) ${Ct[n]} 단계로 성장했습니다.`,impact:"up",createdAt:Date.now()}),`🎉 ${Ct[n]} 단계로 승급했습니다!`}function Bc(t,e){const n=Bn((e&&e.creditScore)!=null?e.creditScore:60);e&&e.businessLoan&&p(e.businessLoan.principal)+p(e.businessLoan.interest);const s=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;return[{ok:t.companyValue>=5e9,label:"회사 가치 50억원 이상"},{ok:t.brandScore>=70,label:"브랜드 점수 70 이상"},{ok:t.riskScore<=40,label:"리스크 점수 40 이하"},{ok:t.lastProfit>0,label:"최근 순이익 플러스"},{ok:Bt[n]>=Bt.B,label:"Bank 신용등급 B 이상"},{ok:!s,label:"사업대출 연체 없음"}]}async function Wc(t,e){if(!e.company)throw new Error("회사가 없습니다.");const n=e.company;if(n.ipoReadiness<100)throw new Error("IPO 준비도가 100%가 아닙니다.");if(!Bc(n,e.bank).every(l=>l.ok))throw new Error("IPO 체크리스트를 모두 충족해야 합니다.");const i=Date.now(),r=("STK"+(n.name.replace(/[^A-Za-z0-9가-힣]/g,"").slice(0,3).toUpperCase()||"CO")+String(i%100)).slice(0,8),o=Math.max(1e3,Math.floor(n.companyValue/1e6)),a=n.companyValue;return await Dr(Q(z().db,`rooms/${G}/companyMarket/${t}`),{listed:!1,status:"candidate",ticker:r,ipoPrice:o,marketCap:a,sector:n.sector,companyName:n.name,listedAt:0,createdAt:i,updatedAt:i}),await Ce(se(t),{stage:"LISTED",level:p(n.level)+1,updatedAt:i}),await he(t,le("ipo","IPO 상장 후보 등록",0,`티커 ${r} · 공모가 ${F(o)}`)),await nt(Q(z().db,`rooms/${G}/companyNews`),{uid:t,companyName:n.name,type:"ipo",title:`${n.name} 상장 후보 등록`,body:`${n.name}이(가) IPO 심사를 통과해 상장 후보(${r})로 등록되었습니다. Battle 종목 편입은 v3.1에서 진행됩니다.`,impact:"up",createdAt:i}),`🏆 IPO 상장 후보 등록 완료! (티커 ${r})`}const Ug=Object.freeze(Object.defineProperty({__proto__:null,BIZ_LIMIT_BY_GRADE:Ic,BIZ_LOAN_RATE_DAY:$r,EMPLOYEES:oe,EMPLOYEE_IDS:fc,FACILITIES:je,FACILITY_IDS:pc,FOUND_COST:zs,ROOM:G,SECTORS:He,SECTOR_IDS:Ng,SETTLE_MIN_MS:xr,STAGES:mc,STAGE_LABEL:Ct,STRATEGIES:Ut,applyIpo:Wc,bizLoanLimit:Br,clamp:U,computeIpo:Ts,computeSettle:Ks,defaultCompany:gc,empCount:Fr,employeeCost:yc,employeeLevelCost:xc,eventEffects:bc,facilityCost:vc,facilityTotal:Ur,fireEmployee:Dc,foundCompany:Pc,foundCost:Nc,foundDiscount:Ec,gradeFromScore:Bn,hireEmployee:Lc,int:p,investToCompany:Oc,ipoChecklist:Bc,levelUpEmployee:jr,loadState:Wr,logItem:le,nextStage:Cc,num:H,promoteStage:Uc,repayBusinessLoan:xi,resolveEvent:wc,sanitizeName:Rc,settleNow:Fc,stageRank:Pg,takeBusinessLoan:Ac,upgradeFacility:$c,vipRank:Di,withdrawFromCompany:Mc,won:F},Symbol.toStringTag,{value:"Module"})),{won:E,int:P,num:Bg,SECTORS:Z,SECTOR_IDS:Vc,STRATEGIES:Yn,EMPLOYEES:Hc,EMPLOYEE_IDS:jc,FACILITIES:qc,FACILITY_IDS:zc,STAGE_LABEL:Wt,stageRank:Wg,empCount:Wn,facilityTotal:hn,facilityCost:Gc,employeeCost:Kc,employeeLevelCost:Yc,foundCost:zr,foundDiscount:Qc,gradeFromScore:Jc,bizLoanLimit:Vg,nextStage:Hg,ipoChecklist:jg}=Ug,qg="yaV8N60yIiUggaWNpNF2VhkCwxb2",W=document.getElementById("app");let g=null,ce="dashboard",Xc=!1,Je=!1,ae="cash",ie={name:"",sector:"fintech",strategy:"stable",slogan:""},$i=!1,ks=null,As=null;zg();async function zg(){if(!Ig){oa("Firebase 설정이 비어 있습니다.");return}Kg();let t=null;try{t=await Cg()}catch{}if(!t){Rg({message:"STONK Home에서 로그인 후 이용해 주세요. 같은 계정의 자산이 그대로 연결됩니다."}),Yg();return}try{Xc=t.uid===qg||String(t.email||"").toLowerCase()==="tomem@naver.com",g=await Wr(t.uid),Te(),Gg()}catch(e){console.error("[company] 로드 실패:",e),oa("회사 데이터를 불러오지 못했습니다: "+(e&&e.message))}}async function Zc(){if(g){try{g=await Wr(g.uid)}catch(t){console.warn(t)}Te()}}function L(t){return String(t??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Tn(t,e="ok"){const n=document.createElement("div");n.className="co-toast "+e,n.textContent=t,document.body.appendChild(n),setTimeout(()=>{n.classList.add("hide"),setTimeout(()=>n.remove(),280)},2400)}async function ye(t){if(!Je){Je=!0;try{const e=await t();e&&Tn(e,"ok"),await Zc()}catch(e){Tn(e&&e.message||"오류가 발생했습니다.","err")}finally{Je=!1}}}function nn(t){const e=document.getElementById(t);return e?Math.floor(Number(e.value)||0):0}function Gr(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function Gg(){if(g&&g.settleFeed&&g.settleFeed.applied){const t=g.settleFeed.profit;Tn(`실적 정산: ${t>=0?"+":""}${E(t)}`,t>=0?"ok":"warn")}}function Kg(){W.innerHTML='<div class="co-center"><div class="co-spin"></div><p>STONK Company 연결 중…</p></div>'}function oa(t){W.innerHTML=`<div class="co-center"><h2>⚠️ 오류</h2><p>${L(t)}</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로</a></div>`}function Yg(){W.innerHTML='<div class="co-center"><div class="co-logo"><span class="co-mark">🏢</span><b>STONK</b> Company</div><h2>로그인이 필요합니다</h2><p class="muted">STONK Home에서 로그인 후 이용해 주세요.</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로 이동</a></div>'}function Te(){if(!g)return;g.company;const t=g.bank||{};W.className=t.vipTier==="BLACK"?"is-black":"";const e=[["dashboard","대시보드"],["company","회사정보"],["employees","직원"],["facilities","시설"],["funds","자금/Bank"],["ipo","IPO"],["logs","뉴스/로그"]];W.innerHTML=`
    <header class="co-header">
      <a class="co-brand" href="#" data-home title="STONK Company 메인"><span class="co-mark">🏢</span><b>STONK</b> Company</a>
      <div class="co-nav">
        <a href="../STONK-Home/index.html">홈</a>
        <a href="../STONK-Battle/index.html">주식시장</a>
        <a href="../STONK-Bank/index.html">은행</a>
        <a href="../STONK-Board/index.html">주식소식</a>
        ${Xc?'<a href="../STONK-Admin/market-admin.html">관리자</a>':""}
      </div>
      <div class="co-user"><span class="co-nick">${L(g.nickname)}</span>${t.vipTier&&t.vipTier!=="NORMAL"?`<span class="co-vip v-${t.vipTier}">${eu(t.vipTier)}</span>`:""}</div>
    </header>
    <nav class="co-tabs">${e.map(([n,s])=>`<button class="co-tab ${ce===n?"active":""}" data-tab="${n}">${s}</button>`).join("")}</nav>
    <main class="co-main">${Jg()}</main>
    <footer class="co-footer">STONK Company는 게임머니 기반 경영 시스템입니다. 실제 회사 설립·투자·주식과 무관합니다.</footer>`,Cv()}const Qg={NORMAL:"일반",SILVER:"실버",GOLD:"골드",PLATINUM:"플래티넘",BLACK:"블랙"};function eu(t){return Qg[t]||"일반"}function Jg(){return!g.company&&ce!=="dashboard"&&ce!=="company"&&(ce="dashboard"),ce==="company"?gv():ce==="employees"?vv():ce==="facilities"?yv():ce==="funds"?bv():ce==="ipo"?wv():ce==="logs"?Iv():Zg()}function Fi(){const t=g.event;return t?`<div class="co-event"><span>📰</span><div><b>오늘의 금융 이벤트 · ${L(t.title)}</b><small>Bank 이벤트가 회사 가치·사업대출에 소폭 반영됩니다. (게임머니)</small></div></div>`:""}function Xg(t){const e=Math.min(5,1+Math.floor(hn(t)/2)+Wg(t.stage)),n=(g.bank||{}).vipTier==="BLACK";return`<div class="co-hq tier-${e} ${n?"black":""}">
    <div class="hq-sky"></div>
    <div class="hq-building">${"🏢".repeat(Math.min(3,1+Math.floor(hn(t)/4)))}</div>
    <div class="hq-meta"><b>${L(t.name)}</b><span>${Z[t.sector].icon} ${Z[t.sector].label} · ${Wt[t.stage]}</span>
      <small>직원 ${Wn(t)}명 · 시설 Lv.${hn(t)} · 브랜드 ${P(t.brandScore)}</small></div>
  </div>`}function fn(t,e,n){return`<div class="co-gauge"><div class="cg-head"><span>${t}</span><b>${P(e)}%</b></div><div class="cg-bar ${n||""}"><span style="width:${Math.max(0,Math.min(100,P(e)))}%"></span></div></div>`}function R(t,e,n){return`<div class="co-row"><span>${t}</span><b class="${n||""}">${e}</b></div>`}function Zg(){const t=g.company,e=g.bank||{};if(!t){const o=zr(e),a=Qc(e);return`${Fi()}
      <div class="co-card hero">
        <h2>아직 설립한 회사가 없습니다.</h2>
        <p class="muted">내 회사를 세우고, 키우고, 상장시키는 <b>STONK 타이쿤</b>을 시작하세요. 모든 금액은 게임머니입니다.</p>
        <div class="co-row"><span>설립 비용</span><b>${a>0?`<s class="muted">${E(zs)}</s> ${E(o)} <small class="ok">${Math.round(a*100)}% 할인</small>`:E(o)}</b></div>
        <div class="co-row"><span>보유 현금</span><b>${E(g.cash)}</b></div>
        <button class="co-btn primary big" data-tab="company">회사 설립하러 가기</button>
        <p class="co-note">현금이 부족하면 자금/Bank 탭에서 <b>사업대출</b>을 받거나 <b>STONK Card</b>로 결제할 수 있습니다.</p>
      </div>
      <div class="co-grid">${Vc.slice(0,6).map(l=>tv(l)).join("")}</div>`}const n=t.ipoReadiness,s=Hg(t,e),i=e.businessLoan||{},r=P(i.principal)+P(i.interest);return $i?mv(t,e):`${Fi()}
    <div class="co-grid">
      <div class="co-card span2 office-card">
        <h3>라이브 오피스 <span class="co-tag">${Z[t.sector].icon} ${Z[t.sector].label} · ${Wt[t.stage]}</span>
          <button class="co-btn ghost small" data-act="photo" style="float:right">📷 스냅샷</button></h3>
        ${nu(t,e)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${s?`<button class="co-btn gold" data-act="promote">⬆️ ${Wt[s]} 승급</button>`:""}
        </div>
      </div>
      <div class="co-card office-status">${pv(t,e)}</div>
      <div class="co-card">
        <h3>경영 지표</h3>
        ${R("회사 가치",E(t.companyValue))}
        ${R("회사 자금",E(t.companyCash),t.companyCash<=0?"warn":"")}
        ${R("최근 순이익",(t.lastProfit>=0?"+":"")+E(t.lastProfit),t.lastProfit<0?"warn":"ok")}
        ${R("누적 매출 / 비용",E(t.totalRevenue)+" / "+E(t.totalCost))}
        ${R("성장률",(Bg(t.growthRate)*100).toFixed(2)+"%")}
      </div>
      <div class="co-card">
        <h3>회사 상태</h3>
        ${fn("IPO 준비도",n,n>=70?"ok":"")}
        ${fn("브랜드 점수",t.brandScore,"blue")}
        ${fn("리스크 점수",t.riskScore,t.riskScore>60?"danger":"warn")}
      </div>
      <div class="co-card">
        <h3>Bank 연동</h3>
        ${R("신용등급",Jc(e.creditScore!=null?e.creditScore:60))}
        ${R("VIP 등급",eu(e.vipTier))}
        ${R("카드",ev(e.card))}
        ${R("사업대출",r>0?E(r):"없음",r>0?"warn":"")}
        <button class="co-btn ghost small" data-tab="funds">자금/Bank 관리</button>
      </div>
      <div class="co-card span2">
        <h3>최근 경영 로그</h3>
        ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.slice(0,6).map(au).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
      </div>
    </div>`}function ev(t){return t=t||{},t.enabled?t.lost?"분실":t.suspended?"정지":t.overdue?"미납":"정상":"미발급"}function tv(t){const e=Z[t];return`<div class="co-card sector-mini"><div class="sm-ico">${e.icon}</div><b>${e.label}</b><small>${L(e.note)}</small></div>`}const kn={dev:{e:"💻",cls:"dev",act:"typing",bub:"코드 작성 중"},marketer:{e:"📣",cls:"marketer",act:"presenting",bub:"신규 캠페인 준비 중"},sales:{e:"🤝",cls:"sales",act:"walking",bub:"고객 미팅 준비 중"},account:{e:"🧮",cls:"account",act:"typing",bub:"비용 정산 중"},risk:{e:"🧯",cls:"risk",act:"checking",bub:"리스크 점검 중"},researcher:{e:"🔭",cls:"researcher",act:"researching",bub:"IPO 자료 검토 중"},ops:{e:"🛠️",cls:"ops",act:"walking",bub:"사무실 순찰 중"},brand:{e:"✨",cls:"brand",act:"presenting",bub:"브랜드 지표 상승 중"}},nv={office:"🏢",server:"🖥️",lab:"🧪",marketing:"📈",accounting:"📒",security:"🔒"},sv=16;function iv(t){const e=[];for(const n of jc){const s=(t.employees||{})[n]||{},i=Math.max(0,P(s.count)),r=Math.max(1,P(s.level));for(let o=0;o<i;o++)e.push({type:n,level:r})}return e}const rv={entrance:{x:3,y:5,w:24,h:26,label:"입구"},desk:{x:30,y:5,w:40,h:30,label:"책상"},server:{x:73,y:5,w:24,h:26,label:"서버실"},meeting:{x:3,y:37,w:24,h:26,label:"회의실"},corridor:{x:29,y:40,w:42,h:18,label:"복도"},lab:{x:73,y:37,w:24,h:26,label:"연구소"},accounting:{x:3,y:68,w:24,h:27,label:"회계실"},lounge:{x:29,y:62,w:42,h:33,label:"휴게"},security:{x:73,y:68,w:24,h:27,label:"보안실"}};function ov(t){let e=2166136261;t=String(t);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e3/1e3}function av(t,e){const n=e.businessLoan?P(e.businessLoan.principal)+P(e.businessLoan.interest):0;return Je?"settle":t.riskScore>60?"risk":t.ipoReadiness>=70&&t.stage!=="LISTED"?"ipo":n>5e7?"loan":Wn(t)<3?"understaff":hn(t)<4?"underfac":"normal"}const lv={settle:["이번 실적 정리 중","매출 데이터 확인 중"],risk:["보안 점검이 필요합니다","리스크 보고서 작성 중"],ipo:["상장 자료 검토 중","IR 자료 준비 중"],loan:["이자 부담을 확인 중","상환 계획 검토 중"],understaff:["인력이 부족합니다","채용이 필요합니다"],underfac:["시설 업그레이드가 필요","서버 공간이 부족합니다"],normal:null};function cv(t,e){const n=lv[e];return n?n[(t._i||0)%n.length]:(kn[t.type]||kn.dev).bub}function tu(t,e){e=e||{};const n=kn[t.type]||kn.dev,s=e.pos?`left:${e.pos.x}%;top:${e.pos.y}%;`:"";return`<div class="emp emp-${n.cls} act-${n.act}${e.arrive?" emp-arrive":""}${e.sit?" sitting":""}" style="${s}--d:${e.i%8*.4}s" data-emp-detail="${t.type}" role="button" tabindex="0" aria-label="${L(n.cls)} 직원 상세">
    <span class="emp-arm la"></span><span class="emp-arm ra"></span>
    <span class="emp-head"></span><span class="emp-body"></span>
    <span class="emp-tag">${n.e}</span>${t.level>1?`<i class="emp-lv">${t.level}</i>`:""}
    ${e.bubble?`<span class="emp-bubble">${L(e.bubble)}</span>`:""}
  </div>`}function sn(t,e,n,s,i,r){const o=As&&As.type===n;return`<div class="fgroup ${s>0?"lv"+Math.min(4,P(s)):"locked"} ${o?"building":""}" style="left:${t}%;top:${e}%" data-fac-detail="${n}" role="button" tabindex="0" aria-label="${L(r)} 상세">
    ${i}<span class="fg-lv">${s>0?"Lv."+s:"🔒"}</span>${o?'<span class="fg-build">공사중</span>':""}</div>`}function nu(t,e){const n=(e||{}).vipTier==="BLACK",s=iv(t),i=s.length,r=typeof window<"u"&&window.innerWidth<=760,o=r?10:sv,a=s.slice(0,o),l=i-a.length;a.forEach((b,x)=>{b._i=x});const c=av(t,e),d=c==="settle"||t.ipoReadiness>=70&&t.stage!=="LISTED",u=b=>P(((t.facilities||{})[b]||{}).level);let h=null,f=r?0:3;const _=(b,x,Qs,qn)=>{let Qt=!1;ks&&ks.type===b.type&&h!==b.type&&(Qt=!0,h=b.type);const wt=f>0&&b._i<4?(f--,cv(b,c)):null;return tu(b,{pos:{x,y:Qs},i:b._i,bubble:wt,arrive:Qt,sit:qn})},w=a.filter(b=>b.type==="dev"||b.type==="account"),I=a.filter(b=>b.type==="sales"||b.type==="ops"),K=a.filter(b=>b.type==="marketer"||b.type==="brand"),fe=a.filter(b=>b.type==="researcher"),_e=a.filter(b=>b.type==="risk"),pe=u("office"),Vn=Math.max(w.length,pe*2+2,3),vt=r?2:3,Hn=r?4:6;let jn="",yt="";for(let b=0;b<Math.min(Vn,Hn);b++){const x=b%vt,Qs=Math.floor(b/vt),qn=30+x*13,Qt=8+Qs*13,wt=w[b];jn+=`<div class="furn desk ${wt?"busy":""}" style="left:${qn}%;top:${Qt}%" data-fac-detail="office" role="button" tabindex="0" aria-label="사무실(책상) 상세"><span class="dk-mon ${wt?"on":""}"></span><span class="dk-top"></span><span class="dk-chair"></span></div>`,wt&&(yt+=_(wt,qn+2,Qt+7,!0))}const bt=u("server"),lu=bt>0?Math.min(3,bt):1;let Kr="";for(let b=0;b<lu;b++)Kr+=`<span class="rack ${bt>0?"":"off"}"><i></i><i></i><i></i></span>`;const cu=["fintech","game","security"].includes(t.sector),uu=sn(75,7,"server",bt,`<div class="racks ${cu?"hot":""}">${Kr}</div>`,"서버실"),Yr=t.ipoReadiness>=60,du=sn(4,39,"marketing",u("marketing"),`<div class="whiteboard ${Yr?"ipo":""}"><span class="wb-line"></span><span class="wb-line s"></span>${Yr?'<span class="wb-graph"></span>':""}</div><div class="mtable"></div>`,"회의실/마케팅"),hu=K.map((b,x)=>_(b,6+x%3*6,51+Math.floor(x/3)*6,!1)).join(""),fu=["bio","robot","semicon"].includes(t.sector),pu=sn(74,39,"lab",u("lab"),`<div class="labtable ${fu?"hot":""}"><span class="flask"></span><span class="bulb ${u("lab")>1?"on":""}"></span></div>`,"연구소"),mu=fe.map((b,x)=>_(b,75+x%2*7,51+Math.floor(x/2)*6,!1)).join(""),_u=sn(4,70,"accounting",u("accounting"),'<div class="cabinet"><i></i><i></i><i></i></div><div class="safe"><span></span></div>',"회계실"),gu=t.riskScore>60,vu=sn(75,70,"security",u("security"),`<div class="secpanel ${gu?"alert":""}"><span class="sp-shield"></span><span class="sp-led"></span></div>`,"보안실"),yu=_e.map((b,x)=>_(b,75+x%2*7,82+Math.floor(x/2)*5,!1)).join(""),bu=I.map((b,x)=>_(b,31+x%4*9+Math.round(ov(t.companyId+"w"+x)*4),44+x%2*7,!1)).join(""),wu=`<div class="furn door" style="left:3%;top:9%"></div>
    <span class="prop" style="left:5%;top:30%">🪴</span><span class="prop" style="left:67%;top:34%">🪴</span>
    <span class="prop" style="left:34%;top:65%">☕</span><div class="furn sofa" style="left:41%;top:67%"></div><span class="prop" style="left:58%;top:65%">📦</span>`,Eu=Object.entries(rv).map(([b,x])=>`<div class="zone zone-${b}" data-zone="${b}" style="left:${x.x}%;top:${x.y}%;width:${x.w}%;height:${x.h}%"></div>`).join("");return`<div class="office stage-${t.stage} sector-${t.sector} ${n?"black":""} ${d?"collab":""} ${Je?"settling":""}" aria-label="라이브 오피스">
    <div class="office-stage">
      <div class="wall"></div><div class="floor"></div>
      ${Eu}
      ${wu}
      ${jn}${uu}${du}${pu}${_u}${vu}
      ${yt}${hu}${mu}${yu}${bu}
      ${d?'<div class="collab-ring" style="left:11%;top:46%"></div>':""}
      ${i===0?'<div class="office-empty">🪑 텅 빈 사무실 — <b>직원을 고용해 회사를 움직여 보세요</b></div>':""}
    </div>
    ${l>0?`<div class="office-more">+${l}명 근무 중</div>`:""}
    <div class="office-tag">클릭해서 직원/시설 상세 보기 · 게임머니 타이쿤</div>
  </div>`}function it(){var t;(t=document.getElementById("officeDetail"))==null||t.remove(),document.querySelectorAll(".hl").forEach(e=>e.classList.remove("hl"))}function su(t){document.querySelectorAll(".hl").forEach(e=>e.classList.remove("hl")),document.querySelectorAll(t).forEach(e=>e.classList.add("hl"))}function iu(t,e){it();const n=document.createElement("div");n.id="officeDetail",n.className="office-detail-dim",n.innerHTML=`<div class="office-detail"><div class="od-top"><b>${L(e)}</b><button class="co-btn ghost small" data-od-x>닫기</button></div>${t}</div>`,document.body.appendChild(n),n.addEventListener("click",s=>{s.target===n&&it()}),n.querySelector("[data-od-x]").onclick=it,n.querySelectorAll("[data-od-hire]").forEach(s=>s.addEventListener("click",()=>{it(),ru(s.dataset.odHire)})),n.querySelectorAll("[data-od-level]").forEach(s=>s.addEventListener("click",()=>{it(),ye(()=>jr(g.uid,s.dataset.odLevel,g,ae==="card"?"card":"company"))})),n.querySelectorAll("[data-od-fac]").forEach(s=>s.addEventListener("click",()=>{it(),ou(s.dataset.odFac)})),n.querySelectorAll("[data-tab]").forEach(s=>s.addEventListener("click",()=>{it(),ce=s.dataset.tab,Te()}))}const uv={dev:"서버실을 업그레이드하면 개발 효율이 더 좋아집니다.",marketer:"마케팅룸을 함께 강화하면 브랜드가 빠르게 오릅니다.",sales:"영업 인원이 많을수록 매출이 늘어납니다.",account:"회계실과 함께 강화하면 비용이 더 절감됩니다.",risk:"보안실을 함께 강화하면 리스크가 더 낮아집니다.",researcher:"연구소 레벨이 높으면 IPO 준비도가 더 빨리 오릅니다.",ops:"운영 매니저는 시설 효율을 높여 줍니다.",brand:"엔터테인먼트 업종에서 특히 효과가 큽니다."};function dv(t){const e=g.company;if(!e)return;const n=(e.employees||{})[t]||{count:0,level:1},s=Hc[t],i=kn[t],r=P(n.count),o=Math.max(1,P(n.level));su(`[data-emp-detail="${t}"]`),iu(`<div class="od-head"><span class="od-prev emp-${i.cls}">${tu({type:t,level:o},{i:0})}</span><div><b>${s.label} Lv.${o}</b><small>현재 업무: ${i.bub}</small></div></div>
    ${R("효과",s.effect)}
    ${R("회사 내 인원 / 평균 레벨",r+"명 · Lv."+o)}
    ${R("고용비 / 레벨업비",E(Kc(e,t))+" / "+E(Yc(e,t)))}
    <p class="co-note">추천: ${L(uv[t]||"레벨업하면 효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-hire="${t}">고용</button><button class="co-btn small" data-od-level="${t}" ${r>0?"":"disabled"}>레벨업</button><button class="co-btn ghost small" data-tab="employees">직원 탭</button></div>`,"직원 상세")}const hv={office:"직원 수용량과 책상이 늘어납니다.",server:"서버 랙이 추가되고 매출 보정이 커집니다.",lab:"연구 장비가 추가되고 성장/IPO 보너스가 커집니다.",marketing:"광고판이 추가되고 브랜드 상승이 커집니다.",accounting:"비용 절감 효과가 커집니다.",security:"리스크 감소 효과가 커집니다."};function fv(t){const e=g.company;if(!e)return;const n=qc[t],s=P(((e.facilities||{})[t]||{}).level);su(`[data-fac-detail="${t}"]`),iu(`<div class="od-head"><span class="od-ico">${nv[t]}</span><div><b>${n.label} Lv.${s}</b><small>${n.effect}</small></div></div>
    <div class="od-gauge"><span style="width:${Math.min(100,s*20)}%"></span></div>
    ${s===0?'<p class="co-note">아직 미설치(잠김) 시설입니다. 업그레이드로 설치하세요.</p>':R("가동률",Math.min(100,40+s*15)+"%")}
    ${R("다음 레벨 / 비용","Lv."+(s+1)+" · "+E(Gc(e,t)))}
    <p class="co-note">다음 레벨: ${L(hv[t]||"효과가 커집니다.")}</p>
    <div class="co-btnrow"><button class="co-btn primary small" data-od-fac="${t}">업그레이드</button><button class="co-btn ghost small" data-tab="facilities">시설 탭</button></div>`,"시설 상세")}function ru(t){ks={type:t},ye(()=>Lc(g.uid,t,g,ae==="card"?"card":"company")).finally(()=>{setTimeout(()=>{ks=null},1300)})}function ou(t){As={type:t},ye(()=>$c(g.uid,t,g,ae==="card"?"card":"company")).finally(()=>{setTimeout(()=>{As=null},1100)})}function pv(t,e){const n=g.event||{},s=Wn(t),i=hn(t),r=t.companyCash>0&&s>0?"활발":s>0?"유지":"정지",o=Math.min(100,Math.round(i/(zc.length*3)*100)),a=e.businessLoan?P(e.businessLoan.principal)+P(e.businessLoan.interest):0,l=[];return s===0?l.push({t:"직원을 고용해 회사를 가동하세요.",tab:"employees"}):s<3&&l.push({t:"직원을 1명 더 고용하면 정산 효율이 좋아집니다.",tab:"employees"}),t.companyCash<=0&&l.push({t:"회사 자금이 부족합니다. 출자/사업대출을 검토하세요.",tab:"funds"}),t.riskScore>60&&l.push({t:"리스크가 높습니다. 보안실 또는 리스크 매니저를 강화하세요.",tab:"facilities"}),t.brandScore<30&&l.push({t:"브랜드가 낮습니다. 마케팅룸/브랜드 매니저를 강화하세요.",tab:"facilities"}),i<4&&l.push({t:"사무실을 업그레이드하면 더 많은 직원을 수용할 수 있습니다.",tab:"facilities"}),t.ipoReadiness>=70&&t.stage!=="LISTED"&&l.push({t:"IPO 준비도 70%↑ — 상장 심사 준비를 시작하세요.",tab:"ipo"}),a>0&&l.push({t:"사업대출 상환 계획을 확인하세요.",tab:"funds"}),n.type==="lowrate"&&l.push({t:"저금리 이벤트 중 — 사업대출 조건이 유리합니다.",tab:"funds"}),(n.type==="highrate"||n.type==="caution")&&l.push({t:"금융 경계 분위기 — 고액 대출/카드 사용에 주의하세요.",tab:"funds"}),l.length||l.push({t:"직원들이 안정적으로 업무 중입니다.",tab:""}),`<h3>오늘의 사무실</h3>
    <div class="co-row"><span>분위기</span><b>${{활발:"활기찬 사무실 🌟",유지:"차분한 사무실 🙂",정지:"조용한 사무실 😴"}[r]}</b></div>
    <div class="co-row"><span>직원 활동도</span><b>${s}명 · ${r}</b></div>
    ${fn("시설 가동률",o,o>=60?"ok":"")}
    <div class="co-row"><span>리스크 경보</span><b class="${t.riskScore>60?"warn":"ok"}">${t.riskScore>60?"주의":"안정"}</b></div>
    <div class="co-row"><span>Bank 이벤트</span><b>${L(n.title||"—")}</b></div>
    <div class="co-row"><span>사업대출 부담</span><b class="${a>0?"warn":""}">${a>0?E(a):"없음"}</b></div>
    <div class="office-recs"><b>다음 추천 행동</b><ul>${l.slice(0,3).map(d=>`<li ${d.tab?`data-tab="${d.tab}" role="button" tabindex="0"`:""}>${L(d.t)}${d.tab?' <i class="rec-go">→</i>':""}</li>`).join("")}</ul></div>`}function mv(t,e){return`<div class="photo-wrap">
    <div class="co-card office-card photo">
      <div class="photo-head"><div><b>${L(t.name)}</b><small>${Z[t.sector].icon} ${Z[t.sector].label} · ${Wt[t.stage]}</small></div>
        <button class="co-btn ghost small" data-act="photo">닫기</button></div>
      ${nu(t,e)}
      <div class="photo-stats">
        <div><span>회사 가치</span><b>${E(t.companyValue)}</b></div>
        <div><span>IPO 준비도</span><b>${P(t.ipoReadiness)}%</b></div>
        <div><span>직원</span><b>${Wn(t)}명</b></div>
        <div><span>단계</span><b>${Wt[t.stage]}</b></div>
      </div>
      <p class="co-note">내 회사 스냅샷 · 게임머니 기반 타이쿤입니다.</p>
    </div>
  </div>`}function _v(t){try{const e=document.createElement("div");e.className="co-settle-dim";const n=t.profit>=0;e.innerHTML=`<div class="co-settle ${n?"good":"bad"}">
      <h3>${n?"📈 실적 정산 완료":"📉 실적 정산 · 손실 주의"}</h3>
      <div class="cs-rows">
        <div><span>매출</span><b class="ok">+${E(t.revenue)}</b></div>
        <div><span>비용</span><b class="warn">−${E(t.cost)}</b></div>
        <div class="cs-profit"><span>순이익</span><b class="cs-count ${n?"ok":"warn"}" data-to="${t.profit}">${n?"+":"−"}${E(0)}</b></div>
        <div><span>회사가치</span><b class="ok">+${E(t.valueGain)}</b></div>
      </div>
      <button class="co-btn primary" data-settle-close>확인</button>
    </div>`,document.body.appendChild(e);const s=()=>e.remove();e.querySelector("[data-settle-close]").onclick=s,e.addEventListener("click",a=>{a.target===e&&s()});const i=e.querySelector(".cs-count"),r=Math.abs(P(t.profit)),o=t.profit>=0?"+":"−";if(Gr()||r===0)i.textContent=o+E(r);else{const a=performance.now(),l=700,c=d=>{const u=Math.min(1,(d-a)/l);i.textContent=o+E(Math.round(r*u)),u<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}setTimeout(()=>{document.body.contains(e)&&s()},6e3)}catch{}}function gv(){const t=g.company,e=g.bank||{};if(t)return`<div class="co-card">
      <h3>회사 정보</h3>
      ${Xg(t)}
      ${R("회사명",L(t.name))}
      ${R("슬로건",L(t.slogan)||"—")}
      ${R("업종",Z[t.sector].icon+" "+Z[t.sector].label)}
      ${R("전략",Yn[t.strategy].label)}
      ${R("단계 / 레벨",Wt[t.stage]+" · Lv."+t.level)}
      ${R("설립일",new Date(P(t.createdAt)).toLocaleDateString("ko-KR"))}
      <p class="co-note">유저당 회사 1개를 운영합니다(v1.0). 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>
    </div>`;const n=zr(e),s=Qc(e);return`${Fi()}
    <div class="co-card">
      <h3>회사 설립 <span class="co-tag">게임머니 타이쿤</span></h3>
      <label class="co-field"><span>회사명</span><input id="foName" maxlength="24" placeholder="예: STONK테크" value="${L(ie.name)}" /></label>
      <label class="co-field"><span>슬로건(선택)</span><input id="foSlogan" maxlength="40" placeholder="예: 세상을 바꾸는 기술" value="${L(ie.slogan)}" /></label>
      <div class="co-sub">업종 선택</div>
      <div class="co-pick">${Vc.map(i=>`<button class="co-opt ${ie.sector===i?"on":""}" data-found-sector="${i}">${Z[i].icon} ${Z[i].label}</button>`).join("")}</div>
      <p class="co-note">${Z[ie.sector].icon} <b>${Z[ie.sector].label}</b> · ${L(Z[ie.sector].note)}</p>
      <div class="co-sub">시작 전략</div>
      <div class="co-pick">${Object.keys(Yn).map(i=>`<button class="co-opt ${ie.strategy===i?"on":""}" data-found-strategy="${i}">${Yn[i].label}</button>`).join("")}</div>
      <p class="co-note">${L(Yn[ie.strategy].note)}</p>
      <div class="co-sub">결제수단</div>
      <div class="co-pick">
        <button class="co-opt ${ae==="cash"?"on":""}" data-pm="cash">현금</button>
        <button class="co-opt ${ae==="card"?"on":""}" data-pm="card">STONK Card</button>
        <button class="co-opt ${ae==="loan"?"on":""}" data-pm="loan">사업대출</button>
      </div>
      <div class="co-row"><span>설립 비용</span><b>${s>0?`<s class="muted">${E(zs)}</s> ${E(n)} <small class="ok">${Math.round(s*100)}% 할인</small>`:E(n)}</b></div>
      <div class="co-row"><span>보유 현금</span><b>${E(g.cash)}</b></div>
      <button class="co-btn primary big" data-act="found">${Z[ie.sector].label} 회사 설립</button>
      <p class="co-note">결제 성공 후에만 회사가 생성됩니다. 카드/사업대출 결제 실패 시 회사는 생성되지 않습니다. 모든 금액은 게임머니입니다.</p>
    </div>`}function vv(){const t=g.company;return t?`<div class="co-card"><h3>직원 결제수단 <span class="co-tag">${Wn(t)}명</span></h3>
    <div class="co-pick"><button class="co-opt ${ae==="company"||ae!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${ae==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${E(t.companyCash)} · 카드는 Bank 청구 예정으로 누적됩니다.</p></div>
    <div class="co-grid">${jc.map(e=>{const n=Hc[e],s=(t.employees||{})[e]||{count:0,level:1};return`<div class="co-card emp">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label}</b><small>${n.effect}</small></div></div>
        ${R("보유 / 레벨",P(s.count)+"명 · Lv."+Math.max(1,P(s.level)))}
        ${R("고용비",E(Kc(t,e)))}
        <div class="co-btnrow">
          <button class="co-btn primary small" data-emp-hire="${e}">고용</button>
          <button class="co-btn small" data-emp-level="${e}" ${P(s.count)>0?"":"disabled"}>레벨업 ${E(Yc(t,e))}</button>
          <button class="co-btn ghost small" data-emp-fire="${e}" ${P(s.count)>0?"":"disabled"}>해고</button>
        </div>
      </div>`}).join("")}</div>`:Ys()}function yv(){const t=g.company;return t?`<div class="co-card"><h3>시설 결제수단</h3>
    <div class="co-pick"><button class="co-opt ${ae!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${ae==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${E(t.companyCash)}. 시설 레벨이 오르면 본사가 커집니다.</p></div>
    <div class="co-grid">${zc.map(e=>{const n=qc[e],s=P(((t.facilities||{})[e]||{}).level);return`<div class="co-card fac">
        <div class="emp-head"><span class="emp-ico">${n.icon}</span><div><b>${n.label} <small class="co-tag">Lv.${s}</small></b><small>${n.effect}</small></div></div>
        ${R("업그레이드 비용",E(Gc(t,e)))}
        <button class="co-btn primary small" data-fac-up="${e}">Lv.${s+1} 업그레이드</button>
      </div>`}).join("")}</div>`:Ys()}function bv(){const t=g.company,e=g.bank||{},n=e.businessLoan||{},s=P(n.principal)+P(n.interest),i=Vg(e);return t?`<div class="co-grid">
    <div class="co-card">
      <h3>자금 이동</h3>
      ${R("개인 현금",E(g.cash))}
      ${R("회사 자금",E(t.companyCash),t.companyCash<=0?"warn":"")}
      <div class="co-amount"><input id="moveAmt" type="number" inputmode="numeric" placeholder="금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn primary" data-act="invest">출자(개인→회사)</button>
        <button class="co-btn" data-act="withdraw">인출(회사→개인)</button>
      </div>
      <p class="co-note">인출 시 브랜드 점수가 소폭 감소하고 리스크가 소폭 증가합니다.</p>
    </div>
    <div class="co-card">
      <h3>Bank 사업대출 <span class="co-tag">개인 대출과 별개</span></h3>
      ${R("신용등급 / 한도",Jc(e.creditScore!=null?e.creditScore:60)+" · "+E(i))}
      ${R("사업대출 잔액",E(s),s>0?"warn":"")}
      ${R("원금 / 이자",E(n.principal)+" / "+E(n.interest))}
      <div class="co-amount"><input id="bizAmt" type="number" inputmode="numeric" placeholder="대출/상환 금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn danger" data-act="bizLoan" ${i<=0?"disabled":""}>사업대출 받기</button>
        <button class="co-btn" data-act="bizRepayCompany" ${s>0?"":"disabled"}>회사자금 상환</button>
        <button class="co-btn ghost" data-act="bizRepayCash" ${s>0?"":"disabled"}>개인현금 상환</button>
      </div>
      <p class="co-note">사업대출금은 <b>회사 자금</b>으로 입금됩니다. 이자 하루 ${($r*100).toFixed(1)}%. 연체 시 리스크가 오릅니다.</p>
    </div>
  </div>`:Ys()}function wv(){const t=g.company,e=g.bank||{};if(!t)return Ys();const n=jg(t,e),s=n.every(r=>r.ok),i=t.ipoReadiness;return`<div class="co-card ipo-card ${e.vipTier==="BLACK"?"black":""}">
      <h3>IPO 준비 ${t.stage==="LISTED"?'<span class="co-tag ok">상장 후보</span>':""}</h3>
      ${fn("IPO 준비도",i,i>=100?"ok":"")}
      <ul class="co-check">${n.map(r=>`<li class="${r.ok?"on":""}">${r.ok?"✅":"⬜"} ${L(r.label)}</li>`).join("")}</ul>
      ${t.stage==="LISTED"?'<p class="co-note ok">상장 후보 등록 완료. Battle 종목 편입 준비 완료 · Board/Wiki 연동 데이터 생성 완료. 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>':`<button class="co-btn gold big" data-act="ipo" ${i>=100&&s?"":"disabled"}>${i>=100?"상장 심사 신청":`준비도 ${i}% (100% 필요)`}</button>
           <p class="co-note">IPO 준비도는 회사 가치·브랜드·순이익·시설·직원에서 오르고 리스크·사업대출 연체로 내려갑니다.</p>`}
    </div>`}const Ev={found:"🏗️",settle:"📊",invest:"💰",withdraw:"🏧",hire:"👤",fire:"👋",levelup:"⬆️",facility:"🏢",loan:"📝",stage:"🎉",ipo:"🏆"};function au(t){return`<li><span class="lg-ico">${Ev[t.type]||"•"}</span><div class="lg-mid"><b>${L(t.title)}</b><small>${L(t.memo||"")}</small></div>${t.amount?`<b class="lg-amt ${t.amount>=0?"plus":"minus"}">${t.amount>=0?"+":"−"}${E(Math.abs(t.amount))}</b>`:""}</li>`}function Iv(){return`<div class="co-card"><h3>경영 로그 / 뉴스</h3>
    ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.map(au).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
    <p class="co-note">회사 뉴스는 Board 연동용(rooms/MAIN/companyNews)으로도 기록됩니다.</p></div>`}function Ys(){return'<div class="co-card"><p class="co-empty">먼저 회사를 설립하세요.</p><button class="co-btn primary" data-tab="company">회사 설립</button></div>'}function Cv(){var t;(t=W.querySelector("[data-home]"))==null||t.addEventListener("click",e=>{e.preventDefault(),ce="dashboard",window.scrollTo(0,0),Te()}),W.querySelectorAll("[data-tab]").forEach(e=>e.addEventListener("click",()=>{ce=e.dataset.tab,Te()})),W.querySelectorAll("[data-found-sector]").forEach(e=>e.addEventListener("click",()=>{ie.sector=e.dataset.foundSector,Ui(),Te()})),W.querySelectorAll("[data-found-strategy]").forEach(e=>e.addEventListener("click",()=>{ie.strategy=e.dataset.foundStrategy,Ui(),Te()})),W.querySelectorAll("[data-pm]").forEach(e=>e.addEventListener("click",()=>{ae=e.dataset.pm,Te()})),W.querySelectorAll("[data-emp-hire]").forEach(e=>e.addEventListener("click",()=>ru(e.dataset.empHire))),W.querySelectorAll("[data-emp-fire]").forEach(e=>e.addEventListener("click",()=>ye(()=>Dc(g.uid,e.dataset.empFire,g)))),W.querySelectorAll("[data-emp-level]").forEach(e=>e.addEventListener("click",()=>ye(()=>jr(g.uid,e.dataset.empLevel,g,ae==="card"?"card":"company")))),W.querySelectorAll("[data-fac-up]").forEach(e=>e.addEventListener("click",()=>ou(e.dataset.facUp))),W.querySelectorAll("[data-emp-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),dv(e.dataset.empDetail)})),W.querySelectorAll("[data-fac-detail]").forEach(e=>e.addEventListener("click",n=>{n.stopPropagation(),fv(e.dataset.facDetail)})),W.querySelectorAll("[data-zone]").forEach(e=>e.addEventListener("click",()=>{const n=e.classList.contains("focus");W.querySelectorAll(".zone.focus").forEach(s=>s.classList.remove("focus")),n||e.classList.add("focus")})),W.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>kv(e.dataset.act)))}function Ui(){const t=document.getElementById("foName"),e=document.getElementById("foSlogan");t&&(ie.name=t.value),e&&(ie.slogan=e.value)}async function Sv(){if(Je)return;Je=!0;const t=document.querySelector(".office");t&&t.classList.add("settling");let e=null;try{e=Ks(g.company,Date.now(),g.event)}catch{}try{await Fc(g.uid,g),await Zc(),e&&e.applied?(_v(e),Tv((e.profit>=0?"+":"−")+E(Math.abs(e.profit)),e.profit>=0)):Tn("정산 완료","ok")}catch(n){Tn(n&&n.message||"정산할 내용이 없습니다.","err")}finally{Je=!1}}function Tv(t,e){try{const n=document.querySelector(".office-stage");if(!n||Gr())return;[{l:42,t:28},{l:60,t:18}].forEach((s,i)=>{const r=document.createElement("div");r.className="office-float "+(e?"up":"down"),r.textContent=i===0?t:e?"📈":"📉",r.style.left=s.l+"%",r.style.top=s.t+"%",r.style.animationDelay=i*.12+"s",n.appendChild(r),setTimeout(()=>r.remove(),1500)})}catch{}}function kv(t){if(t==="found"){Ui();const e=zr(g.bank);return Qn(e,"설립 심사 중...",()=>Pc(g.uid,{...ie,payMethod:ae},g))}if(t==="photo"){$i=!$i,window.scrollTo(0,0),Te();return}if(t==="settle")return Sv();if(t==="promote")return ye(()=>Uc(g.uid,g));if(t==="invest"){const e=nn("moveAmt");return Qn(e,"금고 이체 처리 중...",()=>Oc(g.uid,e,g))}if(t==="withdraw"){const e=nn("moveAmt");return Qn(e,"인출 처리 중...",()=>Mc(g.uid,e,g))}if(t==="bizLoan"){const e=nn("bizAmt");return Qn(e,"대출 심사 중...",()=>Ac(g.uid,e,g))}if(t==="bizRepayCompany")return ye(()=>xi(g.uid,nn("bizAmt"),"company",g));if(t==="bizRepayCash")return ye(()=>xi(g.uid,nn("bizAmt"),"cash",g));if(t==="ipo")return ye(()=>Wc(g.uid,g))}function Av(t){return t=P(t),t>=1e7||g&&g.cash>0&&t>=g.cash*.3}function Qn(t,e,n){if(!Av(t))return ye(n);const s=document.createElement("div");s.className="co-modal-dim",s.innerHTML=`<div class="co-modal"><h3>거래 확인</h3><p class="co-modal-amt">${E(t)}</p><p class="co-note">STONK 가상 게임머니 거래입니다.</p>
    <div class="co-modal-stage" hidden><span class="co-spin sm"></span> <span>${L(e)}</span></div>
    <div class="co-modal-btns"><button class="co-btn" data-mc="cancel">취소</button><button class="co-btn primary" data-mc="ok">확인</button></div></div>`,document.body.appendChild(s);const i=()=>s.remove();s.querySelector('[data-mc="cancel"]').onclick=i,s.addEventListener("click",r=>{r.target===s&&i()}),s.querySelector('[data-mc="ok"]').onclick=()=>{s.querySelector(".co-modal-btns").hidden=!0,s.querySelector(".co-modal-stage").hidden=!1,setTimeout(()=>{i(),ye(n)},Gr()?0:600)}}

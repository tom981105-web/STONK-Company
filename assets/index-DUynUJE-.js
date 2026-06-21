(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var xr={};/**
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
 */const Ko={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw Dt(e)},Dt=function(n){return new Error("Firebase Database ("+Ko.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Yo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(t[d],t[u],t[h],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Yo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Hc;const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qo=function(n){const e=Yo(n);return ki.encodeByteArray(e,!0)},Wn=function(n){return Qo(n).replace(/\./g,"")},Hn=function(n){try{return ki.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jc(n){return Jo(void 0,n)}function Jo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zc(t)||(n[t]=Jo(n[t],e[t]));return n}function zc(n){return n!=="__proto__"}/**
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
 */function Gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qc=()=>Gc().__FIREBASE_DEFAULTS__,Kc=()=>{if(typeof process>"u"||typeof xr>"u")return;const n=xr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hn(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return qc()||Kc()||Yc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xo=n=>{var e,t;return(t=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Qc=n=>{const e=Xo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zo=()=>{var n;return(n=Ri())===null||n===void 0?void 0:n.config},ea=n=>{var e;return(e=Ri())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Jc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wn(JSON.stringify(t)),Wn(JSON.stringify(o)),""].join(".")}/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ai(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Xc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ta(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eu(){const n=ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tu(){return Ko.NODE_ADMIN===!0}function nu(){try{return typeof indexedDB=="object"}catch{return!1}}function su(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const iu="FirebaseError";class et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iu,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ru(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new et(i,a,s)}}function ru(n,e){return n.replace(ou,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ou=/\{\$([^}]+)}/g;/**
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
 */function rn(n){return JSON.parse(n)}function U(n){return JSON.stringify(n)}/**
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
 */const na=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=rn(Hn(r[0])||""),t=rn(Hn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},au=function(n){const e=na(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},lu=function(n){const e=na(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function zn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if($r(r)&&$r(o)){if(!zn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function $r(n){return n!==null&&typeof n=="object"}/**
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
 */function $t(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class cu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function uu(n,e){const t=new du(n,e);return t.subscribe.bind(t)}class du{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hu(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=$s),i.error===void 0&&(i.error=$s),i.complete===void 0&&(i.complete=$s);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $s(){}function fs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const fu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ps=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function K(n){return n&&n._delegate?n._delegate:n}class ot{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class pu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_u(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mu(n){return n===tt?void 0:n}function _u(n){return n.instantiationMode==="EAGER"}/**
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
 */class gu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const vu={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},yu=k.INFO,bu={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},wu=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=bu[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ni{constructor(e){this.name=e,this._logLevel=yu,this._logHandler=wu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Eu=(n,e)=>e.some(t=>n instanceof t);let Fr,Ur;function Iu(){return Fr||(Fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cu(){return Ur||(Ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,Zs=new WeakMap,ia=new WeakMap,Fs=new WeakMap,Pi=new WeakMap;function Su(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(He(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sa.set(t,n)}).catch(()=>{}),Pi.set(e,n),e}function Tu(n){if(Zs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Zs.set(n,e)}let ei={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ia.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ku(n){ei=n(ei)}function Ru(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Us(this),e,...t);return ia.set(s,e.sort?e.sort():[e]),He(s)}:Cu().includes(n)?function(...e){return n.apply(Us(this),e),He(sa.get(this))}:function(...e){return He(n.apply(Us(this),e))}}function Au(n){return typeof n=="function"?Ru(n):(n instanceof IDBTransaction&&Tu(n),Eu(n,Iu())?new Proxy(n,ei):n)}function He(n){if(n instanceof IDBRequest)return Su(n);if(Fs.has(n))return Fs.get(n);const e=Au(n);return e!==n&&(Fs.set(n,e),Pi.set(e,n)),e}const Us=n=>Pi.get(n);function Nu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=He(o);return s&&o.addEventListener("upgradeneeded",l=>{s(He(o.result),l.oldVersion,l.newVersion,He(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Pu=["get","getKey","getAll","getAllKeys","count"],Ou=["put","add","delete","clear"],Bs=new Map;function Br(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bs.get(e))return Bs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ou.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pu.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Bs.set(e,r),r}ku(n=>({...n,get:(e,t,s)=>Br(e,t)||n.get(e,t,s),has:(e,t)=>!!Br(e,t)||n.has(e,t)}));/**
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
 */class Mu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lu(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ti="@firebase/app",Vr="0.10.13";/**
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
 */const Ae=new Ni("@firebase/app"),Du="@firebase/app-compat",xu="@firebase/analytics-compat",$u="@firebase/analytics",Fu="@firebase/app-check-compat",Uu="@firebase/app-check",Bu="@firebase/auth",Vu="@firebase/auth-compat",Wu="@firebase/database",Hu="@firebase/data-connect",ju="@firebase/database-compat",zu="@firebase/functions",Gu="@firebase/functions-compat",qu="@firebase/installations",Ku="@firebase/installations-compat",Yu="@firebase/messaging",Qu="@firebase/messaging-compat",Ju="@firebase/performance",Xu="@firebase/performance-compat",Zu="@firebase/remote-config",ed="@firebase/remote-config-compat",td="@firebase/storage",nd="@firebase/storage-compat",sd="@firebase/firestore",id="@firebase/vertexai-preview",rd="@firebase/firestore-compat",od="firebase",ad="10.14.1";/**
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
 */const ni="[DEFAULT]",ld={[ti]:"fire-core",[Du]:"fire-core-compat",[$u]:"fire-analytics",[xu]:"fire-analytics-compat",[Uu]:"fire-app-check",[Fu]:"fire-app-check-compat",[Bu]:"fire-auth",[Vu]:"fire-auth-compat",[Wu]:"fire-rtdb",[Hu]:"fire-data-connect",[ju]:"fire-rtdb-compat",[zu]:"fire-fn",[Gu]:"fire-fn-compat",[qu]:"fire-iid",[Ku]:"fire-iid-compat",[Yu]:"fire-fcm",[Qu]:"fire-fcm-compat",[Ju]:"fire-perf",[Xu]:"fire-perf-compat",[Zu]:"fire-rc",[ed]:"fire-rc-compat",[td]:"fire-gcs",[nd]:"fire-gcs-compat",[sd]:"fire-fst",[rd]:"fire-fst-compat",[id]:"fire-vertex","fire-js":"fire-js",[od]:"fire-js-all"};/**
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
 */const Gn=new Map,cd=new Map,si=new Map;function Wr(n,e){try{n.container.addComponent(e)}catch(t){Ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function St(n){const e=n.name;if(si.has(e))return Ae.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,n);for(const t of Gn.values())Wr(t,n);for(const t of cd.values())Wr(t,n);return!0}function Oi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ue(n){return n.settings!==void 0}/**
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
 */const ud={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},je=new vn("app","Firebase",ud);/**
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
 */class dd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}/**
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
 */const Ft=ad;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ni,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw je.create("bad-app-name",{appName:String(i)});if(t||(t=Zo()),!t)throw je.create("no-options");const r=Gn.get(i);if(r){if(zn(t,r.options)&&zn(s,r.config))return r;throw je.create("duplicate-app",{appName:i})}const o=new gu(i);for(const l of si.values())o.addComponent(l);const a=new dd(t,s,o);return Gn.set(i,a),a}function oa(n=ni){const e=Gn.get(n);if(!e&&n===ni&&Zo())return ra();if(!e)throw je.create("no-app",{appName:n});return e}function ze(n,e,t){var s;let i=(s=ld[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ae.warn(a.join(" "));return}St(new ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hd="firebase-heartbeat-database",fd=1,on="firebase-heartbeat-store";let Vs=null;function aa(){return Vs||(Vs=Nu(hd,fd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(on)}catch(t){console.warn(t)}}}}).catch(n=>{throw je.create("idb-open",{originalErrorMessage:n.message})})),Vs}async function pd(n){try{const t=(await aa()).transaction(on),s=await t.objectStore(on).get(la(n));return await t.done,s}catch(e){if(e instanceof et)Ae.warn(e.message);else{const t=je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ae.warn(t.message)}}}async function Hr(n,e){try{const s=(await aa()).transaction(on,"readwrite");await s.objectStore(on).put(e,la(n)),await s.done}catch(t){if(t instanceof et)Ae.warn(t.message);else{const s=je.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ae.warn(s.message)}}}function la(n){return`${n.name}!${n.options.appId}`}/**
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
 */const md=1024,_d=30*24*60*60*1e3;class gd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_d}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ae.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jr(),{heartbeatsToSend:s,unsentEntries:i}=vd(this._heartbeatsCache.heartbeats),r=Wn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ae.warn(t),""}}}function jr(){return new Date().toISOString().substring(0,10)}function vd(n,e=md){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),zr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nu()?su().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zr(n){return Wn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bd(n){St(new ot("platform-logger",e=>new Mu(e),"PRIVATE")),St(new ot("heartbeat",e=>new gd(e),"PRIVATE")),ze(ti,Vr,n),ze(ti,Vr,"esm2017"),ze("fire-js","")}bd("");var wd="firebase",Ed="10.14.1";/**
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
 */ze(wd,Ed,"app");function Mi(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function ca(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Id=ca,ua=new vn("auth","Firebase",ca());/**
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
 */const qn=new Ni("@firebase/auth");function Cd(n,...e){qn.logLevel<=k.WARN&&qn.warn(`Auth (${Ft}): ${n}`,...e)}function xn(n,...e){qn.logLevel<=k.ERROR&&qn.error(`Auth (${Ft}): ${n}`,...e)}/**
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
 */function Ne(n,...e){throw Li(n,...e)}function ye(n,...e){return Li(n,...e)}function da(n,e,t){const s=Object.assign(Object.assign({},Id()),{[e]:t});return new vn("auth","Firebase",s).create(e,{appName:n.name})}function it(n){return da(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Li(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ua.create(n,...e)}function y(n,e,...t){if(!n)throw Li(e,...t)}function Ce(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xn(e),new Error(e)}function Pe(n,e){n||Ce(e)}/**
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
 */function ii(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Sd(){return Gr()==="http:"||Gr()==="https:"}function Gr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Td(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sd()||Zc()||"connection"in navigator)?navigator.onLine:!0}function kd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pe(t>e,"Short delay should be less than long delay!"),this.isMobile=Ai()||ta()}get(){return Td()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Di(n,e){Pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ha{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Rd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ad=new yn(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ut(n,e,t,s,i={}){return fa(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$t(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Xc()||(c.referrerPolicy="no-referrer"),ha.fetch()(pa(n,n.config.apiHost,t,a),c)})}async function fa(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rd),e);try{const i=new Pd(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Pn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pn(n,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw da(n,d,c);Ne(n,d)}}catch(i){if(i instanceof et)throw i;Ne(n,"network-request-failed",{message:String(i)})}}async function Nd(n,e,t,s,i={}){const r=await Ut(n,e,t,s,i);return"mfaPendingCredential"in r&&Ne(n,"multi-factor-auth-required",{_serverResponse:r}),r}function pa(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Di(n.config,i):`${n.config.apiScheme}://${i}`}class Pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ye(this.auth,"network-request-failed")),Ad.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=ye(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function Od(n,e){return Ut(n,"POST","/v1/accounts:delete",e)}async function ma(n,e){return Ut(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Md(n,e=!1){const t=K(n),s=await t.getIdToken(e),i=$i(s);y(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Qt(Ws(i.auth_time)),issuedAtTime:Qt(Ws(i.iat)),expirationTime:Qt(Ws(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ws(n){return Number(n)*1e3}function $i(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return xn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hn(t);return i?JSON.parse(i):(xn("Failed to decode base64 JWT payload"),null)}catch(i){return xn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qr(n){const e=$i(n);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function an(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof et&&Ld(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ld({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Dd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ri{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kn(n){var e;const t=n.auth,s=await n.getIdToken(),i=await an(n,ma(t,{idToken:s}));y(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?_a(r.providerUserInfo):[],a=$d(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ri(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function xd(n){const e=K(n);await Kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function _a(n){return n.map(e=>{var{providerId:t}=e,s=Mi(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Fd(n,e){const t=await fa(n,{},async()=>{const s=$t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=pa(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ha.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ud(n,e){return Ut(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
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
 */class bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){y(e.length!==0,"internal-error");const t=qr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Fd(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new bt;return s&&(y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bt,this.toJSON())}_performRefresh(){return Ce("not implemented")}}/**
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
 */function Me(n,e){y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Se{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Mi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ri(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await an(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Md(this,e)}reload(){return xd(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Kn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(it(this.auth));const e=await this.getIdToken();return await an(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,d;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,b=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,_e=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Ie,emailVerified:ge,isAnonymous:Lr,providerData:Ds,stsTokenManager:Dr}=t;y(Ie&&Dr,e,"internal-error");const Bc=bt.fromJSON(this.name,Dr);y(typeof Ie=="string",e,"internal-error"),Me(u,e.name),Me(h,e.name),y(typeof ge=="boolean",e,"internal-error"),y(typeof Lr=="boolean",e,"internal-error"),Me(f,e.name),Me(_,e.name),Me(b,e.name),Me(C,e.name),Me(Y,e.name),Me(_e,e.name);const xs=new Se({uid:Ie,auth:e,email:h,emailVerified:ge,displayName:u,isAnonymous:Lr,photoURL:_,phoneNumber:f,tenantId:b,stsTokenManager:Bc,createdAt:Y,lastLoginAt:_e});return Ds&&Array.isArray(Ds)&&(xs.providerData=Ds.map(Vc=>Object.assign({},Vc))),C&&(xs._redirectEventId=C),xs}static async _fromIdTokenResponse(e,t,s=!1){const i=new bt;i.updateFromServerResponse(t);const r=new Se({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Kn(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];y(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?_a(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new bt;a.updateFromIdToken(s);const l=new Se({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ri(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Kr=new Map;function Te(n){Pe(n instanceof Function,"Expected a class definition");let e=Kr.get(n);return e?(Pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kr.set(n,e),e)}/**
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
 */class ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ga.type="NONE";const Yr=ga;/**
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
 */function $n(n,e,t){return`firebase:${n}:${e}:${t}`}class wt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=$n(this.userKey,i.apiKey,r),this.fullPersistenceKey=$n("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wt(Te(Yr),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Te(Yr);const o=$n(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const u=Se._fromJSON(e,d);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new wt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new wt(r,e,s))}}/**
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
 */function Qr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(va(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ia(e))return"Blackberry";if(Ca(e))return"Webos";if(ya(e))return"Safari";if((e.includes("chrome/")||ba(e))&&!e.includes("edge/"))return"Chrome";if(Ea(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function va(n=ee()){return/firefox\//i.test(n)}function ya(n=ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ba(n=ee()){return/crios\//i.test(n)}function wa(n=ee()){return/iemobile/i.test(n)}function Ea(n=ee()){return/android/i.test(n)}function Ia(n=ee()){return/blackberry/i.test(n)}function Ca(n=ee()){return/webos/i.test(n)}function Fi(n=ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Bd(n=ee()){var e;return Fi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Vd(){return eu()&&document.documentMode===10}function Sa(n=ee()){return Fi(n)||Ea(n)||Ca(n)||Ia(n)||/windows phone/i.test(n)||wa(n)}/**
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
 */function Ta(n,e=[]){let t;switch(n){case"Browser":t=Qr(ee());break;case"Worker":t=`${Qr(ee())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ft}/${s}`}/**
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
 */class Wd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Hd(n,e={}){return Ut(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
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
 */const jd=6;class zd{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:jd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Gd{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jr(this),this.idTokenSubscription=new Jr(this),this.beforeStateQueue=new Wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ua,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Te(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await wt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ma(this,{idToken:e}),s=await Se._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(it(this));const t=e?K(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(it(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(it(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hd(this),t=new zd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ud(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Te(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await wt.create(this,[Te(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ta(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Cd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ui(n){return K(n)}class Jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=uu(t=>this.observer=t)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qd(n){Bi=n}function Kd(n){return Bi.loadJS(n)}function Yd(){return Bi.gapiScript}function Qd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Jd(n,e){const t=Oi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(zn(r,e??{}))return i;Ne(i,"already-initialized")}return t.initialize({options:e})}function Xd(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Te);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Zd(n,e,t){const s=Ui(n);y(s._canInitEmulator,s,"emulator-config-failed"),y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ka(e),{host:o,port:a}=eh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),th()}function ka(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eh(n){const e=ka(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Xr(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Xr(o)}}}function Xr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function th(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ra{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,t){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}/**
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
 */async function Et(n,e){return Nd(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
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
 */const nh="http://localhost";class at extends Ra{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Mi(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new at(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Et(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Et(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Et(e,t)}buildRequest(){const e={requestUri:nh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$t(t)}return e}}/**
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
 */class Aa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bn extends Aa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Le extends bn{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
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
 */class De extends bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return De.credential(t,s)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
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
 */class xe extends bn{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com";xe.PROVIDER_ID="github.com";/**
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
 */class $e extends bn{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return $e.credential(t,s)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
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
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Se._fromIdTokenResponse(e,s,i),o=Zr(s);return new Tt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Zr(s);return new Tt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Zr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Yn extends et{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Yn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Yn(e,t,s,i)}}function Na(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Yn._fromErrorAndOperation(n,r,e,s):r})}async function sh(n,e,t=!1){const s=await an(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tt._forOperation(n,"link",s)}/**
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
 */async function ih(n,e,t=!1){const{auth:s}=n;if(Ue(s.app))return Promise.reject(it(s));const i="reauthenticate";try{const r=await an(n,Na(s,i,e,n),t);y(r.idToken,s,"internal-error");const o=$i(r.idToken);y(o,s,"internal-error");const{sub:a}=o;return y(n.uid===a,s,"user-mismatch"),Tt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ne(s,"user-mismatch"),r}}/**
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
 */async function rh(n,e,t=!1){if(Ue(n.app))return Promise.reject(it(n));const s="signIn",i=await Na(n,s,e),r=await Tt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function oh(n,e,t,s){return K(n).onIdTokenChanged(e,t,s)}function ah(n,e,t){return K(n).beforeAuthStateChanged(e,t)}function lh(n,e,t,s){return K(n).onAuthStateChanged(e,t,s)}const Qn="__sak";/**
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
 */class Pa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qn,"1"),this.storage.removeItem(Qn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ch=1e3,uh=10;class Oa extends Pa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Vd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uh):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ch)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oa.type="LOCAL";const dh=Oa;/**
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
 */class Ma extends Pa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ma.type="SESSION";const La=Ma;/**
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
 */function hh(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ms(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await hh(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
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
 */function Vi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class fh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Vi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function ph(n){be().location.href=n}/**
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
 */function Da(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function mh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _h(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gh(){return Da()?self:null}/**
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
 */const xa="firebaseLocalStorageDb",vh=1,Jn="firebaseLocalStorage",$a="fbase_key";class wn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _s(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function yh(){const n=indexedDB.deleteDatabase(xa);return new wn(n).toPromise()}function oi(){const n=indexedDB.open(xa,vh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Jn,{keyPath:$a})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Jn)?e(s):(s.close(),await yh(),e(await oi()))})})}async function eo(n,e,t){const s=_s(n,!0).put({[$a]:e,value:t});return new wn(s).toPromise()}async function bh(n,e){const t=_s(n,!1).get(e),s=await new wn(t).toPromise();return s===void 0?null:s.value}function to(n,e){const t=_s(n,!0).delete(e);return new wn(t).toPromise()}const wh=800,Eh=3;class Fa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Eh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Da()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(gh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mh(),!this.activeServiceWorker)return;this.sender=new fh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_h()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oi();return await eo(e,Qn,"1"),await to(e,Qn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>eo(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>bh(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>to(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_s(i,!1).getAll();return new wn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fa.type="LOCAL";const Ih=Fa;new yn(3e4,6e4);/**
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
 */function Ch(n,e){return e?Te(e):(y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wi extends Ra{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Et(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Et(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Et(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sh(n){return rh(n.auth,new Wi(n),n.bypassAuthState)}function Th(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),ih(t,new Wi(n),n.bypassAuthState)}async function kh(n){const{auth:e,user:t}=n;return y(t,e,"internal-error"),sh(t,new Wi(n),n.bypassAuthState)}/**
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
 */class Ua{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sh;case"linkViaPopup":case"linkViaRedirect":return kh;case"reauthViaPopup":case"reauthViaRedirect":return Th;default:Ne(this.auth,"internal-error")}}resolve(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rh=new yn(2e3,1e4);class vt extends Ua{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const e=Vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rh.get())};e()}}vt.currentPopupAction=null;/**
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
 */const Ah="pendingRedirect",Fn=new Map;class Nh extends Ua{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Fn.get(this.auth._key());if(!e){try{const s=await Ph(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Fn.set(this.auth._key(),e)}return this.bypassAuthState||Fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ph(n,e){const t=Lh(e),s=Mh(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function Oh(n,e){Fn.set(n._key(),e)}function Mh(n){return Te(n._redirectPersistence)}function Lh(n){return $n(Ah,n.config.apiKey,n.name)}async function Dh(n,e,t=!1){if(Ue(n.app))return Promise.reject(it(n));const s=Ui(n),i=Ch(s,e),o=await new Nh(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const xh=10*60*1e3;class $h{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fh(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ba(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xh&&this.cachedEventUids.clear(),this.cachedEventUids.has(no(e))}saveEventToCache(e){this.cachedEventUids.add(no(e)),this.lastProcessedEventTime=Date.now()}}function no(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ba({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ba(n);default:return!1}}/**
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
 */async function Uh(n,e={}){return Ut(n,"GET","/v1/projects",e)}/**
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
 */const Bh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vh=/^https?/;async function Wh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Uh(n);for(const t of e)try{if(Hh(t))return}catch{}Ne(n,"unauthorized-domain")}function Hh(n){const e=ii(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Vh.test(t))return!1;if(Bh.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const jh=new yn(3e4,6e4);function so(){const n=be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zh(n){return new Promise((e,t)=>{var s,i,r;function o(){so(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{so(),t(ye(n,"network-request-failed"))},timeout:jh.get()})}if(!((i=(s=be().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=be().gapi)===null||r===void 0)&&r.load)o();else{const a=Qd("iframefcb");return be()[a]=()=>{gapi.load?o():t(ye(n,"network-request-failed"))},Kd(`${Yd()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Un=null,e})}let Un=null;function Gh(n){return Un=Un||zh(n),Un}/**
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
 */const qh=new yn(5e3,15e3),Kh="__/auth/iframe",Yh="emulator/auth/iframe",Qh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xh(n){const e=n.config;y(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Di(e,Yh):`https://${n.config.authDomain}/${Kh}`,s={apiKey:e.apiKey,appName:n.name,v:Ft},i=Jh.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${$t(s).slice(1)}`}async function Zh(n){const e=await Gh(n),t=be().gapi;return y(t,n,"internal-error"),e.open({where:document.body,url:Xh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qh,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ye(n,"network-request-failed"),a=be().setTimeout(()=>{r(o)},qh.get());function l(){be().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ef={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tf=500,nf=600,sf="_blank",rf="http://localhost";class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function of(n,e,t,s=tf,i=nf){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ef),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ee().toLowerCase();t&&(a=ba(c)?sf:t),va(c)&&(e=e||rf,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(Bd(c)&&a!=="_self")return af(e||"",a),new io(null);const u=window.open(e||"",a,d);y(u,n,"popup-blocked");try{u.focus()}catch{}return new io(u)}function af(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const lf="__/auth/handler",cf="emulator/auth/handler",uf=encodeURIComponent("fac");async function ro(n,e,t,s,i,r){y(n.config.authDomain,n,"auth-domain-config-required"),y(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ft,eventId:i};if(e instanceof Aa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Xs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof bn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${uf}=${encodeURIComponent(l)}`:"";return`${df(n)}?${$t(a).slice(1)}${c}`}function df({config:n}){return n.emulator?Di(n,cf):`https://${n.authDomain}/${lf}`}/**
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
 */const Hs="webStorageSupport";class hf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=La,this._completeRedirectFn=Dh,this._overrideRedirectResult=Oh}async _openPopup(e,t,s,i){var r;Pe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ro(e,t,s,ii(),i);return of(e,o,Vi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await ro(e,t,s,ii(),i);return ph(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Pe(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Zh(e),s=new $h(e);return t.register("authEvent",i=>(y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hs,{type:Hs},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Hs];o!==void 0&&t(!!o),Ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sa()||ya()||Fi()}}const ff=hf;var oo="@firebase/auth",ao="1.7.9";/**
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
 */class pf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _f(n){St(new ot("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ta(n)},c=new Gd(s,i,r,l);return Xd(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),St(new ot("auth-internal",e=>{const t=Ui(e.getProvider("auth").getImmediate());return(s=>new pf(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(oo,ao,mf(n)),ze(oo,ao,"esm2017")}/**
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
 */const gf=5*60,vf=ea("authIdTokenMaxAge")||gf;let lo=null;const yf=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vf)return;const i=t==null?void 0:t.token;lo!==i&&(lo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bf(n=oa()){const e=Oi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jd(n,{popupRedirectResolver:ff,persistence:[Ih,dh,La]}),s=ea("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=yf(r.toString());ah(t,o,()=>o(t.currentUser)),oh(t,a=>o(a))}}const i=Xo("auth");return i&&Zd(t,`http://${i}`),t}function wf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qd({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=ye("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",wf().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_f("Browser");var co={};const uo="@firebase/database",ho="1.0.8";/**
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
 */let Va="";function Ef(n){Va=n}/**
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
 */class If{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),U(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Cf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new If(e)}}catch{}return new Cf},st=Wa("localStorage"),Sf=Wa("sessionStorage");/**
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
 */const It=new Ni("@firebase/database"),Ha=function(){let n=1;return function(){return n++}}(),ja=function(n){const e=fu(n),t=new cu;t.update(e);const s=t.digest();return ki.encodeByteArray(s)},En=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=En.apply(null,s):typeof s=="object"?e+=U(s):e+=s,e+=" "}return e};let Jt=null,fo=!0;const Tf=function(n,e){m(!0,"Can't turn on custom loggers persistently."),It.logLevel=k.VERBOSE,Jt=It.log.bind(It)},z=function(...n){if(fo===!0&&(fo=!1,Jt===null&&Sf.get("logging_enabled")===!0&&Tf()),Jt){const e=En.apply(null,n);Jt(e)}},In=function(n){return function(...e){z(n,...e)}},ai=function(...n){const e="FIREBASE INTERNAL ERROR: "+En(...n);It.error(e)},Oe=function(...n){const e=`FIREBASE FATAL ERROR: ${En(...n)}`;throw It.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+En(...n);It.warn(e)},kf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Rf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},lt="[MIN_NAME]",Ye="[MAX_NAME]",dt=function(n,e){if(n===e)return 0;if(n===lt||e===Ye)return-1;if(e===lt||n===Ye)return 1;{const t=po(n),s=po(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Af=function(n,e){return n===e?0:n<e?-1:1},Ht=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+U(e))},ji=function(n){if(typeof n!="object"||n===null)return U(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=U(e[s]),t+=":",t+=ji(n[e[s]]);return t+="}",t},za=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ga=function(n){m(!Hi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Nf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Of(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Mf=new RegExp("^-?(0*)\\d{1,10}$"),Lf=-2147483648,Df=2147483647,po=function(n){if(Mf.test(n)){const e=Number(n);if(e>=Lf&&e<=Df)return e}return null},Bt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},xf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $f{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ff{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class Bn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bn.OWNER="owner";/**
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
 */const zi="5",qa="v",Ka="s",Ya="r",Qa="f",Ja=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xa="ls",Za="p",li="ac",el="websocket",tl="long_polling";/**
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
 */class nl{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=st.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&st.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Uf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function sl(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===el)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===tl)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Uf(n)&&(t.ns=n.namespace);const i=[];return q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Bf{constructor(){this.counters_={}}incrementCounter(e,t=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return jc(this.counters_)}}/**
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
 */const js={},zs={};function Gi(n){const e=n.toString();return js[e]||(js[e]=new Bf),js[e]}function Vf(n,e){const t=n.toString();return zs[t]||(zs[t]=e()),zs[t]}/**
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
 */class Wf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Bt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mo="start",Hf="close",jf="pLPCommand",zf="pRTLPCB",il="id",rl="pw",ol="ser",Gf="cb",qf="seg",Kf="ts",Yf="d",Qf="dframe",al=1870,ll=30,Jf=al-ll,Xf=25e3,Zf=3e4;class yt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=In(e),this.stats_=Gi(t),this.urlFn=l=>(this.appCheckToken&&(l[li]=this.appCheckToken),sl(t,tl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zf)),Rf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qi((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mo)this.id=a,this.password=l;else if(o===Hf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[mo]="t",s[ol]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Gf]=this.scriptTagHolder.uniqueCallbackIdentifier),s[qa]=zi,this.transportSessionId&&(s[Ka]=this.transportSessionId),this.lastSessionId&&(s[Xa]=this.lastSessionId),this.applicationId&&(s[Za]=this.applicationId),this.appCheckToken&&(s[li]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ja.test(location.hostname)&&(s[Ya]=Qa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yt.forceAllow_=!0}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){return yt.forceAllow_?!0:!yt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Nf()&&!Pf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Qo(t),i=za(s,Jf);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Qf]="t",s[il]=e,s[rl]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=U(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ha(),window[jf+this.uniqueCallbackIdentifier]=e,window[zf+this.uniqueCallbackIdentifier]=t,this.myIFrame=qi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[il]=this.myID,e[rl]=this.myPW,e[ol]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ll+s.length<=al;){const o=this.pendingSegs.shift();s=s+"&"+qf+i+"="+o.seg+"&"+Kf+i+"="+o.ts+"&"+Yf+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Xf)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ep=16384,tp=45e3;let Xn=null;typeof MozWebSocket<"u"?Xn=MozWebSocket:typeof WebSocket<"u"&&(Xn=WebSocket);class he{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=In(this.connId),this.stats_=Gi(t),this.connURL=he.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[qa]=zi,typeof location<"u"&&location.hostname&&Ja.test(location.hostname)&&(o[Ya]=Qa),t&&(o[Ka]=t),s&&(o[Xa]=s),i&&(o[li]=i),r&&(o[Za]=r),sl(e,el,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,st.set("previous_websocket_failure",!0);try{let s;tu(),this.mySock=new Xn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){he.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xn!==null&&!he.forceDisallow_}static previouslyFailed(){return st.isInMemoryStorage||st.get("previous_websocket_failure")===!0}markConnectionHealthy(){st.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=rn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=U(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=za(t,ep);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}he.responsesRequiredToBeHealthy=2;he.healthyTimeout=3e4;/**
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
 */class ln{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yt,he]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=he&&he.isAvailable();let s=t&&!he.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[he];else{const i=this.transports_=[];for(const r of ln.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ln.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ln.globalTransportInitialized_=!1;/**
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
 */const np=6e4,sp=5e3,ip=10*1024,rp=100*1024,Gs="t",_o="d",op="s",go="r",ap="e",vo="o",yo="a",bo="n",wo="p",lp="h";class cp{constructor(e,t,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=In("c:"+this.id+":"),this.transportManager_=new ln(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ip?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gs in e){const t=e[Gs];t===yo?this.upgradeIfSecondaryHealthy_():t===go?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===vo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ht("t",e),s=Ht("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ht("t",e),s=Ht("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ht(Gs,e);if(_o in e){const s=e[_o];if(t===lp){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===bo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===op?this.onConnectionShutdown_(s):t===go?this.onReset_(s):t===ap?ai("Server Error: "+s):t===vo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ai("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),zi!==s&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Xt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(np))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(st.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cl{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ul{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Zn extends ul{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ai()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Eo=32,Io=768;class R{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new R("")}function w(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qe(n){return n.pieces_.length-n.pieceNum_}function N(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new R(n.pieces_,e)}function Ki(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function up(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function cn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function dl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new R(e,0)}function M(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof R)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new R(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function X(n,e){const t=w(n),s=w(e);if(t===null)return e;if(t===s)return X(N(n),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function dp(n,e){const t=cn(n,0),s=cn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=dt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Yi(n,e){if(Qe(n)!==Qe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function de(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Qe(n)>Qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class hp{constructor(e,t){this.errorPrefix_=t,this.parts_=cn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ps(this.parts_[s]);hl(this)}}function fp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ps(e),hl(n)}function pp(n){const e=n.parts_.pop();n.byteLength_-=ps(e),n.parts_.length>0&&(n.byteLength_-=1)}function hl(n){if(n.byteLength_>Io)throw new Error(n.errorPrefix_+"has a key path longer than "+Io+" bytes ("+n.byteLength_+").");if(n.parts_.length>Eo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eo+") or object contains a cycle "+nt(n))}function nt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Qi extends ul{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Qi}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const jt=1e3,mp=60*5*1e3,Co=30*1e3,_p=1.3,gp=3e4,vp="server_kill",So=3;class Re extends cl{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=In("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jt,this.maxReconnectDelay_=mp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(U(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new xt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Re.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&me(e,"w")){const s=rt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Co)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=au(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+U(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ai("Unrecognized action received from server: "+U(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gp&&(this.reconnectDelay_=jt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_p)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new cp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Z(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(vp)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Z(u),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xs(this.interruptReasons_)&&(this.reconnectDelay_=jt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ji(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new R(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=So&&(this.reconnectDelay_=Co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=So&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Va.replace(/\./g,"-")]=1,Ai()?e["framework.cordova"]=1:ta()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zn.getInstance().currentlyOnline();return Xs(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
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
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
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
 */class gs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(lt,e),i=new E(lt,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
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
 */let On;class fl extends gs{static get __EMPTY_NODE(){return On}static set __EMPTY_NODE(e){On=e}compare(e,t){return dt(e.name,t.name)}isDefinedOn(e){throw Dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(Ye,On)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,On)}toString(){return".key"}}const Ge=new fl;/**
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
 */class Mn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class W{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??W.RED,this.left=i??se.EMPTY_NODE,this.right=r??se.EMPTY_NODE}copy(e,t,s,i,r){return new W(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return se.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}W.RED=!0;W.BLACK=!1;class yp{copy(e,t,s,i,r){return this}insert(e,t,s){return new W(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class se{constructor(e,t=se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,W.BLACK,null,null))}remove(e){return new se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,W.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Mn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Mn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Mn(this.root_,null,this.comparator_,!0,e)}}se.EMPTY_NODE=new yp;/**
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
 */function bp(n,e){return dt(n.name,e.name)}function Ji(n,e){return dt(n,e)}/**
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
 */let ci;function wp(n){ci=n}const pl=function(n){return typeof n=="number"?"number:"+Ga(n):"string:"+n},ml=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else m(n===ci||n.isEmpty(),"priority of unexpected type.");m(n===ci||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let To;class V{constructor(e,t=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ml(this.priorityNode_)}static set __childrenNodeConstructor(e){To=e}static get __childrenNodeConstructor(){return To}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:w(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=w(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ga(this.value_):e+=this.value_,this.lazyHash_=ja(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=V.VALUE_TYPE_ORDER.indexOf(t),r=V.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _l,gl;function Ep(n){_l=n}function Ip(n){gl=n}class Cp extends gs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?dt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Ye,new V("[PRIORITY-POST]",gl))}makePost(e,t){const s=_l(e);return new E(t,new V("[PRIORITY-POST]",s))}toString(){return".priority"}}const P=new Cp;/**
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
 */const Sp=Math.log(2);class Tp{constructor(e){const t=r=>parseInt(Math.log(r)/Sp,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const es=function(n,e,t,s){n.sort(e);const i=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=n[l],h=t?t(u):u,new W(h,u.node,W.BLACK,null,null);{const f=parseInt(d/2,10)+l,_=i(l,f),b=i(f+1,c);return u=n[f],h=t?t(u):u,new W(h,u.node,W.BLACK,_,b)}},r=function(l){let c=null,d=null,u=n.length;const h=function(_,b){const C=u-_,Y=u;u-=_;const _e=i(C+1,Y),Ie=n[C],ge=t?t(Ie):Ie;f(new W(ge,Ie.node,b,null,_e))},f=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const b=l.nextBitIsOne(),C=Math.pow(2,l.count-(_+1));b?h(C,W.BLACK):(h(C,W.BLACK),h(C,W.RED))}return d},o=new Tp(n.length),a=r(o);return new se(s||e,a)};/**
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
 */let qs;const pt={};class ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(pt&&P,"ChildrenNode.ts has not been loaded"),qs=qs||new ke({".priority":pt},{".priority":P}),qs}get(e){const t=rt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof se?t:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Ge,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=es(s,e.getCompare()):a=pt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new ke(d,c)}addToIndexes(e,t){const s=jn(this.indexes_,(i,r)=>{const o=rt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===pt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(E.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),es(a,o.getCompare())}else return pt;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new ke(s,this.indexSet_)}removeFromIndexes(e,t){const s=jn(this.indexes_,i=>{if(i===pt)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new ke(s,this.indexSet_)}}/**
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
 */let zt;class v{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ml(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zt||(zt=new v(new se(Ji),null,ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zt:t}}getChild(e){const t=w(e);return t===null?this:this.getImmediateChild(t).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?zt:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=w(e);if(s===null)return t;{m(w(e)!==".priority"||Qe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(N(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(P,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pl(this.getPriority().val())+":"),this.forEachChild(P,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ja(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cn?-1:0}withIndex(e){if(e===Ge||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ge||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(P),i=t.getIterator(P);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ge?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kp extends v{constructor(){super(new se(Ji),v.EMPTY_NODE,ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const Cn=new kp;Object.defineProperties(E,{MIN:{value:new E(lt,v.EMPTY_NODE)},MAX:{value:new E(Ye,Cn)}});fl.__EMPTY_NODE=v.EMPTY_NODE;V.__childrenNodeConstructor=v;wp(Cn);Ip(Cn);/**
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
 */const Rp=!0;function $(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new V(t,$(e))}if(!(n instanceof Array)&&Rp){const t=[];let s=!1;if(q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new E(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=es(t,bp,o=>o.name,Ji);if(s){const o=es(t,P.getCompare());return new v(r,$(e),new ke({".priority":o},{".priority":P}))}else return new v(r,$(e),ke.Default)}else{let t=v.EMPTY_NODE;return q(n,(s,i)=>{if(me(n,s)&&s.substring(0,1)!=="."){const r=$(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority($(e))}}Ep($);/**
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
 */class vl extends gs{constructor(e){super(),this.indexPath_=e,m(!I(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?dt(e.name,t.name):r}makePost(e,t){const s=$(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,Cn);return new E(Ye,e)}toString(){return cn(this.indexPath_,0).join("/")}}/**
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
 */class Ap extends gs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?dt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=$(e);return new E(t,s)}toString(){return".value"}}const yl=new Ap;/**
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
 */function bl(n){return{type:"value",snapshotNode:n}}function kt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function un(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Np(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Xi{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(un(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(kt(t,s)):o.trackChildChange(dn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(P,(i,r)=>{t.hasChild(i)||s.trackChildChange(un(i,r))}),t.isLeafNode()||t.forEachChild(P,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(dn(i,r,o))}else s.trackChildChange(kt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hn{constructor(e){this.indexedFilter_=new Xi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hn.getStartPost_(e),this.endPost_=hn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new E(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(P,(o,a)=>{r.matches(new E(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Pp{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new E(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,f)=>u(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new E(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(d&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(dn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(un(t,u));const b=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(kt(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return s.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(un(c.name,c.node)),r.trackChildChange(kt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class Zi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new Zi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Op(n){return n.loadsAllData()?new Xi(n.getIndex()):n.hasLimit()?new Pp(n):new hn(n)}function Mp(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Lp(n,e){const t=n.copy();return t.index_=e,t}function ko(n){const e={};if(n.isDefault())return e;let t;if(n.index_===P?t="$priority":n.index_===yl?t="$value":n.index_===Ge?t="$key":(m(n.index_ instanceof vl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=U(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=U(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+U(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=U(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+U(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ro(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}/**
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
 */class ts extends cl{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=In("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ts.getListenId_(e,s),a={};this.listens_[o]=a;const l=ko(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),rt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,t){const s=ts.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ko(e._queryParams),s=e._path.toString(),i=new xt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$t(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rn(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Dp{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ns(){return{value:null,children:new Map}}function wl(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=w(e);n.children.has(s)||n.children.set(s,ns());const i=n.children.get(s);e=N(e),wl(i,e,t)}}function ui(n,e,t){n.value!==null?t(e,n.value):xp(n,(s,i)=>{const r=new R(e.toString()+"/"+s);ui(i,r,t)})}function xp(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class $p{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ao=10*1e3,Fp=30*1e3,Up=5*60*1e3;class Bp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $p(e);const s=Ao+(Fp-Ao)*Math.random();Xt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;q(e,(i,r)=>{r>0&&me(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Xt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Up))}}/**
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
 */var fe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fe||(fe={}));function er(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class ss{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=fe.ACK_USER_WRITE,this.source=er()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new R(e));return new ss(T(),t,this.revert)}}else return m(w(this.path)===e,"operationForChild called for unrelated child."),new ss(N(this.path),this.affectedTree,this.revert)}}/**
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
 */class fn{constructor(e,t){this.source=e,this.path=t,this.type=fe.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new fn(this.source,T()):new fn(this.source,N(this.path))}}/**
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
 */class ct{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=fe.OVERWRITE}operationForChild(e){return I(this.path)?new ct(this.source,T(),this.snap.getImmediateChild(e)):new ct(this.source,N(this.path),this.snap)}}/**
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
 */class Rt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=fe.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new R(e));return t.isEmpty()?null:t.value?new ct(this.source,T(),t.value):new Rt(this.source,T(),t)}else return m(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rt(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Je{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=w(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Vp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wp(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Np(o.childName,o.snapshotNode))}),Gt(n,i,"child_removed",e,s,t),Gt(n,i,"child_added",e,s,t),Gt(n,i,"child_moved",r,s,t),Gt(n,i,"child_changed",e,s,t),Gt(n,i,"value",e,s,t),i}function Gt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>jp(n,a,l)),o.forEach(a=>{const l=Hp(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Hp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function jp(n,e,t){if(e.childName==null||t.childName==null)throw Dt("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function vs(n,e){return{eventCache:n,serverCache:e}}function Zt(n,e,t,s){return vs(new Je(e,t,s),n.serverCache)}function El(n,e,t,s){return vs(n.eventCache,new Je(e,t,s))}function is(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ut(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ks;const zp=()=>(Ks||(Ks=new se(Af)),Ks);class A{constructor(e,t=zp()){this.value=e,this.children=t}static fromObject(e){let t=new A(null);return q(e,(s,i)=>{t=t.set(new R(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(I(e))return null;{const s=w(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(N(e),t);return r!=null?{path:M(new R(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=w(e),s=this.children.get(t);return s!==null?s.subtree(N(e)):new A(null)}}set(e,t){if(I(e))return new A(t,this.children);{const s=w(e),r=(this.children.get(s)||new A(null)).set(N(e),t),o=this.children.insert(s,r);return new A(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const t=w(e),s=this.children.get(t);if(s){const i=s.remove(N(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=w(e),s=this.children.get(t);return s?s.get(N(e)):null}}setTree(e,t){if(I(e))return t;{const s=w(e),r=(this.children.get(s)||new A(null)).setTree(N(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new A(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(M(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=w(e),o=this.children.get(r);return o?o.findOnPath_(N(e),M(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=w(e),r=this.children.get(i);return r?r.foreachOnPath_(N(e),M(t,i),s):new A(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(M(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class pe{constructor(e){this.writeTree_=e}static empty(){return new pe(new A(null))}}function en(n,e,t){if(I(e))return new pe(new A(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=X(i,e);return r=r.updateChild(o,t),new pe(n.writeTree_.set(i,r))}else{const i=new A(t),r=n.writeTree_.setTree(e,i);return new pe(r)}}}function di(n,e,t){let s=n;return q(t,(i,r)=>{s=en(s,M(e,i),r)}),s}function No(n,e){if(I(e))return pe.empty();{const t=n.writeTree_.setTree(e,new A(null));return new pe(t)}}function hi(n,e){return ht(n,e)!=null}function ht(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(X(t.path,e)):null}function Po(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function qe(n,e){if(I(e))return n;{const t=ht(n,e);return t!=null?new pe(new A(t)):new pe(n.writeTree_.subtree(e))}}function fi(n){return n.writeTree_.isEmpty()}function At(n,e){return Il(T(),n.writeTree_,e)}function Il(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Il(M(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(M(n,".priority"),s)),t}}/**
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
 */function ys(n,e){return kl(e,n)}function Gp(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=en(n.visibleWrites,e,t)),n.lastWriteId=s}function qp(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=di(n.visibleWrites,e,t),n.lastWriteId=s}function Kp(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Yp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qp(a,s.path)?i=!1:de(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Jp(n),!0;if(s.snap)n.visibleWrites=No(n.visibleWrites,s.path);else{const a=s.children;q(a,l=>{n.visibleWrites=No(n.visibleWrites,M(s.path,l))})}return!0}else return!1}function Qp(n,e){if(n.snap)return de(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&de(M(n.path,t),e))return!0;return!1}function Jp(n){n.visibleWrites=Cl(n.allWrites,Xp,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Xp(n){return n.visible}function Cl(n,e,t){let s=pe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)de(t,o)?(a=X(t,o),s=en(s,a,r.snap)):de(o,t)&&(a=X(o,t),s=en(s,T(),r.snap.getChild(a)));else if(r.children){if(de(t,o))a=X(t,o),s=di(s,a,r.children);else if(de(o,t))if(a=X(o,t),I(a))s=di(s,T(),r.children);else{const l=rt(r.children,w(a));if(l){const c=l.getChild(N(a));s=en(s,T(),c)}}}else throw Dt("WriteRecord should have .snap or .children")}}return s}function Sl(n,e,t,s,i){if(!s&&!i){const r=ht(n.visibleWrites,e);if(r!=null)return r;{const o=qe(n.visibleWrites,e);if(fi(o))return t;if(t==null&&!hi(o,T()))return null;{const a=t||v.EMPTY_NODE;return At(o,a)}}}else{const r=qe(n.visibleWrites,e);if(!i&&fi(r))return t;if(!i&&t==null&&!hi(r,T()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(de(c.path,e)||de(e,c.path))},a=Cl(n.allWrites,o,e),l=t||v.EMPTY_NODE;return At(a,l)}}}function Zp(n,e,t){let s=v.EMPTY_NODE;const i=ht(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(P,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=qe(n.visibleWrites,e);return t.forEachChild(P,(o,a)=>{const l=At(qe(r,new R(o)),a);s=s.updateImmediateChild(o,l)}),Po(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=qe(n.visibleWrites,e);return Po(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function em(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,t);if(hi(n.visibleWrites,r))return null;{const o=qe(n.visibleWrites,r);return fi(o)?i.getChild(t):At(o,i.getChild(t))}}function tm(n,e,t,s){const i=M(e,t),r=ht(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=qe(n.visibleWrites,i);return At(o,s.getNode().getImmediateChild(t))}else return null}function nm(n,e){return ht(n.visibleWrites,e)}function sm(n,e,t,s,i,r,o){let a;const l=qe(n.visibleWrites,e),c=ht(l,T());if(c!=null)a=c;else if(t!=null)a=At(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=h.getNext();for(;f&&d.length<i;)u(f,s)!==0&&d.push(f),f=h.getNext();return d}else return[]}function im(){return{visibleWrites:pe.empty(),allWrites:[],lastWriteId:-1}}function rs(n,e,t,s){return Sl(n.writeTree,n.treePath,e,t,s)}function sr(n,e){return Zp(n.writeTree,n.treePath,e)}function Oo(n,e,t,s){return em(n.writeTree,n.treePath,e,t,s)}function os(n,e){return nm(n.writeTree,M(n.treePath,e))}function rm(n,e,t,s,i,r){return sm(n.writeTree,n.treePath,e,t,s,i,r)}function ir(n,e,t){return tm(n.writeTree,n.treePath,e,t)}function Tl(n,e){return kl(M(n.treePath,e),n.writeTree)}function kl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class om{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,dn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,un(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,kt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,dn(s,e.snapshotNode,i.oldSnap));else throw Dt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class am{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Rl=new am;class rr{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ir(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ut(this.viewCache_),r=rm(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function lm(n){return{filter:n}}function cm(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function um(n,e,t,s,i){const r=new om;let o,a;if(t.type===fe.OVERWRITE){const c=t;c.source.fromUser?o=pi(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=as(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===fe.MERGE){const c=t;c.source.fromUser?o=hm(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=mi(n,e,c.path,c.children,s,i,a,r))}else if(t.type===fe.ACK_USER_WRITE){const c=t;c.revert?o=mm(n,e,c.path,s,i,r):o=fm(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===fe.LISTEN_COMPLETE)o=pm(n,e,t.path,s,r);else throw Dt("Unknown operation type: "+t.type);const l=r.getChanges();return dm(e,o,l),{viewCache:o,changes:l}}function dm(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=is(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(bl(is(e)))}}function Al(n,e,t,s,i,r){const o=e.eventCache;if(os(s,t)!=null)return e;{let a,l;if(I(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ut(e),d=c instanceof v?c:v.EMPTY_NODE,u=sr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=rs(s,ut(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=w(t);if(c===".priority"){m(Qe(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=Oo(s,t,d,l);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=N(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Oo(s,t,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=ir(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,d,i,r):a=o.getNode()}}return Zt(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function as(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=d.updateFullNode(l.getNode(),f,null)}else{const f=w(t);if(!l.isCompleteForPath(t)&&Qe(t)>1)return e;const _=N(t),C=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=d.updatePriority(l.getNode(),C):c=d.updateChild(l.getNode(),f,C,_,Rl,null)}const u=El(e,c,l.isFullyInitialized()||I(t),d.filtersNodes()),h=new rr(i,u,r);return Al(n,u,t,i,h,a)}function pi(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const d=new rr(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Zt(e,c,!0,n.filter.filtersNodes());else{const u=w(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Zt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=N(t),f=a.getNode().getImmediateChild(u);let _;if(I(h))_=s;else{const b=d.getCompleteChild(u);b!=null?Ki(h)===".priority"&&b.getChild(dl(h)).isEmpty()?_=b:_=b.updateChild(h,s):_=v.EMPTY_NODE}if(f.equals(_))l=e;else{const b=n.filter.updateChild(a.getNode(),u,_,h,d,o);l=Zt(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Mo(n,e){return n.eventCache.isCompleteForChild(e)}function hm(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=M(t,l);Mo(e,w(d))&&(a=pi(n,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=M(t,l);Mo(e,w(d))||(a=pi(n,a,d,c,i,r,o))}),a}function Lo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function mi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;I(t)?c=s:c=new A(null).setTree(t,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=Lo(n,f,h);l=as(n,l,new R(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const f=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),b=Lo(n,_,h);l=as(n,l,new R(u),b,i,r,o,a)}}),l}function fm(n,e,t,s,i,r,o){if(os(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(I(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return as(n,e,t,l.getNode().getChild(t),i,r,a,o);if(I(t)){let c=new A(null);return l.getNode().forEachChild(Ge,(d,u)=>{c=c.set(new R(d),u)}),mi(n,e,t,c,i,r,a,o)}else return e}else{let c=new A(null);return s.foreach((d,u)=>{const h=M(t,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),mi(n,e,t,c,i,r,a,o)}}function pm(n,e,t,s,i){const r=e.serverCache,o=El(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return Al(n,o,t,s,Rl,i)}function mm(n,e,t,s,i,r){let o;if(os(s,t)!=null)return e;{const a=new rr(s,e,i),l=e.eventCache.getNode();let c;if(I(t)||w(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=rs(s,ut(e));else{const u=e.serverCache.getNode();m(u instanceof v,"serverChildren would be complete if leaf node"),d=sr(s,u)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=w(t);let u=ir(s,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=n.filter.updateChild(l,d,u,N(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,v.EMPTY_NODE,N(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rs(s,ut(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||os(s,T())!=null,Zt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class _m{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Xi(s.getIndex()),r=Op(s);this.processor_=lm(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),d=new Je(l,o.isFullyInitialized(),i.filtersNodes()),u=new Je(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=vs(u,d),this.eventGenerator_=new Vp(this.query_)}get query(){return this.query_}}function gm(n){return n.viewCache_.serverCache.getNode()}function vm(n){return is(n.viewCache_)}function ym(n,e){const t=ut(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(w(e)).isEmpty())?t.getChild(e):null}function Do(n){return n.eventRegistrations_.length===0}function bm(n,e){n.eventRegistrations_.push(e)}function xo(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function $o(n,e,t,s){e.type===fe.MERGE&&e.source.queryId!==null&&(m(ut(n.viewCache_),"We should always have a full cache before handling merges"),m(is(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=um(n.processor_,i,e,t,s);return cm(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Nl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function wm(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(P,(r,o)=>{s.push(kt(r,o))}),t.isFullyInitialized()&&s.push(bl(t.getNode())),Nl(n,s,t.getNode(),e)}function Nl(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Wp(n.eventGenerator_,e,t,i)}/**
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
 */let ls;class Pl{constructor(){this.views=new Map}}function Em(n){m(!ls,"__referenceConstructor has already been defined"),ls=n}function Im(){return m(ls,"Reference.ts has not been loaded"),ls}function Cm(n){return n.views.size===0}function or(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),$o(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat($o(o,e,t,s));return r}}function Ol(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=rs(t,i?s:null),l=!1;a?l=!0:s instanceof v?(a=sr(t,s),l=!1):(a=v.EMPTY_NODE,l=!1);const c=vs(new Je(a,l,!1),new Je(s,i,!1));return new _m(e,c)}return o}function Sm(n,e,t,s,i,r){const o=Ol(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),bm(o,t),wm(o,t)}function Tm(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Xe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(xo(c,t,s)),Do(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(xo(l,t,s)),Do(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Xe(n)&&r.push(new(Im())(e._repo,e._path)),{removed:r,events:o}}function Ml(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ke(n,e){let t=null;for(const s of n.views.values())t=t||ym(s,e);return t}function Ll(n,e){if(e._queryParams.loadsAllData())return bs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Dl(n,e){return Ll(n,e)!=null}function Xe(n){return bs(n)!=null}function bs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let cs;function km(n){m(!cs,"__referenceConstructor has already been defined"),cs=n}function Rm(){return m(cs,"Reference.ts has not been loaded"),cs}let Am=1;class Fo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=im(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ar(n,e,t,s,i){return Gp(n.pendingWriteTree_,e,t,s,i),i?Vt(n,new ct(er(),e,t)):[]}function Nm(n,e,t,s){qp(n.pendingWriteTree_,e,t,s);const i=A.fromObject(t);return Vt(n,new Rt(er(),e,i))}function Be(n,e,t=!1){const s=Kp(n.pendingWriteTree_,e);if(Yp(n.pendingWriteTree_,e)){let r=new A(null);return s.snap!=null?r=r.set(T(),!0):q(s.children,o=>{r=r.set(new R(o),!0)}),Vt(n,new ss(s.path,r,t))}else return[]}function Sn(n,e,t){return Vt(n,new ct(tr(),e,t))}function Pm(n,e,t){const s=A.fromObject(t);return Vt(n,new Rt(tr(),e,s))}function Om(n,e){return Vt(n,new fn(tr(),e))}function Mm(n,e,t){const s=lr(n,t);if(s){const i=cr(s),r=i.path,o=i.queryId,a=X(r,e),l=new fn(nr(o),a);return ur(n,r,l)}else return[]}function us(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Dl(o,e))){const l=Tm(o,e,t,s);Cm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,f)=>Xe(f));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=xm(h);for(let _=0;_<f.length;++_){const b=f[_],C=b.query,Y=Ul(n,b);n.listenProvider_.startListening(tn(C),pn(n,C),Y.hashFn,Y.onComplete)}}}!u&&c.length>0&&!s&&(d?n.listenProvider_.stopListening(tn(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(Es(h));n.listenProvider_.stopListening(tn(h),f)}))}$m(n,c)}return a}function xl(n,e,t,s){const i=lr(n,s);if(i!=null){const r=cr(i),o=r.path,a=r.queryId,l=X(o,e),c=new ct(nr(a),l,t);return ur(n,o,c)}else return[]}function Lm(n,e,t,s){const i=lr(n,s);if(i){const r=cr(i),o=r.path,a=r.queryId,l=X(o,e),c=A.fromObject(t),d=new Rt(nr(a),l,c);return ur(n,o,d)}else return[]}function _i(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,f)=>{const _=X(h,i);r=r||Ke(f,_),o=o||Xe(f)});let a=n.syncPointTree_.get(i);a?(o=o||Xe(a),r=r||Ke(a,T())):(a=new Pl,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const b=Ke(_,T());b&&(r=r.updateImmediateChild(f,b))}));const c=Dl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Es(e);m(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Fm();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const d=ys(n.pendingWriteTree_,i);let u=Sm(a,e,t,d,r,l);if(!c&&!o&&!s){const h=Ll(a,e);u=u.concat(Um(n,e,h))}return u}function ws(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=X(o,e),c=Ke(a,l);if(c)return c});return Sl(i,e,r,t,!0)}function Dm(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,d)=>{const u=X(c,t);s=s||Ke(d,u)});let i=n.syncPointTree_.get(t);i?s=s||Ke(i,T()):(i=new Pl,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Je(s,!0,!1):null,a=ys(n.pendingWriteTree_,e._path),l=Ol(i,e,a,r?o.getNode():v.EMPTY_NODE,r);return vm(l)}function Vt(n,e){return $l(e,n.syncPointTree_,null,ys(n.pendingWriteTree_,T()))}function $l(n,e,t,s){if(I(n.path))return Fl(n,e,t,s);{const i=e.get(T());t==null&&i!=null&&(t=Ke(i,T()));let r=[];const o=w(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Tl(s,o);r=r.concat($l(a,l,c,d))}return i&&(r=r.concat(or(i,n,s,t))),r}}function Fl(n,e,t,s){const i=e.get(T());t==null&&i!=null&&(t=Ke(i,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Tl(s,o),d=n.operationForChild(o);d&&(r=r.concat(Fl(d,a,l,c)))}),i&&(r=r.concat(or(i,n,s,t))),r}function Ul(n,e){const t=e.query,s=pn(n,t);return{hashFn:()=>(gm(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Mm(n,t._path,s):Om(n,t._path);{const r=Of(i,t);return us(n,t,null,r)}}}}function pn(n,e){const t=Es(e);return n.queryToTagMap.get(t)}function Es(n){return n._path.toString()+"$"+n._queryIdentifier}function lr(n,e){return n.tagToQueryMap.get(e)}function cr(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new R(n.substr(0,e))}}function ur(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=ys(n.pendingWriteTree_,e);return or(s,t,i,null)}function xm(n){return n.fold((e,t,s)=>{if(t&&Xe(t))return[bs(t)];{let i=[];return t&&(i=Ml(t)),q(s,(r,o)=>{i=i.concat(o)}),i}})}function tn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rm())(n._repo,n._path):n}function $m(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Es(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Fm(){return Am++}function Um(n,e,t){const s=e._path,i=pn(n,e),r=Ul(n,t),o=n.listenProvider_.startListening(tn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Xe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!I(c)&&d&&Xe(d))return[bs(d).query];{let h=[];return d&&(h=h.concat(Ml(d).map(f=>f.query))),q(u,(f,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(tn(d),pn(n,d))}}return o}/**
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
 */class dr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dr(t)}node(){return this.node_}}class hr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=M(this.path_,e);return new hr(this.syncTree_,t)}node(){return ws(this.syncTree_,this.path_)}}const Bm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Uo=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Vm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wm(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Vm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Wm=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Bl=function(n,e,t,s){return pr(e,new hr(t,n),s)},fr=function(n,e,t){return pr(n,new dr(e),t)};function pr(n,e,t){const s=n.getPriority().val(),i=Uo(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Uo(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new V(a,$(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new V(i))),o.forEachChild(P,(a,l)=>{const c=pr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class mr{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Is(n,e){let t=e instanceof R?e:new R(e),s=n,i=w(t);for(;i!==null;){const r=rt(s.node.children,i)||{children:{},childCount:0};s=new mr(i,s,r),t=N(t),i=w(t)}return s}function ft(n){return n.node.value}function _r(n,e){n.node.value=e,gi(n)}function Vl(n){return n.node.childCount>0}function Hm(n){return ft(n)===void 0&&!Vl(n)}function Cs(n,e){q(n.node.children,(t,s)=>{e(new mr(t,n,s))})}function Wl(n,e,t,s){t&&e(n),Cs(n,i=>{Wl(i,e,!0)})}function jm(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Tn(n){return new R(n.parent===null?n.name:Tn(n.parent)+"/"+n.name)}function gi(n){n.parent!==null&&zm(n.parent,n.name,n)}function zm(n,e,t){const s=Hm(t),i=me(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,gi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,gi(n))}/**
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
 */const Gm=/[\[\].#$\/\u0000-\u001F\u007F]/,qm=/[\[\].#$\u0000-\u001F\u007F]/,Ys=10*1024*1024,gr=function(n){return typeof n=="string"&&n.length!==0&&!Gm.test(n)},Hl=function(n){return typeof n=="string"&&n.length!==0&&!qm.test(n)},Km=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hl(n)},ds=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Hi(n)||n&&typeof n=="object"&&me(n,".sv")},jl=function(n,e,t,s){s&&e===void 0||kn(fs(n,"value"),e,t)},kn=function(n,e,t){const s=t instanceof R?new hp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nt(s));if(typeof e=="function")throw new Error(n+"contains a function "+nt(s)+" with contents = "+e.toString());if(Hi(e))throw new Error(n+"contains "+e.toString()+" "+nt(s));if(typeof e=="string"&&e.length>Ys/3&&ps(e)>Ys)throw new Error(n+"contains a string greater than "+Ys+" utf8 bytes "+nt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(q(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gr(o)))throw new Error(n+" contains an invalid key ("+o+") "+nt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fp(s,o),kn(n,a,s),pp(s)}),i&&r)throw new Error(n+' contains ".value" child '+nt(s)+" in addition to actual children.")}},Ym=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=cn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!gr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dp);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&de(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Qm=function(n,e,t,s){const i=fs(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];q(e,(o,a)=>{const l=new R(o);if(kn(i,a,M(t,l)),Ki(l)===".priority"&&!ds(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Ym(i,r)},zl=function(n,e,t,s){if(!Hl(t))throw new Error(fs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jm=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zl(n,e,t)},vr=function(n,e){if(w(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Xm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Km(t))throw new Error(fs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ss(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Yi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Gl(n,e,t){Ss(n,t),ql(n,s=>Yi(s,e))}function ae(n,e,t){Ss(n,t),ql(n,s=>de(s,e)||de(e,s))}function ql(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(e_(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function e_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Jt&&z("event: "+t.toString()),Bt(s)}}}/**
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
 */const t_="repo_interrupt",n_=25;class s_{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ns(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function i_(n,e,t){if(n.stats_=Gi(n.repoInfo_),n.forceRestClient_||xf())n.server_=new ts(n.repoInfo_,(s,i,r,o)=>{Bo(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Vo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{U(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Re(n.repoInfo_,e,(s,i,r,o)=>{Bo(n,s,i,r,o)},s=>{Vo(n,s)},s=>{r_(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Vf(n.repoInfo_,()=>new Bp(n.stats_,n.server_)),n.infoData_=new Dp,n.infoSyncTree_=new Fo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Sn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yr(n,"connected",!1),n.serverSyncTree_=new Fo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ae(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Kl(n){const t=n.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Rn(n){return Bm({timestamp:Kl(n)})}function Bo(n,e,t,s,i){n.dataUpdateCount++;const r=new R(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=jn(t,c=>$(c));o=Lm(n.serverSyncTree_,r,l,i)}else{const l=$(t);o=xl(n.serverSyncTree_,r,l,i)}else if(s){const l=jn(t,c=>$(c));o=Pm(n.serverSyncTree_,r,l)}else{const l=$(t);o=Sn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Nt(n,r)),ae(n.eventQueue_,a,o)}function Vo(n,e){yr(n,"connected",e),e===!1&&c_(n)}function r_(n,e){q(e,(t,s)=>{yr(n,t,s)})}function yr(n,e,t){const s=new R("/.info/"+e),i=$(t);n.infoData_.updateSnapshot(s,i);const r=Sn(n.infoSyncTree_,s,i);ae(n.eventQueue_,s,r)}function Ts(n){return n.nextWriteId_++}function o_(n,e,t){const s=Dm(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=$(i).withIndex(e._queryParams.getIndex());_i(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Sn(n.serverSyncTree_,e._path,r);else{const a=pn(n.serverSyncTree_,e);o=xl(n.serverSyncTree_,e._path,r,a)}return ae(n.eventQueue_,e._path,o),us(n.serverSyncTree_,e,t,null,!0),r},i=>(Wt(n,"get for query "+U(e)+" failed: "+i),Promise.reject(new Error(i))))}function a_(n,e,t,s,i){Wt(n,"set",{path:e.toString(),value:t,priority:s});const r=Rn(n),o=$(t,s),a=ws(n.serverSyncTree_,e),l=fr(o,a,r),c=Ts(n),d=ar(n.serverSyncTree_,e,l,c,!0);Ss(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const _=h==="ok";_||Z("set at "+e+" failed: "+h);const b=Be(n.serverSyncTree_,c,!_);ae(n.eventQueue_,e,b),vi(n,i,h,f)});const u=wr(n,e);Nt(n,u),ae(n.eventQueue_,u,[])}function l_(n,e,t,s){Wt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Rn(n),o={};if(q(t,(a,l)=>{i=!1,o[a]=Bl(M(e,a),$(l),n.serverSyncTree_,r)}),i)z("update() called with empty data.  Don't do anything."),vi(n,s,"ok",void 0);else{const a=Ts(n),l=Nm(n.serverSyncTree_,e,o,a);Ss(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,d)=>{const u=c==="ok";u||Z("update at "+e+" failed: "+c);const h=Be(n.serverSyncTree_,a,!u),f=h.length>0?Nt(n,e):e;ae(n.eventQueue_,f,h),vi(n,s,c,d)}),q(t,c=>{const d=wr(n,M(e,c));Nt(n,d)}),ae(n.eventQueue_,e,[])}}function c_(n){Wt(n,"onDisconnectEvents");const e=Rn(n),t=ns();ui(n.onDisconnect_,T(),(i,r)=>{const o=Bl(i,r,n.serverSyncTree_,e);wl(t,i,o)});let s=[];ui(t,T(),(i,r)=>{s=s.concat(Sn(n.serverSyncTree_,i,r));const o=wr(n,i);Nt(n,o)}),n.onDisconnect_=ns(),ae(n.eventQueue_,T(),s)}function u_(n,e,t){let s;w(e._path)===".info"?s=_i(n.infoSyncTree_,e,t):s=_i(n.serverSyncTree_,e,t),Gl(n.eventQueue_,e._path,s)}function d_(n,e,t){let s;w(e._path)===".info"?s=us(n.infoSyncTree_,e,t):s=us(n.serverSyncTree_,e,t),Gl(n.eventQueue_,e._path,s)}function h_(n){n.persistentConnection_&&n.persistentConnection_.interrupt(t_)}function Wt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function vi(n,e,t,s){e&&Bt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function f_(n,e,t,s,i,r){Wt(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:Ha(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=br(n,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{kn("transaction failed: Data returned ",l,o.path),o.status=0;const c=Is(n.transactionQueueTree_,e),d=ft(c)||[];d.push(o),_r(c,d);let u;typeof l=="object"&&l!==null&&me(l,".priority")?(u=rt(l,".priority"),m(ds(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(ws(n.serverSyncTree_,e)||v.EMPTY_NODE).getPriority().val();const h=Rn(n),f=$(l,u),_=fr(f,a,h);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=_,o.currentWriteId=Ts(n);const b=ar(n.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);ae(n.eventQueue_,e,b),ks(n,n.transactionQueueTree_)}}function br(n,e,t){return ws(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function ks(n,e=n.transactionQueueTree_){if(e||Rs(n,e),ft(e)){const t=Ql(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&p_(n,Tn(e),t)}else Vl(e)&&Cs(e,t=>{ks(n,t)})}function p_(n,e,t){const s=t.map(c=>c.currentWriteId),i=br(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];m(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=X(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Wt(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Be(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Rs(n,Is(n.transactionQueueTree_,e)),ks(n,n.transactionQueueTree_),ae(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Bt(u[h])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Nt(n,e)}},o)}function Nt(n,e){const t=Yl(n,e),s=Tn(t),i=Ql(n,t);return m_(n,i,s),s}function m_(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=X(t,l.path);let d=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=n_)d=!0,u="maxretry",i=i.concat(Be(n.serverSyncTree_,l.currentWriteId,!0));else{const h=br(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){kn("transaction failed: Data returned ",f,l.path);let _=$(f);typeof f=="object"&&f!=null&&me(f,".priority")||(_=_.updatePriority(h.getPriority()));const C=l.currentWriteId,Y=Rn(n),_e=fr(_,h,Y);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=_e,l.currentWriteId=Ts(n),o.splice(o.indexOf(C),1),i=i.concat(ar(n.serverSyncTree_,l.path,_e,l.currentWriteId,l.applyLocally)),i=i.concat(Be(n.serverSyncTree_,C,!0))}else d=!0,u="nodata",i=i.concat(Be(n.serverSyncTree_,l.currentWriteId,!0))}ae(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Rs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Bt(s[a]);ks(n,n.transactionQueueTree_)}function Yl(n,e){let t,s=n.transactionQueueTree_;for(t=w(e);t!==null&&ft(s)===void 0;)s=Is(s,t),e=N(e),t=w(e);return s}function Ql(n,e){const t=[];return Jl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Jl(n,e,t){const s=ft(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Cs(e,i=>{Jl(n,i,t)})}function Rs(n,e){const t=ft(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,_r(e,t.length>0?t:void 0)}Cs(e,s=>{Rs(n,s)})}function wr(n,e){const t=Tn(Yl(n,e)),s=Is(n.transactionQueueTree_,e);return jm(s,i=>{Qs(n,i)}),Qs(n,s),Wl(s,i=>{Qs(n,i)}),t}function Qs(n,e){const t=ft(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Be(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_r(e,void 0):t.length=r+1,ae(n.eventQueue_,Tn(e),i);for(let o=0;o<s.length;o++)Bt(s[o])}}/**
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
 */function __(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function g_(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Wo=function(n,e){const t=v_(n),s=t.namespace;t.domain==="firebase.com"&&Oe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Oe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||kf();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new nl(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new R(t.pathString)}},v_=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(i=__(n.substring(d,u)));const h=g_(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Ho="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",y_=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ho.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ho.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class b_{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+U(this.snapshot.exportVal())}}class w_{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Xl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class An{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:Ki(this._path)}get ref(){return new Ee(this._repo,this._path)}get _queryIdentifier(){const e=Ro(this._queryParams),t=ji(e);return t==="{}"?"default":t}get _queryObject(){return Ro(this._queryParams)}isEqual(e){if(e=K(e),!(e instanceof An))return!1;const t=this._repo===e._repo,s=Yi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+up(this._path)}}function E_(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function I_(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Ge){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==lt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Ye)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===P){if(e!=null&&!ds(e)||t!=null&&!ds(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(m(n.getIndex()instanceof vl||n.getIndex()===yl,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Ee extends An{constructor(e,t){super(e,t,new Zi,!1)}get parent(){const e=dl(this._path);return e===null?null:new Ee(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Pt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new R(e),s=mn(this.ref,e);return new Pt(this._node.getChild(t),s,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Pt(i,mn(this.ref,s),P)))}hasChild(e){const t=new R(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function G(n,e){return n=K(n),n._checkNotDeleted("ref"),e!==void 0?mn(n._root,e):n._root}function mn(n,e){return n=K(n),w(n._path)===null?Jm("child","path",e):zl("child","path",e),new Ee(n._repo,M(n._path,e))}function Ze(n,e){n=K(n),vr("push",n._path),jl("push",e,n._path,!0);const t=Kl(n._repo),s=y_(t),i=mn(n,s),r=mn(n,s);let o;return e!=null?o=Er(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Er(n,e){n=K(n),vr("set",n._path),jl("set",e,n._path,!1);const t=new xt;return a_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function we(n,e){Qm("update",e,n._path);const t=new xt;return l_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function mt(n){n=K(n);const e=new Xl(()=>{}),t=new As(e);return o_(n._repo,n,t).then(s=>new Pt(s,new Ee(n._repo,n._path),n._queryParams.getIndex()))}class As{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new b_("value",this,new Pt(e.snapshotNode,new Ee(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new w_(this,e,t):null}matches(e){return e instanceof As?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function C_(n,e,t,s,i){const r=new Xl(t,void 0),o=new As(r);return u_(n._repo,n,o),()=>d_(n._repo,n,o)}function S_(n,e,t,s){return C_(n,"value",e)}class Zl{}class T_ extends Zl{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new An(e._repo,e._path,Mp(e._queryParams,this._limit),e._orderByCalled)}}function k_(n){if(Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new T_(n)}class R_ extends Zl{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){E_(e,"orderByKey");const t=Lp(e._queryParams,Ge);return I_(t),new An(e._repo,e._path,t,!0)}}function A_(){return new R_}function N_(n,...e){let t=K(n);for(const s of e)t=s._apply(t);return t}Em(Ee);km(Ee);/**
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
 */const P_="FIREBASE_DATABASE_EMULATOR_HOST",yi={};let O_=!1;function M_(n,e,t,s){n.repoInfo_=new nl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function L_(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Oe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Wo(r,i),a=o.repoInfo,l;typeof process<"u"&&co&&(l=co[P_]),l?(r=`http://${l}?ns=${a.namespace}`,o=Wo(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Ff(n.name,n.options,e);Xm("Invalid Firebase Database URL",o),I(o.path)||Oe("Database URL must point to the root of a Firebase Database (not including a child path).");const d=x_(a,n,c,new $f(n.name,t));return new $_(d,n)}function D_(n,e){const t=yi[e];(!t||t[n.key]!==n)&&Oe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),h_(n),delete t[n.key]}function x_(n,e,t,s){let i=yi[e.name];i||(i={},yi[e.name]=i);let r=i[n.toURLString()];return r&&Oe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new s_(n,O_,t,s),i[n.toURLString()]=r,r}class $_{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(i_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ee(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(D_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Oe("Cannot call "+e+" on a deleted database.")}}function F_(n=oa(),e){const t=Oi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qc("database");s&&U_(t,...s)}return t}function U_(n,e,t,s={}){n=K(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Oe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Oe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Bn(Bn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Jc(s.mockUserToken,n.app.options.projectId);r=new Bn(o)}M_(i,e,t,r)}/**
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
 */function B_(n){Ef(Ft),St(new ot("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return L_(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ze(uo,ho,n),ze(uo,ho,"esm2017")}/**
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
 */class V_{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function le(n,e,t){var s;if(n=K(n),vr("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new xt,o=(l,c,d)=>{let u=null;l?r.reject(l):(u=new Pt(d,new Ee(n._repo,n._path),P),r.resolve(new V_(c,u)))},a=S_(n,()=>{});return f_(n._repo,n._path,e,o,a,i),r.promise}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};B_();const bi={apiKey:"AIzaSyARFa-vzKVmIdxP5xDRXVzasL2ui94eZ-w",authDomain:"market-6e66a.firebaseapp.com",databaseURL:"https://market-6e66a-default-rtdb.firebaseio.com",projectId:"market-6e66a",storageBucket:"market-6e66a.firebasestorage.app",messagingSenderId:"402312269082",appId:"1:402312269082:web:cf304afc54057ea162b0a3"},W_=!!bi.apiKey&&!!bi.databaseURL;let qt=null,jo=null,zo=null;function H(){return qt||(qt=ra(bi),jo=bf(qt),zo=F_(qt)),{app:qt,auth:jo,db:zo}}function H_(){const{auth:n}=H();return new Promise(e=>{let t=!1;const s=lh(n,i=>{t||(t=!0,s(),e(i||null))},()=>e(null));setTimeout(()=>{t||(t=!0,e(n.currentUser||null))},4e3)})}const j_="../STONK-Home/index.html",Js=2600;function z_(n){return String(n||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"")}function G_(){return/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||location.protocol==="file:"}function q_(n){const e=z_(n);return j_+(e?`?room=${encodeURIComponent(e)}`:"")}function K_({title:n="STONK Home에서 입장해 주세요",message:e="",roomCode:t="",auto:s=!0}={}){var l;const i=q_(t),r=document.getElementById("stonk-home-gate");r&&r.remove();const o=document.createElement("div");o.id="stonk-home-gate",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),Object.assign(o.style,{position:"fixed",inset:"0",zIndex:"99999",display:"grid",placeItems:"center",padding:"24px",background:"radial-gradient(120% 90% at 50% -10%, rgba(54,211,153,0.20), transparent 60%), rgba(5,6,10,0.94)",backdropFilter:"blur(8px)",color:"#f4f7ff",fontFamily:"Pretendard, Inter, 'Noto Sans KR', system-ui, sans-serif"});const a=s&&!G_();if(o.innerHTML=`
    <div style="width:min(460px,100%);text-align:center;padding:32px 26px;border:1px solid rgba(255,255,255,0.14);border-radius:18px;background:rgba(14,16,24,0.92);box-shadow:0 24px 70px rgba(0,0,0,0.5),0 0 60px rgba(54,211,153,0.16)">
      <div style="font-size:13px;font-weight:900;letter-spacing:2px;color:#36d399;margin-bottom:8px">STONK COMPANY</div>
      <h2 style="margin:0 0 10px;font-size:1.5rem">${n}</h2>
      <p style="margin:0 0 18px;color:#aab2c8;font-size:0.95rem;line-height:1.5">${e||"로그인은 STONK Home에서 진행합니다. 같은 계정의 자산이 그대로 연결됩니다."}</p>
      <a data-home-go href="${i}" style="display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border-radius:14px;font-weight:900;text-decoration:none;color:#0a0a12;background:linear-gradient(135deg,#6ee7b0,#36d399);box-shadow:0 10px 30px rgba(54,211,153,0.4)">STONK Home으로 이동</a>
      ${a?`<div style="margin-top:12px;font-size:0.8rem;color:#8a93a8"><span data-gate-count>${Math.ceil(Js/1e3)}</span>초 후 자동 이동…</div>`:'<div style="margin-top:12px;font-size:0.78rem;color:#5f6678">개발 모드: 자동 이동 없음</div>'}
    </div>
  `,document.body.appendChild(o),(l=o.querySelector("[data-home-go]"))==null||l.addEventListener("click",c=>{c.preventDefault(),location.href=i}),a){let c=Math.ceil(Js/1e3);const d=o.querySelector("[data-gate-count]"),u=setInterval(()=>{c-=1,d&&(d.textContent=String(Math.max(0,c))),c<=0&&clearInterval(u)},1e3);setTimeout(()=>{location.href=i},Js)}return o}const j="MAIN",Ns=1e7,Ir=60*60*1e3,Cr=.012;function B(n){const e=Number(n);return Number.isFinite(e)?e:0}function p(n){return Math.trunc(B(n))}function D(n){return p(n).toLocaleString("ko-KR")+"원"}function x(n,e,t){return n=B(n),Math.max(e,Math.min(t,n))}const Ve={fintech:{id:"fintech",label:"핀테크",icon:"💳",revCoef:.04,valCoef:.42,vol:.18,eventSens:1.4,note:"Bank 이벤트 영향이 큼"},game:{id:"game",label:"게임",icon:"🎮",revCoef:.045,valCoef:.45,vol:.28,eventSens:1,note:"변동성 높음 · Gacha/Arcade 확장"},bio:{id:"bio",label:"바이오",icon:"🧬",revCoef:.046,valCoef:.5,vol:.34,eventSens:1,note:"성장 변동성이 큼"},semicon:{id:"semicon",label:"반도체",icon:"🔬",revCoef:.038,valCoef:.55,vol:.22,eventSens:1,note:"시설 영향 큼 · 가치 상승 큼"},ent:{id:"ent",label:"엔터테인먼트",icon:"🎬",revCoef:.042,valCoef:.44,vol:.24,eventSens:1,note:"브랜드 점수 영향 큼"},food:{id:"food",label:"식품",icon:"🍱",revCoef:.036,valCoef:.38,vol:.1,eventSens:.8,note:"안정적 매출"},robot:{id:"robot",label:"로봇",icon:"🤖",revCoef:.044,valCoef:.5,vol:.3,eventSens:1,note:"연구개발 중심"},energy:{id:"energy",label:"친환경 에너지",icon:"🌱",revCoef:.04,valCoef:.46,vol:.2,eventSens:1.2,note:"이벤트 보너스 가능"},logistics:{id:"logistics",label:"물류",icon:"🚚",revCoef:.037,valCoef:.4,vol:.12,eventSens:.8,note:"꾸준한 수익"},security:{id:"security",label:"보안",icon:"🛡️",revCoef:.039,valCoef:.42,vol:.16,eventSens:.9,note:"리스크 감소"}},Y_=Object.keys(Ve),Ot={stable:{id:"stable",label:"안정형",revMod:.95,growth:.9,riskBase:18,brand:0,ipo:0,note:"변동성·리스크 낮음"},aggressive:{id:"aggressive",label:"공격형",revMod:1.15,growth:1.2,riskBase:38,brand:0,ipo:0,note:"성장↑ 비용·리스크↑"},brand:{id:"brand",label:"브랜드형",revMod:.92,growth:1,riskBase:24,brand:12,ipo:0,note:"브랜드 점수↑ 초기 수익↓"},rnd:{id:"rnd",label:"연구개발형",revMod:.9,growth:1.05,riskBase:26,brand:0,ipo:12,note:"IPO 준비도 보너스 · 초기 비용↑"}},ie={dev:{id:"dev",label:"개발자",icon:"👨‍💻",cost:2e6,upkeep:12e4,effect:"성장률 +"},marketer:{id:"marketer",label:"마케터",icon:"📣",cost:18e5,upkeep:11e4,effect:"브랜드 +"},sales:{id:"sales",label:"영업 담당",icon:"🤝",cost:18e5,upkeep:11e4,effect:"매출 +"},account:{id:"account",label:"회계 담당",icon:"🧮",cost:16e5,upkeep:1e5,effect:"비용 −"},risk:{id:"risk",label:"리스크 매니저",icon:"🧯",cost:22e5,upkeep:13e4,effect:"리스크 −"},researcher:{id:"researcher",label:"연구원",icon:"🔭",cost:24e5,upkeep:14e4,effect:"IPO 준비도 +"},ops:{id:"ops",label:"운영 매니저",icon:"🛠️",cost:2e6,upkeep:12e4,effect:"시설 효율 +"},brand:{id:"brand",label:"브랜드 매니저",icon:"✨",cost:22e5,upkeep:13e4,effect:"엔터 보너스"}},ec=Object.keys(ie),We={office:{id:"office",label:"사무실",icon:"🏢",baseCost:3e6,upkeep:6e4,effect:"직원 한도 +"},server:{id:"server",label:"서버실",icon:"🖥️",baseCost:4e6,upkeep:8e4,effect:"핀테크/게임/보안 매출 +"},lab:{id:"lab",label:"연구소",icon:"🧪",baseCost:5e6,upkeep:9e4,effect:"바이오/로봇/반도체 성장 +"},marketing:{id:"marketing",label:"마케팅룸",icon:"📈",baseCost:35e5,upkeep:7e4,effect:"브랜드 +"},accounting:{id:"accounting",label:"회계실",icon:"📒",baseCost:3e6,upkeep:6e4,effect:"비용 −"},security:{id:"security",label:"보안실",icon:"🔒",baseCost:35e5,upkeep:7e4,effect:"리스크 −"}},tc=Object.keys(We),nc=["STARTUP","SMALL_BIZ","SCALE_UP","ENTERPRISE","PRE_IPO","LISTED"],_t={STARTUP:"스타트업",SMALL_BIZ:"소기업",SCALE_UP:"성장기업",ENTERPRISE:"대기업",PRE_IPO:"상장 준비",LISTED:"상장기업"};function Q_(n){return Math.max(0,nc.indexOf(n||"STARTUP"))}const Ps=n=>G(H().db,`rooms/${j}/players/${n}/cash`),J_=n=>G(H().db,`rooms/${j}/players/${n}`),te=n=>G(H().db,`rooms/${j}/companies/${n}`),sc=n=>G(H().db,`rooms/${j}/companies/${n}/logs`),X_=n=>G(H().db,`rooms/${j}/bank/${n}`),_n=n=>G(H().db,`rooms/${j}/bank/${n}/businessLoan`),Z_=()=>G(H().db,`rooms/${j}/bankEvents/current`);function ic(n,e,t,s){return{companyId:"co"+s.toString(36),ownerUid:n,ownerNickname:e||"플레이어",name:t.name,slogan:t.slogan||"",sector:t.sector,strategy:t.strategy,stage:"STARTUP",level:1,companyValue:3e7,companyCash:0,totalRevenue:0,totalCost:0,lastProfit:0,growthRate:0,brandScore:x((Ot[t.strategy]||{}).brand||0,0,100),riskScore:x((Ot[t.strategy]||{}).riskBase||20,0,100),ipoReadiness:0,employees:{},facilities:{},upgrades:{},createdAt:s,updatedAt:s,lastSettledAt:s}}function eg(n){const e=n&&typeof n=="object"?n:{};return{companyId:e.companyId||"",ownerUid:e.ownerUid||"",ownerNickname:e.ownerNickname||"플레이어",name:e.name||"",slogan:e.slogan||"",sector:e.sector||"fintech",strategy:e.strategy||"stable",stage:e.stage||"STARTUP",level:Math.max(1,p(e.level)||1),companyValue:Math.max(0,p(e.companyValue)),companyCash:p(e.companyCash),totalRevenue:Math.max(0,p(e.totalRevenue)),totalCost:Math.max(0,p(e.totalCost)),lastProfit:p(e.lastProfit),growthRate:B(e.growthRate),brandScore:x(e.brandScore,0,100),riskScore:x(e.riskScore,0,100),ipoReadiness:x(e.ipoReadiness,0,100),employees:e.employees&&typeof e.employees=="object"?e.employees:{},facilities:e.facilities&&typeof e.facilities=="object"?e.facilities:{},upgrades:e.upgrades&&typeof e.upgrades=="object"?e.upgrades:{},createdAt:p(e.createdAt),updatedAt:p(e.updatedAt),lastSettledAt:p(e.lastSettledAt)||p(e.createdAt)}}function Sr(n){return Object.values(n.employees||{}).reduce((e,t)=>e+Math.max(0,p(t&&t.count)),0)}function Tr(n){return Object.values(n.facilities||{}).reduce((e,t)=>e+Math.max(0,p(t&&t.level)),0)}function Yt(n,e){const t=(n.employees||{})[e];return Math.max(0,p(t&&t.count))}function gt(n,e){const t=(n.facilities||{})[e];return Math.max(0,p(t&&t.level))}function rc(n,e){const t=gt(n,e);return Math.floor((We[e]||{}).baseCost*Math.pow(1.6,t))}function oc(n,e){const t=Yt(n,e);return Math.floor((ie[e]||{}).cost*Math.pow(1.18,t))}function ac(n){const e={valBonus:1,loanMult:1,riskBonus:0,warnBoost:!1},t=n&&n.type;return n&&n.custom&&n.effects?(e.loanMult=x(n.effects.loanRateMultiplier,.5,1.5),e.loanMult!==1&&(e.loanMult=e.loanMult),e):(t==="lowrate"?e.loanMult=.7:t==="highrate"?(e.loanMult=1.3,e.warnBoost=!0):t==="boom"?e.valBonus=1.08:t==="bust"?(e.valBonus=.96,e.riskBonus=3,e.warnBoost=!0):t==="caution"&&(e.warnBoost=!0),e)}function lc(n,e){if(e=e||Date.now(),n&&n.manual&&(!n.expiresAt||B(n.expiresAt)>e)&&(n.title||n.type))return n;const t=new Date(e+9*36e5),s="bankevt:"+t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate();let i=2166136261;for(let l=0;l<s.length;l++)i^=s.charCodeAt(l),i=Math.imul(i,16777619);const r=["lowrate","highrate","boom","bust","insurance","cashback","vipweek","caution"],o={lowrate:"저금리 데이",highrate:"고금리 데이",boom:"투자 호황",bust:"투자 침체",insurance:"보험 우대 기간",cashback:"카드 캐시백 이벤트",vipweek:"VIP 우대 기간",caution:"금융 경계주의보"},a=r[(i>>>0)%r.length];return{type:a,title:o[a],manual:!1}}function Nn(n){return n=x(n,0,100),n>=90?"S":n>=75?"A":n>=55?"B":n>=35?"C":n>=15?"D":"F"}const tg={NORMAL:0,SILVER:1,GOLD:2,PLATINUM:3,BLACK:4};function wi(n){return tg[n]||0}const Mt={F:0,D:1,C:2,B:3,A:4,S:5};function cc(n){let e=0;const t=Nn((n&&n.creditScore)!=null?n.creditScore:60);Mt[t]>=Mt.A&&(e+=.05);const s=n&&n.vipTier||"NORMAL";return s==="SILVER"?e+=.03:s==="GOLD"?e+=.05:s==="PLATINUM"?e+=.08:s==="BLACK"&&(e+=.1),Math.min(.2,e)}const uc={S:2e8,A:12e7,B:6e7,C:3e7,D:12e6,F:0};function kr(n){const e=Nn((n&&n.creditScore)!=null?n.creditScore:60);let t=uc[e]||0;const s=n&&n.vipTier||"NORMAL";return wi(s)>=3?t=Math.floor(t*1.3):wi(s)>=2&&(t=Math.floor(t*1.1)),t}function ng(n){let e=2166136261;const t=String(n);for(let s=0;s<t.length;s++)e^=t.charCodeAt(s),e=Math.imul(e,16777619);return e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e%1e5/1e5}function Os(n,e,t){const s=p(n.lastSettledAt)||e,i=Math.max(0,e-s),r=i/864e5;if(r<=0)return{applied:!1,elapsed:i};const o=Ve[n.sector]||Ve.fintech,a=Ot[n.strategy]||Ot.stable,l=ac(t);let c=a.revMod;c*=1+Math.min(.6,Yt(n,"sales")*.04),n.sector==="ent"&&(c*=1+Math.min(.3,n.brandScore/300)),(n.sector==="fintech"||n.sector==="game"||n.sector==="security")&&(c*=1+Math.min(.3,gt(n,"server")*.05)),(n.sector==="bio"||n.sector==="robot"||n.sector==="semicon")&&(c*=1+Math.min(.3,gt(n,"lab")*.05));const d=Math.floor(n.companyValue*o.revCoef*r*c);let u=0;for(const ge of ec)u+=Yt(n,ge)*ie[ge].upkeep;let h=0;for(const ge of tc)h+=gt(n,ge)*We[ge].upkeep;let f=Math.floor((u+h)*r);f=Math.floor(f*(1-Math.min(.4,Yt(n,"account")*.05+gt(n,"accounting")*.04)));const _=Math.max(0,n.riskScore-Yt(n,"risk")*5-gt(n,"security")*4),b=Math.floor(n.companyValue*(_/100)*.01*r);f+=b;const Y=(ng(n.companyId+":"+s)-.5)*2*o.vol;let _e=Math.floor((d-f)*(1+Y)*l.valBonus);const Ie=Math.max(0,Math.floor(_e*o.valCoef*a.growth));return{applied:!0,elapsed:i,days:r,revenue:d,cost:f,profit:_e,valueGain:Ie,riskAdd:l.riskBonus,eventTitle:t&&t.title}}function hs(n,e){const t=Math.min(40,Math.floor(n.companyValue/125e6)),s=Math.min(25,Math.floor(n.brandScore*.25)),i=n.lastProfit>0?12:0,r=Math.min(12,Tr(n)*1.5),o=Math.min(8,Sr(n)),a=Math.floor(n.riskScore*.25),c=(e&&e.businessLoan?p(e.businessLoan.principal)+p(e.businessLoan.interest):0)>0?8:0;return x(t+s+i+r+o-a-c,0,100)}function dc(n,e){const t=n.companyValue,s=Sr(n),i=Tr(n),r=n.ipoReadiness,o=Nn((e&&e.creditScore)!=null?e.creditScore:60),a=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;switch(n.stage){case"STARTUP":if(t>=5e7&&s>=3&&i>=2)return"SMALL_BIZ";break;case"SMALL_BIZ":if(t>=2e8&&n.brandScore>=30&&n.lastProfit>=1e7)return"SCALE_UP";break;case"SCALE_UP":if(t>=1e9&&s>=20&&n.brandScore>=60)return"ENTERPRISE";break;case"ENTERPRISE":if(t>=5e9&&r>=70&&n.riskScore<=40)return"PRE_IPO";break;case"PRE_IPO":if(r>=100&&Mt[o]>=Mt.B&&!a)return"LISTED";break}return null}function re(n,e,t,s){return{type:n,title:e||"",amount:p(t),memo:s||"",createdAt:Date.now()}}async function ce(n,e){await Ze(sc(n),e)}async function Rr(n){const e=Date.now(),[t,s,i,r,o]=await Promise.all([mt(J_(n)),mt(te(n)),mt(X_(n)),mt(Z_()),mt(N_(sc(n),A_(),k_(15)))]),a=t.val()||{},l=p(a.cash),c=a.nickname||i.val()&&i.val().nickname||"플레이어",d=i.val()||{},u=lc(r.val(),e);let f=s.exists()?eg(s.val()):null,_=null;if(f){await sg(n,d,e);const C=Os(f,e,u);C.applied&&C.elapsed>=Ir?(f=hc(f,C,e),f.ipoReadiness=hs(f,d),await we(te(n),Ar(f)),await ce(n,re("settle","실적 정산",C.profit,`매출 ${D(C.revenue)} · 비용 ${D(C.cost)}${C.eventTitle?" · "+C.eventTitle:""}`)),_=C):f.ipoReadiness=hs(f,d)}const b=o.exists()?Object.entries(o.val()).map(([C,Y])=>({id:C,...Y})).sort((C,Y)=>B(Y.createdAt)-B(C.createdAt)):[];return{uid:n,cash:l,nickname:c,company:f,bank:d,event:u,logs:b,settleFeed:_}}function hc(n,e,t){const s={...n};return s.companyCash=Math.max(0,p(n.companyCash)+e.profit),s.companyValue=Math.max(0,p(n.companyValue)+e.valueGain),s.totalRevenue=p(n.totalRevenue)+Math.max(0,e.revenue),s.totalCost=p(n.totalCost)+Math.max(0,e.cost),s.lastProfit=e.profit,s.growthRate=s.companyValue>0?e.profit/s.companyValue:0,s.riskScore=x(n.riskScore+(e.riskAdd||0)+(e.profit<0?2:-1),0,100),s.lastSettledAt=t,s}function Ar(n){return{companyId:n.companyId,ownerUid:n.ownerUid,ownerNickname:n.ownerNickname,name:n.name,slogan:n.slogan,sector:n.sector,strategy:n.strategy,stage:n.stage,level:Math.max(1,p(n.level)),companyValue:Math.max(0,p(n.companyValue)),companyCash:p(n.companyCash),totalRevenue:Math.max(0,p(n.totalRevenue)),totalCost:Math.max(0,p(n.totalCost)),lastProfit:p(n.lastProfit),growthRate:B(n.growthRate),brandScore:x(n.brandScore,0,100),riskScore:x(n.riskScore,0,100),ipoReadiness:x(n.ipoReadiness,0,100),employees:n.employees||{},facilities:n.facilities||{},upgrades:n.upgrades||{},createdAt:p(n.createdAt),updatedAt:Date.now(),lastSettledAt:p(n.lastSettledAt)}}async function fc(n,e,t){if(e=Math.max(0,p(e)),e<=0)return 0;const s=Date.now(),i=(await mt(G(H().db,`rooms/${j}/bank/${n}/card`))).val()||{};if(!i.enabled||i.suspended||i.lost)return-1;if(i.overdue)return-3;const r=p(i.cardLimit),o=p(i.usedAmount);if(o+e>r)return-2;const a=B(i.dueAt)>0?B(i.dueAt):s+24*3600*1e3;return await we(G(H().db,`rooms/${j}/bank/${n}/card`),{usedAmount:o+e,dueAt:a,updatedAt:s}),await Ze(G(H().db,`rooms/${j}/bank/${n}/tx`),{type:"card_use",title:t||"Company 결제",amount:-e,beforeCash:0,afterCash:0,memo:"게임머니 카드 결제(청구 예정) · Company",createdAt:s}),await Ze(G(H().db,`rooms/${j}/bank/${n}/messages`),{type:"card",title:"STONK Card 결제",body:`${t||"Company 결제"} ${D(e)}이 카드로 결제되었습니다(청구 예정).`,amount:-e,relatedId:"",read:!1,actionLabel:"",actionUrl:"",createdAt:s}),e}function pc(n){return n===-2?"STONK Card 한도 초과로 결제할 수 없습니다.":n===-3?"카드 미납 상태로 결제할 수 없습니다. 먼저 청구액을 납부해 주세요.":"카드가 미발급/정지/분실 상태입니다. 결제수단을 변경해 주세요."}async function sg(n,e,t){const s=e&&e.businessLoan;if(!s||p(s.principal)<=0)return;const i=p(s.lastSettledAt)||t,r=Math.max(0,t-i)/864e5;if(r<Ir/864e5)return;const o=Math.floor(p(s.principal)*Cr*r);o<=0||(await we(_n(n),{interest:p(s.interest)+o,lastSettledAt:t,updatedAt:t}),e.businessLoan.interest=p(s.interest)+o,e.businessLoan.lastSettledAt=t)}async function mc(n,e,t){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!t.company)throw new Error("먼저 회사를 설립하세요.");const s=t.bank&&t.bank.businessLoan||{},i=kr(t.bank),r=p(s.principal);if(i<=0)throw new Error("현재 신용등급으로는 사업대출이 불가합니다.");if(r+e>i)throw new Error(`사업대출 한도 초과 (한도 ${D(i)}, 현재 ${D(r)})`);const o=Date.now();return await we(_n(n),{principal:r+e,interest:p(s.interest),limit:i,companyId:t.company.companyId,lastSettledAt:p(s.lastSettledAt)||o,createdAt:p(s.createdAt)||o,updatedAt:o}),await le(te(n),a=>a&&(a.companyCash=p(a.companyCash)+e,a.updatedAt=o,a)),await Ze(G(H().db,`rooms/${j}/bank/${n}/tx`),{type:"biz_loan",title:"사업대출 실행",amount:e,beforeCash:0,afterCash:0,memo:`회사자금 입금 · 잔액 ${D(r+e)}`,createdAt:o}),await ce(n,re("loan","사업대출 실행",e,`회사 자금 +${D(e)}`)),`사업대출 완료 (+${D(e)} → 회사 자금)`}async function Ei(n,e,t,s){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");const i=s.bank&&s.bank.businessLoan||{},r=p(i.principal)+p(i.interest);if(r<=0)throw new Error("상환할 사업대출이 없습니다.");const o=Math.min(e,r),a=Date.now();if(t==="cash"){if(!(await le(Ps(n),_=>{const b=_==null?p(s.cash):p(_);if(!(b<o))return b-o})).committed)throw new Error("보유 현금이 부족합니다.")}else{if(!s.company||p(s.company.companyCash)<o)throw new Error("회사 자금이 부족합니다.");await le(te(n),f=>{if(!f)return f;if(!(p(f.companyCash)<o))return f.companyCash=p(f.companyCash)-o,f.updatedAt=a,f})}let l=o;const c=Math.min(l,p(i.interest));l-=c;const d=Math.min(l,p(i.principal)),u=Math.max(0,p(i.principal)-d),h=Math.max(0,p(i.interest)-c);return await we(_n(n),{principal:u,interest:h,updatedAt:a}),await Ze(G(H().db,`rooms/${j}/bank/${n}/tx`),{type:"biz_repay",title:"사업대출 상환",amount:-o,beforeCash:0,afterCash:0,memo:`이자 ${D(c)} · 원금 ${D(d)} · ${t==="cash"?"개인현금":"회사자금"}`,createdAt:a}),await ce(n,re("loan","사업대출 상환",-o,`이자 ${D(c)} · 원금 ${D(d)}`)),u+h<=0?"사업대출 전액 상환 완료 🎉":`상환 완료 (잔액 ${D(u+h)})`}function _c(n){return String(n||"").replace(/[<>{}\[\]\\/]/g,"").trim().slice(0,24)}function gc(n){return Math.max(1,Math.floor(Ns*(1-cc(n))))}async function vc(n,e,t){if(t.company)throw new Error("이미 회사를 보유하고 있습니다. (유저당 1개)");const s=_c(e.name);if(!s)throw new Error("회사명을 입력하세요.");if(!Ve[e.sector])throw new Error("업종을 선택하세요.");if(!Ot[e.strategy])throw new Error("시작 전략을 선택하세요.");const i=gc(t.bank),r=Date.now(),o=e.payMethod||"cash";if(o==="card"){const l=await fc(n,i,"회사 설립");if(l<=0)throw new Error(pc(l))}else if(o==="loan"){const l=kr(t.bank),c=t.bank&&t.bank.businessLoan||{};if(l<=0||p(c.principal)+i>l)throw new Error("사업대출 한도가 부족합니다. 현금/카드로 설립하거나 한도를 확인하세요.");await we(_n(n),{principal:p(c.principal)+i,interest:p(c.interest),limit:l,companyId:"pending",lastSettledAt:p(c.lastSettledAt)||r,createdAt:p(c.createdAt)||r,updatedAt:r})}else if(!(await le(Ps(n),c=>{const d=c==null?p(t.cash):p(c);if(!(d<i))return d-i})).committed)throw new Error("보유 현금이 부족합니다. (Bank 사업대출/카드 결제를 이용할 수 있습니다)");const a=ic(n,t.nickname,{name:s,slogan:e.slogan,sector:e.sector,strategy:e.strategy},r);return await Er(te(n),Ar(a)),o==="loan"&&await we(_n(n),{companyId:a.companyId}),await ce(n,re("found","회사 설립",-i,`${Ve[e.sector].label} · ${o==="card"?"카드 결제":o==="loan"?"사업대출":"현금"}`)),await Ze(G(H().db,`rooms/${j}/companyNews`),{uid:n,companyName:s,type:"found",title:`${s} 설립`,body:`${Ve[e.sector].label} 업종의 새 회사가 STONK 타이쿤에 등장했습니다.`,impact:"neutral",createdAt:r}),`${s} 설립 완료! (${Ve[e.sector].label})`}async function yc(n,e,t){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!t.company)throw new Error("먼저 회사를 설립하세요.");if(!(await le(Ps(n),r=>{const o=r==null?p(t.cash):p(r);if(!(o<e))return o-e})).committed)throw new Error("보유 현금이 부족합니다.");const i=Date.now();return await le(te(n),r=>r&&(r.companyCash=p(r.companyCash)+e,r.companyValue=p(r.companyValue)+Math.floor(e*.3),r.updatedAt=i,r)),await ce(n,re("invest","회사에 출자",e,"개인 현금 → 회사 자금")),`출자 완료 (+${D(e)} 회사 자금)`}async function bc(n,e,t){if(e=p(e),e<=0)throw new Error("금액을 확인하세요.");if(!t.company||p(t.company.companyCash)<e)throw new Error("회사 자금이 부족합니다.");const s=Date.now();return await le(te(n),i=>{if(!i)return i;if(!(p(i.companyCash)<e))return i.companyCash=p(i.companyCash)-e,i.brandScore=x(B(i.brandScore)-1,0,100),i.riskScore=x(B(i.riskScore)+1,0,100),i.updatedAt=s,i}),await le(Ps(n),i=>p(i)+e),await ce(n,re("withdraw","회사 자금 인출",e,"회사 자금 → 개인 현금")),`인출 완료 (+${D(e)} 개인 현금)`}async function Nr(n,e,t,s,i){if(s==="card"){const r=await fc(n,e,i);if(r<=0)throw new Error(pc(r));return"card"}if(!t.company||p(t.company.companyCash)<e)throw new Error("회사 자금이 부족합니다. (출자/사업대출/카드 결제를 이용하세요)");return await le(te(n),r=>{if(!r)return r;if(!(p(r.companyCash)<e))return r.companyCash=p(r.companyCash)-e,r.updatedAt=Date.now(),r}),"company"}async function wc(n,e,t,s){if(!ie[e])throw new Error("직원 타입을 확인하세요.");if(!t.company)throw new Error("먼저 회사를 설립하세요.");const i=oc(t.company,e);await Nr(n,i,t,s,`${ie[e].label} 고용`);const r=Date.now();return await le(te(n),o=>{if(!o)return o;o.employees=o.employees||{};const a=o.employees[e]||{count:0,level:1};return a.count=p(a.count)+1,a.level=Math.max(1,p(a.level)),o.employees[e]=a,Pr(o,e,1),o.updatedAt=r,o}),await ce(n,re("hire",`${ie[e].label} 고용`,-i,s==="card"?"카드 결제":"회사 자금")),`${ie[e].label} 고용 완료`}async function Ec(n,e,t){if(!t.company)throw new Error("회사가 없습니다.");const s=(t.company.employees||{})[e];if(!s||p(s.count)<=0)throw new Error("해고할 직원이 없습니다.");return await le(te(n),i=>{if(!i)return i;const r=(i.employees||{})[e];if(!(!r||p(r.count)<=0))return r.count=p(r.count)-1,Pr(i,e,-1),i.updatedAt=Date.now(),i}),await ce(n,re("fire",`${ie[e].label} 해고`,0,"인건비 절감")),`${ie[e].label} 1명 해고`}function Ic(n,e){const t=(n.employees||{})[e]||{};return Math.floor((ie[e]||{}).cost*.6*Math.max(1,p(t.level)))}async function Cc(n,e,t,s){if(!t.company)throw new Error("회사가 없습니다.");const i=(t.company.employees||{})[e];if(!i||p(i.count)<=0)throw new Error("먼저 직원을 고용하세요.");const r=Ic(t.company,e);return await Nr(n,r,t,s,`${ie[e].label} 레벨업`),await le(te(n),o=>{if(!o)return o;const a=(o.employees||{})[e];if(a)return a.level=Math.max(1,p(a.level))+1,Pr(o,e,.5),o.updatedAt=Date.now(),o}),await ce(n,re("levelup",`${ie[e].label} 레벨업`,-r,"")),`${ie[e].label} 레벨업 완료`}function Pr(n,e,t){e==="marketer"?n.brandScore=x(B(n.brandScore)+3*t,0,100):e==="risk"?n.riskScore=x(B(n.riskScore)-4*t,0,100):e==="researcher"?n.ipoReadiness=x(B(n.ipoReadiness)+2*t,0,100):e==="brand"?n.brandScore=x(B(n.brandScore)+2*t,0,100):e==="dev"&&(n.growthRate=B(n.growthRate))}async function Sc(n,e,t,s){if(!We[e])throw new Error("시설을 확인하세요.");if(!t.company)throw new Error("먼저 회사를 설립하세요.");const i=rc(t.company,e);return await Nr(n,i,t,s,`${We[e].label} 업그레이드`),await le(te(n),r=>{if(!r)return r;r.facilities=r.facilities||{};const o=r.facilities[e]||{level:0};return o.level=p(o.level)+1,r.facilities[e]=o,e==="marketing"&&(r.brandScore=x(B(r.brandScore)+3,0,100)),e==="security"&&(r.riskScore=x(B(r.riskScore)-3,0,100)),r.companyValue=p(r.companyValue)+Math.floor(i*.4),r.updatedAt=Date.now(),r}),await ce(n,re("facility",`${We[e].label} 업그레이드`,-i,s==="card"?"카드 결제":"회사 자금")),`${We[e].label} 업그레이드 완료`}async function Tc(n,e){if(!e.company)throw new Error("회사가 없습니다.");const t=Date.now(),s=Os(e.company,t,e.event);if(!s.applied)throw new Error("정산할 내용이 없습니다.");const i=hc(e.company,s,t);return i.ipoReadiness=hs(i,e.bank),await we(te(n),Ar(i)),await ce(n,re("settle","실적 정산",s.profit,`매출 ${D(s.revenue)} · 비용 ${D(s.cost)}${s.eventTitle?" · "+s.eventTitle:""}`)),s.profit>=0?`정산 완료: 순이익 +${D(s.profit)}`:`정산 완료: 손실 ${D(s.profit)} (경영 주의)`}async function kc(n,e){if(!e.company)throw new Error("회사가 없습니다.");const t=dc(e.company,e.bank);if(!t)throw new Error("아직 다음 단계 조건을 충족하지 않았습니다.");return await we(te(n),{stage:t,level:p(e.company.level)+1,updatedAt:Date.now()}),await ce(n,re("stage","단계 승급",0,`${_t[e.company.stage]} → ${_t[t]}`)),await Ze(G(H().db,`rooms/${j}/companyNews`),{uid:n,companyName:e.company.name,type:"stage",title:`${e.company.name} ${_t[t]} 승급`,body:`${e.company.name}이(가) ${_t[t]} 단계로 성장했습니다.`,impact:"up",createdAt:Date.now()}),`🎉 ${_t[t]} 단계로 승급했습니다!`}function Rc(n,e){const t=Nn((e&&e.creditScore)!=null?e.creditScore:60);e&&e.businessLoan&&p(e.businessLoan.principal)+p(e.businessLoan.interest);const s=e&&e.businessLoan&&p(e.businessLoan.interest)>p(e.businessLoan.principal)*.3;return[{ok:n.companyValue>=5e9,label:"회사 가치 50억원 이상"},{ok:n.brandScore>=70,label:"브랜드 점수 70 이상"},{ok:n.riskScore<=40,label:"리스크 점수 40 이하"},{ok:n.lastProfit>0,label:"최근 순이익 플러스"},{ok:Mt[t]>=Mt.B,label:"Bank 신용등급 B 이상"},{ok:!s,label:"사업대출 연체 없음"}]}async function Ac(n,e){if(!e.company)throw new Error("회사가 없습니다.");const t=e.company;if(t.ipoReadiness<100)throw new Error("IPO 준비도가 100%가 아닙니다.");if(!Rc(t,e.bank).every(l=>l.ok))throw new Error("IPO 체크리스트를 모두 충족해야 합니다.");const i=Date.now(),r=("STK"+(t.name.replace(/[^A-Za-z0-9가-힣]/g,"").slice(0,3).toUpperCase()||"CO")+String(i%100)).slice(0,8),o=Math.max(1e3,Math.floor(t.companyValue/1e6)),a=t.companyValue;return await Er(G(H().db,`rooms/${j}/companyMarket/${n}`),{listed:!1,status:"candidate",ticker:r,ipoPrice:o,marketCap:a,sector:t.sector,companyName:t.name,listedAt:0,createdAt:i,updatedAt:i}),await we(te(n),{stage:"LISTED",level:p(t.level)+1,updatedAt:i}),await ce(n,re("ipo","IPO 상장 후보 등록",0,`티커 ${r} · 공모가 ${D(o)}`)),await Ze(G(H().db,`rooms/${j}/companyNews`),{uid:n,companyName:t.name,type:"ipo",title:`${t.name} 상장 후보 등록`,body:`${t.name}이(가) IPO 심사를 통과해 상장 후보(${r})로 등록되었습니다. Battle 종목 편입은 v3.1에서 진행됩니다.`,impact:"up",createdAt:i}),`🏆 IPO 상장 후보 등록 완료! (티커 ${r})`}const ig=Object.freeze(Object.defineProperty({__proto__:null,BIZ_LIMIT_BY_GRADE:uc,BIZ_LOAN_RATE_DAY:Cr,EMPLOYEES:ie,EMPLOYEE_IDS:ec,FACILITIES:We,FACILITY_IDS:tc,FOUND_COST:Ns,ROOM:j,SECTORS:Ve,SECTOR_IDS:Y_,SETTLE_MIN_MS:Ir,STAGES:nc,STAGE_LABEL:_t,STRATEGIES:Ot,applyIpo:Ac,bizLoanLimit:kr,clamp:x,computeIpo:hs,computeSettle:Os,defaultCompany:ic,empCount:Sr,employeeCost:oc,employeeLevelCost:Ic,eventEffects:ac,facilityCost:rc,facilityTotal:Tr,fireEmployee:Ec,foundCompany:vc,foundCost:gc,foundDiscount:cc,gradeFromScore:Nn,hireEmployee:wc,int:p,investToCompany:yc,ipoChecklist:Rc,levelUpEmployee:Cc,loadState:Rr,logItem:re,nextStage:dc,num:B,promoteStage:kc,repayBusinessLoan:Ei,resolveEvent:lc,sanitizeName:_c,settleNow:Tc,stageRank:Q_,takeBusinessLoan:mc,upgradeFacility:Sc,vipRank:wi,withdrawFromCompany:bc,won:D},Symbol.toStringTag,{value:"Module"})),{won:S,int:L,num:rg,SECTORS:J,SECTOR_IDS:Nc,STRATEGIES:Ln,EMPLOYEES:og,EMPLOYEE_IDS:Pc,FACILITIES:Ii,FACILITY_IDS:Or,STAGE_LABEL:Lt,stageRank:ag,empCount:Ms,facilityTotal:Vn,facilityCost:lg,employeeCost:cg,employeeLevelCost:ug,foundCost:Mr,foundDiscount:Oc,gradeFromScore:Mc,bizLoanLimit:dg,nextStage:hg,ipoChecklist:fg}=ig,pg="yaV8N60yIiUggaWNpNF2VhkCwxb2",Q=document.getElementById("app");let g=null,ue="dashboard",Lc=!1,Ct=!1,oe="cash",ne={name:"",sector:"fintech",strategy:"stable",slogan:""},Ci=!1;mg();async function mg(){if(!W_){Go("Firebase 설정이 비어 있습니다.");return}gg();let n=null;try{n=await H_()}catch{}if(!n){K_({message:"STONK Home에서 로그인 후 이용해 주세요. 같은 계정의 자산이 그대로 연결됩니다."}),vg();return}try{Lc=n.uid===pg||String(n.email||"").toLowerCase()==="tomem@naver.com",g=await Rr(n.uid),Fe(),_g()}catch(e){console.error("[company] 로드 실패:",e),Go("회사 데이터를 불러오지 못했습니다: "+(e&&e.message))}}async function Dc(){if(g){try{g=await Rr(g.uid)}catch(n){console.warn(n)}Fe()}}function F(n){return String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function gn(n,e="ok"){const t=document.createElement("div");t.className="co-toast "+e,t.textContent=n,document.body.appendChild(t),setTimeout(()=>{t.classList.add("hide"),setTimeout(()=>t.remove(),280)},2400)}async function ve(n){if(!Ct){Ct=!0;try{const e=await n();e&&gn(e,"ok"),await Dc()}catch(e){gn(e&&e.message||"오류가 발생했습니다.","err")}finally{Ct=!1}}}function Kt(n){const e=document.getElementById(n);return e?Math.floor(Number(e.value)||0):0}function xc(){try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}}function _g(){if(g&&g.settleFeed&&g.settleFeed.applied){const n=g.settleFeed.profit;gn(`실적 정산: ${n>=0?"+":""}${S(n)}`,n>=0?"ok":"warn")}}function gg(){Q.innerHTML='<div class="co-center"><div class="co-spin"></div><p>STONK Company 연결 중…</p></div>'}function Go(n){Q.innerHTML=`<div class="co-center"><h2>⚠️ 오류</h2><p>${F(n)}</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로</a></div>`}function vg(){Q.innerHTML='<div class="co-center"><div class="co-logo"><span class="co-mark">🏢</span><b>STONK</b> Company</div><h2>로그인이 필요합니다</h2><p class="muted">STONK Home에서 로그인 후 이용해 주세요.</p><a class="co-btn primary" href="../STONK-Home/index.html">STONK Home으로 이동</a></div>'}function Fe(){if(!g)return;g.company;const n=g.bank||{};Q.className=n.vipTier==="BLACK"?"is-black":"";const e=[["dashboard","대시보드"],["company","회사정보"],["employees","직원"],["facilities","시설"],["funds","자금/Bank"],["ipo","IPO"],["logs","뉴스/로그"]];Q.innerHTML=`
    <header class="co-header">
      <a class="co-brand" href="#" data-home title="STONK Company 메인"><span class="co-mark">🏢</span><b>STONK</b> Company</a>
      <div class="co-nav">
        <a href="../STONK-Home/index.html">홈</a>
        <a href="../STONK-Battle/index.html">주식시장</a>
        <a href="../STONK-Bank/index.html">은행</a>
        <a href="../STONK-Board/index.html">주식소식</a>
        ${Lc?'<a href="../STONK-Admin/market-admin.html">관리자</a>':""}
      </div>
      <div class="co-user"><span class="co-nick">${F(g.nickname)}</span>${n.vipTier&&n.vipTier!=="NORMAL"?`<span class="co-vip v-${n.vipTier}">${$c(n.vipTier)}</span>`:""}</div>
    </header>
    <nav class="co-tabs">${e.map(([t,s])=>`<button class="co-tab ${ue===t?"active":""}" data-tab="${t}">${s}</button>`).join("")}</nav>
    <main class="co-main">${bg()}</main>
    <footer class="co-footer">STONK Company는 게임머니 기반 경영 시스템입니다. 실제 회사 설립·투자·주식과 무관합니다.</footer>`,Fg()}const yg={NORMAL:"일반",SILVER:"실버",GOLD:"골드",PLATINUM:"플래티넘",BLACK:"블랙"};function $c(n){return yg[n]||"일반"}function bg(){return!g.company&&ue!=="dashboard"&&ue!=="company"&&(ue="dashboard"),ue==="company"?Pg():ue==="employees"?Og():ue==="facilities"?Mg():ue==="funds"?Lg():ue==="ipo"?Dg():ue==="logs"?$g():Eg()}function Si(){const n=g.event;return n?`<div class="co-event"><span>📰</span><div><b>오늘의 금융 이벤트 · ${F(n.title)}</b><small>Bank 이벤트가 회사 가치·사업대출에 소폭 반영됩니다. (게임머니)</small></div></div>`:""}function wg(n){const e=Math.min(5,1+Math.floor(Vn(n)/2)+ag(n.stage)),t=(g.bank||{}).vipTier==="BLACK";return`<div class="co-hq tier-${e} ${t?"black":""}">
    <div class="hq-sky"></div>
    <div class="hq-building">${"🏢".repeat(Math.min(3,1+Math.floor(Vn(n)/4)))}</div>
    <div class="hq-meta"><b>${F(n.name)}</b><span>${J[n.sector].icon} ${J[n.sector].label} · ${Lt[n.stage]}</span>
      <small>직원 ${Ms(n)}명 · 시설 Lv.${Vn(n)} · 브랜드 ${L(n.brandScore)}</small></div>
  </div>`}function nn(n,e,t){return`<div class="co-gauge"><div class="cg-head"><span>${n}</span><b>${L(e)}%</b></div><div class="cg-bar ${t||""}"><span style="width:${Math.max(0,Math.min(100,L(e)))}%"></span></div></div>`}function O(n,e,t){return`<div class="co-row"><span>${n}</span><b class="${t||""}">${e}</b></div>`}function Eg(){const n=g.company,e=g.bank||{};if(!n){const o=Mr(e),a=Oc(e);return`${Si()}
      <div class="co-card hero">
        <h2>아직 설립한 회사가 없습니다.</h2>
        <p class="muted">내 회사를 세우고, 키우고, 상장시키는 <b>STONK 타이쿤</b>을 시작하세요. 모든 금액은 게임머니입니다.</p>
        <div class="co-row"><span>설립 비용</span><b>${a>0?`<s class="muted">${S(Ns)}</s> ${S(o)} <small class="ok">${Math.round(a*100)}% 할인</small>`:S(o)}</b></div>
        <div class="co-row"><span>보유 현금</span><b>${S(g.cash)}</b></div>
        <button class="co-btn primary big" data-tab="company">회사 설립하러 가기</button>
        <p class="co-note">현금이 부족하면 자금/Bank 탭에서 <b>사업대출</b>을 받거나 <b>STONK Card</b>로 결제할 수 있습니다.</p>
      </div>
      <div class="co-grid">${Nc.slice(0,6).map(l=>Cg(l)).join("")}</div>`}const t=n.ipoReadiness,s=hg(n,e),i=e.businessLoan||{},r=L(i.principal)+L(i.interest);return Ci?Ag(n,e):`${Si()}
    <div class="co-grid">
      <div class="co-card span2 office-card">
        <h3>라이브 오피스 <span class="co-tag">${J[n.sector].icon} ${J[n.sector].label} · ${Lt[n.stage]}</span>
          <button class="co-btn ghost small" data-act="photo" style="float:right">📷 스냅샷</button></h3>
        ${Fc(n,e)}
        <div class="co-quick">
          <button class="co-btn primary" data-act="settle">📊 실적 정산</button>
          <button class="co-btn" data-tab="employees">👥 직원</button>
          <button class="co-btn" data-tab="facilities">🏗️ 시설</button>
          ${s?`<button class="co-btn gold" data-act="promote">⬆️ ${Lt[s]} 승급</button>`:""}
        </div>
      </div>
      <div class="co-card office-status">${Rg(n,e)}</div>
      <div class="co-card">
        <h3>경영 지표</h3>
        ${O("회사 가치",S(n.companyValue))}
        ${O("회사 자금",S(n.companyCash),n.companyCash<=0?"warn":"")}
        ${O("최근 순이익",(n.lastProfit>=0?"+":"")+S(n.lastProfit),n.lastProfit<0?"warn":"ok")}
        ${O("누적 매출 / 비용",S(n.totalRevenue)+" / "+S(n.totalCost))}
        ${O("성장률",(rg(n.growthRate)*100).toFixed(2)+"%")}
      </div>
      <div class="co-card">
        <h3>회사 상태</h3>
        ${nn("IPO 준비도",t,t>=70?"ok":"")}
        ${nn("브랜드 점수",n.brandScore,"blue")}
        ${nn("리스크 점수",n.riskScore,n.riskScore>60?"danger":"warn")}
      </div>
      <div class="co-card">
        <h3>Bank 연동</h3>
        ${O("신용등급",Mc(e.creditScore!=null?e.creditScore:60))}
        ${O("VIP 등급",$c(e.vipTier))}
        ${O("카드",Ig(e.card))}
        ${O("사업대출",r>0?S(r):"없음",r>0?"warn":"")}
        <button class="co-btn ghost small" data-tab="funds">자금/Bank 관리</button>
      </div>
      <div class="co-card span2">
        <h3>최근 경영 로그</h3>
        ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.slice(0,6).map(Uc).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
      </div>
    </div>`}function Ig(n){return n=n||{},n.enabled?n.lost?"분실":n.suspended?"정지":n.overdue?"미납":"정상":"미발급"}function Cg(n){const e=J[n];return`<div class="co-card sector-mini"><div class="sm-ico">${e.icon}</div><b>${e.label}</b><small>${F(e.note)}</small></div>`}const sn={dev:{e:"💻",cls:"dev",act:"typing",bub:"코드 작성 중"},marketer:{e:"📣",cls:"marketer",act:"presenting",bub:"신규 캠페인 준비 중"},sales:{e:"🤝",cls:"sales",act:"walking",bub:"고객 미팅 준비 중"},account:{e:"🧮",cls:"account",act:"typing",bub:"비용 정산 중"},risk:{e:"🧯",cls:"risk",act:"checking",bub:"리스크 점검 중"},researcher:{e:"🔭",cls:"researcher",act:"researching",bub:"IPO 자료 검토 중"},ops:{e:"🛠️",cls:"ops",act:"walking",bub:"사무실 순찰 중"},brand:{e:"✨",cls:"brand",act:"presenting",bub:"브랜드 지표 상승 중"}},Sg={office:"🏢",server:"🖥️",lab:"🧪",marketing:"📈",accounting:"📒",security:"🔒"},Tg=16;function kg(n){const e=[];for(const t of Pc){const s=(n.employees||{})[t]||{},i=Math.max(0,L(s.count)),r=Math.max(1,L(s.level));for(let o=0;o<i;o++)e.push({type:t,level:r})}return e}function qo(n,e,t){const s=sn[n.type]||sn.dev;return`<div class="av av-${s.cls} act-${s.act}" style="--d:${e%8*.35}s">
    <div class="av-person"><span class="av-head"></span><span class="av-torso"></span></div>
    <span class="av-badge">${s.e}</span>${n.level>1?`<i class="av-lv">Lv${n.level}</i>`:""}
    ${t?`<span class="av-bubble">${s.bub}</span>`:""}
  </div>`}function Fc(n,e){const t=(e||{}).vipTier==="BLACK",s=kg(n),i=s.length,r=s.slice(0,Tg),o=i-r.length,a=r.filter(f=>(sn[f.type]||{}).act!=="walking"),l=r.filter(f=>(sn[f.type]||{}).act==="walking"),c=L(((n.facilities||{}).office||{}).level),d=Math.max(a.length,c*2+3,4),u=[];for(let f=0;f<Math.min(d,12);f++){const _=a[f];u.push(`<div class="desk ${_?"occupied":""}"><span class="monitor ${_&&sn[_.type].act==="typing"?"on":""}"></span>${_?qo(_,f,f<3):""}</div>`)}const h=Or.map(f=>{const _=L(((n.facilities||{})[f]||{}).level),b=f==="server"&&["fintech","game","security"].includes(n.sector)||f==="lab"&&["bio","robot","semicon"].includes(n.sector);return`<div class="fac-obj ${_>0?"lv"+Math.min(4,_):"locked"} ${b?"hot":""}" title="${F(Ii[f].label)} Lv.${_}"><span class="fo-ico">${Sg[f]}</span><i>${Ii[f].label}</i>${_>0?`<b>Lv.${_}</b>`:'<b class="muted">잠김</b>'}</div>`}).join("");return`<div class="office stage-${n.stage} sector-${n.sector} ${t?"black":""}" aria-label="라이브 오피스">
    <div class="office-deco"></div>
    <div class="office-floor">
      <div class="desk-grid">${u.join("")}</div>
      ${l.length?`<div class="walk-lane">${l.map((f,_)=>qo(f,_,_===0)).join("")}</div>`:""}
      <div class="meeting-zone"><span class="board"></span>${r.find(f=>f.type==="marketer"||f.type==="brand")?'<span class="board-dot"></span>':""}</div>
    </div>
    <div class="fac-shelf">${h}</div>
    ${i===0?'<div class="office-empty">🪑 텅 빈 사무실 — <b>직원을 고용해 회사를 움직여 보세요</b></div>':o>0?`<div class="office-more">+${o}명 근무 중</div>`:""}
    <div class="office-tag">게임머니 기반 타이쿤 오피스</div>
  </div>`}function Rg(n,e){const t=g.event||{},s=Ms(n),i=Vn(n),r=n.companyCash>0&&s>0?"활발":s>0?"유지":"정지",o=Math.min(100,Math.round(i/(Or.length*3)*100)),a=e.businessLoan?L(e.businessLoan.principal)+L(e.businessLoan.interest):0,l=[];return s===0&&l.push("직원을 고용해 회사를 가동하세요."),n.companyCash<=0&&l.push("회사 자금이 부족합니다. 출자/사업대출을 검토하세요."),n.riskScore>60&&l.push("리스크가 높습니다. 보안실 또는 리스크 매니저를 강화하세요."),i<4&&l.push("시설 업그레이드 여지가 있습니다."),n.ipoReadiness>=70&&n.stage!=="LISTED"&&l.push("IPO 준비도 70%↑ — 상장 심사 준비를 시작하세요."),t.type==="lowrate"&&l.push("저금리 이벤트 중 — 사업대출 조건이 유리합니다."),(t.type==="highrate"||t.type==="caution")&&l.push("금융 경계 분위기 — 고액 대출/카드 사용에 주의하세요."),l.length||l.push("직원들이 안정적으로 업무 중입니다."),`<h3>오늘의 사무실</h3>
    <div class="co-row"><span>분위기</span><b>${{활발:"활기찬 사무실 🌟",유지:"차분한 사무실 🙂",정지:"조용한 사무실 😴"}[r]}</b></div>
    <div class="co-row"><span>직원 활동도</span><b>${s}명 · ${r}</b></div>
    ${nn("시설 가동률",o,o>=60?"ok":"")}
    <div class="co-row"><span>리스크 경보</span><b class="${n.riskScore>60?"warn":"ok"}">${n.riskScore>60?"주의":"안정"}</b></div>
    <div class="co-row"><span>Bank 이벤트</span><b>${F(t.title||"—")}</b></div>
    <div class="co-row"><span>사업대출 부담</span><b class="${a>0?"warn":""}">${a>0?S(a):"없음"}</b></div>
    <div class="office-recs"><b>다음 추천 행동</b><ul>${l.slice(0,3).map(d=>`<li>${F(d)}</li>`).join("")}</ul></div>`}function Ag(n,e){return`<div class="photo-wrap">
    <div class="co-card office-card photo">
      <div class="photo-head"><div><b>${F(n.name)}</b><small>${J[n.sector].icon} ${J[n.sector].label} · ${Lt[n.stage]}</small></div>
        <button class="co-btn ghost small" data-act="photo">닫기</button></div>
      ${Fc(n,e)}
      <div class="photo-stats">
        <div><span>회사 가치</span><b>${S(n.companyValue)}</b></div>
        <div><span>IPO 준비도</span><b>${L(n.ipoReadiness)}%</b></div>
        <div><span>직원</span><b>${Ms(n)}명</b></div>
        <div><span>단계</span><b>${Lt[n.stage]}</b></div>
      </div>
      <p class="co-note">내 회사 스냅샷 · 게임머니 기반 타이쿤입니다.</p>
    </div>
  </div>`}function Ng(n){try{const e=document.createElement("div");e.className="co-settle-dim";const t=n.profit>=0;e.innerHTML=`<div class="co-settle ${t?"good":"bad"}">
      <h3>${t?"📈 실적 정산 완료":"📉 실적 정산 · 손실 주의"}</h3>
      <div class="cs-rows">
        <div><span>매출</span><b class="ok">+${S(n.revenue)}</b></div>
        <div><span>비용</span><b class="warn">−${S(n.cost)}</b></div>
        <div class="cs-profit"><span>순이익</span><b class="cs-count ${t?"ok":"warn"}" data-to="${n.profit}">${t?"+":"−"}${S(0)}</b></div>
        <div><span>회사가치</span><b class="ok">+${S(n.valueGain)}</b></div>
      </div>
      <button class="co-btn primary" data-settle-close>확인</button>
    </div>`,document.body.appendChild(e);const s=()=>e.remove();e.querySelector("[data-settle-close]").onclick=s,e.addEventListener("click",a=>{a.target===e&&s()});const i=e.querySelector(".cs-count"),r=Math.abs(L(n.profit)),o=n.profit>=0?"+":"−";if(xc()||r===0)i.textContent=o+S(r);else{const a=performance.now(),l=700,c=d=>{const u=Math.min(1,(d-a)/l);i.textContent=o+S(Math.round(r*u)),u<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}setTimeout(()=>{document.body.contains(e)&&s()},6e3)}catch{}}function Pg(){const n=g.company,e=g.bank||{};if(n)return`<div class="co-card">
      <h3>회사 정보</h3>
      ${wg(n)}
      ${O("회사명",F(n.name))}
      ${O("슬로건",F(n.slogan)||"—")}
      ${O("업종",J[n.sector].icon+" "+J[n.sector].label)}
      ${O("전략",Ln[n.strategy].label)}
      ${O("단계 / 레벨",Lt[n.stage]+" · Lv."+n.level)}
      ${O("설립일",new Date(L(n.createdAt)).toLocaleDateString("ko-KR"))}
      <p class="co-note">유저당 회사 1개를 운영합니다(v1.0). 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>
    </div>`;const t=Mr(e),s=Oc(e);return`${Si()}
    <div class="co-card">
      <h3>회사 설립 <span class="co-tag">게임머니 타이쿤</span></h3>
      <label class="co-field"><span>회사명</span><input id="foName" maxlength="24" placeholder="예: STONK테크" value="${F(ne.name)}" /></label>
      <label class="co-field"><span>슬로건(선택)</span><input id="foSlogan" maxlength="40" placeholder="예: 세상을 바꾸는 기술" value="${F(ne.slogan)}" /></label>
      <div class="co-sub">업종 선택</div>
      <div class="co-pick">${Nc.map(i=>`<button class="co-opt ${ne.sector===i?"on":""}" data-found-sector="${i}">${J[i].icon} ${J[i].label}</button>`).join("")}</div>
      <p class="co-note">${J[ne.sector].icon} <b>${J[ne.sector].label}</b> · ${F(J[ne.sector].note)}</p>
      <div class="co-sub">시작 전략</div>
      <div class="co-pick">${Object.keys(Ln).map(i=>`<button class="co-opt ${ne.strategy===i?"on":""}" data-found-strategy="${i}">${Ln[i].label}</button>`).join("")}</div>
      <p class="co-note">${F(Ln[ne.strategy].note)}</p>
      <div class="co-sub">결제수단</div>
      <div class="co-pick">
        <button class="co-opt ${oe==="cash"?"on":""}" data-pm="cash">현금</button>
        <button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button>
        <button class="co-opt ${oe==="loan"?"on":""}" data-pm="loan">사업대출</button>
      </div>
      <div class="co-row"><span>설립 비용</span><b>${s>0?`<s class="muted">${S(Ns)}</s> ${S(t)} <small class="ok">${Math.round(s*100)}% 할인</small>`:S(t)}</b></div>
      <div class="co-row"><span>보유 현금</span><b>${S(g.cash)}</b></div>
      <button class="co-btn primary big" data-act="found">${J[ne.sector].label} 회사 설립</button>
      <p class="co-note">결제 성공 후에만 회사가 생성됩니다. 카드/사업대출 결제 실패 시 회사는 생성되지 않습니다. 모든 금액은 게임머니입니다.</p>
    </div>`}function Og(){const n=g.company;return n?`<div class="co-card"><h3>직원 결제수단 <span class="co-tag">${Ms(n)}명</span></h3>
    <div class="co-pick"><button class="co-opt ${oe==="company"||oe!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${S(n.companyCash)} · 카드는 Bank 청구 예정으로 누적됩니다.</p></div>
    <div class="co-grid">${Pc.map(e=>{const t=og[e],s=(n.employees||{})[e]||{count:0,level:1};return`<div class="co-card emp">
        <div class="emp-head"><span class="emp-ico">${t.icon}</span><div><b>${t.label}</b><small>${t.effect}</small></div></div>
        ${O("보유 / 레벨",L(s.count)+"명 · Lv."+Math.max(1,L(s.level)))}
        ${O("고용비",S(cg(n,e)))}
        <div class="co-btnrow">
          <button class="co-btn primary small" data-emp-hire="${e}">고용</button>
          <button class="co-btn small" data-emp-level="${e}" ${L(s.count)>0?"":"disabled"}>레벨업 ${S(ug(n,e))}</button>
          <button class="co-btn ghost small" data-emp-fire="${e}" ${L(s.count)>0?"":"disabled"}>해고</button>
        </div>
      </div>`}).join("")}</div>`:Ls()}function Mg(){const n=g.company;return n?`<div class="co-card"><h3>시설 결제수단</h3>
    <div class="co-pick"><button class="co-opt ${oe!=="card"?"on":""}" data-pm="company">회사 자금</button><button class="co-opt ${oe==="card"?"on":""}" data-pm="card">STONK Card</button></div>
    <p class="co-note">회사 자금 ${S(n.companyCash)}. 시설 레벨이 오르면 본사가 커집니다.</p></div>
    <div class="co-grid">${Or.map(e=>{const t=Ii[e],s=L(((n.facilities||{})[e]||{}).level);return`<div class="co-card fac">
        <div class="emp-head"><span class="emp-ico">${t.icon}</span><div><b>${t.label} <small class="co-tag">Lv.${s}</small></b><small>${t.effect}</small></div></div>
        ${O("업그레이드 비용",S(lg(n,e)))}
        <button class="co-btn primary small" data-fac-up="${e}">Lv.${s+1} 업그레이드</button>
      </div>`}).join("")}</div>`:Ls()}function Lg(){const n=g.company,e=g.bank||{},t=e.businessLoan||{},s=L(t.principal)+L(t.interest),i=dg(e);return n?`<div class="co-grid">
    <div class="co-card">
      <h3>자금 이동</h3>
      ${O("개인 현금",S(g.cash))}
      ${O("회사 자금",S(n.companyCash),n.companyCash<=0?"warn":"")}
      <div class="co-amount"><input id="moveAmt" type="number" inputmode="numeric" placeholder="금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn primary" data-act="invest">출자(개인→회사)</button>
        <button class="co-btn" data-act="withdraw">인출(회사→개인)</button>
      </div>
      <p class="co-note">인출 시 브랜드 점수가 소폭 감소하고 리스크가 소폭 증가합니다.</p>
    </div>
    <div class="co-card">
      <h3>Bank 사업대출 <span class="co-tag">개인 대출과 별개</span></h3>
      ${O("신용등급 / 한도",Mc(e.creditScore!=null?e.creditScore:60)+" · "+S(i))}
      ${O("사업대출 잔액",S(s),s>0?"warn":"")}
      ${O("원금 / 이자",S(t.principal)+" / "+S(t.interest))}
      <div class="co-amount"><input id="bizAmt" type="number" inputmode="numeric" placeholder="대출/상환 금액" min="1" /><span>원</span></div>
      <div class="co-btnrow">
        <button class="co-btn danger" data-act="bizLoan" ${i<=0?"disabled":""}>사업대출 받기</button>
        <button class="co-btn" data-act="bizRepayCompany" ${s>0?"":"disabled"}>회사자금 상환</button>
        <button class="co-btn ghost" data-act="bizRepayCash" ${s>0?"":"disabled"}>개인현금 상환</button>
      </div>
      <p class="co-note">사업대출금은 <b>회사 자금</b>으로 입금됩니다. 이자 하루 ${(Cr*100).toFixed(1)}%. 연체 시 리스크가 오릅니다.</p>
    </div>
  </div>`:Ls()}function Dg(){const n=g.company,e=g.bank||{};if(!n)return Ls();const t=fg(n,e),s=t.every(r=>r.ok),i=n.ipoReadiness;return`<div class="co-card ipo-card ${e.vipTier==="BLACK"?"black":""}">
      <h3>IPO 준비 ${n.stage==="LISTED"?'<span class="co-tag ok">상장 후보</span>':""}</h3>
      ${nn("IPO 준비도",i,i>=100?"ok":"")}
      <ul class="co-check">${t.map(r=>`<li class="${r.ok?"on":""}">${r.ok?"✅":"⬜"} ${F(r.label)}</li>`).join("")}</ul>
      ${n.stage==="LISTED"?'<p class="co-note ok">상장 후보 등록 완료. Battle 종목 편입 준비 완료 · Board/Wiki 연동 데이터 생성 완료. 상장기업 운영 콘텐츠는 v3.1 이후 확장 예정입니다.</p>':`<button class="co-btn gold big" data-act="ipo" ${i>=100&&s?"":"disabled"}>${i>=100?"상장 심사 신청":`준비도 ${i}% (100% 필요)`}</button>
           <p class="co-note">IPO 준비도는 회사 가치·브랜드·순이익·시설·직원에서 오르고 리스크·사업대출 연체로 내려갑니다.</p>`}
    </div>`}const xg={found:"🏗️",settle:"📊",invest:"💰",withdraw:"🏧",hire:"👤",fire:"👋",levelup:"⬆️",facility:"🏢",loan:"📝",stage:"🎉",ipo:"🏆"};function Uc(n){return`<li><span class="lg-ico">${xg[n.type]||"•"}</span><div class="lg-mid"><b>${F(n.title)}</b><small>${F(n.memo||"")}</small></div>${n.amount?`<b class="lg-amt ${n.amount>=0?"plus":"minus"}">${n.amount>=0?"+":"−"}${S(Math.abs(n.amount))}</b>`:""}</li>`}function $g(){return`<div class="co-card"><h3>경영 로그 / 뉴스</h3>
    ${(g.logs||[]).length?`<ul class="co-loglist">${g.logs.map(Uc).join("")}</ul>`:'<p class="co-empty">아직 활동이 없습니다.</p>'}
    <p class="co-note">회사 뉴스는 Board 연동용(rooms/MAIN/companyNews)으로도 기록됩니다.</p></div>`}function Ls(){return'<div class="co-card"><p class="co-empty">먼저 회사를 설립하세요.</p><button class="co-btn primary" data-tab="company">회사 설립</button></div>'}function Fg(){var n;(n=Q.querySelector("[data-home]"))==null||n.addEventListener("click",e=>{e.preventDefault(),ue="dashboard",window.scrollTo(0,0),Fe()}),Q.querySelectorAll("[data-tab]").forEach(e=>e.addEventListener("click",()=>{ue=e.dataset.tab,Fe()})),Q.querySelectorAll("[data-found-sector]").forEach(e=>e.addEventListener("click",()=>{ne.sector=e.dataset.foundSector,Ti(),Fe()})),Q.querySelectorAll("[data-found-strategy]").forEach(e=>e.addEventListener("click",()=>{ne.strategy=e.dataset.foundStrategy,Ti(),Fe()})),Q.querySelectorAll("[data-pm]").forEach(e=>e.addEventListener("click",()=>{oe=e.dataset.pm,Fe()})),Q.querySelectorAll("[data-emp-hire]").forEach(e=>e.addEventListener("click",()=>ve(()=>wc(g.uid,e.dataset.empHire,g,oe==="card"?"card":"company")))),Q.querySelectorAll("[data-emp-fire]").forEach(e=>e.addEventListener("click",()=>ve(()=>Ec(g.uid,e.dataset.empFire,g)))),Q.querySelectorAll("[data-emp-level]").forEach(e=>e.addEventListener("click",()=>ve(()=>Cc(g.uid,e.dataset.empLevel,g,oe==="card"?"card":"company")))),Q.querySelectorAll("[data-fac-up]").forEach(e=>e.addEventListener("click",()=>ve(()=>Sc(g.uid,e.dataset.facUp,g,oe==="card"?"card":"company")))),Q.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>Bg(e.dataset.act)))}function Ti(){const n=document.getElementById("foName"),e=document.getElementById("foSlogan");n&&(ne.name=n.value),e&&(ne.slogan=e.value)}async function Ug(){if(Ct)return;Ct=!0;const n=document.querySelector(".office");n&&n.classList.add("settling");let e=null;try{e=Os(g.company,Date.now(),g.event)}catch{}try{await Tc(g.uid,g),await Dc(),e&&e.applied?Ng(e):gn("정산 완료","ok")}catch(t){gn(t&&t.message||"정산할 내용이 없습니다.","err")}finally{Ct=!1}}function Bg(n){if(n==="found"){Ti();const e=Mr(g.bank);return Dn(e,"설립 심사 중...",()=>vc(g.uid,{...ne,payMethod:oe},g))}if(n==="photo"){Ci=!Ci,window.scrollTo(0,0),Fe();return}if(n==="settle")return Ug();if(n==="promote")return ve(()=>kc(g.uid,g));if(n==="invest"){const e=Kt("moveAmt");return Dn(e,"금고 이체 처리 중...",()=>yc(g.uid,e,g))}if(n==="withdraw"){const e=Kt("moveAmt");return Dn(e,"인출 처리 중...",()=>bc(g.uid,e,g))}if(n==="bizLoan"){const e=Kt("bizAmt");return Dn(e,"대출 심사 중...",()=>mc(g.uid,e,g))}if(n==="bizRepayCompany")return ve(()=>Ei(g.uid,Kt("bizAmt"),"company",g));if(n==="bizRepayCash")return ve(()=>Ei(g.uid,Kt("bizAmt"),"cash",g));if(n==="ipo")return ve(()=>Ac(g.uid,g))}function Vg(n){return n=L(n),n>=1e7||g&&g.cash>0&&n>=g.cash*.3}function Dn(n,e,t){if(!Vg(n))return ve(t);const s=document.createElement("div");s.className="co-modal-dim",s.innerHTML=`<div class="co-modal"><h3>거래 확인</h3><p class="co-modal-amt">${S(n)}</p><p class="co-note">STONK 가상 게임머니 거래입니다.</p>
    <div class="co-modal-stage" hidden><span class="co-spin sm"></span> <span>${F(e)}</span></div>
    <div class="co-modal-btns"><button class="co-btn" data-mc="cancel">취소</button><button class="co-btn primary" data-mc="ok">확인</button></div></div>`,document.body.appendChild(s);const i=()=>s.remove();s.querySelector('[data-mc="cancel"]').onclick=i,s.addEventListener("click",r=>{r.target===s&&i()}),s.querySelector('[data-mc="ok"]').onclick=()=>{s.querySelector(".co-modal-btns").hidden=!0,s.querySelector(".co-modal-stage").hidden=!1,setTimeout(()=>{i(),ve(t)},xc()?0:600)}}

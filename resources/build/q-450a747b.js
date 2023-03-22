import{B as E,K as L,_ as M}from"./q-d1c0ec4a.js";const P=(e,t)=>t.some(n=>e instanceof n);let p,w;function T(){return p||(p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g(){return w||(w=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b=new WeakMap,D=new WeakMap,B=new WeakMap,f=new WeakMap,l=new WeakMap;function S(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",c),e.removeEventListener("error",o)},c=()=>{n(a(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",c),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&b.set(n,e)}).catch(()=>{}),l.set(t,e),t}function x(e){if(D.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",c),e.removeEventListener("error",o),e.removeEventListener("abort",o)},c=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",c),e.addEventListener("error",o),e.addEventListener("abort",o)});D.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return D.get(e);if(t==="objectStoreNames")return e.objectStoreNames||B.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return a(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function j(e){y=e(y)}function C(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(m(this),t,...n);return B.set(r,t.sort?t.sort():[t]),a(r)}:g().includes(e)?function(...t){return e.apply(m(this),t),a(b.get(this))}:function(...t){return a(e.apply(m(this),t))}}function O(e){return typeof e=="function"?C(e):(e instanceof IDBTransaction&&x(e),P(e,T())?new Proxy(e,y):e)}function a(e){if(e instanceof IDBRequest)return S(e);if(f.has(e))return f.get(e);const t=O(e);return t!==e&&(f.set(e,t),l.set(t,e)),t}const m=e=>l.get(e);function V(e,t,{blocked:n,upgrade:r,blocking:i,terminated:c}={}){const o=indexedDB.open(e,t),u=a(o);return r&&o.addEventListener("upgradeneeded",s=>{r(a(o.result),s.oldVersion,s.newVersion,a(o.transaction),s)}),n&&o.addEventListener("blocked",s=>n(s.oldVersion,s.newVersion,s)),u.then(s=>{c&&s.addEventListener("close",()=>c()),i&&s.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const _=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],h=new Map;function I(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(h.get(t))return h.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_.includes(n)))return;const c=async function(o,...u){const s=this.transaction(o,i?"readwrite":"readonly");let d=s.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),i&&s.done]))[0]};return h.set(t,c),c}j(e=>({...e,get:(t,n,r)=>I(t,n)||e.get(t,n,r),has:(t,n)=>!!I(t,n)||e.has(t,n)}));const W=E(L(()=>M(()=>import("./q-6259d14f.js"),["build/q-6259d14f.js","build/q-d1c0ec4a.js"]),"s_xYL1qOwPyDI")),v={title:"Welcome to Qwik",meta:[{name:"description",content:"Qwik site description"}]};async function R(e,t){await(await V("UTXO-STORE",1,{upgrade(r){r.createObjectStore("addr-utxo")}})).put("addr-utxo",e,t)}export{W as default,v as head,R as saveTokenUtxoStore};

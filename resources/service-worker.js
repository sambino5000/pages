/* Qwik Service Worker */
const appBundles=[["q-0ba2ed0d.js",[7,8],["A7x0w7F9Kf8","HU55RV7VfPc","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-0d419460.js",[7]],["q-0d9262ad.js",[7,8],["AKetNByE5TM","xEi06O8vOjU"]],["q-15d218f4.js",[7,8],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-1db61dc8.js",[7],["A5bZC7WO00A"]],["q-2559d383.js",[7]],["q-45aab3b6.js",[]],["q-482451c1.js",[]],["q-53f8dc25.js",[7],["3sccYCDd1Z0"]],["q-6b0ff6c6.js",[7,8]],["q-6d005193.js",[7,8,17],["J4V2qsF7Yxo"]],["q-7ee635e5.js",[7,8,9],["u0bwM0i5dA8"]],["q-844986ca.js",[7]],["q-8870b71a.js",[7],["VkLNXphUh5s"]],["q-95025afb.js",[7],["mBt9fIl89mc"]],["q-af2cbd43.js",[7],["xYL1qOwPyDI","zqpXT8B27s0"]],["q-cdb6ca1f.js",[7]],["q-df4b1426.js",[7,8]],["q-f60748b8.js",[7,8],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-fba2e74e.js",[7,8],["zrbrqoaqXSY"]]];
const libraryBundleIds=[18];
const linkBundles=[[/^\/$/,[9,13,1,15]],[/^\/demo\/flower\/?$/,[9,13,16,0]],[/^\/demo\/todolist\/?$/,[9,13,17,10]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());

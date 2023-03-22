/* Qwik Service Worker */
const appBundles=[["q-20ce4fc5.js",[10],["A5bZC7WO00A"]],["q-2c121ee9.js",[8,10]],["q-45aab3b6.js",[]],["q-47e34946.js",[10],["mBt9fIl89mc"]],["q-4faa680e.js",[10],["VkLNXphUh5s"]],["q-5e13cc35.js",[8,10],["zrbrqoaqXSY"]],["q-63285a5e.js",[10]],["q-7029fe05.js",[8,10,19],["u0bwM0i5dA8"]],["q-78a3feaf.js",[10],["3sccYCDd1Z0"]],["q-7aa474fb.js",[8,10],["A7x0w7F9Kf8","HU55RV7VfPc","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-7cf2f096.js",[]],["q-92b681f6.js",[10]],["q-9444049e.js",[10]],["q-adb434e7.js",[10]],["q-c755f78c.js",[10,11],["BA0aN8gkGUk","xYL1qOwPyDI","zqpXT8B27s0"]],["q-d02b1a64.js",[1,8,10],["J4V2qsF7Yxo"]],["q-e672a35c.js",[8,10],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-eeb1a28f.js",[8,10],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-f950b72d.js",[8,10],["AKetNByE5TM","xEi06O8vOjU"]],["q-feef6b3c.js",[8,10]]];
const libraryBundleIds=[17];
const linkBundles=[[/^\/$/,[19,4,11,14]],[/^\/demo\/flower\/?$/,[19,4,12,9]],[/^\/demo\/todolist\/?$/,[19,4,1,15]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());

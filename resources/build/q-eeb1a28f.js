import{_ as m,u as M,M as S,d as H,i as w,T as U,e as D,g as l,h as j,m as N,t as q,K as b,k as Q,O as $,j as z}from"./q-7cf2f096.js";import{t as P,l as V,a as A,u as W,b as J,d as X,C as F,D as K,R as Y,e as B,f as G,g as Z,r as tt,h as et,i as at}from"./q-78a3feaf.js";const y=()=>m(()=>import("./q-feef6b3c.js"),["build/q-feef6b3c.js","build/q-7cf2f096.js","build/q-78a3feaf.js"]),I=[[/^\/$/,[y,()=>m(()=>import("./q-92b681f6.js").then(t=>t.i),["build/q-92b681f6.js","build/q-7cf2f096.js"])]],[/^\/demo\/flower\/?$/,[y,()=>m(()=>import("./q-9444049e.js"),["build/q-9444049e.js","build/q-7cf2f096.js"])]],[/^\/demo\/todolist\/?$/,[y,()=>m(()=>import("./q-2c121ee9.js"),["build/q-2c121ee9.js","build/q-7cf2f096.js","build/q-78a3feaf.js"])]]],O=[];const T=!0;const nt=async(t,i)=>{const[s,a,n]=M();t===void 0?(t=a.value,a.value=""):i&&(a.value="");const u=new URL(t,n.url);t=P(u),!(!i&&a.value===t)&&(a.value=t,V(u,S()),A(I,O,T,u.pathname),s.value=void 0,n.isNavigating=!0)},ot=()=>{const t=W();if(!(t!=null&&t.params))throw new Error("Missing Qwik City Env Data");const i=H("url");if(!i)throw new Error("Missing Qwik URL Env Data");const s=new URL(i),a=w({url:s,href:s.href,pathname:s.pathname,query:s.searchParams,params:t.params,isNavigating:!1}),n=U(w(t.response.loaders)),u=D(P(s)),f=w(J),c=w({headings:void 0,menu:void 0}),o=D(),_=t.response.action,p=_?t.response.loaders[_]:void 0,v=D(p?{id:_,data:t.response.formData,output:{result:p,status:t.response.status}}:void 0),R=b(()=>m(()=>Promise.resolve().then(()=>x),void 0),"s_fX0bDjeJa0E",[v,u,a]);return l(X,c),l(F,o),l(K,f),l(Y,a),l(B,R),l(G,n),l(Z,v),j(b(()=>m(()=>Promise.resolve().then(()=>x),void 0),"s_02wMImzEAbk",[v,c,o,f,t,n,u,a])),N(q,null,3,"qY_0")},st=({track:t})=>{const[i,s,a,n,u,f,c,o]=M();async function _(){const[p,v]=t(()=>[c.value,i.value]),R=Q("");let e=new URL(p,o.url),h,L=null;{e.pathname.endsWith("/")||(e.pathname+="/");let E=A(I,O,T,e.pathname);const d=S(),g=h=await V(e,d,!0,v);if(!g){c.untrackedValue=P(e);return}const C=g.href,r=new URL(C,e.href);r.pathname!==e.pathname&&(e=r,E=A(I,O,T,e.pathname)),L=await E}if(L){const[E,d,g]=L,C=d[d.length-1];o.url=e,o.href=e.href,o.pathname=e.pathname,o.params={...E},o.query=e.searchParams,c.untrackedValue=P(e);const r=tt(h,o,d,R);s.headings=C.headings,s.menu=g,a.value=$(d),n.links=r.links,n.meta=r.meta,n.styles=r.styles,n.title=r.title,n.frontmatter=r.frontmatter;{const k=h==null?void 0:h.loaders;k&&Object.assign(f,k),et.clear(),at(window,e,c),o.isNavigating=!1}}}_()},x=Object.freeze(Object.defineProperty({__proto__:null,_hW:z,s_02wMImzEAbk:st,s_TxCFOy819ag:ot,s_fX0bDjeJa0E:nt},Symbol.toStringTag,{value:"Module"}));export{z as _hW,st as s_02wMImzEAbk,ot as s_TxCFOy819ag,nt as s_fX0bDjeJa0E};
import{l as u,c as i,m as l,t as m,F as r,K as p,_,u as d}from"./q-7cf2f096.js";import{j as b}from"./q-78a3feaf.js";const f=s=>{const e=u(s,["action","spaReset","reloadDocument","onSubmit$"]),a=b();return i("form",{...e},{action:"get","preventdefault:submit":r(t=>!t.reloadDocument,[s],"!p0.reloadDocument"),"data-spa-reset":r(t=>t.spaReset?"true":void 0,[s],'p0.spaReset?"true":undefined'),onSubmit$:p(()=>_(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[a])},l(m,null,3,"BC_0"),1,"BC_1")},v=async(s,e)=>{const[a]=d(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),a("?"+o.toString(),!0).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:f,s_p9MSze0ojs4:v},Symbol.toStringTag,{value:"Module"}));export{f as s_Nk9PlpjQm9Y,v as s_p9MSze0ojs4};

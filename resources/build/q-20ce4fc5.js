import{u,O as f}from"./q-7cf2f096.js";const b=(e={})=>{const[r,o,l,n]=u();let t,a;return e instanceof SubmitEvent?(a=e.target,t=new FormData(a),(e.submitter instanceof HTMLInputElement||e.submitter instanceof HTMLButtonElement)&&t.append(e.submitter.name,e.submitter.value)):t=e,new Promise(s=>{t instanceof FormData&&(n.formData=t),n.isRunning=!0,l.isNavigating=!0,r.value={data:t,id:o,resolve:f(s)}}).then(({result:s,status:i})=>{if(n.isRunning=!1,n.status=i,n.value=s,a){a.getAttribute("data-spa-reset")==="true"&&a.reset();const m={status:i,value:s};a.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:m}))}return{status:i,value:s}})};export{b as s_A5bZC7WO00A};
import{r as u,i as d,I as _,c as o,F as s,K as a,_ as i,u as l,j as h}from"./q-7cf2f096.js";import{m as v}from"./q-78a3feaf.js";const m=()=>{u(a(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_HU55RV7VfPc"));const t=v(),e=d({count:0,number:20});return _(a(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_LQPhZ0qOjrk",[e])),o("div",null,{class:"section"},o("div",null,{class:"container center"},[o("input",null,{type:"range",value:s(r=>r.number,[e]),max:50,onInput$:a(()=>i(()=>Promise.resolve().then(()=>c),void 0),"s_A7x0w7F9Kf8",[e])},null,3,null),o("div",null,{style:s(r=>({"--state":`${r.count*.1}`}),[e]),class:s(r=>({host:!0,pride:r.query.get("pride")==="true"}),[t])},Array.from({length:e.number},(r,n)=>o("div",{class:{square:!0,odd:n%2===0},style:{"--index":`${n+1}`}},null,null,3,n)).reverse(),1,null)],1,null),1,"IA_0")},p=({cleanup:t})=>{const[e]=l(),r=setTimeout(()=>e.count=1,500);t(()=>clearTimeout(r));const n=setInterval(()=>e.count++,7e3);t(()=>clearInterval(n))},b=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}.input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,g=b,f=t=>{const[e]=l();e.number=t.target.valueAsNumber},c=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_A7x0w7F9Kf8:f,s_HU55RV7VfPc:g,s_LQPhZ0qOjrk:p,s_PxZ05oEiFy8:m},Symbol.toStringTag,{value:"Module"}));export{h as _hW,f as s_A7x0w7F9Kf8,g as s_HU55RV7VfPc,p as s_LQPhZ0qOjrk,m as s_PxZ05oEiFy8};

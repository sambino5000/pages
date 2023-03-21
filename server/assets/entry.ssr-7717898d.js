import{j as f,b as ie,c as ae,F as A,s as Q,d as H,i as J,u as ce,e as le,f as _,g as d,h as ue,k as de,Q as me,R as fe,S as pe}from"./@qwik-city-plan-ee411f09.js";/**
 * @license
 * @builder.io/qwik/server 0.23.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */if(typeof global>"u"){const e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:{};e.global=e}var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function X(e,t){const n=t==null?void 0:t.mapper,o=e.symbolMapper?e.symbolMapper:s=>{var i;if(n){const a=N(s),l=n[a];if(!l){if((i=globalThis.__qwik_reg_symbols)==null?void 0:i.has(a))return[s,"_"];console.error("Cannot resolve symbol",s,"in",n)}return l}};return{isServer:!0,async importSymbol(s,i,a){var w;const l=N(a),b=(w=globalThis.__qwik_reg_symbols)==null?void 0:w.get(l);if(b)return b;let u=String(i);u.endsWith(".js")||(u+=".js");const q=be(u);if(!(a in q))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${u}'.`);return q[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s){return o(s,n)}}}async function ye(e,t){const n=X(e,t);Q(n)}var N=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};function E(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function W(e){let t=e.base;return typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var he='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,_e='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},a=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===a(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const r="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===r));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const d=a(t,r);if(d){const o=t.closest("[q\\\\:container]"),s=new URL(a(o,"q:base"),e.baseURI);for(const r of d.split("\\n")){const a=new URL(r,s),c=a.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),d=import(a.href.split("#")[0]);l(o);const p=b(await d,c),w=e[n];if(t.isConnected)try{e[n]=[t,i,a],u("qsymbol",{symbol:c,element:t,reqTime:f}),await p(i,t)}finally{e[n]=w}}}},u=(t,n)=>{e.dispatchEvent(c(t,n))},b=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,d(e.type))},q=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,u("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>u("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},v=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)i.has(n)||(v(e,n,p,!0),v(o,n,w),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},v(e,"readystatechange",q),q()}})(document);',qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = findSymbol(await module, symbolName);
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ge(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?qe:_e).replace("window.qEvents",JSON.stringify(e.events)):e.debug?ve:he}function we(e,t,n){if(!n)return[];const o=t.prefetchStrategy,r=W(t);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return xe(e,n,r);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function xe(e,t,n){const o=[],r=e==null?void 0:e.qrls,{mapper:s,manifest:i}=t,a=new Set;if(Array.isArray(r))for(const l of r){const b=l.getHash(),u=s[b];u&&G(i,a,o,n,u[1])}return o}function G(e,t,n,o,r){const s=o+r;if(!t.has(s)){t.add(s);const i=e.bundles[r];if(i){const a={url:s,imports:[]};if(n.push(a),Array.isArray(i.imports))for(const l of i.imports)G(e,t,a.imports,o,l)}}}["click","dblclick","contextmenu","auxclick","pointerdown","pointerup","pointermove","pointerover","pointerenter","pointerleave","pointerout","pointercancel","gotpointercapture","lostpointercapture","touchstart","touchend","touchmove","touchcancel","mousedown","mouseup","mousemove","mouseenter","mouseleave","mouseover","mouseout","wheel","gesturestart","gesturechange","gestureend","keydown","keyup","keypress","input","change","search","invalid","beforeinput","select","focusin","focusout","focus","blur","submit","reset","scroll"].map(e=>`on${e.toLowerCase()}$`);["useTask$","useVisibleTask$","component$","useStyles$","useStylesScoped$"].map(e=>e.toLowerCase());function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function S(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function je(e){const t={bundles:x(e).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`}function x(e){const t=[],n=o=>{if(Array.isArray(o))for(const r of o)t.includes(r.url)||(t.push(r.url),n(r.imports))};return n(e),t}function Ee(e,t,n){const o=Ie(e==null?void 0:e.implementation),r=[];return o.prefetchEvent==="always"&&Ne(r,t,n),o.linkInsert==="html-append"&&Se(r,t,o),o.linkInsert==="js-append"?Ae(r,t,o,n):o.workerFetchInsert==="always"&&Ce(r,t,n),r.length>0?f(A,{children:r}):null}function Ne(e,t,n){e.push(f("script",{type:"module",dangerouslySetInnerHTML:je(t),nonce:n}))}function Se(e,t,n){const o=x(t),r=n.linkRel||"prefetch";for(const s of o){const i={};i.href=s,i.rel=r,(r==="prefetch"||r==="preload")&&s.endsWith(".js")&&(i.as="script"),e.push(f("link",i,void 0))}}function Ae(e,t,n,o){const r=n.linkRel||"prefetch";let s="";n.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(x(t))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${r}");`,n.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${r}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",n.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=S(),s+="}"),n.workerFetchInsert==="always"&&(s+=S()),e.push(f("script",{type:"module",dangerouslySetInnerHTML:s,nonce:o}))}function Ce(e,t,n){let o=`const u=${JSON.stringify(x(t))};`;o+=S(),e.push(f("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function Ie(e){return e&&typeof e=="object"?e:Te}var Te={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},ze="<!DOCTYPE html>";async function Fe(e,t){var O;t=Oe(t);let n=t.stream,o=0,r=0,s=0,i=0;const a=((O=t.streaming)==null?void 0:O.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=t.containerTagName??"html",b=t.containerAttributes??{};let u="";const q=n,w=E();function C(){u&&(q.write(u),u="",o=0,s++,s===1&&(i=w()))}function I(c){o+=c.length,r+=c.length,u+=c}switch(a.strategy){case"disabled":n={write:I};break;case"direct":n=q;break;case"auto":let c=0,h=!1;const k=a.maximunChunk??0,j=a.maximunInitialChunk??0;n={write(v){v==="<!--qkssr-f-->"?h||(h=!0):v==="<!--qkssr-pu-->"?c++:v==="<!--qkssr-po-->"?c--:I(v),c===0&&(h||o>=(s===0?j:k))&&(h=!1,C())}};break}l==="html"?n.write(ze):(n.write("<!--cq-->"),t.qwikLoader?(t.qwikLoader.include===void 0&&(t.qwikLoader.include="never"),t.qwikLoader.position===void 0&&(t.qwikLoader.position="bottom")):t.qwikLoader={include:"never"}),t.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.");const te=W(t),p=ee(t.manifest);await ye(t,p);let y;const T=p==null?void 0:p.manifest.injections,ne=T?T.map(c=>f(c.tag,c.attributes??{})):void 0,se=E(),z=[];let F=0,L=0,P=!1;await ie(e,{stream:n,containerTagName:l,containerAttributes:b,serverData:t.serverData??t.envData,base:te,beforeContent:ne,beforeClose:async(c,h,k)=>{var U,K,Z,M,B,Y;F=se();const j=E();P=k,y=await ae(c,h);const v=JSON.stringify(y.state,void 0,void 0),g=[f("script",{type:"qwik/json",dangerouslySetInnerHTML:Le(v),nonce:(U=t.serverData)==null?void 0:U.nonce})];if(t.prefetchStrategy!==null){const m=we(y,t,p);if(m.length>0){const V=Ee(t.prefetchStrategy,m,(K=t.serverData)==null?void 0:K.nonce);V&&g.push(V)}}const re=!y||y.mode!=="static",R=((Z=t.qwikLoader)==null?void 0:Z.include)??"auto",$=R==="always"||R==="auto"&&re;if($){const m=ge({events:(M=t.qwikLoader)==null?void 0:M.events,debug:t.debug});g.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:m,nonce:(B=t.serverData)==null?void 0:B.nonce}))}const D=Array.from(h.$events$,m=>JSON.stringify(m));if(D.length>0){let m=`window.qwikevents.push(${D.join(", ")})`;$||(m=`window.qwikevents||=[];${m}`),g.push(f("script",{dangerouslySetInnerHTML:m,nonce:(Y=t.serverData)==null?void 0:Y.nonce}))}return Pe(z,c),L=j(),f(A,{children:g})}}),l!=="html"&&n.write("<!--/cq-->"),C();const oe=P||y.resources.some(c=>c._cache!==1/0);return{prefetchResources:void 0,snapshotResult:y,flushes:s,manifest:p==null?void 0:p.manifest,size:r,isStatic:!oe,timing:{render:F,snapshot:L,firstFlush:i},_symbols:z}}function ee(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const t={};return Object.entries(e.mapping).forEach(([n,o])=>{t[N(n)]=[n,o]}),{mapper:t,manifest:e}}}}var Le=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Pe(e,t){var n;for(const o of t){const r=(n=o.$componentQrl$)==null?void 0:n.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Oe(e){const t={...e};return e&&typeof e.base=="function"&&(t.base=e.base(t)),t}async function Be(e){const t=X({manifest:e},ee(e));Q(t)}const Re={symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_LQPhZ0qOjrk:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_lqphz0qojrk",hash:"LQPhZ0qOjrk",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_PxZ05oEiFy8"},s_zqpXT8B27s0:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask",canonicalFilename:"s_zqpxt8b27s0",hash:"zqpXT8B27s0",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_xYL1qOwPyDI"},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1},s_AKetNByE5TM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_aketnbye5tm",hash:"AKetNByE5TM",ctxKind:"function",ctxName:"component$",captures:!1},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1},s_PxZ05oEiFy8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_pxz05oeify8",hash:"PxZ05oEiFy8",ctxKind:"function",ctxName:"component$",captures:!1},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1},s_HU55RV7VfPc:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_hu55rv7vfpc",hash:"HU55RV7VfPc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_PxZ05oEiFy8"},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0},s_A7x0w7F9Kf8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_div_input_onInput",canonicalFilename:"s_a7x0w7f9kf8",hash:"A7x0w7F9Kf8",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_PxZ05oEiFy8"},s_BA0aN8gkGUk:{origin:"routes/index.tsx",displayName:"routes_component_blockResource_useResource",canonicalFilename:"s_ba0an8gkguk",hash:"BA0aN8gkGUk",ctxKind:"function",ctxName:"useResource$",captures:!0,parent:"s_xYL1qOwPyDI"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxQ",captures:!0,parent:"s_Nk9PlpjQm9Y"},s_xEi06O8vOjU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component_useOnDocument_client",canonicalFilename:"s_xei06o8voju",hash:"xEi06O8vOjU",ctxKind:"function",ctxName:"client$",captures:!1,parent:"s_AKetNByE5TM"}},mapping:{s_02wMImzEAbk:"q-eeb1a28f.js",s_LQPhZ0qOjrk:"q-7aa474fb.js",s_zqpXT8B27s0:"q-c755f78c.js",s_3sccYCDd1Z0:"q-78a3feaf.js",s_AKetNByE5TM:"q-f950b72d.js",s_J4V2qsF7Yxo:"q-d02b1a64.js",s_Nk9PlpjQm9Y:"q-e672a35c.js",s_PxZ05oEiFy8:"q-7aa474fb.js",s_TxCFOy819ag:"q-eeb1a28f.js",s_VkLNXphUh5s:"q-4faa680e.js",s_mBt9fIl89mc:"q-47e34946.js",s_u0bwM0i5dA8:"q-7029fe05.js",s_xYL1qOwPyDI:"q-c755f78c.js",s_zrbrqoaqXSY:"q-5e13cc35.js",s_HU55RV7VfPc:"q-7aa474fb.js",s_A5bZC7WO00A:"q-20ce4fc5.js",s_A7x0w7F9Kf8:"q-7aa474fb.js",s_BA0aN8gkGUk:"q-c755f78c.js",s_fX0bDjeJa0E:"q-eeb1a28f.js",s_p9MSze0ojs4:"q-e672a35c.js",s_xEi06O8vOjU:"q-f950b72d.js"},bundles:{"q-20ce4fc5.js":{size:710,imports:["q-7cf2f096.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-2c121ee9.js":{size:411,imports:["q-78a3feaf.js","q-7cf2f096.js"],dynamicImports:["q-d02b1a64.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-45aab3b6.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-47e34946.js":{size:3689,imports:["q-7cf2f096.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_mbt9fil89mc.js"],symbols:["s_mBt9fIl89mc"]},"q-4faa680e.js":{size:580,imports:["q-7cf2f096.js"],dynamicImports:["q-47e34946.js","q-7029fe05.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/s_vklnxphuh5s.js"],symbols:["s_VkLNXphUh5s"]},"q-5e13cc35.js":{size:675,imports:["q-78a3feaf.js","q-7cf2f096.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-63285a5e.js":{size:58,imports:["q-7cf2f096.js"]},"q-7029fe05.js":{size:495,imports:["q-78a3feaf.js","q-7cf2f096.js","q-feef6b3c.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-78a3feaf.js":{size:7030,imports:["q-7cf2f096.js"],dynamicImports:["q-20ce4fc5.js","q-5e13cc35.js","q-e672a35c.js","q-eeb1a28f.js","q-f950b72d.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs","src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-7aa474fb.js":{size:2532,imports:["q-78a3feaf.js","q-7cf2f096.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_a7x0w7f9kf8.js","src/s_hu55rv7vfpc.js","src/s_lqphz0qojrk.js","src/s_pxz05oeify8.js"],symbols:["s_A7x0w7F9Kf8","s_HU55RV7VfPc","s_LQPhZ0qOjrk","s_PxZ05oEiFy8"]},"q-7cf2f096.js":{size:48625,dynamicImports:["q-78a3feaf.js"],origins:["\0vite/preload-helper","node_modules/@builder.io/qwik/core.min.mjs","src/global.css","src/root.tsx"]},"q-92b681f6.js":{size:9379,imports:["q-7cf2f096.js"],dynamicImports:["q-c755f78c.js"],origins:["node_modules/idb/build/index.js","node_modules/idb/build/wrap-idb-value.js","node_modules/isomorphic-ws/browser.js","node_modules/ws-electrumx-client/build/module/lib/electrum-ws.js","node_modules/ws-electrumx-client/build/module/lib/observable.js","src/routes/index.tsx"]},"q-9444049e.js":{size:241,imports:["q-7cf2f096.js"],dynamicImports:["q-7aa474fb.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-adb434e7.js":{size:112,imports:["q-7cf2f096.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]},"q-c755f78c.js":{size:1831,imports:["q-7cf2f096.js","q-92b681f6.js"],origins:["src/entry_routes.js","src/s_ba0an8gkguk.js","src/s_xyl1qowpydi.js","src/s_zqpxt8b27s0.js"],symbols:["s_BA0aN8gkGUk","s_xYL1qOwPyDI","s_zqpXT8B27s0"]},"q-d02b1a64.js":{size:1134,imports:["q-2c121ee9.js","q-78a3feaf.js","q-7cf2f096.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-e672a35c.js":{size:997,imports:["q-78a3feaf.js","q-7cf2f096.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-eeb1a28f.js":{size:2729,imports:["q-78a3feaf.js","q-7cf2f096.js"],dynamicImports:["q-2c121ee9.js","q-92b681f6.js","q-9444049e.js","q-adb434e7.js","q-feef6b3c.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_TxCFOy819ag"]},"q-f950b72d.js":{size:756,imports:["q-78a3feaf.js","q-7cf2f096.js"],origins:["src/entry_RouterOutlet.js","src/s_aketnbye5tm.js","src/s_xei06o8voju.js"],symbols:["s_AKetNByE5TM","s_xEi06O8vOjU"]},"q-feef6b3c.js":{size:277,imports:["q-78a3feaf.js","q-7cf2f096.js"],dynamicImports:["q-4faa680e.js"],origins:["src/routes/layout.tsx"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-4c319e6a.css",dangerouslySetInnerHTML:`:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2}body{background:linear-gradient(90deg,rgba(24,182,246,.3) 0%,rgba(172,127,244,.3) 100%);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;font-weight:200;padding:60px 0}::selection{background:rgb(8,2,61);color:#fff}h1,h2,h3{font-weight:100}h1 b,h2 b,h3 b{font-weight:300}h1{color:#fff;font-size:3rem;padding:0;margin:0}h1.hero{margin:60px 0}h2{color:var(--qwik-dark-purple)}input[type=text],button{background-color:transparent;color:#fff;border:1px solid white;border-radius:12px;font-size:1rem;padding:10px 20px}button{cursor:pointer}button:hover{background-color:#fff;color:var(--qwik-dark-purple)}button.small{border-radius:6px;font-size:.8rem;padding:5px 10px}button.gray{border-color:#aaa;color:#aaa}a,a:active,a:visited,a:hover{color:#000;font-weight:400;text-decoration:none}.section.bright{background:white}.section.dark{background:rgba(50,50,50,.5)}code{background:rgba(230,230,230,.3);border-radius:4px;padding:2px 6px}ul{margin:0;padding-left:20px}.page{width:70vw;max-width:1200px;margin:0 auto;background:linear-gradient(90deg,rgba(24,182,246,.6) 0%,rgba(172,127,244,.6) 100%);overflow:hidden;border-radius:6px}.container{padding:30px 70px}.container.center{text-align:center}.container.mh-300{min-height:300px}.topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}.icon:before{width:18px;height:18px;content:"";display:inline-block;margin-right:5px;position:relative;top:2px}.icon-cli:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M122.499 124.87646a4.00053 4.00053 0 0 1 0 6.24708l-40 32a4.0002 4.0002 0 0 1-4.998-6.24708L113.59668 128 77.501 99.12354a4.0002 4.0002 0 0 1 4.998-6.24708ZM175.99414 156h-40a4 4 0 0 0 0 8h40a4 4 0 1 0 0-8ZM228 56.48535v143.0293A12.49909 12.49909 0 0 1 215.51465 212H40.48535A12.49909 12.49909 0 0 1 28 199.51465V56.48535A12.49909 12.49909 0 0 1 40.48535 44h175.0293A12.49909 12.49909 0 0 1 228 56.48535Zm-8 0A4.49023 4.49023 0 0 0 215.51465 52H40.48535A4.49023 4.49023 0 0 0 36 56.48535v143.0293A4.49023 4.49023 0 0 0 40.48535 204h175.0293A4.49023 4.49023 0 0 0 220 199.51465Z'/%3E%3C/svg%3E")}.icon-apps:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M216 44.00586H40a12.01375 12.01375 0 0 0-12 12v144a12.01375 12.01375 0 0 0 12 12H216a12.01375 12.01375 0 0 0 12-12v-144A12.01375 12.01375 0 0 0 216 44.00586Zm4 156a4.00458 4.00458 0 0 1-4 4H40a4.00458 4.00458 0 0 1-4-4v-144a4.00458 4.00458 0 0 1 4-4H216a4.00458 4.00458 0 0 1 4 4Zm-144-116a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 76 84.00586Zm40 0a8 8 0 1 1-8-8A7.99977 7.99977 0 0 1 116 84.00586Z'/%3E%3C/svg%3E")}.icon-community:before{background-image:url("data:image/svg+xml,%3Csvg fill='%23000000' width='20px' height='20px' viewBox='0 0 256 256' id='Flat' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.40381 143.19434a4.00061 4.00061 0 0 1-5.60108-.7959A55.57857 55.57857 0 0 0 196 120a4 4 0 0 1 0-8 28 28 0 1 0-27.50732-33.26074 4.00013 4.00013 0 0 1-7.85987-1.49219 36.00191 36.00191 0 1 1 54.06494 37.50513 63.58068 63.58068 0 0 1 32.50147 22.84155A3.99993 3.99993 0 0 1 246.40381 143.19434Zm-57.24268 71.05273a3.9998 3.9998 0 1 1-7.1914 3.50391 60.02582 60.02582 0 0 0-107.93946 0 3.9998 3.9998 0 1 1-7.1914-3.50391 67.56008 67.56008 0 0 1 40.90625-35.20581 44 44 0 1 1 40.50976 0A67.56139 67.56139 0 0 1 189.16113 214.24707ZM128 176a36 36 0 1 0-36-36A36.04061 36.04061 0 0 0 128 176ZM60 112A28 28 0 1 1 87.50732 78.73828a3.99989 3.99989 0 1 0 7.85938-1.49219A36.00177 36.00177 0 1 0 41.30225 114.7522 63.5829 63.5829 0 0 0 8.79883 137.5957a4 4 0 1 0 6.39648 4.80469A55.58072 55.58072 0 0 1 60 120a4 4 0 0 0 0-8Z'/%3E%3C/svg%3E")}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}._list_14k68_1{display:flex;flex-direction:column;gap:20px}._list_14k68_1 li{list-style:none}._hint_14k68_11{font-size:.8rem}._anchor_vbcl2_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none}._spacer_vbcl2_9{padding:0 15px}._header_tfay6_1{display:flex;align-items:center;padding:20px 70px 0}._header_tfay6_1 ._logo_tfay6_7 a{display:inline-block}._header_tfay6_1 ul{margin:0;list-style:none;flex:1;text-align:right}._header_tfay6_1 li{display:inline-block;margin:0;padding:0}._header_tfay6_1 li a{color:#fff;display:inline-block;padding:0 1em;text-decoration:none}._header_tfay6_1 li a:hover{color:var(--qwik-dark-purple)}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.23.0",vite:"",rollup:"3.20.0",env:"node",os:"linux",node:"19.7.0"}},$e=()=>{const e=ce(),t=le();return _(A,{children:[d("title",null,null,e.title,1,null),d("link",null,{rel:"canonical",href:ue(n=>n.href,[t],"p0.href")},null,3,null),d("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),d("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(n=>d("meta",{...n},null,null,3,n.key)),e.links.map(n=>d("link",{...n},null,null,3,n.key)),e.styles.map(n=>d("style",{...n.props,dangerouslySetInnerHTML:de(n,"style")},null,null,3,n.key))]},1,"OA_0")},De=H(J($e,"s_zrbrqoaqXSY"));const Ue=()=>_(me,{children:[d("head",null,null,[d("meta",null,{charSet:"utf-8"},null,3,null),d("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),_(De,null,3,"35_0")],1,null),d("body",null,{lang:"en"},[_(fe,null,3,"35_1"),_(pe,null,3,"35_2")],1,null)]},1,"35_3"),Ke=H(J(Ue,"s_3sccYCDd1Z0"));function Ye(e){return Fe(_(Ke,null,3,"pY_0"),{manifest:Re,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Re as m,Ye as r,Be as s};

import{q as Ce,E as de,h as C,i as V,d as we,k as ke,l as se,m as j,b as O,v as Ae,D as R,F as K,G as F,x as Ee,I as Te,J as Ne,K as Ie,L as xe,M as Se,N as Le,a as T,O as Oe,r as x,c as S,t as he,A as H,s as k,f as M}from"./disclose-version.99vFn8pH.js";import{l as De,c as Re,r as ge,m as pe,q as He,T as Me,A as Q,h as re,e as ae,z as Pe,s as ne,U as Ge,V as Ye,n as ze,i as Be,S as We,a as qe,W as Ve,X as je,j as ie,Y as Fe,t as G,f as le,x as oe,p as Ue,k as Ke}from"./runtime.PxAhVgy1.js";import{c as fe,d as Qe,s as Xe}from"./render.IjJ8E02t.js";import{p as Y,i as D}from"./props.3jkIhGdY.js";import{s as P}from"./snippet.e565J9WV.js";let z=null;function pt(t){z=t}function yt(t,e){return e}function Ze(t,e,s,r){for(var a=[],c=e.length,i=0;i<c;i++)Ge(e[i].e,a,!0);var _=c>0&&a.length===0&&s!==null;if(_){var y=s.parentNode;Ee(y),y.append(s),r.clear(),A(t,e[0].prev,e[c-1].next)}Ye(a,()=>{for(var p=0;p<c;p++){var m=e[p];_||(r.delete(m.k),A(t,m.prev,m.next)),ze(m.e,!_)}})}function mt(t,e,s,r,a,c=null){var i=t,_={flags:e,items:new Map,first:null},y=(e&de)!==0;if(y){var p=t;i=C?V(p.firstChild):p.appendChild(Ce())}C&&we();var m=null;De(()=>{var n=s(),o=Re(n)?n:n==null?[]:Array.from(n),l=o.length,h=_.flags;h&F&&!Be(o)&&!(We in o)&&!(qe in o)&&(h^=F,h&Ne&&!(h&R)&&(h^=R));let g=!1;if(C){var v=i.data===ke;v!==(l===0)&&(i=se(),V(i),j(!1),g=!0)}if(C){for(var d=null,b,f=0;f<l;f++){if(O.nodeType===8&&O.data===Ae){i=O,g=!0,j(!1);break}var u=o[f],E=r(u,f);b=ye(O,_,d,null,u,E,f,a,h),_.items.set(E,b),d=b}l>0&&V(se())}C||Je(o,_,i,a,h,r),c!==null&&(l===0?m?ge(m):m=pe(()=>c(i)):m!==null&&He(m,()=>{m=null})),g&&j(!0)}),C&&(i=O)}function Je(t,e,s,r,a,c){var Z,J,$,ee;var i=(a&Te)!==0,_=(a&(R|K))!==0,y=t.length,p=e.items,m=e.first,n=m,o=new Set,l=null,h=new Set,g=[],v=[],d,b,f,u;if(i)for(u=0;u<y;u+=1)d=t[u],b=c(d,u),f=p.get(b),f!==void 0&&((Z=f.a)==null||Z.measure(),h.add(f));for(u=0;u<y;u+=1){if(d=t[u],b=c(d,u),f=p.get(b),f===void 0){var E=n?n.e.nodes.start:s;l=ye(E,e,l,l===null?e.first:l.next,d,b,u,r,a),p.set(b,l),g=[],v=[],n=l.next;continue}if(_&&$e(f,d,u,a),f.e.f&Me&&(ge(f.e),i&&((J=f.a)==null||J.unfix(),h.delete(f))),f!==n){if(o.has(f)){if(g.length<v.length){var I=v[0],w;l=I.prev;var X=g[0],W=g[g.length-1];for(w=0;w<g.length;w+=1)ce(g[w],I,s);for(w=0;w<v.length;w+=1)o.delete(v[w]);A(e,X.prev,W.next),A(e,l,X),A(e,W,I),n=I,l=W,u-=1,g=[],v=[]}else o.delete(f),ce(f,n,s),A(e,f.prev,f.next),A(e,f,l===null?e.first:l.next),A(e,l,f),l=f;continue}for(g=[],v=[];n!==null&&n.k!==b;)o.add(n),v.push(n),n=n.next;if(n===null)continue;f=n}g.push(f),l=f,n=f.next}const L=Array.from(o);for(;n!==null;)L.push(n),n=n.next;var q=L.length;if(q>0){var be=a&de&&y===0?s:null;if(i){for(u=0;u<q;u+=1)($=L[u].a)==null||$.measure();for(u=0;u<q;u+=1)(ee=L[u].a)==null||ee.fix()}Ze(e,L,be,p)}i&&Q(()=>{var te;for(f of h)(te=f.a)==null||te.apply()}),re.first=e.first&&e.first.e,re.last=l&&l.e}function $e(t,e,s,r){r&R&&ae(t.v,e),r&K?ae(t.i,s):t.i=s}function ye(t,e,s,r,a,c,i,_,y){var p=z;try{var m=(y&R)!==0,n=(y&F)===0,o=m?n?Pe(a):ne(a):a,l=y&K?ne(i):i,h={i:l,v:o,k:c,a:null,e:null,prev:s,next:r};return z=h,h.e=pe(()=>_(t,o,l),C),h.e.prev=s&&s.e,h.e.next=r&&r.e,s===null?e.first=h:(s.next=h,s.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{z=p}}function ce(t,e,s){for(var r=t.next?t.next.e.nodes.start:s,a=e?e.e.nodes.start:s,c=t.e.nodes.start;c!==r;){var i=c.nextSibling;a.before(c),c=i}}function A(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function et(t,e){if(e){const s=document.body;t.autofocus=!0,Q(()=>{document.activeElement===s&&t.focus()})}}let ue=!1;function tt(){ue||(ue=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const s of t.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function bt(t){if(C){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;N(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var a=t.checked;N(t,"checked",null),t.checked=a}}};t.__on_r=s,je(s),tt()}}function N(t,e,s){s=s==null?null:s+"";var r=t.__attributes??(t.__attributes={});C&&(r[e]=t.getAttribute(e),e==="src"||e==="href"||e==="srcset")||r[e]!==(r[e]=s)&&(e==="loading"&&(t[Ve]=s),s===null?t.removeAttribute(e):t.setAttribute(e,s))}function st(t,e,s){if(e in t){var r=t[e],a=typeof r=="boolean"&&s===""?!0:s;(typeof r!="object"||r!==a)&&(t[e]=a)}else N(t,e,s)}function me(t,e,s,r,a){var c=a.length!==0,i=e||{},_=t.tagName==="OPTION";for(var y in e)y in s||(s[y]=null);c&&!s.class&&(s.class="");var p=ve.get(t.nodeName);p||ve.set(t.nodeName,p=at(t));var m=t.__attributes??(t.__attributes={}),n=[];for(const v in s){let d=s[v];if(_&&v==="value"&&d==null){t.value=t.__value="",i[v]=d;continue}var o=i[v];if(d!==o){i[v]=d;var l=v[0]+v[1];if(l!=="$$")if(l==="on"){const b={},f="$$"+v;let u=v.slice(2);var h=Le.includes(u);if(Ie(u)&&(u=u.slice(0,-7),b.capture=!0),!h&&o){if(d!=null)continue;t.removeEventListener(u,i[f],b),i[f]=null}if(d!=null)if(h)t[`__${u}`]=d,Qe([u]);else{let E=function(I){i[v].call(this,I)};e?i[f]=fe(u,t,E,b):n.push([v,d,()=>i[f]=fe(u,t,E,b)])}}else if(d==null)m[v]=null,t.removeAttribute(v);else if(v==="style")t.style.cssText=d+"";else if(v==="autofocus")et(t,!!d);else if(v==="__value"||v==="value")t.value=t[v]=t.__value=d;else{var g=v;r&&(g=g.toLowerCase(),g=xe[g]||g),p.includes(g)?C&&(g==="src"||g==="href"||g==="srcset")||(t[g]=d):typeof d!="function"&&(c&&g==="class"&&(d&&(d+=" "),d+=a),N(t,g,d))}}}return e||Q(()=>{if(t.isConnected)for(const[v,d,b]of n)i[v]===d&&b()}),i}function Ct(t,e,s,r){if(t.tagName.includes("-")){for(var a in e)a in s||(s[a]=null);for(a in s)st(t,a,s[a]);return s}return me(t,e,s,t.namespaceURI!==Se,r)}var rt=["width","height"],ve=new Map;function at(t){for(var e=[],s,r=ie(t);r.constructor.name!=="Element";){s=Fe(r);for(var a in s)s[a].set&&!rt.includes(a)&&e.push(a);r=ie(r)}return e}function wt(t,e){var s=t.__className,r=nt(e);C&&t.className===r?t.__className=r:(s!==r||C&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function nt(t){return t??""}function kt(t,e,s){s?t.classList.add(e):t.classList.remove(e)}function _e(t,e,s,r){const a=t.style,c=a.getPropertyValue(e);s==null?c!==""&&a.removeProperty(e):c!==s&&a.setProperty(e,s,r?"important":"")}const B=(t,e)=>!e||!t.startsWith(e)?t:t.substring(e.length),U=(t,e)=>!e||!t.endsWith(e)?t:t.substring(0,t.length-e.length),At=(t,e)=>t.endsWith(e)?t:t+e,it=t=>U(B(B(t,"https://"),"www."),"/");var lt=Oe(`<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02
		15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32
		12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12
		11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33
		11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74
		5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95
		7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31
		12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12
		7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01
		13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71
		14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"></path></svg>`);function ot(t,e){const s=Y(e,"fill",3,"var(--text_color, #000)"),r=Y(e,"size",3,"var(--space_xl7, 64px)"),a=Y(e,"label",3,"the GitHub icon, an octocat silhouette"),c=oe(()=>e.width??r()),i=oe(()=>e.height??r());var _=lt();let y;var p=S(_);x(_),G(()=>{y=me(_,y,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",...e.attrs,"aria-label":a(),class:e.classes},!1,""),_e(_,"width",le(c)),_e(_,"height",le(i)),N(p,"fill",s())}),T(t,_)}var ft=he('<div class="root_url svelte-1jw5l93"><a> </a></div>'),ct=he('<footer class="box"><!> <div class="logo box panel p_lg shadow_inset_xs svelte-1jw5l93"><!> <a rel="me" title="source code on GitHub" class="svelte-1jw5l93"><!></a> <!></div> <!></footer>');function Et(t,e){Ue(e,!0);const s=Y(e,"root_url",3,null);var r=ct(),a=S(r);D(a,()=>e.children,n=>{var o=H(),l=M(o);P(l,()=>e.children),T(n,o)});var c=k(k(a,!0)),i=S(c);D(i,()=>e.logo_header,n=>{var o=H(),l=M(o);P(l,()=>e.logo_header),T(n,o)});var _=k(k(i,!0)),y=S(_);D(y,()=>e.logo,n=>{var o=H(),l=M(o);P(l,()=>e.logo),T(n,o)},n=>{ot(n,{})}),x(_);var p=k(k(_,!0));D(p,()=>e.logo_footer,n=>{var o=H(),l=M(o);P(l,()=>e.logo_footer),T(n,o)}),x(c);var m=k(k(c,!0));D(m,s,n=>{var o=ft(),l=S(o),h=S(l);G(()=>Xe(h,it(s()))),x(l),x(o),G(()=>N(l,"href",s())),T(n,o)}),x(r),G(()=>N(_,"href",e.pkg.repo_url)),T(t,r),Ke()}const Tt=(t,e,s)=>{const{name:r}=e,c=(o=>o?U(B(U(o,".git"),"git+"),"/"):null)(e.repository?typeof e.repository=="string"?e.repository:e.repository.url:null),i=e.homepage??null,_=!e.private&&!!e.exports&&e.version!=="0.0.1",y=_?"https://www.npmjs.com/package/"+e.name:null,p=_&&c?c+"/blob/main/CHANGELOG.md":null,m=ut(r),n=c?B(c,"https://github.com/").split("/")[0]:null;return{url:t,package_json:e,src_json:s,name:r,repo_name:m,repo_url:c,owner_name:n,homepage_url:i,npm_url:y,changelog_url:p,published:_}},ut=t=>t[0]==="@"?t.split("/")[1]:t,Nt={name:"svelte-intersect",version:"0.14.2",description:"a Svelte action for IntersectionObserver",license:"MIT",glyph:"💠",logo:"logo.svg",logo_alt:"a friendly pixelated spider facing you",public:!0,homepage:"https://ryanatkn.github.io/svelte-intersect/",repository:"https://github.com/ryanatkn/svelte-intersect",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/svelte-intersect/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},peerDependencies:{svelte:"^5.0.0-next.0"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.7","@ryanatkn/eslint-config":"^0.4.1","@ryanatkn/fuz":"^0.110.4","@ryanatkn/fuz_code":"^0.16.0","@ryanatkn/gro":"^0.130.1","@ryanatkn/moss":"^0.8.0","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1",eslint:"^9.7.0","eslint-plugin-svelte":"^2.42.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.5","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.184","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.3","typescript-eslint":"^8.0.0-alpha.44",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{".":{types:"./dist/index.d.ts",default:"./dist/index.js"},"./package.json":"./package.json"}},It={name:"svelte-intersect",version:"0.14.2",modules:{".":{path:"index.ts",declarations:[{name:"Intersect_Params",kind:"type"},{name:"Intersect_Params_Or_Callback",kind:"type"},{name:"intersect",kind:"function"},{name:"On_Intersect",kind:"type"},{name:"Intersect_State",kind:"type"},{name:"On_Disconnect",kind:"type"},{name:"Disconnect_State",kind:"type"}]},"./package.json":{path:"package.json",declarations:[]}}};export{Et as L,N as a,_e as b,mt as c,B as d,At as e,it as f,wt as g,U as h,yt as i,Nt as j,It as k,pt as l,z as m,tt as n,Ct as o,Tt as p,bt as r,me as s,kt as t};

import{h as G,d as pe,b as le,U as We,M as Ne,m as be,i as ye,g as Je,q as Xe,a as S,t as M,A as q,s as v,c as I,r as F,f as L,B as he,S as $}from"../chunks/disclose-version.99vFn8pH.js";import{l as De,a1 as Ye,q as Le,m as Oe,E as Ve,r as Ke,n as Qe,h as $e,J as et,u as tt,K as Me,a2 as at,p as ue,k as ce,t as U,f as k,x as R,a0 as xe,a3 as nt,s as rt}from"../chunks/runtime.PxAhVgy1.js";import{l as ke,m as Fe,n as st,a as O,b as we,f as it,t as X,e as ot,d as lt,o as ut,s as Ae,r as ie,c as ct,p as dt,j as Se,L as gt,k as vt}from"../chunks/package.SRCUAMW0.js";import{b as Ee,s as W,d as ft}from"../chunks/render.IjJ8E02t.js";import{i as D,p as K}from"../chunks/props.3jkIhGdY.js";import{s as N}from"../chunks/snippet.e565J9WV.js";import{s as Re,a as qe,p as Ze}from"../chunks/stores.CKAfhbQ4.js";import{b as pt}from"../chunks/entry.7C2iblKp.js";import{h as ht}from"../chunks/html.tXd4DtVi.js";function mt(g,n,a){G&&pe();var c=g,f=We,h;De(()=>{Ye(f,f=n())&&(h&&Le(h),h=Oe(()=>a(c)))}),G&&(c=le)}function _t(g,n,a,c,f,h){let b=G;G&&pe();var i,y,w=null;G&&le.nodeType===1&&(w=le,pe());var C=G?le:g,j,A=Fe;De(()=>{const T=n()||null;var z=f?f():a||T==="svg"?Ne:null;if(T!==i){var x=Fe;ke(A),j&&(T===null?Le(j,()=>{j=null,y=null}):T===y?Ke(j):(Qe(j),Ee(!1))),T&&T!==y&&(j=Oe(()=>{if(w=G?w:z?document.createElementNS(z,T):document.createElement(T),Je(w,w),c){var m=G?w.firstChild:w.appendChild(Xe());G&&(m===null?be(!1):ye(m)),c(w,m)}$e.nodes.end=w,C.before(w)})),i=T,i&&(y=i),Ee(!0),ke(x)}},Ve),b&&(be(!0),ye(C))}function bt(g,n,a){et(()=>{var c=tt(()=>n(g,a==null?void 0:a())||{});if(a&&(c!=null&&c.update)){var f=!1;Me(()=>{var h=a();at(h),f&&c.update(h)}),f=!0}if(c!=null&&c.destroy)return()=>c.destroy()})}function yt(g,n,a,c=a){g.addEventListener(n,a);const f=g.__on_r;f?g.__on_r=()=>{f(),c()}:g.__on_r=c,st()}function oe(g,n,a){yt(g,"input",()=>{a(je(g)?Ie(g.value):g.value)}),Me(()=>{var c=n();if(G&&g.defaultValue!==g.value){a(g.value);return}je(g)&&c===Ie(g.value)||g.type==="date"&&!c&&!g.value||(g.value=c??"")})}function je(g){var n=g.type;return n==="number"||n==="range"}function Ie(g){return g===""?null:+g}var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xt(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var Ue={exports:{}};(function(g){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(c){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,h=0,b={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof y?new y(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,r){r=r||{};var o,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),r[s])return r[s];o={},r[s]=o;for(var l in e)e.hasOwnProperty(l)&&(o[l]=t(e[l],r));return o;case"Array":return s=i.util.objId(e),r[s]?r[s]:(o=[],r[s]=o,e.forEach(function(d,u){o[u]=t(d,r)}),o);default:return e}},getLanguage:function(t){for(;t;){var e=f.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(f,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(o){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var o="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(o))return!1;t=t.parentElement}return!!r}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(t,e){var r=i.util.clone(i.languages[t]);for(var o in e)r[o]=e[o];return r},insertBefore:function(t,e,r,o){o=o||i.languages;var s=o[t],l={};for(var d in s)if(s.hasOwnProperty(d)){if(d==e)for(var u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);r.hasOwnProperty(d)||(l[d]=s[d])}var _=o[t];return o[t]=l,i.languages.DFS(i.languages,function(p,P){P===_&&p!=t&&(this[p]=l)}),l},DFS:function t(e,r,o,s){s=s||{};var l=i.util.objId;for(var d in e)if(e.hasOwnProperty(d)){r.call(e,d,e[d],o||d);var u=e[d],_=i.util.type(u);_==="Object"&&!s[l(u)]?(s[l(u)]=!0,t(u,r,null,s)):_==="Array"&&!s[l(u)]&&(s[l(u)]=!0,t(u,r,d,s))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var o={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),i.hooks.run("before-all-elements-highlight",o);for(var s=0,l;l=o.elements[s++];)i.highlightElement(l,e===!0,o.callback)},highlightElement:function(t,e,r){var o=i.util.getLanguage(t),s=i.languages[o];i.util.setLanguage(t,o);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(l,o);var d=t.textContent,u={element:t,language:o,grammar:s,code:d};function _(P){u.highlightedCode=P,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),r&&r.call(u.element)}if(i.hooks.run("before-sanity-check",u),l=u.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code){i.hooks.run("complete",u),r&&r.call(u.element);return}if(i.hooks.run("before-highlight",u),!u.grammar){_(i.util.encode(u.code));return}if(e&&c.Worker){var p=new Worker(i.filename);p.onmessage=function(P){_(P.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else _(i.highlight(u.code,u.grammar,u.language))},highlight:function(t,e,r){var o={code:t,grammar:e,language:r};if(i.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=i.tokenize(o.code,o.grammar),i.hooks.run("after-tokenize",o),y.stringify(i.util.encode(o.tokens),o.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var o in r)e[o]=r[o];delete e.rest}var s=new j;return A(s,s.head,t),C(t,s,e,s.head,0),z(s)},hooks:{all:{},add:function(t,e){var r=i.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=i.hooks.all[t];if(!(!r||!r.length))for(var o=0,s;s=r[o++];)s(e)}},Token:y};c.Prism=i;function y(t,e,r,o){this.type=t,this.content=e,this.alias=r,this.length=(o||"").length|0}y.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var o="";return e.forEach(function(_){o+=t(_,r)}),o}var s={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(s.classes,l):s.classes.push(l)),i.hooks.run("wrap",s);var d="";for(var u in s.attributes)d+=" "+u+'="'+(s.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+d+">"+s.content+"</"+s.tag+">"};function w(t,e,r,o){t.lastIndex=e;var s=t.exec(r);if(s&&o&&s[1]){var l=s[1].length;s.index+=l,s[0]=s[0].slice(l)}return s}function C(t,e,r,o,s,l){for(var d in r)if(!(!r.hasOwnProperty(d)||!r[d])){var u=r[d];u=Array.isArray(u)?u:[u];for(var _=0;_<u.length;++_){if(l&&l.cause==d+","+_)return;var p=u[_],P=p.inside,Y=!!p.lookbehind,ee=!!p.greedy,te=p.alias;if(ee&&!p.pattern.global){var He=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,He+"g")}for(var me=p.pattern||p,Z=o.next,B=s;Z!==e.tail&&!(l&&B>=l.reach);B+=Z.value.length,Z=Z.next){var V=Z.value;if(e.length>t.length)return;if(!(V instanceof y)){var ae=1,H;if(ee){if(H=w(me,B,t,Y),!H||H.index>=t.length)break;var ne=H.index,Be=H.index+H[0].length,J=B;for(J+=Z.value.length;ne>=J;)Z=Z.next,J+=Z.value.length;if(J-=Z.value.length,B=J,Z.value instanceof y)continue;for(var Q=Z;Q!==e.tail&&(J<Be||typeof Q.value=="string");Q=Q.next)ae++,J+=Q.value.length;ae--,V=t.slice(B,J),H.index-=B}else if(H=w(me,0,V,Y),!H)continue;var ne=H.index,re=H[0],de=V.slice(0,ne),_e=V.slice(ne+re.length),ge=B+V.length;l&&ge>l.reach&&(l.reach=ge);var se=Z.prev;de&&(se=A(e,se,de),B+=de.length),T(e,se,ae);var Ge=new y(d,P?i.tokenize(re,P):re,te,re);if(Z=A(e,se,Ge),_e&&A(e,Z,_e),ae>1){var ve={cause:d+","+_,reach:ge};C(t,e,r,Z.prev,B,ve),l&&ve.reach>l.reach&&(l.reach=ve.reach)}}}}}}function j(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function A(t,e,r){var o=e.next,s={value:r,prev:e,next:o};return e.next=s,o.prev=s,t.length++,s}function T(t,e,r){for(var o=e.next,s=0;s<r&&o!==t.tail;s++)o=o.next;e.next=o,o.prev=e,t.length-=s}function z(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,o=e.code,s=e.immediateClose;c.postMessage(i.highlight(o,i.languages[r],r)),s&&c.close()},!1)),i;var x=i.util.currentScript();x&&(i.filename=x.src,x.hasAttribute("data-manual")&&(i.manual=!0));function m(){i.manual||i.highlightAll()}if(!i.manual){var E=document.readyState;E==="loading"||E==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return i}(n);g.exports&&(g.exports=a),typeof Te<"u"&&(Te.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(f,h){var b={};b["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[h]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};i["language-"+h]={pattern:/[\s\S]+/,inside:a.languages[h]};var y={};y[f]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return f}),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(c,f){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[f,"language-"+f],inside:a.languages[f]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(c){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+f.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var h=c.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",f=function(x,m){return"✖ Error "+x+" while fetching file: "+m},h="✖ Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",y="loading",w="loaded",C="failed",j="pre[data-src]:not(["+i+'="'+w+'"]):not(['+i+'="'+y+'"])';function A(x,m,E){var t=new XMLHttpRequest;t.open("GET",x,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?m(t.responseText):t.status>=400?E(f(t.status,t.statusText)):E(h))},t.send(null)}function T(x){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(m){var E=Number(m[1]),t=m[2],e=m[3];return t?e?[E,Number(e)]:[E,void 0]:[E,E]}}a.hooks.add("before-highlightall",function(x){x.selector+=", "+j}),a.hooks.add("before-sanity-check",function(x){var m=x.element;if(m.matches(j)){x.code="",m.setAttribute(i,y);var E=m.appendChild(document.createElement("CODE"));E.textContent=c;var t=m.getAttribute("data-src"),e=x.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=b[r]||r}a.util.setLanguage(E,e),a.util.setLanguage(m,e);var o=a.plugins.autoloader;o&&o.loadLanguages(e),A(t,function(s){m.setAttribute(i,w);var l=T(m.getAttribute("data-range"));if(l){var d=s.split(/\r\n?|\n/g),u=l[0],_=l[1]==null?d.length:l[1];u<0&&(u+=d.length),u=Math.max(0,Math.min(u-1,d.length)),_<0&&(_+=d.length),_=Math.max(0,Math.min(_,d.length)),s=d.slice(u,_).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(u+1))}E.textContent=s,a.highlightElement(E)},function(s){m.setAttribute(i,C),E.textContent=s})}}),a.plugins.fileHighlight={highlight:function(m){for(var E=(m||document).querySelectorAll(j),t=0,e;e=E[t++];)a.highlightElement(e)}};var z=!1;a.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Ue);var kt=Ue.exports;const Pe=xt(kt),Ce="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+Ce+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+Ce+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",g=>{g.type==="entity"&&(g.attributes.title=g.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(n,a){const c={};c["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[a]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;const f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};f["language-"+a]={pattern:/[\s\S]+/,inside:Prism.languages[a]};const h={};h[n]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,n),"i"),lookbehind:!0,greedy:!0,inside:f},Prism.languages.insertBefore("svelte","cdata",h)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var Ft=M('<div class="repo_name svelte-1widkfd"> </div>'),wt=M("<img>"),At=M("<blockquote> </blockquote>"),St=M('<p class="text_align_center"> <!></p>'),Et=M('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),jt=M('<a class="chip svelte-1widkfd">repo</a>'),It=M('<a class="chip svelte-1widkfd" title="version"> </a>'),Tt=M('<a class="chip svelte-1widkfd">npm</a>'),Pt=M('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),Ct=M('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function zt(g,n){ue(n,!0);const a=Re(),c=()=>qe(Ze,"$page",a),f=R(()=>n.pkg),h=R(()=>{let{package_json:l}=k(f);return[l]}),b=R(()=>k(h)[0]),i=R(()=>n.pkg.homepage_url?ot(n.pkg.homepage_url,"/")+(n.pkg.package_json.logo?lt(n.pkg.package_json.logo,"/"):"favicon.png"):void 0),y=n.pkg.package_json.logo_alt??`logo for ${n.pkg.repo_name}`;var w=Ct(),C=I(w),j=I(C);D(j,()=>n.repo_name,l=>{var d=q(),u=L(d);N(u,()=>n.repo_name,()=>n.pkg.repo_name),S(l,d)},l=>{var d=Ft(),u=I(d);F(d),U(()=>W(u,n.pkg.repo_name)),S(l,d)});var A=v(j,!0);A.nodeValue="  ";var T=v(A);D(T,()=>k(i),l=>{var d=q(),u=L(d);D(u,()=>n.logo,_=>{var p=q(),P=L(p);N(P,()=>n.logo,()=>k(i),()=>y),S(_,p)},_=>{var p=wt();O(p,"alt",y),U(()=>{O(p,"src",k(i)),we(p,"width","var(--size, var(--icon_size_xl2))"),we(p,"height","var(--size, var(--icon_size_xl2))")}),S(_,p)}),S(l,d)}),F(C);var z=v(v(C,!0));D(z,()=>k(b).motto,l=>{var d=q(),u=L(d);D(u,()=>n.motto,_=>{var p=q(),P=L(p);N(P,()=>n.motto,()=>k(b).motto,()=>k(b).glyph),S(_,p)},_=>{var p=At(),P=I(p);F(p),U(()=>W(P,`${k(b).motto??""}
				${k(b).glyph??""}`)),S(_,p)}),S(l,d)});var x=v(v(z,!0));D(x,()=>k(b).description,l=>{var d=q(),u=L(d);D(u,()=>n.description,_=>{var p=q(),P=L(p);N(P,()=>n.description,()=>k(b).description,()=>k(b).glyph),S(_,p)},_=>{var p=St(),P=I(p),Y=v(P);D(Y,()=>!k(b).motto,ee=>{var te=he();U(()=>W(te,k(b).glyph)),S(ee,te)}),F(p),U(()=>W(P,`${k(b).description??""} `)),S(_,p)}),S(l,d)});var m=v(v(x,!0));D(m,()=>n.children,l=>{var d=q(),u=L(d);N(u,()=>n.children),S(l,d)});var E=v(v(m,!0));D(E,()=>n.pkg.homepage_url,l=>{var d=q(),u=L(d);D(u,()=>n.homepage_url,_=>{var p=q(),P=L(p);N(P,()=>n.homepage_url,()=>n.pkg.homepage_url),S(_,p)},_=>{var p=Et(),P=I(p),Y=I(P);U(()=>W(Y,it(n.pkg.homepage_url))),F(P),F(p),U(()=>{O(P,"href",n.pkg.homepage_url),X(P,"selected",n.pkg.homepage_url===c().url.href)}),S(_,p)}),S(l,d)});var t=v(v(E,!0)),e=I(t);D(e,()=>n.pkg.repo_url,l=>{var d=jt();U(()=>O(d,"href",n.pkg.repo_url)),S(l,d)});var r=v(v(e,!0));D(r,()=>n.pkg.changelog_url,l=>{var d=It(),u=I(d);F(d),U(()=>{O(d,"href",n.pkg.changelog_url),W(u,k(b).version)}),S(l,d)});var o=v(v(r,!0));D(o,()=>n.pkg.npm_url,l=>{var d=Tt();U(()=>O(d,"href",n.pkg.npm_url)),S(l,d)}),F(t);var s=v(v(t,!0));D(s,()=>n.pkg.npm_url,l=>{var d=q(),u=L(d);D(u,()=>n.npm_url,_=>{var p=q(),P=L(p);N(P,()=>n.npm_url,()=>n.pkg.npm_url),S(_,p)},_=>{var p=Pt(),P=I(p);F(p),U(()=>W(P,`npm i -D ${k(b).name??""}`)),S(_,p)}),S(l,d)}),F(w),S(g,w),ce()}var Dt=M('<div class="icon svelte-kpg6il"><!></div>'),Lt=M('<!> <div class="content svelte-kpg6il"><!></div> <!>',1);function Ot(g,n){ue(n,!0);const a=Re(),c=()=>qe(Ze,"$page",a),f=t=>{var e=Dt(),r=I(e);D(r,()=>typeof k(x)=="string",o=>{var s=he();U(()=>W(s,k(x))),S(o,s)},o=>{var s=q(),l=L(s);N(l,()=>k(x)),S(o,s)}),F(e),S(t,e)},h=K(n,"align",3,"left"),b=R(()=>!!n.href),i=R(()=>k(b)&&c().url.pathname===n.href),y=R(()=>n.tag??(k(b)?"a":"div")),w=R(()=>k(b)?{href:n.href}:void 0),C=R(()=>h()==="left"),j=R(()=>h()==="right"),A=R(()=>h()==="above"),T=R(()=>h()==="below"),z=R(()=>k(b)?"🔗":"🪧"),x=R(()=>n.icon??k(z));var m=q(),E=L(m);_t(E,()=>k(y),!1,(t,e)=>{let r;U(()=>{r=ut(t,r,{class:"card",...n.attrs,...k(w)},"svelte-kpg6il"),X(t,"link",k(b)),X(t,"selected",k(i)),X(t,"left",k(C)),X(t,"right",k(j)),X(t,"above",k(A)),X(t,"below",k(T))});var o=Lt(),s=L(o);D(s,()=>h()==="left"||h()==="above",_=>{f(_)});var l=v(v(s,!0)),d=I(l);N(d,()=>n.children),F(l);var u=v(v(l,!0));D(u,()=>h()==="right"||h()==="below",_=>{f(_)}),S(e,o)}),S(g,m),ce()}(function(g){g.languages.typescript=g.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),g.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete g.languages.typescript.parameter,delete g.languages.typescript["literal-property"];var n=g.languages.extend("typescript",{});delete n["class-name"],g.languages.typescript["class-name"].inside=n,g.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),g.languages.ts=g.languages.typescript})(Prism);var Mt=M("<pre><code><!></code></pre>");function ze(g,n){ue(n,!0);const a=K(n,"lang",3,"svelte"),c=K(n,"inline",3,!1),f=R(()=>a()===null?null:Pe.languages[a()]),h=R(()=>k(f)===null?null:n.content&&Pe.highlight(n.content,k(f),a())),b=R(()=>k(h)??n.content);var i=Mt();let y;var w=I(i);let C;var j=I(w);D(j,()=>n.children,A=>{var T=q(),z=L(T);N(z,()=>n.children,()=>k(b)),S(A,T)},A=>{var T=q(),z=L(T);D(z,()=>k(h)!==null,x=>{var m=q(),E=L(m);ht(E,()=>k(h),!1,!1),S(x,m)},x=>{var m=he();U(()=>W(m,n.content)),S(x,m)},!0),S(A,T)}),F(w),F(i),U(()=>{y=Ae(i,y,{...n.pre_attrs},!0,"svelte-1a6bj2n"),X(i,"inline",c()),C=Ae(w,C,{...n.code_attrs},!0,"svelte-1a6bj2n")}),S(g,i),ce()}const Rt=(g,n)=>{let a,c,f,h,b,i,y;const w=A=>{i=0,typeof A=="function"?(a=A,c=void 0,f=void 0,h=void 0):(a=A.onintersect,c=A.ondisconnect,f=A.count,h=A.options)},C=()=>{y&&(y.disconnect(),c&&c({intersecting:b,intersections:i,el:g,observer:y}),y=null)},j=()=>{y&&C(),f!==0&&(y=new IntersectionObserver(A=>{b=A[0].isIntersecting,a&&y&&a({intersecting:b,intersections:i,el:g,observer:y,disconnect:C}),b?i++:f&&f>0&&i>=f&&C()},h),y.observe(g))};return w(n),j(),{update:A=>{w(A),j()},destroy:C}};var qt=M('<li class="box svelte-fxal6a"><div class="box"> </div></li>'),Zt=M('<div class="demo svelte-fxal6a"><label class="box" title="IntersectionObserver options.threshold"><div class="title"><code>options.threshold</code></div> <div class="threshold svelte-fxal6a"><input type="number" class="svelte-fxal6a"> <input type="range" class="svelte-fxal6a"></div></label> <label class="box" title="disconnect the observer after the element enters and leaves the viewport this many times"><div class="title"><code>count</code></div> <div class="count svelte-fxal6a"><input type="number" class="svelte-fxal6a"> <input type="range" class="svelte-fxal6a"></div></label> <ul class="box svelte-fxal6a"></ul></div>');function fe(g,n){const a=()=>typeof window>"u"?51:window.innerHeight/30;let c=K(n,"threshold",7,0),f=K(n,"count",15,()=>-1),h=K(n,"items_count",11,a);const b=R(()=>Array.from({length:h()},(e,r)=>r));var i=Zt(),y=I(i),w=I(y);F(w);var C=v(v(w,!0)),j=I(C);ie(j),O(j,"step",.1),O(j,"min",0),O(j,"max",1);var A=v(v(j,!0));ie(A),O(A,"step",.1),O(A,"min",0),O(A,"max",1),F(C),F(y);var T=v(v(y,!0)),z=I(T);F(z);var x=v(v(z,!0)),m=I(x);ie(m),O(m,"min",-1),O(m,"max",3),O(m,"step",1);var E=v(v(m,!0));ie(E),O(E,"min",-1),O(E,"max",3),O(E,"step",1),F(x),F(T);var t=v(v(T,!0));ct(t,76,()=>k(b),(e,r)=>xe(e),(e,r,o)=>{var s=qt(),l=I(s),d=I(l);F(l),F(s),U(()=>W(d,xe(r))),bt(s,(u,_)=>Rt(u,_),()=>({onintersect:u=>{const{intersecting:_,el:p}=u;p.classList.toggle("intersecting",_),console.log("onintersect params",u)},ondisconnect:u=>{console.log("ondisconnect params",u)},count:f(),options:{threshold:c()}})),S(e,s)}),F(t),F(i),oe(j,c,e=>c(e)),oe(A,c,e=>c(e)),oe(m,f,e=>f(e)),oe(E,f,e=>f(e)),S(g,i)}const Ut=(g,n)=>nt(n);var Ht=M("<!> <!> <!>",1),Bt=M(`<section><h2 class="mt_0">demo</h2> <div class="mb_lg"><!></div> <div class="mb_lg"><!></div> <p>An <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#threshold"><code>options.threshold</code></a> of <code>0</code> triggers the event when the element is inside the viewport at least a pixel,
		and a value of <code>1</code> triggers the event when it is fully inside the viewport. See also <code>options.root</code> and <code>options.rootMargin</code> in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver">IntersectionObserver docs</a>.</p> <p>A <code>count</code> of <code>1</code> disconnects the observer after the element enters and
		leaves the viewport one time, like <code>'once'</code> for events. Similar for any positive integer.</p> <p>A <code>count</code> that's negative or <code>undefined</code> makes it so it will never automatically
		disconnect.</p> <p>A <code>count</code> of <code>0</code> disables <code>onintersect</code> and never creates the <code>IntersectionObserver</code>.</p> <p>See also the <a href="https://github.com/ryanatkn/svelte-intersect#readme">API docs</a> and <a href="https://github.com/ryanatkn/svelte-intersect/blob/main/src/routes/Demo.svelte">demo source code</a>.</p> <p></p></section> <section class="box"><button type="button" class="mb_lg">reset state</button></section> <section class="w_100"><div class="box row gap_lg wrap"><!></div></section>`,1);function Gt(g){let n=rt(0);var a=Bt(),c=L(a),f=I(c),h=v(v(f,!0)),b=I(h);ze(b,{lang:"ts",content:"import {intersect} from 'svelte-intersect';"}),F(h);var i=v(v(h,!0)),y=I(i);ze(y,{content:`<li
	use:intersect={{
		onintersect: ({intersecting, intersections, el, obeserver, disconnect}) =>
			el.classList.toggle('intersecting', intersecting),
		ondisconnect: ({intersecting, intersections, el, obeserver}) => { /* */ },
		count,
		options: {threshold},
	}}
>`}),F(i);var w=v(v(i,!0)),C=v(I(w));F(C),$(),F(w);var j=v(v(w,!0));$(),F(j);var A=v(v(j,!0));$(),F(A);var T=v(v(A,!0));$(),F(T);var z=v(v(T,!0));$(),F(z),F(c);var x=v(v(c,!0)),m=I(x);m.__click=[Ut,n],F(x);var E=v(v(x,!0)),t=I(E),e=I(t);mt(e,()=>k(n),r=>{var o=Ht(),s=L(o);fe(s,{});var l=v(v(s,!0));fe(l,{threshold:1});var d=v(v(l,!0));fe(d,{count:1}),S(r,o)}),F(t),F(E),S(g,a)}ft(["click"]);var Wt=M("docs",1),Nt=M('<main class="box mb_xl7"><div class="width_md px_lg"><section><header class="box"><h1 class="my_xl3">svelte-intersect</h1> <!></header></section> <section class="box"><!> <a class="chip mt_xl3">about</a></section> <!> <!></div></main>');function aa(g,n){ue(n,!0);const a=dt(Se.homepage,Se,vt);var c=Nt(),f=I(c),h=I(f),b=I(h),i=I(b),y=v(v(i,!0));zt(y,{pkg:a,repo_name:x=>{}}),F(b),F(h);var w=v(v(h,!0)),C=I(w);Ot(C,{href:"https://github.com/ryanatkn/svelte-intersect#readme",attrs:{class:"card mb_lg"},icon:x=>{},children:(x,m)=>{var E=Wt();S(x,E)},$$slots:{default:!0}});var j=v(v(C,!0));O(j,"href",`${pt??""}/about`),F(w);var A=v(v(w,!0));Gt(A);var T=v(v(A,!0));gt(T,{pkg:a,root_url:"https://www.ryanatkn.com/"}),F(f),F(c),S(g,c),ce()}export{aa as component};

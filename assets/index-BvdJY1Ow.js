import{r as C,a as $b,R as ec,g as pv,b as zn,c as Ot}from"./vendor-eKLMs-xS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var mv={exports:{}},jc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fb=C,Ub=Symbol.for("react.element"),zb=Symbol.for("react.fragment"),Bb=Object.prototype.hasOwnProperty,Hb=Fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qb={key:!0,ref:!0,__self:!0,__source:!0};function gv(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Bb.call(e,r)&&!qb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ub,type:t,key:s,ref:a,props:i,_owner:Hb.current}}jc.Fragment=zb;jc.jsx=gv;jc.jsxs=gv;mv.exports=jc;var l=mv.exports,Hu={},Ap=$b;Hu.createRoot=Ap.createRoot,Hu.hydrateRoot=Ap.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Cp="popstate";function Wb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:c}=r.location;return qu("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tc(i)}return Gb(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kb(){return Math.random().toString(36).substr(2,8)}function Pp(t,e){return{usr:t.state,key:t.key,idx:e}}function qu(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qi(e):e,{state:n,key:e&&e.key||r||Kb()})}function tc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Gb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,c=cr.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(ea({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){c=cr.Pop;let S=f(),N=S==null?null:S-h;h=S,u&&u({action:c,location:I.location,delta:N})}function g(S,N){c=cr.Push;let k=qu(I.location,S,N);h=f()+1;let O=Pp(k,h),D=I.createHref(k);try{a.pushState(O,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(D)}s&&u&&u({action:c,location:I.location,delta:1})}function w(S,N){c=cr.Replace;let k=qu(I.location,S,N);h=f();let O=Pp(k,h),D=I.createHref(k);a.replaceState(O,"",D),s&&u&&u({action:c,location:I.location,delta:0})}function E(S){let N=i.location.origin!=="null"?i.location.origin:i.location.href,k=typeof S=="string"?S:tc(S);return k=k.replace(/ $/,"%20"),Ne(N,"No window.location.(origin|href) available to create URL for href: "+k),new URL(k,N)}let I={get action(){return c},get location(){return t(i,a)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Cp,m),u=S,()=>{i.removeEventListener(Cp,m),u=null}},createHref(S){return e(i,S)},createURL:E,encodeLocation(S){let N=E(S);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:g,replace:w,go(S){return a.go(S)}};return I}var Rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rp||(Rp={}));function Yb(t,e,n){return n===void 0&&(n="/"),Qb(t,e,n,!1)}function Qb(t,e,n,r){let i=typeof e=="string"?Qi(e):e,s=Oi(i.pathname||"/",n);if(s==null)return null;let a=yv(t);Xb(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let h=c2(s);c=a2(a[u],h,r)}return c}function yv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=ur([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),yv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:i2(h,s.index),routesMeta:f})};return t.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let u of _v(s.path))i(s,a,u)}),e}function _v(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=_v(r.join("/")),c=[];return c.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&c.push(...a),c.map(u=>t.startsWith("/")&&u===""?"/":u)}function Xb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:s2(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jb=/^:[\w-]+$/,Zb=3,e2=2,t2=1,n2=10,r2=-2,kp=t=>t==="*";function i2(t,e){let n=t.split("/"),r=n.length;return n.some(kp)&&(r+=r2),e&&(r+=e2),n.filter(i=>!kp(i)).reduce((i,s)=>i+(Jb.test(s)?Zb:s===""?t2:n2),r)}function s2(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function a2(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=nc({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!m&&h&&n&&!r[r.length-1].route.index&&(m=nc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:ur([s,m.pathname]),pathnameBase:d2(ur([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=ur([s,m.pathnameBase]))}return a}function nc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=o2(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let I=c[m]||"";a=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const E=c[m];return w&&!E?h[g]=void 0:h[g]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:t}}function o2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function c2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Oi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function l2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qi(t):t;return{pathname:n?n.startsWith("/")?n:u2(n,e):e,search:f2(r),hash:p2(i)}}function u2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bv(t,e){let n=h2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qi(t):(i=ea({},t),Ne(!i.pathname||!i.pathname.includes("?"),vu("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),vu("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),vu("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=n;else{let m=e.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}c=m>=0?e[m]:"/"}let u=l2(i,c),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),d2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),f2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,p2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function m2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const xv=["post","put","patch","delete"];new Set(xv);const g2=["get",...xv];new Set(g2);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ta.apply(this,arguments)}const Oc=C.createContext(null),Ev=C.createContext(null),Er=C.createContext(null),Dc=C.createContext(null),Qr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Iv=C.createContext(null);function v2(t,e){let{relative:n}=e===void 0?{}:e;Ea()||Ne(!1);let{basename:r,navigator:i}=C.useContext(Er),{hash:s,pathname:a,search:c}=Mc(t,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:ur([r,a])),i.createHref({pathname:u,search:c,hash:s})}function Ea(){return C.useContext(Dc)!=null}function Ia(){return Ea()||Ne(!1),C.useContext(Dc).location}function Tv(t){C.useContext(Er).static||C.useLayoutEffect(t)}function Xr(){let{isDataRoute:t}=C.useContext(Qr);return t?R2():y2()}function y2(){Ea()||Ne(!1);let t=C.useContext(Oc),{basename:e,future:n,navigator:r}=C.useContext(Er),{matches:i}=C.useContext(Qr),{pathname:s}=Ia(),a=JSON.stringify(bv(i,n.v7_relativeSplatPath)),c=C.useRef(!1);return Tv(()=>{c.current=!0}),C.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=wv(h,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ur([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,s,t])}function Mc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(Er),{matches:i}=C.useContext(Qr),{pathname:s}=Ia(),a=JSON.stringify(bv(i,r.v7_relativeSplatPath));return C.useMemo(()=>wv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function _2(t,e){return b2(t,e)}function b2(t,e,n,r){Ea()||Ne(!1);let{navigator:i}=C.useContext(Er),{matches:s}=C.useContext(Qr),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Ia(),f;if(e){var m;let S=typeof e=="string"?Qi(e):e;u==="/"||(m=S.pathname)!=null&&m.startsWith(u)||Ne(!1),f=S}else f=h;let g=f.pathname||"/",w=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=Yb(t,{pathname:w}),I=T2(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:ur([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:ur([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&I?C.createElement(Dc.Provider,{value:{location:ta({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:cr.Pop}},I):I}function w2(){let t=P2(),e=m2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,null)}const x2=C.createElement(w2,null);class E2 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(Qr.Provider,{value:this.props.routeContext},C.createElement(Iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I2(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Qr.Provider,{value:e},r)}function T2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let a=t,c=(i=n)==null?void 0:i.errors;if(c!=null){let f=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||Ne(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:g,errors:w}=n,E=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||E){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,g)=>{let w,E=!1,I=null,S=null;n&&(w=c&&m.route.id?c[m.route.id]:void 0,I=m.route.errorElement||x2,u&&(h<0&&g===0?(E=!0,S=null):h===g&&(E=!0,S=m.route.hydrateFallbackElement||null)));let N=e.concat(a.slice(0,g+1)),k=()=>{let O;return w?O=I:E?O=S:m.route.Component?O=C.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=f,C.createElement(I2,{match:m,routeContext:{outlet:f,matches:N,isDataRoute:n!=null},children:O})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(E2,{location:n.location,revalidation:n.revalidation,component:I,error:w,children:k(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):k()},null)}var Sv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Sv||{}),rc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rc||{});function S2(t){let e=C.useContext(Oc);return e||Ne(!1),e}function A2(t){let e=C.useContext(Ev);return e||Ne(!1),e}function C2(t){let e=C.useContext(Qr);return e||Ne(!1),e}function Av(t){let e=C2(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function P2(){var t;let e=C.useContext(Iv),n=A2(rc.UseRouteError),r=Av(rc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function R2(){let{router:t}=S2(Sv.UseNavigateStable),e=Av(rc.UseNavigateStable),n=C.useRef(!1);return Tv(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ta({fromRouteId:e},s)))},[t,e])}function Rt(t){Ne(!1)}function k2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:a=!1,future:c}=t;Ea()&&Ne(!1);let u=e.replace(/^\/*/,"/"),h=C.useMemo(()=>({basename:u,navigator:s,static:a,future:ta({v7_relativeSplatPath:!1},c)}),[u,c,s,a]);typeof r=="string"&&(r=Qi(r));let{pathname:f="/",search:m="",hash:g="",state:w=null,key:E="default"}=r,I=C.useMemo(()=>{let S=Oi(f,u);return S==null?null:{location:{pathname:S,search:m,hash:g,state:w,key:E},navigationType:i}},[u,f,m,g,w,E,i]);return I==null?null:C.createElement(Er.Provider,{value:h},C.createElement(Dc.Provider,{children:n,value:I}))}function N2(t){let{children:e,location:n}=t;return _2(Wu(e),n)}new Promise(()=>{});function Wu(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Wu(r.props.children,s));return}r.type!==Rt&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ic.apply(this,arguments)}function Cv(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function j2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function O2(t,e){return t.button===0&&(!e||e==="_self")&&!j2(t)}const D2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],M2=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],V2="6";try{window.__reactRouterVersion=V2}catch{}const L2=C.createContext({isTransitioning:!1}),$2="startTransition",Np=ec[$2];function F2(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=Wb({window:i,v5Compat:!0}));let a=s.current,[c,u]=C.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=C.useCallback(m=>{h&&Np?Np(()=>u(m)):u(m)},[u,h]);return C.useLayoutEffect(()=>a.listen(f),[a,f]),C.createElement(k2,{basename:e,children:n,location:c.location,navigationType:c.action,navigator:a,future:r})}const U2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B2=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:c,target:u,to:h,preventScrollReset:f,unstable_viewTransition:m}=e,g=Cv(e,D2),{basename:w}=C.useContext(Er),E,I=!1;if(typeof h=="string"&&z2.test(h)&&(E=h,U2))try{let O=new URL(window.location.href),D=h.startsWith("//")?new URL(O.protocol+h):new URL(h),V=Oi(D.pathname,w);D.origin===O.origin&&V!=null?h=V+D.search+D.hash:I=!0}catch{}let S=v2(h,{relative:i}),N=q2(h,{replace:a,state:c,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:m});function k(O){r&&r(O),O.defaultPrevented||N(O)}return C.createElement("a",ic({},g,{href:E||S,onClick:I||s?r:k,ref:n,target:u}))}),De=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:c,to:u,unstable_viewTransition:h,children:f}=e,m=Cv(e,M2),g=Mc(u,{relative:m.relative}),w=Ia(),E=C.useContext(Ev),{navigator:I,basename:S}=C.useContext(Er),N=E!=null&&W2(g)&&h===!0,k=I.encodeLocation?I.encodeLocation(g).pathname:g.pathname,O=w.pathname,D=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,k=k.toLowerCase()),D&&S&&(D=Oi(D,S)||D);const V=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let L=O===k||!a&&O.startsWith(k)&&O.charAt(V)==="/",y=D!=null&&(D===k||!a&&D.startsWith(k)&&D.charAt(k.length)==="/"),_={isActive:L,isPending:y,isTransitioning:N},b=L?r:void 0,T;typeof s=="function"?T=s(_):T=[s,L?"active":null,y?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(_):c;return C.createElement(B2,ic({},m,{"aria-current":b,className:T,ref:n,style:A,to:u,unstable_viewTransition:h}),typeof f=="function"?f(_):f)});var Ku;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ku||(Ku={}));var jp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jp||(jp={}));function H2(t){let e=C.useContext(Oc);return e||Ne(!1),e}function q2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:c}=e===void 0?{}:e,u=Xr(),h=Ia(),f=Mc(t,{relative:a});return C.useCallback(m=>{if(O2(m,n)){m.preventDefault();let g=r!==void 0?r:tc(h)===tc(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:c})}},[h,u,f,r,i,n,t,s,a,c])}function W2(t,e){e===void 0&&(e={});let n=C.useContext(L2);n==null&&Ne(!1);let{basename:r}=H2(Ku.useViewTransitionState),i=Mc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Oi(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Oi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return nc(i.pathname,a)!=null||nc(i.pathname,s)!=null}const K2="_main_ko1im_1",G2="_box_ko1im_19",Y2="_image_ko1im_31",Q2="_doctor_login_form_ko1im_47",X2="_heading_ko1im_71",J2="_para1_ko1im_79",Z2="_para2_ko1im_89",ew="_form_ko1im_99",tw="_name_ko1im_117",It={main:K2,box:G2,image:Y2,doctor_login_form:Q2,heading:X2,para1:J2,para2:Z2,form:ew,name:tw},nw="/Hospital-System/doctor_login.jpg";function Wt(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function G(){return G=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},G.apply(null,arguments)}var Pv={exports:{}},rw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iw=rw,sw=iw;function Rv(){}function kv(){}kv.resetWarningCache=Rv;var aw=function(){function t(r,i,s,a,c,u){if(u!==sw){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kv,resetWarningCache:Rv};return n.PropTypes=n,n};Pv.exports=aw();var ow=Pv.exports;const Z=pv(ow);function Nv(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Nv(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Nt(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Nv(t))&&(r&&(r+=" "),r+=e);return r}function Gh(t,e){const n=G({},e);return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=G({},t[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]=G({},s),Object.keys(i).forEach(a=>{n[r][a]=Gh(i[a],s[a])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function Yh(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,a)=>{if(a){const c=e(a);c!==""&&s.push(c),n&&n[a]&&s.push(n[a])}return s},[]).join(" ")}),r}var Me={},jv={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(jv);var cn=jv.exports;function na(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const cw=Object.freeze(Object.defineProperty({__proto__:null,default:na},Symbol.toStringTag,{value:"Module"})),lw=zn(cw);function uw(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const hw=Object.freeze(Object.defineProperty({__proto__:null,default:uw},Symbol.toStringTag,{value:"Module"})),dw=zn(hw);var Ov=cn;Object.defineProperty(Me,"__esModule",{value:!0});var uo=Me.alpha=Lv;Me.blend=Tw;Me.colorChannel=void 0;var fw=Me.darken=Xh;Me.decomposeColor=Ht;Me.emphasize=$v;var pw=Me.getContrastRatio=bw;Me.getLuminance=sc;Me.hexToRgb=Dv;Me.hslToRgb=Vv;var mw=Me.lighten=Jh;Me.private_safeAlpha=ww;Me.private_safeColorChannel=void 0;Me.private_safeDarken=xw;Me.private_safeEmphasize=Iw;Me.private_safeLighten=Ew;Me.recomposeColor=Xi;Me.rgbToHex=_w;var Op=Ov(lw),gw=Ov(dw);function Qh(t,e=0,n=1){return(0,gw.default)(t,e,n)}function Dv(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function vw(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function Ht(t){if(t.type)return t;if(t.charAt(0)==="#")return Ht(Dv(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Op.default)(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error((0,Op.default)(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const Mv=t=>{const e=Ht(t);return e.values.slice(0,3).map((n,r)=>e.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Me.colorChannel=Mv;const yw=(t,e)=>{try{return Mv(t)}catch{return t}};Me.private_safeColorChannel=yw;function Xi(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function _w(t){if(t.indexOf("#")===0)return t;const{values:e}=Ht(t);return`#${e.map((n,r)=>vw(r===3?Math.round(255*n):n)).join("")}`}function Vv(t){t=Ht(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),a=(h,f=(h+n/30)%12)=>i-s*Math.max(Math.min(f-3,9-f,1),-1);let c="rgb";const u=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return t.type==="hsla"&&(c+="a",u.push(e[3])),Xi({type:c,values:u})}function sc(t){t=Ht(t);let e=t.type==="hsl"||t.type==="hsla"?Ht(Vv(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function bw(t,e){const n=sc(t),r=sc(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Lv(t,e){return t=Ht(t),e=Qh(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Xi(t)}function ww(t,e,n){try{return Lv(t,e)}catch{return t}}function Xh(t,e){if(t=Ht(t),e=Qh(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Xi(t)}function xw(t,e,n){try{return Xh(t,e)}catch{return t}}function Jh(t,e){if(t=Ht(t),e=Qh(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Xi(t)}function Ew(t,e,n){try{return Jh(t,e)}catch{return t}}function $v(t,e=.15){return sc(t)>.5?Xh(t,e):Jh(t,e)}function Iw(t,e,n){try{return $v(t,e)}catch{return t}}function Tw(t,e,n,r=1){const i=(u,h)=>Math.round((u**(1/r)*(1-n)+h**(1/r)*n)**r),s=Ht(t),a=Ht(e),c=[i(s.values[0],a.values[0]),i(s.values[1],a.values[1]),i(s.values[2],a.values[2])];return Xi({type:"rgb",values:c})}var Ta={},yu={exports:{}},Dp;function Fv(){return Dp||(Dp=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var s in i)({}).hasOwnProperty.call(i,s)&&(n[s]=i[s])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(yu)),yu.exports}var _u={exports:{}},Mp;function Sw(){return Mp||(Mp=1,function(t){function e(n,r){if(n==null)return{};var i={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(r.indexOf(s)>=0)continue;i[s]=n[s]}return i}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(_u)),_u.exports}function Uv(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Aw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cw=Uv(function(t){return Aw.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function Pw(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Rw(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var kw=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Rw(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Pw(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),dt="-ms-",ac="-moz-",ae="-webkit-",zv="comm",Zh="rule",ed="decl",Nw="@import",Bv="@keyframes",jw="@layer",Ow=Math.abs,Vc=String.fromCharCode,Dw=Object.assign;function Mw(t,e){return st(t,0)^45?(((e<<2^st(t,0))<<2^st(t,1))<<2^st(t,2))<<2^st(t,3):0}function Hv(t){return t.trim()}function Vw(t,e){return(t=e.exec(t))?t[0]:t}function oe(t,e,n){return t.replace(e,n)}function Gu(t,e){return t.indexOf(e)}function st(t,e){return t.charCodeAt(e)|0}function ra(t,e,n){return t.slice(e,n)}function dn(t){return t.length}function td(t){return t.length}function ho(t,e){return e.push(t),t}function Lw(t,e){return t.map(e).join("")}var Lc=1,Di=1,qv=0,St=0,Ue=0,Ji="";function $c(t,e,n,r,i,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Lc,column:Di,length:a,return:""}}function ks(t,e){return Dw($c("",null,null,"",null,null,0),t,{length:-t.length},e)}function $w(){return Ue}function Fw(){return Ue=St>0?st(Ji,--St):0,Di--,Ue===10&&(Di=1,Lc--),Ue}function Dt(){return Ue=St<qv?st(Ji,St++):0,Di++,Ue===10&&(Di=1,Lc++),Ue}function yn(){return st(Ji,St)}function jo(){return St}function Sa(t,e){return ra(Ji,t,e)}function ia(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wv(t){return Lc=Di=1,qv=dn(Ji=t),St=0,[]}function Kv(t){return Ji="",t}function Oo(t){return Hv(Sa(St-1,Yu(t===91?t+2:t===40?t+1:t)))}function Uw(t){for(;(Ue=yn())&&Ue<33;)Dt();return ia(t)>2||ia(Ue)>3?"":" "}function zw(t,e){for(;--e&&Dt()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Sa(t,jo()+(e<6&&yn()==32&&Dt()==32))}function Yu(t){for(;Dt();)switch(Ue){case t:return St;case 34:case 39:t!==34&&t!==39&&Yu(Ue);break;case 40:t===41&&Yu(t);break;case 92:Dt();break}return St}function Bw(t,e){for(;Dt()&&t+Ue!==57;)if(t+Ue===84&&yn()===47)break;return"/*"+Sa(e,St-1)+"*"+Vc(t===47?t:Dt())}function Hw(t){for(;!ia(yn());)Dt();return Sa(t,St)}function qw(t){return Kv(Do("",null,null,null,[""],t=Wv(t),0,[0],t))}function Do(t,e,n,r,i,s,a,c,u){for(var h=0,f=0,m=a,g=0,w=0,E=0,I=1,S=1,N=1,k=0,O="",D=i,V=s,L=r,y=O;S;)switch(E=k,k=Dt()){case 40:if(E!=108&&st(y,m-1)==58){Gu(y+=oe(Oo(k),"&","&\f"),"&\f")!=-1&&(N=-1);break}case 34:case 39:case 91:y+=Oo(k);break;case 9:case 10:case 13:case 32:y+=Uw(E);break;case 92:y+=zw(jo()-1,7);continue;case 47:switch(yn()){case 42:case 47:ho(Ww(Bw(Dt(),jo()),e,n),u);break;default:y+="/"}break;case 123*I:c[h++]=dn(y)*N;case 125*I:case 59:case 0:switch(k){case 0:case 125:S=0;case 59+f:N==-1&&(y=oe(y,/\f/g,"")),w>0&&dn(y)-m&&ho(w>32?Lp(y+";",r,n,m-1):Lp(oe(y," ","")+";",r,n,m-2),u);break;case 59:y+=";";default:if(ho(L=Vp(y,e,n,h,f,i,c,O,D=[],V=[],m),s),k===123)if(f===0)Do(y,e,L,L,D,s,m,c,V);else switch(g===99&&st(y,3)===110?100:g){case 100:case 108:case 109:case 115:Do(t,L,L,r&&ho(Vp(t,L,L,0,0,i,c,O,i,D=[],m),V),i,V,m,c,r?D:V);break;default:Do(y,L,L,L,[""],V,0,c,V)}}h=f=w=0,I=N=1,O=y="",m=a;break;case 58:m=1+dn(y),w=E;default:if(I<1){if(k==123)--I;else if(k==125&&I++==0&&Fw()==125)continue}switch(y+=Vc(k),k*I){case 38:N=f>0?1:(y+="\f",-1);break;case 44:c[h++]=(dn(y)-1)*N,N=1;break;case 64:yn()===45&&(y+=Oo(Dt())),g=yn(),f=m=dn(O=y+=Hw(jo())),k++;break;case 45:E===45&&dn(y)==2&&(I=0)}}return s}function Vp(t,e,n,r,i,s,a,c,u,h,f){for(var m=i-1,g=i===0?s:[""],w=td(g),E=0,I=0,S=0;E<r;++E)for(var N=0,k=ra(t,m+1,m=Ow(I=a[E])),O=t;N<w;++N)(O=Hv(I>0?g[N]+" "+k:oe(k,/&\f/g,g[N])))&&(u[S++]=O);return $c(t,e,n,i===0?Zh:c,u,h,f)}function Ww(t,e,n){return $c(t,e,n,zv,Vc($w()),ra(t,2,-2),0)}function Lp(t,e,n,r){return $c(t,e,n,ed,ra(t,0,r),ra(t,r+1,-1),r)}function Ai(t,e){for(var n="",r=td(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Kw(t,e,n,r){switch(t.type){case jw:if(t.children.length)break;case Nw:case ed:return t.return=t.return||t.value;case zv:return"";case Bv:return t.return=t.value+"{"+Ai(t.children,r)+"}";case Zh:t.value=t.props.join(",")}return dn(n=Ai(t.children,r))?t.return=t.value+"{"+n+"}":""}function Gw(t){var e=td(t);return function(n,r,i,s){for(var a="",c=0;c<e;c++)a+=t[c](n,r,i,s)||"";return a}}function Yw(t){return function(e){e.root||(e=e.return)&&t(e)}}var Qw=function(e,n,r){for(var i=0,s=0;i=s,s=yn(),i===38&&s===12&&(n[r]=1),!ia(s);)Dt();return Sa(e,St)},Xw=function(e,n){var r=-1,i=44;do switch(ia(i)){case 0:i===38&&yn()===12&&(n[r]=1),e[r]+=Qw(St-1,n,r);break;case 2:e[r]+=Oo(i);break;case 4:if(i===44){e[++r]=yn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Vc(i)}while(i=Dt());return e},Jw=function(e,n){return Kv(Xw(Wv(e),n))},$p=new WeakMap,Zw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!$p.get(r))&&!i){$p.set(e,!0);for(var s=[],a=Jw(n,s),c=r.props,u=0,h=0;u<a.length;u++)for(var f=0;f<c.length;f++,h++)e.props[h]=s[u]?a[u].replace(/&\f/g,c[f]):c[f]+" "+a[u]}}},ex=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Gv(t,e){switch(Mw(t,e)){case 5103:return ae+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+t+ac+t+dt+t+t;case 6828:case 4268:return ae+t+dt+t+t;case 6165:return ae+t+dt+"flex-"+t+t;case 5187:return ae+t+oe(t,/(\w+).+(:[^]+)/,ae+"box-$1$2"+dt+"flex-$1$2")+t;case 5443:return ae+t+dt+"flex-item-"+oe(t,/flex-|-self/,"")+t;case 4675:return ae+t+dt+"flex-line-pack"+oe(t,/align-content|flex-|-self/,"")+t;case 5548:return ae+t+dt+oe(t,"shrink","negative")+t;case 5292:return ae+t+dt+oe(t,"basis","preferred-size")+t;case 6060:return ae+"box-"+oe(t,"-grow","")+ae+t+dt+oe(t,"grow","positive")+t;case 4554:return ae+oe(t,/([^-])(transform)/g,"$1"+ae+"$2")+t;case 6187:return oe(oe(oe(t,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),t,"")+t;case 5495:case 3959:return oe(t,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return oe(oe(t,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+dt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+t+t;case 4095:case 3583:case 4068:case 2532:return oe(t,/(.+)-inline(.+)/,ae+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(t)-1-e>6)switch(st(t,e+1)){case 109:if(st(t,e+4)!==45)break;case 102:return oe(t,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+ac+(st(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Gu(t,"stretch")?Gv(oe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(st(t,e+1)!==115)break;case 6444:switch(st(t,dn(t)-3-(~Gu(t,"!important")&&10))){case 107:return oe(t,":",":"+ae)+t;case 101:return oe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(st(t,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+dt+"$2box$3")+t}break;case 5936:switch(st(t,e+11)){case 114:return ae+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ae+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ae+t+dt+oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ae+t+dt+t+t}return t}var tx=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case ed:e.return=Gv(e.value,e.length);break;case Bv:return Ai([ks(e,{value:oe(e.value,"@","@"+ae)})],i);case Zh:if(e.length)return Lw(e.props,function(s){switch(Vw(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ai([ks(e,{props:[oe(s,/:(read-\w+)/,":"+ac+"$1")]})],i);case"::placeholder":return Ai([ks(e,{props:[oe(s,/:(plac\w+)/,":"+ae+"input-$1")]}),ks(e,{props:[oe(s,/:(plac\w+)/,":"+ac+"$1")]}),ks(e,{props:[oe(s,/:(plac\w+)/,dt+"input-$1")]})],i)}return""})}},nx=[tx],Yv=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(I){var S=I.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=e.stylisPlugins||nx,s={},a,c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(I){for(var S=I.getAttribute("data-emotion").split(" "),N=1;N<S.length;N++)s[S[N]]=!0;c.push(I)});var u,h=[Zw,ex];{var f,m=[Kw,Yw(function(I){f.insert(I)})],g=Gw(h.concat(i,m)),w=function(S){return Ai(qw(S),g)};u=function(S,N,k,O){f=k,w(S?S+"{"+N.styles+"}":N.styles),O&&(E.inserted[N.name]=!0)}}var E={key:n,sheet:new kw({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return E.sheet.hydrate(c),E},Qv={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tt=typeof Symbol=="function"&&Symbol.for,nd=tt?Symbol.for("react.element"):60103,rd=tt?Symbol.for("react.portal"):60106,Fc=tt?Symbol.for("react.fragment"):60107,Uc=tt?Symbol.for("react.strict_mode"):60108,zc=tt?Symbol.for("react.profiler"):60114,Bc=tt?Symbol.for("react.provider"):60109,Hc=tt?Symbol.for("react.context"):60110,id=tt?Symbol.for("react.async_mode"):60111,qc=tt?Symbol.for("react.concurrent_mode"):60111,Wc=tt?Symbol.for("react.forward_ref"):60112,Kc=tt?Symbol.for("react.suspense"):60113,rx=tt?Symbol.for("react.suspense_list"):60120,Gc=tt?Symbol.for("react.memo"):60115,Yc=tt?Symbol.for("react.lazy"):60116,ix=tt?Symbol.for("react.block"):60121,sx=tt?Symbol.for("react.fundamental"):60117,ax=tt?Symbol.for("react.responder"):60118,ox=tt?Symbol.for("react.scope"):60119;function Vt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case nd:switch(t=t.type,t){case id:case qc:case Fc:case zc:case Uc:case Kc:return t;default:switch(t=t&&t.$$typeof,t){case Hc:case Wc:case Yc:case Gc:case Bc:return t;default:return e}}case rd:return e}}}function Xv(t){return Vt(t)===qc}de.AsyncMode=id;de.ConcurrentMode=qc;de.ContextConsumer=Hc;de.ContextProvider=Bc;de.Element=nd;de.ForwardRef=Wc;de.Fragment=Fc;de.Lazy=Yc;de.Memo=Gc;de.Portal=rd;de.Profiler=zc;de.StrictMode=Uc;de.Suspense=Kc;de.isAsyncMode=function(t){return Xv(t)||Vt(t)===id};de.isConcurrentMode=Xv;de.isContextConsumer=function(t){return Vt(t)===Hc};de.isContextProvider=function(t){return Vt(t)===Bc};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nd};de.isForwardRef=function(t){return Vt(t)===Wc};de.isFragment=function(t){return Vt(t)===Fc};de.isLazy=function(t){return Vt(t)===Yc};de.isMemo=function(t){return Vt(t)===Gc};de.isPortal=function(t){return Vt(t)===rd};de.isProfiler=function(t){return Vt(t)===zc};de.isStrictMode=function(t){return Vt(t)===Uc};de.isSuspense=function(t){return Vt(t)===Kc};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Fc||t===qc||t===zc||t===Uc||t===Kc||t===rx||typeof t=="object"&&t!==null&&(t.$$typeof===Yc||t.$$typeof===Gc||t.$$typeof===Bc||t.$$typeof===Hc||t.$$typeof===Wc||t.$$typeof===sx||t.$$typeof===ax||t.$$typeof===ox||t.$$typeof===ix)};de.typeOf=Vt;Qv.exports=de;var cx=Qv.exports,Jv=cx,lx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ux={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zv={};Zv[Jv.ForwardRef]=lx;Zv[Jv.Memo]=ux;var hx=!0;function dx(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var ey=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||hx===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},ty=function(e,n,r){ey(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function fx(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ny={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},px=/[A-Z]|^ms/g,mx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ry=function(e){return e.charCodeAt(1)===45},Fp=function(e){return e!=null&&typeof e!="boolean"},bu=Uv(function(t){return ry(t)?t:t.replace(px,"-$&").toLowerCase()}),Up=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(mx,function(r,i,s){return fn={name:i,styles:s,next:fn},i})}return ny[e]!==1&&!ry(e)&&typeof n=="number"&&n!==0?n+"px":n};function sa(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return fn={name:n.name,styles:n.styles,next:fn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)fn={name:r.name,styles:r.styles,next:fn},r=r.next;var i=n.styles+";";return i}return gx(t,e,n)}case"function":{if(t!==void 0){var s=fn,a=n(t);return fn=s,sa(t,e,a)}break}}if(e==null)return n;var c=e[n];return c!==void 0?c:n}function gx(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=sa(t,e,n[i])+";";else for(var s in n){var a=n[s];if(typeof a!="object")e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":Fp(a)&&(r+=bu(s)+":"+Up(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var c=0;c<a.length;c++)Fp(a[c])&&(r+=bu(s)+":"+Up(s,a[c])+";");else{var u=sa(t,e,a);switch(s){case"animation":case"animationName":{r+=bu(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var zp=/label:\s*([^\s;\n{]+)\s*(;|$)/g,fn,sd=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";fn=void 0;var a=e[0];a==null||a.raw===void 0?(i=!1,s+=sa(r,n,a)):s+=a[0];for(var c=1;c<e.length;c++)s+=sa(r,n,e[c]),i&&(s+=a[c]);zp.lastIndex=0;for(var u="",h;(h=zp.exec(s))!==null;)u+="-"+h[1];var f=fx(s)+u;return{name:f,styles:s,next:fn}},vx=function(e){return e()},iy=ec.useInsertionEffect?ec.useInsertionEffect:!1,yx=iy||vx,Bp=iy||C.useLayoutEffect,sy=C.createContext(typeof HTMLElement<"u"?Yv({key:"css"}):null),_x=sy.Provider,ay=function(e){return C.forwardRef(function(n,r){var i=C.useContext(sy);return e(n,i,r)})},Qc=C.createContext({});Fv();var bx=ay(function(t,e){var n=t.styles,r=sd([n],void 0,C.useContext(Qc)),i=C.useRef();return Bp(function(){var s=e.key+"-global",a=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),c=!1,u=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(a.before=e.sheet.tags[0]),u!==null&&(c=!0,u.setAttribute("data-emotion",s),a.hydrate([u])),i.current=[a,c],function(){a.flush()}},[e]),Bp(function(){var s=i.current,a=s[0],c=s[1];if(c){s[1]=!1;return}if(r.next!==void 0&&ty(e,r.next,!0),a.tags.length){var u=a.tags[a.tags.length-1].nextElementSibling;a.before=u,a.flush()}e.insert("",r,a,!1)},[e,r.name]),null});function oy(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return sd(e)}var Xc=function(){var e=oy.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},wx=Cw,xx=function(e){return e!=="theme"},Hp=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?wx:xx},qp=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(a){return e.__emotion_forwardProp(a)&&s(a)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Ex=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return ey(n,r,i),yx(function(){return ty(n,r,i)}),null},Ix=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,a;n!==void 0&&(s=n.label,a=n.target);var c=qp(e,n,r),u=c||Hp(i),h=!u("as");return function(){var f=arguments,m=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&m.push("label:"+s+";"),f[0]==null||f[0].raw===void 0)m.push.apply(m,f);else{m.push(f[0][0]);for(var g=f.length,w=1;w<g;w++)m.push(f[w],f[0][w])}var E=ay(function(I,S,N){var k=h&&I.as||i,O="",D=[],V=I;if(I.theme==null){V={};for(var L in I)V[L]=I[L];V.theme=C.useContext(Qc)}typeof I.className=="string"?O=dx(S.registered,D,I.className):I.className!=null&&(O=I.className+" ");var y=sd(m.concat(D),S.registered,V);O+=S.key+"-"+y.name,a!==void 0&&(O+=" "+a);var _=h&&c===void 0?Hp(k):u,b={};for(var T in I)h&&T==="as"||_(T)&&(b[T]=I[T]);return b.className=O,b.ref=N,C.createElement(C.Fragment,null,C.createElement(Ex,{cache:S,serialized:y,isStringTag:typeof k=="string"}),C.createElement(k,b))});return E.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",E.defaultProps=e.defaultProps,E.__emotion_real=E,E.__emotion_base=i,E.__emotion_styles=m,E.__emotion_forwardProp=c,Object.defineProperty(E,"toString",{value:function(){return"."+a}}),E.withComponent=function(I,S){return t(I,G({},n,S,{shouldForwardProp:qp(E,S,!0)})).apply(void 0,m)},E}},Tx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Qu=Ix.bind();Tx.forEach(function(t){Qu[t]=Qu(t)});let Xu;typeof document=="object"&&(Xu=Yv({key:"css",prepend:!0}));function Sx(t){const{injectFirst:e,children:n}=t;return e&&Xu?l.jsx(_x,{value:Xu,children:n}):n}function Ax(t){return t==null||Object.keys(t).length===0}function Cx(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(Ax(i)?n:i):e;return l.jsx(bx,{styles:r})}function Px(t,e){return Qu(t,e)}const Rx=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},kx=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:Cx,StyledEngineProvider:Sx,ThemeContext:Qc,css:oy,default:Px,internal_processStyles:Rx,keyframes:Xc},Symbol.toStringTag,{value:"Module"})),Nx=zn(kx);function rr(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function cy(t){if(!rr(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=cy(t[n])}),e}function _n(t,e,n={clone:!0}){const r=n.clone?G({},t):t;return rr(t)&&rr(e)&&Object.keys(e).forEach(i=>{rr(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&rr(t[i])?r[i]=_n(t[i],e[i],n):n.clone?r[i]=rr(e[i])?cy(e[i]):e[i]:r[i]=e[i]}),r}const jx=Object.freeze(Object.defineProperty({__proto__:null,default:_n,isPlainObject:rr},Symbol.toStringTag,{value:"Module"})),Ox=zn(jx);function Ge(t){if(typeof t!="string")throw new Error(na(7));return t.charAt(0).toUpperCase()+t.slice(1)}const Dx=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),Mx=zn(Dx);var ly={exports:{}},fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=Symbol.for("react.element"),od=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),tl=Symbol.for("react.provider"),nl=Symbol.for("react.context"),Vx=Symbol.for("react.server_context"),rl=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),ol=Symbol.for("react.lazy"),Lx=Symbol.for("react.offscreen"),uy;uy=Symbol.for("react.module.reference");function Kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ad:switch(t=t.type,t){case Jc:case el:case Zc:case il:case sl:return t;default:switch(t=t&&t.$$typeof,t){case Vx:case nl:case rl:case ol:case al:case tl:return t;default:return e}}case od:return e}}}fe.ContextConsumer=nl;fe.ContextProvider=tl;fe.Element=ad;fe.ForwardRef=rl;fe.Fragment=Jc;fe.Lazy=ol;fe.Memo=al;fe.Portal=od;fe.Profiler=el;fe.StrictMode=Zc;fe.Suspense=il;fe.SuspenseList=sl;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(t){return Kt(t)===nl};fe.isContextProvider=function(t){return Kt(t)===tl};fe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ad};fe.isForwardRef=function(t){return Kt(t)===rl};fe.isFragment=function(t){return Kt(t)===Jc};fe.isLazy=function(t){return Kt(t)===ol};fe.isMemo=function(t){return Kt(t)===al};fe.isPortal=function(t){return Kt(t)===od};fe.isProfiler=function(t){return Kt(t)===el};fe.isStrictMode=function(t){return Kt(t)===Zc};fe.isSuspense=function(t){return Kt(t)===il};fe.isSuspenseList=function(t){return Kt(t)===sl};fe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Jc||t===el||t===Zc||t===il||t===sl||t===Lx||typeof t=="object"&&t!==null&&(t.$$typeof===ol||t.$$typeof===al||t.$$typeof===tl||t.$$typeof===nl||t.$$typeof===rl||t.$$typeof===uy||t.getModuleId!==void 0)};fe.typeOf=Kt;ly.exports=fe;var Wp=ly.exports;const $x=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function hy(t){const e=`${t}`.match($x);return e&&e[1]||""}function dy(t,e=""){return t.displayName||t.name||hy(t)||e}function Kp(t,e,n){const r=dy(e);return t.displayName||(r!==""?`${n}(${r})`:n)}function Fx(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return dy(t,"Component");if(typeof t=="object")switch(t.$$typeof){case Wp.ForwardRef:return Kp(t,t.render,"ForwardRef");case Wp.Memo:return Kp(t,t.type,"memo");default:return}}}const Ux=Object.freeze(Object.defineProperty({__proto__:null,default:Fx,getFunctionName:hy},Symbol.toStringTag,{value:"Module"})),zx=zn(Ux),Bx=["values","unit","step"],Hx=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>G({},n,{[r.key]:r.val}),{})};function fy(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Wt(t,Bx),s=Hx(e),a=Object.keys(s);function c(g){return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${n})`}function u(g){return`@media (max-width:${(typeof e[g]=="number"?e[g]:g)-r/100}${n})`}function h(g,w){const E=a.indexOf(w);return`@media (min-width:${typeof e[g]=="number"?e[g]:g}${n}) and (max-width:${(E!==-1&&typeof e[a[E]]=="number"?e[a[E]]:w)-r/100}${n})`}function f(g){return a.indexOf(g)+1<a.length?h(g,a[a.indexOf(g)+1]):c(g)}function m(g){const w=a.indexOf(g);return w===0?c(a[1]):w===a.length-1?u(a[w]):h(g,a[a.indexOf(g)+1]).replace("@media","@media not all and")}return G({keys:a,values:s,up:c,down:u,between:h,only:f,not:m,unit:n},i)}const qx={borderRadius:4};function qs(t,e){return e?_n(t,e,{clone:!1}):t}const cd={xs:0,sm:600,md:900,lg:1200,xl:1536},Gp={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${cd[t]}px)`};function Dn(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||Gp;return e.reduce((a,c,u)=>(a[s.up(s.keys[u])]=n(e[u]),a),{})}if(typeof e=="object"){const s=r.breakpoints||Gp;return Object.keys(e).reduce((a,c)=>{if(Object.keys(s.values||cd).indexOf(c)!==-1){const u=s.up(c);a[u]=n(e[c],c)}else{const u=c;a[u]=e[u]}return a},{})}return n(e)}function Wx(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function Kx(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function cl(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function oc(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=cl(t,n)||r,e&&(i=e(i,r,t)),i}function Ve(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=a=>{if(a[e]==null)return null;const c=a[e],u=a.theme,h=cl(u,r)||{};return Dn(a,c,m=>{let g=oc(h,i,m);return m===g&&typeof m=="string"&&(g=oc(h,i,`${e}${m==="default"?"":Ge(m)}`,m)),n===!1?g:{[n]:g}})};return s.propTypes={},s.filterProps=[e],s}function Gx(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const Yx={m:"margin",p:"padding"},Qx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Yp={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Xx=Gx(t=>{if(t.length>2)if(Yp[t])t=Yp[t];else return[t];const[e,n]=t.split(""),r=Yx[e],i=Qx[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),ld=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ud=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...ld,...ud];function Aa(t,e,n,r){var i;const s=(i=cl(t,e,!1))!=null?i:n;return typeof s=="number"?a=>typeof a=="string"?a:s*a:Array.isArray(s)?a=>typeof a=="string"?a:s[a]:typeof s=="function"?s:()=>{}}function py(t){return Aa(t,"spacing",8)}function Ca(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function Jx(t,e){return n=>t.reduce((r,i)=>(r[i]=Ca(e,n),r),{})}function Zx(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=Xx(n),s=Jx(i,r),a=t[n];return Dn(t,a,s)}function my(t,e){const n=py(t.theme);return Object.keys(t).map(r=>Zx(t,e,r,n)).reduce(qs,{})}function Pe(t){return my(t,ld)}Pe.propTypes={};Pe.filterProps=ld;function Re(t){return my(t,ud)}Re.propTypes={};Re.filterProps=ud;function eE(t=8){if(t.mui)return t;const e=py({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const a=e(s);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function ll(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?qs(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Ut(t){return typeof t!="number"?t:`${t}px solid`}function Gt(t,e){return Ve({prop:t,themeKey:"borders",transform:e})}const tE=Gt("border",Ut),nE=Gt("borderTop",Ut),rE=Gt("borderRight",Ut),iE=Gt("borderBottom",Ut),sE=Gt("borderLeft",Ut),aE=Gt("borderColor"),oE=Gt("borderTopColor"),cE=Gt("borderRightColor"),lE=Gt("borderBottomColor"),uE=Gt("borderLeftColor"),hE=Gt("outline",Ut),dE=Gt("outlineColor"),ul=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Aa(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ca(e,r)});return Dn(t,t.borderRadius,n)}return null};ul.propTypes={};ul.filterProps=["borderRadius"];ll(tE,nE,rE,iE,sE,aE,oE,cE,lE,uE,ul,hE,dE);const hl=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Aa(t.theme,"spacing",8),n=r=>({gap:Ca(e,r)});return Dn(t,t.gap,n)}return null};hl.propTypes={};hl.filterProps=["gap"];const dl=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Aa(t.theme,"spacing",8),n=r=>({columnGap:Ca(e,r)});return Dn(t,t.columnGap,n)}return null};dl.propTypes={};dl.filterProps=["columnGap"];const fl=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Aa(t.theme,"spacing",8),n=r=>({rowGap:Ca(e,r)});return Dn(t,t.rowGap,n)}return null};fl.propTypes={};fl.filterProps=["rowGap"];const fE=Ve({prop:"gridColumn"}),pE=Ve({prop:"gridRow"}),mE=Ve({prop:"gridAutoFlow"}),gE=Ve({prop:"gridAutoColumns"}),vE=Ve({prop:"gridAutoRows"}),yE=Ve({prop:"gridTemplateColumns"}),_E=Ve({prop:"gridTemplateRows"}),bE=Ve({prop:"gridTemplateAreas"}),wE=Ve({prop:"gridArea"});ll(hl,dl,fl,fE,pE,mE,gE,vE,yE,_E,bE,wE);function Ci(t,e){return e==="grey"?e:t}const xE=Ve({prop:"color",themeKey:"palette",transform:Ci}),EE=Ve({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Ci}),IE=Ve({prop:"backgroundColor",themeKey:"palette",transform:Ci});ll(xE,EE,IE);function jt(t){return t<=1&&t!==0?`${t*100}%`:t}const TE=Ve({prop:"width",transform:jt}),hd=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i;const s=((r=t.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||cd[n];return s?((i=t.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:jt(n)}};return Dn(t,t.maxWidth,e)}return null};hd.filterProps=["maxWidth"];const SE=Ve({prop:"minWidth",transform:jt}),AE=Ve({prop:"height",transform:jt}),CE=Ve({prop:"maxHeight",transform:jt}),PE=Ve({prop:"minHeight",transform:jt});Ve({prop:"size",cssProperty:"width",transform:jt});Ve({prop:"size",cssProperty:"height",transform:jt});const RE=Ve({prop:"boxSizing"});ll(TE,hd,SE,AE,CE,PE,RE);const Pa={border:{themeKey:"borders",transform:Ut},borderTop:{themeKey:"borders",transform:Ut},borderRight:{themeKey:"borders",transform:Ut},borderBottom:{themeKey:"borders",transform:Ut},borderLeft:{themeKey:"borders",transform:Ut},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Ut},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ul},color:{themeKey:"palette",transform:Ci},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Ci},backgroundColor:{themeKey:"palette",transform:Ci},p:{style:Re},pt:{style:Re},pr:{style:Re},pb:{style:Re},pl:{style:Re},px:{style:Re},py:{style:Re},padding:{style:Re},paddingTop:{style:Re},paddingRight:{style:Re},paddingBottom:{style:Re},paddingLeft:{style:Re},paddingX:{style:Re},paddingY:{style:Re},paddingInline:{style:Re},paddingInlineStart:{style:Re},paddingInlineEnd:{style:Re},paddingBlock:{style:Re},paddingBlockStart:{style:Re},paddingBlockEnd:{style:Re},m:{style:Pe},mt:{style:Pe},mr:{style:Pe},mb:{style:Pe},ml:{style:Pe},mx:{style:Pe},my:{style:Pe},margin:{style:Pe},marginTop:{style:Pe},marginRight:{style:Pe},marginBottom:{style:Pe},marginLeft:{style:Pe},marginX:{style:Pe},marginY:{style:Pe},marginInline:{style:Pe},marginInlineStart:{style:Pe},marginInlineEnd:{style:Pe},marginBlock:{style:Pe},marginBlockStart:{style:Pe},marginBlockEnd:{style:Pe},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:hl},rowGap:{style:fl},columnGap:{style:dl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:jt},maxWidth:{style:hd},minWidth:{transform:jt},height:{transform:jt},maxHeight:{transform:jt},minHeight:{transform:jt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function kE(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function NE(t,e){return typeof t=="function"?t(e):t}function gy(){function t(n,r,i,s){const a={[n]:r,theme:i},c=s[n];if(!c)return{[n]:r};const{cssProperty:u=n,themeKey:h,transform:f,style:m}=c;if(r==null)return null;if(h==="typography"&&r==="inherit")return{[n]:r};const g=cl(i,h)||{};return m?m(a):Dn(a,r,E=>{let I=oc(g,f,E);return E===I&&typeof E=="string"&&(I=oc(g,f,`${n}${E==="default"?"":Ge(E)}`,E)),u===!1?I:{[u]:I}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const a=(r=s.unstable_sxConfig)!=null?r:Pa;function c(u){let h=u;if(typeof u=="function")h=u(s);else if(typeof u!="object")return u;if(!h)return null;const f=Wx(s.breakpoints),m=Object.keys(f);let g=f;return Object.keys(h).forEach(w=>{const E=NE(h[w],s);if(E!=null)if(typeof E=="object")if(a[w])g=qs(g,t(w,E,s,a));else{const I=Dn({theme:s},E,S=>({[w]:S}));kE(I,E)?g[w]=e({sx:E,theme:s}):g=qs(g,I)}else g=qs(g,t(w,E,s,a))}),Kx(m,g)}return Array.isArray(i)?i.map(c):c(i)}return e}const pl=gy();pl.filterProps=["sx"];function vy(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const jE=["breakpoints","palette","spacing","shape"];function dd(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,a=Wt(t,jE),c=fy(n),u=eE(i);let h=_n({breakpoints:c,direction:"ltr",components:{},palette:G({mode:"light"},r),spacing:u,shape:G({},qx,s)},a);return h.applyStyles=vy,h=e.reduce((f,m)=>_n(f,m),h),h.unstable_sxConfig=G({},Pa,a==null?void 0:a.unstable_sxConfig),h.unstable_sx=function(m){return pl({sx:m,theme:this})},h}const OE=Object.freeze(Object.defineProperty({__proto__:null,default:dd,private_createBreakpoints:fy,unstable_applyStyles:vy},Symbol.toStringTag,{value:"Module"})),DE=zn(OE),ME=["sx"],VE=t=>{var e,n;const r={systemProps:{},otherProps:{}},i=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:Pa;return Object.keys(t).forEach(s=>{i[s]?r.systemProps[s]=t[s]:r.otherProps[s]=t[s]}),r};function LE(t){const{sx:e}=t,n=Wt(t,ME),{systemProps:r,otherProps:i}=VE(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...a)=>{const c=e(...a);return rr(c)?G({},r,c):r}:s=G({},r,e),G({},i,{sx:s})}const $E=Object.freeze(Object.defineProperty({__proto__:null,default:pl,extendSxProp:LE,unstable_createStyleFunctionSx:gy,unstable_defaultSxConfig:Pa},Symbol.toStringTag,{value:"Module"})),FE=zn($E);var Zi=cn;Object.defineProperty(Ta,"__esModule",{value:!0});var UE=Ta.default=eI;Ta.shouldForwardProp=Mo;Ta.systemDefaultTheme=void 0;var $t=Zi(Fv()),Ju=Zi(Sw()),Qp=GE(Nx),zE=Ox;Zi(Mx);Zi(zx);var BE=Zi(DE),HE=Zi(FE);const qE=["ownerState"],WE=["variants"],KE=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function yy(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(yy=function(r){return r?n:e})(t)}function GE(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=yy(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var a=i?Object.getOwnPropertyDescriptor(t,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=t[s]}return r.default=t,n&&n.set(t,r),r}function YE(t){return Object.keys(t).length===0}function QE(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Mo(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const XE=Ta.systemDefaultTheme=(0,BE.default)(),JE=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function fo({defaultTheme:t,theme:e,themeId:n}){return YE(e)?t:e[n]||e}function ZE(t){return t?(e,n)=>n[t]:null}function Vo(t,e){let{ownerState:n}=e,r=(0,Ju.default)(e,qE);const i=typeof t=="function"?t((0,$t.default)({ownerState:n},r)):t;if(Array.isArray(i))return i.flatMap(s=>Vo(s,(0,$t.default)({ownerState:n},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:s=[]}=i;let c=(0,Ju.default)(i,WE);return s.forEach(u=>{let h=!0;typeof u.props=="function"?h=u.props((0,$t.default)({ownerState:n},r,n)):Object.keys(u.props).forEach(f=>{(n==null?void 0:n[f])!==u.props[f]&&r[f]!==u.props[f]&&(h=!1)}),h&&(Array.isArray(c)||(c=[c]),c.push(typeof u.style=="function"?u.style((0,$t.default)({ownerState:n},r,n)):u.style))}),c}return i}function eI(t={}){const{themeId:e,defaultTheme:n=XE,rootShouldForwardProp:r=Mo,slotShouldForwardProp:i=Mo}=t,s=a=>(0,HE.default)((0,$t.default)({},a,{theme:fo((0,$t.default)({},a,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(a,c={})=>{(0,Qp.internal_processStyles)(a,V=>V.filter(L=>!(L!=null&&L.__mui_systemSx)));const{name:u,slot:h,skipVariantsResolver:f,skipSx:m,overridesResolver:g=ZE(JE(h))}=c,w=(0,Ju.default)(c,KE),E=f!==void 0?f:h&&h!=="Root"&&h!=="root"||!1,I=m||!1;let S,N=Mo;h==="Root"||h==="root"?N=r:h?N=i:QE(a)&&(N=void 0);const k=(0,Qp.default)(a,(0,$t.default)({shouldForwardProp:N,label:S},w)),O=V=>typeof V=="function"&&V.__emotion_real!==V||(0,zE.isPlainObject)(V)?L=>Vo(V,(0,$t.default)({},L,{theme:fo({theme:L.theme,defaultTheme:n,themeId:e})})):V,D=(V,...L)=>{let y=O(V);const _=L?L.map(O):[];u&&g&&_.push(A=>{const P=fo((0,$t.default)({},A,{defaultTheme:n,themeId:e}));if(!P.components||!P.components[u]||!P.components[u].styleOverrides)return null;const x=P.components[u].styleOverrides,ye={};return Object.entries(x).forEach(([nt,gt])=>{ye[nt]=Vo(gt,(0,$t.default)({},A,{theme:P}))}),g(A,ye)}),u&&!E&&_.push(A=>{var P;const x=fo((0,$t.default)({},A,{defaultTheme:n,themeId:e})),ye=x==null||(P=x.components)==null||(P=P[u])==null?void 0:P.variants;return Vo({variants:ye},(0,$t.default)({},A,{theme:x}))}),I||_.push(s);const b=_.length-L.length;if(Array.isArray(V)&&b>0){const A=new Array(b).fill("");y=[...V,...A],y.raw=[...V.raw,...A]}const T=k(y,..._);return a.muiName&&(T.muiName=a.muiName),T};return k.withConfig&&(D.withConfig=k.withConfig),D}}const Xp=t=>t,tI=()=>{let t=Xp;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Xp}}},_y=tI(),nI={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ml(t,e,n="Mui"){const r=nI[e];return r?`${n}-${r}`:`${_y.generate(t)}-${e}`}function rI(t,e){return G({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const aa={black:"#000",white:"#fff"},iI={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ci={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},li={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ns={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},ui={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},hi={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},di={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},sI=["mode","contrastThreshold","tonalOffset"],Jp={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:aa.white,default:aa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},wu={text:{primary:aa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:aa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Zp(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=mw(t.main,i):e==="dark"&&(t.dark=fw(t.main,s)))}function aI(t="light"){return t==="dark"?{main:ui[200],light:ui[50],dark:ui[400]}:{main:ui[700],light:ui[400],dark:ui[800]}}function oI(t="light"){return t==="dark"?{main:ci[200],light:ci[50],dark:ci[400]}:{main:ci[500],light:ci[300],dark:ci[700]}}function cI(t="light"){return t==="dark"?{main:li[500],light:li[300],dark:li[700]}:{main:li[700],light:li[400],dark:li[800]}}function lI(t="light"){return t==="dark"?{main:hi[400],light:hi[300],dark:hi[700]}:{main:hi[700],light:hi[500],dark:hi[900]}}function uI(t="light"){return t==="dark"?{main:di[400],light:di[300],dark:di[700]}:{main:di[800],light:di[500],dark:di[900]}}function hI(t="light"){return t==="dark"?{main:Ns[400],light:Ns[300],dark:Ns[700]}:{main:"#ed6c02",light:Ns[500],dark:Ns[900]}}function dI(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Wt(t,sI),s=t.primary||aI(e),a=t.secondary||oI(e),c=t.error||cI(e),u=t.info||lI(e),h=t.success||uI(e),f=t.warning||hI(e);function m(I){return pw(I,wu.text.primary)>=n?wu.text.primary:Jp.text.primary}const g=({color:I,name:S,mainShade:N=500,lightShade:k=300,darkShade:O=700})=>{if(I=G({},I),!I.main&&I[N]&&(I.main=I[N]),!I.hasOwnProperty("main"))throw new Error(na(11,S?` (${S})`:"",N));if(typeof I.main!="string")throw new Error(na(12,S?` (${S})`:"",JSON.stringify(I.main)));return Zp(I,"light",k,r),Zp(I,"dark",O,r),I.contrastText||(I.contrastText=m(I.main)),I},w={dark:wu,light:Jp};return _n(G({common:G({},aa),mode:e,primary:g({color:s,name:"primary"}),secondary:g({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:g({color:c,name:"error"}),warning:g({color:f,name:"warning"}),info:g({color:u,name:"info"}),success:g({color:h,name:"success"}),grey:iI,contrastThreshold:n,getContrastText:m,augmentColor:g,tonalOffset:r},w[e]),i)}const fI=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function pI(t){return Math.round(t*1e5)/1e5}const em={textTransform:"uppercase"},tm='"Roboto", "Helvetica", "Arial", sans-serif';function mI(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=tm,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:a=400,fontWeightMedium:c=500,fontWeightBold:u=700,htmlFontSize:h=16,allVariants:f,pxToRem:m}=n,g=Wt(n,fI),w=i/14,E=m||(N=>`${N/h*w}rem`),I=(N,k,O,D,V)=>G({fontFamily:r,fontWeight:N,fontSize:E(k),lineHeight:O},r===tm?{letterSpacing:`${pI(D/k)}em`}:{},V,f),S={h1:I(s,96,1.167,-1.5),h2:I(s,60,1.2,-.5),h3:I(a,48,1.167,0),h4:I(a,34,1.235,.25),h5:I(a,24,1.334,0),h6:I(c,20,1.6,.15),subtitle1:I(a,16,1.75,.15),subtitle2:I(c,14,1.57,.1),body1:I(a,16,1.5,.15),body2:I(a,14,1.43,.15),button:I(c,14,1.75,.4,em),caption:I(a,12,1.66,.4),overline:I(a,12,2.66,1,em),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _n(G({htmlFontSize:h,pxToRem:E,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:a,fontWeightMedium:c,fontWeightBold:u},S),g,{clone:!1})}const gI=.2,vI=.14,yI=.12;function Ie(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${gI})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${vI})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${yI})`].join(",")}const _I=["none",Ie(0,2,1,-1,0,1,1,0,0,1,3,0),Ie(0,3,1,-2,0,2,2,0,0,1,5,0),Ie(0,3,3,-2,0,3,4,0,0,1,8,0),Ie(0,2,4,-1,0,4,5,0,0,1,10,0),Ie(0,3,5,-1,0,5,8,0,0,1,14,0),Ie(0,3,5,-1,0,6,10,0,0,1,18,0),Ie(0,4,5,-2,0,7,10,1,0,2,16,1),Ie(0,5,5,-3,0,8,10,1,0,3,14,2),Ie(0,5,6,-3,0,9,12,1,0,3,16,2),Ie(0,6,6,-3,0,10,14,1,0,4,18,3),Ie(0,6,7,-4,0,11,15,1,0,4,20,3),Ie(0,7,8,-4,0,12,17,2,0,5,22,4),Ie(0,7,8,-4,0,13,19,2,0,5,24,4),Ie(0,7,9,-4,0,14,21,2,0,5,26,4),Ie(0,8,9,-5,0,15,22,2,0,6,28,5),Ie(0,8,10,-5,0,16,24,2,0,6,30,5),Ie(0,8,11,-5,0,17,26,2,0,6,32,5),Ie(0,9,11,-5,0,18,28,2,0,7,34,6),Ie(0,9,12,-6,0,19,29,2,0,7,36,6),Ie(0,10,13,-6,0,20,31,3,0,8,38,7),Ie(0,10,13,-6,0,21,33,3,0,8,40,7),Ie(0,10,14,-6,0,22,35,3,0,8,42,7),Ie(0,11,14,-7,0,23,36,3,0,9,44,8),Ie(0,11,15,-7,0,24,38,3,0,9,46,8)],bI=["duration","easing","delay"],wI={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},xI={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function nm(t){return`${Math.round(t)}ms`}function EI(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function II(t){const e=G({},wI,t.easing),n=G({},xI,t.duration);return G({getAutoHeightDuration:EI,create:(i=["all"],s={})=>{const{duration:a=n.standard,easing:c=e.easeInOut,delay:u=0}=s;return Wt(s,bI),(Array.isArray(i)?i:[i]).map(h=>`${h} ${typeof a=="string"?a:nm(a)} ${c} ${typeof u=="string"?u:nm(u)}`).join(",")}},t,{easing:e,duration:n})}const TI={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},SI=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function AI(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,a=Wt(t,SI);if(t.vars)throw new Error(na(18));const c=dI(r),u=dd(t);let h=_n(u,{mixins:rI(u.breakpoints,n),palette:c,shadows:_I.slice(),typography:mI(c,s),transitions:II(i),zIndex:G({},TI)});return h=_n(h,a),h=e.reduce((f,m)=>_n(f,m),h),h.unstable_sxConfig=G({},Pa,a==null?void 0:a.unstable_sxConfig),h.unstable_sx=function(m){return pl({sx:m,theme:this})},h}const by=AI(),wy="$$material";function CI(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const xy=t=>CI(t)&&t!=="classes",Jr=UE({themeId:wy,defaultTheme:by,rootShouldForwardProp:xy});function PI(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:Gh(e.components[n].defaultProps,r)}function RI(t){return Object.keys(t).length===0}function kI(t=null){const e=C.useContext(Qc);return!e||RI(e)?t:e}const NI=dd();function jI(t=NI){return kI(t)}function OI({props:t,name:e,defaultTheme:n,themeId:r}){let i=jI(n);return r&&(i=i[r]||i),PI({theme:i,name:e,props:t})}function gl({props:t,name:e}){return OI({props:t,name:e,defaultTheme:by,themeId:wy})}function Ey(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function Zu(...t){return C.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{Ey(n,e)})},t)}const Iy=typeof window<"u"?C.useLayoutEffect:C.useEffect;function Ms(t){const e=C.useRef(t);return Iy(()=>{e.current=t}),C.useRef((...n)=>(0,e.current)(...n)).current}const rm={};function DI(t,e){const n=C.useRef(rm);return n.current===rm&&(n.current=t(e)),n}const MI=[];function VI(t){C.useEffect(t,MI)}class vl{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new vl}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function LI(){const t=DI(vl.create).current;return VI(t.disposeEffect),t}let yl=!0,eh=!1;const $I=new vl,FI={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function UI(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&FI[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function zI(t){t.metaKey||t.altKey||t.ctrlKey||(yl=!0)}function xu(){yl=!1}function BI(){this.visibilityState==="hidden"&&eh&&(yl=!0)}function HI(t){t.addEventListener("keydown",zI,!0),t.addEventListener("mousedown",xu,!0),t.addEventListener("pointerdown",xu,!0),t.addEventListener("touchstart",xu,!0),t.addEventListener("visibilitychange",BI,!0)}function qI(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return yl||UI(e)}function Ty(){const t=C.useCallback(i=>{i!=null&&HI(i.ownerDocument)},[]),e=C.useRef(!1);function n(){return e.current?(eh=!0,$I.start(100,()=>{eh=!1}),e.current=!1,!0):!1}function r(i){return qI(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function th(t,e){return th=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},th(t,e)}function WI(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,th(t,e)}const im=Ot.createContext(null);function KI(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fd(t,e){var n=function(s){return e&&C.isValidElement(s)?e(s):s},r=Object.create(null);return t&&C.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function GI(t,e){t=t||{},e=e||{};function n(f){return f in e?e[f]:t[f]}var r=Object.create(null),i=[];for(var s in t)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var a,c={};for(var u in e){if(r[u])for(a=0;a<r[u].length;a++){var h=r[u][a];c[r[u][a]]=n(h)}c[u]=n(u)}for(a=0;a<i.length;a++)c[i[a]]=n(i[a]);return c}function jr(t,e,n){return n[e]!=null?n[e]:t.props[e]}function YI(t,e){return fd(t.children,function(n){return C.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:jr(n,"appear",t),enter:jr(n,"enter",t),exit:jr(n,"exit",t)})})}function QI(t,e,n){var r=fd(t.children),i=GI(e,r);return Object.keys(i).forEach(function(s){var a=i[s];if(C.isValidElement(a)){var c=s in e,u=s in r,h=e[s],f=C.isValidElement(h)&&!h.props.in;u&&(!c||f)?i[s]=C.cloneElement(a,{onExited:n.bind(null,a),in:!0,exit:jr(a,"exit",t),enter:jr(a,"enter",t)}):!u&&c&&!f?i[s]=C.cloneElement(a,{in:!1}):u&&c&&C.isValidElement(h)&&(i[s]=C.cloneElement(a,{onExited:n.bind(null,a),in:h.props.in,exit:jr(a,"exit",t),enter:jr(a,"enter",t)}))}}),i}var XI=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},JI={component:"div",childFactory:function(e){return e}},pd=function(t){WI(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var a=s.handleExited.bind(KI(s));return s.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var a=s.children,c=s.handleExited,u=s.firstRender;return{children:u?YI(i,c):QI(i,a,c),firstRender:!1}},n.handleExited=function(i,s){var a=fd(this.props.children);i.key in a||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(c){var u=G({},c.children);return delete u[i.key],{children:u}}))},n.render=function(){var i=this.props,s=i.component,a=i.childFactory,c=Wt(i,["component","childFactory"]),u=this.state.contextValue,h=XI(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,s===null?Ot.createElement(im.Provider,{value:u},h):Ot.createElement(im.Provider,{value:u},Ot.createElement(s,c,h))},e}(Ot.Component);pd.propTypes={};pd.defaultProps=JI;function _l(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=ml(t,i,n)}),r}function ZI(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function eT(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function tT(t,e){return()=>null}function nT(t,e){var n,r;return C.isValidElement(t)&&e.indexOf((n=t.type.muiName)!=null?n:(r=t.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Sy(t){return t&&t.ownerDocument||document}function rT(t){return Sy(t).defaultView||window}function iT(t,e){return()=>null}let sm=0;function sT(t){const[e,n]=C.useState(t),r=t||e;return C.useEffect(()=>{e==null&&(sm+=1,n(`mui-${sm}`))},[e]),r}const am=ec.useId;function aT(t){if(am!==void 0){const e=am();return t??e}return sT(t)}function oT(t,e,n,r,i){return null}function cT({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=C.useRef(t!==void 0),[s,a]=C.useState(e),c=i?t:s,u=C.useCallback(h=>{i||a(h)},[]);return[c,u]}function lT(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:a,in:c,onExited:u,timeout:h}=t,[f,m]=C.useState(!1),g=Nt(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),w={width:a,height:a,top:-(a/2)+s,left:-(a/2)+i},E=Nt(n.child,f&&n.childLeaving,r&&n.childPulsate);return!c&&!f&&m(!0),C.useEffect(()=>{if(!c&&u!=null){const I=setTimeout(u,h);return()=>{clearTimeout(I)}}},[u,c,h]),l.jsx("span",{className:g,style:w,children:l.jsx("span",{className:E})})}const Ft=_l("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),uT=["center","classes","className"];let bl=t=>t,om,cm,lm,um;const nh=550,hT=80,dT=Xc(om||(om=bl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),fT=Xc(cm||(cm=bl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),pT=Xc(lm||(lm=bl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),mT=Jr("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),gT=Jr(lT,{name:"MuiTouchRipple",slot:"Ripple"})(um||(um=bl`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Ft.rippleVisible,dT,nh,({theme:t})=>t.transitions.easing.easeInOut,Ft.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,Ft.child,Ft.childLeaving,fT,nh,({theme:t})=>t.transitions.easing.easeInOut,Ft.childPulsate,pT,({theme:t})=>t.transitions.easing.easeInOut),vT=C.forwardRef(function(e,n){const r=gl({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:a}=r,c=Wt(r,uT),[u,h]=C.useState([]),f=C.useRef(0),m=C.useRef(null);C.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const g=C.useRef(!1),w=LI(),E=C.useRef(null),I=C.useRef(null),S=C.useCallback(D=>{const{pulsate:V,rippleX:L,rippleY:y,rippleSize:_,cb:b}=D;h(T=>[...T,l.jsx(gT,{classes:{ripple:Nt(s.ripple,Ft.ripple),rippleVisible:Nt(s.rippleVisible,Ft.rippleVisible),ripplePulsate:Nt(s.ripplePulsate,Ft.ripplePulsate),child:Nt(s.child,Ft.child),childLeaving:Nt(s.childLeaving,Ft.childLeaving),childPulsate:Nt(s.childPulsate,Ft.childPulsate)},timeout:nh,pulsate:V,rippleX:L,rippleY:y,rippleSize:_},f.current)]),f.current+=1,m.current=b},[s]),N=C.useCallback((D={},V={},L=()=>{})=>{const{pulsate:y=!1,center:_=i||V.pulsate,fakeElement:b=!1}=V;if((D==null?void 0:D.type)==="mousedown"&&g.current){g.current=!1;return}(D==null?void 0:D.type)==="touchstart"&&(g.current=!0);const T=b?null:I.current,A=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let P,x,ye;if(_||D===void 0||D.clientX===0&&D.clientY===0||!D.clientX&&!D.touches)P=Math.round(A.width/2),x=Math.round(A.height/2);else{const{clientX:nt,clientY:gt}=D.touches&&D.touches.length>0?D.touches[0]:D;P=Math.round(nt-A.left),x=Math.round(gt-A.top)}if(_)ye=Math.sqrt((2*A.width**2+A.height**2)/3),ye%2===0&&(ye+=1);else{const nt=Math.max(Math.abs((T?T.clientWidth:0)-P),P)*2+2,gt=Math.max(Math.abs((T?T.clientHeight:0)-x),x)*2+2;ye=Math.sqrt(nt**2+gt**2)}D!=null&&D.touches?E.current===null&&(E.current=()=>{S({pulsate:y,rippleX:P,rippleY:x,rippleSize:ye,cb:L})},w.start(hT,()=>{E.current&&(E.current(),E.current=null)})):S({pulsate:y,rippleX:P,rippleY:x,rippleSize:ye,cb:L})},[i,S,w]),k=C.useCallback(()=>{N({},{pulsate:!0})},[N]),O=C.useCallback((D,V)=>{if(w.clear(),(D==null?void 0:D.type)==="touchend"&&E.current){E.current(),E.current=null,w.start(0,()=>{O(D,V)});return}E.current=null,h(L=>L.length>0?L.slice(1):L),m.current=V},[w]);return C.useImperativeHandle(n,()=>({pulsate:k,start:N,stop:O}),[k,N,O]),l.jsx(mT,G({className:Nt(Ft.root,s.root,a),ref:I},c,{children:l.jsx(pd,{component:null,exit:!0,children:u})}))});function yT(t){return ml("MuiButtonBase",t)}const _T=_l("MuiButtonBase",["root","disabled","focusVisible"]),bT=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],wT=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,a=Yh({root:["root",e&&"disabled",n&&"focusVisible"]},yT,i);return n&&r&&(a.root+=` ${r}`),a},xT=Jr("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${_T.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ET=C.forwardRef(function(e,n){const r=gl({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:a,className:c,component:u="button",disabled:h=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:g=!1,LinkComponent:w="a",onBlur:E,onClick:I,onContextMenu:S,onDragLeave:N,onFocus:k,onFocusVisible:O,onKeyDown:D,onKeyUp:V,onMouseDown:L,onMouseLeave:y,onMouseUp:_,onTouchEnd:b,onTouchMove:T,onTouchStart:A,tabIndex:P=0,TouchRippleProps:x,touchRippleRef:ye,type:nt}=r,gt=Wt(r,bT),vt=C.useRef(null),He=C.useRef(null),yt=Zu(He,ye),{isFocusVisibleRef:ln,onFocus:Tn,onBlur:qe,ref:je}=Ty(),[At,_t]=C.useState(!1);h&&At&&_t(!1),C.useImperativeHandle(i,()=>({focusVisible:()=>{_t(!0),vt.current.focus()}}),[]);const[Yt,Qt]=C.useState(!1);C.useEffect(()=>{Qt(!0)},[]);const Sn=Yt&&!f&&!h;C.useEffect(()=>{At&&g&&!f&&Yt&&He.current.pulsate()},[f,g,At,Yt]);function We(Q,vs,Zl=m){return Ms(Gn=>(vs&&vs(Gn),!Zl&&He.current&&He.current[Q](Gn),!0))}const un=We("start",L),Xt=We("stop",S),Et=We("stop",N),fs=We("stop",_),ps=We("stop",Q=>{At&&Q.preventDefault(),y&&y(Q)}),ms=We("start",A),Ga=We("stop",b),Ql=We("stop",T),Xl=We("stop",Q=>{qe(Q),ln.current===!1&&_t(!1),E&&E(Q)},!1),Ya=Ms(Q=>{vt.current||(vt.current=Q.currentTarget),Tn(Q),ln.current===!0&&(_t(!0),O&&O(Q)),k&&k(Q)}),Sr=()=>{const Q=vt.current;return u&&u!=="button"&&!(Q.tagName==="A"&&Q.href)},ni=C.useRef(!1),Jl=Ms(Q=>{g&&!ni.current&&At&&He.current&&Q.key===" "&&(ni.current=!0,He.current.stop(Q,()=>{He.current.start(Q)})),Q.target===Q.currentTarget&&Sr()&&Q.key===" "&&Q.preventDefault(),D&&D(Q),Q.target===Q.currentTarget&&Sr()&&Q.key==="Enter"&&!h&&(Q.preventDefault(),I&&I(Q))}),gs=Ms(Q=>{g&&Q.key===" "&&He.current&&At&&!Q.defaultPrevented&&(ni.current=!1,He.current.stop(Q,()=>{He.current.pulsate(Q)})),V&&V(Q),I&&Q.target===Q.currentTarget&&Sr()&&Q.key===" "&&!Q.defaultPrevented&&I(Q)});let Wn=u;Wn==="button"&&(gt.href||gt.to)&&(Wn=w);const Kn={};Wn==="button"?(Kn.type=nt===void 0?"button":nt,Kn.disabled=h):(!gt.href&&!gt.to&&(Kn.role="button"),h&&(Kn["aria-disabled"]=h));const Xe=Zu(n,je,vt),Je=G({},r,{centerRipple:s,component:u,disabled:h,disableRipple:f,disableTouchRipple:m,focusRipple:g,tabIndex:P,focusVisible:At}),ri=wT(Je);return l.jsxs(xT,G({as:Wn,className:Nt(ri.root,c),ownerState:Je,onBlur:Xl,onClick:I,onContextMenu:Xt,onFocus:Ya,onKeyDown:Jl,onKeyUp:gs,onMouseDown:un,onMouseLeave:ps,onMouseUp:fs,onDragLeave:Et,onTouchEnd:Ga,onTouchMove:Ql,onTouchStart:ms,ref:Xe,tabIndex:h?-1:P,type:nt},Kn,gt,{children:[a,Sn?l.jsx(vT,G({ref:yt,center:s},x)):null]}))});function IT(t){return ml("MuiButton",t)}const po=_l("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),TT=C.createContext({}),ST=C.createContext(void 0),AT=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],CT=t=>{const{color:e,disableElevation:n,fullWidth:r,size:i,variant:s,classes:a}=t,c={root:["root",s,`${s}${Ge(e)}`,`size${Ge(i)}`,`${s}Size${Ge(i)}`,`color${Ge(e)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${Ge(i)}`],endIcon:["icon","endIcon",`iconSize${Ge(i)}`]},u=Yh(c,IT,a);return G({},a,u)},Ay=t=>G({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),PT=Jr(ET,{shouldForwardProp:t=>xy(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${Ge(n.color)}`],e[`size${Ge(n.size)}`],e[`${n.variant}Size${Ge(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,r;const i=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],s=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return G({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":G({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:uo(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:uo(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:uo(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":G({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${po.focusVisible}`]:G({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${po.disabled}`]:G({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${uo(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(r=t.palette).getContrastText)==null?void 0:n.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${po.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${po.disabled}`]:{boxShadow:"none"}}),RT=Jr("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${Ge(n.size)}`]]}})(({ownerState:t})=>G({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},Ay(t))),kT=Jr("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${Ge(n.size)}`]]}})(({ownerState:t})=>G({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},Ay(t))),xt=C.forwardRef(function(e,n){const r=C.useContext(TT),i=C.useContext(ST),s=Gh(r,e),a=gl({props:s,name:"MuiButton"}),{children:c,color:u="primary",component:h="button",className:f,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:w=!1,endIcon:E,focusVisibleClassName:I,fullWidth:S=!1,size:N="medium",startIcon:k,type:O,variant:D="text"}=a,V=Wt(a,AT),L=G({},a,{color:u,component:h,disabled:m,disableElevation:g,disableFocusRipple:w,fullWidth:S,size:N,type:O,variant:D}),y=CT(L),_=k&&l.jsx(RT,{className:y.startIcon,ownerState:L,children:k}),b=E&&l.jsx(kT,{className:y.endIcon,ownerState:L,children:E}),T=i||"";return l.jsxs(PT,G({ownerState:L,className:Nt(r.className,y.root,f,T),component:h,disabled:m,focusRipple:!w,focusVisibleClassName:Nt(y.focusVisible,I),ref:n,type:O},V,{classes:y,children:[_,c,b]}))});var hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],c=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,c=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let g=(c&15)<<2|h>>6,w=h&63;u||(w=64,a||(g=64)),r.push(n[f],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new jT;const g=s<<2|c>>4;if(r.push(g),h!==64){const w=c<<4&240|h>>2;if(r.push(w),m!==64){const E=h<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OT=function(t){const e=Cy(t);return Py.encodeByteArray(e,!0)},cc=function(t){return OT(t).replace(/\./g,"")},Ry=function(t){try{return Py.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=()=>DT().__FIREBASE_DEFAULTS__,VT=()=>{if(typeof process>"u"||typeof hm>"u")return;const t=hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ry(t[1]);return e&&JSON.parse(e)},wl=()=>{try{return MT()||VT()||LT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ky=t=>{var e,n;return(n=(e=wl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ny=()=>{var t;return(t=wl())===null||t===void 0?void 0:t.config},jy=t=>{var e;return(e=wl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cc(JSON.stringify(n)),cc(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function BT(){var t;const e=(t=wl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WT(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KT(){return!BT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GT(){try{return typeof indexedDB=="object"}catch{return!1}}function YT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QT,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?XT(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Bn(i,c,r)}}function XT(t,e){return t.replace(JT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JT=/\{\$([^}]+)}/g;function ZT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(dm(s)&&dm(a)){if(!lc(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function e4(t,e){const n=new t4(t,e);return n.subscribe.bind(n)}class t4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");n4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Eu),i.error===void 0&&(i.error=Eu),i.complete===void 0&&(i.complete=Eu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s4(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i4(t){return t===Nr?void 0:t}function s4(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new r4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const o4={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},c4=te.INFO,l4={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},u4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=l4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class md{constructor(e){this.name=e,this._logLevel=c4,this._logHandler=u4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const h4=(t,e)=>e.some(n=>t instanceof n);let fm,pm;function d4(){return fm||(fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f4(){return pm||(pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,rh=new WeakMap,Dy=new WeakMap,Iu=new WeakMap,gd=new WeakMap;function p4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(hr(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),gd.set(e,t),e}function m4(t){if(rh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});rh.set(t,e)}let ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function g4(t){ih=t(ih)}function v4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tu(this),e,...n);return Dy.set(r,e.sort?e.sort():[e]),hr(r)}:f4().includes(t)?function(...e){return t.apply(Tu(this),e),hr(Oy.get(this))}:function(...e){return hr(t.apply(Tu(this),e))}}function y4(t){return typeof t=="function"?v4(t):(t instanceof IDBTransaction&&m4(t),h4(t,d4())?new Proxy(t,ih):t)}function hr(t){if(t instanceof IDBRequest)return p4(t);if(Iu.has(t))return Iu.get(t);const e=y4(t);return e!==t&&(Iu.set(t,e),gd.set(e,t)),e}const Tu=t=>gd.get(t);function _4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),c=hr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(hr(a.result),u.oldVersion,u.newVersion,hr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const b4=["get","getKey","getAll","getAllKeys","count"],w4=["put","add","delete","clear"],Su=new Map;function mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=w4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||b4.includes(n)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return Su.set(e,s),s}g4(t=>({...t,get:(e,n,r)=>mm(e,n)||t.get(e,n,r),has:(e,n)=>!!mm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sh="@firebase/app",gm="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new md("@firebase/app"),I4="@firebase/app-compat",T4="@firebase/analytics-compat",S4="@firebase/analytics",A4="@firebase/app-check-compat",C4="@firebase/app-check",P4="@firebase/auth",R4="@firebase/auth-compat",k4="@firebase/database",N4="@firebase/database-compat",j4="@firebase/functions",O4="@firebase/functions-compat",D4="@firebase/installations",M4="@firebase/installations-compat",V4="@firebase/messaging",L4="@firebase/messaging-compat",$4="@firebase/performance",F4="@firebase/performance-compat",U4="@firebase/remote-config",z4="@firebase/remote-config-compat",B4="@firebase/storage",H4="@firebase/storage-compat",q4="@firebase/firestore",W4="@firebase/vertexai-preview",K4="@firebase/firestore-compat",G4="firebase",Y4="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="[DEFAULT]",Q4={[sh]:"fire-core",[I4]:"fire-core-compat",[S4]:"fire-analytics",[T4]:"fire-analytics-compat",[C4]:"fire-app-check",[A4]:"fire-app-check-compat",[P4]:"fire-auth",[R4]:"fire-auth-compat",[k4]:"fire-rtdb",[N4]:"fire-rtdb-compat",[j4]:"fire-fn",[O4]:"fire-fn-compat",[D4]:"fire-iid",[M4]:"fire-iid-compat",[V4]:"fire-fcm",[L4]:"fire-fcm-compat",[$4]:"fire-perf",[F4]:"fire-perf-compat",[U4]:"fire-rc",[z4]:"fire-rc-compat",[B4]:"fire-gcs",[H4]:"fire-gcs-compat",[q4]:"fire-fst",[K4]:"fire-fst-compat",[W4]:"fire-vertex","fire-js":"fire-js",[G4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new Map,X4=new Map,oh=new Map;function vm(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(oh.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,t);for(const n of uc.values())vm(n,t);for(const n of X4.values())vm(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Ra("app","Firebase",J4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=Y4;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ah,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=Ny()),!n)throw dr.create("no-options");const s=uc.get(i);if(s){if(lc(n,s.options)&&lc(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const a=new a4(i);for(const u of oh.values())a.addComponent(u);const c=new Z4(n,r,a);return uc.set(i,c),c}function My(t=ah){const e=uc.get(t);if(!e&&t===ah&&Ny())return Na();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=Q4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(c.join(" "));return}Mi(new Ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebase-heartbeat-database",tS=1,oa="firebase-heartbeat-store";let Au=null;function Vy(){return Au||(Au=_4(eS,tS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Au}async function nS(t){try{const n=(await Vy()).transaction(oa),r=await n.objectStore(oa).get(Ly(t));return await n.done,r}catch(e){if(e instanceof Bn)zr.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function ym(t,e){try{const r=(await Vy()).transaction(oa,"readwrite");await r.objectStore(oa).put(e,Ly(t)),await r.done}catch(n){if(n instanceof Bn)zr.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function Ly(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1024,iS=30*24*60*60*1e3;class sS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_m();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=iS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_m(),{heartbeatsToSend:r,unsentEntries:i}=aS(this._heartbeatsCache.heartbeats),s=cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _m(){return new Date().toISOString().substring(0,10)}function aS(t,e=rS){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GT()?YT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ym(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bm(t){return cc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){Mi(new Ur("platform-logger",e=>new x4(e),"PRIVATE")),Mi(new Ur("heartbeat",e=>new sS(e),"PRIVATE")),fr(sh,gm,t),fr(sh,gm,"esm2017"),fr("fire-js","")}cS("");var lS="firebase",uS="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(lS,uS,"app");var Tt=function(){return Tt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Tt.apply(this,arguments)};function yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hc(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function $y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hS=$y,Fy=new Ra("auth","Firebase",$y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new md("@firebase/auth");function dS(t,...e){dc.logLevel<=te.WARN&&dc.warn(`Auth (${es}): ${t}`,...e)}function Lo(t,...e){dc.logLevel<=te.ERROR&&dc.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw _d(t,...e)}function bn(t,...e){return _d(t,...e)}function Uy(t,e,n){const r=Object.assign(Object.assign({},hS()),{[e]:n});return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return Uy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fy.create(t,...e)}function W(t,e,...n){if(!t)throw _d(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function Mn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fS(){return wm()==="http:"||wm()==="https:"}function wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fS()||HT()||"connection"in navigator)?navigator.onLine:!0}function mS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=zT()||qT()}get(){return pS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new ja(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,i={}){return By(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=ka(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),zy.fetch()(Hy(t,t.config.apiHost,n,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function By(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gS),e);try{const i=new _S(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw mo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw mo(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Uy(t,f,h);an(t,f)}}catch(i){if(i instanceof Bn)throw i;an(t,"network-request-failed",{message:String(i)})}}async function Oa(t,e,n,r,i={}){const s=await Tr(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bd(t.config,i):`${t.config.apiScheme}://${i}`}function yS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),vS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}function xm(t){return t!==void 0&&t.enterprise!==void 0}class bS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function wS(t,e){return Tr(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function qy(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ES(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=wd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ws(Cu(i.auth_time)),issuedAtTime:Ws(Cu(i.iat)),expirationTime:Ws(Cu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cu(t){return Number(t)*1e3}function wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ry(n);return i?JSON.parse(i):(Lo("Failed to decode base64 JWT payload"),null)}catch(i){return Lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Em(t){const e=wd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&IS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,qy(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Wy(s.providerUserInfo):[],c=AS(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function SS(t){const e=Mt(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wy(t){return t.map(e=>{var{providerId:n}=e,r=yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){const n=await By(t,{},async()=>{const r=ka({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Hy(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",zy.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PS(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Pi;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ES(this,e)}reload(){return SS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gn(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await ca(this,xS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,c,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(a=n.photoURL)!==null&&a!==void 0?a:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,N=(h=n.createdAt)!==null&&h!==void 0?h:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:D,isAnonymous:V,providerData:L,stsTokenManager:y}=n;W(O&&y,e,"internal-error");const _=Pi.fromJSON(this.name,y);W(typeof O=="string",e,"internal-error"),Jn(m,e.name),Jn(g,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof V=="boolean",e,"internal-error"),Jn(w,e.name),Jn(E,e.name),Jn(I,e.name),Jn(S,e.name),Jn(N,e.name),Jn(k,e.name);const b=new kn({uid:O,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:V,photoURL:E,phoneNumber:w,tenantId:I,stsTokenManager:_,createdAt:N,lastLoginAt:k});return L&&Array.isArray(L)&&(b.providerData=L.map(T=>Object.assign({},T))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wy(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Pi;c.updateFromIdToken(r);const u=new kn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new Map;function Nn(t){Mn(t instanceof Function,"Expected a class definition");let e=Im.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Im.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ky.type="NONE";const Tm=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,s),this.fullPersistenceKey=$o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(Nn(Tm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Nn(Tm);const a=$o(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const m=kn._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Zy(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Xy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gy(t=ct()){return/firefox\//i.test(t)}function xd(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=ct()){return/crios\//i.test(t)}function Qy(t=ct()){return/iemobile/i.test(t)}function Xy(t=ct()){return/android/i.test(t)}function Jy(t=ct()){return/blackberry/i.test(t)}function Zy(t=ct()){return/webos/i.test(t)}function xl(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RS(t=ct()){var e;return xl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return WT()&&document.documentMode===10}function e1(t=ct()){return xl(t)||Xy(t)||Zy(t)||Jy(t)||/windows phone/i.test(t)||Qy(t)}function NS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e=[]){let n;switch(t){case"Browser":n=Sm(ct());break;case"Worker":n=`${Sm(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=6;class MS{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:DS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Am(this),this.idTokenSubscription=new Am(this),this.beforeStateQueue=new jS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qy(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(gn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gn(this.app))return Promise.reject(jn(this));const n=e?Mt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gn(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gn(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OS(this),n=new MS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return Mt(t)}class Am{constructor(e){this.auth=e,this.observer=null,this.addObserver=e4(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LS(t){El=t}function n1(t){return El.loadJS(t)}function $S(){return El.recaptchaEnterpriseScript}function FS(){return El.gapiScript}function US(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zS="recaptcha-enterprise",BS="NO_RECAPTCHA";class HS{constructor(e){this.type=zS,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{wS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new bS(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){const u=window.grecaptcha;xm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(BS)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&xm(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$S();u.length!==0&&(u+=c),n1(u).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Cm(t,e,n,r=!1){const i=new HS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function uh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Cm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lc(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function WS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KS(t,e,n){const r=Zr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=r1(e),{host:a,port:c}=GS(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),YS()}function r1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GS(t){const e=r1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Pm(a)}}}function Pm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function QS(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){return Oa(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function ZS(t,e){return Oa(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Ed{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new la(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new la(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,n,"signInWithPassword",XS);case"emailLink":return JS(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uh(e,r,"signUpPassword",QS);case"emailLink":return ZS(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e){return Oa(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="http://localhost";class Br extends Ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Br(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:eA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ka(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nA(t){const e=Vs(Ls(t)).link,n=e?Vs(Ls(e)).deep_link_id:null,r=Vs(Ls(t)).deep_link_id;return(r?Vs(Ls(r)).link:null)||r||n||e||t}class Id{constructor(e){var n,r,i,s,a,c;const u=Vs(Ls(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=tA((i=u.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=nA(e);try{return new Id(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,n){return la._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Id.parseLink(n);return W(r,"argument-error"),la._fromEmailAndCode(e,r.code,r.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends i1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Da{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Da{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Da{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e){return Oa(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),a=Rm(r);return new Hr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rm(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function s1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function iA(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e,n=!1){const{auth:r}=t;if(gn(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await ca(t,s1(r,i,e,t),n);W(s.idToken,r,"internal-error");const a=wd(s.idToken);W(a,r,"internal-error");const{sub:c}=a;return W(t.uid===c,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e,n=!1){if(gn(t.app))return Promise.reject(jn(t));const r="signIn",i=await s1(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function aA(t,e){return a1(Zr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c1(t,e,n){if(gn(t.app))return Promise.reject(jn(t));const r=Zr(t),a=await uh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&o1(t),u}),c=await Hr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function l1(t,e,n){return gn(t.app)?Promise.reject(jn(t)):aA(Mt(t),ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o1(t),r})}function oA(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function cA(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){const t=ct();return xd(t)||xl(t)}const uA=1e3,hA=10;class h1 extends u1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lA()&&NS(),this.fallbackToPolling=e1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);kS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h1.type="LOCAL";const dA=h1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1 extends u1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d1.type="SESSION";const f1=d1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(n.origin,s)),u=await fA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const h=Td("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function mA(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function gA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yA(){return p1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firebaseLocalStorageDb",_A=1,gc="firebaseLocalStorage",g1="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tl(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function bA(){const t=indexedDB.deleteDatabase(m1);return new Ma(t).toPromise()}function hh(){const t=indexedDB.open(m1,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:g1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await bA(),e(await hh()))})})}async function km(t,e,n){const r=Tl(t,!0).put({[g1]:e,value:n});return new Ma(r).toPromise()}async function wA(t,e){const n=Tl(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function Nm(t,e){const n=Tl(t,!0).delete(e);return new Ma(n).toPromise()}const xA=800,EA=3;class v1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(yA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gA(),!this.activeServiceWorker)return;this.sender=new pA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await km(e,mc,"1"),await Nm(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>km(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tl(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}v1.type="LOCAL";const IA=v1;new ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t,e){return e?Nn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends Ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SA(t){return a1(t.auth,new Sd(t),t.bypassAuthState)}function AA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),sA(n,new Sd(t),t.bypassAuthState)}async function CA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iA(n,new Sd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:an(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=new ja(2e3,1e4);class wi extends y1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PA.get())};e()}}wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="pendingRedirect",Fo=new Map;class kA extends y1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fo.get(this.auth._key());if(!e){try{const r=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fo.set(this.auth._key(),e)}return this.bypassAuthState||Fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(t,e){const n=DA(e),r=OA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jA(t,e){Fo.set(t._key(),e)}function OA(t){return Nn(t._redirectPersistence)}function DA(t){return $o(RA,t.config.apiKey,t.name)}async function MA(t,e,n=!1){if(gn(t.app))return Promise.reject(jn(t));const r=Zr(t),i=TA(r,e),a=await new kA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=10*60*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$A(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VA&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $A(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function BA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FA(t);for(const n of e)try{if(HA(n))return}catch{}an(t,"unauthorized-domain")}function HA(t){const e=ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!zA.test(n))return!1;if(UA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new ja(3e4,6e4);function Om(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,i,s;function a(){Om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Om(),n(bn(t,"network-request-failed"))},timeout:qA.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)a();else{const c=US("iframefcb");return wn()[c]=()=>{gapi.load?a():n(bn(t,"network-request-failed"))},n1(`${FS()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function KA(t){return Uo=Uo||WA(t),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new ja(5e3,15e3),YA="__/auth/iframe",QA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bd(e,QA):`https://${t.config.authDomain}/${YA}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=JA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ka(r).slice(1)}`}async function eC(t){const e=await KA(t),n=wn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:ZA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=bn(t,"network-request-failed"),c=wn().setTimeout(()=>{s(a)},GA.get());function u(){wn().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,iC="_blank",sC="http://localhost";class Dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(t,e,n,r=nC,i=rC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},tC),{width:r.toString(),height:i.toString(),top:s,left:a}),h=ct().toLowerCase();n&&(c=Yy(h)?iC:n),Gy(h)&&(e=e||sC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,E])=>`${g}${w}=${E},`,"");if(RS(h)&&c!=="_self")return oC(e||"",c),new Dm(null);const m=window.open(e||"",c,f);W(m,t,"popup-blocked");try{m.focus()}catch{}return new Dm(m)}function oC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="__/auth/handler",lC="emulator/auth/handler",uC=encodeURIComponent("fac");async function Mm(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof i1){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ZT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Da){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),h=u?`#${uC}=${encodeURIComponent(u)}`:"";return`${hC(t)}?${ka(c).slice(1)}${h}`}function hC({config:t}){return t.emulator?bd(t,lC):`https://${t.authDomain}/${cC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="webStorageSupport";class dC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f1,this._completeRedirectFn=MA,this._overrideRedirectResult=jA}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Mm(e,n,r,ch(),i);return aC(e,a,Td())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mm(e,n,r,ch(),i);return mA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new LA(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pu,{type:Pu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pu];a!==void 0&&n(!!a),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e1()||xd()||xl()}}const fC=dC;var Vm="@firebase/auth",Lm="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){Mi(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t1(t)},h=new VS(r,i,s,u);return WS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Ur("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Vm,Lm,mC(t)),fr(Vm,Lm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=5*60,yC=jy("authIdTokenMaxAge")||vC;let $m=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yC)return;const i=n==null?void 0:n.token;$m!==i&&($m=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function b1(t=My()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qS(t,{popupRedirectResolver:fC,persistence:[IA,dA,f1]}),r=jy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=_C(s.toString());cA(n,a,()=>a(n.currentUser)),oA(n,c=>a(c))}}const i=ky("auth");return i&&KS(n,`http://${i}`),n}function bC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");const wC={apiKey:"AIzaSyADoBSJGJFM4T7zx1MTHG7yhwElzrIY2Rs",authDomain:"doctor-application-a6249.firebaseapp.com",projectId:"doctor-application-a6249",storageBucket:"doctor-application-a6249.appspot.com",messagingSenderId:"445534903136",appId:"1:445534903136:web:ffbc6366e9834ef822dc05"},xC=Na(wC,"doctorApp"),w1=b1(xC);function EC(){const[t,e]=C.useState({name:"",id:"",phone:"",email:"",password:""}),[n,r]=C.useState(null),i=c=>{const{name:u,value:h}=c.target;e({...t,[u]:h})},s=Xr(),a=async c=>{c.preventDefault();try{await c1(w1,t.email,t.password),alert("sign up successfully."),s("/")}catch(u){u.code==="auth/email-already-in-use"?r("The email address is already in use by another account."):(console.error("Error registering user:",u),alert("Error registering user"))}};return l.jsx("div",{className:It.main,children:l.jsxs("div",{className:It.box,children:[l.jsx("img",{src:nw,alt:"",className:It.image}),l.jsxs("div",{className:It.doctor_login_form,children:[l.jsxs("div",{className:It.heading,children:[l.jsx("p",{className:It.para1,children:"Welcome, Dedicated Healer"}),l.jsx("p",{className:It.para2,children:"Together, we can achieve excellence in patient care."})]}),l.jsxs("form",{className:It.form,onSubmit:a,children:[l.jsxs("div",{className:It.name,children:[l.jsx("span",{children:"Doctor Name"}),l.jsx("input",{type:"text",name:"name",value:t.name,onChange:i})]}),l.jsxs("div",{className:It.name,children:[l.jsx("span",{children:"Doctor Id"}),l.jsx("input",{type:"text",name:"id",value:t.id,onChange:i})]}),l.jsxs("div",{className:It.name,children:[l.jsx("span",{children:"Phone no."}),l.jsx("input",{type:"text",name:"phone",value:t.phone,onChange:i})]}),l.jsxs("div",{className:It.name,children:[l.jsx("span",{children:"Email"}),l.jsx("input",{type:"email",name:"email",value:t.email,onChange:i})]}),l.jsxs("div",{className:It.name,children:[l.jsx("span",{children:"Password"}),l.jsx("input",{type:"password",name:"password",value:t.password,onChange:i})]}),n&&l.jsx("span",{className:It.error,children:n}),l.jsx(xt,{type:"submit",variant:"contained",style:{backgroundColor:"purple",borderRadius:"0.7em"},children:"Sign up"})]}),l.jsxs("p",{children:["Already have an account ? ",l.jsx(De,{to:"/",style:{textDecoration:"none"},children:"Sign In"})]})]})]})})}const IC="_main_a5p5w_1",TC="_box_a5p5w_15",SC="_img_a5p5w_35",AC="_heading_a5p5w_55",CC="_login_a5p5w_89",PC="_logo_a5p5w_115",RC="_para1_a5p5w_133",kC="_para2_a5p5w_149",NC="_form_a5p5w_157",jC="_name_a5p5w_177",Pt={main:IC,box:TC,img:SC,heading:AC,login:CC,logo:PC,para1:RC,para2:kC,form:NC,name:jC},OC="/Hospital-System/Doctor.png",DC={apiKey:"AIzaSyC0JX7p1Jn0UlO3Qy1lLti77je3fCPsn0E",authDomain:"customer-application-c7501.firebaseapp.com",projectId:"customer-application-c7501",storageBucket:"customer-application-c7501.appspot.com",messagingSenderId:"387820553595",appId:"1:387820553595:web:111a4415f30d4df76329de",measurementId:"G-MY3S60ETQ0"},MC=Na(DC,"userApp"),x1=b1(MC);function VC(){const[t,e]=C.useState({name:"",phone:"",email:"",password:""}),[n,r]=C.useState(null),i=Xr(),s=c=>{const{name:u,value:h}=c.target;e({...t,[u]:h})},a=async c=>{c.preventDefault();try{await c1(x1,t.email,t.password),alert("User registered successfully!"),i("/")}catch(u){u.code==="auth/email-already-in-use"?r("The email address is already in use by another account."):(console.error("Error registering user:",u),alert("Error registering user"))}};return l.jsx("div",{className:Pt.main,children:l.jsxs("div",{className:Pt.box,children:[l.jsxs("div",{className:Pt.img,children:[l.jsx("img",{src:OC,alt:""}),l.jsx("div",{className:Pt.heading,children:"Get professional healthcare for you and your family"})]}),l.jsxs("div",{className:Pt.login,children:[l.jsxs("div",{className:Pt.logo,children:[l.jsxs("p",{className:Pt.para1,children:["Welcome to ",l.jsx("span",{children:"GYNE"})]}),l.jsx("p",{className:Pt.para2,children:"Create your account"})]}),l.jsxs("form",{className:Pt.form,onSubmit:a,children:[l.jsxs("div",{className:Pt.name,children:[l.jsx("span",{children:"Name"}),l.jsx("input",{type:"text",name:"name",value:t.name,onChange:s})]}),l.jsxs("div",{className:Pt.name,children:[l.jsx("span",{children:"Phone no."}),l.jsx("input",{type:"text",name:"phone",value:t.phone,onChange:s})]}),l.jsxs("div",{className:Pt.name,children:[l.jsx("span",{children:"Email"}),l.jsx("input",{type:"email",name:"email",value:t.email,onChange:s})]}),l.jsxs("div",{className:Pt.name,children:[l.jsx("span",{children:"Password"}),l.jsx("input",{type:"password",name:"password",value:t.password,onChange:s})]}),l.jsx("span",{style:{color:"red"},children:n}),l.jsx(xt,{type:"submit",variant:"contained",style:{backgroundColor:"purple",borderRadius:"0.7em"},children:"Sign up"})]}),l.jsx("div",{children:l.jsxs("p",{children:["Already have an account? ",l.jsx(De,{to:"/",style:{textDecoration:"none"},children:"Sign In"})]})})]})]})})}const LC="/Hospital-System/login.jpg";var be="-ms-",Ks="-moz-",le="-webkit-",E1="comm",Sl="rule",Ad="decl",$C="@import",I1="@keyframes",FC="@layer",T1=Math.abs,Cd=String.fromCharCode,dh=Object.assign;function UC(t,e){return et(t,0)^45?(((e<<2^et(t,0))<<2^et(t,1))<<2^et(t,2))<<2^et(t,3):0}function S1(t){return t.trim()}function Pn(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function zo(t,e,n){return t.indexOf(e,n)}function et(t,e){return t.charCodeAt(e)|0}function Vi(t,e,n){return t.slice(e,n)}function pn(t){return t.length}function A1(t){return t.length}function $s(t,e){return e.push(t),t}function zC(t,e){return t.map(e).join("")}function Fm(t,e){return t.filter(function(n){return!Pn(n,e)})}var Al=1,Li=1,C1=0,qt=0,ze=0,ns="";function Cl(t,e,n,r,i,s,a,c){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Al,column:Li,length:a,return:"",siblings:c}}function nr(t,e){return dh(Cl("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function fi(t){for(;t.root;)t=nr(t.root,{children:[t]});$s(t,t.siblings)}function BC(){return ze}function HC(){return ze=qt>0?et(ns,--qt):0,Li--,ze===10&&(Li=1,Al--),ze}function sn(){return ze=qt<C1?et(ns,qt++):0,Li++,ze===10&&(Li=1,Al++),ze}function Lr(){return et(ns,qt)}function Bo(){return qt}function Pl(t,e){return Vi(ns,t,e)}function fh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qC(t){return Al=Li=1,C1=pn(ns=t),qt=0,[]}function WC(t){return ns="",t}function Ru(t){return S1(Pl(qt-1,ph(t===91?t+2:t===40?t+1:t)))}function KC(t){for(;(ze=Lr())&&ze<33;)sn();return fh(t)>2||fh(ze)>3?"":" "}function GC(t,e){for(;--e&&sn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Pl(t,Bo()+(e<6&&Lr()==32&&sn()==32))}function ph(t){for(;sn();)switch(ze){case t:return qt;case 34:case 39:t!==34&&t!==39&&ph(ze);break;case 40:t===41&&ph(t);break;case 92:sn();break}return qt}function YC(t,e){for(;sn()&&t+ze!==57;)if(t+ze===84&&Lr()===47)break;return"/*"+Pl(e,qt-1)+"*"+Cd(t===47?t:sn())}function QC(t){for(;!fh(Lr());)sn();return Pl(t,qt)}function XC(t){return WC(Ho("",null,null,null,[""],t=qC(t),0,[0],t))}function Ho(t,e,n,r,i,s,a,c,u){for(var h=0,f=0,m=a,g=0,w=0,E=0,I=1,S=1,N=1,k=0,O="",D=i,V=s,L=r,y=O;S;)switch(E=k,k=sn()){case 40:if(E!=108&&et(y,m-1)==58){zo(y+=J(Ru(k),"&","&\f"),"&\f",T1(h?c[h-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:y+=Ru(k);break;case 9:case 10:case 13:case 32:y+=KC(E);break;case 92:y+=GC(Bo()-1,7);continue;case 47:switch(Lr()){case 42:case 47:$s(JC(YC(sn(),Bo()),e,n,u),u);break;default:y+="/"}break;case 123*I:c[h++]=pn(y)*N;case 125*I:case 59:case 0:switch(k){case 0:case 125:S=0;case 59+f:N==-1&&(y=J(y,/\f/g,"")),w>0&&pn(y)-m&&$s(w>32?zm(y+";",r,n,m-1,u):zm(J(y," ","")+";",r,n,m-2,u),u);break;case 59:y+=";";default:if($s(L=Um(y,e,n,h,f,i,c,O,D=[],V=[],m,s),s),k===123)if(f===0)Ho(y,e,L,L,D,s,m,c,V);else switch(g===99&&et(y,3)===110?100:g){case 100:case 108:case 109:case 115:Ho(t,L,L,r&&$s(Um(t,L,L,0,0,i,c,O,i,D=[],m,V),V),i,V,m,c,r?D:V);break;default:Ho(y,L,L,L,[""],V,0,c,V)}}h=f=w=0,I=N=1,O=y="",m=a;break;case 58:m=1+pn(y),w=E;default:if(I<1){if(k==123)--I;else if(k==125&&I++==0&&HC()==125)continue}switch(y+=Cd(k),k*I){case 38:N=f>0?1:(y+="\f",-1);break;case 44:c[h++]=(pn(y)-1)*N,N=1;break;case 64:Lr()===45&&(y+=Ru(sn())),g=Lr(),f=m=pn(O=y+=QC(Bo())),k++;break;case 45:E===45&&pn(y)==2&&(I=0)}}return s}function Um(t,e,n,r,i,s,a,c,u,h,f,m){for(var g=i-1,w=i===0?s:[""],E=A1(w),I=0,S=0,N=0;I<r;++I)for(var k=0,O=Vi(t,g+1,g=T1(S=a[I])),D=t;k<E;++k)(D=S1(S>0?w[k]+" "+O:J(O,/&\f/g,w[k])))&&(u[N++]=D);return Cl(t,e,n,i===0?Sl:c,u,h,f,m)}function JC(t,e,n,r){return Cl(t,e,n,E1,Cd(BC()),Vi(t,2,-2),0,r)}function zm(t,e,n,r,i){return Cl(t,e,n,Ad,Vi(t,0,r),Vi(t,r+1,-1),r,i)}function P1(t,e,n){switch(UC(t,e)){case 5103:return le+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return le+t+t;case 4789:return Ks+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return le+t+Ks+t+be+t+t;case 5936:switch(et(t,e+11)){case 114:return le+t+be+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return le+t+be+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return le+t+be+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return le+t+be+t+t;case 6165:return le+t+be+"flex-"+t+t;case 5187:return le+t+J(t,/(\w+).+(:[^]+)/,le+"box-$1$2"+be+"flex-$1$2")+t;case 5443:return le+t+be+"flex-item-"+J(t,/flex-|-self/g,"")+(Pn(t,/flex-|baseline/)?"":be+"grid-row-"+J(t,/flex-|-self/g,""))+t;case 4675:return le+t+be+"flex-line-pack"+J(t,/align-content|flex-|-self/g,"")+t;case 5548:return le+t+be+J(t,"shrink","negative")+t;case 5292:return le+t+be+J(t,"basis","preferred-size")+t;case 6060:return le+"box-"+J(t,"-grow","")+le+t+be+J(t,"grow","positive")+t;case 4554:return le+J(t,/([^-])(transform)/g,"$1"+le+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,le+"$1"),/(image-set)/,le+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,le+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,le+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+le+t+t;case 4200:if(!Pn(t,/flex-|baseline/))return be+"grid-column-align"+Vi(t,e)+t;break;case 2592:case 3360:return be+J(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Pn(r.props,/grid-\w+-end/)})?~zo(t+(n=n[e].value),"span",0)?t:be+J(t,"-start","")+t+be+"grid-row-span:"+(~zo(n,"span",0)?Pn(n,/\d+/):+Pn(n,/\d+/)-+Pn(t,/\d+/))+";":be+J(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Pn(r.props,/grid-\w+-start/)})?t:be+J(J(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,le+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(t)-1-e>6)switch(et(t,e+1)){case 109:if(et(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+le+"$2-$3$1"+Ks+(et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~zo(t,"stretch",0)?P1(J(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return J(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,a,c,u,h){return be+i+":"+s+h+(a?be+i+"-span:"+(c?u:+u-+s)+h:"")+t});case 4949:if(et(t,e+6)===121)return J(t,":",":"+le)+t;break;case 6444:switch(et(t,et(t,14)===45?18:11)){case 120:return J(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+le+(et(t,14)===45?"inline-":"")+"box$3$1"+le+"$2$3$1"+be+"$2box$3")+t;case 100:return J(t,":",":"+be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(t,"scroll-","scroll-snap-")+t}return t}function vc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function ZC(t,e,n,r){switch(t.type){case FC:if(t.children.length)break;case $C:case Ad:return t.return=t.return||t.value;case E1:return"";case I1:return t.return=t.value+"{"+vc(t.children,r)+"}";case Sl:if(!pn(t.value=t.props.join(",")))return""}return pn(n=vc(t.children,r))?t.return=t.value+"{"+n+"}":""}function eP(t){var e=A1(t);return function(n,r,i,s){for(var a="",c=0;c<e;c++)a+=t[c](n,r,i,s)||"";return a}}function tP(t){return function(e){e.root||(e=e.return)&&t(e)}}function nP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ad:t.return=P1(t.value,t.length,n);return;case I1:return vc([nr(t,{value:J(t.value,"@","@"+le)})],r);case Sl:if(t.length)return zC(n=t.props,function(i){switch(Pn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fi(nr(t,{props:[J(i,/:(read-\w+)/,":"+Ks+"$1")]})),fi(nr(t,{props:[i]})),dh(t,{props:Fm(n,r)});break;case"::placeholder":fi(nr(t,{props:[J(i,/:(plac\w+)/,":"+le+"input-$1")]})),fi(nr(t,{props:[J(i,/:(plac\w+)/,":"+Ks+"$1")]})),fi(nr(t,{props:[J(i,/:(plac\w+)/,be+"input-$1")]})),fi(nr(t,{props:[i]})),dh(t,{props:Fm(n,r)});break}return""})}}var kt={},$i=typeof process<"u"&&kt!==void 0&&(kt.REACT_APP_SC_ATTR||kt.SC_ATTR)||"data-styled",R1="active",k1="data-styled-version",Rl="6.1.12",Pd=`/*!sc*/
`,yc=typeof window<"u"&&"HTMLElement"in window,rP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kt.REACT_APP_SC_DISABLE_SPEEDY!==""?kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kt!==void 0&&kt.SC_DISABLE_SPEEDY!==void 0&&kt.SC_DISABLE_SPEEDY!==""&&kt.SC_DISABLE_SPEEDY!=="false"&&kt.SC_DISABLE_SPEEDY),kl=Object.freeze([]),Fi=Object.freeze({});function iP(t,e,n){return n===void 0&&(n=Fi),t.theme!==n.theme&&t.theme||e||n.theme}var N1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aP=/(^-|-$)/g;function Bm(t){return t.replace(sP,"-").replace(aP,"")}var oP=/(a)(d)/gi,go=52,Hm=function(t){return String.fromCharCode(t+(t>25?39:97))};function mh(t){var e,n="";for(e=Math.abs(t);e>go;e=e/go|0)n=Hm(e%go)+n;return(Hm(e%go)+n).replace(oP,"$1-$2")}var ku,j1=5381,xi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},O1=function(t){return xi(j1,t)};function cP(t){return mh(O1(t)>>>0)}function lP(t){return t.displayName||t.name||"Component"}function Nu(t){return typeof t=="string"&&!0}var D1=typeof Symbol=="function"&&Symbol.for,M1=D1?Symbol.for("react.memo"):60115,uP=D1?Symbol.for("react.forward_ref"):60112,hP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},V1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fP=((ku={})[uP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ku[M1]=V1,ku);function qm(t){return("type"in(e=t)&&e.type.$$typeof)===M1?V1:"$$typeof"in t?fP[t.$$typeof]:hP;var e}var pP=Object.defineProperty,mP=Object.getOwnPropertyNames,Wm=Object.getOwnPropertySymbols,gP=Object.getOwnPropertyDescriptor,vP=Object.getPrototypeOf,Km=Object.prototype;function L1(t,e,n){if(typeof e!="string"){if(Km){var r=vP(e);r&&r!==Km&&L1(t,r,n)}var i=mP(e);Wm&&(i=i.concat(Wm(e)));for(var s=qm(t),a=qm(e),c=0;c<i.length;++c){var u=i[c];if(!(u in dP||n&&n[u]||a&&u in a||s&&u in s)){var h=gP(e,u);try{pP(t,u,h)}catch{}}}}return t}function Ui(t){return typeof t=="function"}function Rd(t){return typeof t=="object"&&"styledComponentId"in t}function Or(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Gm(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function ua(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function gh(t,e,n){if(n===void 0&&(n=!1),!n&&!ua(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=gh(t[r],e[r]);else if(ua(e))for(var r in e)t[r]=gh(t[r],e[r]);return t}function kd(t,e){Object.defineProperty(t,"toString",{value:e})}function Va(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Va(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var a=i;a<s;a++)this.groupSizes[a]=0}for(var c=this.indexOfGroup(e+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(c,n[a])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,a=i;a<s;a++)n+="".concat(this.tag.getRule(a)).concat(Pd);return n},t}(),qo=new Map,_c=new Map,Wo=1,vo=function(t){if(qo.has(t))return qo.get(t);for(;_c.has(Wo);)Wo++;var e=Wo++;return qo.set(t,e),_c.set(e,t),e},_P=function(t,e){Wo=e+1,qo.set(t,e),_c.set(e,t)},bP="style[".concat($i,"][").concat(k1,'="').concat(Rl,'"]'),wP=new RegExp("^".concat($i,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xP=function(t,e,n){for(var r,i=n.split(","),s=0,a=i.length;s<a;s++)(r=i[s])&&t.registerName(e,r)},EP=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Pd),i=[],s=0,a=r.length;s<a;s++){var c=r[s].trim();if(c){var u=c.match(wP);if(u){var h=0|parseInt(u[1],10),f=u[2];h!==0&&(_P(f,h),xP(t,f,u[3]),t.getTag().insertRules(h,i)),i.length=0}else i.push(c)}}},Ym=function(t){for(var e=document.querySelectorAll(bP),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute($i)!==R1&&(EP(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function IP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(c){var u=Array.from(c.querySelectorAll("style[".concat($i,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute($i,R1),r.setAttribute(k1,Rl);var a=IP();return a&&r.setAttribute("nonce",a),n.insertBefore(r,s),r},TP=function(){function t(e){this.element=$1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var a=r[i];if(a.ownerNode===n)return a}throw Va(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),SP=function(){function t(e){this.element=$1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),AP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Qm=yc,CP={isServer:!yc,useCSSOMInjection:!rP},F1=function(){function t(e,n,r){e===void 0&&(e=Fi),n===void 0&&(n={});var i=this;this.options=Tt(Tt({},CP),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&yc&&Qm&&(Qm=!1,Ym(this)),kd(this,function(){return function(s){for(var a=s.getTag(),c=a.length,u="",h=function(m){var g=function(N){return _c.get(N)}(m);if(g===void 0)return"continue";var w=s.names.get(g),E=a.getGroup(m);if(w===void 0||!w.size||E.length===0)return"continue";var I="".concat($i,".g").concat(m,'[id="').concat(g,'"]'),S="";w!==void 0&&w.forEach(function(N){N.length>0&&(S+="".concat(N,","))}),u+="".concat(E).concat(I,'{content:"').concat(S,'"}').concat(Pd)},f=0;f<c;f++)h(f);return u}(i)})}return t.registerId=function(e){return vo(e)},t.prototype.rehydrate=function(){!this.server&&yc&&Ym(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Tt(Tt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new AP(i):r?new TP(i):new SP(i)}(this.options),new yP(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(vo(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(vo(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(vo(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),PP=/&/g,RP=/^\s*\/\/.*$/gm;function U1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=U1(n.children,e)),n})}function kP(t){var e,n,r,i=Fi,s=i.options,a=s===void 0?Fi:s,c=i.plugins,u=c===void 0?kl:c,h=function(g,w,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(e):g},f=u.slice();f.push(function(g){g.type===Sl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(PP,n).replace(r,h))}),a.prefix&&f.push(nP),f.push(ZC);var m=function(g,w,E,I){w===void 0&&(w=""),E===void 0&&(E=""),I===void 0&&(I="&"),e=I,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(RP,""),N=XC(E||w?"".concat(E," ").concat(w," { ").concat(S," }"):S);a.namespace&&(N=U1(N,a.namespace));var k=[];return vc(N,eP(f.concat(tP(function(O){return k.push(O)})))),k};return m.hash=u.length?u.reduce(function(g,w){return w.name||Va(15),xi(g,w.name)},j1).toString():"",m}var NP=new F1,vh=kP(),z1=Ot.createContext({shouldForwardProp:void 0,styleSheet:NP,stylis:vh});z1.Consumer;Ot.createContext(void 0);function Xm(){return C.useContext(z1)}var jP=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=vh);var a=r.name+s.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,s(r.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,kd(this,function(){throw Va(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=vh),this.name+e.hash},t}(),OP=function(t){return t>="A"&&t<="Z"};function Jm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;OP(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var B1=function(t){return t==null||t===!1||t===""},H1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!B1(s)&&(Array.isArray(s)&&s.isCss||Ui(s)?r.push("".concat(Jm(i),":"),s,";"):ua(s)?r.push.apply(r,hc(hc(["".concat(i," {")],H1(s),!1),["}"],!1)):r.push("".concat(Jm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ny||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $r(t,e,n,r){if(B1(t))return[];if(Rd(t))return[".".concat(t.styledComponentId)];if(Ui(t)){if(!Ui(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return $r(i,e,n,r)}var s;return t instanceof jP?n?(t.inject(n,r),[t.getName(r)]):[t]:ua(t)?H1(t):Array.isArray(t)?Array.prototype.concat.apply(kl,t.map(function(a){return $r(a,e,n,r)})):[t.toString()]}function DP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ui(n)&&!Rd(n))return!1}return!0}var MP=O1(Rl),VP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DP(e),this.componentId=n,this.baseHash=xi(MP,n),this.baseStyle=r,F1.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Or(i,this.staticRulesId);else{var s=Gm($r(this.rules,e,n,r)),a=mh(xi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,a)){var c=r(s,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,c)}i=Or(i,a),this.staticRulesId=a}else{for(var u=xi(this.baseHash,r.hash),h="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")h+=m;else if(m){var g=Gm($r(m,e,n,r));u=xi(u,g+f),h+=g}}if(h){var w=mh(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(h,".".concat(w),void 0,this.componentId)),i=Or(i,w)}}return i},t}(),q1=Ot.createContext(void 0);q1.Consumer;var ju={};function LP(t,e,n){var r=Rd(t),i=t,s=!Nu(t),a=e.attrs,c=a===void 0?kl:a,u=e.componentId,h=u===void 0?function(D,V){var L=typeof D!="string"?"sc":Bm(D);ju[L]=(ju[L]||0)+1;var y="".concat(L,"-").concat(cP(Rl+L+ju[L]));return V?"".concat(V,"-").concat(y):y}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(D){return Nu(D)?"styled.".concat(D):"Styled(".concat(lP(D),")")}(t):f,g=e.displayName&&e.componentId?"".concat(Bm(e.displayName),"-").concat(e.componentId):e.componentId||h,w=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,E=e.shouldForwardProp;if(r&&i.shouldForwardProp){var I=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;E=function(D,V){return I(D,V)&&S(D,V)}}else E=I}var N=new VP(n,g,r?i.componentStyle:void 0);function k(D,V){return function(L,y,_){var b=L.attrs,T=L.componentStyle,A=L.defaultProps,P=L.foldedComponentIds,x=L.styledComponentId,ye=L.target,nt=Ot.useContext(q1),gt=Xm(),vt=L.shouldForwardProp||gt.shouldForwardProp,He=iP(y,nt,A)||Fi,yt=function(_t,Yt,Qt){for(var Sn,We=Tt(Tt({},Yt),{className:void 0,theme:Qt}),un=0;un<_t.length;un+=1){var Xt=Ui(Sn=_t[un])?Sn(We):Sn;for(var Et in Xt)We[Et]=Et==="className"?Or(We[Et],Xt[Et]):Et==="style"?Tt(Tt({},We[Et]),Xt[Et]):Xt[Et]}return Yt.className&&(We.className=Or(We.className,Yt.className)),We}(b,y,He),ln=yt.as||ye,Tn={};for(var qe in yt)yt[qe]===void 0||qe[0]==="$"||qe==="as"||qe==="theme"&&yt.theme===He||(qe==="forwardedAs"?Tn.as=yt.forwardedAs:vt&&!vt(qe,ln)||(Tn[qe]=yt[qe]));var je=function(_t,Yt){var Qt=Xm(),Sn=_t.generateAndInjectStyles(Yt,Qt.styleSheet,Qt.stylis);return Sn}(T,yt),At=Or(P,x);return je&&(At+=" "+je),yt.className&&(At+=" "+yt.className),Tn[Nu(ln)&&!N1.has(ln)?"class":"className"]=At,Tn.ref=_,C.createElement(ln,Tn)}(O,D,V)}k.displayName=m;var O=Ot.forwardRef(k);return O.attrs=w,O.componentStyle=N,O.displayName=m,O.shouldForwardProp=E,O.foldedComponentIds=r?Or(i.foldedComponentIds,i.styledComponentId):"",O.styledComponentId=g,O.target=r?i.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(V){for(var L=[],y=1;y<arguments.length;y++)L[y-1]=arguments[y];for(var _=0,b=L;_<b.length;_++)gh(V,b[_],!0);return V}({},i.defaultProps,D):D}}),kd(O,function(){return".".concat(O.styledComponentId)}),s&&L1(O,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function Zm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var eg=function(t){return Object.assign(t,{isCss:!0})};function $P(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ui(t)||ua(t))return eg($r(Zm(kl,hc([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?$r(r):eg($r(Zm(r,e)))}function yh(t,e,n){if(n===void 0&&(n=Fi),!e)throw Va(1,e);var r=function(i){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return t(e,n,$P.apply(void 0,hc([i],s,!1)))};return r.attrs=function(i){return yh(t,e,Tt(Tt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yh(t,e,Tt(Tt({},n),i))},r}var W1=function(t){return yh(LP,t)},Nl=W1;N1.forEach(function(t){Nl[t]=W1(t)});const FP="_main_14mlp_1",UP="_heading_14mlp_25",zP="_head1_14mlp_29",BP="_head2_14mlp_37",HP="_doctor_form_14mlp_49",qP="_error_14mlp_73",WP="_name_14mlp_85",KP="_btn1_14mlp_115",GP="_login_14mlp_135",Zt={main:FP,heading:UP,head1:zP,head2:BP,doctor_form:HP,error:qP,name:WP,btn1:KP,login:GP};function YP(){const[t,e]=C.useState({name:"",id:"",email:"",password:""}),[n,r]=C.useState(null),i=c=>{const{name:u,value:h}=c.target;e({...t,[u]:h}),r(null)},s=Xr(),a=async c=>{if(c.preventDefault(),!t.email||!t.password){r("Please enter both email and password.");return}try{await l1(w1,t.email,t.password),s("/doctor")}catch(u){console.error("Error signing in:",u),r("Invalid credentials. Please check your email and password.")}};return l.jsxs("div",{className:Zt.main,children:[l.jsxs("div",{className:Zt.heading,children:[l.jsx("p",{className:Zt.head1,children:"Welcome Back, Doctor!"}),l.jsx("p",{className:Zt.head2,children:"Your care matters. Log in to access your tools and resources."})]}),l.jsxs("form",{onSubmit:a,className:Zt.doctor_form,children:[l.jsxs("div",{className:Zt.name,children:[l.jsx("span",{children:"Doctor Name"}),l.jsx("input",{type:"text",name:"name",value:t.name,onChange:i})]}),l.jsxs("div",{className:Zt.name,children:[l.jsx("span",{children:"Email"}),l.jsx("input",{type:"email",name:"email",value:t.email,onChange:i})]}),l.jsxs("div",{className:Zt.name,children:[l.jsx("span",{children:"Password"}),l.jsx("input",{type:"password",name:"password",value:t.password,onChange:i}),l.jsx("span",{className:Zt.error,children:n})]}),l.jsx("button",{type:"submit",className:Zt.btn1,children:"Sign in"})]}),l.jsx("div",{className:Zt.login,children:l.jsxs("p",{children:["Don`t have an account? ",l.jsx(De,{to:"/doctorsign",style:{textDecoration:"none"},children:"Sign up for free"})]})})]})}const QP="_main_kfz44_1",XP="_heading_kfz44_25",JP="_head1_kfz44_31",ZP="_head2_kfz44_41",eR="_patient_form_kfz44_53",tR="_error_kfz44_77",nR="_box_kfz44_89",rR="_btn1_kfz44_121",iR="_btn2_kfz44_141",sR="_login_kfz44_161",en={main:QP,heading:XP,head1:JP,head2:ZP,patient_form:eR,error:tR,box:nR,btn1:rR,btn2:iR,login:sR};function aR(){const[t,e]=C.useState({email:"",password:""}),[n,r]=C.useState(null),i=c=>{const{name:u,value:h}=c.target;e({...t,[u]:h}),r(null)},s=Xr(),a=async c=>{if(c.preventDefault(),!t.email||!t.password){r("Please enter both email and password.");return}try{await l1(x1,t.email,t.password),s("/user")}catch(u){console.error("Error signing in:",u),r("Invalid credentials. Please check your email and password.")}};return l.jsxs("div",{className:en.main,children:[l.jsxs("div",{className:en.heading,children:[l.jsx("p",{className:en.head1,children:"Welcome back"}),l.jsx("p",{className:en.head2,children:"Welcome back! Please enter your details"})]}),l.jsxs("form",{onSubmit:a,className:en.patient_form,children:[l.jsxs("div",{className:en.box,children:[l.jsx("span",{children:"Email"}),l.jsx("input",{type:"email",name:"email",value:t.email,onChange:i})]}),l.jsxs("div",{className:en.box,children:[l.jsx("span",{children:"Password"}),l.jsx("input",{type:"password",name:"password",value:t.password,onChange:i}),n&&l.jsx("span",{className:en.error,children:n})]}),l.jsx("button",{type:"submit",className:en.btn1,children:"Sign in"}),l.jsx("button",{type:"button",className:en.btn2,children:"Sign in with Google"})]}),l.jsx("div",{className:en.login,children:l.jsxs("p",{children:["Don`t have an account? ",l.jsx(De,{to:"/usersign",style:{textDecoration:"none"},children:"Sign up for free"})]})})]})}function oR(){const[t,e]=C.useState(!0),n=()=>e(!1),r=()=>e(!0);return l.jsx(cR,{children:l.jsxs(lR,{children:[l.jsx("img",{src:LC,alt:"Login"}),l.jsxs(uR,{isDoctorLogin:t,children:[l.jsx("div",{className:"patient",children:l.jsx(xt,{variant:"contained",color:"success",onClick:n,children:"Patient"})}),l.jsx("div",{className:"doctor",children:l.jsx(xt,{variant:"contained",color:"success",onClick:r,children:"Doctor"})})]}),t?l.jsx(YP,{}):l.jsx(aR,{})]})})}const cR=Nl.div`
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42A5F5;

    @media screen and (max-width: 500px) {
        background-color: #42A5F5;
    }
    
    @media screen and (max-width: 300px) {
        background-color: red;
    }
`,lR=Nl.div`
    height: 85vh;
    width: 90%;
    border-radius: 0.8em;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    img {
        height: 85vh;
        width: 100%;
        border-radius: 0.8em;
    }

    @media screen and (max-width: 500px) {
        height: 100%;
        width: 100%;
        border-radius: 0;
        
        img {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }

    @media screen and (max-width: 340px) {
        height: 100vh;
        width: 85%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`,uR=Nl.div.withConfig({shouldForwardProp:t=>t!=="isDoctorLogin"})`
    position: absolute;
    top: 3em;
    left: 7.6em;
    width: 24em;
    background-color: white;
    height: 3.7em;
    display: flex;
    gap: 0.5em;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 0.9em;

    div {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            height: 75%;
            width: 80%;
        }
    }

    .patient {
        background-color: ${t=>t.isDoctorLogin?"transparent":"lightgreen"};
    }

    .doctor {
        background-color: ${t=>t.isDoctorLogin?"lightgreen":"transparent"};
    }

    @media screen and (max-width: 500px) {
        top: 5em;
        left: 4em;
        width: 19em;
        height: 3em;

        div {
            height: 100%;

            button {
                height: 55%;
            }
        }
    }
`,rs="/Hospital-System/ABOUT/section-img.png",hR="_main_heading_97k8w_1",dR="_head_97k8w_25",fR="_para_97k8w_39",pR="_main_hos_97k8w_135",mR="_box_97k8w_163",gR="_symbol_97k8w_187",vR="_logo_97k8w_217",yR="_heading_logo_97k8w_249",_R="_about_hos_97k8w_257",Ke={main_heading:hR,head:dR,para:fR,main_hos:pR,box:mR,symbol:gR,logo:vR,heading_logo:yR,about_hos:_R};function bR(){return l.jsxs("div",{className:Ke.main_heading,children:[l.jsx("p",{className:Ke.head,children:"We Are Always Ready To Help You & Your Family"}),l.jsx("img",{src:rs,alt:""}),l.jsx("div",{className:Ke.para,children:l.jsx("p",{children:"To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear. is not valued until sickness comes. Remember to take care of yourself. you cannot pour from an empty cup."})})]})}function tg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tg(Object(n),!0).forEach(function(r){Qe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bc(t){"@babel/helpers - typeof";return bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bc(t)}function wR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xR(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ER(t,e,n){return e&&xR(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nd(t,e){return TR(t)||AR(t,e)||K1(t,e)||PR()}function La(t){return IR(t)||SR(t)||K1(t)||CR()}function IR(t){if(Array.isArray(t))return _h(t)}function TR(t){if(Array.isArray(t))return t}function SR(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function AR(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,c;try{for(n=n.call(t);!(i=(a=n.next()).done)&&(r.push(a.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,c=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw c}}return r}}function K1(t,e){if(t){if(typeof t=="string")return _h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _h(t,e)}}function _h(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function CR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ng=function(){},jd={},G1={},Y1=null,Q1={mark:ng,measure:ng};try{typeof window<"u"&&(jd=window),typeof document<"u"&&(G1=document),typeof MutationObserver<"u"&&(Y1=MutationObserver),typeof performance<"u"&&(Q1=performance)}catch{}var RR=jd.navigator||{},rg=RR.userAgent,ig=rg===void 0?"":rg,gr=jd,Ee=G1,sg=Y1,yo=Q1;gr.document;var Hn=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",X1=~ig.indexOf("MSIE")||~ig.indexOf("Trident/"),_o,bo,wo,xo,Eo,Vn="___FONT_AWESOME___",bh=16,J1="fa",Z1="svg-inline--fa",qr="data-fa-i2svg",wh="data-fa-pseudo-element",kR="data-fa-pseudo-element-pending",Od="data-prefix",Dd="data-icon",ag="fontawesome-i2svg",NR="async",jR=["HTML","HEAD","STYLE","SCRIPT"],e_=function(){try{return!0}catch{return!1}}(),we="classic",ke="sharp",Md=[we,ke];function $a(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var ha=$a((_o={},Qe(_o,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Qe(_o,ke,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_o)),da=$a((bo={},Qe(bo,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Qe(bo,ke,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),bo)),fa=$a((wo={},Qe(wo,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Qe(wo,ke,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wo)),OR=$a((xo={},Qe(xo,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Qe(xo,ke,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xo)),DR=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,t_="fa-layers-text",MR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,VR=$a((Eo={},Qe(Eo,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Qe(Eo,ke,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Eo)),n_=[1,2,3,4,5,6,7,8,9,10],LR=n_.concat([11,12,13,14,15,16,17,18,19,20]),$R=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pa=new Set;Object.keys(da[we]).map(pa.add.bind(pa));Object.keys(da[ke]).map(pa.add.bind(pa));var FR=[].concat(Md,La(pa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dr.GROUP,Dr.SWAP_OPACITY,Dr.PRIMARY,Dr.SECONDARY]).concat(n_.map(function(t){return"".concat(t,"x")})).concat(LR.map(function(t){return"w-".concat(t)})),Gs=gr.FontAwesomeConfig||{};function UR(t){var e=Ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ee&&typeof Ee.querySelector=="function"){var BR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];BR.forEach(function(t){var e=Nd(t,2),n=e[0],r=e[1],i=zR(UR(n));i!=null&&(Gs[r]=i)})}var r_={styleDefault:"solid",familyDefault:"classic",cssPrefix:J1,replacementClass:Z1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gs.familyPrefix&&(Gs.cssPrefix=Gs.familyPrefix);var zi=U(U({},r_),Gs);zi.autoReplaceSvg||(zi.observeMutations=!1);var H={};Object.keys(r_).forEach(function(t){Object.defineProperty(H,t,{enumerable:!0,set:function(n){zi[t]=n,Ys.forEach(function(r){return r(H)})},get:function(){return zi[t]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){zi.cssPrefix=e,Ys.forEach(function(n){return n(H)})},get:function(){return zi.cssPrefix}});gr.FontAwesomeConfig=H;var Ys=[];function HR(t){return Ys.push(t),function(){Ys.splice(Ys.indexOf(t),1)}}var Zn=bh,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qR(t){if(!(!t||!Hn)){var e=Ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return Ee.head.insertBefore(e,r),t}}var WR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ma(){for(var t=12,e="";t-- >0;)e+=WR[Math.random()*62|0];return e}function is(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vd(t){return t.classList?is(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function i_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function KR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(i_(t[n]),'" ')},"").trim()}function jl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ld(t){return t.size!==vn.size||t.x!==vn.x||t.y!==vn.y||t.rotate!==vn.rotate||t.flipX||t.flipY}function GR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(a," ").concat(c)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:h}}function YR(t){var e=t.transform,n=t.width,r=n===void 0?bh:n,i=t.height,s=i===void 0?bh:i,a=t.startCentered,c=a===void 0?!1:a,u="";return c&&X1?u+="translate(".concat(e.x/Zn-r/2,"em, ").concat(e.y/Zn-s/2,"em) "):c?u+="translate(calc(-50% + ".concat(e.x/Zn,"em), calc(-50% + ").concat(e.y/Zn,"em)) "):u+="translate(".concat(e.x/Zn,"em, ").concat(e.y/Zn,"em) "),u+="scale(".concat(e.size/Zn*(e.flipX?-1:1),", ").concat(e.size/Zn*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var QR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function s_(){var t=J1,e=Z1,n=H.cssPrefix,r=H.replacementClass,i=QR;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(c,".".concat(r))}return i}var og=!1;function Ou(){H.autoAddCss&&!og&&(qR(s_()),og=!0)}var XR={mixout:function(){return{dom:{css:s_,insertCss:Ou}}},hooks:function(){return{beforeDOMElementCreation:function(){Ou()},beforeI2svg:function(){Ou()}}}},Ln=gr||{};Ln[Vn]||(Ln[Vn]={});Ln[Vn].styles||(Ln[Vn].styles={});Ln[Vn].hooks||(Ln[Vn].hooks={});Ln[Vn].shims||(Ln[Vn].shims=[]);var nn=Ln[Vn],a_=[],JR=function t(){Ee.removeEventListener("DOMContentLoaded",t),wc=1,a_.map(function(e){return e()})},wc=!1;Hn&&(wc=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),wc||Ee.addEventListener("DOMContentLoaded",JR));function ZR(t){Hn&&(wc?setTimeout(t,0):a_.push(t))}function Fa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?i_(t):"<".concat(e," ").concat(KR(r),">").concat(s.map(Fa).join(""),"</").concat(e,">")}function cg(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Du=function(e,n,r,i){var s=Object.keys(e),a=s.length,c=n,u,h,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<a;u++)h=s[u],f=c(f,e[h],h,e);return f};function ek(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function xh(t){var e=ek(t);return e.length===1?e[0].toString(16):null}function tk(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function lg(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Eh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=lg(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,lg(e)):nn.styles[t]=U(U({},nn.styles[t]||{}),s),t==="fas"&&Eh("fa",e)}var Io,To,So,Ei=nn.styles,nk=nn.shims,rk=(Io={},Qe(Io,we,Object.values(fa[we])),Qe(Io,ke,Object.values(fa[ke])),Io),$d=null,o_={},c_={},l_={},u_={},h_={},ik=(To={},Qe(To,we,Object.keys(ha[we])),Qe(To,ke,Object.keys(ha[ke])),To);function sk(t){return~FR.indexOf(t)}function ak(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!sk(i)?i:null}var d_=function(){var e=function(s){return Du(Ei,function(a,c,u){return a[u]=Du(c,s,{}),a},{})};o_=e(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var c=s[2].filter(function(u){return typeof u=="number"});c.forEach(function(u){i[u.toString(16)]=a})}return i}),c_=e(function(i,s,a){if(i[a]=a,s[2]){var c=s[2].filter(function(u){return typeof u=="string"});c.forEach(function(u){i[u]=a})}return i}),h_=e(function(i,s,a){var c=s[2];return i[a]=a,c.forEach(function(u){i[u]=a}),i});var n="far"in Ei||H.autoFetchSvg,r=Du(nk,function(i,s){var a=s[0],c=s[1],u=s[2];return c==="far"&&!n&&(c="fas"),typeof a=="string"&&(i.names[a]={prefix:c,iconName:u}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:c,iconName:u}),i},{names:{},unicodes:{}});l_=r.names,u_=r.unicodes,$d=Ol(H.styleDefault,{family:H.familyDefault})};HR(function(t){$d=Ol(t.styleDefault,{family:H.familyDefault})});d_();function Fd(t,e){return(o_[t]||{})[e]}function ok(t,e){return(c_[t]||{})[e]}function Mr(t,e){return(h_[t]||{})[e]}function f_(t){return l_[t]||{prefix:null,iconName:null}}function ck(t){var e=u_[t],n=Fd("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vr(){return $d}var Ud=function(){return{prefix:null,iconName:null,rest:[]}};function Ol(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=ha[r][t],s=da[r][t]||da[r][i],a=t in nn.styles?t:null;return s||a||null}var ug=(So={},Qe(So,we,Object.keys(fa[we])),Qe(So,ke,Object.keys(fa[ke])),So);function Dl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Qe(e,we,"".concat(H.cssPrefix,"-").concat(we)),Qe(e,ke,"".concat(H.cssPrefix,"-").concat(ke)),e),a=null,c=we;(t.includes(s[we])||t.some(function(h){return ug[we].includes(h)}))&&(c=we),(t.includes(s[ke])||t.some(function(h){return ug[ke].includes(h)}))&&(c=ke);var u=t.reduce(function(h,f){var m=ak(H.cssPrefix,f);if(Ei[f]?(f=rk[c].includes(f)?OR[c][f]:f,a=f,h.prefix=f):ik[c].indexOf(f)>-1?(a=f,h.prefix=Ol(f,{family:c})):m?h.iconName=m:f!==H.replacementClass&&f!==s[we]&&f!==s[ke]&&h.rest.push(f),!i&&h.prefix&&h.iconName){var g=a==="fa"?f_(h.iconName):{},w=Mr(h.prefix,h.iconName);g.prefix&&(a=null),h.iconName=g.iconName||w||h.iconName,h.prefix=g.prefix||h.prefix,h.prefix==="far"&&!Ei.far&&Ei.fas&&!H.autoFetchSvg&&(h.prefix="fas")}return h},Ud());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&c===ke&&(Ei.fass||H.autoFetchSvg)&&(u.prefix="fass",u.iconName=Mr(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||a==="fa")&&(u.prefix=vr()||"fas"),u}var lk=function(){function t(){wR(this,t),this.definitions={}}return ER(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(c){n.definitions[c]=U(U({},n.definitions[c]||{}),a[c]),Eh(c,a[c]);var u=fa[we][c];u&&Eh(u,a[c]),d_()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],c=a.prefix,u=a.iconName,h=a.icon,f=h[2];n[c]||(n[c]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[c][m]=h)}),n[c][u]=h}),n}}]),t}(),hg=[],Ii={},Ni={},uk=Object.keys(Ni);function hk(t,e){var n=e.mixoutsTo;return hg=t,Ii={},Object.keys(Ni).forEach(function(r){uk.indexOf(r)===-1&&delete Ni[r]}),hg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),bc(i[a])==="object"&&Object.keys(i[a]).forEach(function(c){n[a]||(n[a]={}),n[a][c]=i[a][c]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Ii[a]||(Ii[a]=[]),Ii[a].push(s[a])})}r.provides&&r.provides(Ni)}),n}function Ih(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ii[t]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(r))}),e}function Wr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ii[t]||[];i.forEach(function(s){s.apply(null,n)})}function $n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ni[t]?Ni[t].apply(null,e):void 0}function Th(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||vr();if(e)return e=Mr(n,e)||e,cg(p_.definitions,n,e)||cg(nn.styles,n,e)}var p_=new lk,dk=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Wr("noAuto")},fk={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hn?(Wr("beforeI2svg",e),$n("pseudoElements2svg",e),$n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,ZR(function(){mk({autoReplaceSvgRoot:n}),Wr("watch",e)})}},pk={icon:function(e){if(e===null)return null;if(bc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Mr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ol(e[0]);return{prefix:r,iconName:Mr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(H.cssPrefix,"-"))>-1||e.match(DR))){var i=Dl(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||vr(),iconName:Mr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=vr();return{prefix:s,iconName:Mr(s,e)||e}}}},Lt={noAuto:dk,config:H,dom:fk,parse:pk,library:p_,findIconDefinition:Th,toHtml:Fa},mk=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ee:n;(Object.keys(nn.styles).length>0||H.autoFetchSvg)&&Hn&&H.autoReplaceSvg&&Lt.dom.i2svg({node:r})};function Ml(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Hn){var r=Ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function gk(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,a=t.transform;if(Ld(a)&&n.found&&!r.found){var c=n.width,u=n.height,h={x:c/u/2,y:.5};i.style=jl(U(U({},s),{},{"transform-origin":"".concat(h.x+a.x/16,"em ").concat(h.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function vk(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,a=s===!0?"".concat(e,"-").concat(H.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:a}),children:r}]}]}function zd(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,a=t.transform,c=t.symbol,u=t.title,h=t.maskId,f=t.titleId,m=t.extra,g=t.watchable,w=g===void 0?!1:g,E=r.found?r:n,I=E.width,S=E.height,N=i==="fak",k=[H.replacementClass,s?"".concat(H.cssPrefix,"-").concat(s):""].filter(function(b){return m.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(m.classes).join(" "),O={children:[],attributes:U(U({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(S)})},D=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/S*16*.0625,"em")}:{};w&&(O.attributes[qr]=""),u&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||ma())},children:[u]}),delete O.attributes.title);var V=U(U({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:h,transform:a,symbol:c,styles:U(U({},D),m.styles)}),L=r.found&&n.found?$n("generateAbstractMask",V)||{children:[],attributes:{}}:$n("generateAbstractIcon",V)||{children:[],attributes:{}},y=L.children,_=L.attributes;return V.children=y,V.attributes=_,c?vk(V):gk(V)}function dg(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,a=t.extra,c=t.watchable,u=c===void 0?!1:c,h=U(U(U({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});u&&(h[qr]="");var f=U({},a.styles);Ld(i)&&(f.transform=YR({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var m=jl(f);m.length>0&&(h.style=m);var g=[];return g.push({tag:"span",attributes:h,children:[e]}),s&&g.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),g}function yk(t){var e=t.content,n=t.title,r=t.extra,i=U(U(U({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=jl(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Mu=nn.styles;function Sh(t){var e=t[0],n=t[1],r=t.slice(4),i=Nd(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat(Dr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Dr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat(Dr.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:a}}var _k={found:!1,width:512,height:512};function bk(t,e){!e_&&!H.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ah(t,e){var n=e;return e==="fa"&&H.styleDefault!==null&&(e=vr()),new Promise(function(r,i){if($n("missingIconAbstract"),n==="fa"){var s=f_(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mu[e]&&Mu[e][t]){var a=Mu[e][t];return r(Sh(a))}bk(t,e),r(U(U({},_k),{},{icon:H.showMissingIcons&&t?$n("missingIconAbstract")||{}:{}}))})}var fg=function(){},Ch=H.measurePerformance&&yo&&yo.mark&&yo.measure?yo:{mark:fg,measure:fg},Fs='FA "6.5.2"',wk=function(e){return Ch.mark("".concat(Fs," ").concat(e," begins")),function(){return m_(e)}},m_=function(e){Ch.mark("".concat(Fs," ").concat(e," ends")),Ch.measure("".concat(Fs," ").concat(e),"".concat(Fs," ").concat(e," begins"),"".concat(Fs," ").concat(e," ends"))},Bd={begin:wk,end:m_},Ko=function(){};function pg(t){var e=t.getAttribute?t.getAttribute(qr):null;return typeof e=="string"}function xk(t){var e=t.getAttribute?t.getAttribute(Od):null,n=t.getAttribute?t.getAttribute(Dd):null;return e&&n}function Ek(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(H.replacementClass)}function Ik(){if(H.autoReplaceSvg===!0)return Go.replace;var t=Go[H.autoReplaceSvg];return t||Go.replace}function Tk(t){return Ee.createElementNS("http://www.w3.org/2000/svg",t)}function Sk(t){return Ee.createElement(t)}function g_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Tk:Sk:n;if(typeof t=="string")return Ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(a){i.setAttribute(a,t.attributes[a])});var s=t.children||[];return s.forEach(function(a){i.appendChild(g_(a,{ceFn:r}))}),i}function Ak(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Go={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(g_(i),n)}),n.getAttribute(qr)===null&&H.keepOriginalSource){var r=Ee.createComment(Ak(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vd(n).indexOf(H.replacementClass))return Go.replace(e);var i=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(c,u){return u===H.replacementClass||u.match(i)?c.toSvg.push(u):c.toNode.push(u),c},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(c){return Fa(c)}).join(`
`);n.setAttribute(qr,""),n.innerHTML=a}};function mg(t){t()}function v_(t,e){var n=typeof e=="function"?e:Ko;if(t.length===0)n();else{var r=mg;H.mutateApproach===NR&&(r=gr.requestAnimationFrame||mg),r(function(){var i=Ik(),s=Bd.begin("mutate");t.map(i),s(),n()})}}var Hd=!1;function y_(){Hd=!0}function Ph(){Hd=!1}var xc=null;function gg(t){if(sg&&H.observeMutations){var e=t.treeCallback,n=e===void 0?Ko:e,r=t.nodeCallback,i=r===void 0?Ko:r,s=t.pseudoElementsCallback,a=s===void 0?Ko:s,c=t.observeMutationsRoot,u=c===void 0?Ee:c;xc=new sg(function(h){if(!Hd){var f=vr();is(h).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!pg(m.addedNodes[0])&&(H.searchPseudoElements&&a(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&H.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&pg(m.target)&&~$R.indexOf(m.attributeName))if(m.attributeName==="class"&&xk(m.target)){var g=Dl(Vd(m.target)),w=g.prefix,E=g.iconName;m.target.setAttribute(Od,w||f),E&&m.target.setAttribute(Dd,E)}else Ek(m.target)&&i(m.target)})}}),Hn&&xc.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ck(){xc&&xc.disconnect()}function Pk(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],c=s.slice(1);return a&&c.length>0&&(r[a]=c.join(":").trim()),r},{})),n}function Rk(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Dl(Vd(t));return i.prefix||(i.prefix=vr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ok(i.prefix,t.innerText)||Fd(i.prefix,xh(t.innerText))),!i.iconName&&H.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function kk(t){var e=is(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return H.autoA11y&&(n?e["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||ma()):(e["aria-hidden"]="true",e.focusable="false")),e}function Nk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Rk(t),r=n.iconName,i=n.prefix,s=n.rest,a=kk(t),c=Ih("parseNodeAttributes",{},t),u=e.styleParser?Pk(t):[];return U({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:a}},c)}var jk=nn.styles;function __(t){var e=H.autoReplaceSvg==="nest"?vg(t,{styleParser:!1}):vg(t);return~e.extra.classes.indexOf(t_)?$n("generateLayersText",t,e):$n("generateSvgReplacementMutation",t,e)}var yr=new Set;Md.map(function(t){yr.add("fa-".concat(t))});Object.keys(ha[we]).map(yr.add.bind(yr));Object.keys(ha[ke]).map(yr.add.bind(yr));yr=La(yr);function yg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Hn)return Promise.resolve();var n=Ee.documentElement.classList,r=function(m){return n.add("".concat(ag,"-").concat(m))},i=function(m){return n.remove("".concat(ag,"-").concat(m))},s=H.autoFetchSvg?yr:Md.map(function(f){return"fa-".concat(f)}).concat(Object.keys(jk));s.includes("fa")||s.push("fa");var a=[".".concat(t_,":not([").concat(qr,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(qr,"])")})).join(", ");if(a.length===0)return Promise.resolve();var c=[];try{c=is(t.querySelectorAll(a))}catch{}if(c.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Bd.begin("onTree"),h=c.reduce(function(f,m){try{var g=__(m);g&&f.push(g)}catch(w){e_||w.name==="MissingIcon"&&console.error(w)}return f},[]);return new Promise(function(f,m){Promise.all(h).then(function(g){v_(g,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(function(g){u(),m(g)})})}function Ok(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;__(t).then(function(n){n&&v_([n],e)})}function Dk(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Th(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Th(i||{})),t(r,U(U({},n),{},{mask:i}))}}var Mk=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?vn:r,s=n.symbol,a=s===void 0?!1:s,c=n.mask,u=c===void 0?null:c,h=n.maskId,f=h===void 0?null:h,m=n.title,g=m===void 0?null:m,w=n.titleId,E=w===void 0?null:w,I=n.classes,S=I===void 0?[]:I,N=n.attributes,k=N===void 0?{}:N,O=n.styles,D=O===void 0?{}:O;if(e){var V=e.prefix,L=e.iconName,y=e.icon;return Ml(U({type:"icon"},e),function(){return Wr("beforeDOMElementCreation",{iconDefinition:e,params:n}),H.autoA11y&&(g?k["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(E||ma()):(k["aria-hidden"]="true",k.focusable="false")),zd({icons:{main:Sh(y),mask:u?Sh(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:L,transform:U(U({},vn),i),symbol:a,title:g,maskId:f,titleId:E,extra:{attributes:k,styles:D,classes:S}})})}},Vk={mixout:function(){return{icon:Dk(Mk)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yg,n.nodeCallback=Ok,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ee:r,s=n.callback,a=s===void 0?function(){}:s;return yg(i,a)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,c=r.prefix,u=r.transform,h=r.symbol,f=r.mask,m=r.maskId,g=r.extra;return new Promise(function(w,E){Promise.all([Ah(i,c),f.iconName?Ah(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var S=Nd(I,2),N=S[0],k=S[1];w([n,zd({icons:{main:N,mask:k},prefix:c,iconName:i,transform:u,symbol:h,maskId:m,title:s,titleId:a,extra:g,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,c=n.styles,u=jl(c);u.length>0&&(i.style=u);var h;return Ld(a)&&(h=$n("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(h||s.icon),{children:r,attributes:i}}}},Lk={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Ml({type:"layer"},function(){Wr("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(c){Array.isArray(c)?c.map(function(u){a=a.concat(u.abstract)}):a=a.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(La(s)).join(" ")},children:a}]})}}}},$k={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,c=a===void 0?[]:a,u=r.attributes,h=u===void 0?{}:u,f=r.styles,m=f===void 0?{}:f;return Ml({type:"counter",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),yk({content:n.toString(),title:s,extra:{attributes:h,styles:m,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(La(c))}})})}}}},Fk={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?vn:i,a=r.title,c=a===void 0?null:a,u=r.classes,h=u===void 0?[]:u,f=r.attributes,m=f===void 0?{}:f,g=r.styles,w=g===void 0?{}:g;return Ml({type:"text",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),dg({content:n,transform:U(U({},vn),s),title:c,extra:{attributes:m,styles:w,classes:["".concat(H.cssPrefix,"-layers-text")].concat(La(h))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,c=null,u=null;if(X1){var h=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();c=f.width/h,u=f.height/h}return H.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,dg({content:n.innerHTML,width:c,height:u,transform:s,title:i,extra:a,watchable:!0})])}}},Uk=new RegExp('"',"ug"),_g=[1105920,1112319];function zk(t){var e=t.replace(Uk,""),n=tk(e,0),r=n>=_g[0]&&n<=_g[1],i=e.length===2?e[0]===e[1]:!1;return{value:xh(i?e[0]:e),isSecondary:r||i}}function bg(t,e){var n="".concat(kR).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=is(t.children),a=s.filter(function(y){return y.getAttribute(wh)===e})[0],c=gr.getComputedStyle(t,e),u=c.getPropertyValue("font-family").match(MR),h=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(a&&!u)return t.removeChild(a),r();if(u&&f!=="none"&&f!==""){var m=c.getPropertyValue("content"),g=~["Sharp"].indexOf(u[2])?ke:we,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?da[g][u[2].toLowerCase()]:VR[g][h],E=zk(m),I=E.value,S=E.isSecondary,N=u[0].startsWith("FontAwesome"),k=Fd(w,I),O=k;if(N){var D=ck(I);D.iconName&&D.prefix&&(k=D.iconName,w=D.prefix)}if(k&&!S&&(!a||a.getAttribute(Od)!==w||a.getAttribute(Dd)!==O)){t.setAttribute(n,O),a&&t.removeChild(a);var V=Nk(),L=V.extra;L.attributes[wh]=e,Ah(k,w).then(function(y){var _=zd(U(U({},V),{},{icons:{main:y,mask:Ud()},prefix:w,iconName:O,extra:L,watchable:!0})),b=Ee.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=_.map(function(T){return Fa(T)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Bk(t){return Promise.all([bg(t,"::before"),bg(t,"::after")])}function Hk(t){return t.parentNode!==document.head&&!~jR.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function wg(t){if(Hn)return new Promise(function(e,n){var r=is(t.querySelectorAll("*")).filter(Hk).map(Bk),i=Bd.begin("searchPseudoElements");y_(),Promise.all(r).then(function(){i(),Ph(),e()}).catch(function(){i(),Ph(),n()})})}var qk={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wg,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ee:r;H.searchPseudoElements&&wg(i)}}},xg=!1,Wk={mixout:function(){return{dom:{unwatch:function(){y_(),xg=!0}}}},hooks:function(){return{bootstrap:function(){gg(Ih("mutationObserverCallbacks",{}))},noAuto:function(){Ck()},watch:function(n){var r=n.observeMutationsRoot;xg?Ph():gg(Ih("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Eg=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],c=s.slice(1).join("-");if(a&&c==="h")return r.flipX=!0,r;if(a&&c==="v")return r.flipY=!0,r;if(c=parseFloat(c),isNaN(c))return r;switch(a){case"grow":r.size=r.size+c;break;case"shrink":r.size=r.size-c;break;case"left":r.x=r.x-c;break;case"right":r.x=r.x+c;break;case"up":r.y=r.y-c;break;case"down":r.y=r.y+c;break;case"rotate":r.rotate=r.rotate+c;break}return r},n)},Kk={mixout:function(){return{parse:{transform:function(n){return Eg(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Eg(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,c={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),h="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(u," ").concat(h," ").concat(f)},g={transform:"translate(".concat(a/2*-1," -256)")},w={outer:c,inner:m,path:g};return{tag:"g",attributes:U({},w.outer),children:[{tag:"g",attributes:U({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:U(U({},r.icon.attributes),w.path)}]}]}}}},Vu={x:0,y:0,width:"100%",height:"100%"};function Ig(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gk(t){return t.tag==="g"?t.children:[t]}var Yk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Dl(i.split(" ").map(function(a){return a.trim()})):Ud();return s.prefix||(s.prefix=vr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,c=n.maskId,u=n.transform,h=s.width,f=s.icon,m=a.width,g=a.icon,w=GR({transform:u,containerWidth:m,iconWidth:h}),E={tag:"rect",attributes:U(U({},Vu),{},{fill:"white"})},I=f.children?{children:f.children.map(Ig)}:{},S={tag:"g",attributes:U({},w.inner),children:[Ig(U({tag:f.tag,attributes:U(U({},f.attributes),w.path)},I))]},N={tag:"g",attributes:U({},w.outer),children:[S]},k="mask-".concat(c||ma()),O="clip-".concat(c||ma()),D={tag:"mask",attributes:U(U({},Vu),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,N]},V={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Gk(g)},D]};return r.push(V,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(k,")")},Vu)}),{children:r,attributes:i}}}},Qk={provides:function(e){var n=!1;gr.matchMedia&&(n=gr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=U(U({},s),{},{attributeName:"opacity"}),c={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||c.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(c),r.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Xk={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Jk=[XR,Vk,Lk,$k,Fk,qk,Wk,Kk,Yk,Qk,Xk];hk(Jk,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;var Rh=Lt.parse;Lt.findIconDefinition;Lt.toHtml;var Zk=Lt.icon;Lt.layer;Lt.text;Lt.counter;function Tg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tg(Object(n),!0).forEach(function(r){Ti(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ec(t){"@babel/helpers - typeof";return Ec=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ec(t)}function Ti(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function t5(t,e){if(t==null)return{};var n=e5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function kh(t){return n5(t)||r5(t)||i5(t)||s5()}function n5(t){if(Array.isArray(t))return Nh(t)}function r5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function i5(t,e){if(t){if(typeof t=="string")return Nh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nh(t,e)}}function Nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,a=t.shake,c=t.flash,u=t.spin,h=t.spinPulse,f=t.spinReverse,m=t.pulse,g=t.fixedWidth,w=t.inverse,E=t.border,I=t.listItem,S=t.flip,N=t.size,k=t.rotation,O=t.pull,D=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":a,"fa-flash":c,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":h,"fa-pulse":m,"fa-fw":g,"fa-inverse":w,"fa-border":E,"fa-li":I,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Ti(e,"fa-".concat(N),typeof N<"u"&&N!==null),Ti(e,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),Ti(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),Ti(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(D).map(function(V){return D[V]?V:null}).filter(function(V){return V})}function o5(t){return t=t-0,t===t}function b_(t){return o5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var c5=["style"];function l5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function u5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=b_(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[l5(i)]=s:e[i]=s,e},{})}function w_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return w_(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,h){var f=e.attributes[h];switch(h){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=u5(f);break;default:h.indexOf("aria-")===0||h.indexOf("data-")===0?u.attrs[h.toLowerCase()]=f:u.attrs[b_(h)]=f}return u},{attrs:{}}),s=n.style,a=s===void 0?{}:s,c=t5(n,c5);return i.attrs.style=mn(mn({},i.attrs.style),a),t.apply(void 0,[e.tag,mn(mn({},i.attrs),c)].concat(kh(r)))}var x_=!1;try{x_=!0}catch{}function h5(){if(!x_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Sg(t){if(t&&Ec(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Rh.icon)return Rh.icon(t);if(t===null)return null;if(t&&Ec(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Lu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ti({},t,e):{}}var Ag={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ie=Ot.forwardRef(function(t,e){var n=mn(mn({},Ag),t),r=n.icon,i=n.mask,s=n.symbol,a=n.className,c=n.title,u=n.titleId,h=n.maskId,f=Sg(r),m=Lu("classes",[].concat(kh(a5(n)),kh((a||"").split(" ")))),g=Lu("transform",typeof n.transform=="string"?Rh.transform(n.transform):n.transform),w=Lu("mask",Sg(i)),E=Zk(f,mn(mn(mn(mn({},m),g),w),{},{symbol:s,title:c,titleId:u,maskId:h}));if(!E)return h5("Could not find icon",f),null;var I=E.abstract,S={ref:e};return Object.keys(n).forEach(function(N){Ag.hasOwnProperty(N)||(S[N]=n[N])}),d5(I[0],S)});ie.displayName="FontAwesomeIcon";ie.propTypes={beat:Z.bool,border:Z.bool,beatFade:Z.bool,bounce:Z.bool,className:Z.string,fade:Z.bool,flash:Z.bool,mask:Z.oneOfType([Z.object,Z.array,Z.string]),maskId:Z.string,fixedWidth:Z.bool,inverse:Z.bool,flip:Z.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Z.oneOfType([Z.object,Z.array,Z.string]),listItem:Z.bool,pull:Z.oneOf(["right","left"]),pulse:Z.bool,rotation:Z.oneOf([0,90,180,270]),shake:Z.bool,size:Z.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Z.bool,spinPulse:Z.bool,spinReverse:Z.bool,symbol:Z.oneOfType([Z.bool,Z.string]),title:Z.string,titleId:Z.string,transform:Z.oneOfType([Z.string,Z.object]),swapOpacity:Z.bool};var d5=w_.bind(null,Ot.createElement),f5={prefix:"fas",iconName:"stethoscope",icon:[576,512,[129658],"f0f1","M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},p5={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"]},m5={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},E_={prefix:"fas",iconName:"tooth",icon:[448,512,[129463],"f5c9","M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"]},g5={prefix:"fas",iconName:"truck-medical",icon:[640,512,[128657,"ambulance"],"f0f9","M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"]},v5={prefix:"fas",iconName:"money-bill",icon:[576,512,[],"f0d6","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},y5={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},_5={prefix:"fas",iconName:"heart-pulse",icon:[512,512,["heartbeat"],"f21e","M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"]},b5={prefix:"fas",iconName:"bed-pulse",icon:[640,512,["procedures"],"f487","M483.2 9.6L524 64h92c13.3 0 24 10.7 24 24s-10.7 24-24 24H512c-7.6 0-14.7-3.6-19.2-9.6L468.7 70.3l-47 99.9c-3.7 7.8-11.3 13.1-19.9 13.7s-16.9-3.4-21.7-10.6L339.2 112H216c-13.3 0-24-10.7-24-24s10.7-24 24-24H352c8 0 15.5 4 20 10.7l24.4 36.6 45.9-97.5C445.9 6.2 453.2 1 461.6 .1s16.6 2.7 21.6 9.5zM320 160h12.7l20.7 31.1c11.2 16.8 30.6 26.3 50.7 24.8s37.9-13.7 46.5-32L461.9 160H544c53 0 96 43 96 96V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V96C0 78.3 14.3 64 32 64s32 14.3 32 32V352H288V192c0-17.7 14.3-32 32-32zm-144 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"]},w5=b5,x5={prefix:"fas",iconName:"money-check-dollar",icon:[576,512,["money-check-alt"],"f53d","M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"]},E5=x5,I5={prefix:"fas",iconName:"puzzle-piece",icon:[512,512,[129513],"f12e","M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"]},T5={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},S5={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},A5={prefix:"fas",iconName:"clipboard-check",icon:[384,512,[],"f46c","M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},I_={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},C5={prefix:"fas",iconName:"user-doctor",icon:[448,512,["user-md"],"f0f0","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},T_=C5,P5={prefix:"fas",iconName:"house-chimney-medical",icon:[576,512,["clinic-medical"],"f7f2","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM272 192c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320h48c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H320V208c0-8.8-7.2-16-16-16H272z"]},R5=P5,k5={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},N5={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48H400c26.5 0 48 21.5 48 48V512H368V432c0-26.5-21.5-48-48-48s-48 21.5-48 48v80H192V48zM48 96H160V512H48c-26.5 0-48-21.5-48-48V320H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V224H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H0V144c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64H560c-8.8 0-16 7.2-16 16s7.2 16 16 16h80V464c0 26.5-21.5 48-48 48H480V96H592zM312 64c-8.8 0-16 7.2-16 16v24H272c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h24v24c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16V152h24c8.8 0 16-7.2 16-16V120c0-8.8-7.2-16-16-16H344V80c0-8.8-7.2-16-16-16H312z"]},j5={prefix:"fas",iconName:"boxes-stacked",icon:[576,512,[62625,"boxes","boxes-alt"],"f468","M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"]},O5=j5,D5={prefix:"fas",iconName:"ear-listen",icon:[512,512,["assistive-listening-systems"],"f2a2","M398.3 3.4c-15.8-7.9-35-1.5-42.9 14.3c-7.9 15.8-1.5 34.9 14.2 42.9l.4 .2c.4 .2 1.1 .6 2.1 1.2c2 1.2 5 3 8.7 5.6c7.5 5.2 17.6 13.2 27.7 24.2C428.5 113.4 448 146 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32c0-66-28.5-113.4-56.5-143.7C441.6 33.2 427.7 22.2 417.3 15c-5.3-3.7-9.7-6.4-13-8.3c-1.6-1-3-1.7-4-2.2c-.5-.3-.9-.5-1.2-.7l-.4-.2-.2-.1-.1 0 0 0c0 0 0 0-14.3 28.6L398.3 3.4zM128.7 227.5c6.2-56 53.7-99.5 111.3-99.5c61.9 0 112 50.1 112 112c0 29.3-11.2 55.9-29.6 75.9c-17 18.4-34.4 45.1-34.4 78V400c0 26.5-21.5 48-48 48c-17.7 0-32 14.3-32 32s14.3 32 32 32c61.9 0 112-50.1 112-112v-6.1c0-9.8 5.4-21.7 17.4-34.7C398.3 327.9 416 286 416 240c0-97.2-78.8-176-176-176C149.4 64 74.8 132.5 65.1 220.5c-1.9 17.6 10.7 33.4 28.3 35.3s33.4-10.7 35.3-28.3zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM192 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0zM208 240c0-17.7 14.3-32 32-32s32 14.3 32 32c0 13.3 10.7 24 24 24s24-10.7 24-24c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 13.3 10.7 24 24 24s24-10.7 24-24z"]},M5={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"]},V5=M5;function L5(){return l.jsxs("div",{className:Ke.main_hos,children:[l.jsxs("div",{className:Ke.box,children:[l.jsx("div",{className:Ke.symbol,children:l.jsx(ie,{icon:g5,className:Ke.logo})}),l.jsx("span",{className:Ke.heading_logo,children:"Emergency Help"}),l.jsx("p",{className:Ke.about_hos,children:"In times of crisis, every moment counts. Our dedicated emergency team is ready to provide immediate, high-quality medical care around the clock."})]}),l.jsx("h3",{children:"....................."}),l.jsxs("div",{className:Ke.box,children:[l.jsx("div",{className:Ke.symbol,children:l.jsx(ie,{icon:f5,className:Ke.logo})}),l.jsx("span",{className:Ke.heading_logo,children:"Enriched Pharmecy"}),l.jsx("p",{className:Ke.about_hos,children:"Trust our pharmacy for comprehensive and reliable service, dedicated to enhancing your well-being."})]}),l.jsx("h3",{children:".........................."}),l.jsxs("div",{className:Ke.box,children:[l.jsx("div",{className:Ke.symbol,children:l.jsx(ie,{icon:T_,className:Ke.logo})}),l.jsx("span",{className:Ke.heading_logo,children:"Medical Treatment"}),l.jsx("p",{className:Ke.about_hos,children:"Whether you require routine check-ups,or emergency services, trust us to deliver comprehensive and effective medical treatment that puts your health first."})]})]})}const $5="_main_div_1fmpf_1",F5="_innerbox_1fmpf_21",U5="_box_1fmpf_43",z5="_photo_1fmpf_63",B5="_logo_1fmpf_83",H5="_count_1fmpf_113",q5="_number_1fmpf_125",W5="_heading_1fmpf_139",ge={main_div:$5,innerbox:F5,box:U5,photo:z5,logo:B5,count:H5,number:q5,heading:W5};var qd={},$u={};function K5(t){return ml("MuiSvgIcon",t)}_l("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const G5=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Y5=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Ge(e)}`,`fontSize${Ge(n)}`]};return Yh(i,K5,r)},Q5=Jr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Ge(n.color)}`],e[`fontSize${Ge(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,a,c,u,h,f,m,g,w,E;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((c=t.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,24))||"1.5rem",large:((h=t.typography)==null||(f=h.pxToRem)==null?void 0:f.call(h,35))||"2.1875rem"}[e.fontSize],color:(m=(g=(t.vars||t).palette)==null||(g=g[e.color])==null?void 0:g.main)!=null?m:{action:(w=(t.vars||t).palette)==null||(w=w.action)==null?void 0:w.active,disabled:(E=(t.vars||t).palette)==null||(E=E.action)==null?void 0:E.disabled,inherit:void 0}[e.color]}}),jh=C.forwardRef(function(e,n){const r=gl({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:a="inherit",component:c="svg",fontSize:u="medium",htmlColor:h,inheritViewBox:f=!1,titleAccess:m,viewBox:g="0 0 24 24"}=r,w=Wt(r,G5),E=C.isValidElement(i)&&i.type==="svg",I=G({},r,{color:a,component:c,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:g,hasSvgAsChild:E}),S={};f||(S.viewBox=g);const N=Y5(I);return l.jsxs(Q5,G({as:c,className:Nt(N.root,s),focusable:"false",color:h,"aria-hidden":m?void 0:!0,role:m?"img":void 0,ref:n},S,w,E&&i.props,{ownerState:I,children:[E?i.props.children:i,m?l.jsx("title",{children:m}):null]}))});jh.muiName="SvgIcon";function X5(t,e){function n(r,i){return l.jsx(jh,G({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=jh.muiName,C.memo(C.forwardRef(n))}const J5={configure:t=>{_y.configure(t)}},Z5=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ge,createChainedFunction:ZI,createSvgIcon:X5,debounce:eT,deprecatedPropType:tT,isMuiElement:nT,ownerDocument:Sy,ownerWindow:rT,requirePropFactory:iT,setRef:Ey,unstable_ClassNameGenerator:J5,unstable_useEnhancedEffect:Iy,unstable_useId:aT,unsupportedProp:oT,useControlled:cT,useEventCallback:Ms,useForkRef:Zu,useIsFocusVisible:Ty},Symbol.toStringTag,{value:"Module"})),e6=zn(Z5);var Cg;function qn(){return Cg||(Cg=1,function(t){"use client";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=e6}($u)),$u}var t6=cn;Object.defineProperty(qd,"__esModule",{value:!0});var S_=qd.default=void 0,n6=t6(qn()),r6=l;S_=qd.default=(0,n6.default)((0,r6.jsx)("path",{d:"M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z"}),"House");var Wd={},i6=cn;Object.defineProperty(Wd,"__esModule",{value:!0});var A_=Wd.default=void 0,s6=i6(qn()),a6=l;A_=Wd.default=(0,s6.default)((0,a6.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var Kd={},o6=cn;Object.defineProperty(Kd,"__esModule",{value:!0});var C_=Kd.default=void 0,c6=o6(qn()),js=l;C_=Kd.default=(0,c6.default)([(0,js.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,js.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,js.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"2"),(0,js.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"3"),(0,js.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5"},"4")],"SentimentSatisfiedAlt");var Gd={},l6=cn;Object.defineProperty(Gd,"__esModule",{value:!0});var P_=Gd.default=void 0,u6=l6(qn()),h6=l;P_=Gd.default=(0,u6.default)((0,h6.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"}),"CalendarMonth");function d6(){const[t,e]=C.useState(4e3);return C.useEffect(()=>{const n=setInterval(()=>{e(r=>r+10)},2e3);return()=>clearInterval(n)},[]),l.jsx("div",{className:ge.main_div,children:l.jsxs("div",{className:ge.innerbox,children:[l.jsxs("div",{className:ge.box,children:[l.jsx("div",{className:ge.photo,children:l.jsx(S_,{className:ge.logo})}),l.jsxs("div",{className:ge.count,children:[l.jsx("p",{className:ge.number,children:"3468"}),l.jsx("p",{className:ge.heading,children:"Hospital Rooms"})]})]}),l.jsxs("div",{className:ge.box,children:[l.jsx("div",{className:ge.photo,children:l.jsx(A_,{className:ge.logo})}),l.jsxs("div",{className:ge.count,children:[l.jsx("p",{className:ge.number,children:"550"}),l.jsx("p",{className:ge.heading,children:"Specialist Doctors"})]})]}),l.jsxs("div",{className:ge.box,children:[l.jsx("div",{className:ge.photo,children:l.jsx(C_,{className:ge.logo})}),l.jsxs("div",{className:ge.count,children:[l.jsx("p",{className:ge.number,children:t}),l.jsx("p",{className:ge.heading,children:"Happy Patients"})]})]}),l.jsxs("div",{className:ge.box,children:[l.jsx("div",{className:ge.photo,children:l.jsx(P_,{className:ge.logo})}),l.jsxs("div",{className:ge.count,children:[l.jsx("p",{className:ge.number,children:"34"}),l.jsx("p",{className:ge.heading,children:"Years of Experience"})]})]})]})})}const f6="_main_119be_1",p6="_box_119be_23",m6="_heading_119be_47",g6="_para_119be_71",v6="_btn_119be_85",y6="_btn1_119be_97",_6="_btn2_119be_121",kr={main:f6,box:p6,heading:m6,para:g6,btn:v6,btn1:y6,btn2:_6};var Yd={},b6=cn;Object.defineProperty(Yd,"__esModule",{value:!0});var R_=Yd.default=void 0,w6=b6(qn()),x6=l;R_=Yd.default=(0,w6.default)((0,x6.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");function E6(){return l.jsx(l.Fragment,{children:l.jsx("div",{className:kr.main,children:l.jsxs("div",{className:kr.box,children:[l.jsx("div",{className:kr.heading,children:l.jsx("p",{children:"Do you need Emergency Medical Care? Call @ 1234 56789"})}),l.jsx("p",{className:kr.para,children:"Emergency health services are provided by hospitals, clinics, and emergency medical services (EMS) teams to address these critical situations promptly."}),l.jsxs("div",{className:kr.btn,children:[l.jsx(xt,{variant:"contained",className:kr.btn1,children:"Contact Now"}),l.jsxs(xt,{variant:"outlined",className:kr.btn2,children:["Learn More ",l.jsx(R_,{})]})]})]})})})}const I6="_main_pk6oa_1",T6="_heading_pk6oa_19",S6="_heading1_pk6oa_41",A6="_para_pk6oa_59",C6="_photoWrapper_pk6oa_71",P6="_photoContainer_pk6oa_91",R6="_photoItem_pk6oa_103",k6="_phototContainer_pk6oa_111",N6="_front_pk6oa_127",j6="_btn1_pk6oa_161",er={main:I6,heading:T6,heading1:S6,para:A6,photoWrapper:C6,photoContainer:P6,photoItem:R6,phototContainer:k6,front:N6,btn1:j6},O6="/Hospital-System/PHOTO/pf1.jpg",D6="/Hospital-System/PHOTO/pf2.jpg",M6="/Hospital-System/PHOTO/pf3.jpg",V6="/Hospital-System/PHOTO/pf4.jpg";function L6(){const t=[O6,D6,M6,V6],[e,n]=C.useState(0);return C.useEffect(()=>{const r=setInterval(()=>{n(i=>(i+1)%t.length)},4e3);return()=>clearInterval(r)},[t.length]),l.jsxs("div",{className:er.main,children:[l.jsxs("div",{className:er.heading,children:[l.jsx("p",{className:er.heading1,children:"We Maintain Cleanliness Rules Inside Our Hospital"}),l.jsx("img",{src:rs,alt:""}),l.jsx("p",{className:er.para,children:"Our hospital is committed to maintaining impeccable cleanliness for the health and safety of everyone. Maintaining cleanliness is our priority for your safety."})]}),l.jsx("div",{className:er.photoWrapper,children:[0,1,2,3].map(r=>l.jsxs("div",{className:er.phototContainer,children:[l.jsx("img",{src:t[(e+r)%t.length],alt:`Slide ${r+1}`}),l.jsx("div",{className:er.front,children:l.jsx(xt,{variant:"contained",className:er.btn1,children:"View Details"})})]},r))})]})}function $6(){return l.jsxs(l.Fragment,{children:[l.jsx(bR,{}),l.jsx(L5,{}),l.jsx(d6,{}),l.jsx(L6,{}),l.jsx(E6,{})]})}const F6="_main_ozsob_1",U6="_heading_ozsob_19",z6="_form_div_ozsob_43",B6="_form_ozsob_43",H6="_btn1_ozsob_157",q6="_btn1hover_ozsob_1",W6="_photo_ozsob_215",pi={main:F6,heading:U6,form_div:z6,form:B6,btn1:H6,btn1hover:q6,photo:W6},K6="/Hospital-System/NEWS/contact-img.png";function G6(){return l.jsxs("div",{className:pi.main,children:[l.jsxs("div",{className:pi.heading,children:[l.jsx("p",{children:"We Are Always Ready To Help You. Book An Appointment"}),l.jsx("img",{src:rs,alt:""})]}),l.jsxs("div",{className:pi.form_div,children:[l.jsxs("form",{className:pi.form,children:[l.jsx("input",{type:"text",placeholder:"Name"}),l.jsx("input",{type:"text",placeholder:"Phone"}),l.jsx("input",{type:"email",placeholder:"Email"}),l.jsxs("select",{name:"department",className:"selector",children:[l.jsx("option",{children:"Department"}),l.jsx("option",{value:"",children:"Cardiac Clinic"}),l.jsx("option",{value:"",children:"Neurology"}),l.jsx("option",{value:"",children:"Dentistry"}),l.jsx("option",{value:"",children:"Gastroenterology"})]}),l.jsxs("select",{name:"Doctor",className:"doctor",children:[l.jsx("option",{children:"Doctor"}),l.jsx("option",{value:"",children:"Dr.Arjun Badyari"}),l.jsx("option",{value:"",children:"Dr.Priya Rawat"}),l.jsx("option",{value:"",children:"Dr.Gaurav Joshi"})]}),l.jsx("input",{type:"date"}),l.jsx("div",{children:l.jsx("textarea",{name:"textarea",cols:"60",rows:"9",placeholder:"Write Your Message Here"})}),l.jsx(xt,{variant:"contained",className:pi.btn1,children:"Book An Appoitment"}),l.jsx("p",{children:"(we will be confirm by an text Message)"})]}),l.jsx("div",{className:pi.photo,children:l.jsx("img",{src:K6,alt:""})})]})]})}const Y6="_main_1vl06_1",Q6="_box_1vl06_23",X6="_heading_1vl06_45",J6="_inner_box_1vl06_53",Z6="_para_1vl06_71",e3="_line_1vl06_81",t3="_logo_1vl06_95",n3="_logo1_1vl06_137",r3="_points_1vl06_147",i3="_nav_link_1vl06_165",s3="_email_1vl06_197",a3="_sent_1vl06_239",o3="_foot_1vl06_263",ue={main:Y6,box:Q6,heading:X6,inner_box:J6,para:Z6,line:e3,logo:t3,logo1:n3,points:r3,nav_link:i3,email:s3,sent:a3,foot:o3};var c3={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},l3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},u3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},h3={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},d3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},f3={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Qd={},p3=cn;Object.defineProperty(Qd,"__esModule",{value:!0});var k_=Qd.default=void 0,m3=p3(qn()),g3=l;k_=Qd.default=(0,m3.default)((0,g3.jsx)("path",{d:"m4.01 6.03 7.51 3.22-7.52-1zm7.5 8.72L4 17.97v-2.22zM2.01 3 2 10l15 2-15 2 .01 7L23 12z"}),"SendOutlined");var Xd={},v3=cn;Object.defineProperty(Xd,"__esModule",{value:!0});var N_=Xd.default=void 0,y3=v3(qn()),_3=l;N_=Xd.default=(0,y3.default)((0,_3.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}),"FacebookOutlined");function Jd(){const t=new Date().getFullYear();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:ue.main,children:[l.jsxs("div",{className:ue.box,children:[l.jsxs("div",{className:ue.inner_box,children:[l.jsx("p",{className:ue.heading,children:"About Us"}),l.jsx("span",{className:ue.line})]}),l.jsx("p",{className:ue.para,children:"Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna."}),l.jsxs("div",{className:ue.logo,children:[l.jsx("span",{children:l.jsx(N_,{className:ue.logo1})}),l.jsx("span",{children:l.jsx(ie,{icon:f3,size:"2x",className:ue.logo1})}),l.jsx("span",{children:l.jsx(ie,{icon:c3,size:"2x",className:ue.logo1})})]})]}),l.jsxs("div",{className:ue.box,children:[l.jsxs("div",{className:ue.inner_box,children:[l.jsx("p",{className:ue.heading,children:"Quick Links"}),l.jsx("span",{className:ue.line})]}),l.jsxs("ul",{className:ue.points,children:[l.jsx("li",{children:"Home"}),l.jsx("li",{children:"About Us"}),l.jsx("li",{children:"services"}),l.jsx("li",{children:"Our Cases"}),l.jsx(De,{to:"/",className:ue.nav_link,children:l.jsx("li",{children:"Back to Login"})})]})]}),l.jsxs("div",{className:ue.box,children:[l.jsxs("div",{className:ue.inner_box,children:[l.jsx("p",{className:ue.heading,children:"Queries"}),l.jsx("span",{className:ue.line})]}),l.jsxs("ul",{className:ue.points,children:[l.jsx("li",{children:"Consuling"}),l.jsx("li",{children:"Finance"}),l.jsx("li",{children:"Testimonials"}),l.jsx("li",{children:"FAQ"}),l.jsx("li",{children:"Contact Us"})]})]}),l.jsxs("div",{className:ue.box,children:[l.jsxs("div",{className:ue.inner_box,children:[l.jsx("p",{className:ue.heading,children:"Newsletter"}),l.jsx("span",{className:ue.line})]}),l.jsx("p",{className:ue.para,children:"subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,"}),l.jsxs("div",{className:ue.email,children:[l.jsx("input",{type:"email",placeholder:"Email Address"}),l.jsx(k_,{className:ue.sent})]})]})]}),l.jsx("div",{className:ue.foot,children:l.jsxs("p",{children:["© Copyright ",t," | All Rights Reserved by Mediplus"]})})]})}const b3="/Hospital-System/SLIDE/slide1.jpg",w3="/Hospital-System/SLIDE/slide2.jpg",x3="/Hospital-System/SLIDE/slide3.jpg",E3="_main_box_zts8s_1",I3="_main_photo_zts8s_17",T3="_heading_zts8s_41",S3="_heading2_zts8s_81",A3="_btn_zts8s_97",C3="_btn1_zts8s_109",P3="_btn2_zts8s_119",hn={main_box:E3,main_photo:I3,heading:T3,heading2:S3,btn:A3,btn1:C3,btn2:P3},R3="_box_192ij_1",k3="_main_192ij_21",N3="_heading_192ij_63",j3="_para_192ij_73",mi={box:R3,main:k3,heading:N3,para:j3};var Zd={},O3=cn;Object.defineProperty(Zd,"__esModule",{value:!0});var Si=Zd.default=void 0,D3=O3(qn()),M3=l;Si=Zd.default=(0,D3.default)((0,M3.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");function V3({TimeBox:t}){return l.jsx("div",{className:mi.box,children:t.map((e,n)=>l.jsxs("div",{className:mi.main,children:[l.jsx("p",{className:mi.heading,children:e.heading}),e.heading==="Opening Hours"?l.jsx("pre",{className:mi.para,children:e.para}):l.jsx("p",{className:mi.para,children:e.para}),l.jsxs("span",{className:mi.learn_more,children:["LEARN MORE ",l.jsx(Si,{})]})]},n))})}function L3(){const t=[{image:b3},{image:w3},{image:x3}],e=[{heading:"Emergency Cases",para:`In emergency cases, every second counts. 
      Our expert medical team is dedicated to 
      providing immediate and compassionate care, 
      ensuring you receive the best possible treatment 
      when you need it most.`,link:""},{heading:"Doctors Timetable",para:`Stay informed with our comprehensive doctors' 
      timetable. Our team of dedicated specialists is 
      available to provide you with top-quality care, 
      tailored to fit your schedule and medical needs.`,link:""},{heading:"Opening Hours",para:`Monday - Friday   8:00am - 2:00pm
Saturday          9:00am - 4:00pm
Sunday            9:00am - 12:30pm
      `,link:""}],[n,r]=C.useState(0);return C.useEffect(()=>{const i=setInterval(()=>{r(s=>(s+1)%t.length)},6e3);return()=>clearInterval(i)},[t.length]),l.jsxs("div",{className:hn.main_box,children:[l.jsx("div",{className:hn.main_photo,children:l.jsx("img",{src:t[n].image,alt:`Slide ${n+1}`})}),l.jsxs("div",{className:hn.heading,children:[l.jsxs("div",{className:hn.inner_heading,children:[l.jsxs("p",{className:hn.head_1,children:["We Provide ",l.jsx("span",{children:"Medical"})," Services"]}),l.jsxs("p",{className:hn.head_1,children:["That You Can ",l.jsx("span",{children:"Trust!"})]})]}),l.jsx("p",{className:hn.heading2,children:"Committed to your wellbeing with excellence in every service. Your health, our highest priority."}),l.jsxs("div",{className:hn.btn,children:[l.jsx(xt,{variant:"contained",className:hn.btn1,children:"Get Appointement"}),l.jsx(xt,{variant:"contained",className:hn.btn2,children:"Learn More"})]})]}),l.jsx(V3,{TimeBox:e})]})}const $3="_main_1ookl_1",F3="_nav_link_1ookl_57",U3="_btn_1ookl_121",Ao={main:$3,nav_link:F3,btn:U3},j_="/Hospital-System/logo.png";function ef(){return l.jsxs("div",{className:Ao.main,children:[l.jsx("img",{src:j_,alt:"reloading.."}),l.jsxs("ul",{children:[l.jsx(De,{to:"/user",className:Ao.nav_link,children:l.jsx("li",{children:"Home"})}),l.jsx(De,{to:"/user/userdoctor",className:Ao.nav_link,children:l.jsx("li",{children:"Doctor"})}),l.jsx("li",{children:"Services"}),l.jsx("li",{children:"Blogs"}),l.jsx("li",{children:"Contact us"})]}),l.jsx(De,{to:"/user/form",children:l.jsx(xt,{variant:"contained",className:Ao.btn,children:"Book Appointment"})})]})}const z3="_main_i4b8o_1",B3="_first_main_i4b8o_19",H3="_head1_i4b8o_37",q3="_head2_i4b8o_53",W3="_img_i4b8o_65",K3="_second_main_i4b8o_83",G3="_big_box_i4b8o_103",Y3="_photo_i4b8o_121",Q3="_box_i4b8o_149",Oe={main:z3,first_main:B3,head1:H3,head2:q3,img:W3,second_main:K3,big_box:G3,photo:Y3,box:Q3},X3="/Hospital-System/NEWS/blog1.jpg",J3="/Hospital-System/NEWS/blog2.jpg",Z3="/Hospital-System/NEWS/blog3.jpg";function eN(){return l.jsxs("div",{className:Oe.main,children:[l.jsxs("div",{className:Oe.first_main,children:[l.jsx("p",{className:Oe.head1,children:"Keep Up With Our Most Recent Medical News."}),l.jsx("div",{className:Oe.img,children:l.jsx("img",{src:rs,alt:""})}),l.jsx("p",{className:Oe.head2,children:"Through our newsletters, social media updates, and dedicated patient resources, we aim to bridge the gap between medical expertise and patient understanding."})]}),l.jsxs("div",{className:Oe.second_main,children:[l.jsxs("div",{className:Oe.big_box,children:[l.jsx("div",{className:Oe.photo,children:l.jsx("img",{src:X3,alt:""})}),l.jsxs("div",{className:Oe.box,children:[l.jsx("span",{children:"22 May 2024"}),l.jsx("p",{className:Oe.head1,children:"We have annouced our new product"}),l.jsx("p",{className:Oe.head2,children:"Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed."})]})]}),l.jsxs("div",{className:Oe.big_box,children:[l.jsx("div",{className:Oe.photo,children:l.jsx("img",{src:J3,alt:""})}),l.jsxs("div",{className:Oe.box,children:[l.jsx("span",{children:"2 June 2024"}),l.jsx("p",{className:Oe.head1,children:"Top five way for solving teeth problem"}),l.jsx("p",{className:Oe.head2,children:"Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed."})]})]}),l.jsxs("div",{className:Oe.big_box,children:[l.jsx("div",{className:Oe.photo,children:l.jsx("img",{src:Z3,alt:""})}),l.jsxs("div",{className:Oe.box,children:[l.jsx("span",{children:"12 July 2024"}),l.jsx("p",{className:Oe.head1,children:"We provide highly business solutions"}),l.jsx("p",{className:Oe.head2,children:"Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed."})]})]})]})]})}const tN="_main_n19wn_1",nN="_first_main_n19wn_17",rN="_first_heading_n19wn_37",iN="_first_para_n19wn_51",sN="_second_main_n19wn_63",aN="_priceItem_n19wn_83",oN="_NavLink_n19wn_131",cN="_logo_n19wn_143",lN="_name_n19wn_153",uN="_price_n19wn_83",hN="_about_n19wn_169",dN="_check_n19wn_195",wt={main:tN,first_main:nN,first_heading:rN,first_para:iN,second_main:sN,priceItem:aN,NavLink:oN,logo:cN,name:lN,price:uN,about:hN,check:dN};var tf={},fN=cn;Object.defineProperty(tf,"__esModule",{value:!0});var Us=tf.default=void 0,pN=fN(qn()),mN=l;Us=tf.default=(0,pN.default)((0,mN.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline");function gN(){const t=[{logo:l.jsx(ie,{icon:S5}),name:"Heart Surgery",prices:"$150 ",about1:"Advanced Surgical Techniques",about2:"Comprehensive Cardiac Care",about3:"Post-Operative Support",about4:"Skilled Cardiothoracic Surgeons"},{logo:l.jsx(ie,{icon:I_}),name:"Vision Problems",prices:"$80",about1:"Nearsightedness (Myopia)",about2:"Farsightedness (Hyperopia)",about3:"Astigmatism",about4:"Advanced Eye Care"},{logo:l.jsx(ie,{icon:E_}),name:"Teeth Whitening",prices:"$150",about1:"Expert Dental Team",about2:"Discoloration Removal",about3:"Remove Stains",about4:"Advanced Techniques"}];return l.jsxs("div",{className:wt.main,children:[l.jsxs("div",{className:wt.first_main,children:[l.jsx("p",{className:wt.first_heading,children:"We Provide You The Best Treatment In Reasonable Price"}),l.jsx("img",{src:rs,alt:"Section"}),l.jsx("p",{className:wt.first_para,children:"From the moment you walk through our doors, you`ll experience our dedication to your well-being. We`re here to provide you and your loved ones with the best treatment options, ensuring your health is always our top priority."})]}),l.jsx("div",{className:wt.second_main,children:t.map((e,n)=>l.jsxs("div",{className:wt.priceItem,children:[l.jsx("div",{className:wt.logo,children:e.logo}),l.jsx("div",{className:wt.name,children:e.name}),l.jsxs("div",{className:wt.price,children:[e.prices,l.jsx("span",{children:"/ Per Visit"})]}),l.jsxs("div",{className:wt.about,children:[l.jsxs("p",{children:[e.about1,l.jsx(Us,{className:wt.check})]}),l.jsxs("p",{children:[e.about2,l.jsx(Us,{className:wt.check})]}),l.jsxs("p",{children:[e.about3,l.jsx(Us,{className:wt.check})]}),l.jsxs("p",{children:[e.about4,l.jsx(Us,{className:wt.check})]})]}),l.jsx(xt,{variant:"outlined",children:l.jsx(De,{to:"/user/form",className:wt.NavLink,children:"Book Now"})})]},n))})]})}const vN="_main_l5j34_1",yN="_heading_l5j34_19",_N="_heading1_l5j34_35",bN="_para_l5j34_45",wN="_treatment_l5j34_55",xN="_box_l5j34_77",EN="_logo_l5j34_91",IN="_about_l5j34_99",TN="_heading2_l5j34_107",SN="_para2_l5j34_117",tn={main:vN,heading:yN,heading1:_N,para:bN,treatment:wN,box:xN,logo:EN,about:IN,heading2:TN,para2:SN};function AN(){const t=[{logo:l.jsx(ie,{icon:p5}),heading:"General Treatment",para:`From routine check-ups and preventive care to the 
            management of chronic illnesses and acute medical issues, 
            we are committed to ensuring you receive the best possible 
            treatment.`},{logo:l.jsx(ie,{icon:E_}),heading:"Teeth Whitening",para:`Our expert dental team uses the latest techniques and 
            technologies to provide safe and effective whitening treatments 
            that remove stains and discoloration.`},{logo:l.jsx(ie,{icon:D5}),heading:"Ear Treatment",para:`We offer comprehensive care for conditions such as ear 
            infections, hearing loss, tinnitus (ringing in the ears), 
            balance disorders, and earwax impaction.`},{logo:l.jsx(ie,{icon:I_}),heading:"Vision Problems",para:`We specialize in the treatment of common vision problems such 
            as nearsightedness (myopia), farsightedness (hyperopia), astigmatism, 
            and presbyopia.`},{logo:l.jsx(ie,{icon:_5}),heading:"Heart Surgery",para:`Our team of highly skilled cardiothoracic surgeons and medical 
            professionals is dedicated to providing the highest level of care 
            using the latest surgical techniques and technologies.`},{logo:l.jsx(ie,{icon:k5}),heading:"Blood Transfusion",para:`Blood transfusions are critical for various medical conditions 
            and procedures, including surgery, trauma, anemia, cancer treatments, 
            and chronic blood disorders.`}];return l.jsxs("div",{className:tn.main,children:[l.jsxs("div",{className:tn.heading,children:[l.jsx("p",{className:tn.heading1,children:"We Offer Different Services To Improve Your Health"}),l.jsx("div",{className:tn.photo,children:l.jsx("img",{src:rs,alt:""})}),l.jsx("p",{className:tn.para,children:"Our hospital is dedicated to providing a comprehensive range of healthcare services to meet the diverse needs of our patients. Whether you require routine check-ups, emergency care, or specialized treatments, our team of skilled professionals is here to ensure you receive the highest standard of care."})]}),l.jsx("div",{className:tn.treatment,children:t.map((e,n)=>l.jsxs("div",{className:tn.box,children:[l.jsx("div",{className:tn.logo,children:e.logo}),l.jsxs("div",{className:tn.about,children:[l.jsx("p",{className:tn.heading2,children:e.heading}),l.jsx("p",{className:tn.para2,children:e.para})]})]},n))})]})}function CN(){return l.jsxs(l.Fragment,{children:[l.jsx(ef,{}),l.jsx(L3,{}),l.jsx($6,{}),l.jsx(AN,{}),l.jsx(gN,{}),l.jsx(eN,{}),l.jsx(G6,{}),l.jsx(Jd,{})]})}const PN="_main_18mu6_1",RN="_first_main_18mu6_21",kN="_logo_18mu6_41",NN="_para_18mu6_51",jN="_p_18mu6_51",ON="_name_18mu6_75",DN="_second_main_18mu6_85",MN="_photo_18mu6_97",VN="_form_18mu6_123",LN="_form_div_18mu6_149",$N="_form_innerdiv_18mu6_169",FN="_btn_18mu6_255",UN="_btn_div_18mu6_271",he={main:PN,first_main:RN,logo:kN,para:NN,p:jN,name:ON,second_main:DN,photo:MN,form:VN,form_div:LN,form_innerdiv:$N,btn:FN,btn_div:UN},zN="/Hospital-System/Form.png";var Pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,O_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,_){function b(){}b.prototype=_.prototype,y.D=_.prototype,y.prototype=new b,y.prototype.constructor=y,y.C=function(T,A,P){for(var x=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)x[ye-2]=arguments[ye];return _.prototype[A].apply(T,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,_,b){b||(b=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(b++)|_.charCodeAt(b++)<<8|_.charCodeAt(b++)<<16|_.charCodeAt(b++)<<24;else for(A=0;16>A;++A)T[A]=_[b++]|_[b++]<<8|_[b++]<<16|_[b++]<<24;_=y.g[0],b=y.g[1],A=y.g[2];var P=y.g[3],x=_+(P^b&(A^P))+T[0]+3614090360&4294967295;_=b+(x<<7&4294967295|x>>>25),x=P+(A^_&(b^A))+T[1]+3905402710&4294967295,P=_+(x<<12&4294967295|x>>>20),x=A+(b^P&(_^b))+T[2]+606105819&4294967295,A=P+(x<<17&4294967295|x>>>15),x=b+(_^A&(P^_))+T[3]+3250441966&4294967295,b=A+(x<<22&4294967295|x>>>10),x=_+(P^b&(A^P))+T[4]+4118548399&4294967295,_=b+(x<<7&4294967295|x>>>25),x=P+(A^_&(b^A))+T[5]+1200080426&4294967295,P=_+(x<<12&4294967295|x>>>20),x=A+(b^P&(_^b))+T[6]+2821735955&4294967295,A=P+(x<<17&4294967295|x>>>15),x=b+(_^A&(P^_))+T[7]+4249261313&4294967295,b=A+(x<<22&4294967295|x>>>10),x=_+(P^b&(A^P))+T[8]+1770035416&4294967295,_=b+(x<<7&4294967295|x>>>25),x=P+(A^_&(b^A))+T[9]+2336552879&4294967295,P=_+(x<<12&4294967295|x>>>20),x=A+(b^P&(_^b))+T[10]+4294925233&4294967295,A=P+(x<<17&4294967295|x>>>15),x=b+(_^A&(P^_))+T[11]+2304563134&4294967295,b=A+(x<<22&4294967295|x>>>10),x=_+(P^b&(A^P))+T[12]+1804603682&4294967295,_=b+(x<<7&4294967295|x>>>25),x=P+(A^_&(b^A))+T[13]+4254626195&4294967295,P=_+(x<<12&4294967295|x>>>20),x=A+(b^P&(_^b))+T[14]+2792965006&4294967295,A=P+(x<<17&4294967295|x>>>15),x=b+(_^A&(P^_))+T[15]+1236535329&4294967295,b=A+(x<<22&4294967295|x>>>10),x=_+(A^P&(b^A))+T[1]+4129170786&4294967295,_=b+(x<<5&4294967295|x>>>27),x=P+(b^A&(_^b))+T[6]+3225465664&4294967295,P=_+(x<<9&4294967295|x>>>23),x=A+(_^b&(P^_))+T[11]+643717713&4294967295,A=P+(x<<14&4294967295|x>>>18),x=b+(P^_&(A^P))+T[0]+3921069994&4294967295,b=A+(x<<20&4294967295|x>>>12),x=_+(A^P&(b^A))+T[5]+3593408605&4294967295,_=b+(x<<5&4294967295|x>>>27),x=P+(b^A&(_^b))+T[10]+38016083&4294967295,P=_+(x<<9&4294967295|x>>>23),x=A+(_^b&(P^_))+T[15]+3634488961&4294967295,A=P+(x<<14&4294967295|x>>>18),x=b+(P^_&(A^P))+T[4]+3889429448&4294967295,b=A+(x<<20&4294967295|x>>>12),x=_+(A^P&(b^A))+T[9]+568446438&4294967295,_=b+(x<<5&4294967295|x>>>27),x=P+(b^A&(_^b))+T[14]+3275163606&4294967295,P=_+(x<<9&4294967295|x>>>23),x=A+(_^b&(P^_))+T[3]+4107603335&4294967295,A=P+(x<<14&4294967295|x>>>18),x=b+(P^_&(A^P))+T[8]+1163531501&4294967295,b=A+(x<<20&4294967295|x>>>12),x=_+(A^P&(b^A))+T[13]+2850285829&4294967295,_=b+(x<<5&4294967295|x>>>27),x=P+(b^A&(_^b))+T[2]+4243563512&4294967295,P=_+(x<<9&4294967295|x>>>23),x=A+(_^b&(P^_))+T[7]+1735328473&4294967295,A=P+(x<<14&4294967295|x>>>18),x=b+(P^_&(A^P))+T[12]+2368359562&4294967295,b=A+(x<<20&4294967295|x>>>12),x=_+(b^A^P)+T[5]+4294588738&4294967295,_=b+(x<<4&4294967295|x>>>28),x=P+(_^b^A)+T[8]+2272392833&4294967295,P=_+(x<<11&4294967295|x>>>21),x=A+(P^_^b)+T[11]+1839030562&4294967295,A=P+(x<<16&4294967295|x>>>16),x=b+(A^P^_)+T[14]+4259657740&4294967295,b=A+(x<<23&4294967295|x>>>9),x=_+(b^A^P)+T[1]+2763975236&4294967295,_=b+(x<<4&4294967295|x>>>28),x=P+(_^b^A)+T[4]+1272893353&4294967295,P=_+(x<<11&4294967295|x>>>21),x=A+(P^_^b)+T[7]+4139469664&4294967295,A=P+(x<<16&4294967295|x>>>16),x=b+(A^P^_)+T[10]+3200236656&4294967295,b=A+(x<<23&4294967295|x>>>9),x=_+(b^A^P)+T[13]+681279174&4294967295,_=b+(x<<4&4294967295|x>>>28),x=P+(_^b^A)+T[0]+3936430074&4294967295,P=_+(x<<11&4294967295|x>>>21),x=A+(P^_^b)+T[3]+3572445317&4294967295,A=P+(x<<16&4294967295|x>>>16),x=b+(A^P^_)+T[6]+76029189&4294967295,b=A+(x<<23&4294967295|x>>>9),x=_+(b^A^P)+T[9]+3654602809&4294967295,_=b+(x<<4&4294967295|x>>>28),x=P+(_^b^A)+T[12]+3873151461&4294967295,P=_+(x<<11&4294967295|x>>>21),x=A+(P^_^b)+T[15]+530742520&4294967295,A=P+(x<<16&4294967295|x>>>16),x=b+(A^P^_)+T[2]+3299628645&4294967295,b=A+(x<<23&4294967295|x>>>9),x=_+(A^(b|~P))+T[0]+4096336452&4294967295,_=b+(x<<6&4294967295|x>>>26),x=P+(b^(_|~A))+T[7]+1126891415&4294967295,P=_+(x<<10&4294967295|x>>>22),x=A+(_^(P|~b))+T[14]+2878612391&4294967295,A=P+(x<<15&4294967295|x>>>17),x=b+(P^(A|~_))+T[5]+4237533241&4294967295,b=A+(x<<21&4294967295|x>>>11),x=_+(A^(b|~P))+T[12]+1700485571&4294967295,_=b+(x<<6&4294967295|x>>>26),x=P+(b^(_|~A))+T[3]+2399980690&4294967295,P=_+(x<<10&4294967295|x>>>22),x=A+(_^(P|~b))+T[10]+4293915773&4294967295,A=P+(x<<15&4294967295|x>>>17),x=b+(P^(A|~_))+T[1]+2240044497&4294967295,b=A+(x<<21&4294967295|x>>>11),x=_+(A^(b|~P))+T[8]+1873313359&4294967295,_=b+(x<<6&4294967295|x>>>26),x=P+(b^(_|~A))+T[15]+4264355552&4294967295,P=_+(x<<10&4294967295|x>>>22),x=A+(_^(P|~b))+T[6]+2734768916&4294967295,A=P+(x<<15&4294967295|x>>>17),x=b+(P^(A|~_))+T[13]+1309151649&4294967295,b=A+(x<<21&4294967295|x>>>11),x=_+(A^(b|~P))+T[4]+4149444226&4294967295,_=b+(x<<6&4294967295|x>>>26),x=P+(b^(_|~A))+T[11]+3174756917&4294967295,P=_+(x<<10&4294967295|x>>>22),x=A+(_^(P|~b))+T[2]+718787259&4294967295,A=P+(x<<15&4294967295|x>>>17),x=b+(P^(A|~_))+T[9]+3951481745&4294967295,y.g[0]=y.g[0]+_&4294967295,y.g[1]=y.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,y.g[2]=y.g[2]+A&4294967295,y.g[3]=y.g[3]+P&4294967295}r.prototype.u=function(y,_){_===void 0&&(_=y.length);for(var b=_-this.blockSize,T=this.B,A=this.h,P=0;P<_;){if(A==0)for(;P<=b;)i(this,y,P),P+=this.blockSize;if(typeof y=="string"){for(;P<_;)if(T[A++]=y.charCodeAt(P++),A==this.blockSize){i(this,T),A=0;break}}else for(;P<_;)if(T[A++]=y[P++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var _=1;_<y.length-8;++_)y[_]=0;var b=8*this.o;for(_=y.length-8;_<y.length;++_)y[_]=b&255,b/=256;for(this.u(y),y=Array(16),_=b=0;4>_;++_)for(var T=0;32>T;T+=8)y[b++]=this.g[_]>>>T&255;return y};function s(y,_){var b=c;return Object.prototype.hasOwnProperty.call(b,y)?b[y]:b[y]=_(y)}function a(y,_){this.h=_;for(var b=[],T=!0,A=y.length-1;0<=A;A--){var P=y[A]|0;T&&P==_||(b[A]=P,T=!1)}this.g=b}var c={};function u(y){return-128<=y&&128>y?s(y,function(_){return new a([_|0],0>_?-1:0)}):new a([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return m;if(0>y)return S(h(-y));for(var _=[],b=1,T=0;y>=b;T++)_[T]=y/b|0,b*=4294967296;return new a(_,0)}function f(y,_){if(y.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(y.charAt(0)=="-")return S(f(y.substring(1),_));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=h(Math.pow(_,8)),T=m,A=0;A<y.length;A+=8){var P=Math.min(8,y.length-A),x=parseInt(y.substring(A,A+P),_);8>P?(P=h(Math.pow(_,P)),T=T.j(P).add(h(x))):(T=T.j(b),T=T.add(h(x)))}return T}var m=u(0),g=u(1),w=u(16777216);t=a.prototype,t.m=function(){if(I(this))return-S(this).m();for(var y=0,_=1,b=0;b<this.g.length;b++){var T=this.i(b);y+=(0<=T?T:4294967296+T)*_,_*=4294967296}return y},t.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E(this))return"0";if(I(this))return"-"+S(this).toString(y);for(var _=h(Math.pow(y,6)),b=this,T="";;){var A=D(b,_).g;b=N(b,A.j(_));var P=((0<b.g.length?b.g[0]:b.h)>>>0).toString(y);if(b=A,E(b))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},t.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function E(y){if(y.h!=0)return!1;for(var _=0;_<y.g.length;_++)if(y.g[_]!=0)return!1;return!0}function I(y){return y.h==-1}t.l=function(y){return y=N(this,y),I(y)?-1:E(y)?0:1};function S(y){for(var _=y.g.length,b=[],T=0;T<_;T++)b[T]=~y.g[T];return new a(b,~y.h).add(g)}t.abs=function(){return I(this)?S(this):this},t.add=function(y){for(var _=Math.max(this.g.length,y.g.length),b=[],T=0,A=0;A<=_;A++){var P=T+(this.i(A)&65535)+(y.i(A)&65535),x=(P>>>16)+(this.i(A)>>>16)+(y.i(A)>>>16);T=x>>>16,P&=65535,x&=65535,b[A]=x<<16|P}return new a(b,b[b.length-1]&-2147483648?-1:0)};function N(y,_){return y.add(S(_))}t.j=function(y){if(E(this)||E(y))return m;if(I(this))return I(y)?S(this).j(S(y)):S(S(this).j(y));if(I(y))return S(this.j(S(y)));if(0>this.l(w)&&0>y.l(w))return h(this.m()*y.m());for(var _=this.g.length+y.g.length,b=[],T=0;T<2*_;T++)b[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<y.g.length;A++){var P=this.i(T)>>>16,x=this.i(T)&65535,ye=y.i(A)>>>16,nt=y.i(A)&65535;b[2*T+2*A]+=x*nt,k(b,2*T+2*A),b[2*T+2*A+1]+=P*nt,k(b,2*T+2*A+1),b[2*T+2*A+1]+=x*ye,k(b,2*T+2*A+1),b[2*T+2*A+2]+=P*ye,k(b,2*T+2*A+2)}for(T=0;T<_;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=_;T<2*_;T++)b[T]=0;return new a(b,0)};function k(y,_){for(;(y[_]&65535)!=y[_];)y[_+1]+=y[_]>>>16,y[_]&=65535,_++}function O(y,_){this.g=y,this.h=_}function D(y,_){if(E(_))throw Error("division by zero");if(E(y))return new O(m,m);if(I(y))return _=D(S(y),_),new O(S(_.g),S(_.h));if(I(_))return _=D(y,S(_)),new O(S(_.g),_.h);if(30<y.g.length){if(I(y)||I(_))throw Error("slowDivide_ only works with positive integers.");for(var b=g,T=_;0>=T.l(y);)b=V(b),T=V(T);var A=L(b,1),P=L(T,1);for(T=L(T,2),b=L(b,2);!E(T);){var x=P.add(T);0>=x.l(y)&&(A=A.add(b),P=x),T=L(T,1),b=L(b,1)}return _=N(y,A.j(_)),new O(A,_)}for(A=m;0<=y.l(_);){for(b=Math.max(1,Math.floor(y.m()/_.m())),T=Math.ceil(Math.log(b)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=h(b),x=P.j(_);I(x)||0<x.l(y);)b-=T,P=h(b),x=P.j(_);E(P)&&(P=g),A=A.add(P),y=N(y,x)}return new O(A,y)}t.A=function(y){return D(this,y).h},t.and=function(y){for(var _=Math.max(this.g.length,y.g.length),b=[],T=0;T<_;T++)b[T]=this.i(T)&y.i(T);return new a(b,this.h&y.h)},t.or=function(y){for(var _=Math.max(this.g.length,y.g.length),b=[],T=0;T<_;T++)b[T]=this.i(T)|y.i(T);return new a(b,this.h|y.h)},t.xor=function(y){for(var _=Math.max(this.g.length,y.g.length),b=[],T=0;T<_;T++)b[T]=this.i(T)^y.i(T);return new a(b,this.h^y.h)};function V(y){for(var _=y.g.length+1,b=[],T=0;T<_;T++)b[T]=y.i(T)<<1|y.i(T-1)>>>31;return new a(b,y.h)}function L(y,_){var b=_>>5;_%=32;for(var T=y.g.length-b,A=[],P=0;P<T;P++)A[P]=0<_?y.i(P+b)>>>_|y.i(P+b+1)<<32-_:y.i(P+b);return new a(A,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,O_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Fr=a}).apply(typeof Pg<"u"?Pg:typeof self<"u"?self:typeof window<"u"?window:{});var Co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,M_,zs,V_,Yo,Oh,L_,$_,F_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,p){return o==Array.prototype||o==Object.prototype||(o[d]=p.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Co=="object"&&Co];for(var d=0;d<o.length;++d){var p=o[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(o,d){if(d)e:{var p=r;o=o.split(".");for(var v=0;v<o.length-1;v++){var R=o[v];if(!(R in p))break e;p=p[R]}o=o[o.length-1],v=p[o],d=d(v),d!=v&&d!=null&&e(p,o,{configurable:!0,writable:!0,value:d})}}function s(o,d){o instanceof String&&(o+="");var p=0,v=!1,R={next:function(){if(!v&&p<o.length){var j=p++;return{value:d(j,o[j]),done:!1}}return v=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function h(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function f(o,d,p){return o.call.apply(o.bind,arguments)}function m(o,d,p){if(!o)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,v),o.apply(d,R)}}return function(){return o.apply(d,arguments)}}function g(o,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function w(o,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),o.apply(this,v)}}function E(o,d){function p(){}p.prototype=d.prototype,o.aa=d.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(v,R,j){for(var F=Array(arguments.length-2),me=2;me<arguments.length;me++)F[me-2]=arguments[me];return d.prototype[R].apply(v,F)}}function I(o){const d=o.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=o[v];return p}return[]}function S(o,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const R=o.length||0,j=v.length||0;o.length=R+j;for(let F=0;F<j;F++)o[R+F]=v[F]}else o.push(v)}}class N{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(o){return/^[\s\xa0]*$/.test(o)}function O(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var V=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function L(o,d,p){for(const v in o)d.call(p,o[v],v,o)}function y(o,d){for(const p in o)d.call(void 0,o[p],p,o)}function _(o){const d={};for(const p in o)d[p]=o[p];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,d){let p,v;for(let R=1;R<arguments.length;R++){v=arguments[R];for(p in v)o[p]=v[p];for(let j=0;j<b.length;j++)p=b[j],Object.prototype.hasOwnProperty.call(v,p)&&(o[p]=v[p])}}function A(o){var d=1;o=o.split(":");const p=[];for(;0<d&&o.length;)p.push(o.shift()),d--;return o.length&&p.push(o.join(":")),p}function P(o){c.setTimeout(()=>{throw o},0)}function x(){var o=yt;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class ye{constructor(){this.h=this.g=null}add(d,p){const v=nt.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var nt=new N(()=>new gt,o=>o.reset());class gt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,He=!1,yt=new ye,ln=()=>{const o=c.Promise.resolve(void 0);vt=()=>{o.then(Tn)}};var Tn=()=>{for(var o;o=x();){try{o.h.call(o.g)}catch(p){P(p)}var d=nt;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}He=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return o}();function _t(o,d){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,v=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(V){e:{try{D(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else p=="mouseover"?d=o.fromElement:p=="mouseout"&&(d=o.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&_t.aa.h.call(this)}}E(_t,je);var Yt={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),Sn=0;function We(o,d,p,v,R){this.listener=o,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=R,this.key=++Sn,this.da=this.fa=!1}function un(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xt(o){this.src=o,this.g={},this.h=0}Xt.prototype.add=function(o,d,p,v,R){var j=o.toString();o=this.g[j],o||(o=this.g[j]=[],this.h++);var F=fs(o,d,v,R);return-1<F?(d=o[F],p||(d.fa=!1)):(d=new We(d,this.src,j,!!v,R),d.fa=p,o.push(d)),d};function Et(o,d){var p=d.type;if(p in o.g){var v=o.g[p],R=Array.prototype.indexOf.call(v,d,void 0),j;(j=0<=R)&&Array.prototype.splice.call(v,R,1),j&&(un(d),o.g[p].length==0&&(delete o.g[p],o.h--))}}function fs(o,d,p,v){for(var R=0;R<o.length;++R){var j=o[R];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==v)return R}return-1}var ps="closure_lm_"+(1e6*Math.random()|0),ms={};function Ga(o,d,p,v,R){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Ga(o,d[j],p,v,R);return null}return p=Kn(p),o&&o[Qt]?o.K(d,p,h(v)?!!v.capture:!!v,R):Ql(o,d,p,!1,v,R)}function Ql(o,d,p,v,R,j){if(!d)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,me=gs(o);if(me||(o[ps]=me=new Xt(o)),p=me.add(d,p,v,F,j),p.proxy)return p;if(v=Xl(),p.proxy=v,v.src=o,v.listener=p,o.addEventListener)At||(R=F),R===void 0&&(R=!1),o.addEventListener(d.toString(),v,R);else if(o.attachEvent)o.attachEvent(ni(d.toString()),v);else if(o.addListener&&o.removeListener)o.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Xl(){function o(p){return d.call(o.src,o.listener,p)}const d=Jl;return o}function Ya(o,d,p,v,R){if(Array.isArray(d))for(var j=0;j<d.length;j++)Ya(o,d[j],p,v,R);else v=h(v)?!!v.capture:!!v,p=Kn(p),o&&o[Qt]?(o=o.i,d=String(d).toString(),d in o.g&&(j=o.g[d],p=fs(j,p,v,R),-1<p&&(un(j[p]),Array.prototype.splice.call(j,p,1),j.length==0&&(delete o.g[d],o.h--)))):o&&(o=gs(o))&&(d=o.g[d.toString()],o=-1,d&&(o=fs(d,p,v,R)),(p=-1<o?d[o]:null)&&Sr(p))}function Sr(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Qt])Et(d.i,o);else{var p=o.type,v=o.proxy;d.removeEventListener?d.removeEventListener(p,v,o.capture):d.detachEvent?d.detachEvent(ni(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=gs(d))?(Et(p,o),p.h==0&&(p.src=null,d[ps]=null)):un(o)}}}function ni(o){return o in ms?ms[o]:ms[o]="on"+o}function Jl(o,d){if(o.da)o=!0;else{d=new _t(d,this);var p=o.listener,v=o.ha||o.src;o.fa&&Sr(o),o=p.call(v,d)}return o}function gs(o){return o=o[ps],o instanceof Xt?o:null}var Wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kn(o){return typeof o=="function"?o:(o[Wn]||(o[Wn]=function(d){return o.handleEvent(d)}),o[Wn])}function Xe(){qe.call(this),this.i=new Xt(this),this.M=this,this.F=null}E(Xe,qe),Xe.prototype[Qt]=!0,Xe.prototype.removeEventListener=function(o,d,p,v){Ya(this,o,d,p,v)};function Je(o,d){var p,v=o.F;if(v)for(p=[];v;v=v.F)p.push(v);if(o=o.M,v=d.type||d,typeof d=="string")d=new je(d,o);else if(d instanceof je)d.target=d.target||o;else{var R=d;d=new je(v,o),T(d,R)}if(R=!0,p)for(var j=p.length-1;0<=j;j--){var F=d.g=p[j];R=ri(F,v,!0,d)&&R}if(F=d.g=o,R=ri(F,v,!0,d)&&R,R=ri(F,v,!1,d)&&R,p)for(j=0;j<p.length;j++)F=d.g=p[j],R=ri(F,v,!1,d)&&R}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var p=o.g[d],v=0;v<p.length;v++)un(p[v]);delete o.g[d],o.h--}}this.F=null},Xe.prototype.K=function(o,d,p,v){return this.i.add(String(o),d,!1,p,v)},Xe.prototype.L=function(o,d,p,v){return this.i.add(String(o),d,!0,p,v)};function ri(o,d,p,v){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,j=0;j<d.length;++j){var F=d[j];if(F&&!F.da&&F.capture==p){var me=F.listener,rt=F.ha||F.src;F.fa&&Et(o.i,F),R=me.call(rt,v)!==!1&&R}}return R&&!v.defaultPrevented}function Q(o,d,p){if(typeof o=="function")p&&(o=g(o,p));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(o,d||0)}function vs(o){o.g=Q(()=>{o.g=null,o.i&&(o.i=!1,vs(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class Zl extends qe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:vs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){qe.call(this),this.h=o,this.g={}}E(Gn,qe);var eu=[];function Df(o){L(o.g,function(d,p){this.g.hasOwnProperty(p)&&Sr(d)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),Df(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tu=c.JSON.stringify,pb=c.JSON.parse,mb=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function nu(){}nu.prototype.h=null;function Mf(o){return o.h||(o.h=o.i())}function Vf(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ru(){je.call(this,"d")}E(ru,je);function iu(){je.call(this,"c")}E(iu,je);var Ar={},Lf=null;function Qa(){return Lf=Lf||new Xe}Ar.La="serverreachability";function $f(o){je.call(this,Ar.La,o)}E($f,je);function _s(o){const d=Qa();Je(d,new $f(d))}Ar.STAT_EVENT="statevent";function Ff(o,d){je.call(this,Ar.STAT_EVENT,o),this.stat=d}E(Ff,je);function bt(o){const d=Qa();Je(d,new Ff(d,o))}Ar.Ma="timingevent";function Uf(o,d){je.call(this,Ar.Ma,o),this.size=d}E(Uf,je);function bs(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},d)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function gb(o,d,p,v,R,j){o.info(function(){if(o.g)if(j)for(var F="",me=j.split("&"),rt=0;rt<me.length;rt++){var se=me[rt].split("=");if(1<se.length){var lt=se[0];se=se[1];var ut=lt.split("_");F=2<=ut.length&&ut[1]=="type"?F+(lt+"="+se+"&"):F+(lt+"=redacted&")}}else F=null;else F=j;return"XMLHTTP REQ ("+v+") [attempt "+R+"]: "+d+`
`+p+`
`+F})}function vb(o,d,p,v,R,j,F){o.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+R+"]: "+d+`
`+p+`
`+j+" "+F})}function ii(o,d,p,v){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+_b(o,p)+(v?" "+v:"")})}function yb(o,d){o.info(function(){return"TIMEOUT: "+d})}ws.prototype.info=function(){};function _b(o,d){if(!o.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var v=p[o];if(!(2>v.length)){var R=v[1];if(Array.isArray(R)&&!(1>R.length)){var j=R[0];if(j!="noop"&&j!="stop"&&j!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return tu(p)}catch{return d}}var Xa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},su;function Ja(){}E(Ja,nu),Ja.prototype.g=function(){return new XMLHttpRequest},Ja.prototype.i=function(){return{}},su=new Ja;function Yn(o,d,p,v){this.j=o,this.i=d,this.l=p,this.R=v||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var Hf={},au={};function ou(o,d,p){o.L=1,o.v=no(An(d)),o.m=p,o.P=!0,qf(o,null)}function qf(o,d){o.F=Date.now(),Za(o),o.A=An(o.v);var p=o.A,v=o.R;Array.isArray(v)||(v=[String(v)]),sp(p.i,"t",v),o.C=0,p=o.j.J,o.h=new Bf,o.g=Ep(o.j,p?d:null,!o.m),0<o.O&&(o.M=new Zl(g(o.Y,o,o.g),o.O)),d=o.U,p=o.g,v=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(eu[0]=R.toString()),R=eu);for(var j=0;j<R.length;j++){var F=Ga(p,R[j],v||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),_s(),gb(o.i,o.u,o.A,o.l,o.R,o.m)}Yn.prototype.ca=function(o){o=o.target;const d=this.M;d&&Cn(o)==3?d.j():this.Y(o)},Yn.prototype.Y=function(o){try{if(o==this.g)e:{const ut=Cn(this.g);var d=this.g.Ba();const oi=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||dp(this.g)))){this.J||ut!=4||d==7||(d==8||0>=oi?_s(3):_s(2)),cu(this);var p=this.g.Z();this.X=p;t:if(Wf(this)){var v=dp(this.g);o="";var R=v.length,j=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),xs(this);var F="";break t}this.h.i=new c.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,o+=this.h.i.decode(v[d],{stream:!(j&&d==R-1)});v.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=p==200,vb(this.i,this.u,this.A,this.l,this.R,ut,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,rt=this.g;if((me=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(me)){var se=me;break t}}se=null}if(p=se)ii(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lu(this,p);else{this.o=!1,this.s=3,bt(12),Cr(this),xs(this);break e}}if(this.P){p=!0;let Jt;for(;!this.J&&this.C<F.length;)if(Jt=bb(this,F),Jt==au){ut==4&&(this.s=4,bt(14),p=!1),ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Hf){this.s=4,bt(15),ii(this.i,this.l,F,"[Invalid Chunk]"),p=!1;break}else ii(this.i,this.l,Jt,null),lu(this,Jt);if(Wf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||F.length!=0||this.h.h||(this.s=1,bt(16),p=!1),this.o=this.o&&p,!p)ii(this.i,this.l,F,"[Invalid Chunked Response]"),Cr(this),xs(this);else if(0<F.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),mu(lt),lt.M=!0,bt(11))}}else ii(this.i,this.l,F,null),lu(this,F);ut==4&&Cr(this),this.o&&!this.J&&(ut==4?_p(this.j,this):(this.o=!1,Za(this)))}else Vb(this.g),p==400&&0<F.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Cr(this),xs(this)}}}catch{}finally{}};function Wf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bb(o,d){var p=o.C,v=d.indexOf(`
`,p);return v==-1?au:(p=Number(d.substring(p,v)),isNaN(p)?Hf:(v+=1,v+p>d.length?au:(d=d.slice(v,v+p),o.C=v+p,d)))}Yn.prototype.cancel=function(){this.J=!0,Cr(this)};function Za(o){o.S=Date.now()+o.I,Kf(o,o.I)}function Kf(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=bs(g(o.ba,o),d)}function cu(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Yn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(yb(this.i,this.A),this.L!=2&&(_s(),bt(17)),Cr(this),this.s=2,xs(this)):Kf(this,this.S-o)};function xs(o){o.j.G==0||o.J||_p(o.j,o)}function Cr(o){cu(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Df(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function lu(o,d){try{var p=o.j;if(p.G!=0&&(p.g==o||uu(p.h,o))){if(!o.K&&uu(p.h,o)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var R=v;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)oo(p),so(p);else break e;pu(p),bt(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=bs(g(p.Za,p),6e3));if(1>=Qf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Rr(p,11)}else if((o.K||p.g==o)&&oo(p),!k(d))for(R=p.Da.g.parse(d),d=0;d<R.length;d++){let se=R[d];if(p.T=se[0],se=se[1],p.G==2)if(se[0]=="c"){p.K=se[1],p.ia=se[2];const lt=se[3];lt!=null&&(p.la=lt,p.j.info("VER="+p.la));const ut=se[4];ut!=null&&(p.Aa=ut,p.j.info("SVER="+p.Aa));const oi=se[5];oi!=null&&typeof oi=="number"&&0<oi&&(v=1.5*oi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Jt=o.g;if(Jt){const lo=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lo){var j=v.h;j.g||lo.indexOf("spdy")==-1&&lo.indexOf("quic")==-1&&lo.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(hu(j,j.h),j.h=null))}if(v.D){const gu=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;gu&&(v.ya=gu,_e(v.I,v.D,gu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var F=o;if(v.qa=xp(v,v.J?v.ia:null,v.W),F.K){Xf(v.h,F);var me=F,rt=v.L;rt&&(me.I=rt),me.B&&(cu(me),Za(me)),v.g=F}else vp(v);0<p.i.length&&ao(p)}else se[0]!="stop"&&se[0]!="close"||Rr(p,7);else p.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Rr(p,7):fu(p):se[0]!="noop"&&p.l&&p.l.ta(se),p.v=0)}}_s(4)}catch{}}var wb=class{constructor(o,d){this.g=o,this.map=d}};function Gf(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qf(o){return o.h?1:o.g?o.g.size:0}function uu(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function hu(o,d){o.g?o.g.add(d):o.h=d}function Xf(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}Gf.prototype.cancel=function(){if(this.i=Jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const p of o.g.values())d=d.concat(p.D);return d}return I(o.i)}function xb(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var d=[],p=o.length,v=0;v<p;v++)d.push(o[v]);return d}d=[],p=0;for(v in o)d[p++]=o[v];return d}function Eb(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var d=[];o=o.length;for(var p=0;p<o;p++)d.push(p);return d}d=[],p=0;for(const v in o)d[p++]=v;return d}}}function Zf(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var p=Eb(o),v=xb(o),R=v.length,j=0;j<R;j++)d.call(void 0,v[j],p&&p[j],o)}var ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ib(o,d){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var v=o[p].indexOf("="),R=null;if(0<=v){var j=o[p].substring(0,v);R=o[p].substring(v+1)}else j=o[p];d(j,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Pr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Pr){this.h=o.h,eo(this,o.j),this.o=o.o,this.g=o.g,to(this,o.s),this.l=o.l;var d=o.i,p=new Ts;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),tp(this,p),this.m=o.m}else o&&(d=String(o).match(ep))?(this.h=!1,eo(this,d[1]||"",!0),this.o=Es(d[2]||""),this.g=Es(d[3]||"",!0),to(this,d[4]),this.l=Es(d[5]||"",!0),tp(this,d[6]||"",!0),this.m=Es(d[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}Pr.prototype.toString=function(){var o=[],d=this.j;d&&o.push(Is(d,np,!0),":");var p=this.g;return(p||d=="file")&&(o.push("//"),(d=this.o)&&o.push(Is(d,np,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Is(p,p.charAt(0)=="/"?Ab:Sb,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Is(p,Pb)),o.join("")};function An(o){return new Pr(o)}function eo(o,d,p){o.j=p?Es(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function to(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function tp(o,d,p){d instanceof Ts?(o.i=d,Rb(o.i,o.h)):(p||(d=Is(d,Cb)),o.i=new Ts(d,o.h))}function _e(o,d,p){o.i.set(d,p)}function no(o){return _e(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Is(o,d,p){return typeof o=="string"?(o=encodeURI(o).replace(d,Tb),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Tb(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var np=/[#\/\?@]/g,Sb=/[#\?:]/g,Ab=/[#\?]/g,Cb=/[#\?@]/g,Pb=/#/g;function Ts(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function Qn(o){o.g||(o.g=new Map,o.h=0,o.i&&Ib(o.i,function(d,p){o.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ts.prototype,t.add=function(o,d){Qn(this),this.i=null,o=si(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(d),this.h+=1,this};function rp(o,d){Qn(o),d=si(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function ip(o,d){return Qn(o),d=si(o,d),o.g.has(d)}t.forEach=function(o,d){Qn(this),this.g.forEach(function(p,v){p.forEach(function(R){o.call(d,R,v,this)},this)},this)},t.na=function(){Qn(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const R=o[v];for(let j=0;j<R.length;j++)p.push(d[v])}return p},t.V=function(o){Qn(this);let d=[];if(typeof o=="string")ip(this,o)&&(d=d.concat(this.g.get(si(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)d=d.concat(o[p])}return d},t.set=function(o,d){return Qn(this),this.i=null,o=si(this,o),ip(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},t.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function sp(o,d,p){rp(o,d),0<p.length&&(o.i=null,o.g.set(si(o,d),I(p)),o.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const j=encodeURIComponent(String(v)),F=this.V(v);for(v=0;v<F.length;v++){var R=j;F[v]!==""&&(R+="="+encodeURIComponent(String(F[v]))),o.push(R)}}return this.i=o.join("&")};function si(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Rb(o,d){d&&!o.j&&(Qn(o),o.i=null,o.g.forEach(function(p,v){var R=v.toLowerCase();v!=R&&(rp(this,v),sp(this,R,p))},o)),o.j=d}function kb(o,d){const p=new ws;if(c.Image){const v=new Image;v.onload=w(Xn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=w(Xn,p,"TestLoadImage: error",!1,d,v),v.onabort=w(Xn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=w(Xn,p,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=o}else d(!1)}function Nb(o,d){const p=new ws,v=new AbortController,R=setTimeout(()=>{v.abort(),Xn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:v.signal}).then(j=>{clearTimeout(R),j.ok?Xn(p,"TestPingServer: ok",!0,d):Xn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),Xn(p,"TestPingServer: error",!1,d)})}function Xn(o,d,p,v,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),v(p)}catch{}}function jb(){this.g=new mb}function Ob(o,d,p){const v=p||"";try{Zf(o,function(R,j){let F=R;h(R)&&(F=tu(R)),d.push(v+j+"="+encodeURIComponent(F))})}catch(R){throw d.push(v+"type="+encodeURIComponent("_badmap")),R}}function Ss(o){this.l=o.Ub||null,this.j=o.eb||!1}E(Ss,nu),Ss.prototype.g=function(){return new ro(this.l,this.j)},Ss.prototype.i=function(o){return function(){return o}}({});function ro(o,d){Xe.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(ro,Xe),t=ro.prototype,t.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,Cs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ap(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ap(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?As(this):Cs(this),this.readyState==3&&ap(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,As(this))},t.Qa=function(o){this.g&&(this.response=o,As(this))},t.ga=function(){this.g&&As(this)};function As(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cs(o)}t.setRequestHeader=function(o,d){this.u.append(o,d)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=d.next();return o.join(`\r
`)};function Cs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function op(o){let d="";return L(o,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function du(o,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=op(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):_e(o,d,p))}function Ae(o){Xe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Ae,Xe);var Db=/^https?$/i,Mb=["POST","PUT"];t=Ae.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():su.g(),this.v=this.o?Mf(this.o):Mf(su),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(j){cp(this,j);return}if(o=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var R in v)p.set(R,v[R]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())p.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Mb,d,void 0))||v||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,F]of p)this.g.setRequestHeader(j,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hp(this),this.u=!0,this.g.send(o),this.u=!1}catch(j){cp(this,j)}};function cp(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,lp(o),io(o)}function lp(o){o.A||(o.A=!0,Je(o,"complete"),Je(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Je(this,"complete"),Je(this,"abort"),io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),io(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?up(this):this.bb())},t.bb=function(){up(this)};function up(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Cn(o)!=4||o.Z()!=2)){if(o.u&&Cn(o)==4)Q(o.Ea,0,o);else if(Je(o,"readystatechange"),Cn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=F===0){var R=String(o.D).match(ep)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),v=!Db.test(R?R.toLowerCase():"")}p=v}if(p)Je(o,"complete"),Je(o,"success");else{o.m=6;try{var j=2<Cn(o)?o.g.statusText:""}catch{j=""}o.l=j+" ["+o.Z()+"]",lp(o)}}finally{io(o)}}}}function io(o,d){if(o.g){hp(o);const p=o.g,v=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||Je(o,"ready");try{p.onreadystatechange=v}catch{}}}function hp(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Cn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),pb(d)}};function dp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vb(o){const d={};o=(o.g&&2<=Cn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<o.length;v++){if(k(o[v]))continue;var p=A(o[v]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[R]||[];d[R]=j,j.push(p)}y(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||d}function fp(o){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Gf(o&&o.concurrentRequestLimit),this.Da=new jb,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fp.prototype,t.la=8,t.G=1,t.connect=function(o,d,p,v){bt(0),this.W=o,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=xp(this,null,this.W),ao(this)};function fu(o){if(pp(o),o.G==3){var d=o.U++,p=An(o.I);if(_e(p,"SID",o.K),_e(p,"RID",d),_e(p,"TYPE","terminate"),Rs(o,p),d=new Yn(o,o.j,d),d.L=2,d.v=no(An(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Ep(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Za(d)}wp(o)}function so(o){o.g&&(mu(o),o.g.cancel(),o.g=null)}function pp(o){so(o),o.u&&(c.clearTimeout(o.u),o.u=null),oo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ao(o){if(!Yf(o.h)&&!o.s){o.s=!0;var d=o.Ga;vt||ln(),He||(vt(),He=!0),yt.add(d,o),o.B=0}}function Lb(o,d){return Qf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=bs(g(o.Ga,o,d),bp(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Yn(this,this.j,o);let j=this.o;if(this.S&&(j?(j=_(j),T(j,this.S)):j=this.S),this.m!==null||this.O||(R.H=j,j=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=gp(this,R,d),p=An(this.I),_e(p,"RID",o),_e(p,"CVER",22),this.D&&_e(p,"X-HTTP-Session-Id",this.D),Rs(this,p),j&&(this.O?d="headers="+encodeURIComponent(String(op(j)))+"&"+d:this.m&&du(p,this.m,j)),hu(this.h,R),this.Ua&&_e(p,"TYPE","init"),this.P?(_e(p,"$req",d),_e(p,"SID","null"),R.T=!0,ou(R,p,null)):ou(R,p,d),this.G=2}}else this.G==3&&(o?mp(this,o):this.i.length==0||Yf(this.h)||mp(this))};function mp(o,d){var p;d?p=d.l:p=o.U++;const v=An(o.I);_e(v,"SID",o.K),_e(v,"RID",p),_e(v,"AID",o.T),Rs(o,v),o.m&&o.o&&du(v,o.m,o.o),p=new Yn(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),d&&(o.i=d.D.concat(o.i)),d=gp(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),hu(o.h,p),ou(p,v,d)}function Rs(o,d){o.H&&L(o.H,function(p,v){_e(d,v,p)}),o.l&&Zf({},function(p,v){_e(d,v,p)})}function gp(o,d,p){p=Math.min(o.i.length,p);var v=o.l?g(o.l.Na,o.l,o):null;e:{var R=o.i;let j=-1;for(;;){const F=["count="+p];j==-1?0<p?(j=R[0].g,F.push("ofs="+j)):j=0:F.push("ofs="+j);let me=!0;for(let rt=0;rt<p;rt++){let se=R[rt].g;const lt=R[rt].map;if(se-=j,0>se)j=Math.max(0,R[rt].g-100),me=!1;else try{Ob(lt,F,"req"+se+"_")}catch{v&&v(lt)}}if(me){v=F.join("&");break e}}}return o=o.i.splice(0,p),d.D=o,v}function vp(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;vt||ln(),He||(vt(),He=!0),yt.add(d,o),o.v=0}}function pu(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=bs(g(o.Fa,o),bp(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,yp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=bs(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),so(this),yp(this))};function mu(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function yp(o){o.g=new Yn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=An(o.qa);_e(d,"RID","rpc"),_e(d,"SID",o.K),_e(d,"AID",o.T),_e(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&_e(d,"TO",o.ja),_e(d,"TYPE","xmlhttp"),Rs(o,d),o.m&&o.o&&du(d,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=no(An(d)),p.m=null,p.P=!0,qf(p,o)}t.Za=function(){this.C!=null&&(this.C=null,so(this),pu(this),bt(19))};function oo(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function _p(o,d){var p=null;if(o.g==d){oo(o),mu(o),o.g=null;var v=2}else if(uu(o.h,d))p=d.D,Xf(o.h,d),v=1;else return;if(o.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var R=o.B;v=Qa(),Je(v,new Uf(v,p)),ao(o)}else vp(o);else if(R=d.s,R==3||R==0&&0<d.X||!(v==1&&Lb(o,d)||v==2&&pu(o)))switch(p&&0<p.length&&(d=o.h,d.i=d.i.concat(p)),R){case 1:Rr(o,5);break;case 4:Rr(o,10);break;case 3:Rr(o,6);break;default:Rr(o,2)}}}function bp(o,d){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*d}function Rr(o,d){if(o.j.info("Error code "+d),d==2){var p=g(o.fb,o),v=o.Xa;const R=!v;v=new Pr(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||eo(v,"https"),no(v),R?kb(v.toString(),p):Nb(v.toString(),p)}else bt(2);o.G=0,o.l&&o.l.sa(d),wp(o),pp(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function wp(o){if(o.G=0,o.ka=[],o.l){const d=Jf(o.h);(d.length!=0||o.i.length!=0)&&(S(o.ka,d),S(o.ka,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.ra()}}function xp(o,d,p){var v=p instanceof Pr?An(p):new Pr(p);if(v.g!="")d&&(v.g=d+"."+v.g),to(v,v.s);else{var R=c.location;v=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var j=new Pr(null);v&&eo(j,v),d&&(j.g=d),R&&to(j,R),p&&(j.l=p),v=j}return p=o.D,d=o.ya,p&&d&&_e(v,p,d),_e(v,"VER",o.la),Rs(o,v),v}function Ep(o,d,p){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new Ae(new Ss({eb:p})):new Ae(o.pa),d.Ha(o.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ip(){}t=Ip.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function co(){}co.prototype.g=function(o,d){return new Ct(o,d)};function Ct(o,d){Xe.call(this),this.g=new fp(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!k(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new ai(this)}E(Ct,Xe),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){fu(this.g)},Ct.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=tu(o),o=p);d.i.push(new wb(d.Ya++,o)),d.G==3&&ao(d)},Ct.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,Ct.aa.N.call(this)};function Tp(o){ru.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const p in d){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}E(Tp,ru);function Sp(){iu.call(this),this.status=1}E(Sp,iu);function ai(o){this.g=o}E(ai,Ip),ai.prototype.ua=function(){Je(this.g,"a")},ai.prototype.ta=function(o){Je(this.g,new Tp(o))},ai.prototype.sa=function(o){Je(this.g,new Sp)},ai.prototype.ra=function(){Je(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,F_=function(){return new co},$_=function(){return Qa()},L_=Ar,Oh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xa.NO_ERROR=0,Xa.TIMEOUT=8,Xa.HTTP_ERROR=6,Yo=Xa,zf.COMPLETE="complete",V_=zf,Vf.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,zs=Vf,M_=Ss,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,D_=Ae}).apply(typeof Co<"u"?Co:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new md("@firebase/firestore");function Os(){return Kr.logLevel}function z(t,...e){if(Kr.logLevel<=te.DEBUG){const n=e.map(nf);Kr.debug(`Firestore (${ss}): ${t}`,...n)}}function Fn(t,...e){if(Kr.logLevel<=te.ERROR){const n=e.map(nf);Kr.error(`Firestore (${ss}): ${t}`,...n)}}function Bi(t,...e){if(Kr.logLevel<=te.WARN){const n=e.map(nf);Kr.warn(`Firestore (${ss}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function ve(t,e){t||K()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class HN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qN{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new U_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new ft(e)}}class WN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new GN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ye(0,0))}static max(){return new Y(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends ga{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const XN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends ga{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return XN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new B(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(xe.fromString(e))}static fromName(e){return new q(xe.fromString(e).popFirst(5))}static empty(){return new q(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new xe(e.slice()))}}function JN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new _r(i,q.empty(),e)}function ZN(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(Y.min(),q.empty(),-1)}static max(){return new _r(Y.max(),q.empty(),-1)}}function ej(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==tj)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++c,c===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function rj(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function za(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rf.oe=-1;function Vl(t){return t==null}function Ic(t){return t===0&&1/t==-1/0}function ij(t){return typeof t=="number"&&Number.isInteger(t)&&!Ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new rn([])}unionWith(e){let n=new ot(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new H_("Invalid base64 string: "+s):s}}(e);return new mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const sj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(ve(!!t),typeof t=="string"){let e=0;const n=sj.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function af(t){const e=t.mapValue.fields.__previous_value__;return sf(e)?af(e):e}function va(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n,r,i,s,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sf(t)?4:oj(t)?9007199254740991:10:K()}function In(t,e){if(t===e)return!0;const n=Yr(t);if(n!==Yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return va(t).isEqual(va(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=br(i.timestampValue),c=br(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Fe(i.doubleValue),c=Fe(s.doubleValue);return a===c?Ic(a)===Ic(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(kg(a)!==kg(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!In(a[u],c[u])))return!1;return!0}(t,e);default:return K()}}function _a(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=Yr(t),r=Yr(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Fe(s.integerValue||s.doubleValue),u=Fe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return jg(t.timestampValue,e.timestampValue);case 4:return jg(va(t),va(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,a){const c=Gr(s),u=Gr(a);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ce(c[h],u[h]);if(f!==0)return f}return ce(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const c=ce(Fe(s.latitude),Fe(a.latitude));return c!==0?c:ce(Fe(s.longitude),Fe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,a){const c=s.values||[],u=a.values||[];for(let h=0;h<c.length&&h<u.length;++h){const f=qi(c[h],u[h]);if(f)return f}return ce(c.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ro.mapValue&&a===Ro.mapValue)return 0;if(s===Ro.mapValue)return 1;if(a===Ro.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ce(u[m],f[m]);if(g!==0)return g;const w=qi(c[u[m]],h[f[m]]);if(w!==0)return w}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function jg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=br(t),r=br(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Wi(t){return Dh(t)}function Dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Dh(n.fields[a])}`;return i+"}"}(t.mapValue):K()}function Og(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mh(t){return!!t&&"integerValue"in t}function of(t){return!!t&&"arrayValue"in t}function Dg(t){return!!t&&"nullValue"in t}function Mg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oj(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=c.popLast()}a?r[c.lastSegment()]=Qs(a):i.push(c.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){as(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(Qs(this.value))}}function q_(t){const e=[];return as(t.fields,(n,r)=>{const i=new at([n]);if(Qo(r)){const s=q_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new rn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new pt(e,0,Y.min(),Y.min(),Y.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Y.min(),Y.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Y.min(),Y.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.position=e,this.inclusive=n}}function Vg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),n.key):r=qi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function cj(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{}class Be extends W_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uj(e,n,r):n==="array-contains"?new fj(e,r):n==="in"?new pj(e,r):n==="not-in"?new mj(e,r):n==="array-contains-any"?new gj(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hj(e,r):new dj(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qi(n,this.value)):n!==null&&Yr(this.value)===Yr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return K_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function K_(t){return t.op==="and"}function G_(t){return lj(t)&&K_(t)}function lj(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Vh(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(G_(t))return t.filters.map(e=>Vh(e)).join(",");{const e=t.filters.map(n=>Vh(n)).join(",");return`${t.op}(${e})`}}function Y_(t,e){return t instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Y_(a,i.filters[c]),!0):!1}(t,e):void K()}function Q_(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class uj extends Be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hj extends Be{constructor(e,n){super(e,"in",n),this.keys=X_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dj extends Be{constructor(e,n){super(e,"not-in",n),this.keys=X_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function X_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class fj extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return of(n)&&_a(n.arrayValue,this.value)}}class pj extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_a(this.value.arrayValue,n)}}class mj extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(_a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_a(this.value.arrayValue,n)}}class gj extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(e,n=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function $g(t,e=null,n=[],r=[],i=null,s=null,a=null){return new vj(t,e,n,r,i,s,a)}function cf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.ue=n}return e.ue}function lf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cj(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lg(t.startAt,e.startAt)&&Lg(t.endAt,e.endAt)}function Lh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yj(t,e,n,r,i,s,a,c){return new Ba(t,e,n,r,i,s,a,c)}function J_(t){return new Ba(t)}function Fg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z_(t){return t.collectionGroup!==null}function Xs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ot(at.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Sc(s,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Sc(at.keyField(),r))}return e.ce}function xn(t){const e=X(t);return e.le||(e.le=_j(e,Xs(t))),e.le}function _j(t,e){if(t.limitType==="F")return $g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Sc(i.field,s)});const n=t.endAt?new Tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tc(t.startAt.position,t.startAt.inclusive):null;return $g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $h(t,e){const n=t.filters.concat([e]);return new Ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fh(t,e,n){return new Ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ll(t,e){return lf(xn(t),xn(e))&&t.limitType===e.limitType}function e0(t){return`${cf(xn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Q_(i)).join(", ")}]`),Vl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wi(i)).join(",")),`Target(${r})`}(xn(t))}; limitType=${t.limitType})`}function $l(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const h=Vg(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,Xs(r),i)||r.endAt&&!function(a,c,u){const h=Vg(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,Xs(r),i))}(t,e)}function bj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function t0(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=wj(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wj(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,a,c){const u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?qi(u,h):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xj=new Se(q.comparator);function Un(){return xj}const n0=new Se(q.comparator);function Bs(...t){let e=n0;for(const n of t)e=e.insert(n.key,n);return e}function r0(t){let e=n0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Js()}function i0(){return Js()}function Js(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ej=new Se(q.comparator),Ij=new ot(q.comparator);function ee(...t){let e=Ij;for(const n of t)e=e.add(n);return e}const Tj=new ot(ce);function Sj(){return Tj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ic(e)?"-0":e}}function a0(t){return{integerValue:""+t}}function Aj(t,e){return ij(e)?a0(e):s0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this._=void 0}}function Cj(t,e,n){return t instanceof Ac?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sf(s)&&(s=af(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof ba?c0(t,e):t instanceof wa?l0(t,e):function(i,s){const a=o0(i,s),c=Ug(a)+Ug(i.Pe);return Mh(a)&&Mh(i.Pe)?a0(c):s0(i.serializer,c)}(t,e)}function Pj(t,e,n){return t instanceof ba?c0(t,e):t instanceof wa?l0(t,e):n}function o0(t,e){return t instanceof Cc?function(r){return Mh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ac extends Fl{}class ba extends Fl{constructor(e){super(),this.elements=e}}function c0(t,e){const n=u0(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class wa extends Fl{constructor(e){super(),this.elements=e}}function l0(t,e){let n=u0(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Cc extends Fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ug(t){return Fe(t.integerValue||t.doubleValue)}function u0(t){return of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Rj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ba&&i instanceof ba||r instanceof wa&&i instanceof wa?Hi(r.elements,i.elements,In):r instanceof Cc&&i instanceof Cc?In(r.Pe,i.Pe):r instanceof Ac&&i instanceof Ac}(t.transform,e.transform)}class kj{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function h0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new f0(t.key,On.none()):new Ha(t.key,t.data,On.none());{const n=t.data,r=zt.empty();let i=new ot(at.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ei(t.key,r,new rn(i.toArray()),On.none())}}function Nj(t,e,n){t instanceof Ha?function(i,s,a){const c=i.value.clone(),u=Bg(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(i,s,a){if(!Xo(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Bg(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(d0(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Ha?function(s,a,c,u){if(!Xo(s.precondition,a))return c;const h=s.value.clone(),f=Hg(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,a,c,u){if(!Xo(s.precondition,a))return c;const h=Hg(s.fieldTransforms,u,a),f=a.data;return f.setAll(d0(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,c){return Xo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function jj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=o0(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function zg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,a)=>Rj(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ha extends Ul{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends Ul{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function d0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bg(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Pj(a,c,n[i]))}return r}function Hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,Cj(s,a,e))}return r}class f0 extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oj extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Nj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=i0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=n.has(i.key)?null:c;const u=h0(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>zg(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>zg(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return Ej}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ne;function Lj(t){switch(t){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function p0(t){if(t===void 0)return Fn("GRPC error has no .code"),M.UNKNOWN;switch(t){case $e.OK:return M.OK;case $e.CANCELLED:return M.CANCELLED;case $e.UNKNOWN:return M.UNKNOWN;case $e.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case $e.INTERNAL:return M.INTERNAL;case $e.UNAVAILABLE:return M.UNAVAILABLE;case $e.UNAUTHENTICATED:return M.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case $e.NOT_FOUND:return M.NOT_FOUND;case $e.ALREADY_EXISTS:return M.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return M.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case $e.ABORTED:return M.ABORTED;case $e.OUT_OF_RANGE:return M.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return M.UNIMPLEMENTED;case $e.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(ne=$e||($e={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $j(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj=new Fr([4294967295,4294967295],0);function qg(t){const e=$j().encode(t),n=new O_;return n.update(e),new Uint8Array(n.digest())}function Wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(Fj)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=qg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new hf(s,i,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=qg(e),[r,i]=Wg(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zl(Y.min(),i,new Se(ce),Un(),ee())}}class qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qa(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class m0{constructor(e,n){this.targetId=e,this.me=n}}class g0{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Kg{constructor(){this.fe=0,this.ge=Yg(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new qa(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Yg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Uj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Gg(),this.Qe=new Se(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Lh(s))if(r===0){const a=new q(s.path);this.Ue(n,a,pt.newNoDocument(a,Y.min()))}else ve(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),u=c?this.Xe(c,e,a):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,c;try{a=Gr(r).toUint8Array()}catch(u){if(u instanceof H_)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new hf(a,i,s)}catch(u){return Bi(u instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const c=this.Je(a);if(c){if(s.current&&Lh(c.target)){const u=new q(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,pt.newNoDocument(u,e))}s.be&&(n.set(a,s.Ce()),s.ve())}});let r=ee();this.qe.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new zl(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=Gg(),this.Qe=new Se(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Kg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Kg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gg(){return new Se(q.comparator)}function Yg(){return new Se(q.comparator)}const zj={asc:"ASCENDING",desc:"DESCENDING"},Bj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hj={and:"AND",or:"OR"};class qj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uh(t,e){return t.useProto3Json||Vl(e)?e:{value:e}}function Pc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function v0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wj(t,e){return Pc(t,e.toTimestamp())}function En(t){return ve(!!t),Y.fromTimestamp(function(n){const r=br(n);return new Ye(r.seconds,r.nanos)}(t))}function df(t,e){return zh(t,e).canonicalString()}function zh(t,e){const n=function(i){return new xe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function y0(t){const e=xe.fromString(t);return ve(E0(e)),e}function Bh(t,e){return df(t.databaseId,e.path)}function Fu(t,e){const n=y0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(b0(n))}function _0(t,e){return df(t.databaseId,e)}function Kj(t){const e=y0(t);return e.length===4?xe.emptyPath():b0(e)}function Hh(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b0(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qg(t,e,n){return{name:Bh(t,e),fields:n.value.mapValue.fields}}function Gj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ve(f===void 0||typeof f=="string"),mt.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),mt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?M.UNKNOWN:p0(h.code);return new B(f,h.message||"")}(a);n=new g0(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fu(t,r.document.name),s=En(r.document.updateTime),a=r.document.createTime?En(r.document.createTime):Y.min(),c=new zt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Jo(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fu(t,r.document),s=r.readTime?En(r.readTime):Y.min(),a=pt.newNoDocument(i,s),c=r.removedTargetIds||[];n=new Jo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fu(t,r.document),s=r.removedTargetIds||[];n=new Jo([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Vj(i,s),c=r.targetId;n=new m0(c,a)}}return n}function Yj(t,e){let n;if(e instanceof Ha)n={update:Qg(t,e.key,e.value)};else if(e instanceof f0)n={delete:Bh(t,e.key)};else if(e instanceof ei)n={update:Qg(t,e.key,e.data),updateMask:i9(e.fieldMask)};else{if(!(e instanceof Oj))return K();n={verify:Bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Ac)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ba)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wa)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cc)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Wj(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function Qj(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?En(i.updateTime):En(s);return a.isEqual(Y.min())&&(a=En(s)),new kj(a,i.transformResults||[])}(n,e))):[]}function Xj(t,e){return{documents:[_0(t,e.path)]}}function Jj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_0(t,i);const s=function(h){if(h.length!==0)return x0(on.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:_i(g.field),direction:t9(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Uh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function Zj(t){let e=Kj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=w0(m);return g instanceof on&&G_(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(E){return new Sc(bi(E.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(m){let g;return g=typeof m=="object"?m.value:m,Vl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,w=m.values||[];return new Tc(w,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,w=m.values||[];return new Tc(w,g)}(n.endAt)),yj(e,i,a,s,c,"F",u,h)}function e9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bi(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=bi(n.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bi(n.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=bi(n.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(bi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>w0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function t9(t){return zj[t]}function n9(t){return Bj[t]}function r9(t){return Hj[t]}function _i(t){return{fieldPath:t.canonicalString()}}function bi(t){return at.fromServerFormat(t.fieldPath)}function x0(t){return t instanceof Be?function(n){if(n.op==="=="){if(Mg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(Dg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(Dg(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:n9(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>x0(i));return r.length===1?r[0]:{compositeFilter:{op:r9(n.op),filters:r}}}(t):K()}function i9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function E0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=Y.min(),a=Y.min(),c=mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e){this.ct=e}}function a9(t){const e=Zj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(){this._n=new c9}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(_r.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class c9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ki(0)}static Ln(){return new Ki(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l9{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,rn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Bs();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,i){let s=Un();const a=Js(),c=function(){return Js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ei)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Zs(f.mutation,h,f.mutation.getFieldMask(),Ye.now())):a.set(h.key,rn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return c.set(h,new u9(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new Se((a,c)=>a-c),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||rn.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(i.get(c.batchId)||ee()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=i0();f.forEach(g=>{if(!s.has(g)){const w=h0(n.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return $.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Z_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Vr());let c=-1,u=s;return a.next(h=>$.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:c,changes:r0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,s).next(c=>$.forEach(c,u=>{const h=function(m,g){return new Ba(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,pt.newInvalidDocument(f)))});let c=Bs();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Zs(f.mutation,h,rn.empty(),Ye.now()),$l(n,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:a9(i.bundledQuery),readTime:En(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f9{constructor(){this.overlays=new Se(q.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,a=new q(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return $.resolve(c)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Mj(n,r));let s=this.hr.get(n);s===void 0&&(s=ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.Pr=new ot(Ze.Ir),this.Tr=new ot(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new xe([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new xe([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=ee();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(Ze.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dj(s,n,r,i);this.mutationQueue.push(a);for(const c of i)this.wr=this.wr.add(new Ze(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(a)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const c=this.Sr(a.pr);s.push(c)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(ce);return n.forEach(i=>{const s=new Ze(i,0),a=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],c=>{r=r.add(c.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Ze(new q(s),0);let c=new ot(ce);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.pr)),!0)},a),$.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m9{constructor(e){this.vr=e,this.docs=function(){return new Se(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const a=n.path,c=new q(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ej(ZN(f),r)<=0||(i.has(f.key)||$l(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new g9(this)}getSize(e){return $.resolve(this.size)}}class g9 extends l9{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(e){this.persistence=e,this.Mr=new os(n=>cf(n),lf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ff,this.targetCount=0,this.Lr=Ki.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ki(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(e,n){this.Br={},this.overlays={},this.kr=new rf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new v9(this),this.indexManager=new o9,this.remoteDocumentCache=function(i){return new m9(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new s9(n),this.$r=new d9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new p9(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new _9(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class _9 extends nj{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.zr=new ff,this.jr=null}static Hr(e){return new pf(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return KT()?8:rj(ct())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new b9;return this.Ji(e,n,a).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Os()<=te.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(Os()<=te.DEBUG&&z("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Os()<=te.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):$.resolve())}ji(e,n){if(Fg(n))return $.resolve(null);let r=xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fh(n,null,"F"),r=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Zi(n,c);return this.Xi(n,h,a,u.readTime)?this.ji(e,Fh(n,null,"F")):this.es(e,h,n,u)}))})))}Hi(e,n,r,i){return Fg(n)||i.isEqual(Y.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,r,i)?$.resolve(null):(Os()<=te.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.es(e,a,n,JN(i,-1)).next(c=>c))})}Zi(e,n){let r=new ot(t0(e));return n.forEach((i,s)=>{$l(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Os()<=te.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",yi(n)),this.zi.getDocumentsMatchingQuery(e,n,_r.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Se(ce),this.rs=new os(s=>cf(s),lf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h9(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function E9(t,e,n,r){return new x9(t,e,n,r)}async function I0(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=ee();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function I9(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,g=m.keys();let w=$.resolve();return g.forEach(E=>{w=w.next(()=>f.getEntry(u,E)).next(I=>{const S=h.docVersions.get(E);ve(S!==null),I.version.compareTo(S)<0&&(m.applyToRemoteDocument(I,h),I.isValidDocument()&&(I.setReadTime(h.commitVersion),f.addEntry(I)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function T0(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function T9(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const c=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;c.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(mt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(m,w),function(I,S,N){return I.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,w,f)&&c.push(n.Qr.updateTargetData(s,w))});let u=Un(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(S9(s,a,e.documentUpdates).next(f=>{u=f.cs,h=f.ls})),!r.isEqual(Y.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(m=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return $.waitFor(c).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.ns=i,s))}function S9(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Un();return n.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{cs:a,ls:i}})}function A9(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function C9(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(a=>(i=new lr(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function qh(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!za(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Xg(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=X(u),g=m.rs.get(f);return g!==void 0?$.resolve(m.ns.get(g)):m.Qr.getTargetData(h,f)}(r,a,xn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?i:Y.min(),n?s:ee())).next(c=>(P9(r,bj(e),c),{documents:c,hs:s})))}function P9(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Jg{constructor(){this.activeTargetIds=Sj()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R9{constructor(){this.no=new Jg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k9{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=null;function Uu(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class O9 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,a){const c=Uu(),u=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${c}:`,u,i);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,s,a),this.Mo(n,u,h,i).then(f=>(z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Bi("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,s,a,c){return this.Co(n,r,i,s,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}vo(n,r){const i=N9[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Uu();return new Promise((a,c)=>{const u=new D_;u.setWithCredentials(!0),u.listenOnce(V_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yo.NO_ERROR:const f=u.getResponseJson();z(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Yo.TIMEOUT:z(ht,`RPC '${e}' ${s} timed out`),c(new B(M.DEADLINE_EXCEEDED,"Request time out"));break;case Yo.HTTP_ERROR:const m=u.getStatus();if(z(ht,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const E=function(S){const N=S.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(N)>=0?N:M.UNKNOWN}(w.status);c(new B(E,w.message))}else c(new B(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{z(ht,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);z(ht,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Oo(e,n,r){const i=Uu(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=F_(),c=$_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new M_({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");z(ht,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let g=!1,w=!1;const E=new j9({lo:S=>{w?z(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(g||(z(ht,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),z(ht,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},ho:()=>m.close()}),I=(S,N,k)=>{S.listen(N,O=>{try{k(O)}catch(D){setTimeout(()=>{throw D},0)}})};return I(m,zs.EventType.OPEN,()=>{w||(z(ht,`RPC '${e}' stream ${i} transport opened.`),E.mo())}),I(m,zs.EventType.CLOSE,()=>{w||(w=!0,z(ht,`RPC '${e}' stream ${i} transport closed`),E.po())}),I(m,zs.EventType.ERROR,S=>{w||(w=!0,Bi(ht,`RPC '${e}' stream ${i} transport errored:`,S),E.po(new B(M.UNAVAILABLE,"The operation could not be completed")))}),I(m,zs.EventType.MESSAGE,S=>{var N;if(!w){const k=S.data[0];ve(!!k);const O=k,D=O.error||((N=O[0])===null||N===void 0?void 0:N.error);if(D){z(ht,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let L=function(b){const T=$e[b];if(T!==void 0)return p0(T)}(V),y=D.message;L===void 0&&(L=M.INTERNAL,y="Unknown error status: "+V+" with message "+D.message),w=!0,E.po(new B(L,y)),m.close()}else z(ht,`RPC '${e}' stream ${i} received:`,k),E.yo(k)}}),I(c,L_.STAT_EVENT,S=>{S.stat===Oh.PROXY?z(ht,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Oh.NOPROXY&&z(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.fo()},0),E}}function zu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){return new qj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n,r,i,s,a,c,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new S0(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new B(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class D9 extends A0{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Gj(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?En(a.readTime):Y.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Hh(this.serializer),n.addTarget=function(s,a){let c;const u=a.target;if(c=Lh(u)?{documents:Xj(s,u)}:{query:Jj(s,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=v0(s,a.resumeToken);const h=Uh(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(Y.min())>0){c.readTime=Pc(s,a.snapshotVersion.toTimestamp());const h=Uh(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=e9(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Hh(this.serializer),n.removeTarget=e,this.i_(n)}}class M9 extends A0{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Qj(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.A_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Hh(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Yj(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V9 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,zh(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(M.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,zh(n,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(M.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class L9{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fn(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{ti(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=X(u);h.M_.add(4),await Wa(h),h.N_.set("Unknown"),h.M_.delete(4),await Hl(h)}(this))})}),this.N_=new L9(r,i)}}async function Hl(t){if(ti(t))for(const e of t.x_)await e(!0)}async function Wa(t){for(const e of t.x_)await e(!1)}function C0(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),_f(n)?yf(n):cs(n).Xo()&&vf(n,e))}function gf(t,e){const n=X(t),r=cs(n);n.F_.delete(e),r.Xo()&&P0(n,e),n.F_.size===0&&(r.Xo()?r.n_():ti(n)&&n.N_.set("Unknown"))}function vf(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}cs(t).P_(e)}function P0(t,e){t.L_.xe(e),cs(t).I_(e)}function yf(t){t.L_=new Uj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),cs(t).start(),t.N_.w_()}function _f(t){return ti(t)&&!cs(t).Zo()&&t.F_.size>0}function ti(t){return X(t).M_.size===0}function R0(t){t.L_=void 0}async function F9(t){t.N_.set("Online")}async function U9(t){t.F_.forEach((e,n)=>{vf(t,e)})}async function z9(t,e){R0(t),_f(t)?(t.N_.D_(e),yf(t)):t.N_.set("Unknown")}async function B9(t,e,n){if(t.N_.set("Online"),e instanceof g0&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.F_.delete(c),i.L_.removeTarget(c))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rc(t,r)}else if(e instanceof Jo?t.L_.Ke(e):e instanceof m0?t.L_.He(e):t.L_.We(e),!n.isEqual(Y.min()))try{const r=await T0(t.localStore);n.compareTo(r)>=0&&await function(s,a){const c=s.L_.rt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.F_.get(h);f&&s.F_.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=s.F_.get(u);if(!f)return;s.F_.set(u,f.withResumeToken(mt.EMPTY_BYTE_STRING,f.snapshotVersion)),P0(s,u);const m=new lr(f.target,u,h,f.sequenceNumber);vf(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Rc(t,r)}}async function Rc(t,e,n){if(!za(e))throw e;t.M_.add(1),await Wa(t),t.N_.set("Offline"),n||(n=()=>T0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Hl(t)})}function k0(t,e){return e().catch(n=>Rc(t,n,e))}async function ql(t){const e=X(t),n=wr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;H9(e);)try{const i=await A9(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,q9(e,i)}catch(i){await Rc(e,i)}N0(e)&&j0(e)}function H9(t){return ti(t)&&t.v_.length<10}function q9(t,e){t.v_.push(e);const n=wr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function N0(t){return ti(t)&&!wr(t).Zo()&&t.v_.length>0}function j0(t){wr(t).start()}async function W9(t){wr(t).V_()}async function K9(t){const e=wr(t);for(const n of t.v_)e.d_(n.mutations)}async function G9(t,e,n){const r=t.v_.shift(),i=uf.from(r,e,n);await k0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ql(t)}async function Y9(t,e){e&&wr(t).E_&&await async function(r,i){if(function(a){return Lj(a)&&a!==M.ABORTED}(i.code)){const s=r.v_.shift();wr(r).t_(),await k0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ql(r)}}(t,e),N0(t)&&j0(t)}async function ev(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.M_.add(3),await Wa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Hl(n)}async function Q9(t,e){const n=X(t);e?(n.M_.delete(2),await Hl(n)):e||(n.M_.add(2),await Wa(n),n.N_.set("Unknown"))}function cs(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new D9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:F9.bind(null,t),To:U9.bind(null,t),Ao:z9.bind(null,t),h_:B9.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),_f(t)?yf(t):t.N_.set("Unknown")):(await t.B_.stop(),R0(t))})),t.B_}function wr(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new M9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:W9.bind(null,t),Ao:Y9.bind(null,t),R_:K9.bind(null,t),A_:G9.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ql(t)):(await t.k_.stop(),t.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,c=new bf(e,n,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wf(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),za(t))return new B(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.q_=new Se(q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,a,c,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Gi(e,n,ji.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class J9{constructor(){this.queries=new os(e=>e0(e),Ll),this.onlineState="Unknown",this.z_=new Set}}async function Z9(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new X9,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const c=wf(a,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&xf(n)}async function eO(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tO(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const c of a.U_)c.H_(i)&&(r=!0);a.K_=i}}r&&xf(n)}function nO(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function xf(t){t.z_.forEach(e=>{e.next()})}var Wh,nv;(nv=Wh||(Wh={})).J_="default",nv.Cache="cache";class rO{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Wh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.key=e}}class D0{constructor(e){this.key=e}}class iO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ee(),this.mutatedKeys=ee(),this.Ia=t0(e),this.Ta=new ji(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new tv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),w=$l(this.query,m)?m:null,E=!!g&&this.mutatedKeys.has(g.key),I=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let S=!1;g&&w?g.data.isEqual(w.data)?E!==I&&(r.track({type:3,doc:w}),S=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),S=!0,(u&&this.Ia(w,u)>0||h&&this.Ia(w,h)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),S=!0):g&&!w&&(r.track({type:1,doc:g}),S=!0,(u||h)&&(c=!0)),S&&(w?(a=a.add(w),s=I?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,m)=>function(w,E){const I=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return I(w)-I(E)}(f.type,m.type)||this.Ia(f.doc,m.doc)),this.Va(r),i=i!=null&&i;const c=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,h=u!==this.ha;return this.ha=u,a.length!==0||h?{snapshot:new Gi(this.query,e.Ta,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new tv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new D0(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new O0(r))}),n}pa(e){this.la=e.hs,this.Pa=ee();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Gi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class sO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aO{constructor(e){this.key=e,this.wa=!1}}class oO{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new os(c=>e0(c),Ll),this.Da=new Map,this.Ca=new Set,this.va=new Se(q.comparator),this.Fa=new Map,this.Ma=new ff,this.xa={},this.Oa=new Map,this.Na=Ki.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function cO(t,e,n=!0){const r=U0(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await M0(r,e,n,!0),i}async function lO(t,e){const n=U0(t);await M0(n,e,!0,!1)}async function M0(t,e,n,r){const i=await C9(t.localStore,xn(e)),s=i.targetId,a=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return r&&(c=await uO(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&C0(t.remoteStore,i),c}async function uO(t,e,n,r,i){t.Ba=(m,g,w)=>async function(I,S,N,k){let O=S.view.da(N);O.Xi&&(O=await Xg(I.localStore,S.query,!1).then(({documents:y})=>S.view.da(y,O)));const D=k&&k.targetChanges.get(S.targetId),V=k&&k.targetMismatches.get(S.targetId)!=null,L=S.view.applyChanges(O,I.isPrimaryClient,D,V);return iv(I,S.targetId,L.fa),L.snapshot}(t,m,g,w);const s=await Xg(t.localStore,e,!0),a=new iO(e,s.hs),c=a.da(s.documents),u=qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(c,t.isPrimaryClient,u);iv(t,n,h.fa);const f=new sO(e,n,a);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function hO(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!Ll(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&gf(r.remoteStore,i.targetId),Kh(r,i.targetId)}).catch(Ua)):(Kh(r,i.targetId),await qh(r.localStore,i.targetId,!0))}async function dO(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),gf(n.remoteStore,r.targetId))}async function fO(t,e,n){const r=bO(t);try{const i=await function(a,c){const u=X(a),h=Ye.now(),f=c.reduce((w,E)=>w.add(E.key),ee());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Un(),I=ee();return u.os.getEntries(w,f).next(S=>{E=S,E.forEach((N,k)=>{k.isValidDocument()||(I=I.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,E)).next(S=>{m=S;const N=[];for(const k of c){const O=jj(k,m.get(k.key).overlayedDocument);O!=null&&N.push(new ei(k.key,O,q_(O.value.mapValue),On.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,N,c)}).next(S=>{g=S;const N=S.applyToLocalDocumentSet(m,I);return u.documentOverlayCache.saveOverlays(w,S.batchId,N)})}).then(()=>({batchId:g.batchId,changes:r0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let h=a.xa[a.currentUser.toKey()];h||(h=new Se(ce)),h=h.insert(c,u),a.xa[a.currentUser.toKey()]=h}(r,i.batchId,n),await Ka(r,i.changes),await ql(r.remoteStore)}catch(i){const s=wf(i,"Failed to persist write");n.reject(s)}}async function V0(t,e){const n=X(t);try{const r=await T9(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Fa.get(s);a&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?ve(a.wa):i.removedDocuments.size>0&&(ve(a.wa),a.wa=!1))}),await Ka(n,r,e)}catch(r){await Ua(r)}}function rv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,a)=>{const c=a.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=X(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.U_)g.j_(c)&&(h=!0)}),h&&xf(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pO(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new Se(q.comparator);a=a.insert(s,pt.newNoDocument(s,Y.min()));const c=ee().add(s),u=new zl(Y.min(),new Map,new Se(ce),a,c);await V0(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Ef(r)}else await qh(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(Ua)}async function mO(t,e){const n=X(t),r=e.batch.batchId;try{const i=await I9(n.localStore,e);$0(n,r,null),L0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ka(n,i)}catch(i){await Ua(i)}}async function gO(t,e,n){const r=X(t);try{const i=await function(a,c){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(ve(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);$0(r,e,n),L0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ka(r,i)}catch(i){await Ua(i)}}function L0(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function $0(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||F0(t,r)})}function F0(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(gf(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Ef(t))}function iv(t,e,n){for(const r of n)r instanceof O0?(t.Ma.addReference(r.key,e),vO(t,r)):r instanceof D0?(z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||F0(t,r.key)):K()}function vO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Ef(t))}function Ef(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new q(xe.fromString(e)),r=t.Na.next();t.Fa.set(r,new aO(n)),t.va=t.va.insert(n,r),C0(t.remoteStore,new lr(xn(J_(n.path)),r,"TargetPurposeLimboResolution",rf.oe))}}async function Ka(t,e,n){const r=X(t),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,u)=>{a.push(r.Ba(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=mf.Ki(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(h,g=>$.forEach(g.qi,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>$.forEach(g.Qi,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!za(m))throw m;z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const w=f.ns.get(g),E=w.snapshotVersion,I=w.withLastLimboFreeSnapshotVersion(E);f.ns=f.ns.insert(g,I)}}}(r.localStore,s))}async function yO(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await I0(n.localStore,e);n.currentUser=e,function(s,a){s.Oa.forEach(c=>{c.forEach(u=>{u.reject(new B(M.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ka(n,r.us)}}function _O(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ee().add(r.key);{let i=ee();const s=n.Da.get(e);if(!s)return i;for(const a of s){const c=n.ba.get(a);i=i.unionWith(c.view.Ea)}return i}}function U0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=V0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pO.bind(null,e),e.Sa.h_=tO.bind(null,e.eventManager),e.Sa.ka=nO.bind(null,e.eventManager),e}function bO(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gO.bind(null,e),e}class sv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return E9(this.persistence,new w9,e.initialUser,this.serializer)}createPersistence(e){return new y9(pf.Hr,this.serializer)}createSharedClientState(e){return new R9}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yO.bind(null,this.syncEngine),await Q9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new J9}()}createDatastore(e){const n=Bl(e.databaseInfo.databaseId),r=function(s){return new O9(s)}(e.databaseInfo);return function(s,a,c,u){return new V9(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,c){return new $9(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>rv(this.syncEngine,n,0),function(){return Zg.D()?new Zg:new k9}())}createSyncEngine(e,n){return function(i,s,a,c,u,h,f){const m=new oO(i,s,a,c,u,h);return f&&(m.La=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Wa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=z_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bu(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await I0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function av(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TO(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ev(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ev(e.remoteStore,i)),t._onlineComponents=e}function IO(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function TO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!IO(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await Bu(t,new sv)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Bu(t,new sv);return t._offlineComponents}async function z0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await av(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await av(t,new wO))),t._onlineComponents}function SO(t){return z0(t).then(e=>e.syncEngine)}async function AO(t){const e=await z0(t),n=e.eventManager;return n.onListen=cO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dO.bind(null,e.syncEngine),n}function CO(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,h){const f=new xO({next:g=>{a.enqueueAndForget(()=>eO(s,m)),g.fromCache&&u.source==="server"?h.reject(new B(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new rO(c,f,{includeMetadataChanges:!0,ra:!0});return Z9(s,m)}(await AO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e,n){if(!n)throw new B(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PO(t,e,n,r){if(e===!0&&r===!0)throw new B(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cv(t){if(!q.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lv(t){if(q.isDocumentKey(t))throw new B(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function kc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new B(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BN;switch(r.type){case"firstParty":return new KN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ov.get(n);r&&(z("ComponentProvider","Removing Datastore"),ov.delete(n),r.terminate())}(this),Promise.resolve()}}function RO(t,e,n,r={}){var i;const s=(t=kc(t,Kl))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ft.MOCK_USER;else{c=UT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new B(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ft(h)}t._authCredentials=new HN(new U_(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class mr extends ls{constructor(e,n,r){super(e,n,J_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new q(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function xr(t,e,...n){if(t=Mt(t),H0("collection","path",e),t instanceof Kl){const r=xe.fromString(e,...n);return lv(r),new mr(t,null,r)}{if(!(t instanceof Bt||t instanceof mr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return lv(r),new mr(t.firestore,null,r)}}function kO(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=z_.newId()),H0("doc","path",e),t instanceof Kl){const r=xe.fromString(e,...n);return cv(r),new Bt(t,null,new q(r))}{if(!(t instanceof Bt||t instanceof mr))throw new B(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return cv(r),new Bt(t.firestore,t instanceof mr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new S0(this,"async_queue_retry"),this.hu=()=>{const n=zu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=zu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new pr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!za(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=bf.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class If extends Kl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new NO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||K0(this),this._firestoreClient.terminate()}}function q0(t,e){const n=typeof t=="object"?t:My(),r=typeof t=="string"?t:"(default)",i=vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$T("firestore");s&&RO(i,...s)}return i}function W0(t){return t._firestoreClient||K0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function K0(t){var e,n,r;const i=t._freezeSettings(),s=function(c,u,h,f){return new aj(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,B0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new EO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yi(mt.fromBase64String(e))}catch(n){throw new B(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yi(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=/^__.*__$/;class OO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ha(e,this.data,n,this.fieldTransforms)}}function Y0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Af{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Nc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Y0(this.fu)&&jO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class DO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bl(e)}Fu(e,n,r,i=!1){return new Af({fu:e,methodName:n,vu:r,path:at.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Q0(t){const e=t._freezeSettings(),n=Bl(t._databaseId);return new DO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MO(t,e,n,r,i,s={}){const a=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Z0("Data must be an object, but it was:",a,r);const c=X0(r,a);let u,h;if(s.merge)u=new rn(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=LO(e,m,n);if(!a.contains(g))throw new B(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);FO(f,g)||f.push(g)}u=new rn(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new OO(new zt(c),u,h)}function VO(t,e,n,r=!1){return Cf(n,t.Fu(r?4:3,e))}function Cf(t,e){if(J0(t=Mt(t)))return Z0("Unsupported field value:",e,t),X0(t,e);if(t instanceof G0)return function(r,i){if(!Y0(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=Cf(c,i.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Aj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ye.fromDate(r);return{timestampValue:Pc(i.serializer,s)}}if(r instanceof Ye){const s=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pc(i.serializer,s)}}if(r instanceof Sf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yi)return{bytesValue:v0(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:df(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Wl(r)}`)}(t,e)}function X0(t,e){const n={};return B_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(r,i)=>{const s=Cf(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function J0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof Sf||t instanceof Yi||t instanceof Bt||t instanceof G0)}function Z0(t,e,n){if(!J0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wl(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function LO(t,e,n){if((e=Mt(e))instanceof Tf)return e._internalPath;if(typeof e=="string")return eb(t,e);throw Nc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $O=new RegExp("[~\\*/\\[\\]]");function eb(t,e,n){if(e.search($O)>=0)throw Nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tf(...e.split("."))._internalPath}catch{throw Nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nc(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(M.INVALID_ARGUMENT,c+t+u)}function FO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UO extends tb{data(){return super.data()}}function Pf(t,e){return typeof e=="string"?eb(t,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rf{}class BO extends Rf{}function kf(t,e,...n){let r=[];e instanceof Rf&&r.push(e),r=r.concat(n),function(s){const a=s.filter(u=>u instanceof jf).length,c=s.filter(u=>u instanceof Gl).length;if(a>1||a>0&&c>0)throw new B(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Gl extends BO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gl(e,n,r)}_apply(e){const n=this._parse(e);return nb(e._query,n),new ls(e.firestore,e.converter,$h(e._query,n))}_parse(e){const n=Q0(e.firestore);return function(s,a,c,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dv(m,f);const w=[];for(const E of m)w.push(hv(u,s,E));g={arrayValue:{values:w}}}else g=hv(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dv(m,f),g=VO(c,a,m,f==="in"||f==="not-in");return Be.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nf(t,e,n){const r=e,i=Pf("where",t);return Gl._create(i,r,n)}class jf extends Rf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const u of c)nb(a,u),a=$h(a,u)}(e._query,n),new ls(e.firestore,e.converter,$h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hv(t,e,n){if(typeof(n=Mt(n))=="string"){if(n==="")throw new B(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Z_(e)&&n.indexOf("/")!==-1)throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!q.isDocumentKey(r))throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Og(t,new q(r))}if(n instanceof Bt)return Og(t,n._key);throw new B(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wl(n)}.`)}function dv(t,e){if(!Array.isArray(t)||t.length===0)throw new B(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nb(t,e){const n=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HO{convertValue(e,n="none"){switch(Yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return as(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sf(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=af(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(va(e));default:return null}}convertTimestamp(e){const n=br(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);ve(E0(r));const i=new ya(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class WO extends tb{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zo extends WO{data(e={}){return super.data(e)}}class KO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new No(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zo(this._firestore,this._userDataWriter,r.key,r,new No(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new Zo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new No(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Zo(i._firestore,i._userDataWriter,c.doc.key,c.doc,new No(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:GO(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class YO extends HO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function us(t){t=kc(t,ls);const e=kc(t.firestore,If),n=W0(e),r=new YO(e);return zO(t._query),CO(n,t._query).then(i=>new KO(e,r,t,i))}function rb(t,e){const n=kc(t.firestore,If),r=kO(t),i=qO(t.converter,e);return QO(n,[MO(Q0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,On.exists(!1))]).then(()=>r)}function QO(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>fO(await SO(r),i,s)),s.promise}(W0(t),e)}(function(e,n=!0){(function(i){ss=i})(es),Mi(new Ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new If(new qN(r.getProvider("auth-internal")),new YN(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),fr(Rg,"4.6.4",e),fr(Rg,"4.6.4","esm2017")})();const XO={apiKey:"AIzaSyAaIPCKHBE5NxjzR-jr8liNnbJk24bvJog",authDomain:"patient-details-fa53c.firebaseapp.com",projectId:"patient-details-fa53c",storageBucket:"patient-details-fa53c.appspot.com",messagingSenderId:"957869256679",appId:"1:957869256679:web:864033e8e770cd8d7c5742"},JO=Na(XO,"patientApp"),xa=q0(JO),ZO={apiKey:"AIzaSyCs5m_UWtSKSqm00HHBIph0RA1iNzWDc6M",authDomain:"doctor-details-c8ce9.firebaseapp.com",projectId:"doctor-details-c8ce9",storageBucket:"doctor-details-c8ce9.appspot.com",messagingSenderId:"859857627213",appId:"1:859857627213:web:86a5c5510096ed53d3d404"},e8=Na(ZO,"DoctordataApp"),Of=q0(e8);function t8(){const t=new Date().toLocaleDateString(),e=new Date().toLocaleTimeString(),[n,r]=C.useState({firstname:"",secondname:"",dob:"",sex:"",height:"",weight:"",marital:"",phone:"",email:"",address:"",cardno:"",problem:"",date:t,time:e,adharno:""}),i=Xr(),s=u=>{const{name:h,value:f}=u.target;r(m=>({...m,[h]:f}))},a=async()=>{let u=!1,h;const f=xr(xa,"patient");for(;!u;){h=Math.floor(Math.random()*9900)+100;const m=kf(f,Nf("cardno","==",h));(await us(m)).empty&&(u=!0)}return h.toString()},c=async u=>{u.preventDefault();try{const h=await a(),f={...n,cardno:h},m=xr(xa,"patient");await rb(m,f),r({firstname:"",secondname:"",dob:"",sex:"",height:"",weight:"",marital:"",phone:"",email:"",address:"",cardno:"",problem:"",date:t,time:e,adharno:""}),i("/user")}catch(h){console.error("Error adding document: ",h),alert("There was an error submitting the data.")}};return l.jsxs("div",{children:[l.jsx(ef,{}),l.jsxs("div",{className:he.main,children:[l.jsxs("div",{className:he.first_main,children:[l.jsx("img",{src:zN,alt:"Form Logo",className:he.logo}),l.jsxs("div",{className:he.para,children:[l.jsx("p",{className:he.p,children:"The best way to find yourself is to lose yourself in the service of others."}),l.jsx("p",{className:he.name,children:"— Mahatma Gandhi"})]})]}),l.jsx("div",{className:he.second_main,children:l.jsx("div",{className:he.photo,children:l.jsxs("form",{onSubmit:c,className:he.form,children:[l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"First Name"}),l.jsx("input",{name:"firstname",value:n.firstname,onChange:s,placeholder:"First Name"})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Second Name"}),l.jsx("input",{name:"secondname",value:n.secondname,onChange:s,placeholder:"Second Name"})]})]}),l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Date of Birth"}),l.jsx("input",{type:"date",name:"dob",value:n.dob,onChange:s,placeholder:"MM-DD-YYYY"})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Sex"}),l.jsxs("select",{name:"sex",value:n.sex,onChange:s,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"Male",children:"Male"}),l.jsx("option",{value:"Female",children:"Female"}),l.jsx("option",{value:"Other",children:"Other"})]})]})]}),l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Height (Centimeters)"}),l.jsx("input",{name:"height",value:n.height,onChange:s})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Weight (Kilograms)"}),l.jsx("input",{type:"text",name:"weight",value:n.weight,onChange:s})]})]}),l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Marital Status"}),l.jsx("input",{type:"text",name:"marital",value:n.marital,onChange:s})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Contact Number"}),l.jsx("input",{type:"text",name:"phone",value:n.phone,onChange:s,placeholder:"(000) 000-0000"})]})]}),l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Email"}),l.jsx("input",{type:"email",name:"email",value:n.email,onChange:s,placeholder:"ex: myname@example.com"})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Address"}),l.jsx("input",{type:"text",name:"address",value:n.address,onChange:s})]})]}),l.jsxs("div",{className:he.form_div,children:[l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Adhar Card No."}),l.jsx("input",{type:"text",name:"adharno",value:n.adharno,onChange:s,placeholder:"last 4 digit (0000) "})]}),l.jsxs("div",{className:he.form_innerdiv,children:[l.jsx("p",{children:"Disease (Problem)"}),l.jsxs("select",{name:"problem",value:n.problem,onChange:s,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"Headache",children:"Headache"}),l.jsx("option",{value:"Eye Fly",children:"Eye Fly"}),l.jsx("option",{value:"Heart Attack",children:"Heart Attack"}),l.jsx("option",{value:"Cold",children:"Cold"}),l.jsx("option",{value:"Fever",children:"Fever"}),l.jsx("option",{value:"Diabetes",children:"Diabetes"}),l.jsx("option",{value:"Asthma",children:"Asthma"}),l.jsx("option",{value:"Back Pain",children:"Back Pain"}),l.jsx("option",{value:"Joint Pain",children:"Joint Pain"})]})]})]}),l.jsx("div",{className:he.btn_div,children:l.jsx(xt,{type:"submit",variant:"contained",className:he.btn,children:"Submit"})})]})})})]}),l.jsx(Jd,{})]})}const n8="_main_1h8hk_1",r8="_block1_1h8hk_11",i8="_box_1h8hk_35",s8="_heading_1h8hk_51",a8="_navlink_1h8hk_101",o8="_lastbox_1h8hk_117",c8="_innerbox_1h8hk_133",l8="_para_1h8hk_143",u8="_block2_1h8hk_157",h8="_icon_1h8hk_197",d8="_iconbox_1h8hk_205",Le={main:n8,block1:r8,box:i8,heading:s8,navlink:a8,lastbox:o8,innerbox:c8,para:l8,block2:u8,icon:h8,iconbox:d8};function hs(){const t=new Date().getFullYear();return l.jsxs("div",{className:Le.main,children:[l.jsxs("div",{className:Le.block1,children:[l.jsxs("div",{className:Le.box,children:[l.jsx("p",{className:Le.heading,children:"Quick Links"}),l.jsxs("div",{className:Le.innerbox,children:[l.jsxs("ul",{children:[l.jsx(De,{to:"/",className:Le.navlink,children:l.jsx("li",{children:"Home"})}),l.jsx(De,{to:"/",className:Le.navlink,children:l.jsx("li",{children:"Features"})}),l.jsx(De,{to:"/",className:Le.navlink,children:l.jsx("li",{children:"About us"})}),l.jsx(De,{to:"/",className:Le.navlink,children:l.jsx("li",{children:"Back to Sign up"})})]}),l.jsxs("ul",{children:[l.jsx("li",{children:"Specialty"}),l.jsx("li",{children:"Benefits"}),l.jsx("li",{children:"Other Products"})]})]})]}),l.jsxs("div",{className:Le.box,children:[l.jsx("p",{className:Le.heading,children:"Features"}),l.jsxs("ul",{children:[l.jsx("li",{children:"E-Presc/ EMR/EHR with Digital Pen"}),l.jsx("li",{children:"Specialty EHR Modules"}),l.jsx("li",{children:"Integrated Online Appointments"})]}),l.jsxs("div",{className:Le.icon,children:[l.jsx("div",{className:Le.iconbox,children:l.jsx(ie,{icon:h3})}),l.jsx("div",{className:Le.iconbox,children:l.jsx(ie,{icon:u3})}),l.jsx("div",{className:Le.iconbox,children:l.jsx(ie,{icon:l3})}),l.jsx("div",{className:Le.iconbox,children:l.jsx(ie,{icon:d3})})]})]}),l.jsxs("div",{className:Le.lastbox,children:[l.jsx("p",{className:Le.heading,children:"More About Us"}),l.jsx("p",{className:Le.para,children:"All our services are rendered as per the specifications and requirements detailed by the customers. These services are widely acclaimed by the customers due to their promptness, flexibility, timely execution and cost-effectiveness."})]})]}),l.jsx("div",{className:Le.block2,children:l.jsxs("pre",{children:["Copyright ",l.jsx("span",{children:t})," Easy solution. All Rights Reserved."]})})]})}const f8="_main_1yt7s_1",p8="_heading_1yt7s_19",m8="_block1_1yt7s_47",g8="_para1_1yt7s_69",v8="_counter_1yt7s_97",y8="_box1_1yt7s_115",_8="_logo_1yt7s_131",b8="_innerbox_1yt7s_163",w8="_count_1yt7s_97",x8="_name_1yt7s_191",E8="_para2_1yt7s_203",re={main:f8,heading:p8,block1:m8,para1:g8,counter:v8,box1:y8,logo:_8,innerbox:b8,count:w8,name:x8,para2:E8},I8="/Hospital-System/ADMIN/tab4.png",T8="/Hospital-System/ADMIN/laboratory-1.png",S8="/Hospital-System/ADMIN/user-friendly.png",A8="/Hospital-System/ADMIN/UNITED.png",C8="/Hospital-System/ADMIN/tele.jpg";function P8(){const[t,e]=C.useState(26e3),[n,r]=C.useState(10);return C.useEffect(()=>{const i=setInterval(()=>{e(s=>s+10),r(s=>s+5)},2e3);return()=>clearInterval(i)},[]),l.jsxs("div",{className:re.main,children:[l.jsx("div",{className:re.heading,children:l.jsxs("p",{children:["Easy HMS for ",l.jsx("span",{children:"Ophthalmology"})]})}),l.jsxs("div",{className:re.block1,children:[l.jsx("img",{src:I8,alt:""}),l.jsx("div",{className:re.para1,children:l.jsx("p",{children:"The most stressful and challenging responsibilities in ophthalmology are treating patients, creating treatment programs, and writing prescriptions. The Ophthalmology EMR System can help ophthalmologists manage their workflows more efficiently because it saves time and money. This tool helps with the best possible clinical and administrative tasks. Even renowned ophthalmologists occasionally experience entrepreneurial difficulties. This system helps clinicians maximize the performance of their team members in order to offer the best possible patient care. By improving patient flow and enhancing patient satisfaction, it improves their revenue."})})]}),l.jsxs("div",{className:re.counter,children:[l.jsxs("div",{className:re.box1,children:[l.jsx("span",{className:re.logo,children:l.jsx(ie,{icon:w5})}),l.jsxs("div",{className:re.innerbox,children:[l.jsx("p",{className:re.count,children:"10 crore + "}),l.jsx("p",{className:re.name,children:"Patients"})]})]}),l.jsxs("div",{className:re.box1,children:[l.jsx("span",{className:re.logo,children:l.jsx(ie,{icon:T_})}),l.jsxs("div",{className:re.innerbox,children:[l.jsxs("p",{className:re.count,children:[t," + "]}),l.jsx("p",{className:re.name,children:"Users"})]})]}),l.jsxs("div",{className:re.box1,children:[l.jsx("span",{className:re.logo,children:l.jsx(ie,{icon:V5})}),l.jsxs("div",{className:re.innerbox,children:[l.jsxs("p",{className:re.count,children:[n," Crore+"]}),l.jsx("p",{className:re.name,children:"Transaction"})]})]}),l.jsxs("div",{className:re.box1,children:[l.jsx("span",{className:re.logo,children:l.jsx(ie,{icon:N5})}),l.jsxs("div",{className:re.innerbox,children:[l.jsx("p",{className:re.count,children:"650 +"}),l.jsx("p",{className:re.name,children:"Hospitals"})]})]})]}),l.jsxs("div",{className:re.block1,children:[l.jsxs("div",{className:re.para2,children:[l.jsx("h3",{children:"Laboratory"}),l.jsx("p",{children:"An element or function known as a `laboratory module` in EMR software enables healthcare professionals to organize and access data pertaining to laboratory tests and results inside the electronic medical record system. An EMR system`s laboratory module is essential because laboratory tests are important for identifying and keeping track of patient problems. Enhancing patient care and safety while reducing administrative procedures for healthcare providers is possible through effective management of this data within the EMR Software for Ophthalmology."})]}),l.jsx("img",{src:T8,alt:""})]}),l.jsxs("div",{className:re.block1,children:[l.jsx("img",{src:S8,alt:""}),l.jsxs("div",{className:re.para2,children:[l.jsxs("h3",{children:["User ",l.jsx("span",{children:"Friendly"})]}),l.jsx("p",{children:"A user-friendly module is a particular feature or component of EMR Software for Ophthalmology that is intended to be simple to use, intuitive, and user-friendly for healthcare professionals who deal with the system frequently, such as doctors, nurses, and office staff. The main objective of user-friendly modules is to make it easier to record, access, and manage patient health information, which will ultimately lead to better patient care and more effective workflow. A user-friendly Eye EMR improves efficiency, reduces errors, enhances patient care, and minimizes staff learning curve, requiring continuous feedback and involvement from end-users."})]})]}),l.jsxs("div",{className:re.block1,children:[l.jsxs("div",{className:re.para2,children:[l.jsxs("h3",{children:["Seamless ",l.jsx("span",{children:"Integration"})]}),l.jsx("p",{children:"Patient management system for ophthalmology utilize 24x7 bots to effectively communicHospital management software applications integrate 24x7 bots, automated chatbots, to enhance patient communication and efficiency. These bots send notifications, alerts, and reminders via various channels, promoting a patient-centric approach. This allows healthcare providers to reach individuals through their preferred means, improving the overall patient experience and effective information dissemination."})]}),l.jsx("img",{src:A8,alt:""})]}),l.jsxs("div",{className:re.block1,children:[l.jsx("img",{src:C8,alt:""}),l.jsxs("div",{className:re.para2,children:[l.jsxs("h3",{children:["Tele ",l.jsx("span",{children:"Consultation"})]}),l.jsx("p",{children:"The COVID-19 pandemic has accelerated the use of tele-consultation, particularly in ophthalmology. Centralized emr for eye software has been used to facilitate remote consultations, enhancing diagnosis accuracy and continuity of care. Medical management system for ophthalmology have also been integrated to streamline the process, promoting a more patient-centered approach to ophthalmic healthcare delivery. This integration not only addresses pandemic challenges but also improves accessibility and quality of care."})]})]})]})}const R8="_main_1nso9_1",k8="_main1_1nso9_21",N8="_main2_1nso9_45",j8="_box_1nso9_67",O8="_form_1nso9_97",D8="_front_1nso9_105",M8="_back_1nso9_105",V8="_logo_1nso9_375",Ce={main:R8,main1:k8,main2:N8,box:j8,form:O8,front:D8,back:M8,logo:V8};function L8(){const t=[{heading:"Clinical",font:l.jsx(ie,{icon:R5,className:Ce.form}),data1:"Appointment",data2:"OPD",data3:"EMR (Optom/Doctor)",data4:"IPD"},{heading:"Inventories",font:l.jsx(ie,{icon:O5,className:Ce.form}),data1:"Pharmacy",data2:"Optical",data3:"OT Inventories",data4:"Supply Chain"},{heading:"Complaince",font:l.jsx(ie,{icon:A5,className:Ce.form}),data1:"NABH",data2:"HIPAA + HL7",data3:"ABDM",data4:"JCI"},{heading:"Patient Satisfaction",font:l.jsx(ie,{icon:m5,className:Ce.form}),data1:"Self Registration",data2:"Feedback",data3:"Queue Management",data4:"Camp Patients"},{heading:"AI Analytics",font:l.jsx(ie,{icon:T5,className:Ce.form}),data1:"Direct Reports",data2:"BI Reports",data3:"MIS Reports",data4:"Easy Intertillage Bot"},{heading:"Biling",font:l.jsx(ie,{icon:v5,className:Ce.form}),data1:"Billing Clearance",data2:"Discount Capping",data3:"Patient Wallet",data4:"Multi Payment Model"},{heading:"Integeration",font:l.jsx(ie,{icon:I5,className:Ce.form}),data1:"Barcode/QR Code",data2:"Whatsapp Integration + BOT",data3:"AR/NCT Integration",data4:"Tally"},{heading:"Reimbursement",font:l.jsx(ie,{icon:E5,className:Ce.form}),data1:"TPA Documents",data2:"TPA/Panel Configuration ",data3:"Date Wise Credit",data4:"Credit Reports"}];return l.jsxs("div",{className:Ce.main,children:[l.jsx("div",{className:Ce.main1,children:l.jsx("p",{children:"MODULES"})}),l.jsx("div",{className:Ce.main2,children:t.map((e,n)=>l.jsxs("div",{className:Ce.box,children:[l.jsxs("div",{className:Ce.front,children:[l.jsx("span",{children:e.heading}),e.font]}),l.jsxs("div",{className:Ce.back,children:[l.jsxs("p",{className:Ce.point1,children:[l.jsx(Si,{style:{fontSize:"1.3em"},className:Ce.logo}),e.data1]}),l.jsxs("p",{className:Ce.point1,children:[l.jsx(Si,{style:{fontSize:"1.3em"},className:Ce.logo}),e.data2]}),l.jsxs("p",{className:Ce.point1,children:[l.jsx(Si,{style:{fontSize:"1.3em"},className:Ce.logo}),e.data3]}),l.jsxs("p",{className:Ce.point1,children:[l.jsx(Si,{style:{fontSize:"1.3em"},className:Ce.logo}),e.data4]})]})]},n))})]})}const $8="_main_x7c14_1",F8="_heading_x7c14_21",U8="_heading1_x7c14_47",z8="_heading2_x7c14_63",B8="_btn1_x7c14_75",H8="_btn_x7c14_75",gi={main:$8,heading:F8,heading1:U8,heading2:z8,btn1:B8,btn:H8},q8="/Hospital-System/ADMIN/Header.jpg";var ib={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",a=0;a<arguments.length;a++){var c=arguments[a];c&&(s=i(s,r(c)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var a="";for(var c in s)e.call(s,c)&&s[c]&&(a=i(a,c));return a}function i(s,a){return a?s?s+" "+a:s+a:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(ib);var W8=ib.exports;const K8=pv(W8),G8=["xxl","xl","lg","md","sm","xs"],Y8="xs",Q8=C.createContext({prefixes:{},breakpoints:G8,minBreakpoint:Y8});function X8(t,e){const{prefixes:n}=C.useContext(Q8);return t||n[e]||e}function J8(t){const e=C.useRef(t);return C.useEffect(()=>{e.current=t},[t]),e}function sb(t){const e=J8(t);return C.useCallback(function(...n){return e.current&&e.current(...n)},[e])}const Z8=["as","disabled"];function eD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function tD(t){return!t||t.trim()==="#"}function ab({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:a,tabIndex:c=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const h={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},h];const f=g=>{if((e||t==="a"&&tD(n))&&g.preventDefault(),e){g.stopPropagation();return}a==null||a(g)},m=g=>{g.key===" "&&(g.preventDefault(),f(g))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:c,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:f,onKeyDown:m},h]}const ob=C.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=eD(t,Z8);const[s,{tagName:a}]=ab(Object.assign({tagName:n,disabled:r},i));return l.jsx(a,Object.assign({},i,s,{ref:e}))});ob.displayName="Button";const nD=["onKeyDown"];function rD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function iD(t){return!t||t.trim()==="#"}const cb=C.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=rD(t,nD);const[i]=ab(Object.assign({tagName:"a"},r)),s=sb(a=>{i.onKeyDown(a),n==null||n(a)});return iD(r.href)||r.role==="button"?l.jsx("a",Object.assign({ref:e},r,i,{onKeyDown:s})):l.jsx("a",Object.assign({ref:e},r,{onKeyDown:n}))});cb.displayName="Anchor";const sD=C.createContext(null),lb=(t,e=null)=>t!=null?String(t):e||null,ub=C.createContext(null);ub.displayName="NavContext";const aD="data-rr-ui-";function hb(t){return`${aD}${t}`}const oD=C.createContext(null),cD=["as","active","eventKey"];function lD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function db({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const a=C.useContext(sD),c=C.useContext(ub),u=C.useContext(oD);let h=n;const f={role:i};if(c){!i&&c.role==="tablist"&&(f.role="tab");const m=c.getControllerId(t??null),g=c.getControlledId(t??null);f[hb("event-key")]=t,f.id=m||r,h=n==null&&t!=null?c.activeKey===t:n,(h||!(u!=null&&u.unmountOnExit)&&!(u!=null&&u.mountOnEnter))&&(f["aria-controls"]=g)}return f.role==="tab"&&(f["aria-selected"]=h,h||(f.tabIndex=-1),s&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=sb(m=>{s||(e==null||e(m),t!=null&&a&&!m.isPropagationStopped()&&a(t,m))}),[f,{isActive:h}]}const uD=C.forwardRef((t,e)=>{let{as:n=ob,active:r,eventKey:i}=t,s=lD(t,cD);const[a,c]=db(Object.assign({key:lb(i,s.href),active:r},s));return a[hb("active")]=c.isActive,l.jsx(n,Object.assign({},s,a,{ref:e}))});uD.displayName="NavItem";const fb=C.forwardRef(({bsPrefix:t,className:e,as:n=cb,active:r,eventKey:i,disabled:s=!1,...a},c)=>{t=X8(t,"nav-link");const[u,h]=db({key:lb(i,a.href),active:r,disabled:s,...a});return l.jsx(n,{...a,...u,ref:c,disabled:s,className:K8(e,t,s&&"disabled",h.isActive&&"active")})});fb.displayName="NavLink";function hD(){return l.jsxs("div",{className:gi.main,children:[l.jsx("img",{src:q8,alt:""}),l.jsxs("div",{className:gi.heading,children:[l.jsx("p",{className:gi.heading1,children:"Bringing The Future of Healthcare"}),l.jsx("p",{className:gi.heading2,children:"Deep created replenish herb without night fruit day earth evening Called his green were they`re fruitful to over Sea bearing sixth Earth face. Them lesser great you`ll second"}),l.jsx(fb,{to:"/form",className:gi.btn,children:l.jsx(xt,{variant:"contained",className:gi.btn1,children:"Appointement"})})]})]})}const dD="_navbar_1wkjg_3",fD="_link_1wkjg_21",pD="_nav_link_1wkjg_39",mD="_btn_1wkjg_51",tr={navbar:dD,link:fD,nav_link:pD,btn:mD};function ds(){return l.jsxs("nav",{className:tr.navbar,children:[l.jsx("img",{src:j_,alt:""}),l.jsxs("ul",{className:tr.link,children:[l.jsx(De,{to:"/doctor",className:tr.nav_link,children:l.jsx("li",{children:"Home"})}),l.jsx(De,{to:"/doctor/patient",className:tr.nav_link,children:l.jsx("li",{children:"Patient"})}),l.jsx(De,{to:"/doctor/formd",className:tr.nav_link,children:l.jsx("li",{children:"Doctor"})}),l.jsx(De,{to:"",className:tr.nav_link,children:l.jsx("li",{children:"Employee"})}),l.jsx(De,{to:"/doctor/formd",className:tr.nav_link,children:l.jsx("li",{children:"Manager"})})]}),l.jsx("span",{className:tr.btn,children:"Blogs"})]})}const gD={};function vD(){return l.jsxs("div",{className:gD.main,children:[l.jsx(ds,{}),l.jsx(hD,{}),l.jsx(L8,{}),l.jsx(P8,{}),l.jsx(hs,{})]})}const yD="_main_8kj3a_1",_D="_box_8kj3a_23",bD="_link_8kj3a_45",Ds={main:yD,box:_D,link:bD};function Yl(){return l.jsx("div",{className:Ds.main,children:l.jsxs("div",{className:Ds.box,children:[l.jsx(De,{to:"/doctor/patient/history",className:Ds.link,children:l.jsx("span",{children:"Registration Data"})}),l.jsx(De,{to:"/doctor/patient/searchpatient",className:Ds.link,children:l.jsx("span",{children:"Patient Data (History)"})}),l.jsx(De,{to:"/doctor/patient/currentpatient",className:Ds.link,children:l.jsx("span",{children:"Today`s Patient List"})})]})})}function wD(){return l.jsxs(l.Fragment,{children:[l.jsx(ds,{}),l.jsx(Yl,{}),l.jsx(hs,{})]})}const xD="_main_aw3iq_1",ED="_innerdiv_aw3iq_11",fv={main:xD,innerdiv:ED};function ID(){const[t,e]=C.useState([]);return C.useEffect(()=>{(async()=>{try{const i=(await us(xr(xa,"patient"))).docs.map(s=>({...s.data(),id:s.id}));console.log("Fetched Data:",i),e(i)}catch(r){console.error("Error fetching data: ",r)}})()},[]),l.jsxs(l.Fragment,{children:[l.jsx(ds,{}),l.jsx(Yl,{}),l.jsx("div",{className:fv.main,children:l.jsx("div",{className:fv.innerdiv,children:l.jsxs("table",{border:"1",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Patient Id"}),l.jsx("th",{children:"Patient First Name"}),l.jsx("th",{children:"Patient Last Name"}),l.jsx("th",{children:"Phone No."}),l.jsx("th",{children:"Sex"}),l.jsx("th",{children:"Date of Checkup"}),l.jsx("th",{children:"DOB"}),l.jsx("th",{children:"Address"})]})}),l.jsx("tbody",{children:t.map(n=>l.jsxs("tr",{children:[l.jsx("td",{children:n.cardno}),l.jsx("td",{children:n.firstname}),l.jsx("td",{children:n.secondname}),l.jsx("td",{children:n.phone}),l.jsx("td",{children:n.sex}),l.jsx("td",{children:n.date}),l.jsx("td",{children:n.dob}),l.jsx("td",{children:n.address})]},n.id))})]})})}),l.jsx(hs,{})]})}const TD="_main_13aav_1",SD="_heading_13aav_25",AD="_searchbar_13aav_49",CD="_button_13aav_83",PD="_box_13aav_103",RD="_photo_13aav_123",kD="_outerphoto_13aav_149",ND="_details_13aav_161",jD="_innerdetails_13aav_173",OD="_data1_13aav_191",DD="_data2_13aav_235",pe={main:TD,heading:SD,searchbar:AD,button:CD,box:PD,photo:RD,outerphoto:kD,details:ND,innerdetails:jD,data1:OD,data2:DD};function MD(){const[t,e]=C.useState(""),[n,r]=C.useState([]),[i,s]=C.useState(null),a=async()=>{try{const c=xr(xa,"patient"),u=kf(c,Nf("adharno","==",t)),h=await us(u);if(h.empty)r([]),s(null);else{const f=h.docs.map(m=>({id:m.id,...m.data()}));r(f),s(f[0])}}catch(c){console.error("Error fetching patient data:",c),r([]),s(null)}};return l.jsxs(l.Fragment,{children:[l.jsx(ds,{}),l.jsx(Yl,{}),l.jsxs("div",{className:pe.main,children:[l.jsx("div",{className:pe.heading,children:l.jsx("p",{children:"Patient Details"})}),l.jsxs("div",{className:pe.searchbar,children:[l.jsx("input",{type:"text",value:t,onChange:c=>e(c.target.value),placeholder:"Enter Aadhaar number"}),l.jsx("button",{onClick:a,className:pe.button,children:"Search"})]}),i&&l.jsxs("div",{className:pe.box,children:[l.jsx("div",{className:pe.outerphoto,children:l.jsx("div",{className:pe.photo,children:l.jsx(ie,{icon:y5,size:"2x",className:pe.icon})})}),l.jsx("div",{className:pe.details,children:l.jsxs("div",{className:pe.innerdetails,children:[l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Name"}),l.jsxs("p",{children:[i.firstname," ",i.secondname]})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"DOB"}),l.jsx("p",{children:i.dob})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Phone No"}),l.jsx("p",{children:i.phone})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Sex"}),l.jsx("p",{children:i.sex})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Email"}),l.jsx("p",{children:i.email})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Marital"}),l.jsx("p",{children:i.marital})]}),l.jsxs("div",{className:pe.data1,children:[l.jsx("span",{className:pe.data2,children:"Address"}),l.jsx("p",{children:i.address})]})]})})]}),l.jsx("div",{children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Check Up Dates"}),l.jsx("th",{children:"Problem"})]})}),l.jsx("tbody",{children:n.map((c,u)=>l.jsxs("tr",{children:[l.jsx("td",{children:c.date}),l.jsx("td",{children:c.problem})]},u))})]})})]}),l.jsx(hs,{})]})}function VD(){const[t,e]=C.useState([]),[n,r]=C.useState(!1),i=()=>{const a=new Date,c=a.getMonth()+1,u=a.getDate(),h=a.getFullYear();return`${c}/${u}/${h}`},s=async()=>{r(!0),e([]);const a=i();try{const c=xr(xa,"patient"),u=kf(c,Nf("date","==",a)),h=await us(u),f=[];h.forEach(m=>{f.push({id:m.id,...m.data()})}),e(f)}catch(c){console.error("Error fetching patient data: ",c),e([{error:"Error fetching patient data"}])}finally{r(!1)}};return C.useEffect(()=>{s()},[]),l.jsxs(l.Fragment,{children:[l.jsx(ds,{}),l.jsx(Yl,{}),l.jsxs("div",{className:pe.main,children:[l.jsx("p",{className:pe.heading,children:"Today`s Patient Data"}),n?l.jsx("div",{children:"Loading..."}):l.jsx("div",{className:pe.result,children:t.length===0?l.jsx("div",{children:"No data available for today"}):l.jsxs("table",{className:pe.table,children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"First Name"}),l.jsx("th",{children:"Last Name"}),l.jsx("th",{children:"Aadhaar Number"}),l.jsx("th",{children:"Date Of Birth"}),l.jsx("th",{children:"Sex"}),l.jsx("th",{children:"Height"}),l.jsx("th",{children:"Weight"}),l.jsx("th",{children:"Address"}),l.jsx("th",{children:"Problem"})]})}),l.jsx("tbody",{children:t.map(a=>l.jsxs("tr",{children:[l.jsx("td",{children:a.firstname}),l.jsx("td",{children:a.secondname}),l.jsx("td",{children:a.adharno}),l.jsx("td",{children:a.dob}),l.jsx("td",{children:a.sex}),l.jsx("td",{children:a.height}),l.jsx("td",{children:a.weight}),l.jsx("td",{children:a.address}),l.jsx("td",{children:a.problem})]},a.id))})]})})]}),l.jsx(hs,{})]})}const LD="_main_8j4qi_1",$D="_first_main_8j4qi_19",FD="_second_main_8j4qi_35",UD="_heading_8j4qi_55",zD="_main_head_8j4qi_69",BD="_subhead_8j4qi_79",HD="_form_8j4qi_89",qD="_form_div_8j4qi_99",WD="_form_innerdiv_8j4qi_111",KD="_btn_div_8j4qi_159",GD="_btn_8j4qi_159",YD="_fetch_main_8j4qi_183",QD="_data_8j4qi_391",Te={main:LD,first_main:$D,second_main:FD,heading:UD,main_head:zD,subhead:BD,form:HD,form_div:qD,form_innerdiv:WD,btn_div:KD,btn:GD,fetch_main:YD,data:QD},XD="/Hospital-System/Doctor-form.png";function JD(){const[t,e]=C.useState([]);return C.useEffect(()=>{(async()=>{try{const i=(await us(xr(Of,"doctors"))).docs.map(s=>({...s.data(),id:s.id}));e(i)}catch(r){console.error("Error fetching data: ",r)}})()},[]),l.jsx(l.Fragment,{children:l.jsx("div",{className:Te.fetch_main,children:l.jsxs("table",{border:"1",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Doctor Name"}),l.jsx("th",{children:"Age"}),l.jsx("th",{children:"Experience"}),l.jsx("th",{children:"Address"}),l.jsx("th",{children:"Phone No."}),l.jsx("th",{children:"Gender"}),l.jsx("th",{children:"Field Of Health"})]})}),l.jsx("tbody",{children:t.map(n=>l.jsxs("tr",{children:[l.jsx("td",{children:n.doctorName}),l.jsx("td",{children:n.age}),l.jsx("td",{children:n.experience}),l.jsx("td",{children:n.address}),l.jsx("td",{children:n.phone}),l.jsx("td",{children:n.gender}),l.jsx("td",{children:n.fieldOfHealth})]},n.id))})]})})})}function ZD(){const[t,e]=C.useState({doctorName:"",age:"",experience:"",address:"",phone:"",gender:"",fieldOfHealth:"",maritalStatus:""}),n=Xr(),r=s=>{const{name:a,value:c}=s.target;e(u=>({...u,[a]:c}))},i=async s=>{s.preventDefault();try{const a=xr(Of,"doctors");await rb(a,t),e({doctorName:"",age:"",experience:"",address:"",phone:"",gender:"",fieldOfHealth:"",maritalStatus:""}),n("/doctor")}catch(a){console.error("Error adding document: ",a)}};return l.jsxs(l.Fragment,{children:[l.jsx(ds,{}),l.jsxs("div",{className:Te.main,children:[l.jsx("div",{className:Te.first_main,children:l.jsx("img",{src:XD,alt:""})}),l.jsxs("div",{className:Te.second_main,children:[l.jsxs("div",{className:Te.heading,children:[l.jsx("p",{className:Te.main_head,children:"Application Form"}),l.jsx("p",{className:Te.subhead,children:"(Doctor Joining)"})]}),l.jsxs("form",{onSubmit:i,className:Te.form,children:[l.jsxs("div",{className:Te.form_div,children:[l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Doctor Name"}),l.jsx("input",{name:"doctorName",value:t.doctorName,onChange:r,placeholder:"Doctor Name"})]}),l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Age"}),l.jsx("input",{name:"age",value:t.age,onChange:r,placeholder:"Age"})]})]}),l.jsx("div",{className:Te.form_div,children:l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Experience (years)"}),l.jsxs("select",{name:"experience",value:t.experience,onChange:r,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"1-5",children:"1-5 years"}),l.jsx("option",{value:"6-10",children:"6-10 years"}),l.jsx("option",{value:"11-15",children:"11-15 years"}),l.jsx("option",{value:"16-20",children:"16-20 years"}),l.jsx("option",{value:"21+",children:"21+ years"})]})]})}),l.jsxs("div",{className:Te.form_div,children:[l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Address"}),l.jsx("input",{name:"address",value:t.address,onChange:r,placeholder:"Address"})]}),l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Phone Number"}),l.jsx("input",{name:"phone",value:t.phone,onChange:r,placeholder:"(000) 000-0000"})]})]}),l.jsxs("div",{className:Te.form_div,children:[l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Gender"}),l.jsxs("select",{name:"gender",value:t.gender,onChange:r,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"Male",children:"Male"}),l.jsx("option",{value:"Female",children:"Female"}),l.jsx("option",{value:"Other",children:"Other"})]})]}),l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Field of Health"}),l.jsxs("select",{name:"fieldOfHealth",value:t.fieldOfHealth,onChange:r,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"Cardiology",children:"Cardiology"}),l.jsx("option",{value:"Neurology",children:"Neurology"}),l.jsx("option",{value:"Orthopedics",children:"Orthopedics"}),l.jsx("option",{value:"Pediatrics",children:"Pediatrics"}),l.jsx("option",{value:"General Practice",children:"General Practice"}),l.jsx("option",{value:"Other",children:"Other"})]})]})]}),l.jsx("div",{className:Te.form_div,children:l.jsxs("div",{className:Te.form_innerdiv,children:[l.jsx("p",{children:"Marital Status"}),l.jsxs("select",{name:"maritalStatus",value:t.maritalStatus,onChange:r,children:[l.jsx("option",{value:"",children:"Please Select"}),l.jsx("option",{value:"Single",children:"Single"}),l.jsx("option",{value:"Married",children:"Married"})]})]})}),l.jsx("div",{className:Te.btn_div,children:l.jsx(xt,{type:"submit",variant:"contained",className:Te.btn,children:"Submit"})})]})]})]}),l.jsx("div",{className:Te.data,children:l.jsx(JD,{})}),l.jsx(hs,{})]})}const e7="_main_jyjku_1",t7="_divmain_jyjku_19",n7="_doctordata_jyjku_27",r7="_box_jyjku_37",i7="_boxhead_jyjku_65",s7="_boxheading_jyjku_141",vi={main:e7,divmain:t7,doctordata:n7,box:r7,boxhead:i7,boxheading:s7};function a7(){const[t,e]=C.useState([]);return C.useEffect(()=>{(async()=>{try{const i=(await us(xr(Of,"doctors"))).docs.map(s=>({...s.data(),id:s.id}));e(i)}catch(r){console.error("Error fetching data: ",r)}})()},[]),l.jsxs(l.Fragment,{children:[l.jsx(ef,{}),l.jsx("div",{className:vi.main,children:l.jsxs("div",{className:vi.divmain,children:[l.jsx("div",{className:vi.boxheading,children:l.jsxs("div",{className:vi.boxhead,children:[l.jsx("span",{children:"Doctor Name"}),l.jsx("span",{children:"Field of Health"}),l.jsx("span",{children:"Phone Number"})]})}),l.jsx("div",{className:vi.doctordata,children:t.map((n,r)=>l.jsxs("div",{className:vi.box,children:[l.jsx("span",{children:n.doctorName}),l.jsx("span",{children:n.fieldOfHealth}),l.jsx("span",{children:n.phone})]},r))})]})}),l.jsx(Jd,{})]})}function o7(){return l.jsx(l.Fragment,{children:l.jsx(F2,{children:l.jsxs(N2,{children:[l.jsx(Rt,{path:"/",element:l.jsx(oR,{})}),l.jsx(Rt,{path:"/doctorsign",element:l.jsx(EC,{})}),l.jsx(Rt,{path:"/usersign",element:l.jsx(VC,{})}),l.jsx(Rt,{path:"/user",element:l.jsx(CN,{})}),l.jsx(Rt,{path:"/user/form",element:l.jsx(t8,{})}),l.jsx(Rt,{path:"/doctor",element:l.jsx(vD,{})}),l.jsx(Rt,{path:"/doctor/patient",element:l.jsx(wD,{})}),l.jsx(Rt,{path:"/doctor/patient/history",element:l.jsx(ID,{})}),l.jsx(Rt,{path:"/doctor/patient/searchpatient",element:l.jsx(MD,{})}),l.jsx(Rt,{path:"/doctor/patient/currentpatient",element:l.jsx(VD,{})}),l.jsx(Rt,{path:"/doctor/formd",element:l.jsx(ZD,{})}),l.jsx(Rt,{path:"/user/userdoctor",element:l.jsx(a7,{})})]})})})}Hu.createRoot(document.getElementById("root")).render(l.jsx(Ot.StrictMode,{children:l.jsx(o7,{})}));

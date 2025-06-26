import{a as u,R as D,d as P}from"./styled-components.browser.esm-BNWIvhS-.js";var z={},ce;function Ae(){if(ce)return z;ce=1,Object.defineProperty(z,"__esModule",{value:!0}),z.parse=s,z.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,n=Object.prototype.toString,i=(()=>{const m=function(){};return m.prototype=Object.create(null),m})();function s(m,g){const d=new i,x=m.length;if(x<2)return d;const y=(g==null?void 0:g.decode)||h;let f=0;do{const v=m.indexOf("=",f);if(v===-1)break;const w=m.indexOf(";",f),b=w===-1?x:w;if(v>b){f=m.lastIndexOf(";",v-1)+1;continue}const C=c(m,f,v),A=o(m,v,C),F=m.slice(C,A);if(d[F]===void 0){let T=c(m,v+1,b),R=o(m,b,T);const I=y(m.slice(T,R));d[F]=I}f=b+1}while(f<x);return d}function c(m,g,d){do{const x=m.charCodeAt(g);if(x!==32&&x!==9)return g}while(++g<d);return d}function o(m,g,d){for(;g>d;){const x=m.charCodeAt(--g);if(x!==32&&x!==9)return g+1}return d}function l(m,g,d){const x=(d==null?void 0:d.encode)||encodeURIComponent;if(!e.test(m))throw new TypeError(`argument name is invalid: ${m}`);const y=x(g);if(!t.test(y))throw new TypeError(`argument val is invalid: ${g}`);let f=m+"="+y;if(!d)return f;if(d.maxAge!==void 0){if(!Number.isInteger(d.maxAge))throw new TypeError(`option maxAge is invalid: ${d.maxAge}`);f+="; Max-Age="+d.maxAge}if(d.domain){if(!r.test(d.domain))throw new TypeError(`option domain is invalid: ${d.domain}`);f+="; Domain="+d.domain}if(d.path){if(!a.test(d.path))throw new TypeError(`option path is invalid: ${d.path}`);f+="; Path="+d.path}if(d.expires){if(!p(d.expires)||!Number.isFinite(d.expires.valueOf()))throw new TypeError(`option expires is invalid: ${d.expires}`);f+="; Expires="+d.expires.toUTCString()}if(d.httpOnly&&(f+="; HttpOnly"),d.secure&&(f+="; Secure"),d.partitioned&&(f+="; Partitioned"),d.priority)switch(typeof d.priority=="string"?d.priority.toLowerCase():void 0){case"low":f+="; Priority=Low";break;case"medium":f+="; Priority=Medium";break;case"high":f+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${d.priority}`)}if(d.sameSite)switch(typeof d.sameSite=="string"?d.sameSite.toLowerCase():d.sameSite){case!0:case"strict":f+="; SameSite=Strict";break;case"lax":f+="; SameSite=Lax";break;case"none":f+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${d.sameSite}`)}return f}function h(m){if(m.indexOf("%")===-1)return m;try{return decodeURIComponent(m)}catch{return m}}function p(m){return n.call(m)==="[object Date]"}return z}Ae();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var de="popstate";function Me(e={}){function t(a,n){let{pathname:i,search:s,hash:c}=a.location;return re("",{pathname:i,search:s,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function r(a,n){return typeof n=="string"?n:_(n)}return ze(t,r,null,e)}function E(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function S(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Be(){return Math.random().toString(36).substring(2,10)}function fe(e,t){return{usr:e.state,key:e.key,idx:t}}function re(e,t,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?M(t):t,state:r,key:t&&t.key||a||Be()}}function _({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function M(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function ze(e,t,r,a={}){let{window:n=document.defaultView,v5Compat:i=!1}=a,s=n.history,c="POP",o=null,l=h();l==null&&(l=0,s.replaceState({...s.state,idx:l},""));function h(){return(s.state||{idx:null}).idx}function p(){c="POP";let y=h(),f=y==null?null:y-l;l=y,o&&o({action:c,location:x.location,delta:f})}function m(y,f){c="PUSH";let v=re(x.location,y,f);l=h()+1;let w=fe(v,l),b=x.createHref(v);try{s.pushState(w,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;n.location.assign(b)}i&&o&&o({action:c,location:x.location,delta:1})}function g(y,f){c="REPLACE";let v=re(x.location,y,f);l=h();let w=fe(v,l),b=x.createHref(v);s.replaceState(w,"",b),i&&o&&o({action:c,location:x.location,delta:0})}function d(y){let f=n.location.origin!=="null"?n.location.origin:n.location.href,v=typeof y=="string"?y:_(y);return v=v.replace(/ $/,"%20"),E(f,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,f)}let x={get action(){return c},get location(){return e(n,s)},listen(y){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(de,p),o=y,()=>{n.removeEventListener(de,p),o=null}},createHref(y){return t(n,y)},createURL:d,encodeLocation(y){let f=d(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(y){return s.go(y)}};return x}function we(e,t,r="/"){return je(e,t,r,!1)}function je(e,t,r,a){let n=typeof t=="string"?M(t):t,i=$(n.pathname||"/",r);if(i==null)return null;let s=xe(e);_e(s);let c=null;for(let o=0;c==null&&o<s.length;++o){let l=Qe(i);c=Ge(s[o],l,a)}return c}function xe(e,t=[],r=[],a=""){let n=(i,s,c)=>{let o={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(E(o.relativePath.startsWith(a),`Absolute route path "${o.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(a.length));let l=L([a,o.relativePath]),h=r.concat(o);i.children&&i.children.length>0&&(E(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),xe(i.children,t,h,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:Ye(l,i.index),routesMeta:h})};return e.forEach((i,s)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))n(i,s);else for(let o of ve(i.path))n(i,s,o)}),t}function ve(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),i=r.replace(/\?$/,"");if(a.length===0)return n?[i,""]:[i];let s=ve(a.join("/")),c=[];return c.push(...s.map(o=>o===""?i:[i,o].join("/"))),n&&c.push(...s),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function _e(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:qe(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var He=/^:[\w-]+$/,Ue=3,We=2,Ve=1,Ke=10,Je=-2,he=e=>e==="*";function Ye(e,t){let r=e.split("/"),a=r.length;return r.some(he)&&(a+=Je),t&&(a+=We),r.filter(n=>!he(n)).reduce((n,i)=>n+(He.test(i)?Ue:i===""?Ve:Ke),a)}function qe(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function Ge(e,t,r=!1){let{routesMeta:a}=e,n={},i="/",s=[];for(let c=0;c<a.length;++c){let o=a[c],l=c===a.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=Y({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},h),m=o.route;if(!p&&l&&r&&!a[a.length-1].route.index&&(p=Y({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},h)),!p)return null;Object.assign(n,p.params),s.push({params:n,pathname:L([i,p.pathname]),pathnameBase:rt(L([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=L([i,p.pathnameBase]))}return s}function Y(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=Xe(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let i=n[0],s=i.replace(/(.)\/+$/,"$1"),c=n.slice(1);return{params:a.reduce((l,{paramName:h,isOptional:p},m)=>{if(h==="*"){let d=c[m]||"";s=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}const g=c[m];return p&&!g?l[h]=void 0:l[h]=(g||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:s,pattern:e}}function Xe(e,t=!1,r=!0){S(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,o)=>(a.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function Qe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return S(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function $(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function Ze(e,t="/"){let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?M(e):e;return{pathname:r?r.startsWith("/")?r:et(r,t):t,search:nt(a),hash:at(n)}}function et(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function ee(e,t,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tt(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ee(e){let t=tt(e);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function be(e,t,r,a=!1){let n;typeof e=="string"?n=M(e):(n={...e},E(!n.pathname||!n.pathname.includes("?"),ee("?","pathname","search",n)),E(!n.pathname||!n.pathname.includes("#"),ee("#","pathname","hash",n)),E(!n.search||!n.search.includes("#"),ee("#","search","hash",n)));let i=e===""||n.pathname==="",s=i?"/":n.pathname,c;if(s==null)c=r;else{let p=t.length-1;if(!a&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;n.pathname=m.join("/")}c=p>=0?t[p]:"/"}let o=Ze(n,c),l=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(l||h)&&(o.pathname+="/"),o}var L=e=>e.join("/").replace(/\/\/+/g,"/"),rt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),nt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,at=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function it(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ce=["POST","PUT","PATCH","DELETE"];new Set(Ce);var ot=["GET",...Ce];new Set(ot);var B=u.createContext(null);B.displayName="DataRouter";var X=u.createContext(null);X.displayName="DataRouterState";var Re=u.createContext({isTransitioning:!1});Re.displayName="ViewTransition";var lt=u.createContext(new Map);lt.displayName="Fetchers";var ut=u.createContext(null);ut.displayName="Await";var k=u.createContext(null);k.displayName="Navigation";var H=u.createContext(null);H.displayName="Location";var O=u.createContext({outlet:null,matches:[],isDataRoute:!1});O.displayName="Route";var ae=u.createContext(null);ae.displayName="RouteError";function st(e,{relative:t}={}){E(U(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=u.useContext(k),{hash:n,pathname:i,search:s}=W(e,{relative:t}),c=i;return r!=="/"&&(c=i==="/"?r:L([r,i])),a.createHref({pathname:c,search:s,hash:n})}function U(){return u.useContext(H)!=null}function N(){return E(U(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(H).location}var Pe="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Se(e){u.useContext(k).static||u.useLayoutEffect(e)}function ct(){let{isDataRoute:e}=u.useContext(O);return e?Ct():dt()}function dt(){E(U(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(B),{basename:t,navigator:r}=u.useContext(k),{matches:a}=u.useContext(O),{pathname:n}=N(),i=JSON.stringify(Ee(a)),s=u.useRef(!1);return Se(()=>{s.current=!0}),u.useCallback((o,l={})=>{if(S(s.current,Pe),!s.current)return;if(typeof o=="number"){r.go(o);return}let h=be(o,JSON.parse(i),n,l.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:L([t,h.pathname])),(l.replace?r.replace:r.push)(h,l.state,l)},[t,r,i,n,e])}u.createContext(null);function W(e,{relative:t}={}){let{matches:r}=u.useContext(O),{pathname:a}=N(),n=JSON.stringify(Ee(r));return u.useMemo(()=>be(e,JSON.parse(n),a,t==="path"),[e,n,a,t])}function ft(e,t){return ke(e,t)}function ke(e,t,r,a){var v;E(U(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n,static:i}=u.useContext(k),{matches:s}=u.useContext(O),c=s[s.length-1],o=c?c.params:{},l=c?c.pathname:"/",h=c?c.pathnameBase:"/",p=c&&c.route;{let w=p&&p.path||"";Le(l,!p||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let m=N(),g;if(t){let w=typeof t=="string"?M(t):t;E(h==="/"||((v=w.pathname)==null?void 0:v.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${w.pathname}" was given in the \`location\` prop.`),g=w}else g=m;let d=g.pathname||"/",x=d;if(h!=="/"){let w=h.replace(/^\//,"").split("/");x="/"+d.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=!i&&r&&r.matches&&r.matches.length>0?r.matches:we(e,{pathname:x});S(p||y!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),S(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let f=yt(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:L([h,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?h:L([h,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,r,a);return t&&f?u.createElement(H.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},f):f}function ht(){let e=bt(),t=it(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},i={padding:"2px 4px",backgroundColor:a},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:i},"ErrorBoundary")," or"," ",u.createElement("code",{style:i},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:n},r):null,s)}var mt=u.createElement(ht,null),pt=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement(O.Provider,{value:this.props.routeContext},u.createElement(ae.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gt({routeContext:e,match:t,children:r}){let a=u.useContext(B);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(O.Provider,{value:e},r)}function yt(e,t=[],r=null,a=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let n=e,i=r==null?void 0:r.errors;if(i!=null){let o=n.findIndex(l=>l.route.id&&(i==null?void 0:i[l.route.id])!==void 0);E(o>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),n=n.slice(0,Math.min(n.length,o+1))}let s=!1,c=-1;if(r)for(let o=0;o<n.length;o++){let l=n[o];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=o),l.route.id){let{loaderData:h,errors:p}=r,m=l.route.loader&&!h.hasOwnProperty(l.route.id)&&(!p||p[l.route.id]===void 0);if(l.route.lazy||m){s=!0,c>=0?n=n.slice(0,c+1):n=[n[0]];break}}}return n.reduceRight((o,l,h)=>{let p,m=!1,g=null,d=null;r&&(p=i&&l.route.id?i[l.route.id]:void 0,g=l.route.errorElement||mt,s&&(c<0&&h===0?(Le("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,d=null):c===h&&(m=!0,d=l.route.hydrateFallbackElement||null)));let x=t.concat(n.slice(0,h+1)),y=()=>{let f;return p?f=g:m?f=d:l.route.Component?f=u.createElement(l.route.Component,null):l.route.element?f=l.route.element:f=o,u.createElement(gt,{match:l,routeContext:{outlet:o,matches:x,isDataRoute:r!=null},children:f})};return r&&(l.route.ErrorBoundary||l.route.errorElement||h===0)?u.createElement(pt,{location:r.location,revalidation:r.revalidation,component:g,error:p,children:y(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):y()},null)}function ie(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wt(e){let t=u.useContext(B);return E(t,ie(e)),t}function xt(e){let t=u.useContext(X);return E(t,ie(e)),t}function vt(e){let t=u.useContext(O);return E(t,ie(e)),t}function oe(e){let t=vt(e),r=t.matches[t.matches.length-1];return E(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function Et(){return oe("useRouteId")}function bt(){var a;let e=u.useContext(ae),t=xt("useRouteError"),r=oe("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[r]}function Ct(){let{router:e}=wt("useNavigate"),t=oe("useNavigate"),r=u.useRef(!1);return Se(()=>{r.current=!0}),u.useCallback(async(n,i={})=>{S(r.current,Pe),r.current&&(typeof n=="number"?e.navigate(n):await e.navigate(n,{fromRouteId:t,...i}))},[e,t])}var me={};function Le(e,t,r){!t&&!me[e]&&(me[e]=!0,S(!1,r))}u.memo(Rt);function Rt({routes:e,future:t,state:r}){return ke(e,void 0,r,t)}function Pt(e){E(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function St({basename:e="/",children:t=null,location:r,navigationType:a="POP",navigator:n,static:i=!1}){E(!U(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:s,navigator:n,static:i,future:{}}),[s,n,i]);typeof r=="string"&&(r=M(r));let{pathname:o="/",search:l="",hash:h="",state:p=null,key:m="default"}=r,g=u.useMemo(()=>{let d=$(o,s);return d==null?null:{location:{pathname:d,search:l,hash:h,state:p,key:m},navigationType:a}},[s,o,l,h,p,m,a]);return S(g!=null,`<Router basename="${s}"> is not able to match the URL "${o}${l}${h}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:u.createElement(k.Provider,{value:c},u.createElement(H.Provider,{children:t,value:g}))}function fr({children:e,location:t}){return ft(ne(e),t)}function ne(e,t=[]){let r=[];return u.Children.forEach(e,(a,n)=>{if(!u.isValidElement(a))return;let i=[...t,n];if(a.type===u.Fragment){r.push.apply(r,ne(a.props.children,i));return}E(a.type===Pt,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),E(!a.props.index||!a.props.children,"An index route cannot have child routes.");let s={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(s.children=ne(a.props.children,i)),r.push(s)}),r}var K="get",J="application/x-www-form-urlencoded";function Q(e){return e!=null&&typeof e.tagName=="string"}function kt(e){return Q(e)&&e.tagName.toLowerCase()==="button"}function Lt(e){return Q(e)&&e.tagName.toLowerCase()==="form"}function $t(e){return Q(e)&&e.tagName.toLowerCase()==="input"}function Ot(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ft(e,t){return e.button===0&&(!t||t==="_self")&&!Ot(e)}var V=null;function It(){if(V===null)try{new FormData(document.createElement("form"),0),V=!1}catch{V=!0}return V}var Tt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function te(e){return e!=null&&!Tt.has(e)?(S(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${J}"`),null):e}function Dt(e,t){let r,a,n,i,s;if(Lt(e)){let c=e.getAttribute("action");a=c?$(c,t):null,r=e.getAttribute("method")||K,n=te(e.getAttribute("enctype"))||J,i=new FormData(e)}else if(kt(e)||$t(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||c.getAttribute("action");if(a=o?$(o,t):null,r=e.getAttribute("formmethod")||c.getAttribute("method")||K,n=te(e.getAttribute("formenctype"))||te(c.getAttribute("enctype"))||J,i=new FormData(c,e),!It()){let{name:l,type:h,value:p}=e;if(h==="image"){let m=l?`${l}.`:"";i.append(`${m}x`,"0"),i.append(`${m}y`,"0")}else l&&i.append(l,p)}}else{if(Q(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=K,a=null,n=J,s=e}return i&&n==="text/plain"&&(s=i,i=void 0),{action:a,method:r.toLowerCase(),encType:n,formData:i,body:s}}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Nt(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function At(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Mt(e,t,r){let a=await Promise.all(e.map(async n=>{let i=t.routes[n.route.id];if(i){let s=await Nt(i,r);return s.links?s.links():[]}return[]}));return _t(a.flat(1).filter(At).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function pe(e,t,r,a,n,i){let s=(o,l)=>r[l]?o.route.id!==r[l].route.id:!0,c=(o,l)=>{var h;return r[l].pathname!==o.pathname||((h=r[l].route.path)==null?void 0:h.endsWith("*"))&&r[l].params["*"]!==o.params["*"]};return i==="assets"?t.filter((o,l)=>s(o,l)||c(o,l)):i==="data"?t.filter((o,l)=>{var p;let h=a.routes[o.route.id];if(!h||!h.hasLoader)return!1;if(s(o,l)||c(o,l))return!0;if(o.route.shouldRevalidate){let m=o.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=r[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Bt(e,t,{includeHydrateFallback:r}={}){return zt(e.map(a=>{let n=t.routes[a.route.id];if(!n)return[];let i=[n.module];return n.clientActionModule&&(i=i.concat(n.clientActionModule)),n.clientLoaderModule&&(i=i.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(i=i.concat(n.hydrateFallbackModule)),n.imports&&(i=i.concat(n.imports)),i}).flat(1))}function zt(e){return[...new Set(e)]}function jt(e){let t={},r=Object.keys(e).sort();for(let a of r)t[a]=e[a];return t}function _t(e,t){let r=new Set;return new Set(t),e.reduce((a,n)=>{let i=JSON.stringify(jt(n));return r.has(i)||(r.add(i),a.push({key:i,link:n})),a},[])}function Ht(e,t){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname="_root.data":t&&$(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function $e(){let e=u.useContext(B);return le(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Ut(){let e=u.useContext(X);return le(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ue=u.createContext(void 0);ue.displayName="FrameworkContext";function Oe(){let e=u.useContext(ue);return le(e,"You must render this element inside a <HydratedRouter> element"),e}function Wt(e,t){let r=u.useContext(ue),[a,n]=u.useState(!1),[i,s]=u.useState(!1),{onFocus:c,onBlur:o,onMouseEnter:l,onMouseLeave:h,onTouchStart:p}=t,m=u.useRef(null);u.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let x=f=>{f.forEach(v=>{s(v.isIntersecting)})},y=new IntersectionObserver(x,{threshold:.5});return m.current&&y.observe(m.current),()=>{y.disconnect()}}},[e]),u.useEffect(()=>{if(a){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[a]);let g=()=>{n(!0)},d=()=>{n(!1),s(!1)};return r?e!=="intent"?[i,m,{}]:[i,m,{onFocus:j(c,g),onBlur:j(o,d),onMouseEnter:j(l,g),onMouseLeave:j(h,d),onTouchStart:j(p,g)}]:[!1,m,{}]}function j(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Vt({page:e,...t}){let{router:r}=$e(),a=u.useMemo(()=>we(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?u.createElement(Jt,{page:e,matches:a,...t}):null}function Kt(e){let{manifest:t,routeModules:r}=Oe(),[a,n]=u.useState([]);return u.useEffect(()=>{let i=!1;return Mt(e,t,r).then(s=>{i||n(s)}),()=>{i=!0}},[e,t,r]),a}function Jt({page:e,matches:t,...r}){let a=N(),{manifest:n,routeModules:i}=Oe(),{basename:s}=$e(),{loaderData:c,matches:o}=Ut(),l=u.useMemo(()=>pe(e,t,o,n,a,"data"),[e,t,o,n,a]),h=u.useMemo(()=>pe(e,t,o,n,a,"assets"),[e,t,o,n,a]),p=u.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let d=new Set,x=!1;if(t.forEach(f=>{var w;let v=n.routes[f.route.id];!v||!v.hasLoader||(!l.some(b=>b.route.id===f.route.id)&&f.route.id in c&&((w=i[f.route.id])!=null&&w.shouldRevalidate)||v.hasClientLoader?x=!0:d.add(f.route.id))}),d.size===0)return[];let y=Ht(e,s);return x&&d.size>0&&y.searchParams.set("_routes",t.filter(f=>d.has(f.route.id)).map(f=>f.route.id).join(",")),[y.pathname+y.search]},[s,c,a,n,l,t,e,i]),m=u.useMemo(()=>Bt(h,n),[h,n]),g=Kt(h);return u.createElement(u.Fragment,null,p.map(d=>u.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...r})),m.map(d=>u.createElement("link",{key:d,rel:"modulepreload",href:d,...r})),g.map(({key:d,link:x})=>u.createElement("link",{key:d,...x})))}function Yt(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Fe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fe&&(window.__reactRouterVersion="7.3.0")}catch{}function hr({basename:e,children:t,window:r}){let a=u.useRef();a.current==null&&(a.current=Me({window:r,v5Compat:!0}));let n=a.current,[i,s]=u.useState({action:n.action,location:n.location}),c=u.useCallback(o=>{u.startTransition(()=>s(o))},[s]);return u.useLayoutEffect(()=>n.listen(c),[n,c]),u.createElement(St,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n})}var Ie=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z=u.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:n,reloadDocument:i,replace:s,state:c,target:o,to:l,preventScrollReset:h,viewTransition:p,...m},g){let{basename:d}=u.useContext(k),x=typeof l=="string"&&Ie.test(l),y,f=!1;if(typeof l=="string"&&x&&(y=l,Fe))try{let R=new URL(window.location.href),I=l.startsWith("//")?new URL(R.protocol+l):new URL(l),se=$(I.pathname,d);I.origin===R.origin&&se!=null?l=se+I.search+I.hash:f=!0}catch{S(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=st(l,{relative:n}),[w,b,C]=Wt(a,m),A=Qt(l,{replace:s,state:c,target:o,preventScrollReset:h,relative:n,viewTransition:p});function F(R){t&&t(R),R.defaultPrevented||A(R)}let T=u.createElement("a",{...m,...C,href:y||v,onClick:f||i?t:F,ref:Yt(g,b),target:o,"data-discover":!x&&r==="render"?"true":void 0});return w&&!x?u.createElement(u.Fragment,null,T,u.createElement(Vt,{page:v})):T});Z.displayName="Link";var qt=u.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:n=!1,style:i,to:s,viewTransition:c,children:o,...l},h){let p=W(s,{relative:l.relative}),m=N(),g=u.useContext(X),{navigator:d,basename:x}=u.useContext(k),y=g!=null&&nr(p)&&c===!0,f=d.encodeLocation?d.encodeLocation(p).pathname:p.pathname,v=m.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(v=v.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&x&&(w=$(w,x)||w);const b=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=v===f||!n&&v.startsWith(f)&&v.charAt(b)==="/",A=w!=null&&(w===f||!n&&w.startsWith(f)&&w.charAt(f.length)==="/"),F={isActive:C,isPending:A,isTransitioning:y},T=C?t:void 0,R;typeof a=="function"?R=a(F):R=[a,C?"active":null,A?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i(F):i;return u.createElement(Z,{...l,"aria-current":T,className:R,ref:h,style:I,to:s,viewTransition:c},typeof o=="function"?o(F):o)});qt.displayName="NavLink";var Gt=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:n,state:i,method:s=K,action:c,onSubmit:o,relative:l,preventScrollReset:h,viewTransition:p,...m},g)=>{let d=tr(),x=rr(c,{relative:l}),y=s.toLowerCase()==="get"?"get":"post",f=typeof c=="string"&&Ie.test(c),v=w=>{if(o&&o(w),w.defaultPrevented)return;w.preventDefault();let b=w.nativeEvent.submitter,C=(b==null?void 0:b.getAttribute("formmethod"))||s;d(b||w.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:n,state:i,relative:l,preventScrollReset:h,viewTransition:p})};return u.createElement("form",{ref:g,method:y,action:x,onSubmit:a?o:v,...m,"data-discover":!f&&e==="render"?"true":void 0})});Gt.displayName="Form";function Xt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Te(e){let t=u.useContext(B);return E(t,Xt(e)),t}function Qt(e,{target:t,replace:r,state:a,preventScrollReset:n,relative:i,viewTransition:s}={}){let c=ct(),o=N(),l=W(e,{relative:i});return u.useCallback(h=>{if(Ft(h,t)){h.preventDefault();let p=r!==void 0?r:_(o)===_(l);c(e,{replace:p,state:a,preventScrollReset:n,relative:i,viewTransition:s})}},[o,c,l,r,a,t,e,n,i,s])}var Zt=0,er=()=>`__${String(++Zt)}__`;function tr(){let{router:e}=Te("useSubmit"),{basename:t}=u.useContext(k),r=Et();return u.useCallback(async(a,n={})=>{let{action:i,method:s,encType:c,formData:o,body:l}=Dt(a,t);if(n.navigate===!1){let h=n.fetcherKey||er();await e.fetch(h,r,n.action||i,{preventScrollReset:n.preventScrollReset,formData:o,body:l,formMethod:n.method||s,formEncType:n.encType||c,flushSync:n.flushSync})}else await e.navigate(n.action||i,{preventScrollReset:n.preventScrollReset,formData:o,body:l,formMethod:n.method||s,formEncType:n.encType||c,replace:n.replace,state:n.state,fromRouteId:r,flushSync:n.flushSync,viewTransition:n.viewTransition})},[e,t,r])}function rr(e,{relative:t}={}){let{basename:r}=u.useContext(k),a=u.useContext(O);E(a,"useFormAction must be used inside a RouteContext");let[n]=a.matches.slice(-1),i={...W(e||".",{relative:t})},s=N();if(e==null){i.search=s.search;let c=new URLSearchParams(i.search),o=c.getAll("index");if(o.some(h=>h==="")){c.delete("index"),o.filter(p=>p).forEach(p=>c.append("index",p));let h=c.toString();i.search=h?`?${h}`:""}}return(!e||e===".")&&n.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(i.pathname=i.pathname==="/"?r:L([r,i.pathname])),_(i)}function nr(e,t={}){let r=u.useContext(Re);E(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Te("useViewTransitionState"),n=W(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=$(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=$(r.nextLocation.pathname,a)||r.nextLocation.pathname;return Y(n.pathname,s)!=null||Y(n.pathname,i)!=null}new TextEncoder;var De={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ge=D.createContext&&D.createContext(De),ar=["attr","size","title"];function ir(e,t){if(e==null)return{};var r=or(e,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function or(e,t){if(e==null)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},q.apply(this,arguments)}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ye(Object(r),!0).forEach(function(a){lr(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function lr(e,t,r){return t=ur(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ur(e){var t=sr(e,"string");return typeof t=="symbol"?t:t+""}function sr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ne(e){return e&&e.map((t,r)=>D.createElement(t.tag,G({key:r},t.attr),Ne(t.child)))}function mr(e){return t=>D.createElement(cr,q({attr:G({},e.attr)},t),Ne(e.child))}function cr(e){var t=r=>{var{attr:a,size:n,title:i}=e,s=ir(e,ar),c=n||r.size||"1em",o;return r.className&&(o=r.className),e.className&&(o=(o?o+" ":"")+e.className),D.createElement("svg",q({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,s,{className:o,style:G(G({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&D.createElement("title",null,i),e.children)};return ge!==void 0?D.createElement(ge.Consumer,null,r=>t(r)):t(De)}const pr=P.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    background: linear-gradient(90deg,#333333 0%, #333333 30%, #FFFFFF 30%, #FFFFFF 100%
    );
    width: 100vw;
    height: 100vh;

    @media (max-width: 430px) {
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        gap: 1rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        gap: 2rem;
    }
`,gr=P.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #333333;
    background-color: #EAEAEA;
    margin-left: 26rem;
    width: 20rem;

    @media (max-width: 430px) {
        margin-left: 2.5rem;
        width: 12rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        margin-left: 5rem;
        width: 12rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        margin-left: 7rem;
        width: 15rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        margin-left: 7rem;
        width: 17rem;
    }
`,yr=P.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: center;
    padding: 1rem;
`,wr=P.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    @media (max-width: 430px) {
        width: 7rem;
        height: 7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 8rem;
        height: 8rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 9rem;
        height: 9rem;
    }
`,xr=P.h1`
    font-size: 1.2rem;

    @media (max-width: 430px) {
        font-size: .8rem;
    }
    
    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .9rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 1.1rem;
    }
`,vr=P.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #FFFFFF;
    padding: 1rem 0;
`,Er=P(Z)`
    color: #333333;
    text-decoration: none;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`,br=P.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,Cr=P.p`
    font-size: 1rem;

    @media (max-width: 430px) {
        font-size: .5rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .8rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`,Rr=P.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    @media (max-width: 430px) {
        gap: .3rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        gap: .5rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        gap: .7rem;
    }
`,Pr=P(Z)`
    width: 7rem;
    background-color: #EAEAEA;
    padding: .3rem;
    text-transform: uppercase;
    border: 1px solid #EAEAEA;
    border-radius: 12px;
    text-decoration: none;
    color: #333333;
    text-align: center;
    font-family: "Poppins", sans-serif;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }

    @media (max-width: 430px) {
        width: 2.1rem;
        font-size: .385rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 4rem;
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 6rem;
        font-size: .9rem;
    }
`,Sr=P.p`
    width: 42.6875rem;
    text-align: justify;

    @media (max-width: 430px) {
        width: 9rem;
        font-size: .5rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 15rem;
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 20rem;
        font-size: .9rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        width: 24rem;
        font-size: 1rem;
    }
`;export{hr as B,pr as C,mr as G,wr as I,Z as L,fr as R,gr as S,xr as T,Pt as a,Er as b,yr as c,vr as d,br as e,Cr as f,Rr as g,Pr as h,Sr as i};

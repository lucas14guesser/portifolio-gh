import{R as s,d as o,j as i}from"./styled-components.browser.esm-BNWIvhS-.js";import{L as x}from"./chunk-K6CSEXPM-BrXHkFkr.js";var v={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},p=s.createContext&&s.createContext(v),O=["attr","size","title"];function P(e,t){if(e==null)return{};var r=F(e,t),n,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function F(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(n){E(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E(e,t,r){return t=S(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=z(e,"string");return typeof t=="symbol"?t:t+""}function z(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function j(e){return e&&e.map((t,r)=>s.createElement(t.tag,d({key:r},t.attr),j(t.child)))}function y(e){return t=>s.createElement(_,u({attr:d({},e.attr)},t),j(e.child))}function _(e){var t=r=>{var{attr:n,size:a,title:c}=e,w=P(e,O),h=a||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,w,{className:l,style:d(d({color:e.color||r.color},r.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return p!==void 0?s.createElement(p.Consumer,null,r=>t(r)):t(v)}function D(e){return y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function C(e){return y({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const M=o.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    background: linear-gradient(90deg,#333333 0%, #333333 30%, #FFFFFF 30%, #FFFFFF 100%
    );
    width: 100vw;
    height: 100vh;
`,N=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #333333;
    background-color: #EAEAEA;
    margin-left: 26rem;
    width: 20rem;
`,A=o.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: center;
    padding: 1rem;
`,B=o.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`,m=o.h1`
    font-size: 1.2rem;
`,I=o.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #FFFFFF;
    padding: 1rem 0;
`,b=o(x)`
    color: #333333;
    text-decoration: none;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`,k=o.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,H=o.p`
    font-size: 1rem;
`,L=o.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`,f=o(x)`
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
`,T=o.p`
    width: 42.6875rem;
    text-align: justify;
`;function G(){return i.jsxs(M,{children:[" ",i.jsxs(N,{children:[" ",i.jsxs(A,{children:[" ",i.jsx(B,{src:"/assets/profileimg.jpg",alt:"Foto de perfil"}),i.jsxs(m,{style:{borderBottom:"1px solid #333333",paddingBottom:"1rem"},children:["Guilherme H. ",i.jsx("br",{}),"Souza"]})," ",i.jsx(m,{style:{marginBlockStart:"0"},children:"Jornalista"})]}),i.jsxs(I,{children:[" ",i.jsx(b,{to:"https://www.instagram.com/guilhermehsou/?igsh=MTNrM3I5dnVmZXY3bw%3D%3D&utm_source=qr#",target:"_blank",children:i.jsx(D,{})}),i.jsx(b,{to:"https://www.linkedin.com/in/guilherme-henrique-souza-02560b276/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",target:"_blank",children:i.jsx(C,{})})]})]}),i.jsxs(k,{children:[" ",i.jsx(m,{children:"Bem-vindos ao meu portfólio!"}),i.jsx(H,{children:"Esse sou eu!"}),i.jsxs(L,{children:[" ",i.jsx(f,{to:"/sobre-mim",children:"Sobre mim"}),i.jsx(f,{to:"/curriculo",children:"Currículo"}),i.jsx(f,{to:"/projetos",children:"Projetos"})]}),i.jsx(T,{children:'Me chamo Guilherme Henrique Souza, tenho 22 anos, sou formado em jornalismo pela Unisul e sou assessor de comunicação. No dia a dia, escrevo matérias, roteiros e gravo vídeos. Fora do trabalho, sou um padrinho babão, gremista fanático, viciado em obras de terror, chop de vinho e acompanho One Piece como um verdadeiro "Chapéu de Palha".'})]})]})}export{D as F,G as H,b as L,C as a};

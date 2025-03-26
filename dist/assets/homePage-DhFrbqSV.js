import{R as m,d as a,j as n}from"./styled-components.browser.esm-BNWIvhS-.js";import{L as g}from"./chunk-K6CSEXPM-BrXHkFkr.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=m.createContext&&m.createContext(b),O=["attr","size","title"];function z(e,t){if(e==null)return{};var i=P(e,t),r,o;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)r=d[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function P(e,t){if(e==null)return{};var i={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;i[r]=e[r]}return i}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},c.apply(this,arguments)}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?f(Object(i),!0).forEach(function(r){F(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function F(e,t,i){return t=E(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function E(e){var t=S(e,"string");return typeof t=="symbol"?t:t+""}function S(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v(e){return e&&e.map((t,i)=>m.createElement(t.tag,l({key:i},t.attr),v(t.child)))}function j(e){return t=>m.createElement(_,c({attr:l({},e.attr)},t),v(e.child))}function _(e){var t=i=>{var{attr:r,size:o,title:d}=e,y=z(e,O),u=o||i.size||"1em",s;return i.className&&(s=i.className),e.className&&(s=(s?s+" ":"")+e.className),m.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,y,{className:s,style:l(l({color:e.color||i.color},i.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),d&&m.createElement("title",null,d),e.children)};return x!==void 0?m.createElement(x.Consumer,null,i=>t(i)):t(b)}function D(e){return j({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function C(e){return j({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}const M=a.div`
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
`,N=a.div`
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
`,A=a.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: center;
    padding: 1rem;
`,B=a.img`
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
`,h=a.h1`
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
`,I=a.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #FFFFFF;
    padding: 1rem 0;
`,w=a(g)`
    color: #333333;
    text-decoration: none;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`,k=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`,H=a.p`
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
`,L=a.div`
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
`,p=a(g)`
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
`,T=a.p`
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
`;function G(){return n.jsxs(M,{children:[" ",n.jsxs(N,{children:[" ",n.jsxs(A,{children:[" ",n.jsx(B,{src:"/assets/profileimg.jpg",alt:"Foto de perfil"}),n.jsxs(h,{style:{borderBottom:"1px solid #333333",paddingBottom:"1rem"},children:["Guilherme H. ",n.jsx("br",{}),"Souza"]})," ",n.jsx(h,{style:{marginBlockStart:"0"},children:"Jornalista"})]}),n.jsxs(I,{children:[" ",n.jsx(w,{to:"https://www.instagram.com/guilhermehsou/?igsh=MTNrM3I5dnVmZXY3bw%3D%3D&utm_source=qr#",target:"_blank",children:n.jsx(D,{})}),n.jsx(w,{to:"https://www.linkedin.com/in/guilherme-henrique-souza-02560b276/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",target:"_blank",children:n.jsx(C,{})})]})]}),n.jsxs(k,{children:[" ",n.jsx(h,{children:"Bem-vindos ao meu portfólio!"}),n.jsx(H,{children:"Esse sou eu!"}),n.jsxs(L,{children:[" ",n.jsx(p,{to:"/sobre-mim",children:"Sobre mim"}),n.jsx(p,{to:"/curriculo",children:"Currículo"}),n.jsx(p,{to:"/projetos",children:"Projetos"})]}),n.jsx(T,{children:'Me chamo Guilherme Henrique Souza, tenho 22 anos, sou formado em jornalismo pela Unisul e sou assessor de comunicação. No dia a dia, escrevo matérias, roteiros e gravo vídeos. Fora do trabalho, sou um padrinho babão, gremista fanático, viciado em obras de terror, chop de vinho e acompanho One Piece como um verdadeiro "Chapéu de Palha".'})]})]})}export{D as F,G as H,w as L,C as a};

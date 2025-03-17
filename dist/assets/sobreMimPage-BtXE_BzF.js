import{a as u,j as e}from"./index-D-4zH5Lu.js";import{d as a}from"./styled-components.browser.esm-DTIBfui1.js";import{P as p,a as m,T as g}from"./GlobalStyles-BNYBJHFA.js";const h=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;
`,f=a.h1`
    text-align: center;
`,x=a.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
`,c=a.p`
    text-align: justify;
    font-size: 1rem;
`,j=a.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;
    gap: 2rem;
`,v=a.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 1rem;
    gap: 1rem;
`,b=a.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`,P=a.p`
    font-size: 1.3rem;
`,S=a.img`
    width: 100%;
    height: 35rem;
`;function q(){const t=[{title:"O começo",descript:["Sempre fui uma pessoa introvertida com pessoas fora do meu ciclo social. Quando ingressei no meu primeiro emprego na Prefeitura de São José, no Centro de Atendimento ao Cidadão, tive que mudar isso."],image:"/assets/foto-1.png",altImage:"Foto minha no CAC"},{title:"Desenvolvendo minha comunicação",descript:["Com o tempo, fiz amizades e aprendi muitas coisas. Sempre fui de ajudar amigos a conseguir emprego, e, com isso, desenvolvi muitas habilidades de comunicação e persuasão antes mesmo de trabalhar com jornalismo na Prefeitura."],image:"/assets/foto-2.jpg",altImage:"Foto com meus amigos"},{title:"Desenvolvendo minhaa habilidades",descript:["Esse sou eu atualmente! Me chamo Guilherme Henrique Souza, tenho 22 anos e sou fã de muita coisa que nem dá pra listar tudo aqui: Grêmio, One Piece, filmes e séries de terror, chopp de vinho e etc. O que me ajudou muito na área foi o fato de eu ser bem ativo nas redes sociais e estar sempre atento às tendências. Assisto muito TikTok e Reels e adoro um meme! Hahahaha."],image:"",altImage:""},{title:"O eu atual",descript:["Quando entrei na Secretaria de Comunicação, fiquei mais próximo das pessoas da minha área e aprendi de tudo um pouco: assessoria, criação de cards e vídeos, apresentação de vídeos, criação de releases e etc. Com isso, precisei buscar fontes dentro e fora da Prefeitura, o que me fez me expor mais e me tornar mais comunicativo. Algo que colaborou bastante foi o fato de que muitas pessoas já me conheciam por conta da minha mãe, que é servidora efetiva."],image:"/assets/eu-atual.jpg",altImage:"Foto de como eu sou atualmente"}],[o,r]=u.useState(0),s=1,n=Math.ceil(t.length/s),d=t.slice(o*s,(o+1)*s);return e.jsxs(h,{children:[e.jsx(f,{children:"Sobre mim"}),e.jsx(x,{children:e.jsx(c,{children:'Me chamo Guilherme Henrique Souza, tenho 22 anos e sou assessor de comunicação. No dia a dia, escrevo matérias, roteiros e gravo vídeos. Fora do trabalho, sou gremista fanático, viciado em obras de horror e acompanho One Piece como um verdadeiro "Chapéu de Palha".'})}),d.map((i,l)=>e.jsxs(j,{children:[" ",e.jsxs(v,{children:[" ",e.jsx(P,{children:i.title}),e.jsx(c,{children:i.descript})]}),e.jsxs(b,{children:[" ",e.jsx(S,{src:i.image,alt:i.altImage})]})]},l)),e.jsxs(p,{style:{display:"flex",justifyContent:"center",marginTop:"20px"},children:[e.jsx(m,{onClick:()=>r(o-1),disabled:o===0,children:"Anterior"}),e.jsxs(g,{style:{margin:"0 10px"},children:["Fatos ",o+1," de ",n]}),e.jsx(m,{onClick:()=>r(o+1),disabled:o===n-1,children:"Próxima"})]})]})}export{q as S};

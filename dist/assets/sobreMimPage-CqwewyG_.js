import{d as a,j as e}from"./styled-components.browser.esm-BNWIvhS-.js";import"./GlobalStyles-BhsjClub.js";const h=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;

    @media (max-width: 430px) {
        margin: 7rem 2rem;
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        margin: 7rem 4rem;
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        margin: 7rem 6rem;
    }

    @media (min-width: 801px) and (max-width: 1250px) {
        margin: 7rem 3rem;
    }
`,t=a.h1`
    text-align: center;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: 1.1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 1.5rem;
    }
`,d=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        gap: 1rem;
    }
`,o=a.p`
    text-align: justify;
    font-size: 1rem;

    @media (max-width: 430px) {
        font-size: .5rem;
    }
    
    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`;a.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;

    @media (max-width: 430px) {
        flex-direction: column;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        flex-direction: column;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        flex-direction: column;
    }
`;a.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 1rem;
    gap: 1rem;

    @media (max-width: 430px) {
        width: 90%;
        gap: .3rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 90%;
        gap: .3rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 90%;
        gap: .3rem;
    }
`;a.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 5rem;

    @media (max-width: 430px) {
        width: 100%;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 100%;
    }
`;a.p`
    font-size: 1.3rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`;const r=a.img`
    width: 13rem;
    height: 13rem;
    transition: transform .5s;
    border: 2px solid #000;

    &:hover {
        transform: scale(1.5);
    }

    @media (max-width: 430px) {
        height: 20rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        height: 30rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        height: 40rem;
    }
`,p=a.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;function g(){const s=[{image:"/assets/fotos/eu-ana.jpg",altImage:"Foto minha com a Ana"},{image:"/assets/fotos/eu-maya.png",altImage:"Foto minha com a Maya"},{image:"/assets/fotos/eu-lucas.jpg",altImage:"Foto minha com o Lucas"},{image:"/assets/fotos/amigos.jpg",altImage:"Foto minha com meus amigos"},{image:"/assets/fotos/eu-isa.jpg",altImage:"Uma foto minha com a Isa"},{image:"/assets/fotos/eu-maya-praia.jpg",altImage:"Foto minha com a Maya na praia"},{image:"/assets/fotos/eu-maya-rg.jpg",altImage:"Foto minha com a Maya na roda gigante"},{image:"/assets/fotos/familia.jpg",altImage:"Foto minha com meus pais"}],n=[{sobreMim:"Fora do trabalho, sou um padrinho babão, torcedor fanático do melhor time do Sul (fica a seu critério imaginar qual seja hehehe). Gosto muito de tudo que envolve terror, como filmes e séries, mas também curto outros gêneros. Acompanho One Piece como um verdadeiro 'Chapéu de Palha' e minha série preferida é The Walking Dead. Gosto bastante de cerveja e uísque, mas não sou muito chegado às demais bebidas alcoólicas."}],x=[{curiosidade:"Um dia, minha namorada Ana e eu fizemos uma trend no TikTok: um animal que eu seria, um lugar que eu seria, uma flor que eu seria, um personagem que eu seria, a foto preferida dela, meu estilo, o jogo que eu seria, a cor que eu seria e a série que eu seria."}];return e.jsxs(h,{children:[e.jsx(t,{children:"Sobre mim"}),n.map((i,m)=>e.jsx(d,{children:e.jsx(o,{children:i.sobreMim})},m)),e.jsx(p,{children:s.map((i,m)=>e.jsx(r,{src:i.image,alt:i.altImage,title:i.altImage},m))}),e.jsx(t,{children:"Curiosidade"}),x.map((i,m)=>e.jsxs(d,{style:{alignItems:"center"},children:[e.jsx(r,{src:"/assets/fotos/quadro.jpg",alt:"Foto quadro curiosidades",title:"Foto quadro curiosidades"}),e.jsx(o,{children:i.curiosidade})]},m))]})}export{g as S};

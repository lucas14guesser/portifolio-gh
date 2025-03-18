import{d as o,a as u,j as e}from"./styled-components.browser.esm-BNWIvhS-.js";import{L as T}from"./chunk-K6CSEXPM-BrXHkFkr.js";import{P as x,a as r,T as f}from"./GlobalStyles-BxvFdcRN.js";const k=o.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;
`,M=o.h1`
    text-align: center;
`,I=o.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
`,t=o.p`
    text-align: justify;
    font-size: 1rem;
`,P=o.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;
`,v=o.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1rem;
    gap: 1rem;
`,b=o.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`,S=o.p`
    font-size: 1.3rem;
`,q=o.video`
    width: 100%;
    height: 35rem;
`,y=o(T)`
    text-decoration: underline;
    color: #333333;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;

    &:hover {
        color: #000000;
    }
`,V=o.img`
    width: 100%;
    height: 30rem;
`;function z(){const c=[{title:"Casa do Terror",descript:["Casa do Terror retorna no domingo (10) a São José para uma tarde de sustos e diversão"],materia:["Evento promete experiências imersivas e muitas surpresas no Museu Gilberto Gerlach"],linkMateria:"https://saojose.sc.gov.br/casa-do-terror-retorna-neste-domingo-10-a-sao-jose-para-uma-tarde-de-sustos-e-diversao/70819/",image:"/assets/materias/casa-terror.png",altimage:"Museu histórico SJ"},{title:"Emissão de IPTU",descript:["Centro de Atendimento ao Cidadão recebe em média 150 pessoas por dia"],materia:["Serviço conta com 25 funcionários para atender demandas como emissão de IPTU, atendimento empresarial, ITBI e abertura de processos"],linkMateria:"https://saojose.sc.gov.br/centro-de-atendimento-ao-cidadao-recebe-em-media-150-pessoas-por-dia-2/33893/",image:"/assets/materias/cac.png",altimage:"Imagem do CAC"},{title:"Vôlei de Praia",descript:["Atleta de Vôlei de Praia de São José participa há 24 anos do JASC"],materia:["Ceará coleciona 14 medalhas de ouro e cinco de prata nos Jogos Abertos de Santa Catarina"],linkMateria:"https://saojose.sc.gov.br/atleta-de-volei-de-praia-de-sao-jose-participa-ha-24-anos-do-jasc/30316/",image:"/assets/materias/volei-praia.png",altimage:"Imagem vôlei de praia"},{title:"São José já sonha com as Olimpíadas",descript:["Atleta destaque de São José já sonha com Olimpíadas 2024"],materia:["Medalhista de ouro recordista no lançamento de disco Wellinton Fernandes, 24 anos, revela história de superação na luta em manter-se como atleta"],linkMateria:"https://saojose.sc.gov.br/atleta-destaque-de-sao-jose-ja-sonha-com-olimpiadas-2024/31611/",image:"/assets/materias/atletismo.png",altimage:"Imagem de Wellinton Fernandes"},{title:"Time de Handebol",descript:["Time de Handebol de São José entra em quadra com reforços em 2023"],materia:["Técnicos da modalidade trabalham rumo à Liga Nacional e Campeonato Brasileiro"],linkMateria:"https://saojose.sc.gov.br/time-de-handebol-de-sao-jose-entra-em-quadra-com-reforcos-em-2023/35390/",image:"/assets/materias/time-handebol.png",altimage:"Imagem do cenário do time de handebol"},{title:"Vôlei de mãe para filho",descript:["Quando o vôlei é de mãe para filho"],materia:["Conheça a história da professora e atleta que pretende manter os treinos durante a gestação"],linkMateria:"https://saojose.sc.gov.br/quando-o-volei-e-de-mae-para-filho/39179/",image:"/assets/materias/volei-mae-filho.png",altimage:"Imagem de um casal jogadores de vòlei esperando um filho"},{title:"São José e Atlético Catarinense",descript:["São José confirma parceria no projeto do Atlético Catarinense"],materia:["Em visita ao prefeito Orvino, Romário pede apoio logístico para treinamentos da equipe"],linkMateria:"https://saojose.sc.gov.br/sao-jose-confirma-parceria-no-projeto-do-atletico-catarinense/30393/",image:"/assets/materias/atletico-cat.png",altimage:"Imagem da reunião do prefeito Orvino com Romário"}],m=[{title:"Titulo",descript:["Descrição"],materia:["Matéria"],video:"/assets/videos/cultura.mp4"}],[i,p]=u.useState(0),n=1,g=Math.ceil(c.length/n),A=c.slice(i*n,(i+1)*n),[s,h]=u.useState(0),d=1,j=Math.ceil(m.length/d),C=m.slice(s*d,(s+1)*d);return e.jsxs(k,{children:[e.jsx(M,{children:"Projetos"}),e.jsx(I,{children:e.jsx(t,{children:"Boas-vindas a minha página de projetos. Aqui poderão ser vistos todos os projetos que participei incluindo matérias que escrevi, entrevistas que fiz e vídeos que participei e ou editei."})}),e.jsx(t,{style:{fontSize:"1.2rem"},children:"Matérias"}),A.map((a,l)=>e.jsxs(P,{children:[" ",e.jsxs(v,{children:[" ",e.jsx(S,{children:a.title}),e.jsx(t,{children:a.descript}),e.jsx(t,{children:a.materia}),e.jsx(y,{to:a.linkMateria,target:"_blank",children:"Link da matéria"})]}),e.jsxs(b,{children:[" ",e.jsx(V,{src:a.image,alt:a.altimage})]})]},l)),e.jsxs(x,{children:[e.jsx(r,{onClick:()=>p(i-1),disabled:i===0,children:"Anterior"}),e.jsxs(f,{children:["Matéria ",i+1," de ",g]}),e.jsx(r,{onClick:()=>p(i+1),disabled:i===g-1,children:"Próxima"})]}),e.jsx(t,{style:{fontSize:"1.2rem"},children:"Vídeos"}),C.map((a,l)=>e.jsxs(P,{children:[" ",e.jsxs(v,{children:[" ",e.jsx(S,{children:a.title}),e.jsx(t,{children:a.descript}),e.jsx(t,{children:a.materia})]}),e.jsxs(b,{children:[" ",e.jsx(q,{controls:!0,children:e.jsx("source",{src:a.video})},a.video)]})]},l)),e.jsxs(x,{children:[e.jsx(r,{onClick:()=>h(s-1),disabled:s===0,children:"Anterior"}),e.jsxs(f,{children:["Vídeo ",s+1," de ",j]}),e.jsx(r,{onClick:()=>h(s+1),disabled:s===j-1,children:"Próxima"})]})]})}export{z as P};

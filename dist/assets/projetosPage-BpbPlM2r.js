import{a as p,j as e}from"./index-D-4zH5Lu.js";import{d as a}from"./styled-components.browser.esm-DTIBfui1.js";import{L as g}from"./chunk-K6CSEXPM-D56C1uFi.js";import{P as h,a as m,T as u}from"./GlobalStyles-BNYBJHFA.js";const j=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;
`,x=a.h1`
    text-align: center;
`,f=a.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
`,s=a.p`
    text-align: justify;
    font-size: 1rem;
`,v=a.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;
`,P=a.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1rem;
    gap: 1rem;
`,b=a.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`,T=a.p`
    font-size: 1.3rem;
`;a.video`
    width: 100%;
    height: 35rem;
`;const C=a(g)`
    text-decoration: underline;
    color: #333333;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
`,S=a.img`
    width: 100%;
    height: 30rem;
`;function q(){const r=[{title:"Casa do Terror",descript:["Casa do Terror retorna no domingo (10) a São José para uma tarde de sustos e diversão"],materia:["Evento promete experiências imersivas e muitas surpresas no Museu Gilberto Gerlach"],linkMateria:"https://saojose.sc.gov.br/casa-do-terror-retorna-neste-domingo-10-a-sao-jose-para-uma-tarde-de-sustos-e-diversao/70819/",image:"/assets/materias/casa-terror.png",altimage:"Museu histórico SJ"},{title:"Emissão de IPTU",descript:["Centro de Atendimento ao Cidadão recebe em média 150 pessoas por dia"],materia:["Serviço conta com 25 funcionários para atender demandas como emissão de IPTU, atendimento empresarial, ITBI e abertura de processos"],linkMateria:"https://saojose.sc.gov.br/centro-de-atendimento-ao-cidadao-recebe-em-media-150-pessoas-por-dia-2/33893/",image:"/assets/materias/cac.png",altimage:"Imagem do CAC"},{title:"Vôlei de Praia",descript:["Atleta de Vôlei de Praia de São José participa há 24 anos do JASC"],materia:["Ceará coleciona 14 medalhas de ouro e cinco de prata nos Jogos Abertos de Santa Catarina"],linkMateria:"https://saojose.sc.gov.br/atleta-de-volei-de-praia-de-sao-jose-participa-ha-24-anos-do-jasc/30316/",image:"/assets/materias/volei-praia.png",altimage:"Imagem vôlei de praia"},{title:"São José já sonha com as Olimpíadas",descript:["Atleta destaque de São José já sonha com Olimpíadas 2024"],materia:["Medalhista de ouro recordista no lançamento de disco Wellinton Fernandes, 24 anos, revela história de superação na luta em manter-se como atleta"],linkMateria:"https://saojose.sc.gov.br/atleta-destaque-de-sao-jose-ja-sonha-com-olimpiadas-2024/31611/",image:"/assets/materias/atletismo.png",altimage:"Imagem de Wellinton Fernandes"},{title:"Time de Handebol",descript:["Time de Handebol de São José entra em quadra com reforços em 2023"],materia:["Técnicos da modalidade trabalham rumo à Liga Nacional e Campeonato Brasileiro"],linkMateria:"https://saojose.sc.gov.br/time-de-handebol-de-sao-jose-entra-em-quadra-com-reforcos-em-2023/35390/",image:"/assets/materias/time-handebol.png",altimage:"Imagem do cenário do time de handebol"},{title:"Vôlei de mãe para filho",descript:["Quando o vôlei é de mãe para filho"],materia:["Conheça a história da professora e atleta que pretende manter os treinos durante a gestação"],linkMateria:"https://saojose.sc.gov.br/quando-o-volei-e-de-mae-para-filho/39179/",image:"/assets/materias/volei-mae-filho.png",altimage:"Imagem de um casal jogadores de vòlei esperando um filho"},{title:"São José e Atlético Catarinense",descript:["São José confirma parceria no projeto do Atlético Catarinense"],materia:["Em visita ao prefeito Orvino, Romário pede apoio logístico para treinamentos da equipe"],linkMateria:"https://saojose.sc.gov.br/sao-jose-confirma-parceria-no-projeto-do-atletico-catarinense/30393/",image:"/assets/materias/atletico-cat.png",altimage:"Imagem da reunião do prefeito Orvino com Romário"}],[o,n]=p.useState(0),t=1,d=Math.ceil(r.length/t),l=r.slice(o*t,(o+1)*t);return e.jsxs(j,{children:[e.jsx(x,{children:"Projetos"}),e.jsx(f,{children:e.jsx(s,{children:"Boas-vindas a minha página de projetos. Aqui poderão ser vistos todos os projetos que participei incluindo matérias que escrevi, entrevistas que fiz e vídeos que participei e ou editei."})}),l.map((i,c)=>e.jsxs(v,{children:[" ",e.jsxs(P,{children:[" ",e.jsx(T,{children:i.title}),e.jsx(s,{children:i.descript}),e.jsx(s,{children:i.materia}),e.jsx(C,{to:i.linkMateria,target:"_blank",children:"Link da matéria"})]}),e.jsxs(b,{children:[" ",e.jsx(S,{src:i.image,alt:i.altimage})]})]},c)),e.jsxs(h,{children:[e.jsx(m,{onClick:()=>n(o-1),disabled:o===0,children:"Anterior"}),e.jsxs(u,{children:["Matéria ",o+1," de ",d]}),e.jsx(m,{onClick:()=>n(o+1),disabled:o===d-1,children:"Próxima"})]})]})}export{q as P};

import React, { useState } from 'react'
import { ContainerSobreMimPage, ImgsSobreMim, SubcontainerImgs, SubcontainerTexts, SubcontainerTextsDescript, SubcontainerTextsImg, TextDefaultSobreMim, TitlePageSobreMim, TituloTextDescript } from '../styles/SobreMimPageStyles'
import { PagBtn, Paginacao, TxtPaginacao } from '../styles/GlobalStyles';

function SobreMimPage() {
  const fatos = [
    {
      title: "O começo",
      descript: [
        "Sempre fui uma pessoa introvertida com pessoas fora do meu ciclo social. Quando ingressei no meu primeiro emprego na Prefeitura de São José, no Centro de Atendimento ao Cidadão, tive que mudar isso."
      ],
      image: "/assets/foto-1.jpg",
      altImage: 'Foto minha no CAC'
    },
    {
      title: "Desenvolvendo minha comunicação",
      descript: [
        "Assim, aprendi muitas coisas ao longo do tempo. Valorizo a minha base, e tudo o que sei hoje sobre o que é trabalhar foi graças a Prefeitura, onde tive a oportunidade de conhecer profissionais incríveis. "
      ],
      image: "/assets/amigos.jpg",
      altImage: 'Uma foto com meus amigos'
    },
    {
      title: "Um ajudante",
      descript: [
        "Sempre ajudei amigos a conseguir emprego, desenvolvendo habilidades de comunicação e persuasão, antes mesmo de atuar com jornalismo na Prefeitura. Meu maior case sucesso? Indicar o videomaker que trabalhou na campanha do vice-prefeito de São José e segue atuando com ele, sou um grande empresário nas horas vagas kkkkkk (ironia)."
      ],
      image: "/assets/pagina-3.jpg",
      altImage: 'Foto com meu amigo videomaker'
    },
    {
      title: "Desenvolvendo minhas habilidades",
      descript: [
        "Quando entrei na Secretaria de Comunicação, me aproximei mais das pessoas da minha área e aprendi diversas funções, como assessoria, criação de cards e vídeos, apresentação de vídeos e criação de releases. Para isso, precisei buscar fontes dentro e fora da Prefeitura, o que me fez me expor mais e me tornar mais comunicativo. O fato de ser ativo nas redes sociais e estar sempre atento às tendências ajudou bastante, já que sou viciado em TikTok, Reels e memes! "
      ],
      image: "/assets/foto-3.jpg",
      altImage: 'Foto minha na faculdade em um trabalho de entrevistador'
    },
    {
      title: "Curiosidade",
      descript: [
        "Ah, eu sou tão cara de pau que até chamei o prefeito para o meu aniversário! Claro que fui formal no convite, mas o recebi como um amigo aqui em casa. Quem não chora, não mama, né? "
      ],
      image: "/assets/foto-prefeito-2.JPG",
      altImage: 'Foto de com o prefeito'
    },
    {
      title: "Convite",
      descript: [
        "Agora que você conheceu um pouco da minha história, convido você a visitar a página de projetos para conferir meu trabalho. Na aba inicial, já dá para saber um pouco sobre meus gostos, mas aqui vai mais um detalhe: minha série preferida é The Walking Dead e, recentemente, assisti à nova temporada de Invencível, que achei incrível, do mesmo criador, Robert Kirkman, um gênio."
      ],
      image: "/assets/pagina-6.jpg",
      altImage: 'Foto minha'
    },
    {
      title: "Inspiração",
      descript: [
        "Como diria o Luffy, ‘’Enquanto eu estiver vivo, as possibilidades são infinitas.’’ Eu sempre fui o tipo de cara que tinha medo de conquistar. Esperava que as coisas caíssem no meu colo, até que entrei no mercado de trabalho e, como diria o meu amigo, Seu Gilberto, me tornei outra pessoa. Independente de onde você esteja, nunca duvide da sua capacidade. Tente, mesmo com medo. O friozinho na barriga é bom para dar coragem. Você vai estar perdendo muitas oportunidades se não ao menos tentar, o não você já tem. Eu sei que o prefeito vir no meu aniversário pode não parecer grande coisa, mas que influência política eu tenho? Nenhuma. Ninguém de São José estaria no meu aniversário, era ano de votação, e eu já iria votar nele mesmo se ele não viesse. Eu era jornalista antes de saber que era, sempre fui persistente, determinado, e acreditando que as possibilidades, como disse o Luffy, são infinitas."
      ],
      image: "/assets/pagina-7.jfif",
      altImage: 'Imagem que descreve o que o Luffy retrata na frase'
    },
  ];

  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 1;
  const totalPaginas = Math.ceil(fatos.length / itensPorPagina);

  const fatosPaginadas = fatos.slice(
    paginaAtual * itensPorPagina,
    (paginaAtual + 1) * itensPorPagina
  );
  return (
    <ContainerSobreMimPage>
      <TitlePageSobreMim>Sobre mim</TitlePageSobreMim>

      <SubcontainerTexts>
        <TextDefaultSobreMim>
          Me chamo Guilherme Henrique Souza, tenho 22 anos, sou formado em jornalismo pela Unisul e sou assessor de comunicação. No dia a dia, escrevo matérias, roteiros e gravo vídeos. Fora do trabalho, sou um padrinho babão, gremista fanático, viciado em obras de terror, chopp de vinho e acompanho One Piece como um verdadeiro "Chapéu de Palha".
        </TextDefaultSobreMim>
      </SubcontainerTexts>

      {fatosPaginadas.map((fato, index) => (
        <SubcontainerTextsImg key={index}> {/* row */}
          <SubcontainerTextsDescript> {/* column text */}
            <TituloTextDescript>{fato.title}</TituloTextDescript>
            <TextDefaultSobreMim>{fato.descript}</TextDefaultSobreMim>
          </SubcontainerTextsDescript>

          <SubcontainerImgs> {/* img */}
            <ImgsSobreMim src={fato.image} alt={fato.altImage} />
          </SubcontainerImgs>
        </SubcontainerTextsImg>
      ))}

      <Paginacao>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 0}>
          Anterior
        </PagBtn>
        <TxtPaginacao>
          Fato {paginaAtual + 1} de {totalPaginas}
        </TxtPaginacao>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas - 1}>
          Próxima
        </PagBtn>
      </Paginacao>
    </ContainerSobreMimPage>
  )
}

export default SobreMimPage
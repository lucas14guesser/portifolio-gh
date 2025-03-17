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
      image: "/assets/foto-1.png",
      altImage: 'Foto minha no CAC'
    },
    {
      title: "Desenvolvendo minha comunicação",
      descript: [
        "Com o tempo, fiz amizades e aprendi muitas coisas. Sempre fui de ajudar amigos a conseguir emprego, e, com isso, desenvolvi muitas habilidades de comunicação e persuasão antes mesmo de trabalhar com jornalismo na Prefeitura."
      ],
      image: "/assets/foto-2.jpg",
      altImage: 'Foto com meus amigos'
    },
    {
      title: "Desenvolvendo minhaa habilidades",
      descript: [
        "Esse sou eu atualmente! Me chamo Guilherme Henrique Souza, tenho 22 anos e sou fã de muita coisa que nem dá pra listar tudo aqui: Grêmio, One Piece, filmes e séries de terror, chopp de vinho e etc. O que me ajudou muito na área foi o fato de eu ser bem ativo nas redes sociais e estar sempre atento às tendências. Assisto muito TikTok e Reels e adoro um meme! Hahahaha."
      ],
      image: "",
      altImage: ''
    },
    {
      title: "O eu atual",
      descript: [
        "Quando entrei na Secretaria de Comunicação, fiquei mais próximo das pessoas da minha área e aprendi de tudo um pouco: assessoria, criação de cards e vídeos, apresentação de vídeos, criação de releases e etc. Com isso, precisei buscar fontes dentro e fora da Prefeitura, o que me fez me expor mais e me tornar mais comunicativo. Algo que colaborou bastante foi o fato de que muitas pessoas já me conheciam por conta da minha mãe, que é servidora efetiva."
      ],
      image: "/assets/eu-atual.jpg",
      altImage: 'Foto de como eu sou atualmente'
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
          Me chamo Guilherme Henrique Souza, tenho 22 anos e sou assessor de comunicação. No dia a dia, escrevo matérias, roteiros e gravo vídeos. Fora do trabalho, sou gremista fanático, viciado em obras de horror e acompanho One Piece como um verdadeiro "Chapéu de Palha".
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

      <Paginacao style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 0}>
          Anterior
        </PagBtn>
        <TxtPaginacao style={{ margin: '0 10px' }}>
          Fatos {paginaAtual + 1} de {totalPaginas}
        </TxtPaginacao>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas - 1}>
          Próxima
        </PagBtn>
      </Paginacao>
    </ContainerSobreMimPage>
  )
}

export default SobreMimPage
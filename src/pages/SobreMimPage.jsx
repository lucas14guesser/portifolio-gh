import React, { useState } from 'react'
import { AlbumFotos, ContainerSobreMimPage, ImgsSobreMim, SubcontainerImgs, SubcontainerTexts, SubcontainerTextsDescript, SubcontainerTextsImg, TextDefaultSobreMim, TitlePageSobreMim, TituloTextDescript } from '../styles/SobreMimPageStyles'
import { PagBtn, Paginacao, TxtPaginacao } from '../styles/GlobalStyles';

function SobreMimPage() {
  const fatos = [
    {
      image: "/assets/fotos/eu-ana.jpg",
      altImage: 'Foto minha com a Ana'
    },
    {
      image: "/assets/fotos/eu-maya.png",
      altImage: 'Foto minha com a Maya'
    },
    {
      image: "/assets/fotos/eu-lucas.jpg",
      altImage: 'Foto minha com o Lucas'
    },
    {
      image: "/assets/fotos/amigos.jpg",
      altImage: 'Foto minha com meus amigos'
    },
    {
      image: "/assets/fotos/eu-isa.jpg",
      altImage: 'Uma foto minha com a Isa'
    },
    {
      image: "/assets/fotos/eu-maya-praia.jpg",
      altImage: 'Foto minha com a Maya na praia'
    },
    {
      image: "/assets/fotos/eu-maya-rg.jpg",
      altImage: 'Foto minha com a Maya na roda gigante'
    },
    {
      image: "/assets/fotos/familia.jpg",
      altImage: 'Foto minha com meus pais'
    },

  ];

  const SobreMim = [
    {
      sobreMim: "Fora do trabalho, sou um padrinho babão, torcedor fanático do melhor time do Sul (fica a seu critério imaginar qual seja hehehe). Gosto muito de tudo que envolve terror, como filmes e séries, mas também curto outros gêneros. Acompanho One Piece como um verdadeiro 'Chapéu de Palha' e minha série preferida é The Walking Dead. Gosto bastante de cerveja e uísque, mas não sou muito chegado às demais bebidas alcoólicas."
    },
  ]

  const curiosidade = [
    {
      curiosidade: "Um dia, minha namorada Ana e eu fizemos uma trend no TikTok: um animal que eu seria, um lugar que eu seria, uma flor que eu seria, um personagem que eu seria, a foto preferida dela, meu estilo, o jogo que eu seria, a cor que eu seria e a série que eu seria.",
    },
  ]

  return (
    <ContainerSobreMimPage>
      <TitlePageSobreMim>Sobre mim</TitlePageSobreMim>

      {SobreMim.map((sobre, index) => (
        <SubcontainerTexts key={index}>
          <TextDefaultSobreMim>{sobre.sobreMim}</TextDefaultSobreMim>
        </SubcontainerTexts>
      ))}

      <AlbumFotos>
        {fatos.map((fato, index) => (
          <ImgsSobreMim key={index} src={fato.image} alt={fato.altImage} title={fato.altImage} />
        ))}
      </AlbumFotos>

      <TitlePageSobreMim>Curiosidade</TitlePageSobreMim>

      {curiosidade.map((curi, index) => (
        <SubcontainerTexts key={index} style={{alignItems: 'center'}}>
          <ImgsSobreMim src="/assets/fotos/quadro.jpg" alt="Foto quadro curiosidades" title="Foto quadro curiosidades" />
          <TextDefaultSobreMim>{curi.curiosidade}</TextDefaultSobreMim>
        </SubcontainerTexts>
      ))}
    </ContainerSobreMimPage>
  )
}

export default SobreMimPage
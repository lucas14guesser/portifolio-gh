import React, { useState } from 'react'
import { ContainerCurriculoPage, LinkCV, SubcontainerDataCurriculo, SubcontainerDataText, SUbcontainerDescript, SubcontainerTitleBtnCV, TextDefaultCurriculo, TextTitleDate, TitleCurriculo, TitlePageCurriculo } from '../styles/CurriculoPageStyles'
import { PagBtn, Paginacao, TxtPaginacao } from '../styles/GlobalStyles';

function CurriculoPage() {
  const experiencias = [
    {
      data: "MARÇO DE 2025 - ATUAL",
      cargo: "Assessoria de imprensa",
      empresa: "Koi Comunicação",
      endereco: "R. Nirberto Haase, 100 - Sala 301 - Santa Mônica, Florianópolis - SC, 88035-215",
      descricao: [
        "Produção de releases, acompanhamento de imprensa e monitoramento de mídia.",
        "Divulgação e clipagem para empresas como Juistreet, ZAH e Natura.",
        "Planejamento estratégico e produção de conteúdo para redes sociais."
      ]
    },
    {
      data: "JANEIRO DE 2025 - MARÇO DE 2025",
      cargo: "Assessoria de imprensa",
      empresa: "Secretaria Integrada de Comunicação Social - Prefeitura Municipal de São José",
      endereco: "363, Av. Acioni Souza Filho, 403 - Centro, São José - SC, 88103-790",
      descricao: [
        "Comunicação institucional.",
        "Assessoria de imprensa.",
        "Captação de vídeos."
      ]
    },
    {
      data: "JULHO DE 2024 - JANEIRO DE 2025",
      cargo: "Assessoria de imprensa",
      empresa: "Secretaria de Cultura e Turismo - Prefeitura Municipal de São José",
      endereco: "363, Av. Acioni Souza Filho, 403 - Centro, São José - SC, 88103-790",
      descricao: [
        "Atualizações de site institucional do município.",
        "Pesquisas históricas.",
        "Fotografia de eventos."
      ]
    },
    {
      data: "MARÇO DE 2024 - JULHO DE 2024",
      cargo: "Assessoria de imprensa",
      empresa: "Secretaria de Esportes e Lazer - Prefeitura Municipal de São José",
      endereco: "363, Av. Acioni Souza Filho, 403 - Centro, São José - SC, 88103-790",
      descricao: [
        "Criação de conteúdo para redes sociais.",
        "Produção de matérias para site institucional.",
        "Direcionamento de professores e atletas."
      ]
    },
    {
      data: "OUTUBRO DE 2022 - MARÇO DE 2024",
      cargo: "Assessoria de imprensa",
      empresa: "Secretaria Integrada de Comunicação Social - Prefeitura Municipal de São José",
      endereco: "363, Av. Acioni Souza Filho, 403 - Centro, São José - SC, 88103-790",
      descricao: [
        "Criação de conteúdo para redes sociais.",
        "Produção de matérias para site institucional.",
        "Captação de imagens e vídeos."
      ]
    },
    {
      data: "MARÇO DE 2021 - OUTUBRO DE 2022",
      cargo: "Estagiário",
      empresa: "Centro de Atendimento ao Cidadão - Prefeitura Municipal de São José",
      endereco: "363, Av. Acioni Souza Filho, 403 - Centro, São José - SC, 88103-790",
      descricao: [
        "Atendimento ao público.",
        "Gestão de processos.",
        "Sistemas administrativos."
      ]
    }
  ];

  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 1;
  const totalPaginas = Math.ceil(experiencias.length / itensPorPagina);

  const experienciasPaginadas = experiencias.slice(
    paginaAtual * itensPorPagina,
    (paginaAtual + 1) * itensPorPagina
  );
  return (
    <ContainerCurriculoPage> {/* div column */}
      <TitlePageCurriculo>Currículo</TitlePageCurriculo>
      <SubcontainerTitleBtnCV>
        <TitleCurriculo>Experiência</TitleCurriculo>
        <LinkCV href='/assets/curriculogh.pdf' download>Baixar CV</LinkCV>
      </SubcontainerTitleBtnCV>

      {experienciasPaginadas.map((exp, index) => (
        <SubcontainerDataCurriculo key={index}>
          <SubcontainerDataText>
            <TextTitleDate>{exp.data}</TextTitleDate>
            <TextDefaultCurriculo>{exp.cargo}</TextDefaultCurriculo>
            <TextDefaultCurriculo>{exp.empresa}</TextDefaultCurriculo>
            <TextDefaultCurriculo>{exp.endereco}</TextDefaultCurriculo>
          </SubcontainerDataText>
          <SUbcontainerDescript>
            {exp.descricao.map((desc, i) => (
              <TextDefaultCurriculo key={i}>{desc}</TextDefaultCurriculo>
            ))}
          </SUbcontainerDescript>
        </SubcontainerDataCurriculo>
      ))}

      <Paginacao>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 0}>
          Anterior
        </PagBtn>
        <TxtPaginacao>
          Experiência {paginaAtual + 1} de {totalPaginas}
        </TxtPaginacao>
        <PagBtn onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas - 1}>
          Próxima
        </PagBtn>
      </Paginacao>


      <div>
        <TitleCurriculo>Formação</TitleCurriculo> {/* title */}
      </div>

      <SubcontainerDataCurriculo> {/* div row */}
        <SubcontainerDataText> {/* div column */}
          <TextTitleDate>MARÇO DE 2021 - DEZEMBRO DE 2024</TextTitleDate>{/* title */}
          <TextDefaultCurriculo>UNIVERSIDADE DO SUL DE SANTA CATARINA - UNISUL</TextDefaultCurriculo>
          <TextDefaultCurriculo>Av. Pedra Branca, 25 - Cidade Universitária, Palhoça - SC, 88137-270</TextDefaultCurriculo>
        </SubcontainerDataText>

        <SUbcontainerDescript> {/* div column */}
          <TextDefaultCurriculo>Bacharelado em Jornalismo</TextDefaultCurriculo> {/* descript */}
        </SUbcontainerDescript>

      </SubcontainerDataCurriculo>

      <SubcontainerDataCurriculo> {/* div row */}
        <SubcontainerDataText style={{width: '100%'}}> {/* div column */}
          <TextTitleDate>COMPETÊNCIAS</TextTitleDate>{/* title */}
          <TextDefaultCurriculo>
            Profissional proativo e versátil, com experiência em comunicação, jornalismo e mídias sociais. Habilidades em escrita, edição de foto e vídeo, atendimento ao cliente e pesquisa de tendências. Busco oportunidades em ambientes colaborativos para contribuir com criatividade e eficiência.
          </TextDefaultCurriculo>

          <TextTitleDate style={{marginTop:'2rem'}}>INFORMAÇÕES COMPLEMENTARES</TextTitleDate>
          <TextDefaultCurriculo>Carteira B</TextDefaultCurriculo>
          <TextDefaultCurriculo>Inglês Intermediário</TextDefaultCurriculo>
        </SubcontainerDataText>

      </SubcontainerDataCurriculo>


    </ContainerCurriculoPage>
  )
}

export default CurriculoPage
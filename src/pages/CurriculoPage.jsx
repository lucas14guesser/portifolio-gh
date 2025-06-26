import React, { useState } from 'react'
import { ContainerCurriculoPage, LinkCV, SubcontainerDataCurriculo, SubcontainerDataText, SUbcontainerDescript, SubcontainerTitleBtnCV, TextDefaultCurriculo, TextTitleDate, TitleCurriculo, TitlePageCurriculo } from '../styles/CurriculoPageStyles'
import { PagBtn, Paginacao, TxtPaginacao } from '../styles/GlobalStyles';

function CurriculoPage() {
  const experiencias = [
    {
      data: "MARÇO DE 2025 - ATUAL",
      cargo: "Assessor de Imprensa (Pessoa Jurídica)",
      empresa: "Koi Comunicação",
      descricao: [
        "– Produção de releases e acompanhamento de imprensa;",
        "– Divulgação e clipagem para empresas como Juistreet e Greenvalley;",
        "– Assistência no planejamento estratégico e produção de conteúdo. "
      ]
    },
    {
      data: "MARÇO DE 2021 - MARÇO DE 2025 ",
      cargo: "Estagiário e Repórter ",
      empresa: "Prefeitura Municipal de São José",
      descricao: [
        "SECRETARIA INTEGRADA DE COMUNICAÇÃO - REPÓRTER",
        "– Atuação especialmente nas Secretarias de Esportes e Cultura; ",
        "– Criação de conteúdo para redes sociais; ",
        "– Produção de matérias, vídeos e cobertura fotográfica de eventos; Comunicação institucional;",
        "– Atualização de portais públicos e realização de pesquisas históricas;",
        "– Apoio a professores e atletas em ações esportivas.",
        "CENTRO DE ATENDIMENTO AO CIDADÃO – ESTAGIÁRIO",
        "– Abertura e consulta de processos gerais e empresariais;",
        "– Tramitação de processos entre setores e geração de boletos;",
        "– Atendimento interno entre os funcionários;",
        "– Utilização dos sistemas Betha Sistemas, Betha Tributário, Fly Protocolo, Gov TP, Jr Atend e IPM."
      ]
    },
  ];

  const formacoes = [
    {
      data: "MARÇO DE 2021 - DEZEMBRO DE 2024",
      empresa: "UNIVERSIDADE DO SUL DE SANTA CATARINA - UNISUL",
      descricao: "Bacharelado em Jornalismo - Completo"
    },
    {
      data: "ABRIL DE 2025 - ABRIL DE 2026",
      empresa: "UNIVERSIDADE DO SUL DE SANTA CATARINA - UNISUL",
      descricao: "Pós-Graduação em Jornalismo Esportivo e Multimídias - Andamento"
    },
  ]

  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 1;
  const totalPaginas = Math.ceil(experiencias.length / itensPorPagina);

  const experienciasPaginadas = experiencias.slice(
    paginaAtual * itensPorPagina,
    (paginaAtual + 1) * itensPorPagina
  );

  const [paginaAtualF, setPaginaAtualF] = useState(0);
  const itensPorPaginaF = 1;
  const totalPaginasF = Math.ceil(formacoes.length / itensPorPaginaF);

  const formacoesPaginadas = formacoes.slice(
    paginaAtualF * itensPorPaginaF,
    (paginaAtualF + 1) * itensPorPaginaF
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

      {formacoesPaginadas.map((formacao, index) => (
        <SubcontainerDataCurriculo key={index}> {/* div row */}
          <SubcontainerDataText> {/* div column */}
            <TextTitleDate>{formacao.data}</TextTitleDate>{/* title */}
            <TextDefaultCurriculo>{formacao.empresa}</TextDefaultCurriculo>
          </SubcontainerDataText>

          <SUbcontainerDescript> {/* div column */}
            <TextDefaultCurriculo>{formacao.descricao}</TextDefaultCurriculo> {/* descript */}
          </SUbcontainerDescript>
        </SubcontainerDataCurriculo>
      ))}

      <Paginacao>
        <PagBtn onClick={() => setPaginaAtualF(paginaAtualF - 1)} disabled={paginaAtualF === 0}>
          Anterior
        </PagBtn>
        <TxtPaginacao>
          Formação {paginaAtualF + 1} de {totalPaginasF}
        </TxtPaginacao>
        <PagBtn onClick={() => setPaginaAtualF(paginaAtualF + 1)} disabled={paginaAtualF === totalPaginasF - 1}>
          Próxima
        </PagBtn>
      </Paginacao>

    </ContainerCurriculoPage>
  )
}

export default CurriculoPage
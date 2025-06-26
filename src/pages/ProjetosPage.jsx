import React, { useState } from 'react'
import { ContainerProjetosPage, ImgMini, ImgsProjetos, LinkDownloadPdf, LinkMaterias, SubcontainerImgs, SubcontainerImgsProjetos, SubcontainerTextsDescriptProjetos, SubcontainerTextsImgProjetos, SubcontainerTextsProjetos, TextDefaultProjetos, TitlePageProjetos, TituloTextDescriptProjetos, VideoProjetos } from '../styles/ProjetosPage'
import { PagBtn, Paginacao, TxtPaginacao } from '../styles/GlobalStyles';
import { IoIosArrowRoundForward, IoIosArrowRoundDown } from "react-icons/io";
import { TxtDefault } from '../styles/HomePageStyles';

function ProjetosPage() {
  const materias = [
    {
      title: "Casa do Terror",
      descript: [
        "Casa do Terror retorna no domingo (10) a São José para uma tarde de sustos e diversão"
      ],
      materia: [
        "Evento promete experiências imersivas e muitas surpresas no Museu Gilberto Gerlach"
      ],
      linkMateria: "https://saojose.sc.gov.br/casa-do-terror-retorna-neste-domingo-10-a-sao-jose-para-uma-tarde-de-sustos-e-diversao/70819/",
      image: "/assets/materias/casa-terror.png",
      altimage: 'Museu histórico SJ'
    },
    {
      title: "Emissão de IPTU",
      descript: [
        "Centro de Atendimento ao Cidadão recebe em média 150 pessoas por dia"
      ],
      materia: [
        "Serviço conta com 25 funcionários para atender demandas como emissão de IPTU, atendimento empresarial, ITBI e abertura de processos"
      ],
      linkMateria: "https://saojose.sc.gov.br/centro-de-atendimento-ao-cidadao-recebe-em-media-150-pessoas-por-dia-2/33893/",
      image: "/assets/materias/cac.png",
      altimage: 'Imagem do CAC'
    },
    {
      title: "Vôlei de Praia",
      descript: [
        "Atleta de Vôlei de Praia de São José participa há 24 anos do JASC"
      ],
      materia: [
        "Ceará coleciona 14 medalhas de ouro e cinco de prata nos Jogos Abertos de Santa Catarina"
      ],
      linkMateria: "https://saojose.sc.gov.br/atleta-de-volei-de-praia-de-sao-jose-participa-ha-24-anos-do-jasc/30316/",
      image: "/assets/materias/volei-praia.png",
      altimage: 'Imagem vôlei de praia'
    },
    {
      title: "São José já sonha com as Olimpíadas",
      descript: [
        "Atleta destaque de São José já sonha com Olimpíadas 2024"
      ],
      materia: [
        "Medalhista de ouro recordista no lançamento de disco Wellinton Fernandes, 24 anos, revela história de superação na luta em manter-se como atleta"
      ],
      linkMateria: "https://saojose.sc.gov.br/atleta-destaque-de-sao-jose-ja-sonha-com-olimpiadas-2024/31611/",
      image: "/assets/materias/atletismo.png",
      altimage: 'Imagem de Wellinton Fernandes'
    },
    {
      title: "Time de Handebol",
      descript: [
        "Time de Handebol de São José entra em quadra com reforços em 2023"
      ],
      materia: [
        "Técnicos da modalidade trabalham rumo à Liga Nacional e Campeonato Brasileiro"
      ],
      linkMateria: "https://saojose.sc.gov.br/time-de-handebol-de-sao-jose-entra-em-quadra-com-reforcos-em-2023/35390/",
      image: "/assets/materias/time-handebol.png",
      altimage: 'Imagem do cenário do time de handebol'
    },
    {
      title: "Vôlei de mãe para filho",
      descript: [
        "Quando o vôlei é de mãe para filho"
      ],
      materia: [
        "Conheça a história da professora e atleta que pretende manter os treinos durante a gestação"
      ],
      linkMateria: "https://saojose.sc.gov.br/quando-o-volei-e-de-mae-para-filho/39179/",
      image: "/assets/materias/volei-mae-filho.png",
      altimage: 'Imagem de um casal jogadores de vòlei esperando um filho'
    },
    {
      title: "São José e Atlético Catarinense",
      descript: [
        "São José confirma parceria no projeto do Atlético Catarinense"
      ],
      materia: [
        "Em visita ao prefeito Orvino, Romário pede apoio logístico para treinamentos da equipe"
      ],
      linkMateria: "https://saojose.sc.gov.br/sao-jose-confirma-parceria-no-projeto-do-atletico-catarinense/30393/",
      image: "/assets/materias/atletico-cat.png",
      altimage: 'Imagem da reunião do prefeito Orvino com Romário'
    },
  ];

  const videos = [
    {
      title: "CAC/RECEITA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "PRORROGADO O PRAZO PARA TER DESCONTO NO IPTU!\n\n" +
        "🙋‍♂️ Como segunda-feira é feriado bancário, o contribuinte josefense até o dia 14 de fevereiro para garantir o desconto de 15%!\n\n" +
        "Basta acessar o site da Prefeitura, informar o CPF, CNPJ ou a inscrição do imóvel. A guia também pode ser solicitada por WhatsApp, por meio do telefone (48) 98814-1815 ou pelo App http://Atende.Net .\n\n" +
        "Confira as dicas no vídeo, 📲 e acesse o link, que está na bio!\n\n" +
        "#CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-3.mp4"
    },
    {
      title: "CATI",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Agora eles são tech! 📲👵👴\n\n" +
        "São José tem 400 vagas para o projeto de inclusão digital da terceira idade, uma oportunidade para quem quer aprender a usar a tecnologia.\n\n" +
        "Inscrições: de 17 a 21 de fevereiro\n" +
        "Horário: das 9h às 12h e das 14h às 17h\n" +
        "Local: Sala de Tecnologia do Cati\n\n" +
        "As vagas são para moradores de São José com 60 anos ou mais. Para garantir a inscrição, é necessário levar RG, CPF e comprovante de residência – o preenchimento das vagas será por ordem de chegada.\n\n" +
        "O projeto, uma parceria da Fundej com o Centro Universitário Estácio de Sá, ensina de tudo um pouco: desde pesquisas na internet até redes sociais e muito mais! ✨"
      ],
      video: "/assets/videos/VÍDEO-4.mp4"
    },
    {
      title: "SEGURANÇA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Prisões em flagrante e eficiência nas investigações. 🙋‍♂️🚔 Veja como a Prefeitura organiza o trabalho integrado das forças de segurança, @policiacivilsantacatarina, @pmscoficial e @gmsj.sc, com o apoio de mais de 300 câmeras de monitoramento 24h por dia! 💪\n\n" +
        "#CidadeDasOportunidades #Segurança #SaoJose 🚨 #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-5.mp4"
    },
    {
      title: "MEME MESSI",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "⚽ O novo destino do ídolo dos gramados, Lionel Messi, tem movimentado as redes sociais!\n\n" +
        "Tem josefense já sonhando alto, e jurando que viu Messi dando uns roles por São José... 🤩😉Será?\n\n" +
        "#CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-6.mp4"
    },
    {
      title: "MEME RODRIGO FARO",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Vai dar namoro! 💏\n\n" +
        "Um pouquinho de humor para encerrar o domingo em ritmo de Dia dos Namorados!\n\n" +
        "😉 Comece a semana dizendo 'eu te amo!' 👫👭👬\n\n" +
        "#CidadeDasOportunidades #DiaDosNamorados #Eu❤️SaoJose"
      ],
      video: "/assets/videos/VÍDEO-7.mp4"
    },
    {
      title: "MEME TREM BALA",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Não fique desprotegido! 👩‍⚕️💉 A vacina da gripe está disponível em todas as Unidades de Saúde, para todos os moradores de São José a partir dos 6 meses de idade!\n\n" +
        "É só até o fim deste mês! 🙋‍♂️ Não perca o prazo.\n\n" +
        "#CidadeDasOportunidades #SaoJose 🌡️ #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-8.mp4"
    },
    {
      title: "MEME ENEM",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "ENEM: Corre que ainda dá tempo de entrar na Universidade! 🏃‍♂️🏃‍♀️\n\n" +
        "😉 Mas na próxima, evite deixar para a última hora!\n\n" +
        "##CidadeDasOportunidades #Enem #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-9.mp4"
    },
    {
      title: "MEME THE OFFICE",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Sábado amanheceu 'de gala!' ☀️Perfeito para curtir tudo o que a cidade oferece! Bora!?🏃‍♀️🏃\n\n" +
        "🙋‍♂️ Bom dia, São José!\n\n" +
        "#CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-10.mp4"
    },
    {
      title: "MEME NICOLAS CAGE",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Bem isso!😅☃️\n\n" +
        "#SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-11.mp4"
    },
    {
      title: "MEME JAMES SALADA DE FRUTAS",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "😃🏍️ Nem todo mundo tem a habilidade do James na motocicleta! 🙋‍♂️ Mas todos têm oportunidades!\n\n" +
        "A FEIRA DO EMPREENDEDOR, que já é sucesso em Barreiros e em Forquilhinha, a partir de setembro acontece também no Kobrasol! Empreendedores maiores de 18 anos e que morem em São José já podem fazer a inscrição online, ⏳ até 11 de agosto. 📲 Link na bio!\n\n" +
        "Participe!\n\n" +
        "#CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-12.mp4"
    },
    {
      title: "MEME MIRANHA ANDREW",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "🙋‍♂️ Neste sábado, 9, mais uma oportunidade para prestigiar nossos valorosos empreendedores 😀 e fazer ótimos negócios!\n\n" +
        "Em edições simultâneas, e com produtos bem variados, a FEIRA DO EMPREENDEDOR vai movimentar duas regiões da cidade a partir das 10h:\n\n" +
        "📍 BARREIROS: Praça dos Sagrados Corações\n" +
        "📍 FORQUILHINHA: Praça da Paróquia São Fco de Assis\n\n" +
        "Esperamos você!\n\n" +
        "#CidadeDasOportunidades #SaoJose #FeiraDoEmpreendedor #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-13.mp4"
    },
    {
      title: "MEME MIRANHA TOBEY",
      descript: [
        "ROTEIRO PARA PREFEITURA"
      ],
      materia: [
        "Já tô no clima! 😀🌻 Vamos celebrar juntos o mês da primavera, com boa gastronomia, música, shows e mais de 200 expositores, num domingo em família!\n\n" +
        "Toda a cultura e a tradição de São José. 👫 Esperamos você, no Centro Histórico!\n\n" +
        "#CidadeDasOportunidades #FeiraDaFreguesia #SaoJose"
      ],
      video: "/assets/videos/VÍDEO-14.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "😃 Mais uma dica de passeio imperdível em São José! 🙋‍♂️🎭 Um espaço que está no centro da vida cultural da cidade e da região. Um dos teatros mais antigos do país!\n\n" +
        "#CidadeDasOportunidades #Eu❤️SaoJose #TheatroAdolphoMello #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-15.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "💒🙋‍♂️ Hoje a Prefeitura leva você pra conhecer um espaço que é patrimônio histórico de São José e tem tudo a ver com esse período de Natal!\n\n" +
        "Uma história que se confunde com a história da própria cidade!\n\n" +
        "#CidadeDasOportunidades #ConhecerSaoJose #Eu❤️SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-16.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Últimos dias do Natal Iluminado em São José! 🎄✨\n\n" +
        "A Casa do Papai Noel vai até 29/12, com entrada gratuita! O bom velhinho chega a partir das 19h30 (24 e 25/12 a casa estará fechada). 🎅🏻\n\n" +
        "A programação completa vai até o dia 30/12 (confira no nosso feed) com música ao vivo, neve para as crianças e muitas delícias na nossa vila gastronômica! 🎶❄️🍿\n\n" +
        "Visite as feirinhas de artesanato e encontre o presente perfeito! 🎁\n\n" +
        "Não fique de fora dessa! 🫵🏻"
      ],
      video: "/assets/videos/VÍDEO-17.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Sextou, 😀🕺 e a previsão é de sol e calor nestes últimos dias da primavera. 🙋‍♂️ A partir de hoje, esperando o verão, a Prefeitura vai levar você a alguns passeios imperdíveis pela cidade!\n\n" +
        "#PontaDeBaixo #CidadeDasOportunidades #Eu❤️SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-18.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Só em São José! 🍶😍\n\n" +
        "Confira no vídeo o projeto que está completando 31 anos, ajudando a transformar nossa cidade em referência cultural!\n\n" +
        "Tem programação especial para comemorar! 🎂👏👏\n\n" +
        "🙋‍♂️ #CidadeDasOportunidades #EscolaDeOleiros #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-19.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "CAPTAÇÃO DE IMAGENS/COBERTURA DE EVENTOS"
      ],
      materia: [
        "A magia do Natal chegou com tudo na cidade! A Caravana da Coca-Cola trouxe alegria e brilho para as ruas. Se você perdeu, não se preocupe: a Casa do Papai Noel no Centro Histórico abre suas portas neste sábado, às 19h, com uma decoração encantadora e um espetáculo de luzes! 🎄"
      ],
      video: "/assets/videos/VÍDEO-20.mp4"
    },
    {
      title: "CULTURA",
      descript: [
        "CAPTAÇÃO DE IMAGENS/COBERTURA DE EVENTOS"
      ],
      materia: [
        "Papai Noel chegou a São José! 😍\n\n" +
        "Confira como foi a abertura do Natal Iluminado no Centro Histórico! A Casa do Papai Noel estará de portas abertas até 30 de dezembro, de terça a sexta-feira das 16h às 22h, e aos finais de semana das 16h às 22h30.\n\n" +
        "Tempo de celebrar! ❤️"
      ],
      video: "/assets/videos/VÍDEO-21.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "BELA VISTA, MUITO OBRIGADO! 🙌\n\n" +
        "Dessa vez não veio o título, mas nossa torcida brilhou e o time lutou com garra. Saímos Vice-Campeões, um feito inédito! 🥈 Estamos mais unidos e prontos para novas conquistas. 💪\n\n" +
        "Parabéns às Ligas da Grande Florianópolis: São José, Florianópolis, Palhoça, Santo Amaro da Imperatriz. 👏\n\n" +
        "Bela Vista e Náutico, já classificados para o Campeonato Estadual Amador - TAÇA 100 ANOS da Federação Catarinense de Futebol. 🏆\n\n" +
        "Bela Vista, orgulho de São José no futebol amador. 🟡⚫\n\n" +
        "Saiba mais sobre os times em: tanofilo.com.br 📲\n\n" +
        "#TimeSãoJosé #CidadeDasOportunidades #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-22.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Não perde essa! 🎁🩵\n\n" +
        "Pensando especialmente em vocês, a Federação Catarinense de Vôlei nos deu a chance de presentear os 20 primeiros a se inscreverem no link que vai ser postado no nosso storie AMANHÃ, com ingressos para ver a final masculina da Copa Brasil de Vôlei!\n" +
        "🏐🩵🎉"
      ],
      video: "/assets/videos/VÍDEO-23.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🥋 Aulas de Judô em São José!\n" +
        "Quer se tornar um judoca? Venha participar das nossas aulas de judô! Dúvidas? Fale com o professor Fabio. Confira a grade de horários no nosso linktree na bio.\n\n" +
        "📍 Campinas - Arena Multiuso\n" +
        "Terça e Quinta: 10:00 - 11:00 / 17:30 - 18:30 (5 a 9 anos)\n" +
        "15:00 - 17:00 / 18:30 - 19:30 (13 a 17 anos)\n" +
        "Outros polos disponíveis!\n\n" +
        "#TimeSãoJosé #CidadeDasOportunidades #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-24.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🏃‍♂️💪 Conheça Eduardo Zluhan (Montanha) nosso Paratleta de Atletismo de São José! Ele vai disputar seu terceiro Parajasc pela UCA. Já foi prata e ouro nos 200m e 400m. Vamos juntos torcer pelos nossos paratletas! 🥇🥈\n\n" +
        "#TimeSãoJosé #CidadeDasOportunidades #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-25.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "Para participar basta chegar, é gratuito. ✨\n\n" +
        "A iniciativa é da loja Go Roller e da Federação Catarinense de Hóquei e Patinação (FCHP). 🛼\n\n" +
        "‌As aulas acontecem toda quarta-feira das 19h às 21h na praça da Estátua. 🕰️\n\n" +
        "‌E aos sábados, das 17h às 19h, ao lado da pista de skate na Beira Mar de São José! 🌊\n\n" +
        "Qualquer dúvida, entre em contato com a Go Roller: 48 99805-2435. ☎️\n\n" +
        "Time São José, sempre em movimento. 🏃‍♂️"
      ],
      video: "/assets/videos/VÍDEO-26.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🏃‍♂️ Aulas de Atletismo em São José! 🏃‍♀️\n\n" +
        "Quer ser um atleta do nosso município? Venha participar das aulas de atletismo!\n\n" +
        "Todas as dúvidas podem ser tiradas com nosso professor. Confira a grade de horários no nosso linktree na bio.\n\n" +
        "Outros polos:\n" +
        "📍 Colônia Santana, no campo da Colônia\n" +
        "🗓️ Terça e Quinta\n" +
        "⏰ 16:30 - 19:30\n\n" +
        "Time São José, sempre em movimento! 💪🚀"
      ],
      video: "/assets/videos/VÍDEO-27.mp4"
    },
    {
      title: "ESPORTE",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🙋‍♂️ Já pensou em se tornar um atleta de São José?\n\n" +
        "Temos várias modalidades esportivas disponíveis pela região! Confira a grade de horários e venha fazer parte do #TimeSãoJosé.\n\n" +
        "Para mais informações, tire suas dúvidas no WhatsApp (48) 99679-1294 ou no e-mail esporte@pmsj.sc.gov.br. 🚨\n\n" +
        "#CidadeDasOportunidades #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-28.mp4"
    },
    {
      title: "HORTA SOLIDÁRIA URBANA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🤔🌱 Como eu faço pra participar ou trazer pro meu bairro uma HORTA SOLIDÁRIA URBANA?\n\n" +
        "Entenda no vídeo como funciona o projeto da Prefeitura, 🥦🥕🥬 que garante alimentos saudáveis nas comunidades de São José.\n\n" +
        "#HortaSolidaria #CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-29.mp4"
    },
    {
      title: "OUVIDORIA",
      descript: [
        "APRESENTAÇÃO PARA PREFEITURA"
      ],
      materia: [
        "🙋‍♂️ Como eu faço pra falar com a Prefeitura?🤔\n\n" +
        "👉🏽 Confira no vídeo as melhores formas de encaminhar cada tipo de assunto!\n\n" +
        "#CidadeDasOportunidades #SaoJose #PMSJ"
      ],
      video: "/assets/videos/VÍDEO-30.mp4"
    },
  ];

  const fotos = [
    {
      title: "Oscar",
      descript: [
        "🏆 E o Oscar vai para… São José! 🎬✨"
      ],
      materia: [
        "Na categoria Segurança Pública, o prêmio vai para o reforço nos efetivos, novos armamentos e viaturas. Em Mobilidade Urbana, a estatueta é nossa pelo avanço nas obras e melhorias no trânsito. E no papel de protagonista em Saúde, São José se destaca como referência no atendimento à mulher e à criança. Aqui, os investimentos são de verdade e os resultados são dignos de premiação! 🎥👏"
      ],
      image: "/assets/fotos/foto-4.png",
      image2: "/assets/fotos/foto-5.png",
      image3: "/assets/fotos/foto-6.png",
      image4: "/assets/fotos/foto-7.png",
      altimage: 'Foto Oscar',
      altimage2: 'Foto Reforço no quadro de efetivos',
      altimage3: 'Foto Mobilidade',
      altimage4: 'Foto Referência no atendimento a mulher e a criança',
    },
    {
      title: "Neymar no Carnaval em SJ",
      descript: [
        "Neymar Passa em São José para ver ensaio do Jardim das Palmeiras"
      ],
      materia: [
        "Que tal fazer igual ao Neymar e ir curtir o ensaio da escola de samba Jardim das Palmeiras? 🥁 O próximo ensaio ao ar livre acontece nesta segunda (3), às 20h30, na praça Adriano de Farias, em Forquilhinhas. Vamos vibrar com a escola de samba que representa São José na passarela Nego Quiridu! 💚\n\n" +
        "Acompanhe a agenda no @jardimdaspalmeirasoriginal! 😉"
      ],
      image: "/assets/fotos/foto-8.png",
      altimage: 'Foto Neymar no carnaval em SJ',
    },
  ];

  const koi = [
    {
      cliente: "Zah Empreendimentos",
      nome: "Zah Amazônia",
      pdf: "/assets/pdfs/zah-amazonia.pdf",
    },
    {
      cliente: "Zah Empreendimentos",
      nome: "Zah Amazônia Pós Evento",
      pdf: "/assets/pdfs/zah-amazonia-pos.pdf",
    },
    {
      cliente: "Greenvalley",
      nome: "Winter Music 25",
      pdf: "/assets/pdfs/winter-music-25.pdf",
    },
    {
      cliente: "Greenvalley",
      nome: "Road to Tomorrowland",
      pdf: "/assets/pdfs/road-tomorrowland.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Nota Fictícia de Inauguração em Outros Países",
      pdf: "/assets/pdfs/nota-ficticia-inauguracao-outros-paises.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Modelo de Cartinha de Press Kit",
      pdf: "/assets/pdfs/modelo-cartinha-press-kit.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Convite Fictício Inauguração Juistreet São José",
      pdf: "/assets/pdfs/convite-ficticio-modelo-inauguração-juistreet-sao-jose.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Relatório de Treinamento KoIA para Ju",
      pdf: "/assets/pdfs/relatorio-treinamento-koia-ju.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Release de Lançamento Hots Smoothies",
      pdf: "/assets/pdfs/release-lancamento-hots-smoothies.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Mini Bio Renato Muniz",
      pdf: "/assets/pdfs/mini-bio-renato-muniz.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Esqueleto do Release de Inauguração em Mogi, Bauru e Arujá + Reforço Vila Mariana (SP)",
      pdf: "/assets/pdfs/esqueleto-release-inauguração-mogi-bauru-aruja-reforco-vila-mariana-sp.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Release Inauguração Porto Alegre",
      pdf: "/assets/pdfs/release-inauguracao-porto-alegre.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Release Inauguração Vila Mariana",
      pdf: "/assets/pdfs/release-inauguracao-vila-mariana.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Release Abertura Caxias do Sul",
      pdf: "/assets/pdfs/release-abertura-caxias-sul.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Release Institucional Juistreet",
      pdf: "/assets/pdfs/release-institucional-juistreet.pdf",
    },
    {
      cliente: "Juistreet",
      nome: "Boilerplate Juistreet",
      pdf: "/assets/pdfs/boilerplate-juistreet.pdf",
    },


  ]

  const videosPessoais = [
    {
      title: "Terrifier",
      descript: [
        "PROJETO PESSOAL DE COSPLAY"
      ],
      materia: [
        "terrifier day 🤡\n\n" +
        "direção e edição: @floripafotografia.cs 🎬\n" +
        "maquiagem: @beleza.mystika 🎨\n" +
        "figurino: @disfarcefantasias 🤵🏻‍♂️\n"
      ],
      video: "/assets/videos/VÍDEO-1.mp4"
    },
    {
      title: "Terrifier",
      descript: [
        "PROJETO PESSOAL DE COSPLAY"
      ],
      materia: [
        "terrifier day 🤡\n\n" +
        "Vocês gostam de making off né? Então tá ai um pouquinho 🤣🔥👌🏻\n\n" +
        "#floripa #fotografo #videomaker #terrifier3"
      ],
      video: "/assets/videos/VÍDEO-2.mp4"
    },
  ]

  const fotosPessoais = [
    {
      title: "FOTOS TERRIFIER",
      descript: [
        "E essa produção? @officialterrifier3 @terrifierbrazil"
      ],
      materia: [
        "Maquiagem : @mystikaproducoes\n" +
        "Ator : @guilhermehsou\n" +
        "Audiovisual @floripafotografia.cs"
      ],
      image: "/assets/fotos/foto-1.jpg",
      image2: "/assets/fotos/foto-2.jpg",
      image3: "/assets/fotos/foto-3.jpg",
      altimage: 'Foto 1 Terrifier',
      altimage2: 'Foto 2 Terrifier',
      altimage3: 'Foto 3 Terrifier',
    },
  ]

  const [paginaAtual, setPaginaAtual] = useState(0);
  const itensPorPagina = 1;
  const totalPaginas = Math.ceil(materias.length / itensPorPagina);

  const materiasPaginadas = materias.slice(
    paginaAtual * itensPorPagina,
    (paginaAtual + 1) * itensPorPagina
  );

  const [paginaAtualVideo, setPaginaAtualVideo] = useState(0);
  const itensPorPaginaVideo = 1;
  const totalPaginasVideo = Math.ceil(videos.length / itensPorPaginaVideo);

  const VideosPaginados = videos.slice(
    paginaAtualVideo * itensPorPaginaVideo,
    (paginaAtualVideo + 1) * itensPorPaginaVideo
  );

  const [paginaAtualFoto, setPaginaAtualFoto] = useState(0);
  const itensPorPaginaFoto = 1;
  const totalPaginasFoto = Math.ceil(fotos.length / itensPorPaginaFoto);

  const FotosPaginadas = fotos.slice(
    paginaAtualFoto * itensPorPaginaFoto,
    (paginaAtualFoto + 1) * itensPorPaginaFoto
  );

  const [paginaAtualVideoP, setPaginaAtualVideoP] = useState(0);
  const itensPorPaginaVideoP = 1;
  const totalPaginasVideoP = Math.ceil(videosPessoais.length / itensPorPaginaVideoP);

  const VideosPessPaginados = videosPessoais.slice(
    paginaAtualVideoP * itensPorPaginaVideoP,
    (paginaAtualVideoP + 1) * itensPorPaginaVideoP
  );

  const [paginaAtualFotoP, setPaginaAtualFotoP] = useState(0);
  const itensPorPaginaFotoP = 1;
  const totalPaginasFotoP = Math.ceil(fotosPessoais.length / itensPorPaginaFotoP);

  const FotosPessPaginadas = fotosPessoais.slice(
    paginaAtualFotoP * itensPorPaginaFotoP,
    (paginaAtualFotoP + 1) * itensPorPaginaFotoP
  );

  const [prefeituraHidden, setPrefeituraHidden] = useState(false);
  const [pessoalHidden, setPessoalHidden] = useState(false);
  const [koiHidden, setKoiHidden] = useState(false);

  const handleHiddenPrefeituraProjects = () => {
    setPrefeituraHidden(!prefeituraHidden);
  }

  const handleHiddenPessoalProjects = () => {
    setPessoalHidden(!pessoalHidden);
  }

  const handleHiddenKoiProjects = () => {
    setKoiHidden(!koiHidden);
  }

  return (
    <ContainerProjetosPage>
      <TitlePageProjetos>Projetos</TitlePageProjetos>

      <SubcontainerTextsProjetos>
        <TextDefaultProjetos>
          Bem-vindo à minha página de projetos! Aqui você encontra uma seleção dos trabalhos que já realizei, desde matérias que escrevi e roteiros que desenvolvi até vídeos em que atuei, editei ou produzi.
        </TextDefaultProjetos>
      </SubcontainerTextsProjetos>

      {prefeituraHidden ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem', margin: '.5rem 0' }}>Prefeitura</TxtPaginacao>
          <IoIosArrowRoundDown onClick={handleHiddenPrefeituraProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem', margin: '.5rem 0' }}>Prefeitura</TxtPaginacao>
          <IoIosArrowRoundForward onClick={handleHiddenPrefeituraProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      )}

      {prefeituraHidden && (
        <>
          <TxtPaginacao style={{ fontSize: '1.3rem', marginTop: '1rem' }}>Matérias</TxtPaginacao>
          <TxtPaginacao style={{ margin: '1rem 0' }}>Algumas matérias que eu escrevi, não coloquei todas, mas selecionei as que considero de maior destaque.</TxtPaginacao>

          {materiasPaginadas.map((materia, index) => (
            <SubcontainerTextsImgProjetos key={index}> {/* row */}
              <SubcontainerTextsDescriptProjetos> {/* column text */}
                <TituloTextDescriptProjetos>{materia.title}</TituloTextDescriptProjetos>
                <TextDefaultProjetos>{materia.descript}</TextDefaultProjetos>
                <TextDefaultProjetos>{materia.materia}</TextDefaultProjetos>
                <LinkMaterias to={materia.linkMateria} target='_blank'>Link da matéria</LinkMaterias>
              </SubcontainerTextsDescriptProjetos>

              <SubcontainerImgsProjetos> {/* img */}
                <ImgsProjetos src={materia.image} alt={materia.altimage} />
              </SubcontainerImgsProjetos>
            </SubcontainerTextsImgProjetos>
          ))}

          <Paginacao>
            <PagBtn onClick={() => setPaginaAtual(paginaAtual - 1)} disabled={paginaAtual === 0}>
              Anterior
            </PagBtn>
            <TxtPaginacao>
              Matéria {paginaAtual + 1} de {totalPaginas}
            </TxtPaginacao>
            <PagBtn onClick={() => setPaginaAtual(paginaAtual + 1)} disabled={paginaAtual === totalPaginas - 1}>
              Próxima
            </PagBtn>
          </Paginacao>

          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Vídeos</TxtPaginacao>
          <TxtPaginacao>Alguns vídeos nos quais atuei, editei ou escrevi o roteiro. Não coloquei todos, mas selecionei os que considero de maior destaque.</TxtPaginacao>

          {VideosPaginados.map((video, index) => (
            <SubcontainerTextsImgProjetos key={index}> {/* row */}
              <SubcontainerTextsDescriptProjetos> {/* column text */}
                <TituloTextDescriptProjetos>{video.title}</TituloTextDescriptProjetos>
                <TextDefaultProjetos>{video.descript}</TextDefaultProjetos>
                <TextDefaultProjetos>{video.materia}</TextDefaultProjetos>
              </SubcontainerTextsDescriptProjetos>

              <SubcontainerImgsProjetos> {/* img */}
                <VideoProjetos controls key={video.video}>
                  <source src={video.video} />
                </VideoProjetos>
              </SubcontainerImgsProjetos>
            </SubcontainerTextsImgProjetos>
          ))}

          <Paginacao>
            <PagBtn onClick={() => setPaginaAtualVideo(paginaAtualVideo - 1)} disabled={paginaAtualVideo === 0}>
              Anterior
            </PagBtn>
            <TxtPaginacao>
              Vídeo {paginaAtualVideo + 1} de {totalPaginasVideo}
            </TxtPaginacao>
            <PagBtn onClick={() => setPaginaAtualVideo(paginaAtualVideo + 1)} disabled={paginaAtualVideo === totalPaginasVideo - 1}>
              Próxima
            </PagBtn>
          </Paginacao>

          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Fotos</TxtPaginacao>
          <TxtPaginacao>Alguns cards para os quais escrevi o roteiro. Não coloquei todos, mas selecionei os que considero os de maior destaque recente.</TxtPaginacao>

          {FotosPaginadas.map((foto, index) => (
            <SubcontainerTextsImgProjetos key={index}> {/* row */}
              <SubcontainerTextsDescriptProjetos> {/* column text */}
                <TituloTextDescriptProjetos>{foto.title}</TituloTextDescriptProjetos>
                <TextDefaultProjetos>{foto.descript}</TextDefaultProjetos>
                <TextDefaultProjetos>{foto.materia}</TextDefaultProjetos>
              </SubcontainerTextsDescriptProjetos>

              <SubcontainerImgs>
                {foto.image && <ImgMini src={foto.image} alt={foto.altimage} />}
                {foto.image2 && <ImgMini src={foto.image2} alt={foto.altimage2} />}
                {foto.image3 && <ImgMini src={foto.image3} alt={foto.altimage3} />}
                {foto.image4 && <ImgMini src={foto.image4} alt={foto.altimage4} />}
              </SubcontainerImgs>

            </SubcontainerTextsImgProjetos>
          ))}

          <Paginacao>
            <PagBtn onClick={() => setPaginaAtualFoto(paginaAtualFoto - 1)} disabled={paginaAtualFoto === 0}>
              Anterior
            </PagBtn>
            <TxtPaginacao>
              Foto {paginaAtualFoto + 1} de {totalPaginasFoto}
            </TxtPaginacao>
            <PagBtn onClick={() => setPaginaAtualFoto(paginaAtualFoto + 1)} disabled={paginaAtualFoto === totalPaginasFoto - 1}>
              Próxima
            </PagBtn>
          </Paginacao>
        </>
      )}

      {koiHidden ? (
        <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Koi</TxtPaginacao>
          <IoIosArrowRoundDown onClick={handleHiddenKoiProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Koi</TxtPaginacao>
          <IoIosArrowRoundForward onClick={handleHiddenKoiProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      )}

      {koiHidden && (
        <>
          <TxtPaginacao style={{ margin: '1rem 0' }}>
            Aqui estão alguns materiais que escrevi para a Koi, para alguns dos nossos clientes. A maioria foi publicada em veículos de comunicação e teve boa repercussão. Paralelamente, tenho experiência em atendimento à imprensa, relacionamento com clientes e outras atividades correlatas. Também administro planilhas de mailing, faço follow-up com as fontes, elaboro planilhas de clipagem e encaminho os resultados aos clientes. Além disso, utilizei a KoIA para treinar a ferramenta sobre nossos clientes da Koi.
          </TxtPaginacao>
          {koi.map((k, index) => (
            <SubcontainerTextsDescriptProjetos key={index}> {/* column text */}
              <TxtDefault>{k.cliente}</TxtDefault>
              <LinkDownloadPdf href={k.pdf} download>{k.nome}</LinkDownloadPdf>
            </SubcontainerTextsDescriptProjetos>
          ))}
        </>
      )}

      {pessoalHidden ? (
        <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Pessoais</TxtPaginacao>
          <IoIosArrowRoundDown onClick={handleHiddenPessoalProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}>
          <TxtPaginacao style={{ fontSize: '1.3rem' }}>Pessoais</TxtPaginacao>
          <IoIosArrowRoundForward onClick={handleHiddenPessoalProjects} style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
        </div>
      )}

      {pessoalHidden && (
        <>
          <TxtPaginacao style={{ margin: '1rem 0' }}>Uma vez me fantasiei de Art, do filme Terrifier. Contei com a ajuda de um amigo filmmaker e fotógrafo, além de uma amiga maquiadora. Sou uma pessoa com bastante contatos.</TxtPaginacao>
          {VideosPessPaginados.map((video, index) => (
            <SubcontainerTextsImgProjetos key={index}> {/* row */}
              <SubcontainerTextsDescriptProjetos> {/* column text */}
                <TituloTextDescriptProjetos>{video.title}</TituloTextDescriptProjetos>
                <TextDefaultProjetos>{video.descript}</TextDefaultProjetos>
                <TextDefaultProjetos>{video.materia}</TextDefaultProjetos>
              </SubcontainerTextsDescriptProjetos>

              <SubcontainerImgsProjetos> {/* img */}
                <VideoProjetos controls key={video.video}>
                  <source src={video.video} />
                </VideoProjetos>
              </SubcontainerImgsProjetos>
            </SubcontainerTextsImgProjetos>
          ))}

          <Paginacao>
            <PagBtn onClick={() => setPaginaAtualVideoP(paginaAtualVideoP - 1)} disabled={paginaAtualVideoP === 0}>
              Anterior
            </PagBtn>
            <TxtPaginacao>
              Vídeo {paginaAtualVideoP + 1} de {totalPaginasVideoP}
            </TxtPaginacao>
            <PagBtn onClick={() => setPaginaAtualVideoP(paginaAtualVideoP + 1)} disabled={paginaAtualVideoP === totalPaginasVideoP - 1}>
              Próxima
            </PagBtn>
          </Paginacao>

          <TextDefaultProjetos style={{ fontSize: '1.2rem' }}>Fotos</TextDefaultProjetos>

          {FotosPessPaginadas.map((foto, index) => (
            <SubcontainerTextsImgProjetos key={index}> {/* row */}
              <SubcontainerTextsDescriptProjetos> {/* column text */}
                <TituloTextDescriptProjetos>{foto.title}</TituloTextDescriptProjetos>
                <TextDefaultProjetos>{foto.descript}</TextDefaultProjetos>
                <TextDefaultProjetos>{foto.materia}</TextDefaultProjetos>
              </SubcontainerTextsDescriptProjetos>

              <SubcontainerImgs>
                {foto.image && <ImgMini src={foto.image} alt={foto.altimage} />}
                {foto.image2 && <ImgMini src={foto.image2} alt={foto.altimage2} />}
                {foto.image3 && <ImgMini src={foto.image3} alt={foto.altimage3} />}
                {foto.image4 && <ImgMini src={foto.image4} alt={foto.altimage4} />}
              </SubcontainerImgs>

            </SubcontainerTextsImgProjetos>
          ))}

          <Paginacao>
            <PagBtn onClick={() => setPaginaAtualFotoP(paginaAtualFotoP - 1)} disabled={paginaAtualFotoP === 0}>
              Anterior
            </PagBtn>
            <TxtPaginacao>
              Foto {paginaAtualFotoP + 1} de {totalPaginasFotoP}
            </TxtPaginacao>
            <PagBtn onClick={() => setPaginaAtualFotoP(paginaAtualFotoP + 1)} disabled={paginaAtualFotoP === totalPaginasFotoP - 1}>
              Próxima
            </PagBtn>
          </Paginacao>
        </>
      )}

    </ContainerProjetosPage>
  )
}

export default ProjetosPage
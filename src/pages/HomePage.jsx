import React, { useState } from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BtnDefault, ContainerHomePage, ImgProfile, LinkSocialMedia, ModalImg, SubcontainerBtn, SubcontainerData, SubcontainerDescript, SubcontainerProfile, SubcontainerSocialMedia, TextHomeDescript, TituloProfile, TxtDefault } from '../styles/HomePageStyles';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ContainerHomePage> {/* container row*/}
            <SubcontainerProfile> {/* container column*/}
                <SubcontainerData> {/* container column img name border-bottom role*/}
                    <ImgProfile src="/assets/profileimg.jpg" alt="Foto de perfil" onClick={() => setIsOpen(true)} />
                    <ModalImg $isOpen={isOpen} onClick={() => setIsOpen(false)}>
                        <img src="/assets/profileimg.jpg" alt="Foto de perfil ampliada" />
                    </ModalImg>

                    <TituloProfile>Guilherme H. <br />Souza</TituloProfile> {/* border-bottom padding+*/}

                </SubcontainerData>

                <SubcontainerSocialMedia> {/* container row social media*/}
                    <LinkSocialMedia to='https://www.instagram.com/guilhermehsou/?igsh=MTNrM3I5dnVmZXY3bw%3D%3D&utm_source=qr#' target='_blank'>
                        <FaInstagram />
                    </LinkSocialMedia>
                    <LinkSocialMedia to='https://www.linkedin.com/in/guilherme-henrique-souza-02560b276/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                        <FaLinkedinIn />
                    </LinkSocialMedia>
                    {/* react-icon instagram, X & Linkedin*/}
                </SubcontainerSocialMedia>
            </SubcontainerProfile>

            <SubcontainerDescript> {/* container column title words div 2btn descript*/}
                <TituloProfile>Bem-vindos ao meu portfólio!</TituloProfile>

                <SubcontainerBtn> {/* container row*/}
                    <BtnDefault to='/curriculo'>Currículo</BtnDefault>
                    <BtnDefault to='/projetos'>Projetos</BtnDefault>
                </SubcontainerBtn>

                <TextHomeDescript>
                  Oi! Tudo bem? Me chamo Guilherme Henrique Souza, mas pode me chamar de Gui ou Guizão. Sou formado em Jornalismo pela Unisul e faço pós-graduação em Jornalismo Esportivo e Multimídias na mesma universidade. Atuo na área desde 2023, com passagem pela comunicação institucional e assessoria de imprensa nos setores público e privado. Tenho experiência na elaboração de releases, contato com veículos e jornalistas, cobertura de eventos e desenvolvimento de conteúdos para redes sociais. Estou disponível para atuar como PJ ou para integrar a equipe de comunicação da sua empresa, contribuindo para ampliar a presença digital e fortalecer seu posicionamento por meio de estratégias de comunicação.
                </TextHomeDescript>
            </SubcontainerDescript>
        </ContainerHomePage>
    )
}

export default HomePage
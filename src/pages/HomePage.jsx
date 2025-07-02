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
                    <BtnDefault to='/sobre-mim'>Sobre mim</BtnDefault>
                </SubcontainerBtn>

                <TextHomeDescript>
                    Oi! Tudo bem? Meu nome é Guilherme Henrique Souza, mas pode me chamar de Gui. Tenho 22 anos, sou bacharel em Jornalismo pela Unisul e atualmente curso pós-graduação em Jornalismo Esportivo e Multimídias, também pela mesma universidade. Atuei por dois anos na área de comunicação institucional e recentemente trabalhei em uma agência de assessoria de imprensa. Tenho experiência em suporte administrativo, produção de releases, atendimento à imprensa, cobertura de eventos, além da criação de roteiros e conteúdos para redes sociais.
                </TextHomeDescript>
            </SubcontainerDescript>
        </ContainerHomePage>
    )
}

export default HomePage
import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BtnDefault, ContainerHomePage, ImgProfile, LinkSocialMedia, SubcontainerBtn, SubcontainerData, SubcontainerDescript, SubcontainerProfile, SubcontainerSocialMedia, TituloProfile, TxtDefault } from '../styles/HomePageStyles';

function HomePage() {
    return (
        <ContainerHomePage> {/* container row*/}
            <SubcontainerProfile> {/* container column*/}
                <SubcontainerData> {/* container column img name border-bottom role*/}
                    <ImgProfile src="/assets/profileimg.jpg" alt="Foto de perfil" />

                    <TituloProfile style={{ borderBottom: '1px solid #333333', paddingBottom: '1rem' }}>Guilherme H <br />Souza</TituloProfile> {/* border-bottom padding+*/}

                    <TituloProfile style={{ marginBlockStart: '0' }}>Jornalista</TituloProfile>
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
                <TituloProfile>Título</TituloProfile>
                <TxtDefault>Frase de boas-vindas</TxtDefault>

                <SubcontainerBtn> {/* container row*/}
                    <BtnDefault to='/curriculo'>Currículo</BtnDefault>
                    <BtnDefault to='/projetos'>Projetos</BtnDefault>
                </SubcontainerBtn>

                <p>Aqui deve conter uma breve descrição de você para que as pessoas o conheçam melhor.</p>
            </SubcontainerDescript>
        </ContainerHomePage>
    )
}

export default HomePage
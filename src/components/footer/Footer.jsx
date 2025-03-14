import React from 'react'
import { ContainerFooter, LinkItemSocialMediaFooter, LinkPolit, SectionDados, SubContainerCopyPolit, SubcontainerDadosFooter, TextSec, TextSectionDados } from '../../styles/FooterStyles'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <ContainerFooter>
            <SubContainerCopyPolit>
                <LinkPolit to='/politica-de-privacidade'>Política de privacidade</LinkPolit>
                <TextSec>&copy; Todos os direitos reservados</TextSec>
            </SubContainerCopyPolit>

            <SubcontainerDadosFooter>
                <SectionDados>
                    <TextSectionDados>Telefone</TextSectionDados>
                    <TextSec>(48)9 8847-3121</TextSec>
                </SectionDados>

                <SectionDados>
                    <TextSectionDados>E-mail</TextSectionDados>
                    <TextSec>guilherme7hs@gmail.com</TextSec>
                </SectionDados>

                <SectionDados>
                    <TextSectionDados>Redes Sociais</TextSectionDados>
                    <TextSec style={{display: 'flex', gap: '2rem', marginLeft: '1.5rem'}}>
                        <LinkItemSocialMediaFooter to='https://www.instagram.com/guilhermehsou/?igsh=MTNrM3I5dnVmZXY3bw%3D%3D&utm_source=qr#' target='_blank'>
                            <FaInstagram />
                        </LinkItemSocialMediaFooter>
                        
                        <LinkItemSocialMediaFooter to='https://www.linkedin.com/in/guilherme-henrique-souza-02560b276/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                            <FaLinkedinIn />
                        </LinkItemSocialMediaFooter>
                    </TextSec>
                </SectionDados>
            </SubcontainerDadosFooter>
        </ContainerFooter>
    )
}

export default Footer
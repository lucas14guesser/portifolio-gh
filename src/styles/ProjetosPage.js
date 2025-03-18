import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerProjetosPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;
`
export const TitlePageProjetos = styled.h1`
    text-align: center;
`
export const SubcontainerTextsProjetos = styled.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
`
export const TextDefaultProjetos = styled.p`
    text-align: justify;
    font-size: 1rem;
`
export const SubcontainerTextsImgProjetos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;
`
export const SubcontainerTextsDescriptProjetos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1rem;
    gap: 1rem;
`
export const SubcontainerImgsProjetos = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`
export const TituloTextDescriptProjetos = styled.p`
    font-size: 1.3rem;
`
export const VideoProjetos = styled.video`
    width: 100%;
    height: 35rem;
`
export const LinkMaterias = styled(Link)`
    text-decoration: underline;
    color: #333333;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
`
export const ImgsProjetos= styled.img`
    width: 100%;
    height: 30rem;
`
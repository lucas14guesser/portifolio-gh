import { Link } from "react-router-dom"
import styled from "styled-components"

export const ContainerProjetosPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 30rem;
    gap: 3rem;

    @media (max-width: 430px) {
        margin: 7rem 2rem;
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        margin: 7rem 4rem;
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        margin: 7rem 6rem;
        gap: 1rem;
    }
`
export const TitlePageProjetos = styled.h1`
    text-align: center;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: 1.1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: 1.5rem;
    }
`
export const SubcontainerTextsProjetos = styled.div`
    display: flex;
    flex-direction: center;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 430px) {
        gap: 1rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        gap: 1rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        gap: 1rem;
    }
`
export const TextDefaultProjetos = styled.p`
    text-align: justify;
    font-size: 1rem;
    white-space: pre-line;

    @media (max-width: 430px) {
        font-size: .5rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const SubcontainerTextsImgProjetos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #EAEAEA;

    @media (max-width: 430px) {
        flex-direction: column;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        flex-direction: column;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        flex-direction: column;
    }
`
export const SubcontainerTextsDescriptProjetos = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1rem;

    @media (max-width: 430px) {
        width: 90%;
        gap: .3rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 90%;
        gap: .3rem;
    }
    
    @media (min-width: 601px) and (max-width: 800px) {
        width: 90%;
        gap: .3rem;
    }
`
export const SubcontainerImgsProjetos = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 430px) {
        width: 100%;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 100%;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 100%;
    }
`
export const TituloTextDescriptProjetos = styled.p`
    font-size: 1.3rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .8rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const VideoProjetos = styled.video`
    width: 100%;
    height: 100%;
`
export const LinkMaterias = styled(Link)`
    text-decoration: underline;
    color: #333333;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;

    &:hover {
        color: #000000;
    }

    @media (max-width: 430px) {
        font-size: .5rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const ImgsProjetos= styled.img`
    width: 100%;
    height: 30rem;

    @media (max-width: 430px) {
        height: 20rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        height: 20rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        height: 25rem;
    }
`
export const SubcontainerImgs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60%;
  gap: 5px;
  height: 35rem;
`
export const ImgMini = styled.img`
  width: ${({ imagesCount }) => (imagesCount === 1 ? '100%' : imagesCount === 2 ? '70%' : '30%')}; 
  height: 15rem;
  border: 1px solid #333;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.7);
  }
`
import styled from "styled-components";

export const ContainerSobreMimPage = styled.div`
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
    }
`
export const TitlePageSobreMim = styled.h1`
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
export const SubcontainerTexts = styled.div`
    display: flex;
    flex-direction: column;
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
export const TextDefaultSobreMim = styled.p`
    text-align: justify;
    font-size: 1rem;

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
export const SubcontainerTextsImg = styled.div`
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
export const SubcontainerTextsDescript = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 1rem;
    gap: 1rem;

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
export const SubcontainerImgs = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

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
export const TituloTextDescript = styled.p`
    font-size: 1.3rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const ImgsSobreMim = styled.img`
    width: 100%;
    height: 45rem;

    @media (max-width: 430px) {
        height: 20rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        height: 30rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        height: 40rem;
    }
`
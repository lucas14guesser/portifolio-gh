import styled from "styled-components";

export const ContainerCurriculoPage = styled.div`
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

    @media (min-width: 801px) and (max-width: 1250px) {
        margin: 7rem 3rem;
    }
`
export const SubcontainerTitleBtnCV = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const TitlePageCurriculo = styled.h1`
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
export const TitleCurriculo = styled.p`
    font-size: 1.3rem;

    @media (max-width: 430px) {
        font-size: .7rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .9rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const LinkCV = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    background-color: #EAEAEA;
    border: 1px solid #333333;
    color: #333333;
    border-radius: 12px;
    padding: .7rem;
    font-size: .9rem;
    width: 7rem;
    text-align: center;

    @media (max-width: 430px) {
        font-size: .5rem;
        padding: .3rem;
        width: 4rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
        padding: .5rem;
        width: 6rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .8rem;
        padding: .5rem;
        width: 7rem;
    }
`
export const SubcontainerDataCurriculo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    background-color: #EAEAEA;
    gap: 3rem;
    border: 1px solid #333333;
    width: 100%;
    height: 20rem;

    @media (max-width: 430px) {
        width: 92%;
        height: 15rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        width: 92%;
        height: 15rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        width: 95%;
    }
`
export const SubcontainerDataText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 50%;

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
export const TextTitleDate = styled.p`
    font-size: 1.1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;

    @media (max-width: 430px) {
        font-size: .8rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .8rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .9rem;
    }
`
export const TextDefaultCurriculo = styled.p`
    font-size: 1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;

    @media (max-width: 430px) {
        font-size: .6rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        font-size: .7rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        font-size: .8rem;
    }
`
export const SUbcontainerDescript = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.7rem;
    gap: 1rem;
    width: 50%;

    @media (max-width: 430px) {
        margin-top: 3.3rem;
    }

    @media (min-width: 431px) and (max-width: 600px) {
        margin-top: 3.3rem;
    }

    @media (min-width: 601px) and (max-width: 800px) {
        margin-top: 2.7rem;
    }
`
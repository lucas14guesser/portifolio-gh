import styled from "styled-components";

export const ContainerContatoPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 7rem 40rem;
    gap: 3rem;

    @media (max-width: 430px) {
        margin: 7rem 3rem 7rem 1rem;
        gap: 1rem;
    }
`
export const TitlePageContato = styled.h1`
    text-align: center;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    background: #EAEAEA;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    gap: 2rem;

    @media (max-width: 430px) {
        width: 100%;
        padding: 1rem;
    }
`
export const SubcontainerNameSbr = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: 100%;
`
export const InptContact = styled.input`
    width: 10rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #333333;
    background: #EAEAEA;
    outline: none;
    padding: .5rem 0;
    font-family: "Poppins", sans-serif;

    &::placeholder {
        color: #333333;
    }

    @media (max-width: 430px) {
        &::placeholder {
            font-size: .5rem;
        }
    }
`
export const AreaMsg = styled.textarea`
    width: 10rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #333333;
    background: #EAEAEA;
    outline: none;
    padding: .5rem 0;
    font-family: "Poppins", sans-serif;

    &::placeholder {
        color: #333333;
    }

    @media (max-width: 430px) {
        &::placeholder {
            font-size: .5rem;
        }
`
export const BtnContact = styled.button`
    width: 7rem;
    text-transform: uppercase;
    border: 1px solid #333333;
    background: #EAEAEA;
    padding: .5rem;
    border-radius: 12px;
    cursor: pointer;

    @media (max-width: 430px) {
        font-size: .5rem;
        width: 4rem;
        padding: .3rem;
`
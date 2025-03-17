import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    background: linear-gradient(90deg,#333333 0%, #333333 30%, #FFFFFF 30%, #FFFFFF 100%
    );
    width: 100vw;
    height: 100vh;
`
export const SubcontainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #333333;
    background-color: #EAEAEA;
    margin-left: 26rem;
    width: 20rem;
`
export const SubcontainerData = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    align-items: center;
    padding: 1rem;
`
export const ImgProfile = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
`
export const TituloProfile = styled.h1`
    font-size: 1.2rem;
`
export const SubcontainerSocialMedia = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #FFFFFF;
    padding: 1rem 0;
`
export const LinkSocialMedia = styled(Link)`
    color: #333333;
    text-decoration: none;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
export const SubcontainerDescript = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const TxtDefault = styled.p`
    font-size: 1rem;
`
export const SubcontainerBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`
export const BtnDefault = styled(Link)`
    width: 7rem;
    background-color: #EAEAEA;
    padding: .3rem;
    text-transform: uppercase;
    border: 1px solid #EAEAEA;
    border-radius: 12px;
    text-decoration: none;
    color: #333333;
    text-align: center;
    font-family: "Poppins", sans-serif;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
export const TextHomeDescript = styled.p`
    width: 42.6875rem;
    text-align: justify;
`
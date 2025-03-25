import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background-color: #FFFFFF;
    padding: 1rem 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    display: flex;
    justify-content: space-between;

    @media (max-width: 430px) {
        padding: .5rem 0;
    }
`
export const SubContainerCopyPolit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const LinkPolit = styled(Link)`
    text-decoration: none;
    color: #333333;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    margin-left: 1rem;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
export const TextSec = styled.p`
    font-size: .7rem;
    margin-block-start: 0px;
    margin-block-end: 0px;

    @media (max-width: 430px) {
        font-size: .385rem;
    }
`
export const SubcontainerDadosFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    margin-right: 1rem;

    @media (max-width: 430px) {
        gap: .5rem;
        margin-right: .3rem;
    }
`
export const SectionDados = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const TextSectionDados = styled.p`
    font-size: 1rem;
    margin-block-start: 0px;
    margin-block-end: 0px;

    @media (max-width: 430px) {
        font-size: .7rem;
    }
`
export const LinkItemSocialMediaFooter = styled(Link)`
    text-decoration: none;
    color: #333333;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
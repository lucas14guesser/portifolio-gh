import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerNavBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #FFFFFF;
    padding: 1rem 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    display: flex;
    justify-content: space-between;
`
export const LinkLogo = styled(Link)`
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: #333333;
    margin-left: 1rem;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
export const LogoNav = styled.p`
    font-size: 1.3rem;
`
export const RoleLogo = styled.span`
    font-size: 1.1rem;
    color: #333333;
    opacity: .5;
    border-left: 1px solid #333333;
    padding-left: .5rem;
`
export const ListaNav = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
`
export const LinkItemLista = styled(Link)`
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: #333333;
    font-size: 1rem;
    transition: .3s ease-in;

    &:hover {
        color: #000000;
    }
`
export const ItemListaNav = styled.li`
    border-right: 1px solid #333333;
    padding-right: .5rem;
    padding-left: .5rem;
`
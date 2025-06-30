import React from 'react'
import { ContainerNavBar, ItemListaNav, LinkItemLista, LinkLogo, ListaNav, LogoNav, RoleLogo } from '../../styles/NavBarStyles'

function NavBar() {
    return (
        <ContainerNavBar>
            <LinkLogo to='/'>
                <LogoNav>Guilherme H. Souza</LogoNav>
            </LinkLogo>
            <ListaNav>
                <LinkItemLista to='/curriculo'>
                    <ItemListaNav>Currículo</ItemListaNav>
                </LinkItemLista>
                <LinkItemLista to='/projetos'>
                    <ItemListaNav>Projetos</ItemListaNav>
                </LinkItemLista>
                <LinkItemLista to='/sobre-mim'>
                    <ItemListaNav>Sobre mim</ItemListaNav>
                </LinkItemLista>
            </ListaNav>
        </ContainerNavBar>
    )
}

export default NavBar
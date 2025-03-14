import React from 'react'
import { ContainerNavBar, ItemListaNav, LinkItemLista, LinkLogo, ListaNav, LogoNav, RoleLogo } from '../../styles/NavBarStyles'

function NavBar() {
    return (
        <ContainerNavBar>
            <LinkLogo to='/'>
                <LogoNav>Guilherme H Souza <RoleLogo>Jornalista</RoleLogo></LogoNav>
            </LinkLogo>
            <ListaNav>
                <LinkItemLista to='/sobre-mim'>
                    <ItemListaNav>Sobre mim</ItemListaNav>
                </LinkItemLista>
                <LinkItemLista to='/curriculo'>
                    <ItemListaNav>Currículo</ItemListaNav>
                </LinkItemLista>
                <LinkItemLista to='/projetos'>
                    <ItemListaNav>Projetos</ItemListaNav>
                </LinkItemLista>
                <LinkItemLista to='/contato'>
                    <ItemListaNav style={{borderRight: 'none'}}>Contato</ItemListaNav>
                </LinkItemLista>
            </ListaNav>
        </ContainerNavBar>
    )
}

export default NavBar
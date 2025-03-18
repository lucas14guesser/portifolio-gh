import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SobreMimPage from '../pages/SobreMimPage'
import ProjetosPage from '../pages/ProjetosPage'
import CurriculoPage from '../pages/CurriculoPage'
import ContatoPage from '../pages/ContatoPage'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/sobre-mim' element={<SobreMimPage /> } />
        <Route path='/projetos' element={<ProjetosPage /> } />
        <Route path='/curriculo' element={<CurriculoPage /> } />
        <Route path='/contato' element={<ContatoPage /> } />
    </Routes>
  )
}

export default Router
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
// import SobreMimPage from '../pages/SobreMimPage'
import ProjetosPage from '../pages/ProjetosPage'
import CurriculoPage from '../pages/CurriculoPage'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage /> } />
        {/* <Route path='/sobre-mim' element={<SobreMimPage /> } /> */}
        <Route path='/projetos' element={<ProjetosPage /> } />
        <Route path='/curriculo' element={<CurriculoPage /> } />
    </Routes>
  )
}

export default Router
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import Router from './router/Router'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

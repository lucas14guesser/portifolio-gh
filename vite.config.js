import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        homePage: resolve(__dirname, './src/pages/HomePage.jsx'),
        curriculoPage: resolve(__dirname, './src/pages/CurriculoPage.jsx'),
        projetosPage: resolve(__dirname, './src/pages/ProjetosPage.jsx'),
        sobreMimPage: resolve(__dirname, './src/pages/SobreMimPage.jsx'),
        contatoPage: resolve(__dirname, './src/pages/ContatoPage.jsx'),
      }
    }
  }
})

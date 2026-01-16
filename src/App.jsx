import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'

import sacola from './images/sacola.svg' 
import lupa from './images/perfil.svg'

function App() {
  const opcoesDeMenu = ['Inicio', 'Categorias', 'Minha Estante', 'Favoritos']
  const iconesDeMenu = [lupa, sacola]

  return (
    <>
      <div className='app'>
        <header className='app-header'>
          <Logo/>
          <ul className='opcoes-menu'>
            { opcoesDeMenu.map((opcao) => (
              <li className='opcao' key={opcao}><p>{opcao}</p></li>
            )) }
          </ul>
          <ul className='opcoes-icone'>
            { iconesDeMenu.map((icone) => (
              <li className='icone' key={icone}><img src={icone} alt="icone menu"/></li>
            )) }
          </ul>
        </header>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <header className='app-header'>
          <Logo/>
        </header>
      </div>
    </>
  )
}

export default App

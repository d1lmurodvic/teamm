import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <Navbar/>
      </header>

      <aside>
        <Sidebar/>
      </aside>

      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default App

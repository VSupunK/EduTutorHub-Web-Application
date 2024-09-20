import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Body />
      </div>
    </>
  )
}

export default App

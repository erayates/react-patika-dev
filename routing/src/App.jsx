import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {


  return (
    <div className="App">
            <Navigation/>
      <h1>Welcome to the Homepage!</h1>

    </div>
  )
}

export default App

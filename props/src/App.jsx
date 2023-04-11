import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

const user = {
  name: 'John',
  age: 30,
  isLoggedIn: true,
  friends: ['Jane', 'Mark', 'Bob']
}

const serverStatus = 'online'

function App() {
  
  return (
    <User  user={user} serverStatus = {serverStatus} />
  )
}

export default App

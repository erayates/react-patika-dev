import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0)
  const data = useMemo(() =>{
    return {name: 'Eray'}
  })
  return (
    <div className="App">
      <Header number={number > 5 && 1} data={data} increment = {setNumber + 1}/>
      <hr></hr>
      
      <h1>{number}</h1>


      
    </div>
  )
}

export default App

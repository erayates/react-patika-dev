import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [number, setNumber] = useState(0)
  const data = useMemo(() =>{
    return {name: 'Eray'}
  },[])

  const increment = useCallback(() => {
    return setNumber(prev => prev + 1)
  }, [])
  return (
    <div className="App">
      <Header number={number > 5 && 1} data={data} increment = {increment}/>
      <hr></hr>
      
      <h1>{number}</h1>


      
    </div>
  )
}

export default App

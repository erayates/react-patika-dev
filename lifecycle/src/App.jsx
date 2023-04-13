import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('State Güncellendi!')
  })

  useEffect(() => {
    console.log('Component Mount Edildi!')
  }, [])

  useEffect(() => {
    return () => {
      console.log('Component Unmount Edildi!')
    }
  },[])




  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  )
}

export default App

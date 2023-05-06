import { useState,useEffect } from 'react'
import './App.css'
import getData from './api/api'

function App() {
  const [userId, setUserId] = useState(1)
  const [data, setData] = useState(null)

  useEffect(() => {
   const fetchData = async () => {
      const response = await getData(userId)
      setData(response)
      console.log(response)
   }
   fetchData()
  },[userId])
  return (
    <>
     <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  )
}

export default App


import './App.css'
import A from './components/A'
import B from './components/B'

function App() {

  return (
    <div className='App'>
      <h1>Styling</h1>
      <p>Styling in React</p>

      <p style={{color: "red", fontSize: "12px", textTransform: "uppercase"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <A/>
      <B/>


    </div>
  )
}

export default App


import './App.css'
import Container from './assets/components/Container'
import { CityProvider } from './assets/context/CityContext'



function App() {
  

  return (
    <div className="App">
      <CityProvider value="Adana">
        <Container/>
      </CityProvider>
    </div> 
  )
}

export default App

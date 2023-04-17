
import './App.css'

import { ThemeProvider } from './context/ThemeContext'
import Button from './components/Button'
import Header from './components/Header'
import Container from './components/Container'

function App() {

  return (
    <div className="App">
      <ThemeProvider value="dark">
        <Container/>
      </ThemeProvider>
    </div>
  )
}

export default App

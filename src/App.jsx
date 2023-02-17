import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Container from '../components/container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default App

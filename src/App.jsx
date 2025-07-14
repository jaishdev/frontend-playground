import { useState } from 'react'
import './App.css'
import Currying from './Javascript/Currying.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Currying/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl mb-4'  >Our Team </h1>
      <Card username="Hasir"/>
      <Card username="SRk"/>
      <Card username="sallu"/>

    </>
  )
}

export default App

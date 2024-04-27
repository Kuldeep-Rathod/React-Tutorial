import { useState } from 'react'
import './App.css'
import { useGlobalContext } from './Context/Context'


function App() {

  const data = useGlobalContext();

  return (
    <>
    
      <h1>Hello {data}</h1>
    
    </>
  )
}

export default App

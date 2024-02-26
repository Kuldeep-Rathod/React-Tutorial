import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumallowd] = useState(false)
  const [charAllowed, charNumallowd] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()?<>"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char) 
    }

    setPassword(pass)



  }, [length, numAllowed, charAllowed, setPassword])


  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </>
  )
}

export default App

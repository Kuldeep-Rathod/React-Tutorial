import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("clicked", counter);
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Kuldeep Rathod</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} >
        Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove value {counter}
      </button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App

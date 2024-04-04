import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center gap-x-10 items-center '>
        <Card 
        name="Kuldeep" 
        surname="Kuldeep Rathod"
        />
        <Card 
        name="shailesh"
        surname="Shailesh Jadav"
        />
        <Card 
        name="rahul"
        surname="Rahul Chauhan"
        />
      </div>
    </>
  )
}

export default App

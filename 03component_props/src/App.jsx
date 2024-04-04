import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import TapButton from './components/tapButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  function handleSelect(selectedButton) {
    //selectedButton => component, props, state, jsx
    console.log(selectedButton);
}

  return (
    <>
      <section>
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
      </section>

      <section id='example'>
        <menu className='flex'>
          <TapButton aSelect={() => handleSelect('Components')}>Components</TapButton>
          <TapButton aSelect={() => handleSelect('JSX')}>JSX</TapButton>
          <TapButton aSelect={() => handleSelect('Props')}>Props</TapButton>
          <TapButton aSelect={() => handleSelect('States')}>States</TapButton>
        </menu>
      </section>
    </>
  )
}

export default App

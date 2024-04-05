import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
import TapButton from './components/tapButton.jsx'
import { EXAMPLE } from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    //selectedButton => component, props, state, jsx
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
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
            name="Parth"
            surname="Parth Pandya"
          />
        </div>
      </section>

      <section id='example'>
        <menu className='flex'>
          <TapButton aSelect={() => handleSelect('components')}>Components</TapButton>
          <TapButton aSelect={() => handleSelect('jsx')}>JSX</TapButton>
          <TapButton aSelect={() => handleSelect('props')}>Props</TapButton>
          <TapButton aSelect={() => handleSelect('states')}>States</TapButton>
        </menu>

        {!selectedTopic ? (<p>Please slect a topic</p>) :
          <div id="tab-content" className='border border-black flex items-start flex-col rounded-md p-2 m-2'>
            <h3>{EXAMPLE[selectedTopic].title}</h3>
            <p>{EXAMPLE[selectedTopic].description}</p>
          </div>
        }
      </section>
    </>
  )
}

export default App

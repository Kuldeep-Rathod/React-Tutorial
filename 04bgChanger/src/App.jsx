import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap gap-4 bg-white w-fit justify-center items-center p-3 rounded-full">
            <button 
            onClick={() => setColor("rgb(21 128 61)")}
            className="bg-green-700 text-white font-semibold px-3 py-2 text-center rounded-full">
              Green
            </button>
            <button 
            onClick={() => setColor("rgb(29 78 216)")}
            className="bg-blue-700 text-white px-3 py-2 text-center rounded-full">
              Blue
            </button>
            <button 
            onClick={() => setColor("rgb(239 68 68)")}
            className="bg-red-500 text-white px-3 py-2 text-center rounded-full">
              Red
            </button>
            <button 
            onClick={() => setColor("rgb(139 92 246)")}
            className="bg-violet-500 text-white px-3 py-2 text-center rounded-full">
              violet
            </button>
            <button 
            onClick={() => setColor("rgb(245 158 11)")}
            className="bg-amber-500 text-white px-3 py-2 text-center rounded-full">
              amber
            </button>
            <button 
            onClick={() => setColor("rgb(192 38 211)")}
            className="bg-fuchsia-600 text-white px-3 py-2 text-center rounded-full">
              fuchsia
            </button>
            <button 
            onClick={() => setColor("rgb(6 182 212)")}
            className="bg-cyan-500 text-white px-3 py-2 text-center rounded-full">
              cyan
            </button>
            <button 
            onClick={() => setColor("rgb(132 204 22)")}
            className="bg-lime-500 text-white px-3 py-2 text-center rounded-full">
              lime
            </button>
        </div>

      </div>
    </>
  )
}

export default App

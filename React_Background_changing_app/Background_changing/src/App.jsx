import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'
          onClick={() => setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700'
          onClick={() => setColor("green")}
          >Greenn</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'
          onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400'
          onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-700'
          onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'
          onClick={() => setColor("black")}
          >
            Black
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-700'
          onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-900'
          onClick={() => setColor("purple")}
          >
            Violet
          </button>
        </div>
      </div>

    </div>
  )
}

export default App

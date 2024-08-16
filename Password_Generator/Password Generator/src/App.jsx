import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hock
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*_+-="
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
    
    , [length, numberAllowed, characterAllowed, setPassword]
  )

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-8 py-5 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden bg-slate-200'>
          
          <input
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 my2'
          placeholder='Password' 
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyToClipBoard} 
          className='uppercase px-3 py-2 hover:bg-sky-600 bg-sky-400 font-bold text-white'
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 mt-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={40}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev )
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked= {characterAllowed}
            id='characterInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev )
            }}
            />
            <label htmlFor='characterInput'>Charactesr</label>
          </div>
        </div>
      </div>
    
   
  )
}

export default App

import { useState } from 'react'

function App(){

  let [counter,setCounter] = useState(5)

  function addValue(){
    if(counter <20) {
      counter= counter+1
    }
    setCounter(counter)
  }

  function subValue (){
    if(counter>0){
      counter = counter-1
    }
    setCounter(counter)
  }

  
  return (
    <>
      <h1>Counter Value</h1>
      <h2>Current Value: {counter}</h2>
      <button onClick={addValue}>Added Value</button>
      
      <button onClick={subValue}>Remove Value</button>
      <br />
      <br />
      <p>Review Value: {counter}</p>
    </>
  )
}

export default App

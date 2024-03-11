import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    counter += 1;
    setCounter(counter)
    console.log("Added Value")
  }

  const removeValue = () =>{
    counter -= 1;
    setCounter(counter)
    console.log("Removed Value");
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)  // here useState refer an array and setCounter refer a method
  const addValue=function(){
    //counter=counter+1;
    if(counter<20) 
    setCounter(counter+1)
  }

  const removeValue=function(){
    if(counter>0)
    setCounter(counter-1)
  }

  return (
  <>
  <h1>chai aur React</h1>
  <h2>counter value:{counter}</h2>
  <button
  onClick={addValue}
  >Add value</button>
  <br /> <br />
  <button
  onClick={removeValue}
  >remove value</button>

  </>
  )
}

export default App

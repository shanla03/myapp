import { Button } from '@mui/material'
import React,{useState} from 'react'

export default function UseState() {


// color is state variable and setcolor is function to change the color
    const [state, setState] = useState("Hi")

    const [color , setColor ] = useState('green')

    const [ backgorund ,setBackground] = useState('lightyellow')

    const [increment , SetIncrement]  =useState(1)

    const [decrement,setdecrement] = useState(100)

  return (
    <div style={{backgroundColor:backgorund}}>
      
      <h2 style={{color:color}}>Welcome</h2>
      <Button onClick={()=> setColor('red') }>Change color</Button><br/>
      {state}
      <Button onClick={()=> setState('Hello World') }>Change Text</Button>
      {/* {backgorund} */}
     <Button onClick={()=> setBackground('yellow')}>dark mode</Button><br/>
     {increment}
     <Button onClick={()=> SetIncrement(increment+1)}>Increment</Button>
    {decrement}
    <Button onClick={()=> setdecrement(decrement-1)}>Decrement</Button>

    </div>
  )
}

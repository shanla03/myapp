import React from 'react'

export default function TernaryOperator() {


    const a= true
    const value ="right"

    const Ternary =(value)=>{
        { value=="right"? alert("you have clicked the right button"):
        alert("you have clicked the left button")}

    }

    let age="16"

    let category = age>18? "Adult": age>=13? "Teen ":"child"

    console.log(category)



  return (
    <div>
      
      {a? 'true':'false'}

      <button onClick={()=>{
        value=="right"? alert("you have clicked the right button"):
        alert("you have clicked the left button")
      }}>Click me</button>

      <button onClick={()=> Ternary('left')}>left</button>
      <button onClick={()=> Ternary('right')}>right</button>

    </div>
  )
}

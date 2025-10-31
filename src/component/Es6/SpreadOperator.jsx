import { Button } from '@mui/material';
import React, { useState } from 'react'

export default function SpreadOperator() {
    const arr = [1,2,3,4];
    const arr2 = [5,6,7];

    const arr3 = [ ...arr, ...arr2 ]



    const array =[
      {id:1,name:"john"},
      {id:2,name:"alice"}
    ]

     const array2 =[
      {id:3,name:"charlie"},
      {id:4,name:"abc"}
    ]

    const newarray = [...array, ...array2]


  return (
    <div>
      
      {arr3}

      {newarray.map((item,index)=>{
      return(
        <div key={index}>

          Id:{item.id}, Name:{item.name}
        </div> 
      )
      })}
      
    </div>
  )
}

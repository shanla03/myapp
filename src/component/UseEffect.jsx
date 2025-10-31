import React, { useEffect, useState } from 'react'

export default function UseEffect() {


    // syntax
    // useEffect(()=>{

    // },[])

    // useEffect(()=>{
    //     alert('hloo')

    // },[])
    const [count, setCount] =useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
            console.log(count)
        },1000)
    },[])



  return (
    <div>
      {count}
    </div>
  )
}



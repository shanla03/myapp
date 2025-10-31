import React from 'react'
import Child from './Child'

export default function Parent() {

    const a = 10;
    const arr = ["cat", "dog", "fox"]
    const array = [{
        id:"1",name:"abc"
    },
{
        id:"2",name:"xyz"
    },
{
        id:"3",name:"hhh"
    }]
    
  return (
    <div>
      <Child name="xyz" email="xyz@gmail.com" a = {a} xyz = {arr}
       arr={array} />
    </div>
  )
}

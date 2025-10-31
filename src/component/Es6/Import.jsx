import React from 'react'
import {name,age,address} from './Export'
import {Hello} from './Export'
import Greeting from './Export'

export default function Import() {
  return (
    <div>

        {name}

        {Hello()}
        <Hello/> 
      <Greeting/>
    </div>
  )
}

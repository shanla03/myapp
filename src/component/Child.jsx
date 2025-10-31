import React from 'react'

export default function Child(props) {
  return (
    <div>
      {props.name}
      {props.email}
      {props.a} <br/>
        {props.xyz.map((item , index)=>{
            return(
                <> {item}  </>
            )
        })}

        {props.arr.map((item , index)=>{
            return(
                <>id: {item.id}, Name: {item.name}  </>
            )
        })}
    </div>
  )
}

import React from 'react'

export default function ArrowFunction() {
// ()=>{} 
  //single line arrow function
  const Hello =() => "hello world";

  const Hii = () => {
    return "good morning";
  }

  //multi line arrow function

  const Greet = () => {
    return<>
    <h1>Good Morning</h1>
    <h2>Good Evening</h2>
    <h3>Hello</h3>
    </>
  }
  


  return (
    <div>

      {Hello()}
      <br />
      {Hii()}
      {Greet()}
      <Greet />
      
    </div>
  )
}

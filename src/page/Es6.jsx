import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Es6() {
  return (
    <div>
        <h1>Es6 Features</h1>
          <Link to="/ArrowFunction"><Button variant="contained" color="primary">
          Arrow Function
          </Button></Link>
          <Link to="/ArrayMethod"><Button variant="contained" color="secondary">
          Array Method
          </Button></Link>
          <Link to="/Destructuring"><Button variant="contained" color="success">
          Destructuring
          </Button></Link>
          <Button variant="contained" color="error">
          Modules       
          </Button>
          <Button variant="contained" color="warning">
           Variables   
          </Button> 
           <Link to="/TernaryOperator"><Button variant="contained" color="info">
           Ternary Operators
          </Button></Link>
           <Link to="/SpreadOperator"><Button variant="contained" color="inherit">
           Spread Operators
          </Button></Link>
    </div>
  )
}

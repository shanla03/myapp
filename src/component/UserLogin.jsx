import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function UserLogin() {


  const host= "http://localhost:2000";
  const[userData, setUserData] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit =  (e) => {
    e.preventDefault();

    axios.post(`${host}/user/login`, userData)
    // res is the Axios response object;
    .then((res) => {
      console.log(res);
      if(res.data.success) {
       localStorage.setItem("userToken", JSON.stringify(res.data.userToken))
       alert("Login successful");
       nav('/'); // Redirect to home page after successful login  
      }else{
        alert("Please enter valid details");
      }
    })
    .catch((error)=> {
      console.log(error);
      alert("Error occurred during login");
    });
  };
  console.log(userData, "userdata");
  return (
    <div>
     <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 },width:'400px',
       background: 'linear-gradient(180deg, #92dbefff, #dadad8ea 50%)',margin:'150px auto',paddingBottom:'40px',borderRadius:'10px'}}
      noValidate
      autoComplete="off"
    >
         <Typography sx={{textAlign:'center',padding:'20px'}}>Login</Typography>
      <div style={{display:"flex",flexDirection:"column" ,justifyContent:'center',alignItems:"center"}}>
       
        <TextField
          id="outlined-email-input"
          label="Email"
          name="email"
          onChange={handleChange}
          type="email"
          autoComplete=""
          sx={{ width: '300px'}}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          autoComplete=""
          sx={{ width: '300px'}}
        />
        </div>
         <Button variant="contained"  onClick={handleSubmit} style={{width:'300px',margin:'40px'}}>Login</Button>
         <p style={{marginLeft:'60px'}}>Dont have an account? <Link to="/Register">Register</Link></p>
        </Box>
      
    </div>
  )
}

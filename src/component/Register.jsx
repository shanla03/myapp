import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

      const nav = useNavigate();
      const host= "http://localhost:2000";

        const[registerData, setRegisterData] = useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        password:'',
        status:'active'
    });
    console.log(registerData,"registerData")

        const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${host}/user/userinsert`, registerData);
            alert("Registered successfully");
            nav('/Login');
        }catch (error) {
            console.log(error);
            alert("Error occurred during registration");
        }
    };

  return (
    <div>
      
       <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 },width:'400px',
       background: 'linear-gradient(180deg, #92dbefff, #dadad8ea 50%)',margin:'150px auto',paddingBottom:'40px',borderRadius:'10px'}}
      noValidate
      autoComplete="off"
    >
         <Typography sx={{textAlign:'center',padding:'20px'}}>Register</Typography>
      <div style={{display:"flex",flexDirection:"column" ,justifyContent:'center',alignItems:"center"}}>
       
        <TextField
          id="outlined-name-input"
          label="Name"
          name="name"
          type="text"
          onChange={handleChange}
          autoComplete="on"
          sx={{ width: '300px' }}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          name="email"
          onChange={handleChange}
          type="email"
          autoComplete="on"
          sx={{ width: '300px'}}
        />
        <TextField
          id="outlined-name-input"
          label="Phone"
          name="phone"
          onChange={handleChange}
          type="number"
          autoComplete="on"
          sx={{ width: '300px' }}
        />
        <TextField
          id="outlined-name-input"
          label="Address"
          type="text"
          name="address"
          onChange={handleChange}
          autoComplete="on"
          sx={{ width: '300px' }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="on"
          sx={{ width: '300px'}}
        />
        </div>
         <Button variant="contained" style={{width:'300px',margin:'40px'}} onClick={handleSubmit}>Register</Button>
         <p style={{marginLeft:'60px'}}>Already  have an account <Link to="/Login">Login</Link></p>
        </Box>
    </div>
  )
}

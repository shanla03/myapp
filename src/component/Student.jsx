import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    CssBaseline,
    Box,
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert
} from '@mui/material';

export default function Student() {

      const host = "http://localhost:2000";
      const nav = useNavigate();
      const  [student ,setStudent ] = useState({
        sname:"",
        semail:"",
        sphone:"",
        sage:"",
        saddress:""
      })

      const handleChange =(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
      };
      console.log(student,"student");

      const handlesubmit = async(e)=>{
        e.preventDefault();

        await axios.post(`${host}/student/insertstudent`,student)
        .then((res)=>{
            if(res.data){
            alert("student added successfully")
            // nav("/vstudent")
        }else{
            console.log("failed  to add student")
        }
      })
      .catch((err) =>{
          console.log(err);
          alert("error while adding student")
      });
    };

  return (
    <div>
      
       <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: 20,
        marginBottom: "50px",
        background: "linear-gradient(180deg, #04bac7ff, #e1ffea 80%)",
        padding: "20px",
        borderRadius: "10px",
        width: "1000px"
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Inserting student Details
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Student Name"
            name="sname"
            autoComplete="text"
            onChange={handleChange}  
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="semail"
            label="Email"
            type="email"
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="sphone"
            onChange={handleChange}
            label="Phone"
            type="number"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="sage"
            onChange={handleChange}
            label="Age"
            type="number"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="saddress"
            onChange={handleChange}
            label="Address"
            type="text"
            multiline
            rows={4}
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handlesubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>

  
    </Container>

    </div>
  )
}

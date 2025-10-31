import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
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

export default function UpdateStud() {

    const host = "http://localhost:2000";
    const { id } = useParams();
    const navigate = useNavigate();
    const  [updatedata ,setUpdatedata ] = useState({
      name:"",
      email:"",    
      phone:"",
      age:"",
      address:""
    });


      useEffect(() =>{
            axios.get(`${host}/student/single/${id}`)
            .then((res) =>{
            console.log(res.data.data,"single data");
            setUpdatedata(res.data.data);
            })
            .catch((err) =>{
            console.log(err);
            });
        },[id]);


    const handleChange =(e)=>{
      setUpdatedata({...updatedata,[e.target.name]
        :e.target.value});
    }

    const handleSubmit = async (e)=> {
            e.preventDefault();
            axios.put(`${host}/student/update/${id}`,
              updatedata)
            .then((res) =>{
            alert("Data updated successfully",res.data);
            navigate('/Vstudent');
            })
            .catch((err) =>{
            console.error('Error updating data',err);
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
          Update student Details
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            value={updatedata.name}
            label="Student Name"
            name="name"
            autoComplete="text"
            onChange={handleChange}  
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            value={updatedata.email}
            label="Email"
            type="email"
            onChange={handleChange}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone"
            value={updatedata.phone}
            onChange={handleChange}
            label="Phone"
            type="number"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="age"
            value={updatedata.age}
            onChange={handleChange}
            label="Age"
            type="number"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            value={updatedata.address}
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
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Box>

  
    </Container>

    </div>
  )
}

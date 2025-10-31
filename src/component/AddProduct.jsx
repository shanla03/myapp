import React, {useState} from 'react';
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

export default function AddProduct() {

  
  const  [insert ,setInsert ] = useState({})
  

  let initialValue;
  if(localStorage.getItem("plant")===null){
    // If it’s null, that means there’s no data saved yet, so you initialize with an empty array [].
    initialValue=[];
  }else{
    initialValue=JSON.parse(localStorage.getItem("plant"))
  }

   // value: array of all plant records
  const [value ,setValue]=useState(initialValue)

  const handleChange =(e)=>{
    console.log({
      [e.target.name]:e.target.value
    })
    setInsert({
      ...insert,
      [e.target.name]:e.target.value

    })

  }

  const handlesubmit = (e)=>{
    e.preventDefault();


    //     If there are no plants yet → use 1 as the first p_id.
// Else → get the p_id of the last plant, and add 1 to it.
  const newPlantId = value.length === 0? 1: value[value.length-1].
  p_id+1;
    const details= {
      p_id:newPlantId,
      ...insert
    }
    const upadtedValue =[...value,details];
    setValue(upadtedValue);
    localStorage.setItem("plant",JSON.stringify(upadtedValue))
  }
  


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
          Inserting form
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Product Name"
            name="name"
            autoComplete="text"
            onChange={handleChange}  
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="availability"
            label="Availability"
            type="number"
            onChange={handleChange}
            autoComplete="tel"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="price"
            onChange={handleChange}
            label="Price"
            type="number"
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            onChange={handleChange}
            label="Description"
            type="text"
            multiline
            rows={4}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            label="Image Link"
            fullWidth
            name="image"
            onChange={handleChange}
            type="text"
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

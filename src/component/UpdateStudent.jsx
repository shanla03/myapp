// import React from 'react'

// export default function UpdateStudent() {
//   return (
//     <div>
      
//         <Container
//             component="main"
//             maxWidth="xs"
//             style={{
//               marginTop: 20,
//               marginBottom: "50px",
//               background: "linear-gradient(180deg, #04bac7ff, #e1ffea 80%)",
//               padding: "20px",
//               borderRadius: "10px",
//               width: "1000px"
//             }}
//           >
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Inserting student Details
//               </Typography>
//               <Box component="form" noValidate sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Student Name"
//                   name="sname"
//                   autoComplete="text"
//                   onChange={handleChange}  
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="semail"
//                   label="Email"
//                   type="email"
//                   onChange={handleChange}
//                   autoComplete="off"
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="sphone"
//                   onChange={handleChange}
//                   label="Phone"
//                   type="number"
//                   autoComplete="off"
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="sage"
//                   onChange={handleChange}
//                   label="Age"
//                   type="number"
//                   autoComplete="off"
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="saddress"
//                   onChange={handleChange}
//                   label="Address"
//                   type="text"
//                   multiline
//                   rows={4}
//                   autoComplete="off"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   onClick={handlesubmit}
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Submit
//                 </Button>
//               </Box>
//             </Box>
      
        
//           </Container>
//     </div>
//   )
// }

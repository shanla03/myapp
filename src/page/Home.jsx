import React from 'react'
import hero from '../assets/home1.png'
import img from '../assets/homebg2.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <div>
    <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img src={hero} alt="image" style={{ width: '100%', height: '650px', objectFit: 'cover' }} />

        <div style={{ position: 'absolute', top: '20%', left: '20%' }}>
            <h1 style={{fontSize:'80px'}} >Welcome to Our Website</h1>
            <p>Your trusted partner in success.</p>
        </div>
        </div>  
      
          <div  style={{display: 'flex',padding:'100px',gap: '70px'}}>
            <div>
              <img src={hero} alt="About us"  style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
            </div>
            <div>
              <h2 >About Us</h2>
              <p >
                We are a passionate team dedicated to delivering high-quality solutions and services to our customers.

              </p>
              <p>

                With years of experience and expertise, we strive to exceed expectations and build long-term relationships with our clients.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat in labore dolores doloremque ex ad, perferendis excepturi consequuntur voluptatum iusto laudantium non veniam provident voluptate suscipit earum natus veritatis ipsa?
              </p>
              {/* <Button variant="contained">Contact Us</Button> */}
            </div>
          </div>

<div  style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap',marginTop: '70px'}}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    
    </div>
    </div>
   
  )
}

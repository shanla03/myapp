import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from '../../assets/home1.png'
import img2 from '../../assets/homebg2.png'
import img3 from '../../assets/img.jpg'

export default function ArrayMethod() {
    let arr = ["apple", "banana", "cherry", "dates"];

    let Aobj =[{
    name: "apple",
    price: 100,
    stock: 50
    },
    {name: "banana",
    price: 50,
    stock: 30
    },
    {name: "cherry",
    price: 75,
    stock: 20
    },
    {name: "dates",
    price: 120,
    stock: 10
    }
]

const Book = [
  { title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
  image:img1},
    {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 499,
    image:img2},
    {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 279,
    image:img3
    }
]


  return (
    <div >
      {arr.map((item,index)=>{
        return(
            <div key={index}>
              <h2>{item}</h2>
            </div>
        )
      })}

      {Aobj.map((item , index)=>{
        return(
          <div key={index}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <p>{item.stock}</p>
          </div>
        )
      })}


<div style={{ display: 'flex', gap: '30px',padding:'30px' }}>
  {Book.map((book, index) => (
   <Card key={index} sx={{ width:'300px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={book.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book.price}<br/>
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     ))}
</div>


    </div>
  )
}

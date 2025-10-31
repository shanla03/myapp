import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function SingleView() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

   useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  // While the product is still null (before API finishes), it shows "Loading...".
  
  // Prevents trying to render product before it exists (avoids errors).

  if (!product) return <p>Loading...</p>;

  return (
   <div style={{ padding: '80px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
 
  <div>
    <img src={product.image} alt={product.title} width="350" height="350" />
  </div>

  
  <div>
    <h2>{product.title}</h2>
    <p><strong>Price:</strong> ${product.price}</p>
    <p>{product.description}</p>
    <p><strong>Category:</strong> {product.category}</p>
    
    <br />
    <Link to="/ProductList">
      <Button style={{ backgroundColor:"rgb(145, 10, 10)", color: "white" }}>
        Back to Products
      </Button>
    </Link>
  </div>
</div>

  )
}


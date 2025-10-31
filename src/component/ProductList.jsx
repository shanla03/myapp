import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ProductList() {

    const [products ,setProducts] = useState([]);

    const [search ,setSearch]=useState('');

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            setProducts(response.data)
        })
        .catch(error=>{
            console.error("Error fetching products",error)
        });
    },[]);

    const filterProducts= products.filter(product=>
      product.title.toLowerCase().includes(search.toLowerCase())
    )

   

  return (
    <div>
            <h1>Product List</h1>
            <input type="text"
            value={search}
            onChange={e=> setSearch(e.target.value)}
             placeholder='search products'
             style={{marginLeft:"40%",
             width:"300px",padding:"10px"}} />
             
      
      <div style={{display:"flex",gap:"30px",padding:"40px",flexWrap:"wrap"}}>
        {filterProducts.map((product,index)=>(
 
        <div style={{
            border:"2px solid #ccc",padding:40,width:250}}>
                <h4>{product.title}</h4>
                <img src={product.image} alt="" 
                style={{width:"100px",height:"100px"}} />
                <p>{product.price}</p> 
                <Link to={`/SingleView/${product.id}`}><Button style={{color:"white",backgroundColor:"red"}}>
                  View</Button></Link>
        </div>
         ))}
      </div>
    </div>
  )
}

import React, { useState } from "react";
import { useParams , Link } from "react-router-dom";

import './Product.css'




function Product(){
    const data =[ 

        { 
      
          "id": 1, 
      
          "name": "Wireless Mouse", 
      
          "category": "Electronics", 
      
          "price": 25, 
      
          "rating": 4, 
      
          "description": "A smooth and efficient wireless mouse for work and gaming.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" 
      
        }, 
      
        { 
      
          "id": 2, 
      
          "name": "Bluetooth Speaker", 
      
          "category": "Electronics", 
      
          "price": 75, 
      
          "rating": 5, 
      
          "description": "Portable speaker with high-quality sound and deep bass.", 
      
          "inStock": false, 
      
          "imageUrl": "https://images.unsplash.com/photo-1512499617640-c2f9992f5e9f" 
      
        }, 
      
        { 
      
          "id": 3, 
      
          "name": "Running Shoes", 
      
          "category": "Fashion", 
      
          "price": 50, 
      
          "rating": 3, 
      
          "description": "Comfortable and lightweight running shoes for daily use.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1528701800489-20d6d3be624c" 
      
        }, 
      
        { 
      
          "id": 4, 
      
          "name": "Coffee Maker", 
      
          "category": "Home Appliances", 
      
          "price": 100, 
      
          "rating": 4, 
      
          "description": "Brew fresh coffee in minutes with this easy-to-use coffee maker.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1509042239860-f550ce710b93" 
      
        }, 
      
        { 
      
          "id": 5, 
      
          "name": "Smartphone", 
      
          "category": "Electronics", 
      
          "price": 699, 
      
          "rating": 5, 
      
          "description": "Latest smartphone with high-resolution display and long battery life.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" 
      
        }, 
      
        { 
      
          "id": 6, 
      
          "name": "Laptop Stand", 
      
          "category": "Electronics", 
      
          "price": 30, 
      
          "rating": 4, 
      
          "description": "Ergonomic laptop stand to improve posture and reduce neck strain.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" 
      
        }, 
      
        { 
      
          "id": 7, 
      
          "name": "Denim Jacket", 
      
          "category": "Fashion", 
      
          "price": 120, 
      
          "rating": 5, 
      
          "description": "Classic denim jacket perfect for casual outings.", 
      
          "inStock": false, 
      
          "imageUrl": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" 
      
        }, 
      
        { 
      
          "id": 8, 
      
          "name": "Blender", 
      
          "category": "Home Appliances", 
      
          "price": 65, 
      
          "rating": 4, 
      
          "description": "High-speed blender ideal for smoothies and soups.", 
      
          "inStock": true, 
      
          "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001ebe1" 
      
        },
    ]
    const [discount , setdiscount]=useState(0);

    const {id} =useParams();
    console.log(id);

    const product= data.find((pro)=>pro.id===parseInt(id));
    if(!product) return <div>Product not found</div>
    const finalPrice= (product.price*(1-discount/100)).toFixed(2);

    return (
        <>
        <div className="productDetail">
        <div>
            <h1 > Product Name: {product.name}</h1>
            <p> Product Description  {product.description}</p>
            <p> Product Category
            {product.category}
            </p>
            <p> Product Price:{product.price}</p>
            <p> Product Rating : {product.rating}</p>
            <p> Product In stock :  {product.inStock ? "yes" : "No"}</p>
        </div>
        <div>
            <label>Discount:
                <input type="range" min="0" max="50" value={discount} onChange={(e)=> setdiscount(e.target.value)}/>
            </label>
            <p>Final Price :${finalPrice}</p>
        </div>
        </div>
       
        </>
    )
}
export default Product;
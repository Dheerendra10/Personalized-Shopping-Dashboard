
import { useEffect, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";

function HomePage(){

    const apiData =[ 

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

     const [filters , setFilters] =useState({category: '' ,price: [0, 100] , rating: 0, inStock: false});
    const [list , setList] = useState(apiData);
    
    const filteredProducts=apiData.filter((product)=>{
        const withinPrice=product.price>=filters.price[0]&& product.price<=filters.price[1];
        const meetRating= product.rating>=filters.rating;
        const inStockFilter= !filters.inStock || product.inStock;

        return withinPrice && meetRating&& inStockFilter
    });


    useEffect(()=>{

        // const callApi= ()=>{
        //     fetch('http://185.193.19.112:22030/api/v1/test/products')
        //     .then(response=>response.json())
        //     .then(data=>console.log(data))

        // }

        // callApi(); 

        
    }, [])

   
    return (
        <>
      <h1  className="dashboad"> shopping dashboad</h1>
      <div className="product-grid">
      {filteredProducts.map((product)=>(
        <div key={product.id}> <img width="50%" height="200" src={product.imageUrl}/>
        <h3 >{product.name}</h3>
        <p>{product.rating}</p>
        <p>{product.price}</p>
        <Link to={`/product/${product?.id}`}> Product deatails</Link>
        </div>
      ))
}
      </div>
     
        </>
    )
}

export default HomePage;
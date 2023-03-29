import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  
  return (
    <div className='flex container mx-auto'>
        <div className='w-8/12'>
           {
            products.map(product => <Product product={product}/>)
           }
            
        </div>
        {/* Order Summary */}
        <aside className='bg-amber-300 w-4/12'>Aside</aside>
    </div>
  )
}

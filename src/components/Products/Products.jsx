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
        <div className='w-9/12 grid grid-cols-3 gap-4 m-4'>
           {
            products.map(product => <Product key={product.id} product={product}/>)
           }
            
        </div>
        {/* Order Summary */}
        <aside className='bg-amber-300 w-3/12'>Aside
       
        </aside>

    </div>
  )
}

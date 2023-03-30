import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../AddToDB/AddToDB';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from './Product';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const [cartItems, setCartItems] = useState([]);

    useEffect(() =>{
      const storedCart = getShoppingCart();
      let saveCart = [];

      for(let id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
        }
      }
      setCartItems(saveCart);
      // console.log(saveCart);

    }, [products])

    const handleAddToCart = (items)=>{
      const newCart = [...cartItems, items];
      setCartItems(newCart);
      addToDb(items.id);
    }
  
  return (
    <div className='flex container mx-auto'>
        <div className='w-9/12 grid grid-cols-3 gap-4 m-4'>
           {
            products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>)
           }
            
        </div>
        {/* Order Summary */}
        <aside className='bg-red-200 w-3/12 mt-4'>
          <OrderSummary  cartItems={cartItems}/>       
        </aside>

    </div>
  )
}

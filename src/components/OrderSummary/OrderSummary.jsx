import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function OrderSummary({cartItems}) {

  let totalPrice = 0;
  let totalShipping = 0;
  let totalTax = 0;
  
  for (let i of cartItems) {
    totalPrice += i.price;
    totalShipping += i.shipping;
    totalTax = i.price * .2;
  }

  let grandTotal = totalPrice + totalShipping + totalTax;
  // console.log(orderItems.length);
  return (
    <div className='flex flex-col mx-4 space-y-4'>
      <h2 className='text-xl text-center my-6 font-bold'>Order Summary</h2>
      <div className='space-y-4'>
        <h4>Selected Items: {cartItems.length}</h4>
        <h4>Total Price: ${totalPrice}</h4>
        <h4>Total Shipping Charge: ${totalShipping}</h4>
        <h4>Tax: ${totalTax}</h4>
        <h3>Grand Total: ${grandTotal}</h3>        
      </div>
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Clear Cart   <FontAwesomeIcon icon={faTrash} /></button>
      <button type="button" className="focus:outline-none text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-green-800">Review Order  <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}

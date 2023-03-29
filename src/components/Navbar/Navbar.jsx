import React from 'react';
import Logo from "../../images/Logo.svg";

export default function Navbar() {
  return (
    <nav className='container mx-auto py-4 px-2 flex justify-between items-center bg-slate-600'>
        <img src={Logo} alt='Logo' />
        <ul className='text-white flex justify-around w-4/12'>
            <li className='hover:text-orange-500 font-bold'><a href="#">Order</a></li>
            <li className='hover:text-orange-500 font-bold'><a href="review">Review</a></li>
            <li className='hover:text-orange-500 font-bold'><a href="login">Login</a></li>
        </ul>
    </nav>
  )
}

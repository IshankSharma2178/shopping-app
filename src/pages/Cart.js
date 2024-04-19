import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItems from "../components/CartItems";

function Cart() {
    
    const {cart}=useSelector((state)=> state);
    const [totalAmount,settotalAmount]=useState(0)

    useEffect(()=>{
        settotalAmount(cart.reduce((acc,curr)=> acc+curr.price,0))
    },[cart])

  return (
    <div className='flex  max-w-[1200px] justify-between w-full m-auto mt-10 mb-10 md:mb-0 '>
      
        {
            cart.length > 0 ?
            (<div className='grid grid-cols-1  md:grid-cols-2 gap-4 gap-x-10 px-4 md:pl-10 '>
                <div className=''>
                {
                    cart.map((item,index)=>(
                        <CartItems key={item.id} item={item} itemIndex={index} />
                    ))
                }
                </div>
                <div className='flex px-10 mt-10  flex-col '>
                    <div className='text-[1.3rem] uppercase font-semibold text-[#15803d]'>Your Cart</div>
                    <div className='text-[#15803d] mb-5 font-semibold text-5xl    uppercase '>Summary</div>
                    <p className='mb-3'> 
                        <span className='text-gray-700  font-semibold text-xl'>Total Items : {cart.length}</span>
                    </p>
                    <div className='mb-8'>
                        <p className='text-gray-700 font-semibold text-xl'>Total Amount: <spna className="font-bold text-black">${totalAmount}</spna></p>
                    </div>
                    <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>Checkout Now</button>
                </div>

            </div>)
            :
            (<div className='flex justify-center w-full flex-col items-center min-h-[80vh]  '>
                <h1 className='text-[20px] font-semibold text-[#374151] uppercase'>Your cart is empty!</h1>
                <Link to="/">
                    <button className='border-[2px] p-2 mt-5 rounded-xl px-10 font-semibold text-[1.2rem] text-white bg-[#16a34a] hover:bg-[#faf5ff] hover:text-[#16a34a] 
                     uppercase border-[#16a34a] h-[3rem] transition duration-200 ease-in'>Shop Now </button>
                </Link>
            </div>)
        }
    </div>
  )
}

export default Cart
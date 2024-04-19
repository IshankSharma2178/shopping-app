import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from "../assests/logo.png";

function Navbar() {

    const {cart}=useSelector((state)=>state)
  return (
    <div className='bg-[#0f172a] '>
        <div className='flex  h-[4.5rem]  justify-between md:justify-between max-w-[1100px] items-center m-auto '>
            
            <NavLink to="/">
                <div className='md:m-0 ml-10'>
                    <img width={160} src={logo}/>
                </div>
            </NavLink>

            <div className='flex gap-x-6 pl-1 items-center text-[#ffff]'>
            
                <NavLink to="/">
                <p className='text-[1.2rem] hidden md:inline hover:text-[#4ade80] transition duration-200 ease-in'>Home</p>
                </NavLink>
            
                <NavLink to="/cart">
                    <div className='relative md:m-0 mr-10'>
                        <FaCartShopping className='hover:text-[#4ade80] transition duration-200 ease-in ' style={{fontSize:"1.4rem"}} />
                            
                            {
                                cart.length >0 &&
                                <span className='absolute animate-bounce -top-1 -right-2 bg-green-600 text-sm rounded-full w-5 h-5 flex
                                                    justify-center items-center text-white'>{cart.length}</span>
                            }
                    </div>
                </NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar
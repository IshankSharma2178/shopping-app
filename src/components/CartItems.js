import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { remove } from "../redux/Slices/CartSlice";

function CartItems({item,itemIndex}) {
    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state)

    const removeFromCart=()=>{
        console.log(item.id);
        dispatch(remove(item.id))
        toast.success("Removed item")
    }
  return (
    <div>
        <div className='flex justify-center md:flex-nowrap gap-x-7 md:mb-10 mb-0 flex-wrap items-center'>
            <div className='w-[50%] mb-10 md:mb-0'>
                <img className='object-cover' src={item.image}/>
            </div>
            <div >
                <h1 className='text-2xl  text-slate-700 font-bold'>{item.title}</h1>
                <h1 className='text-base pt-5 text-slate-700 '>{item.description.split(" ").slice(0,15).join(" ")}</h1>
                <div>
                    <div className='flex items-center mt-7  justify-between'>
                    <p className=''><span className='text-[#16a34a] font-bold text-lg'>$ {item.price}</span></p>
                    <div className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3
                                        hover:'   
                    onClick={removeFromCart}
                    >
                    <MdDelete className='group-hover:text-white text-[#c45959] ' />

                    </div>
                    </div>
                </div>

            </div>

        </div>
        
        {
                    cart.length > 1 ?
                    (itemIndex ===cart.length - 1?
                    (<div></div>):
                    (<hr className=' my-5 border-t-2  border-slate-500'></hr>)
                    ):(<div></div>)
                }
    </div>
  )
}

export default CartItems
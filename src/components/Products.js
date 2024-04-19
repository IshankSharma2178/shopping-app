import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from "../redux/Slices/CartSlice";

function Products({post}) {
    const {cart}=useSelector((state)=>state)
    const dispatch =useDispatch();

    // console.log(cart)

    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added to Cart")
    }

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.error("Item removed from Cart")
    }

  return (
    <div >
    <div className=' flex flex-col gap-3   min-h-full group   rounded-xl   shadow-[0_3px_10px_rgb(0,0,0,0.2)]   justify-between items-center hover:scale-100 md:hover:scale-105 transition duration-200 ease-in  md:hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
        <div >
            <p className='text-gray-700 font-semibold text-lg text-center truncate w-50  mt-3'>{post.title.length>15?(<div> {`${post.title.slice(0,14)}...`} </div>):(<div>{post.title}</div>)}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[13px] text-center'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div  className='h-[180px]'>
            <img className='h-full p-3 w-full' src={`${post.image}` }/>
        </div>
        <div className='flex pb-5 justify-around items-center w-full'>
            <p className='font-bold text-[#16a34a]'>${post.price}</p>
        <div className=' border-[#374151] group-hover:bg-[#374151] group-hover:border-slate-800 ease-in group-hover:text-white transition duration-200 rounded-3xl text-sm text-[#374151] child font-semibold border-2 px-3 py-1'>

        {
            cart.some((p)=>p.id==post.id) ?
                (<button onClick={removeFromCart}>Remove Item</button>):
                (<button onClick={addToCart}>Add To Cart</button>)
                
        }
        </div>
        </div>

    </div>
    </div>
  )
}

export default Products
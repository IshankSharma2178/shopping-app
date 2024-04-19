import React, { useEffect, useState } from 'react';
import Products from "../components/Products";
import Spinner from "../components/Spinner";

function Home() {
    const API_URL="https://fakestoreapi.com/products"
    const [loading ,setLoading] = useState(false)
    const [post,setPost] = useState([])

    async function fetchProductData(){
        setLoading(true);
        try{
            const res=await fetch (API_URL)
            const data=await res.json()
            setPost(data)
        }
        catch(err){
            console.log("networ errror")
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData()
    },[])

    return (
    <div>
        {
            loading?                 
            (<Spinner/>):
            (
                post.length > 0 ?
                (<div className='min-h-[80vh]   grid sm:grid-cols-2 justify-center md:grid-cols-3 gap-x-5 gap-y-10 lg:grid-cols-4  mx-auto p-10'>
                   { post.map((post)=>(
                        <Products key={post.id} post={post}/>
                   ))}
                </div>):
                (<div >No Data Found</div>)
            )


        }
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

function Post({post}) {
   
  return (
    <>
        <div className=" text-center border-2 border-emerald-600  flex flex-col">
            <div className='mt-2'>
            <h1 className='text-md font-bold text-gray-500 '> {post.name}</h1>
            </div>
           <div className='grow mt-3'>
           <p className='text-xl font-semibold '>{post.email}</p>
           </div>
            
            <Link to={`/post/${post.id}`} > <button className='btn mt-10'>Show Details</button></Link>
        </div>


    </>
  )
}

export default Post
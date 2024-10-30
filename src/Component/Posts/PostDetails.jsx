import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function PostDetails() {
    const post = useLoaderData()
    
  return (
    <div className='border border-teal-500 text-center py-10'>
       <div className='w-56 border-2 border-cyan-500 p-10 mx-auto'>
       <h1>Id : {post.id}</h1>
       <h1>Phone : {post.phone}</h1>
       </div>
       <Link to="/posts"><button className='btn mt-5'>Go to Posts</button></Link>
    </div>
  )
}

export default PostDetails
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from './Post'

function Posts() {
    const posts = useLoaderData()
    
  return (
    <div>
        <h1 className='text-4xl font-bold text-center'>Posts : {posts.length}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
        {
            posts.map(post => <Post post={post} /> )
        }
        </div>
    </div>
  )
}

export default Posts
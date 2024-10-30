import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Contact() {
    const contact = useLoaderData()
  return (
    <div className='w-full '>
       <div className=' border-2 w-64 p-10 mx-auto'>
       <p className='text-gray-500 font-semibold'>Phone : {contact.phone}</p>
       </div>
       <div className='text-center mt-20'>
       <Link to="/card" ><button className="btn">Go to Card</button></Link>
       </div>
    </div>
  )
}

export default Contact
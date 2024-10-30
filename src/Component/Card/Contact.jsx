import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

function Contact() {
    const contact = useLoaderData()
    const navigate = useNavigate()
    const handleCt = () => {
      navigate(-1)
    }
  return (
    <div className='w-full '>
       <div className=' border-2 w-64 p-10 mx-auto'>
       <p className='text-gray-500 font-semibold'>Phone : {contact.phone}</p>
       </div>
       <div className='text-center mt-20'>
       <Link to="/card" ><button className="btn">Go to Card</button></Link>
       <button onClick={handleCt} className='btn ml-2 bg-teal-400 text-white'>← Go Back</button>
       </div>
    </div>
  )
}

export default Contact
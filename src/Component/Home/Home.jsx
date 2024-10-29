import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
   <div className=''>
  
   <div className='fixed top-0 left-0 right-0 z-10'>
 <Navbar/>
   </div>
    <Outlet/>
    <div className=' ' >
    <Footer />
    </div>
   </div>
    </>
  )
}

export default Home
import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { BallTriangle } from 'react-loader-spinner'

function Home() {
  const navigation = useNavigation()
  return (
    <>
   <div className=''>
  
   <div className='fixed top-0 left-0 right-0 z-10'>
 <Navbar/>
   </div>
  
  {
    navigation.state === "loading" ? <div className='w-full py-10 flex items-center text-center justify-center'> <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    
    /> </div> : <div className='my-20'>
    <Outlet/>
    </div>
  }
  
    
    <div className='' >
    <Footer />
    </div>
   </div>
    </>
  )
}

export default Home
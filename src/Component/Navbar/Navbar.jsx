import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=''>
        <div class=" md:flex md:justify-between bg-base-300">
  <div class="text-center md:text-start">
    <a class="btn btn-ghost text-xl font-bold">R-S</a>
  </div>
  <div class="text-center md:text-start">
    <ul class="menu menu-horizontal px-1 font-semibold text-gray-600">
      <li><Link to="/login">LogIn</Link></li>
      <li><Link to="/card">Card</Link></li>
      <li><Link to="/main">Main</Link></li>
      <li><Link to="/posts">Posts</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
import React from 'react'
import {  NavLink } from 'react-router-dom'
import './Nav.css'

function Navbar() {
  return (
    <div className=''>
        <div class=" md:flex md:justify-between bg-base-300">
  <div class="text-center md:text-start">
    <a class="btn btn-ghost text-xl font-bold">R-S</a>
  </div>
  <div id='navLink' class="text-center md:text-start">
    <ul  id='sidebar' class="menu menu-horizontal px-1 font-semibold text-gray-600">
      <li><NavLink  to="/login">LogIn</NavLink></li>
      <li><NavLink  to="/card">Card</NavLink></li>
      <li><NavLink  to="/main">Main</NavLink></li>
      <li><NavLink  to="/posts">Posts</NavLink></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
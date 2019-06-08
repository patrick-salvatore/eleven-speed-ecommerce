import React from 'react'
import {Link} from 'react-router-dom'

// Styling 
import './Navbar.scss'
import {FaShoppingCart} from 'react-icons/fa'

// components
import Dropdown from './Dropdown/Dropdown'

export default function Navbar() {
  return (
    <div className = 'navContainer'>
      <div className = 'navTop'>
        <div className = 'top-left'>
          <p>Welcome To Our Shop!</p>
        </div>
        <div className = 'top-right'>
          <span><Link to = '/Register'>Register</Link></span>
          <span> | </span>
          <span><Link to= '/Signin'>Login</Link></span>
        </div>

 
      </div>
      <div className = 'navBottom'>
        <span ><Link to = '/' className = 'logo'>Eleven Speed</Link></span>
        <Dropdown/>
        <div className= 'cartIcon'>
          <span><Link to= '/Chart'><FaShoppingCart/>Cart</Link></span>
        </div>
      </div>
    </div>
  )
}

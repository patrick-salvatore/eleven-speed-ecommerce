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
      <div className = 'navMenu'>
        <span ><Link to = '/' className = 'logo'>Eleven Speed</Link></span>
        <Dropdown/>
        <div className= 'cartIcon'>
          <span><Link to= '/Chart'><FaShoppingCart/>Cart</Link></span>
        </div>
      </div>
      
    </div>
  )
}

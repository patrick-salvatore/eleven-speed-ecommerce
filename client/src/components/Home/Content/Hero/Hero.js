import React from 'react'
import { Link } from 'react-scroll'
// styling
import './hero.scss'

const Hero = () => {
    return (
        <div className = 'hero-section'> 
         <div className = 'hero-item'>
           <div className = 'hero-content'> 
             <h1>30% OFF ALL <br/> PRODUCTS THIS MONTH!</h1>
             <Link activeClass="active" to="sales" spy={true} smooth={true} offset={0} duration={1100}><button>SHOP NOW</button></Link>
           </div>
         </div>
      </div>
    )
}

export default Hero


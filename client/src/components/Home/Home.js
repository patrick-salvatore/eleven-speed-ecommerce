import React, { Component } from 'react'

// styling 
import './Home.scss'

// components
import Hero from './Content/Hero/Hero'
import PopularProducts from './Content/Products/PopularProducts'

class Home extends Component {
  render() {
    return (
      <div className = 'homePage'>
       <Hero/>
       <PopularProducts/>
      </div>
    )
  }
}

export default Home
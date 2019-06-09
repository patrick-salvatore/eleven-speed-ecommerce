import React, { Component } from 'react'

// styling 
import './Home.scss'

// components
import Hero from './Content/Hero/Hero'
import PopularProducts from './Content/Products/PopularProducts'
import NewLetter from './Content/NewsLetter/NewsLetter'
import Button from './Button/Button';
import ServicesList from './Content/ServicesList/ServicesList'


class Home extends Component {
  render() {
    return (
      <div className = 'homePage'>
       <Hero/>
       <PopularProducts/>
       <NewLetter/>
       <ServicesList/>
       <Button/>      
      </div>
    )
  }
}

export default Home
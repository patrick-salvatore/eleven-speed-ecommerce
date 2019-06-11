import React, { Component } from 'react'

// styling 
import './Home.scss'

// components
import Hero from './Content/Hero/Hero'
import PopularProducts from './Content/Products/PopularProducts'
import NewsLetter from './Content/NewsLetter/NewsLetter'
import Button from './Button/Button';
import ServicesList from './Content/ServicesList/ServicesList'
import Sales from './Content/Sales/Sales'


class Home extends Component {
  render() {
    return (
      <div className = 'homePage'>
       <Hero/>
       <PopularProducts/>
       <NewsLetter/>
       <ServicesList/>
       <Sales/>
       <Button/>      
      </div>
    )
  }
}

export default Home
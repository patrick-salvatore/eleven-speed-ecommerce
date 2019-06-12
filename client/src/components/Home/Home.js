import React, { Component } from 'react'

// styling 
import './Home.scss'

// components
import Hero from './Content/Hero/Hero'
import Content from './Content/Content'
import Button from './Button/Button';
import Footer from './Content/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className = 'homePage'>
       <Hero/>
       <Content/>
       <Button/>
       <Footer/>
      </div>
    )
  }
}

export default Home
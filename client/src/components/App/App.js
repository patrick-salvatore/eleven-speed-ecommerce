import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar'

// react router
import {Switch, Route} from 'react-router-dom';

// components
import Signin from '../Auth/Signin'
import Signup from '../Auth/Signup'
import Checkout from '../Checkout/Checkout'
import Home from '../Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Route exact path= '/' component = {Home}/>
        
      <Switch>
        <Route exact path = '/Signin' component = {Signin}/>
        <Route exact path = '/Register' component = {Signup}/>
        <Route exact path = '/Checkout' component = {Checkout}/>
      </Switch>
    </div> 
  );
}

export default App;

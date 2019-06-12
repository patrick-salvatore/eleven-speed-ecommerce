import React from 'react';
import './App.css';

// react router
import {Switch, Route} from 'react-router-dom';

// components
import Navbar from '../Navbar/Navbar'
import Signin from '../Auth/Signin'
import Signup from '../Auth/Signup'
import Checkout from '../Checkout/Checkout'
import Home from '../Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/> 
        <Switch>
          <Route exact path= '/' component = {Home}/>
          <Route exact path = '/Signin' component = {Signin}/>
          <Route exact path = '/Register' component = {Signup}/>
          <Route exact path = '/Checkout' component = {Checkout}/>
        </Switch>
    </div> 
  );
}

export default App;

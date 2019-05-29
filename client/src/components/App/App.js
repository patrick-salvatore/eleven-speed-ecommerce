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
      <Switch>
        <Route exact path= '/' component = {Home} />
        <Route path = '/signin' component = {Signin}/>
        <Route path = '/signup' component = {Signup}/>
        <Route path = '/checkout' component = {Checkout}/>
      </Switch>
    </div> 
  );
}

export default App;

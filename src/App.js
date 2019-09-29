import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'

// The switch element tag here acts like a switch statement
// It will only route to one  destination while ignoring other routes
// We need to place the header OUTSIDE of the switch component. Why ? So our header is available for all pages

function App() {
  // return <div>Hello World</div>;
  return (
    <div>
      <Header /> 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

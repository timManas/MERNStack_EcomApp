import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// The switch element tag here acts like a switch statement
// It will only route to one  destination while ignoring other routes
// We need to place the header OUTSIDE of the switch component. Why ? So our header is available for all pages

class App extends React.Component {
  unsubscribeFromAuth = null

  // Check if the same user is signed in. If yes, they dont change the session. Firebase will assume
  // Same user is logged in
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // This will close the subscription if the user is logged out, session change...etc
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }  
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
)

// Question: What is dispatch in this case ? 
// - dispatch() is a way for redux to know what object is being passed is an action object that will be passed it to user
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App)

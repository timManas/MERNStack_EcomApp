import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux Stuff here
import { Provider } from 'react-redux';
import store from './redux/store';         // This is the STORE !!!! Saves all the states here

import "./index.css";
import App from "./App";


// The BrowserRouter wraps around the application
// That way we can get all the functionality that the router provides
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

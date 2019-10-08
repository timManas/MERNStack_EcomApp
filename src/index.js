import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

// Redux Stuff here
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';      // This is the STORE !!!! Saves all the states here

import "./index.css";
import App from "./App";


// The BrowserRouter wraps around the application
// That way we can get all the functionality that the router provides
// We want our app to always have access to the persistor 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
     
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import "./App.css";

import {Route} from 'react-router-dom' 

import HomePage from "./pages/homepage/homepage.component";

function App() {
  // return <div>Hello World</div>;
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

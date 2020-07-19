import React from 'react';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import WelcomePage from "./pages/welcomePage/welcomePage";
import HomePage from "./pages/homePage/homePage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component= {WelcomePage} />
        <Route exact path="/home" component ={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;

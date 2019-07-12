import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent';

import './App.css';

function App() {
  return (
    <Router>
      <div className="AppHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/headercomponent" component={HeaderComponent} />
        </Switch>
      </div>
    </Router>
        
  );
}

export default App;
import React, { Component } from 'react';
import './App.css';

import { hot } from 'react-hot-loader';
// import Home from './components/ui/Home/Home';
// import SignIn from './components/ui/Signin/SignIn';
// import SignUp from './components/ui/Signup/SignUp';
import Dashboard from './components/ui/Dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>  
      </div>
    );
  }
}

export default hot(module)(App);
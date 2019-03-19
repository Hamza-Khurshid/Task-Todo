import React, { Component } from 'react';
import './App.css';

import { hot } from 'react-hot-loader';
import Dashboard from './components/ui/Dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/todoStore';


class App extends Component {
  render() {
    return (
      <Provider store= { store }>
        <div className="App">
          <BrowserRouter>
            <Dashboard />
          </BrowserRouter>  
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './containers/home';
import Profile from './containers/profile';
import Tracks from './containers/tracks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header logo={logo}/>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/tracks' component={Tracks} />
        </div>
      </Router>
    );
  }
}

export default App;

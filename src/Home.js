import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2 className="Greeting">Welcome to TEST JS</h2>
        </div>
      </div>
    );
  }
}

export default Home;

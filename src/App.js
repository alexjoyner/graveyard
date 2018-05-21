import React, { Component } from 'react';
import "./Global.css";
import {Header, colors} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
            color={colors.primary} 
            height={'67px'} 
            fontSize={'25px'} 
            logoText={'Dashboard Demo'} 
            sticky />
        <GaugeBlockArray></GaugeBlockArray>
      </div>
    ); 
  }
}

export default App;
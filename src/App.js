import React, { Component } from 'react';
import {Header, colors} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import {injectGlobal} from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100');
  body {
    padding: 0;
    margin: 0;
    margin-top: 80px;
    font-family: 'Roboto', 'sans-serif';
    background-color: bisque;
  }
`

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
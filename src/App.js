import React, { Component } from 'react';
import {Header, colors, SideBar} from 'ro-component-library';
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
        <div className={'PageBody'}>
          <GaugeBlockArray></GaugeBlockArray>
        </div>
        <SideBar>
            <h2>Taco Stuff</h2>
            <ul>
                <li>Shells</li> 
                <li>Beans</li>
                <li>Tomatoes</li>
                <li>Sour Cream</li>
                <li>Cheese</li>
            </ul> 
        </SideBar>
      </div>
    ); 
  }
}

export default App;
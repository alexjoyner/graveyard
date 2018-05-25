import React, { Component } from 'react';
import {Header, colors, SideBar} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import {AuthModal} from './organisms/AuthModal';

class App extends Component {
  state = {
    authenticated: false
  }
  setAuthenticated(){
    this.setState({
      authenticated: true
    })
    this.forceUpdate();
  }
  render() {
    return (
      <div style={{'margin-top': '80px'}}>
        <Header 
          color={colors.primary} 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky />
        <div className={'PageBody'}>
          {this.state.authenticated? <GaugeBlockArray></GaugeBlockArray> : (
            <AuthModal successAuth={() => this.setAuthenticated()}></AuthModal>
          )}
        </div>
          {this.state.authenticated? (
          <SideBar>
            <div>
              <h2>Taco Stuff</h2>
              <ul>
                <li>Shells</li>
                <li>Beans</li>
                <li>Tomatoes</li>
                <li>Sour Cream</li>
                <li>Cheese</li>
                <li>Avacado</li>
              </ul>
            </div>
          </SideBar>
          ) : (
            null
          )}
      </div>
    ); 
  }
}

export default App;
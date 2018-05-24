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
      <div>
        
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
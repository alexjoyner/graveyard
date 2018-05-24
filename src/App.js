import React, { Component } from 'react';
import {Header, colors} from 'ro-component-library';
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
      <div className="App">
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
      </div>
    ); 
  }
}

export default App;
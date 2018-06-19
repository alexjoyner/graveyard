import React, { Component } from 'react';
import {
  Header, colors, SideBarPage, ListItem, 
  ListHeader, CenteredContent, RoHighChart, PageOverlay} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import {AuthModal} from './organisms/AuthModal';

const SideBarContent = () => (
  <div>
    <ListHeader>Rooms</ListHeader>
    <CenteredContent>
      <ListItem>Demo Room</ListItem>
      <ListItem color={colors.primaryLight}>+ Add Room</ListItem>
    </CenteredContent>
  </div>
)

class App extends Component {
  state = {
    authenticated: false,
    historyModalShown: true
  }
  setAuthenticated(){
    this.setState({
      authenticated: true
    })
    this.forceUpdate();
  }
  render() {
    return this.state.authenticated? (
      <div style={{'margin-top': '80px'}}>
        <Header 
          color={colors.dark} 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky />
        <SideBarPage sideBarContents={<SideBarContent />} >
          <GaugeBlockArray></GaugeBlockArray>
        </SideBarPage>
        {this.state.historyModalShown?(
          <PageOverlay><RoHighChart /></PageOverlay>
        ):''}
    </div>) : (
      <AuthModal successAuth={() => this.setAuthenticated()}></AuthModal>
    );
  }
}

export default App;
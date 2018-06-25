import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Header, colors, SideBarPage, ListItem, 
  ListHeader, CenteredContent} from 'ro-component-library';
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
  render() {
    return this.props.loggedIn? (
      <div style={{marginTop: '80px'}}>
        <Header 
          color={colors.dark} 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky />
        <SideBarPage sideBarContents={<SideBarContent />} >
          <GaugeBlockArray></GaugeBlockArray>
        </SideBarPage>
    </div>) : (
      <AuthModal></AuthModal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.AuthModalReducer.loggedIn
  }
}
export default connect(mapStateToProps)(App);
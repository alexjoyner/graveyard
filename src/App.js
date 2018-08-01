import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Header, colors, SideBarPage, ListItem, 
  ListHeader, CenteredContent} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import {AuthModal} from './organisms/AuthModal';
import { HistoricalGraphModal } from './organisms/HistoricalGraphModal';
import { DashNotification } from './organisms/DashNotification';
import { MultiSelectedChartsMenu } from './organisms/MultiSelectedChartsMenu';

const SideBarContent = ({ roomCreds }) => (
  <div>
    <ListHeader>Rooms</ListHeader>
    <CenteredContent>
      <ListItem>Demo Room</ListItem>
      <ListItem color={colors.primaryLight}>+ Add Room</ListItem>
    </CenteredContent>
    <MultiSelectedChartsMenu />
  </div>
)

class App extends Component {
  render() {
    return this.props.loggedIn? (
      <div style={{marginTop: '80px'}}>
        <DashNotification />
        <Header 
          color={colors.dark} 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky />
        <SideBarPage sideBarContents={<SideBarContent {...this.props} />} >
          <GaugeBlockArray></GaugeBlockArray>
        </SideBarPage>
        <HistoricalGraphModal modalData={this.props.modalData}/>
      </div>) : (
      <AuthModal></AuthModal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.HistoricalGraphModalReducer,
    ...state.AuthModalReducer
  }
}
export default connect(mapStateToProps)(App);
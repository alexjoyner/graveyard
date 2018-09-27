import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, colors, SideBarPage } from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import { HistoricalGraphModal } from './organisms/HistoricalGraphModal';
import { DashNotification } from './organisms/DashNotification';
import { FeedbackButton } from './organisms/FeedbackButton';
import { initializeData } from './actions';
import { SideBarContent } from './organisms/SideBarContent';

class App extends Component {
  constructor(props){
    super(props);
    initializeData()(this.props.dispatch);
  }
  render() {
    return (
      <div style={{marginTop: '80px'}}>
        <DashNotification />
        <Header 
          color="dark" 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky >
          <FeedbackButton />
        </Header>
        <SideBarPage sideBarContents={<SideBarContent {...this.props} />} >
          <GaugeBlockArray></GaugeBlockArray>
        </SideBarPage>
        <HistoricalGraphModal modalData={this.props.modalData}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.HistoricalGraphModalReducer
  }
}
export default connect(mapStateToProps)(App);
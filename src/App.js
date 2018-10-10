import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, SideBarPage } from 'ro-component-library';
import { GaugeBlockArray } from './organisms/GaugeBlockArray';
import { HistoricalGraphModal } from './organisms/HistoricalGraphModal';
import { FeedbackButton } from './organisms/FeedbackButton';
import { initializeData } from './actions';
import { SideBarContent } from './organisms/SideBarContent';
import { TestNotification } from './organisms/Notifications';

export class App extends Component {
  componentDidMount() {
    this.props.initializeData();
  }
  render() {
    return (
      <div style={{ marginTop: '80px' }}>
        <TestNotification />
        <Header
          color="dark"
          height="67px"
          fontSize="25px"
          logoText="Dashboard Demo"
          sticky
        >
          <FeedbackButton />
        </Header>
        <SideBarPage sideBarContents={<SideBarContent {...this.props} />} >
          <GaugeBlockArray />
        </SideBarPage>
        <HistoricalGraphModal modalData={this.props.modalData} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.HistoricalGraphModalReducer,
});
export default connect(mapStateToProps, {
  initializeData,
})(App);

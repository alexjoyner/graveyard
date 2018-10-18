import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, SideBarPage } from 'ro-component-library';
import { GaugeBlockArray } from './organisms/GaugeBlockArray';
import { HistoricalGraphModal } from './organisms/HistoricalGraphModal';
import { FeedbackButton } from './organisms/FeedbackButton';
import { getGroups } from './organisms/SideBarContent/utils/getGroups';
import { setGroups } from './organisms/SideBarContent/actions';
import { SideBarContent } from './organisms/SideBarContent';
import { TestNotification } from './organisms/Notifications';

export class App extends Component {
  async componentDidMount() {
    const groups = await getGroups();
    this.props.setGroups(groups);
  }

  render() {
    const modalData = this.props;
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
        <SideBarPage sideBarContents={<SideBarContent {...this.props} />}>
          <GaugeBlockArray />
        </SideBarPage>
        <HistoricalGraphModal modalData={modalData} />
      </div>
    );
  }
}
export default connect(null, {
  setGroups,
})(App);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Header, colors, SideBarPage, ListItem, 
  ListHeader, CenteredContent, Notification, Button} from 'ro-component-library';
import {GaugeBlockArray} from './organisms/GaugeBlockArray';
import {AuthModal} from './organisms/AuthModal';
import { HistoricalGraphModal } from './organisms/HistoricalGraphModal';

const SideBarContent = ({ roomCreds }) => (
  <div>
    <ListHeader>Rooms</ListHeader>
    <CenteredContent>
      <ListItem>Demo Room</ListItem>
      <ListItem color={colors.primaryLight}>+ Add Room</ListItem>
    </CenteredContent>
  </div>
)
class NotificationTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifShown: true,
    };
  }
  toggleModal() {
    this.setState({
      notifShown: !this.state.notifShown,
    });
  }
  render() {
    return (
      <div>
        <Notification shown={this.state.notifShown} onClose={() => this.toggleModal()}>
          <h3>Hello World</h3>
        </Notification>
        <Button primary onClick={() => this.toggleModal()} > Modal {this.state.notifShown ? 'shown' : 'hidden'} </Button>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return this.props.loggedIn? (
      <div style={{marginTop: '80px'}}>
        <NotificationTest />
        <Header 
          color={colors.dark} 
          height={'67px'} 
          fontSize={'25px'} 
          logoText={'Dashboard Demo'} 
          sticky />
        <SideBarPage sideBarContents={<SideBarContent {...this.props} />} >
          <GaugeBlockArray></GaugeBlockArray>
        </SideBarPage>
        {(this.props.modalShown)?(
          <HistoricalGraphModal modalData={this.props.modalData}/>
        ):null}
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
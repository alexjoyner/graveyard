import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGroups } from './organisms/SideBarContent/utils/getGroups';
import { setGroups } from './organisms/SideBarContent/actions';
import { DashBoard } from './pages/DashBoard';

export class App extends Component {
  async componentDidMount() {
    const groups = await getGroups();
    this.props.setGroups(groups);
  }

  render() {
    return (
      <DashBoard />
    );
  }
}
export default connect(null, {
  setGroups,
})(App);

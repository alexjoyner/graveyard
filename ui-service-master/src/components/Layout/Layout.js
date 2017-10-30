/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import Sidebar from 'react-sidebar';
import s from './Layout.css';
import Header from '../Header';
import SideBarStylesJS from './SideBarStyles';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const sidebarContent = <h1>Hello World</h1>;
    return (
      <Sidebar
        styles={SideBarStylesJS}
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <Header openSideBar={() => this.onSetSidebarOpen(true)} />
        {this.props.children}
      </Sidebar>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);

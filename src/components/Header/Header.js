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
import s from './Header.css';
import Link from '../Link';

class Header extends React.Component {
  static get propTypes() {
    return {
      openSideBar: PropTypes.func,
    };
  }
  static get defaultProps() {
    return {
      openSideBar: null,
    };
  }
  constructor(props) {
    super(props);
    this.openSideBar = this.openSideBar.bind(this);
  }
  openSideBar = () => {
    this.props.openSideBar();
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <button onClick={this.openSideBar}>?</button>
          <Link className={s.brand} to="/">
            <span className={s.brandTxt}>EES Data Logger Demo </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);

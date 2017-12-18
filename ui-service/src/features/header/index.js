import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ees-heading pure-menu pure-menu-horizontal">
                    <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;

import React, {Component} from 'react';
//import {Button} from '/node_modules/ro-component-library/src/atoms/buttons/buttons';
//import PropTypes from 'prop-types';
import './styles.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ees-heading pure-menu pure-menu-horizontal">
                    <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                    {/*<Button />*/}
                </div>
            </div>
        );
    }
}

//Header.propTypes = {};

export default Header;

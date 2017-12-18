import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'purecss';
import './styles.css';

export class Menu extends Component {
    render() {
        return (
            <div id={'Menu'}>
                <h1>Menu</h1>
                <ul>
                    <li>Ambient Temp</li>
                    <li>CFM</li>
                    <li>PSI</li>
                    <li>Discharge Temp</li>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;

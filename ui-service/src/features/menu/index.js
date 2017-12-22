import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import 'purecss';
import './styles.css';
import MenuItem from "./menu-item/index";

export class Menu extends Component {
    render() {
        return (
            <div id={'Menu'}>
                <h1>Menu</h1>
                <ul>
                    <MenuItem text={'Ambient Temp'} />
                    <MenuItem text={'CFM'} />
                    <MenuItem text={'PSI'} />
                    <MenuItem text={'Discharge Temp'} />
                </ul>
            </div>
        );
    }
}

//Menu.propTypes = {};

export default Menu;

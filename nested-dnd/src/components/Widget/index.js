import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Widget extends Component {
    render() {
        return (
            <div>
                <h1>Widget</h1>
            </div>
        );
    }
}

Widget.propTypes = {};

export default Widget;

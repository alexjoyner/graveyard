import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Square extends Component{
    static propTypes = {
        isBlack: PropTypes.bool
    };
    render(){
        const {isBlack} = this.props;
        const fill = isBlack ? 'black' : 'white';
        const stroke = isBlack ? 'white' : 'black';

        return (
            <div style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}>
                {this.props.children}
            </div>
        );
    }
}
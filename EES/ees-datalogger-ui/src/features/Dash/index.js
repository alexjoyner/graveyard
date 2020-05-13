import React, {Component} from 'react';
import {DropTarget} from 'react-dnd';
//import PropTypes from 'prop-types';
import './styles.css';
import {DRAG_DROP_TYPES} from "../../utils/DragDropTypes";

export class Dash extends Component {
    render() {
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div className={'dash-wrapper'}>
                {this.props.children}
            </div>
        );
    }
}

Dash.propTypes = {};

const collect = (connect, monitor) => ({connectDropTarget: connect.dropTarget()});
const spec = {
    drop(props, monitor){
        props.onDrop(monitor.getItem());
    }
};

export default DropTarget(DRAG_DROP_TYPES.menuItem, spec, collect)(Dash);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import {Box} from "../Box/index";
import {ItemTypes} from "../../utils/itemTypes";
import './style.css';

export class Widget extends Component {
    render() {
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div className={'Widget'}>
                <h1>Widget: {this.props.children}</h1>
            </div>
        );
    }
}

Widget.propTypes = {};

const spec = {
    drop(props, monitor){
        props.onDrop(monitor.getItem());
    }
};
const collect = (connect, monitor) => {
  return {
      connectDropTarget: connect.dropTarget()
  }
};

export default DropTarget(ItemTypes.BOX, spec, collect)(Widget);

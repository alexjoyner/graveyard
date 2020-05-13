import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import PropTypes from 'prop-types';
import './styles.css';
import {DRAG_DROP_TYPES} from "../../../utils/DragDropTypes";

export class MenuItem extends Component {
    render() {
        let {connectDragSource} = this.props;
        return connectDragSource(
            <li>
                {this.props.text}
            </li>
        );
    }
}

MenuItem.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

const ItemSource = {
    beginDrag(props){
        return {
            type: props.text
        }
    }
};

const collect = (connect, monitor) => {
  return {
      connectDragSource: connect.dragSource()
  }
};

export default DragSource(DRAG_DROP_TYPES.menuItem, ItemSource, collect)(MenuItem);

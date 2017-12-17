import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropTarget} from 'react-dnd';
import {Box} from "../Box/index";
import {ItemTypes} from "../../utils/itemTypes";

export class Widget extends Component {
    render() {
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div>
                <h1>Widget</h1>
            </div>
        );
    }
}

Widget.propTypes = {};

const spec = {
    drop(props, monitor){
        console.log('Dropped');
    }
};
const collect = (collect, monitor) => {
  return {
      connectDropTarget: connect.dropTarget()
  }
};

export default DropTarget(ItemTypes.BOX, spec, collect)(Widget);

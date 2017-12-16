import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import {ItemTypes} from "../../utils/constants";

const knightSource = {
  beginDrag(props){
      return {};
  }
};

const collect = (connect, monitor) => {
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
};

export class Knight extends Component{
    render() {
        const { isDragging } = this.props;
        return(<span style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: '4em',
            fontWeight: 'bold',
            cursor: 'move'
        }}>♘</span>)
    }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
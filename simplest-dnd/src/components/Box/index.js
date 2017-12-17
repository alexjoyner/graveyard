import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";

const styles = {
    height: '100px',
    width: '100px',
    backgroundColor: 'red'
};

const boxSpec = {
    beginDrag(props){
        return {};
    }
};

const collect = (connect, monitor) =>{
    return {
        connectDragSource: connect.dragSource()
    }
};

export class Box extends Component{
    render(){
        const {connectDragSource} = this.props;
        return connectDragSource(
            <div style={{...styles}}></div>
        )
    }
}

export default DragSource(ItemTypes.BOX, boxSpec, collect)(Box);
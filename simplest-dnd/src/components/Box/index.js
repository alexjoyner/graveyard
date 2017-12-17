import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import './style.css';


export class Box extends Component{
    render(){
        const {connectDragSource} = this.props;
        return connectDragSource(
            <div className={'box'}>
                <h3>{this.props.type}</h3>
            </div>
        )
    }
}
const boxSpec = {
    beginDrag(props){
        return {type: props.type};
    }
};
const collect = (connect) => ({connectDragSource: connect.dragSource()});
const DraggableBox = DragSource(ItemTypes.BOX, boxSpec, collect)(Box);
export {DraggableBox};
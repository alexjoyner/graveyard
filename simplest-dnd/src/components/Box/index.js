import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import './style.css';

const boxSpec = {
    beginDrag(props){
        return {type: props.type};
    }
};

const collect = (connect) => {
    return {connectDragSource: connect.dragSource()};
};
export class PlainBox extends Component{
    render(){
        return <div className={'box'}>{this.props.children}</div>
    }
}
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

export default DragSource(ItemTypes.BOX, boxSpec, collect)(Box);
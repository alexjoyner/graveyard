import React, {Component} from 'react';
import './style.css';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";

export class DropArea extends Component{
    render(){
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div className={'drop-pool'}>
                {this.props.children}
            </div>
        )
    }
}
const poolTargetSpec = {
    drop(props, monitor){
        props.onDrop(monitor.getItem());
    }
};
const collect = (connect, monitor) => ({connectDropTarget: connect.dropTarget()});
const DropBox = DropTarget(ItemTypes.BOX, poolTargetSpec, collect)(DropArea)
export {DropBox} ;
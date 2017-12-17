import React, {Component} from 'react';
import './style.css';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";

const poolTargetSpec = {
    drop(props, monitor){
        props.onDrop(monitor.getItem());
    }
};
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
};
export class DropPool extends Component{
    render(){
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div className={'drop-pool'}>
                {this.props.children}
            </div>
        )
    }
}

export default DropTarget(ItemTypes.BOX, poolTargetSpec, collect)(DropPool);
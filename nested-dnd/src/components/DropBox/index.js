import React from 'react';
import './style.css';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import {basicDropCollect, basicDropSpec} from "../../utils/dragAndDropUtils";

export const DropArea = props => (props.connectDropTarget(<div className={'drop-area'}>{props.children}</div>));


const spec = {
    drop(props, monitor){
        const hasDroppedOnChild = monitor.didDrop();
        if(hasDroppedOnChild){
            return
        }
        props.onDrop(monitor.getItem());
    }
};

const DropBox = DropTarget(ItemTypes.BOX, spec, basicDropCollect)(DropArea);
export {DropBox};
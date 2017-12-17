import React from 'react';
import {DragSource} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import './style.css';
import {basicDragCollect, basicDragSpec} from "../../utils/dragAndDropUtils";


export const Box = (props) => (props.connectDragSource(<div className={'box'}>{props.type}</div>));
const DraggableBox = DragSource(ItemTypes.BOX, basicDragSpec, basicDragCollect)(Box);
export {DraggableBox};
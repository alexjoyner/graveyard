import React from 'react';
import './style.css';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import {basicDropCollect, basicDropSpec} from "../../utils/dragAndDropUtils";

export const DropArea = props => (props.connectDropTarget(<div className={'drop-area'}>{props.children}</div>));
const DropBox = DropTarget(ItemTypes.BOX, basicDropSpec, basicDropCollect)(DropArea);
export {DropBox} ;
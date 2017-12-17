import React, {Component} from 'react';
import './style.css';
import {DropTarget} from 'react-dnd';
import {ItemTypes} from "../../utils/itemTypes";
import {PlainBox} from "../Box/index";
import {Subject} from "../../utils/subjectObserver";

const poolItems = new Subject();

const poolTargetSpec = {
    drop(props, monitor){
        poolItems.notifyAllObservers();
    }
};
const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
};
export class DropPool extends Component{
    constructor(){
        super();
        this.state = {
            poolItems: ['Box']
        };
        this.changeDetector = () => {
            return {
                notify: () => {
                    let {poolItems} = this.state;
                    poolItems.push('Box');
                    this.setState({
                        poolItems
                    })
                }
            }
        };
        poolItems.subscribeObserver(this.changeDetector());

    }
    render(){
        const {connectDropTarget} = this.props;
        return connectDropTarget(
            <div className={'drop-pool'}>
                <h3>Drop Pool</h3>
                {this.state.poolItems.map((item, i) => {
                    return <PlainBox key={i} >Box {i}</PlainBox>
                })}
            </div>
        )
    }
}

export default DropTarget(ItemTypes.BOX, poolTargetSpec, collect)(DropPool);
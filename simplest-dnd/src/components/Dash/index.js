import React, {Component} from 'react';
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {DropBox} from "../DropBox/index";
import {DraggableBox} from "../Box";

export class Dash extends Component {
    constructor(){
        super();
        this.state = {
            poolItems: [],
            selections: ['Temp', 'CFM']
        }
    }
    handleDrop =(data) => {
        let {poolItems} = this.state;
        poolItems.push(data);
        this.setState({
            poolItems
        })
    };
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <div className={'Menu'}>
                        {this.state.selections.map((item, i) => {
                            return <DraggableBox key={i} type={item}/>
                        })}
                    </div>
                    <DropBox onDrop={this.handleDrop}>
                        {this.state.poolItems.map((item, i) => {
                            return <div key={i} >{item.type}</div>
                        })}
                    </DropBox>
                </div>
            </DragDropContextProvider>
        )
    }
}
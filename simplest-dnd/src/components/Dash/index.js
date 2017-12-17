import React, {Component} from 'react';
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Menu} from "../Menu/index";
import DropPool from "../DropPool/index";
import {PlainBox} from "../Box/index";

export class Dash extends Component {
    constructor(){
        super();
        this.state = {
            poolItems: []
        }
    }
    handleDrop =(data) => {
        let {poolItems} = this.state;
        console.log(data);
        poolItems.push(data);
        this.setState({
            poolItems
        })
    };
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <Menu/>
                    <DropPool onDrop={this.handleDrop}>
                        {this.state.poolItems.map((item, i) => {
                            return <PlainBox key={i} >{item.type}</PlainBox>
                        })}
                    </DropPool>
                </div>
            </DragDropContextProvider>
        )
    }
}
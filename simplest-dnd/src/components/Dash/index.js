import React, {Component} from 'react';
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Menu} from "../Menu/index";
import {DropPool} from "../DropPool/index";

export class Dash extends Component {
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <Menu/>
                    <DropPool/>
                </div>
            </DragDropContextProvider>
        )
    }
}
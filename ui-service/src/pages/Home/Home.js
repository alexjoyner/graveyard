import React, {Component} from 'react';
import './Home.css';
import 'purecss';
import {GraphBlock} from "../../features/graph-block/index";
import Menu from "../../features/menu/index";
import Header from "../../features/header/index";
import {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export class Home extends Component {
    render() {
        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div>
                    <Header/>
                    <Menu/>
                    <div className={'dash-wrapper'}>
                        <GraphBlock/>
                    </div>
                </div>
            </DragDropContextProvider>
        );
    }
}

export default Home;

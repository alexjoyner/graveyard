import React, {Component} from 'react';
import './Home.css';
import 'purecss';
import {GraphBlock} from "../../features/graph-block/index";
import Menu from "../../features/menu/index";
import Header from "../../features/header/index";


export class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <div className={'dash-wrapper'}>
                    <GraphBlock />
                </div>
            </div>
        );
    }
}

export default Home;

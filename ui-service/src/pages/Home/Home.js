import React, {Component} from 'react';
import './Home.css';
import 'purecss';
import {GraphBlock} from "../../features/graph-block/index";


export class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="ees-heading pure-menu pure-menu-horizontal">
                        <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                    </div>
                </div>
                <GraphBlock />
            </div>
        );
    }
}

export default Home;

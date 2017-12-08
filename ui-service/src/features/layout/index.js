import React from 'react';
import './styles.css';
import {GraphBlock} from "../graph-block/index";

export class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="ees-heading pure-menu pure-menu-horizontal">
                        <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                    </div>
                </div>
                <GraphBlock blockID={'1'}/>
            </div>
        );
    }
}
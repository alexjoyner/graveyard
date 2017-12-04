import React from 'react';
import './styles.css';
import {DashBody} from "../dash-body/index";

export class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="ees-heading pure-menu pure-menu-horizontal">
                        <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                    </div>
                </div>
                <DashBody></DashBody>
            </div>
        );
    }
}
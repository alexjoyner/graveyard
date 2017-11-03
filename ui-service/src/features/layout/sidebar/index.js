import React, { Component } from 'react';
import './style.css';
import './side-menu.css';
import 'purecss';
import './w3.css';

export class Sidebar extends Component {
    render() {
        return (
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style={{width: '20%'}}>
                <button onClick={() => this.props.closeSideBar()}>Close sidebar</button>
                {this.props.children}
            </div>
        )
    }
}
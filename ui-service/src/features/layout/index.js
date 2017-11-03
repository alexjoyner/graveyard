import React, {Component} from 'react';
import {Sidebar} from "./sidebar/index";


export class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarOpen: false
        }
    }
    hideSideBar(){
        this.setState({
            sideBarOpen: false
        })
    }
    showSideBar(){
        this.setState({
            sideBarOpen: true
        })
    }
    render() {
        return (
            <div>
                {(this.state.sideBarOpen) ? (
                    <Sidebar closeSideBar={() => this.hideSideBar()}>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </Sidebar>
                ) : null}
                <button onClick={() => this.showSideBar()}>Open Side Bar</button>
                <h1>Hello from Layout</h1>
                {this.props.children}
            </div>
        )
    }
}
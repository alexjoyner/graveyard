import React, {Component} from 'react';
import Menu from "./sidebar/index";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Menu>
                    <h1>Hello World</h1>
                </Menu>
                {this.props.children}
            </div>
        )
    }
}
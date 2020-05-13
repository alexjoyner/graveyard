import * as React from 'react';
import {Component, ReactElement} from 'react';
require('./_.sass');

export default class App extends Component {
    render ():ReactElement<any> {
        return (
            <div className="box">Hello Worlds</div>
        )
    }
}
import React from 'react';
import './styles.css';

export class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="ees-heading pure-menu pure-menu-horizontal">
                    <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                </div>
            </div>
        );
    }
}
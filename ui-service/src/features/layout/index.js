import React from 'react';
import Sidebar from 'react-sidebar';
import './styles.css';
import {Menu} from "../menu/index";

const mql = (typeof(window) !== 'undefined')? window.matchMedia(`(min-width: 800px)`) : null;

export class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mql: mql,
            docked: props.docked,
            open: props.open
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    componentWillMount() {
        if(mql){
            mql.addListener(this.mediaQueryChanged);
            this.setState({mql: mql, sidebarDocked: mql.matches});
        }
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    render() {
        let sidebarContent = <Menu/>;
        return (
            <Sidebar sidebarClassName="ees-sidebar"
                     sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.sidebarDocked}
                     onSetOpen={this.onSetSidebarOpen}>
                <div className="header">
                    <div className="ees-heading pure-menu pure-menu-horizontal">
                        <a className="ees-logo pure-menu-heading">EES Data Logger</a>
                    </div>
                </div>
            </Sidebar>
        );
    }
}
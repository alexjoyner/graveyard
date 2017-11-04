import React from 'react';
import Sidebar from 'react-sidebar';
import {sidebarStyles} from './styles';

const mql = window.matchMedia(`(min-width: 800px)`);

class Menu extends React.Component {

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
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, sidebarDocked: mql.matches});
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
        this.setState({sidebarDocked: this.state.mql.matches});
    }

    render() {
        let sidebarContent = this.props.children;
        let sidebarProps = {
            sidebar: this.state.sidebarOpen,
            docked: this.state.sidebarDocked,
            onSetOpen: this.onSetSidebarOpen
        };

        return (
            <Sidebar styles={sidebarStyles}
                     sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.sidebarDocked}
                     onSetOpen={this.onSetSidebarOpen}>
            </Sidebar>
        );
    }
}

export default Menu;
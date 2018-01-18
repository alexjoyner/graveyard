import React, {Component} from 'react';
import './Home.css';
import 'purecss';
import {GraphBlock} from "../../features/graph-block/index";
import Menu from "../../features/menu/index";
import Header from "../../features/header/index";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dash from "../../features/Dash/index";

export class Home extends Component {
    constructor(){
        super();
        this.state = {
            graphs: []
        }
    }
    handleDashDrop = (data) => {
        let { graphs } = this.state;
        graphs.push(data);
        this.setState({graphs});
    };
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Dash onDrop={this.handleDashDrop}>
                    {/*{this.state.graphs.map((data, i) => {*/}
                        {/*return <GraphBlock key={i} BlockID={'Block' + i} data={data}/>*/}
                    {/*})}*/}
                </Dash>
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(Home);

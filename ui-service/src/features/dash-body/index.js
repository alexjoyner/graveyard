import React from 'react';
import './styles.css';
import 'purecss';
import { Graph } from '../graph';
import {HistoryTable} from "../historyTable/index";

export class DashBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'GraphBody'}>
                <HistoryTable />
                <Graph />
                <Graph />
            </div>
        );
    }
}
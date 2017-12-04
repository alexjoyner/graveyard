import React from 'react';
import './styles.css';
import 'purecss';
import {Graph} from '../graph';
import {HistoryTable} from "../historyTable/index";

export class DashBody extends React.Component {

    constructor(props) {
        super(props);
        this.chartOptions = {
            data: {
                columns: [['Data', 76]],
                type: 'gauge',
            },
            gauge: {
                label: {
                    format: value => `${value}°F`,
                },
            },
            color: {
                pattern: ['#50bcef', '#F6C600', '#4eac5b', '#FF0000'], // the three color levels for the percentage values.
                threshold: {
                    values: [30, 70, 78, 100],
                },
            },
        }
    }

    render() {
        return (
            <div className={'GraphBody'}>
                <HistoryTable/>
                <Graph
                    chartID={'chart1'}
                    chartOpts={this.chartOptions}/>
                <Graph
                    chartID={'chart1'}
                    chartOpts={this.chartOptions}/>
            </div>
        );
    }
}
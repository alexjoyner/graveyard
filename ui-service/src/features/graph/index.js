import React from 'react';
import 'c3/c3.css';
import {ErrorBoundary} from "../error-boundary/index";
let connect;
let c3;
if(typeof window !== 'undefined'){
    connect = require("../socket-connection/connection").connect;
    require('d3');
    c3 = require('c3');
}

export class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.chart = {};
    }
    componentDidMount() {
        connect.getLogsSubscription((err, log) => {
            console.log('log returned to feature/graph');
            this.chart.load({
                columns: [['Data', log.value]],
            });
        });
        this.initChart();
    }
    shouldComponentUpdate(nextProps) {

        return false;
    }
    componentDidUpdate() {
        this.initChart();
    }

    initChart() {
        this.chart = c3.generate({
            bindto: `#${this.props.chartID}`,
            data: {
                type: 'gauge',
                columns: [['Data', 76]],
            },
            ...this.props.chartOpts,
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div id={this.props.chartID} />
            </ErrorBoundary>
        );
    }
}
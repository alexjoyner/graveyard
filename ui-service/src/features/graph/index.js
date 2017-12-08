import React from 'react';
import 'c3/c3.css';
import {ErrorBoundary} from "../error-boundary/index";
let c3;
if(typeof window !== 'undefined'){
    require('d3');
    c3 = require('c3');
}

export class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.chart = {};
    }
    componentDidMount() {
        this.updateChart();
    }
    shouldComponentUpdate(nextProps) {
        this.chart.load({
            columns: nextProps.chartOpts.data.columns,
        });
        return false;
    }
    componentDidUpdate() {
        this.updateChart();
    }

    updateChart() {
        this.chart = c3.generate({
            bindto: `#${this.props.chartID}`,
            ...this.props.chartOpts,
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div id={this.props.chartID} ></div>
            </ErrorBoundary>
        );
    }
}
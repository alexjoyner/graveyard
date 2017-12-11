import React from 'react';
import './styles.css';
import 'purecss';
import {Graph} from '../graph';
import axios from 'axios';

export class GraphBlock extends React.Component {

    constructor(props) {
        super(props);
        this.chartOptions = {
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
        };
        this.subLineChartOptions = {
            data: {
                x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 340, 200, 500, 250, 350]
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            },
            subchart: {
                show: true
            }
        };
    }

    render() {
        return (
            <div className={'GraphBody'}>
                <div className={'pure-g'}>
                    <div className={'pure-u-1-1'}>
                        <Graph
                            chartID={'chart1'}
                            chartOpts={this.chartOptions}/>
                    </div>
                </div>
            </div>
        );
    }
}
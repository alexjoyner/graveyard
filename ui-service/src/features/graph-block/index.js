import React from 'react';
import './styles.css';
import 'purecss';
import {Graph} from '../graph';

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
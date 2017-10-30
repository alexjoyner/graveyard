import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from "./_.pcss";
import Chart from '../../components/Charts/Chart';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAnalogTemp: 20,
            tempHistoryData: [['x'], ['Analog Temp']],
        };
    }

    componentDidMount() {
        setInterval(() => {
            axios.get('http://192.168.0.46:3000/ai1').then(res => {
                const data = JSON.parse(res.request.response).data[2] / 10;
                const newStateInfo = this.state;
                // newStateInfo.GuageChartData.data.columns[0][1] = data;
                const date = new Date();
                // newStateInfo.LineChartData.data.columns[0].push(date);
                // newStateInfo.LineChartData.data.columns[1].push(
                //   Math.round(data * 10) / 10,
                // );
                newStateInfo.currentAnalogTemp = data;
                newStateInfo.tempHistoryData[0].push(date);
                newStateInfo.tempHistoryData[1].push(data);
                this.setState(newStateInfo);
            });
        }, 1500);
    }
    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <h1>Ambient Temperature</h1>
                    <Chart
                        chartID={'chart1'}
                        chartOpts={{
                            data: {
                                columns: [['Data', this.state.currentAnalogTemp]],
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
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(s)(Home);

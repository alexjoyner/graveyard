import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, RoHighChart, Button } from 'ro-component-library';
import { config } from 'ro-component-library/lib/atoms/RoHighChart/demoData/config';
import { env } from '../../.env';

const GetData = (username, pass) => {
    return async (dispatch) => {
        try {
            const requestUrl = new Request(`${env.serverAddr}/history/AAE599/romeo6424/?input=2&from=2017-12-18&to=2018-01-05`);
            const response = await fetch(requestUrl);
            const myJson = await response.json();
            console.log('Data before converion: ', myJson);
            myJson.data = myJson.data.map((point) => {
                return [point.time, point.value]
            });
            console.log('Data after conversion: ', myJson);
            dispatch({
                type: 'NEW_HISTORICAL_DATA',
                data: myJson
            });
        }
        catch (e) {
            console.error(e);
        }
    }
}


class HistoricalGraphModal extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        GetData('AAE599', 'romeo6424')(dispatch);
    }
    render() {
        let chartConfig = config;
        chartConfig.series[0].data = this.props.modalData.data;
        console.log('Chart Config', chartConfig);
        return (
            <Modal width="90%">
                <Button small onClick={() => this.props.dispatch({
                    type: 'HIDE_HISTORICAL_MODAL'
                })}>X</Button>
                {(this.props.modalData.data.length > 0) ? (
                    <RoHighChart config={chartConfig} />) : (
                        <h1>No Graph Data To Show</h1>)}
            </Modal>
        )
    }
}

HistoricalGraphModal = connect()(HistoricalGraphModal);
export { HistoricalGraphModal };
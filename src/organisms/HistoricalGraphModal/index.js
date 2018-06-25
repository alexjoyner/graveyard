import React, { Component } from 'react';
import { Modal, RoHighChart } from 'ro-component-library';

class HistoricalGraphModal extends Component {
    render(){
        return (
            <Modal width="90%">
                <RoHighChart />
            </Modal>
        )
    }
}

export { HistoricalGraphModal };
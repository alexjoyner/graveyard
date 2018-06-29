import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoHighChart, Button, Modal } from 'ro-component-library';
import { getChartConfig } from './utils/getChartConfig';

class HistoricalGraphModal extends Component {
    constructor(props){
      super(props);
      console.time('chart-render');
    }
    componentDidMount(){
      console.timeEnd('chart-render');
    }
    render() {
        switch(this.props.modalStage){
          case 'loading':
            return (
              <Modal>
                  <Button small primary onClick={() => this.props.dispatch({
                      type: 'HIDE_HISTORICAL_MODAL'
                  })}>X</Button>
                  <h1>Loading Historical Data</h1>
              </Modal>
            )
          case 'shown':
            return (
              <Modal>
                  <Button small primary onClick={() => this.props.dispatch({
                      type: 'HIDE_HISTORICAL_MODAL'
                  })}>X</Button>
                  <RoHighChart config={getChartConfig(this.props.modalData)} />
              </Modal>
            )
          default:
            return (<div style={{visibility: 'hidden'}}></div>)
        }
    }
}

const mapStateToProps = (state) => {
  return {
    ...state.HistoricalGraphModalReducer,
  }
}

HistoricalGraphModal = connect(mapStateToProps, null)(HistoricalGraphModal);
export { HistoricalGraphModal };
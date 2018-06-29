import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RoHighChart, Button, Modal } from 'ro-component-library';
import { getChartConfig } from './utils/getChartConfig';

class HistoricalGraphModal extends Component {
    constructor(props){
      console.time('chart-render');
      super(props);
      this.state = {
        config: getChartConfig(this.props.modalData),
      };
    }
    componentDidMount(){
      console.timeEnd('chart-render');
    }
    render() {
        return (this.props.modalShown)?(
            <Modal>
                <Button small onClick={() => this.props.dispatch({
                    type: 'HIDE_HISTORICAL_MODAL'
                })}>X</Button>
                <RoHighChart config={this.state.config} />
            </Modal>
        ):(<div style={{visibility: 'hidden'}}></div>);
    }
}

const mapStateToProps = (state) => {
  return {
    ...state.HistoricalGraphModalReducer,
  }
}

HistoricalGraphModal = connect(mapStateToProps, null)(HistoricalGraphModal);
export { HistoricalGraphModal };
import React, { Component } from 'react';
import HighCharts from 'highcharts';
import boost from 'highcharts/modules/boost';
import HighchartsReact from 'highcharts-react-official'; // eslint-disable-line import/first
import { connect } from 'react-redux';
import { RoHighChart, Button, Modal } from 'ro-component-library';
import { env } from '../../.env';
import { getChartConfig } from './utils/getChartConfig';
import { THEME } from 'ro-component-library/lib/atoms/RoHighChart/demoData/theme';


boost(HighCharts);
HighCharts.setOptions(THEME);

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
      console.log('Props: ', this.props)
        return (this.props.modalShown)?(
            <Modal>
                <Button small onClick={() => this.props.dispatch({
                    type: 'HIDE_HISTORICAL_MODAL'
                })}>X</Button>
                {/* <RoHighChart config={this.state.config} /> */}
                <HighchartsReact 
                  highcharts={HighCharts}
                  options={this.state.config}/>
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
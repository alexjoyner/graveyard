import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { RoHighChart, Button, Modal, Panel, Input } from 'ro-component-library';
import { getChartConfig } from './utils/getChartConfig';
import { GetNewHistoryData } from './actions';

const getFormattedDates = (preset) => {
  let startDate = '';
  let endDate = moment().format('YYYY-MM-DD HH:mm');;
  switch(preset){
    case 'day':
      startDate = moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm');
      break;
    case 'week':
      startDate = moment().subtract(1, 'weeks').format('YYYY-MM-DD HH:mm');
      break;
    case 'month':
      startDate = moment().subtract(1, 'month').format('YYYY-MM-DD HH:mm');
      break;
    case '6 months':
      startDate = moment().subtract(6, 'months').format('YYYY-MM-DD HH:mm');
      break;
    default:
      console.error('Internal: No correct date preset passed to getFormattedDates');
  }
  return { startDate, endDate };
}

class HistoricalGraphModal extends Component {
    constructor(props){
      super(props);
      const NOW = moment();
      const ONE_DAY_AGO = moment().subtract(24, 'hours');
      this.state = {
        startDate: ONE_DAY_AGO.format('YYYY-MM-DD HH:mm'),
        endDate: NOW.format('YYYY-MM-DD HH:mm'), 
      }
    }
    handleStartDateChange(e){
      let value = e.target.value;
      this.setState({
        ...this.state,
        startDate: value
      })
    }
    handleEndDateChange(e){
      let value = e.target.value;
      this.setState({
        ...this.state,
        endDate: value
      })
    }
    getNewTimeFrame(preset){
      const { startDate, endDate } = getFormattedDates(preset);
      this.setState({
        ...this.state,
        startDate, 
        endDate,
      });
      GetNewHistoryData(this.state)(this.props.dispatch);
    }
    getCustomData(){
      GetNewHistoryData(this.state)(this.props.dispatch);
    }
    render() {
      return (this.props.modalStage !== 'hidden')?(
        <Modal width="90%">
          <Panel width="90%">
            <Input 
              primary 
              value={this.state.startDate} 
              onChange={(e) => this.handleStartDateChange(e)}
              labelText="Start Date: YYYY-MM-DD HH:MM"/>
            <Input 
              primary 
              value={this.state.endDate} 
              onChange={(e) => this.handleEndDateChange(e)}
              labelText="End Date: YYYY-MM-DD HH:MM"/>
            <Button primary onClick={() => this.getCustomData()}>Custom</Button>
            <Button primary onClick={() => this.getNewTimeFrame('6 months')}>6 Months</Button>
            <Button primary onClick={() => this.getNewTimeFrame('month')}>1 Month</Button>
            <Button primary onClick={() => this.getNewTimeFrame('week')}>1 Week</Button>
            <Button primary onClick={() => this.getNewTimeFrame('day')}>1 Day</Button>
          </Panel>
          <Button primary onClick={() => this.props.dispatch({
              type: 'HIDE_HISTORICAL_MODAL'
          })}>Close</Button>
          {(this.props.modalStage === 'loading')?(
            <h1>Loading Data</h1>
          ):(
            <RoHighChart config={getChartConfig(this.props.modalData)} />
          )}
        </Modal>
      ):(<div style={{visibility: 'hidden'}}></div>)
    }
}

const mapStateToProps = (state) => {
  return {
    ...state.HistoricalGraphModalReducer,
  }
}

HistoricalGraphModal = connect(mapStateToProps, null)(HistoricalGraphModal);
export { HistoricalGraphModal };
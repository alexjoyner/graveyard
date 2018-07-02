import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { RoHighChart, RoDatePicker, Button, Modal, Panel, Input } from 'ro-component-library';
import { getChartConfig } from './utils/getChartConfig';
import { GetNewHistoryData } from './actions';

const getFormattedDates = (preset) => {
  let startDate = '';
  let endDate = moment();
  switch(preset){
    case 'day':
      startDate = moment().subtract(24, 'hours');
      break;
    case 'week':
      startDate = moment().subtract(1, 'weeks');
      break;
    case 'month':
      startDate = moment().subtract(1, 'month');
      break;
    case '6 months':
      startDate = moment().subtract(6, 'months');
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
        startDate: ONE_DAY_AGO,
        endDate: NOW,
        showCustom: false,
      }
    }
    handleStartDateChange(date){
      this.setState({
        ...this.state,
        startDate: date
      })
    }
    handleEndDateChange(date){
      this.setState({
        ...this.state,
        endDate: date
      })
    }
    getNewTimeFrame(preset){
      const { startDate, endDate } = getFormattedDates(preset);
      this.setState({
        ...this.state,
        startDate, 
        endDate,
      });
      //GetNewHistoryData(this.state)(this.props.dispatch);
    }
    getCustomData(){
      GetNewHistoryData(this.state)(this.props.dispatch);
    }
    toggleCustom(){
      this.setState({
        ...this.state,
        showCustom: !this.state.showCustom
      })
    }
    render() {
      return (this.props.modalStage !== 'hidden')?(
        <Modal width="90%">
          <Panel width="90%">
            <Button primary onClick={() => this.getNewTimeFrame('6 months')}>6 Months</Button>
            <Button primary onClick={() => this.getNewTimeFrame('month')}>1 Month</Button>
            <Button primary onClick={() => this.getNewTimeFrame('week')}>1 Week</Button>
            <Button primary onClick={() => this.getNewTimeFrame('day')}>1 Day</Button>
            <Button primary onClick={() => this.toggleCustom()}>Custom</Button>
            {(this.state.showCustom)?(
              <span>
                <RoDatePicker
                  customInput={<Input labelText="Start Date:"/>}
                  labelText="Start Date:"
                  onChange={date => this.handleStartDateChange(date)}
                  selected={this.state.startDate}
                  timeFormat="HH:mm"
                  dateFormat="YYYY-MM-DD HH:mm"
                  timeIntervals={30}
                  showTimeSelect
                />
                <RoDatePicker
                  customInput={<Input labelText="End Date:"/>}
                  labelText="End Date:"
                  onChange={date => this.handleEndDateChange(date)}
                  selected={this.state.endDate}
                  timeFormat="HH:mm"
                  dateFormat="YYYY-MM-DD HH:mm"
                  timeIntervals={30}
                  showTimeSelect
                />
                <Button success onClick={() => this.getCustomData()}>Submit</Button>
              </span>
            ):null}
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
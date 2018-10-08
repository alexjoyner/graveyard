import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { RoHighChart, RoDatePicker, Button, Modal, Panel, Input } from 'ro-component-library';
import { getChartConfig } from './utils/getChartConfig';
import { Point } from '../../propTypes';
import { buildHistoryGraph } from './utils/buildHistoryGraph';

const getFormattedDates = (preset) => {
  let startDate = '';
  const endDate = moment();
  switch (preset) {
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
};
class BaseHistoricalGraphModal extends Component {
  constructor(props) {
    super(props);
    const NOW = moment();
    const ONE_DAY_AGO = moment().subtract(24, 'hours');
    this.state = {
      startDate: ONE_DAY_AGO,
      endDate: NOW,
      showCustom: false,
    };
  }
  getNewTimeFrame(preset) {
    const { startDate, endDate } = getFormattedDates(preset);
    this.setState({
      ...this.state,
      startDate,
      endDate,
    });
    buildHistoryGraph(this.props.modalData, this.state)(this.props.dispatch);
  }
  getCustomData() {
    buildHistoryGraph(this.props.modalData, this.state)(this.props.dispatch);
  }
  handleStartDateChange(date) {
    this.setState({
      ...this.state,
      startDate: date,
    });
  }
  handleEndDateChange(date) {
    this.setState({
      ...this.state,
      endDate: date,
    });
  }
  toggleCustom() {
    this.setState({
      ...this.state,
      showCustom: !this.state.showCustom,
    });
  }
  render() {
    console.log(this.props);
    return (this.props.modalStage !== 'hidden') ? (
      <Modal width="90%">
        <Panel width="90%">
          <Button color="primary" onClick={() => this.getNewTimeFrame('day')}>1 Day</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('week')}>1 Week</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('month')}>1 Month</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('6 months')}>6 Months</Button>
          <Button color="primary" onClick={() => this.toggleCustom()}>Custom</Button>
          {(this.state.showCustom) ? (
            <span>
              <RoDatePicker
                customInput={<Input labelText="Start Date:" />}
                labelText="Start Date:"
                onChange={date => this.handleStartDateChange(date)}
                selected={this.state.startDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                dateFormat="ll"
              />
              <RoDatePicker
                customInput={<Input labelText="End Date:" />}
                labelText="End Date:"
                onChange={date => this.handleEndDateChange(date)}
                selected={this.state.endDate}
                selectsEnd
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                dateFormat="ll"
              />
              <Button color="success" onClick={() => this.getCustomData()}>Submit</Button>
            </span>
            ) : null}
        </Panel>
        <Button
          color="primary"
          onClick={() => this.props.dispatch({
              type: 'HIDE_HISTORICAL_MODAL',
          })}
        >Close
        </Button>
        {(this.props.modalStage === 'loading') ? (
          <h1>Loading Data</h1>
          ) : (
            <RoHighChart config={getChartConfig(this.props.modalData)} />
          )}
      </Modal>
    ) : (<div style={{ visibility: 'hidden' }} />);
  }
}
BaseHistoricalGraphModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  modalStage: PropTypes.string.isRequired,
  modalData: PropTypes.arrayOf(Point),
};
BaseHistoricalGraphModal.defaultProps = {
  modalData: [],
};

const mapStateToProps = state => ({
  ...state.HistoricalGraphModalReducer,
});

const HistoricalGraphModal = connect(mapStateToProps, null)(BaseHistoricalGraphModal);
export { HistoricalGraphModal };

import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { RoHighChart, Button, Modal, Panel } from 'ro-component-library';
import { startLoadingNotif, stopLoadingNotif } from '../../actions/notification';
import { getChartConfig } from './utils/getChartConfig';
import { Point, Points } from '../../propTypes';
import { TEST_NOTIFICATION } from '../Notifications';
import { getRequestFetchUrls } from './utils/getRequestFetchUrls';
import { getRawHistoryData } from './utils/getRawHistoryData';
import { formatDataForGraph } from './utils/formatDataForGraph';
import { dispatchNewHistoricalData, showHistoryModal, closeHistoryModal } from './actions';

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
  componentDidUpdate() {
    if (this.props.modalStage === 'BUILDING') {
      this.runBuildGraphProcess();
    }
  }
  async runBuildGraphProcess() {
    this.props.startLoadingNotif(TEST_NOTIFICATION);
    const points = Object.keys(this.props.chartPoints).map(pointID => this.props.chartPoints[pointID]);
    const calls = getRequestFetchUrls(points, {});
    const rawDataArray = await getRawHistoryData(calls);
    const formattedData = formatDataForGraph(rawDataArray, points);
    this.props.dispatchNewHistoricalData(formattedData);
    this.props.showHistoryModal();
    this.props.stopLoadingNotif(TEST_NOTIFICATION);
    return null;
  }
  render() {
    return (this.props.modalStage === 'SHOWN') ? (
      <Modal width="90%">
        <Panel width="90%">
          <Button color="primary" onClick={() => this.getNewTimeFrame('day')}>1 Day</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('week')}>1 Week</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('month')}>1 Month</Button>
          <Button color="primary" onClick={() => this.getNewTimeFrame('6 months')}>6 Months</Button>
        </Panel>
        <Button
          color="primary"
          onClick={() => this.props.closeHistoryModal()}
        >Close
        </Button>
        {(this.props.modalStage === 'LOADING') ? (
          <h1>Loading Data</h1>
        ) : (
          <RoHighChart config={getChartConfig(this.props.modalData)} />
        )}
      </Modal>
    ) : (<div style={{ visibility: 'hidden' }} />);
  }
}
BaseHistoricalGraphModal.propTypes = {
  startLoadingNotif: PropTypes.func.isRequired,
  stopLoadingNotif: PropTypes.func.isRequired,
  dispatchNewHistoricalData: PropTypes.func.isRequired,
  showHistoryModal: PropTypes.func.isRequired,
  closeHistoryModal: PropTypes.func.isRequired,
  modalStage: PropTypes.string.isRequired,
  modalData: PropTypes.arrayOf(Point),
  chartPoints: Points.isRequired,
};
BaseHistoricalGraphModal.defaultProps = {
  modalData: [],
};

const mapStateToProps = state => ({
  ...state.HistoricalGraphModalReducer,
});

const HistoricalGraphModal = connect(mapStateToProps, {
  startLoadingNotif,
  stopLoadingNotif,
  dispatchNewHistoricalData,
  showHistoryModal,
  closeHistoryModal,
})(BaseHistoricalGraphModal);
export { HistoricalGraphModal };

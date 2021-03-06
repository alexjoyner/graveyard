import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  RoHighChart, Button, Modal, Panel,
} from 'ro-component-library';
import { startLoadingNotif, stopLoadingNotif } from '../../actions/notification';
import { getChartConfig } from './utils/getChartConfig';
import { Point, Points } from '../../propTypes';
import { TEST_NOTIFICATION } from '../Notifications';
import { fetchDataForPoints } from './utils/fetchDataForPoints';
import { getRawHistoryData } from './utils/getRawHistoryData';
import { formatDataForGraph } from './utils/formatDataForGraph';
import { dispatchNewHistoricalData, showHistoryModal, closeHistoryModal } from './actions';
import { IntervalButton } from './particles/IntervalButton';

export class BaseHistoricalGraphModal extends Component {
  componentDidUpdate() {
    const { modalStage } = this.props;
    if (modalStage === 'BUILDING') {
      this.runBuildGraphProcess();
    }
  }

  async runBuildGraphProcess(opts = {}) {
    const { chartPoints } = this.props;
    this.props.startLoadingNotif(TEST_NOTIFICATION);
    const points = Object
      .keys(chartPoints)
      .map(pointID => chartPoints[pointID]);
    const calls = fetchDataForPoints(points, opts);
    const rawDataArray = await getRawHistoryData(calls);
    const formattedData = formatDataForGraph(rawDataArray, points);
    this.props.dispatchNewHistoricalData(formattedData);
    this.props.showHistoryModal();
    this.props.stopLoadingNotif(TEST_NOTIFICATION);
    return null;
  }

  render() {
    const { modalStage, modalData } = this.props;
    return (modalStage === 'SHOWN') ? (
      <Modal width="90%">
        <Panel width="90%">
          <IntervalButton color="primary" type="oneDay" onClick={opts => this.runBuildGraphProcess(opts)}>1 Day</IntervalButton>
          <IntervalButton color="primary" type="oneWeek" onClick={opts => this.runBuildGraphProcess(opts)}>1 Week</IntervalButton>
          <IntervalButton color="primary" type="oneMonth" onClick={opts => this.runBuildGraphProcess(opts)}>1 Month</IntervalButton>
          <IntervalButton color="primary" type="sixMonths" onClick={opts => this.runBuildGraphProcess(opts)}>6 Months</IntervalButton>
          <IntervalButton color="primary" onClick={() => this.runBuildGraphProcess()}>All</IntervalButton>
        </Panel>
        <Button
          color="primary"
          onClick={() => this.props.closeHistoryModal()}
        >
          <span>Close</span>
        </Button>
        <RoHighChart config={getChartConfig(modalData)} />
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

/* istanbul ignore next */
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

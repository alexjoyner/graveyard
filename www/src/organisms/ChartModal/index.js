import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  RoHighChart, toaster,
} from 'ro-component-library';
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalButton,
} from 'ro-component-library/Modal';
import { getChartConfig } from './utils/getChartConfig';
import { Point, Points } from '../../propTypes';
import { fetchDataForPoints } from './utils/fetchDataForPoints';
import { getRawHistoryData } from './utils/getRawHistoryData';
import { formatDataForGraph } from './utils/formatDataForGraph';
import {
  dispatchNewHistoricalData as dispatchNewHistoricalDataAction,
  showHistoryModal as showHistoryModalAction,
  closeHistoryModal as closeHistoryModalAction,
} from './actions';
import { IntervalButton } from './particles/IntervalButton';
import { getTimeInterval } from './utils/getTimeInterval';

export class TChartModal extends Component {
  componentDidUpdate() {
    const { modalStage } = this.props;
    if (modalStage === 'BUILDING') {
      this.runBuildGraphProcess(getTimeInterval('oneWeek'));
    }
  }

  async runBuildGraphProcess(opts = {}) {
    const { chartPoints, dispatchNewHistoricalData, showHistoryModal } = this.props;
    toaster().clear();
    toaster().info(<h2>Loading</h2>, { autoHideDuration: 0 });
    const points = Object
      .keys(chartPoints)
      .map(pointID => chartPoints[pointID]);
    const calls = fetchDataForPoints(points, opts);
    const rawDataArray = await getRawHistoryData(calls);
    const formattedData = formatDataForGraph(rawDataArray, points);
    dispatchNewHistoricalData(formattedData);
    showHistoryModal();
    toaster().clear();
    return null;
  }

  render() {
    const { modalStage, modalData, closeHistoryModal } = this.props;
    return (modalStage === 'SHOWN') ? (
      <Modal size="100%" isOpen={modalStage === 'SHOWN'} overrides={{ Close: { component: () => null } }}>
        <ModalHeader>
          <IntervalButton size="compact" type="oneDay" onClick={opts => this.runBuildGraphProcess(opts)}>1 Day</IntervalButton>
          <IntervalButton size="compact" type="oneWeek" onClick={opts => this.runBuildGraphProcess(opts)}>1 Week</IntervalButton>
          <IntervalButton size="compact" type="oneMonth" onClick={opts => this.runBuildGraphProcess(opts)}>1 Month</IntervalButton>
          <IntervalButton size="compact" type="sixMonths" onClick={opts => this.runBuildGraphProcess(opts)}>6 Months</IntervalButton>
        </ModalHeader>
        <ModalBody>
          <RoHighChart config={getChartConfig(modalData)} />
        </ModalBody>
        <ModalFooter>
          <ModalButton
            onClick={() => closeHistoryModal()}
          >
            <span>Close</span>
          </ModalButton>
        </ModalFooter>
      </Modal>
    ) : (<div style={{ visibility: 'hidden' }} />);
  }
}
TChartModal.propTypes = {
  dispatchNewHistoricalData: PropTypes.func.isRequired,
  showHistoryModal: PropTypes.func.isRequired,
  closeHistoryModal: PropTypes.func.isRequired,
  modalStage: PropTypes.string.isRequired,
  modalData: PropTypes.arrayOf(Point),
  chartPoints: Points.isRequired,
};
TChartModal.defaultProps = {
  modalData: [],
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  ...state.ChartModalReducer,
});

const ChartModal = connect(mapStateToProps, {
  dispatchNewHistoricalData: dispatchNewHistoricalDataAction,
  showHistoryModal: showHistoryModalAction,
  closeHistoryModal: closeHistoryModalAction,
})(TChartModal);
export { ChartModal };

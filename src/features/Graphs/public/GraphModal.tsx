import React, { FC, useState, useEffect, useContext } from 'react';
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalButton,
} from 'ro-component-library/Modal';
import {
  RoHighChart, toaster,
} from 'ro-component-library';
import { IntervalButton } from '../private/IntervalButton';
import { getTimeInterval } from '../utils/getTimeInterval';
import { StoreContext } from '../../../shared/AppBuilder/storeContext';
import { closeGraph } from '../ducks/graphs.duck';
import { GraphOptions } from '../types';
import { fetchRawPointsLogs } from '../utils/fetchRawPointsLogs';
import { formatRawPointData } from '../utils/formatRawPointData';
import { getChartConfig } from '../utils/getChartConfig';

type GraphStage = 'SHOWN' /* | 'LOADING' */ | 'HIDDEN';

let DefaultGraphStage: GraphStage = 'HIDDEN';
const GraphModal: FC = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [graphData, setGraphData] = useState();
  const [graphStage, setGraphStage] = useState(DefaultGraphStage);

  const { graphPoints } = state.Graphs;

  const onCloseGraph = () => {
    setGraphStage('HIDDEN');
    dispatch(closeGraph());
  }
  const runBuildGraphProcess = async (opts: GraphOptions) => {
    toaster().clear();
    toaster().info(<h2>Loading</h2>, { autoHideDuration: 0 });
    const points = Object
      .keys(graphPoints)
      .map(pointID => graphPoints[pointID]);
    const rawDataArray: [[number, number]] = await fetchRawPointsLogs(points, opts);
    const formattedData = formatRawPointData(rawDataArray, points);
    setGraphData(formattedData);
    setGraphStage('SHOWN');
    toaster().clear();
    return null;
  }
  useEffect(() => {
    if (Object.keys(graphPoints).length > 0) {
      runBuildGraphProcess(getTimeInterval('oneWeek'));
    }
  }, [graphPoints]);
  return (graphStage === 'SHOWN') ? (
    <Modal size="100%" isOpen={graphStage === 'SHOWN'} overrides={{ Close: { component: () => null } }}>
      <ModalHeader>
        <IntervalButton size="compact" type="oneDay" onClick={(opts: GraphOptions) => runBuildGraphProcess(opts)}>1 Day</IntervalButton>
        <IntervalButton size="compact" type="oneWeek" onClick={(opts: GraphOptions) => runBuildGraphProcess(opts)}>1 Week</IntervalButton>
        <IntervalButton size="compact" type="oneMonth" onClick={(opts: GraphOptions) => runBuildGraphProcess(opts)}>1 Month</IntervalButton>
        <IntervalButton size="compact" type="sixMonths" onClick={(opts: GraphOptions) => runBuildGraphProcess(opts)}>6 Months</IntervalButton>
      </ModalHeader>
      <ModalBody>
        <RoHighChart config={getChartConfig(graphData)} />
      </ModalBody>
      <ModalFooter>
        <ModalButton
          onClick={onCloseGraph}
        >
          <span>Close</span>
        </ModalButton>
      </ModalFooter>
    </Modal>
  ) : (<div style={{ visibility: 'hidden' }} />);
}

export { GraphModal };
import React, { useState, useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/go';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { NullComp } from '../../../../shared/components/NullComp';
import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';
import { PointsObject, PointID } from '../../../../shared/types/oee-master/points';
import { SocketContext, DefaultState } from '../../DashBoard';
import { Log } from '../../../../shared/types/oee-master/logs';
import { StoreContext } from '../../../../shared/AppBuilder/storeContext';
import { selectPoint, deselectPoint } from '../../../../features/Points/ducks/points.duck';
import { buildGraph } from '../../../../features/Graphs/ducks/graphs.duck';
import { colors } from 'ro-component-library/colors';



const renderPointBlocks = (points: PointsObject) => {
	const socket = useContext(SocketContext);
	const { Gauges, Points, Graphs } = useContext(FeaturesContext);
	const [state, dispatch] = useContext(StoreContext);
	const { GaugeBlock } = Gauges;
	const { NoPointsBanner, LivePointData, SelectedPointsToolbox } = Points;
	const pointsIDs = Object.keys(points);
	return (
		<>
			{(pointsIDs.length === 0) ? (
				<NoPointsBanner />
			) : (
					<CenteredContent>
						{pointsIDs.map((id: string) => {
							return (
								<LivePointData key={id} socket={socket} pointID={id}>
									{(lastLog: Log) => (
										<GaugeBlock
											value={lastLog.log.value}
											name={points[id].name}
											settings={points[id].settings}
											onChartClick={() => dispatch(selectPoint(points[id]))}
										/>
									)}
								</LivePointData>
							)
						})}
					</CenteredContent>
				)}
			<SelectedPointsToolbox
				selectedPoints={state.Points.selectedPoints}
				perPointTools={[{
					onClick: (pointID: PointID) => dispatch(deselectPoint(state.Points.selectedPoints[pointID])),
					color: 'dark',
					Icon: GoTrashcan,
					iconColor: colors.dangerLight,
				}]}
				groupTools={[{
					onClick: () => dispatch(buildGraph(state.Points.selectedPoints)),
					name: 'Graph Selected Points',
					color: 'primary',
					renderCondition: (Graphs.GraphModal({}) !== null)
				}]} />
		</>
	)
};
const Body = () => {
	const [state] = useContext(StoreContext);
	const { Points, Graphs } = useContext(FeaturesContext);
	const { PointsInfo } = Points;
	const { GraphModal } = Graphs;
	const { Groups: { currentGroup = 0 } } = state;
	console.log('State: ', state);
	return (
		<HeaderSideBarPageBody>
			<PointsInfo group={currentGroup}>
				{renderPointBlocks}
			</PointsInfo>
			<GraphModal />
		</HeaderSideBarPageBody>
	);
};

export { Body };

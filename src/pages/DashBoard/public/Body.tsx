import React, { useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { GoTrashcan } from 'react-icons/go';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { FeaturesContext } from '../../../shared/AppBuilder/featuresContext';
import { PointsObject, PointID } from '../../../shared/types/oee-master/points';
import { SocketContext } from '../DashBoard';
import { Log } from '../../../shared/types/oee-master/logs';
import { StoreContext } from '../../../shared/AppBuilder/storeContext';
import { selectPoint, deselectPoint } from '../../../features/Points/ducks/points.duck';
import { buildGraph } from '../../../features/Graphs/ducks/graphs.duck';
import { colors } from 'ro-component-library/colors';
import { Block } from 'ro-component-library/Block';
import { ListHeader } from 'ro-component-library/ListHeader';
import { Card } from 'ro-component-library/Card';

const LivePointGauges = ({ points }: { points: PointsObject }) => {
	const socket = useContext(SocketContext);
	const { Gauges, Points } = useContext(FeaturesContext);
	const dispatch = useContext(StoreContext)[1];
	const { GaugeBlock } = Gauges;
	const { LivePointData } = Points;
	const pointsIDs = Object.keys(points);
	return (
		<>
			{pointsIDs.map((id: string) => {
				return (
					<LivePointData key={id} socket={socket} pointID={id}>
						{(lastLog: Log) => {
							return (
								<GaugeBlock
									value={lastLog.log.value}
									name={points[id].name}
									settings={points[id].settings}
									onChartClick={() => dispatch(selectPoint(points[id]))}
								/>
							)
						}}
					</LivePointData>
				)
			})}
		</>
	)
};

const StaticPointsList = ({ points }: { points: PointsObject }) => {
	const dispatch = useContext(StoreContext)[1];
	const pointsIDs = Object.keys(points);
	return (
		<>
			<Block style={{ display: 'inline-block', width: '50%', marginTop: '30px' }}>
				{pointsIDs.map((id: string) => {
					return (
						<React.Fragment key={id}>
							<Card title={points[id].name} onClick={() => dispatch(selectPoint(points[id]))} />
						</React.Fragment>
					)
				})}
			</Block>
		</>
	)
};

const renderGroupPoints = (points: PointsObject) => {
	const { Points, Graphs } = useContext(FeaturesContext);
	const [state, dispatch] = useContext(StoreContext);
	const { Features } = state;
	const { NoPointsBanner, SelectedPointsToolbox } = Points;
	const pointsIDs = Object.keys(points);
	return (
		<>
			{(pointsIDs.length === 0) ? (
				<NoPointsBanner />
			) : (
					<CenteredContent>
						<ListHeader>{state.Groups.currentGroup.name}</ListHeader>
						{(Features.Gauges) ? <LivePointGauges points={points} /> : <StaticPointsList points={points} />}
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
	const { Groups: { currentGroup: { id } } } = state;
	return (
		<HeaderSideBarPageBody>
			<PointsInfo group={id}>
				{renderGroupPoints}
			</PointsInfo>
			<GraphModal />
		</HeaderSideBarPageBody>
	);
};

export { Body };

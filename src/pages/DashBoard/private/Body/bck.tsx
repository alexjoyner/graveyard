// import React, { useContext } from 'react';
// import { HeaderSideBarPageBody } from 'ro-component-library';
// import { GoTrashcan } from 'react-icons/go';
// import { CenteredContent } from 'ro-component-library/CenteredContent';
// import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';
// import { PointsObject, PointID } from '../../../../shared/types/oee-master/points';
// import { SocketContext, DefaultState } from '../../DashBoard';
// import { Log } from '../../../../shared/types/oee-master/logs';
// import { StoreContext } from '../../../../shared/AppBuilder/storeContext';
// import { selectPoint, deselectPoint } from '../../../../features/Points/ducks/points.duck';
// import { buildGraph } from '../../../../features/Graphs/ducks/graphs.duck';
// import { colors } from 'ro-component-library/colors';
// import { Block } from 'ro-component-library/Block';
// import { ListHeader } from 'ro-component-library/ListHeader';
// import { Card } from 'ro-component-library/Card';




// const renderGroupPoints = (points: PointsObject) => {
// 	const socket = useContext(SocketContext);
// 	const { Gauges, Points, Graphs } = useContext(FeaturesContext);
// 	const [state, dispatch] = useContext(StoreContext);
// 	const { Features } = state;
// 	const { GaugeBlock } = Gauges;
// 	const { NoPointsBanner, LivePointData, SelectedPointsToolbox } = Points;
// 	const pointsIDs = Object.keys(points);
// 	const LivePointGauges = () => (
// 		<>
// 			{pointsIDs.map((id: string) => {
// 				return (
// 					<React.Fragment key={id}>
// 						<LivePointData socket={socket} pointID={id}>
// 							{(lastLog: Log) => {
// 								console.log(lastLog);
// 								return (
// 									<GaugeBlock
// 										value={lastLog.log.value}
// 										name={points[id].name}
// 										settings={points[id].settings}
// 										onChartClick={() => dispatch(selectPoint(points[id]))}
// 									/>
// 								)
// 							}}
// 						</LivePointData>
// 					</React.Fragment>
// 				)
// 			})}
// 		</>
// 	);
// 	const StaticPointsList = () => (
// 		<>
// 			<Block style={{ display: 'inline-block', width: '50%', marginTop: '30px' }}>
// 				{pointsIDs.map((id: string) => {
// 					return (
// 						<React.Fragment key={id}>
// 							<Card title={points[id].name} onClick={() => dispatch(selectPoint(points[id]))} />
// 						</React.Fragment>
// 					)
// 				})}
// 			</Block>
// 		</>
// 	);
// 	return (
// 		<>
// 			{(pointsIDs.length === 0) ? (
// 				<NoPointsBanner />
// 			) : (
// 					<CenteredContent>
// 						<ListHeader>Points</ListHeader>
// 						{(Features.Gauges) ? (
// 							<LivePointGauges />
// 						) : (
// 								<StaticPointsList />
// 							)}
// 					</CenteredContent>
// 				)}
// 			<SelectedPointsToolbox
// 				selectedPoints={state.Points.selectedPoints}
// 				perPointTools={[{
// 					onClick: (pointID: PointID) => dispatch(deselectPoint(state.Points.selectedPoints[pointID])),
// 					color: 'dark',
// 					Icon: GoTrashcan,
// 					iconColor: colors.dangerLight,
// 				}]}
// 				groupTools={[{
// 					onClick: () => dispatch(buildGraph(state.Points.selectedPoints)),
// 					name: 'Graph Selected Points',
// 					color: 'primary',
// 					renderCondition: (Graphs.GraphModal({}) !== null)
// 				}]} />
// 		</>
// 	)
// };
// const Body = () => {
// 	const [state] = useContext(StoreContext);
// 	const { Points, Graphs } = useContext(FeaturesContext);
// 	const { PointsInfo } = Points;
// 	const { GraphModal } = Graphs;
// 	const { Groups: { currentGroup = 0 } } = state;
// 	return (
// 		<HeaderSideBarPageBody>
// 			<PointsInfo group={currentGroup}>
// 				{renderGroupPoints}
// 			</PointsInfo>
// 			<GraphModal />
// 		</HeaderSideBarPageBody>
// 	);
// };

// export { Body };

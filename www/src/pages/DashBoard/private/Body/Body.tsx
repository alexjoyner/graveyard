import React, { useState, useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { CenteredContent } from 'ro-component-library/CenteredContent';
import { NullComp } from '../../../../shared/components/NullComp';
import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';
import { PointsObject } from '../../../../shared/types/oee-master/points';
import { SocketContext } from '../../DashBoard';
import { Log } from '../../../../shared/types/oee-master/logs';
import { StoreContext } from '../../../../shared/AppBuilder/storeContext';
import { selectPoint } from '../../../../features/Points/ducks/points.duck';



const renderPointBlocks = (points: PointsObject) => {
	const socket = useContext(SocketContext);
	const { Gauges, Points } = useContext(FeaturesContext);
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
			<SelectedPointsToolbox selectedPoints={state.points.selectedPoints} />
		</>
	)
};
const Body = () => {
	const { Points } = useContext(FeaturesContext);
	const { PointsInfo } = Points;
	return (
		<HeaderSideBarPageBody>
			<PointsInfo group={0}>
				{renderPointBlocks}
			</PointsInfo>
		</HeaderSideBarPageBody>
	);
};

export { Body };

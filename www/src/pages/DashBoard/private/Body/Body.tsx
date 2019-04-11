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

const Body = () => {
	const socket = useContext(SocketContext);
	const { Gauges, Points } = useContext(FeaturesContext);
	const [state, dispatch] = useContext(StoreContext);
	const { GaugeBlock } = Gauges;
	const { NoPointsBanner, PointsInfo, LivePointData, SelectedPointsToolbox } = Points;
	const renderPointBlocks = (points: PointsObject) => {
		const pointsIDs = Object.keys(points);
		return (
			<CenteredContent>
				{(pointsIDs.length === 0) ? (
					<NoPointsBanner />
				) : (
						<>
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
						</>
					)}
				<SelectedPointsToolbox selectedPoints={state.points.selectedPoints} />
			</CenteredContent>
		)
	};
	return (
		<HeaderSideBarPageBody>
			<PointsInfo group={0}>
				{renderPointBlocks}
			</PointsInfo>
		</HeaderSideBarPageBody>
	);
};

export { Body };

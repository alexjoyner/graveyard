import React, { useState, useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { NullComp } from '../../../../shared/components/NullComp';
import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';
import { PointsObject } from '../../../../shared/types/oee-master/points';
import { SocketContext } from '../../DashBoard';
import { Log } from '../../../../shared/types/oee-master/logs';

const Body = () => {
	const socket = useContext(SocketContext);
	const { Gauges, Points } = useContext(FeaturesContext);
	const { GaugeBlock } = Gauges;
	const { NoPointsBanner, PointsInfo, LivePointData } = Points;
	const renderPointBlocks = (points: PointsObject) => {
		const pointsIDs = Object.keys(points);
		return (
			<>
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
												onChartClick={() => console.log('CLICK! ', points[id].name)}
											/>
										)}
									</LivePointData>
								)
							})}
						</>
					)}
			</>
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

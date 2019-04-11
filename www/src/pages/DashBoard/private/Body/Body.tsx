import React, { useState, useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { NullComp } from '../../../../shared/components/NullComp';
import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';
import { PointsObject } from '../../../../shared/types/oee-master/points';

const Body = () => {
	const { Gauges, Points } = useContext(FeaturesContext);
	const { GaugeBlock } = Gauges;
	const { NoPointsBanner, PointsInfo } = Points;
	const renderPointBlocks = (points: PointsObject) => {
		const pointsIDs = Object.keys(points);
		return (
			<>
				{(pointsIDs.length === 0) ? (
					<NoPointsBanner />
				) : (
						<>
							{pointsIDs.map((id: string) => (
								<GaugeBlock
									key={id}
									value={20}
									name={points[id].name}
									onChartClick={() => console.log('CLICK! ', points[id].name)}
								/>
							))}
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

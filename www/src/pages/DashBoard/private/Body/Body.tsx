import React, { useState, useContext } from 'react';
import { HeaderSideBarPageBody } from 'ro-component-library';
import { NullComp } from '../../../../shared/components/NullComp';
import { FeaturesContext } from '../../../../shared/AppBuilder/featuresContext';

const Body = () => {
	const { Gauges } = useContext(FeaturesContext);
	const { GaugeBlock } = Gauges;
	return (
		<HeaderSideBarPageBody>
			<GaugeBlock
				value={20}
				name='Testing'
				onChartClick={() => console.log('CLICK CLICK!')}
			/>
		</HeaderSideBarPageBody>
	);
};

export { Body };

import React from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { DashBoard } from '../pages/DashBoard';
import { AccountsFeature } from '../features/Accounts';
import { FeedbackFeature } from '../features/Feedback';
import { TutorialFeature } from '../features/Tutorial/tutorial';
import { GaugesFeature } from '../features/Gauges/gauges';
import { PointsFeature } from '../features/Points/points';
const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};
let BaseDash = new DashBoard();
let MyDash = BaseDash.addFeatures([
	AccountsFeature,
	FeedbackFeature,
	TutorialFeature,
	GaugesFeature,
	PointsFeature,
]);
let Root = MyDash.Run({});
export const App = () => (
	<>
		<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		{Root}
	</>
);

import React from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { DashBoard } from '../pages/DashBoard';
import { AccountsFeature } from '../features/Accounts';
import { FeedbackFeature } from '../features/Feedback';
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
	FeedbackFeature
]);
let Root = MyDash.Run({});
export const App = () => (
	<>
		<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		{Root}
	</>
);

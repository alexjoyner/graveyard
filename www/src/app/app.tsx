import React, { createContext } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { DashBoard } from '../pages/DashBoard';

const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};
let MyDash = new DashBoard();
export const FeaturesContext = createContext(MyDash.getFeatures());
export const App = () => (
	<FeaturesContext.Provider value={MyDash.getFeatures()}>
		<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		<MyDash.Run />
	</FeaturesContext.Provider>
);

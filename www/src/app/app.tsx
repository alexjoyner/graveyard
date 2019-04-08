import React, { createContext, FC, Context } from 'react';
import { PLACEMENT } from 'baseui/toast';
import { Toast } from 'ro-component-library/Toast';
import { DashBoard } from '../pages/DashBoard';
import { DashFeaturesContext } from '../pages/DashBoard/DashBoard';
import { AccountsFeature } from '../features/Accounts';

const toastOverrides = {
	Root: {
		style: {
			zIndex: 3000
		}
	}
};
let MyDash = new DashBoard();
MyDash.addFeature(AccountsFeature);
console.log(MyDash.getFeatures());
export const App = () => (
	<DashFeaturesContext.Provider value={MyDash.getFeatures()}>
		<Toast placement={PLACEMENT.bottomLeft} overrides={toastOverrides} />
		<MyDash.Run />
	</DashFeaturesContext.Provider>
);

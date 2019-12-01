import React from 'react';
import { DashBoard } from '../pages/DashBoard';
import { AccountsFeature } from '../features/Accounts';
import { FeaturesFeature } from '../features/Features';
let BaseDash = new DashBoard();
const Features = [];
const rawStoredFeatures = localStorage.getItem('Features');
const rawFeatures = rawStoredFeatures
	? JSON.parse(rawStoredFeatures)
	: {
			Accounts: true,
			Features: false
	  };
if (rawFeatures.Accounts) Features.push(AccountsFeature);
if (rawFeatures.Features) Features.push(FeaturesFeature);
let MyDash = Features.length === 0 ? BaseDash : BaseDash.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => <>{Root}</>;

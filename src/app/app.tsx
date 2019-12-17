import React from 'react';
import { DashBoard } from '../pages/DashBoard';
import { DemoFeature } from '../features/Demo';
let BaseDash = new DashBoard();
const Features = [];
const rawStoredFeatures = localStorage.getItem('Features');
const rawFeatures = rawStoredFeatures
	? JSON.parse(rawStoredFeatures)
	: {
			Demo: true
	  };
if (rawFeatures.Demo) Features.push(DemoFeature);
let MyDash = BaseDash.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => <>{Root}</>;

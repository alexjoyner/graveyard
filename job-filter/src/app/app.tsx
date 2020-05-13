import React from 'react';
import { DashBoard } from '../pages/DashBoard';
import { DemoFeature } from '../features/Demo';
import { JobsFeature } from '../features/Jobs';
let BaseDash = new DashBoard();
const Features = [];
const rawStoredFeatures = localStorage.getItem('Features');
const rawFeatures = rawStoredFeatures
	? JSON.parse(rawStoredFeatures)
	: {
		Demo: true,
		Jobs: true
	};
if (rawFeatures.Demo) Features.push(DemoFeature);
if (rawFeatures.Jobs) Features.push(JobsFeature);
console.log(Features);
let MyDash = BaseDash.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => <>{Root}</>;

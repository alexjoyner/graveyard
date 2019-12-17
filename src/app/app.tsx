import React from 'react';
import { HomePage } from '../pages/Home';
import { DemoFeature } from '../features/Demo';
let BaseDash = new HomePage();
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

import React from 'react';
import { HomePage } from '../pages/Home';
import { DemoFeature } from '../features/Demo';
import { TimelineFeature } from '../features/Timeline';
import { BrandFeature } from '../features/Brand';
let BaseDash = new HomePage();
const Features = [];
const rawStoredFeatures = localStorage.getItem('Features');
const rawFeatures = rawStoredFeatures
	? JSON.parse(rawStoredFeatures)
	: {
			Demo: true,
			Timeline: true,
			Brand: true
	  };
if (rawFeatures.Demo) Features.push(DemoFeature);
if (rawFeatures.Timeline) Features.push(TimelineFeature);
if (rawFeatures.Brand) Features.push(BrandFeature);
let MyDash = BaseDash.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => <>{Root}</>;

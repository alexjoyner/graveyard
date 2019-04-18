import React from 'react';
import { DashBoard } from '../pages/DashBoard';
import { AccountsFeature } from '../features/Accounts';
import { FeedbackFeature } from '../features/Feedback';
import { TutorialFeature } from '../features/Tutorial/tutorial';
import { GaugesFeature } from '../features/Gauges/gauges';
import { PointsFeature } from '../features/Points/points';
import { GroupsFeature } from '../features/Groups/groups';
import { GraphsFeature } from '../features/Graphs/graphs';
import { FeaturesFeature } from '../features/Features';
let BaseDash = new DashBoard();
const Features = [];
const rawStoredFeatures = localStorage.getItem('Features');
const rawFeatures = (rawStoredFeatures) ? JSON.parse(rawStoredFeatures) : {
	Accounts: true,
	Feedback: true,
	Tutorial: true,
	Gauges: true,
	Points: true,
	Groups: true,
	Graphs: true,
	Features: true,
};
if (rawFeatures.Accounts) Features.push(AccountsFeature);
if (rawFeatures.Feedback) Features.push(FeedbackFeature);
if (rawFeatures.Tutorial) Features.push(TutorialFeature);
if (rawFeatures.Gauges) Features.push(GaugesFeature);
if (rawFeatures.Points) Features.push(PointsFeature);
if (rawFeatures.Groups) Features.push(GroupsFeature);
if (rawFeatures.Graphs) Features.push(GraphsFeature);
if (rawFeatures.Features) Features.push(FeaturesFeature);
let MyDash = BaseDash.addFeatures(Features);
let Root = MyDash.Run({});
export const App = () => (
	<>
		{Root}
	</>
);

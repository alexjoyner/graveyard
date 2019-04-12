import { FeaturesFeatureInterface } from './../../../features/Features/index';
import { GraphsFeatureInterface } from './../../../features/Graphs/graphs';
import { GroupsFeatureInterface } from './../../../features/Groups/groups';
import { PointsFeatureInterface } from './../../../features/Points/points';
import { GaugesFeatureInterface } from './../../../features/Gauges/gauges';
import { TutorialFeatureInterface } from './../../../features/Tutorial/tutorial';
import { ReactNode, FC } from 'react';
import { AccountsFeatureInterface } from '../../../features/Accounts/types/accounts';
import { Reducer } from 'redux';
import { ReducersObject } from '../../../shared/AppBuilder/types';
import { FeedbackFeatureInterface } from '../../../features/Feedback/feedback';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type HeaderFeatureInterface = FC<any>;
export type SideBarFeatureInterface = FC<any>;
export type BodyFeatureInterface = FC<any>;

export interface DashFeatures {
	Header: HeaderFeatureInterface;
	SideBar: SideBarFeatureInterface;
	Body: BodyFeatureInterface;
	Accounts: AccountsFeatureInterface;
	Feedback: FeedbackFeatureInterface;
	Tutorial: TutorialFeatureInterface;
	Gauges: GaugesFeatureInterface;
	Points: PointsFeatureInterface;
	Groups: GroupsFeatureInterface;
	Graphs: GraphsFeatureInterface;
	Features: FeaturesFeatureInterface;
}

export interface DashReducers extends ReducersObject { }

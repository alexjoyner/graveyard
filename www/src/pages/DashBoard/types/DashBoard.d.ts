import { ReactNode, FC } from 'react';
import { AccountsFeatureInterface } from '../../../features/Accounts/types/accounts';
import { Reducer } from 'redux';
import { ReducersObject } from '../../../shared/AppBuilder/types';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type HeaderFeatureInterface = FC<any>;
export type SideBarFeatureInterface = FC<any>;
export type BodyFeatureInterface = FC<any>;
// export type FeedbackFeatureInterface = {
// 	FeedbackButton: FC<any>;
// };

export interface DashFeatures {
	Header: HeaderFeatureInterface;
	SideBar: SideBarFeatureInterface;
	Body: BodyFeatureInterface;
	Accounts: AccountsFeatureInterface;
	// Feedback?: FeedbackFeatureInterface;
}

export interface DashReducers extends ReducersObject { }

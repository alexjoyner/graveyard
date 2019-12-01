import { FeaturesFeatureInterface } from '../../features/Features/Features';
import { ReactNode, FC } from 'react';
import { AccountsFeatureInterface } from '../../features/Accounts/types/accounts';
import { Reducer } from 'redux';
import { ReducersObject } from '../../utils/AppBuilder/types';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type HeaderFeatureInterface = FC<any>;
export type SideBarFeatureInterface = FC<any>;
export type BodyFeatureInterface = FC<any>;

export interface AppFeatures {
	Header: HeaderFeatureInterface;
	SideBar: SideBarFeatureInterface;
	Body: BodyFeatureInterface;
	Accounts: AccountsFeatureInterface;
	Features: FeaturesFeatureInterface;
}

export interface AppReducers extends ReducersObject {}

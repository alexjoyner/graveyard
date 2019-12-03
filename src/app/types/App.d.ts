import { ReactNode, FC } from 'react';
import { Reducer } from 'redux';
import { ReducersObject } from '../../utils/AppBuilder/types';
import { DemoFeatureInterface } from '../../features/Demo/Demo';

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
	Demo: DemoFeatureInterface;
}

export interface AppReducers extends ReducersObject {}

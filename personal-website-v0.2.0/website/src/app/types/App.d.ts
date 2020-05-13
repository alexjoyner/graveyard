import { BrandFeatureInterface } from './../../features/Brand/Brand';
import { ReactNode, FC } from 'react';
import { Reducer } from 'redux';
import { ReducersObject } from '../../utils/AppBuilder/types';
import { TimelineFeatureInterface } from '../../features/Timeline/Timeline';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type HeaderFeatureInterface = FC<any>;
export type SideBarFeatureInterface = FC<any>;
export type BodyFeatureInterface = FC<any>;

export interface AppFeatures {
	Body: BodyFeatureInterface;
	Timeline: TimelineFeatureInterface;
	Brand: BrandFeatureInterface;
}

export interface AppReducers extends ReducersObject {}

import { ReactNode, FC } from 'react';
import { AccountsFeatureInterface } from '../../../features/Accounts/types/accounts';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type HeaderFeatureInterface = FC<any>;
export type SideBarFeatureInterface = FC<any>;
export type BodyFeatureInterface = FC<any>;
export type FeedbackFeatureInterface = {
	FeedbackButton: FC<any>;
};
export interface DashFeatures {
	Header: HeaderFeatureInterface;
	SideBar: SideBarFeatureInterface;
	Body: BodyFeatureInterface;
	Accounts: AccountsFeatureInterface;
	Feedback?: FeedbackFeatureInterface;
}

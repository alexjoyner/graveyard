import { ReactNode, FC } from 'react';

// DashBoard App Specific
// Type Declarations
export type ExtendableFeatures = 'Accounts' | 'Feedback';
export type Component = FC<any>;
export type HeaderFeatureInterface = Component;
export type SideBarFeatureInterface = Component;
export type BodyFeatureInterface = Component;
export type AccountsFeatureInterface = {
	SignInButton: Component;
	SignOutButton: Component;
};
export type FeedbackFeatureInterface = {
	FeedbackButton: Component;
};
export interface DashFeatures {
	Header: HeaderFeatureInterface;
	SideBar: SideBarFeatureInterface;
	Body: BodyFeatureInterface;
	Accounts?: AccountsFeatureInterface;
	Feedback?: FeedbackFeatureInterface;
}

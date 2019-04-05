import { ReactNode } from 'react';

// This part can be abstracted out to a utility library
//  It is designed to be reusable across apps
export interface GenericFeatures {
	[key: string]: any;
}
export interface App {
	getFeatures(): Object;
	addFeature<App>(Feature: { new (...args: any[]): App }): App;
	Run(props: Object): ReactNode;
}

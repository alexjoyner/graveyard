import { combineReducers } from './combineReducers';
import { StoreContext } from './storeContext';
import React, { ReactNode, useReducer } from 'react';
import { ReducersObject, GenericFeatures } from './types';
import { Reducer, ReducersMapObject, AnyAction } from 'redux';
import { FeaturesContext } from './featuresContext';

export interface App<F = GenericFeatures> {
	getFeatures(): F;
	getReducers(): ReducersMapObject<any, AnyAction>;
	addFeatures<App>(Featurea: { new(...args: any[]): App }[]): App;
	Run({
		reducers,
		features,
	}: {
		reducers?: ReducersMapObject<any, AnyAction>,
		features?: F
	}): ReactNode;
}


//  Base DashBoard
export abstract class BasicApp<F = GenericFeatures> implements App<F> {
	private features: F;
	private reducers: ReducersMapObject<any, AnyAction>;
	private rootContent: ReactNode;
	private defaultState: Object;
	constructor(
		features: F,
		reducers: ReducersMapObject<any, AnyAction>,
		rootContent: ReactNode,
		defaultState?: Object
	) {
		this.features = features;
		this.reducers = reducers;
		this.rootContent = rootContent;
		this.defaultState = defaultState || {};
	}
	getFeatures(): F {
		return this.features;
	}
	getReducers(): ReducersMapObject<any, AnyAction> {
		return this.reducers;
	}
	addFeatures<App>(Features: { new(...args: any[]): App }[]): App {
		let newApp = new Features[0](this);
		Features.map((Feature, indx) => {
			if (indx > 0) {
				newApp = new Feature(newApp);
			}
		})
		return newApp;
	}
	private Build({
		reducers,
		features,
		rootContent,
		defaultState,
	}: {
		reducers: ReducersMapObject<any, AnyAction>,
		features: F,
		rootContent: ReactNode,
		defaultState: Object
	}) {
		const rootReducer = combineReducers(reducers);
		const initialState = rootReducer({}, { type: '__INIT__' });
		const [state, dispatch] = useReducer(rootReducer, initialState);
		const finalState = { ...defaultState, ...state };
		return (
			<StoreContext.Provider value={[finalState, dispatch]} >
				<FeaturesContext.Provider value={features}>
					{rootContent}
				</FeaturesContext.Provider>
			</StoreContext.Provider>
		);
	}
	Run({
		reducers,
		features,
	}: {
		reducers?: ReducersMapObject<any, AnyAction>,
		features?: F
	}) {
		return <this.Build
			reducers={reducers || this.getReducers()}
			features={features || this.getFeatures()}
			rootContent={this.rootContent}
			defaultState={this.defaultState} />
	}
}
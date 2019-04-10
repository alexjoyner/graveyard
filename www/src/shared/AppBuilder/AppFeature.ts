import { App } from './App';
import { ReactNode } from 'react';
import { Reducer, ReducersMapObject, AnyAction } from 'redux';
import { ReducersObject, GenericFeatures } from './types';

export abstract class AppFeature<F = GenericFeatures> implements App<F> {
	private features: F;
	private reducers: ReducersMapObject<any, AnyAction>;
	private decoratedApp: App<F>;
	constructor(decoratedApp: App<F>) {
		this.decoratedApp = decoratedApp;
		this.features = decoratedApp.getFeatures();
		this.reducers = decoratedApp.getReducers();
	}
	protected setFeatureSettings(feature: string, settings: any): void {
		this.features = { ...this.features, [feature]: settings };
	}
	protected setReducerSettings(reducers: ReducersMapObject<any, AnyAction>): void {
		console.log(reducers);
		this.reducers = { ...this.reducers, ...reducers };
	};
	getFeatures(): F {
		return this.features;
	}
	getReducers(): ReducersObject {
		return this.reducers;
	}
	addFeatures<App>(Features: { new(...args: any[]): App }[]): App {
		return this.decoratedApp.addFeatures(Features);
	}
	Run({
		reducers = this.getReducers(),
		features = this.getFeatures(),
	}: {
		reducers?: ReducersMapObject<any, AnyAction>,
		features?: F
	}): ReactNode {
		return this.decoratedApp.Run({ reducers, features });
	}
}

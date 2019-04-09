import { App, GenericFeatures } from './../types/app.d';
import { ReactNode } from 'react';

export abstract class AppFeature implements App {
	protected abstract features: GenericFeatures;
	protected decoratedApp: App;
	constructor(decoratedApp: App) {
		this.decoratedApp = decoratedApp;
	}
	protected abstract setFeature(feature: string, settings: Object): void;
	getFeatures(): Object {
		return this.features;
	}
	addFeature<App>(Feature: { new (...args: any[]): App }): App {
		return this.decoratedApp.addFeature(Feature);
	}
	Run(props: Object): ReactNode {
		return this.decoratedApp.Run(props);
	}
}

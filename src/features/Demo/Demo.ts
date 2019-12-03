import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/demo.duck';
import { DemoHeader } from './public/DemoHeader';
export interface DemoFeatureInterface {
	DemoHeader: FC;
}

export class DemoFeature extends AppFeature<AppFeatures> {
	constructor(decoratedApp: App<AppFeatures>) {
		super(decoratedApp);
		const ExposedFeatures: DemoFeatureInterface = {
			DemoHeader: DemoHeader
		};
		this.setFeatureSettings('Demo', ExposedFeatures);
		this.setReducerSettings({
			Demo: reducer
		});
	}
}

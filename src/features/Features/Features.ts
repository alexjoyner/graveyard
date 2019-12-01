import { FeaturesButton } from './public/FeaturesButton';
import { App } from '../../utils/AppBuilder/App';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { reducer } from './ducks/features.duck';
export interface FeaturesFeatureInterface {
	FeaturesButton: FC;
}

export class FeaturesFeature extends AppFeature<AppFeatures> {
	constructor(decoratedApp: App<AppFeatures>) {
		super(decoratedApp);
		const ExposedFeatures: FeaturesFeatureInterface = {
			FeaturesButton: FeaturesButton
		};
		this.setFeatureSettings('Features', ExposedFeatures);
		this.setReducerSettings({
			Features: reducer
		});
	}
}

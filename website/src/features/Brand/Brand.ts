import {
	MinimalBackgroundProps,
	MinimalBackground
} from './public/MinimalBackground';
import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/brand.duck';
export interface BrandFeatureInterface {
	MinimalBackground: FC<MinimalBackgroundProps>;
}

export class BrandFeature extends AppFeature<AppFeatures> {
	constructor(decoratedApp: App<AppFeatures>) {
		super(decoratedApp);
		const ExposedFeatures: BrandFeatureInterface = {
			MinimalBackground: MinimalBackground
		};
		this.setFeatureSettings('Brand', ExposedFeatures);
		this.setReducerSettings({
			Brand: reducer
		});
	}
}

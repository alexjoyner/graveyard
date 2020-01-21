import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/brand.duck';
export interface BrandFeatureInterface {
  /*
      Replace this with all the TypeScript interface of all the PUBLIC
    components this will allow
    Ex: FeaturesButton: FC
  */
}

export class BrandFeature extends AppFeature<AppFeatures> {
  constructor(decoratedApp: App<AppFeatures>) {
    super(decoratedApp);
    const ExposedFeatures: BrandFeatureInterface = {
      /*
          Replace this with defaulting all the public components
        listed in the interface above with their default components
        FeaturesButton: FeaturesButton
      */
    }
    this.setFeatureSettings('Brand', ExposedFeatures);
    this.setReducerSettings({
      Brand: reducer
    })
  }
}
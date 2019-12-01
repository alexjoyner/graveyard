import { FeaturesButton } from './public/FeaturesButton';
import { App } from '../../shared/AppBuilder/App';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { reducer } from './ducks/features.duck';
export interface {{pascalCase name}}FeatureInterface {
  /*
      Replace this with all the TypeScript interface of all the PUBLIC
    components this will allow
    Ex: FeaturesButton: FC
  */
}

export class {{pascalCase name}}Feature extends AppFeature<DashFeatures> {
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const ExposedFeatures: {{pascalCase name}}FeatureInterface = {
      /*
          Replace this with defaulting all the public components
        listed in the interface above with their default components
        FeaturesButton: FeaturesButton
      */
    }
    this.setFeatureSettings('{{pascalCase name}}', ExposedFeatures);
    this.setReducerSettings({
      Features: reducer
    })
  }
}
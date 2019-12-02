import { App } from '../../utils/AppBuilder/App';
import { AppFeature } from '../../utils/AppBuilder/AppFeature';
import { AppFeatures } from '../../app/types/App';
import { FC } from 'react';
import { reducer } from './ducks/{{camelCase name}}.duck';
export interface {{pascalCase name}}FeatureInterface {
  /*
      Replace this with all the TypeScript interface of all the PUBLIC
    components this will allow
    Ex: FeaturesButton: FC
  */
}

export class {{pascalCase name}}Feature extends AppFeature<AppFeatures> {
  constructor(decoratedApp: App<AppFeatures>) {
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
      {{pascalCase name}}: reducer
    })
  }
}
import { FC } from 'react';
import { AppFeature } from '../../shared/AppBuilder/AppFeature';
import { DashFeatures } from '../../pages/DashBoard/types/DashBoard';
import { App } from '../../shared/AppBuilder/App';
import { GroupsMenu } from './public/GroupsMenu';
import { reducer } from './ducks/groups.duck';

export interface GroupsFeatureInterface {
  GroupsMenu: FC
}


export class GroupsFeature extends AppFeature<DashFeatures> {
  constructor(decoratedApp: App<DashFeatures>) {
    super(decoratedApp);
    const Features: GroupsFeatureInterface = {
      GroupsMenu: GroupsMenu
    }
    this.setFeatureSettings('Groups', Features);
    this.setReducerSettings({
      Groups: reducer,
    });
  }
}

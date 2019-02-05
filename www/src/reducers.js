import { combineReducers } from 'redux';
import { ISideBarReducer } from 'ro-component-library';
import { GaugeBlockArrayReducer } from './organisms/GaugeBlockArray/reducer';
import { ChartModalReducer } from './organisms/ChartModal/reducer';
import { NotificationReducer } from './organisms/Notifications/reducer';
import { ChartsSelectedReducer } from './molecules/ChartsSelected/reducer';
import { GroupsMenuReducer } from './molecules/GroupsMenu/reducer';

export const reducers = combineReducers({
  GaugeBlockArrayReducer,
  ChartModalReducer,
  NotificationReducer,
  ChartsSelectedReducer,
  GroupsMenuReducer,
  ISideBarReducer,
});

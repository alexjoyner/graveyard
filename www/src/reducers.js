import { combineReducers } from 'redux';
import { ISideBarReducer } from 'ro-component-library';
import { GaugeBlockArrayReducer } from './organisms/GaugeBlockArray/reducer';
import { HistoricalGraphModalReducer } from './organisms/HistoricalGraphModal/reducer';
import { NotificationReducer } from './organisms/Notifications/reducer';
import { ChartsSelectedReducer } from './molecules/ChartsSelected/reducer';
import { GroupsMenuReducer } from './molecules/GroupsMenu/reducer';

export const reducers = combineReducers({
  GaugeBlockArrayReducer,
  HistoricalGraphModalReducer,
  NotificationReducer,
  ChartsSelectedReducer,
  GroupsMenuReducer,
  ISideBarReducer,
});

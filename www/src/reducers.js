import { combineReducers } from 'redux';
import { ISideBarReducer } from 'ro-component-library';
import { DashBodyReducer } from './organisms/DashBody/reducer';
import { ChartModalReducer } from './organisms/ChartModal/reducer';
import { ChartsSelectedReducer } from './molecules/ChartsSelected/reducer';
import { GroupsMenuReducer } from './molecules/GroupsMenu/reducer';

export const reducers = combineReducers({
  DashBodyReducer,
  ChartModalReducer,
  ChartsSelectedReducer,
  GroupsMenuReducer,
  ISideBarReducer,
});

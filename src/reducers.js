import { combineReducers } from 'redux';
import { SideBarReducer } from 'ro-component-library';
import { GaugeBlockArrayReducer } from './organisms/GaugeBlockArray/reducer';
import { HistoricalGraphModalReducer } from './organisms/HistoricalGraphModal/reducer';
import { NotificationReducer } from './organisms/Notifications/reducer';
import { MultiSelectedChartsMenuReducer } from './organisms/MultiSelectedChartsMenu/reducer';
import { SideBarContentReducer } from './organisms/SideBarContent/reducer';

export const reducers = combineReducers({
  GaugeBlockArrayReducer,
  HistoricalGraphModalReducer,
  NotificationReducer,
  MultiSelectedChartsMenuReducer,
  SideBarContentReducer,
  SideBarReducer,
});

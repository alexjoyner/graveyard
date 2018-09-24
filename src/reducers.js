import { combineReducers } from 'redux';
import { AuthModalReducer } from './organisms/AuthModal/reducer';
import { GaugeBlockArrayReducer } from './organisms/GaugeBlockArray/reducer';
import { HistoricalGraphModalReducer } from './organisms/HistoricalGraphModal/reducer';
import { NotificationReducer } from './organisms/DashNotification/reducer';
import { MultiSelectedChartsMenuReducer } from './organisms/MultiSelectedChartsMenu/reducer';
import { SideBarContentReducer } from './organisms/SideBarContent/reducer'

export const reducers = combineReducers({
    AuthModalReducer,
    GaugeBlockArrayReducer,
    HistoricalGraphModalReducer,
    NotificationReducer,
    MultiSelectedChartsMenuReducer,
    SideBarContentReducer
})
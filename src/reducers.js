import { combineReducers } from 'redux';
import { AuthModalReducer } from './organisms/AuthModal/reducer';
import { GaugeBlockArrayReducer } from './organisms/GaugeBlockArray/reducer';

export const reducers = combineReducers({
    AuthModalReducer,
    GaugeBlockArrayReducer
})
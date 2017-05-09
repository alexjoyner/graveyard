import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {demoReducer} from '../checkIn/reducer';


const rootReducer = combineReducers({
  demoInfo: demoReducer,
  form: formReducer
});

export default rootReducer;

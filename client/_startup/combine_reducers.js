import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Reducer as CheckInReducer} from '../CheckIn/reducer';

const rootReducer = combineReducers({
  checkIn: CheckInReducer,
  form: formReducer
});

export default rootReducer;

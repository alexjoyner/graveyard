import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Reducer as CheckInReducer} from '../CheckIn/reducer';
import {Reducer as CheckOutReducer} from '../CheckOut/reducer';

const rootReducer = combineReducers({
  checkOut: CheckOutReducer,
  checkIn: CheckInReducer,
  form: formReducer
});

export default rootReducer;

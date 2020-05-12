import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Reducer as CheckIn} from '../CheckIn/reducer';
import {Reducer as CheckOut} from '../CheckOut/reducer';
import {Reducer as Notifs} from '../shared/notifications/notif_reducer';

const rootReducer = combineReducers({
  CheckOut, CheckIn, Notifs,
  form: formReducer
});

export default rootReducer;

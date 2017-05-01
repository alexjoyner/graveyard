import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {demoReducer} from '../demo/reducer';


const rootReducer = combineReducers({
  config: demoReducer,
  form: formReducer
});

export default rootReducer;

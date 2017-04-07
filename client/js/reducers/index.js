import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {configReducer} from './reducer_config';


const rootReducer = combineReducers({
  config: configReducer,
  form: formReducer
});

export default rootReducer;

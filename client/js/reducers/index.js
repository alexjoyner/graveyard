/*
*    REDUCERS:  This is the main reducers file
*    What are the reducers?
*    Reducers are essentially a bunch of javascript objects that make up our store of data.
*    In React, the store of data is 1 Large javascript object.  Here we are combining all of
*    our reducers, or all of our individual javascript objects, to make up one large object that
*    will ultimately get passed back to createstore() in js/index.js
* */


import { combineReducers } from 'redux';

// using redux-form HOC, docs at http://redux-form.com redux-form@4.1.3
// this is ES6 for "import redux-form, grab the reducer property off of it, and then create variable with it named formReducer
import { reducer as formReducer } from 'redux-form';
import Config from './reducer_config';

// redux form pulls the form values over to the application level state
const rootReducer = combineReducers({
  config: Config,
  form: formReducer
});

export default rootReducer;

import {SEARCH_UNFINISHED, REMOVE_JOB} from './actions';

const INITIAL_STATE = {
	jobs: []
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case REMOVE_JOB:
			let jobs = state.jobs;
			jobs.splice(action.index, 1);
			return {...state, jobs};
		case SEARCH_UNFINISHED:
			console.log(action.payload.data);
			return {...state, jobs: action.payload.data};
		default:
			return state;
	}
};

export {Reducer};

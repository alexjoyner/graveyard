import {FETCH_WEATHER} from '../actions/index'
export default function (state = [], action) {
	switch (action.type){
		case FETCH_WEATHER:
			return state.concat([action.payload.data]);
			// Can also use
			// return [action.payload.data, ...state] *this is the same as concat
	}
	return state;
}
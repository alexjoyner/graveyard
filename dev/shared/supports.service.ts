import {Injectable} from 'angular2/core';
import {Support} from './support';
import {SUPPORTS} from '../mock/mock-supports';

@Injectable()
export class SupportsService {
	/* GET */
	getSupports(pointId: string){
		let returnArray = [];
		for (var i = SUPPORTS.length - 1; i >= 0; i--) {
			if (SUPPORTS[i].point_id === pointId) {
				console.log('Pushing: ', pointId);
				returnArray.push(SUPPORTS[i]);
			}
		}
		return returnArray;
	}
	getSupport(_id: string){

	}

	/* POST */
	insertSupport(support: Support){
		SUPPORTS.push(support);
	}

	/* DELETE */
	deleteSupport(support: Support){
		// id in the future
		SUPPORTS.splice(SUPPORTS.indexOf(support), 1);
	}
}
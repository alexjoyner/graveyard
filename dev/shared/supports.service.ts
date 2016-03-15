import {Injectable} from 'angular2/core';
import {Support} from './support';
import {SUPPORTS} from '../mock/mock-supports';

@Injectable()
export class SupportsService {
	/* GET */
	getSupports(pointId: string){

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
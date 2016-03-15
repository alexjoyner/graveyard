import {Injectable} from 'angular2/core';
import {Point} from './point';
import {POINTS} from '../mock/mock-points';

@Injectable()
export class PointsService {
	/* GET */
	getPoints(issueId: string) {
		let returnArray = [];
		for (var i = POINTS.length - 1; i >= 0; i--) {
			if (POINTS[i].issue_id === issueId){
				returnArray.push(POINTS[i]);
			}
		}
		return returnArray;
	}
	getPoint(pointId: string) {
		// for (var i = POINTS.length - 1; i >= 0; i--) {
		// 	if (POINTS[i]._id === pointId) {
		// 		return POINTS[i];
		// 	}
		// }
		// console.log('No point found');
	}
	/* POST */
	insertPoint(point: Point) {
		POINTS.unshift(point);
		return point;
	}
	/* DELETE */
	deletePoint(point: Point):number {		
		if(POINTS.indexOf(point) > -1){
			POINTS.splice(POINTS.indexOf(point), 1)
			return 200;
		}else {
			return 400;
		}
	}
}
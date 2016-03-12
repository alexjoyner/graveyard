import {Injectable} from 'angular2/core';
import {Point} from './point';
import {POINTS} from '../mock/mock-points';

@Injectable()
export class PointsService {
	/* GET */
	getPoints() {
		return POINTS;
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
	}
	/* DELETE */
	deletePoint(point: Point) {
		POINTS.splice(POINTS.indexOf(point), 1);
	}

	/*VOTING POINTS SUPPORT*/
	votePoint(point: Point, voteType: string) {
		if (voteType === 'upvote') {
			POINTS[POINTS.indexOf(point)].ups++;
		} else
			if (voteType === 'downvote') {
				POINTS[POINTS.indexOf(point)].downs++;
			} else {
				console.log('No type recognized')
			}
	}
}
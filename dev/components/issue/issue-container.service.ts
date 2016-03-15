import {Injectable} from 'angular2/core';
import {Point} from '../../shared/point';

@Injectable()
export class IssueContainerService {
	points: Point[] = [];

	insertPoint(point: Point){
		this.points.unshift(point);
	}
}
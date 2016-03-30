import {Injectable} from 'angular2/core';
import {Point} from './point';
import {Support} from './support';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class PointsService {
	private endpoint: string = '';
	constructor(
		private _http: Http) { }
	/* GET */
	getPoints(issueId: string, type: string): Observable<any> {
		return this._http.get(
			this.endpoint + '/points/getPoints/' +
			type +
			'/' +
			issueId)
			.map(res => res.json());
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
	insertPoint(point: Point): Observable<any> {
		const body = JSON.stringify(point);
		const headers = new Headers();
		console.log('Posting');
		headers.append('Content-Type', 'application/json');
		return this._http.post(
			this.endpoint +
			'/points/createPoint',
			body,
			{ headers: headers })
			.map(res => res.json());
	}
	/*insertSupport(pointIndx: number, support: Support):number{
		if(this.selectedPoints[pointIndx]['supports']){
			this.selectedPoints[pointIndx]['supports'].unshift(support);
			return 200;
		}else{
			console.log('No supports');
			return 400;
		}
	}*/
	/* DELETE */
	deletePoint(point: Point): Observable<any> {		
		return this._http.delete(
			this.endpoint +
			'/points/deletePoint/' +
			point.type +
			'/' +
			point.issue_id +
			'/' +
			point._id)
			.map(res => res);
	}
}
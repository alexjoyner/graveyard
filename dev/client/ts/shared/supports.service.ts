import {Injectable} from 'angular2/core';
import {Support} from './support';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class SupportsService {
	private endpoint: string = '';
	constructor(
		private _http: Http) { }
	/* GET */
	getSupports(pointId: string): Observable<any> {
		return this._http.get(
			this.endpoint + 
			'/supports/getSupport/' + 
			pointId)
		.map(res => res.json());
	}
	getSupport(_id: string){

	}

	/* POST */
	insertSupport(support: Support): Observable<any> {
		const body = JSON.stringify(support);
		const headers = new Headers();
		console.log('Posting: ', support);
		headers.append('Content-Type', 'application/json');
		return this._http.post(
			this.endpoint +
			'/supports/createSupportPoint',
			body,
			{ headers: headers })
			.map(res => res);
	}

	/* DELETE */
	deleteSupport(supportId: string){
		// id in the future
		return this._http.delete(
			this.endpoint +
			'/supports/removeSupportPoint/' +
			supportId)
			.map(res => res);
	}
}
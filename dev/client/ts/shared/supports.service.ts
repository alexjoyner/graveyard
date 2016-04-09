import {Injectable} from 'angular2/core';
import {Support} from './support';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';
import {AuthService} from './auth.service';

@Injectable()
export class SupportsService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _authService: AuthService) { }
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
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		return this._http.post(
			this.endpoint +
			'/supports/createSupportPoint',
			body,
			{ headers: headers })
			.map(res => res.json());
	}

	/* DELETE */
	deleteSupport(supportId: string) {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		// id in the future
		return this._http.delete(
			this.endpoint +
			'/supports/removeSupportPoint/' +
			supportId)
			.map(res => res);
	}
}
import {Injectable} from 'angular2/core';
import {User} from './user';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';

@Injectable()
export class UsersService {
	private endpoint: string = Config.endpoint;
	public profile;
	constructor(
		private _http: Http) { }
	/* GET */
	getProfile(): Observable<any> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		return this._http.get(
			this.endpoint + 
			'/users/profile',
			{headers : headers})
		.map(res => res.json());
	}
	/* POST */

	/* DELETE */
}
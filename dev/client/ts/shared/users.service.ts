import {Injectable} from 'angular2/core';
import {User} from './user';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';
import {GlobalHandlerService} from './globalHandler.service';

@Injectable()
export class UsersService {
	private endpoint: string = Config.endpoint;
	public profile;
	constructor(
		private _http: Http,
		private _globalHandlerService: GlobalHandlerService) { }
	/* GET */
	getProfile(): Observable<any> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.get(
			this.endpoint + 
			'/users/profile',
			{headers : headers})
			.map(res => res.json());
		res.subscribe(
			data => null,
			err => {
				this._globalHandlerService.emitStatusMessage({
					status: err.status,
					body: err._body
				})
			})
		return res;
	}
	/* POST */

	/* DELETE */
}
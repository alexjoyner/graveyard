import {Http, Headers} from 'angular2/http';
import {Injectable, EventEmitter} from 'angular2/core';
import {User} from './user';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config/config';
import {Router} from 'angular2/router';
@Injectable()
export class AuthService {
	private endpoint: string = Config.endpoint;
	private _userLoggedOut: EventEmitter<any> = new EventEmitter();
	constructor(
		private _http: Http,
		private _router: Router) { }
	/* GET */

	/* POST */
	attemptLogin(user: User): Observable<any> {
		const body = JSON.stringify(user);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post(
			this.endpoint + '/auth/login',
			body,
			{ headers: headers })
			.map(res => res.json());
	}
	attemptSignup(user: User): Observable<any> {
		const body = JSON.stringify(user);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post(
			this.endpoint + '/auth/signup',
			body,
			{ headers: headers })
			.map(res => res.json());
	}

	/* DELETE */
	//delete accout


	// Misc
	logout() {
		localStorage.removeItem('token');
		this._userLoggedOut.emit(null);
	}

	/* Made so the root component can access the  event emitter
	of the userLoggedOut event And subscribe to listen to it
	*/
	getLoggedOutEvent(): EventEmitter<any> {
		return this._userLoggedOut;
	}
	checkValid(): boolean{
		if(localStorage.getItem('token') !== null){
			return true;
		}else{
			this._router.navigate(['Auth']);
		}
	}
}
// Angular imports
import {Injectable, EventEmitter} from "angular2/core";
import {Router} from "angular2/router";
import {Http, Headers} from "angular2/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {Config} from "../../config/config";
import {User} from "../structures/user";
import {GlobalHandlerService} from "../special-services/globalHandler.service";
import {UsersService} from "../net-services/users.service";

// Imports needed for http


@Injectable()
export class AuthService {
	private endpoint: string = Config.endpoint;
	private _userLoggedOut: EventEmitter<any> = new EventEmitter();
	constructor(
		private _http: Http,
		private _router: Router,
		private _globalHandlerService: GlobalHandlerService,
		private _usersService: UsersService) { }
	/* GET */

	/* POST */
	attemptLogin(user?: User): Observable<any> {
		const body = JSON.stringify(user);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let res = this._http.post(
			this.endpoint + '/auth/login',
			body,
			{ headers: headers })
			.map(res => res.json());
		res.subscribe(
			data => {
				let tempFollowArray: number[] = [];
				for(var i = 0; i < data.profile.follows.length; i++){
					tempFollowArray.push(data.profile.follows[i].post_id);
				}
				localStorage.setItem('token', data.token);
				this._usersService.profile = data.profile;
				this._usersService.profile.follows = tempFollowArray;
				console.log('STORED PROFILE: ', this._usersService.profile);
				this._router.navigate(['Home'])
			},
			err => {
				this._globalHandlerService.emitStatusMessage({
					status: err.status,
					body: err._body
				})
			});
		return res;
	}

	attemptSignup(user: User, specialCode: string): Observable<any> {
		user['specialCode'] = specialCode;
		const body = JSON.stringify(user);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let res = this._http.post(
			this.endpoint + '/auth/signup',
			body,
			{ headers: headers })
			.map(res => res.json());
		res.subscribe(
			data => {
				//if(this.remember){
				localStorage.setItem('token', data.token);
				//}
				this._usersService.profile = data.profile;
				this._usersService.showTut = true;
				this._router.navigate(['Home']);
			},
			err => {
				this._globalHandlerService.emitStatusMessage({
					status: err.status,
					body: err._body
				})
			});
		return res;
	}

	/* DELETE */
	//delete account

	// Misc
	logout() {
		if (localStorage.getItem('token')) {
			localStorage.removeItem('token')
		}
		this._userLoggedOut.emit(null);
		this._router.navigate(['Auth']);
	}

	/* Made so the root component can access the  event emitter
	of the userLoggedOut event And subscribe to listen to it
	*/
	getLoggedOutEvent(): EventEmitter<any> {
		return this._userLoggedOut;
	}

	/* Quick way to verify if a user is logged in or not*/
	checkTokenExists(flag?: boolean): boolean{
		if(localStorage.getItem('token') !== null){
			return true;
		}else{
			if(flag){
				return false;
			}else{
				this._router.navigate(['Auth']);
			}
		}
	}
}
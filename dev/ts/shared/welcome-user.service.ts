import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';

@Injectable()
export class WelcomeUserService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http) { }
	/* POST */
	welcomeNewUser(fullName: string, email: string, interests: [string], concerns: [string], tester: boolean): Observable<any> {
		const body = JSON.stringify({
			fullName: fullName, 
			email: email, 
			interests: interests,
			concerns: concerns,
			tester: tester
		});
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		console.log('Posting: ', body);
		let res = this._http.post(
			this.endpoint + '/welcome/new',
			body,
			{ headers: headers })
			.map(res => res.json());
		return res;
	}
	
}
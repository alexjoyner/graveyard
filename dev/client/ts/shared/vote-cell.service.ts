import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';

@Injectable()
export class VoteService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http) { }
	/*POST*/
	vote( 
		srcId: string, 
		voteType: number){
		let body = JSON.stringify({
			thing_id: srcId,
			vote_type_id: voteType
		});
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		return this._http.post(
				this.endpoint +
				'/votes/create',
				body,
				{ headers: headers })
				.map(res => res.json());
		}
	}
}









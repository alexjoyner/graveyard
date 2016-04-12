import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';

@Injectable()
export class VoteCellService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http) { }
	/*POST*/
	addVote(
		srcType: string, 
		srcId: string, 
		voteType: string){
		let body = JSON.stringify({
			srcType: srcType,
			thing_id: srcId,
			vote_type: voteType
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
				.map(res => res);
		}
	}
}









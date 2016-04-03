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
		let body: string;
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		switch(srcType){
			case 'issue':
				body = JSON.stringify({
					voteType: voteType,
					issueId: srcId
				});
				break;
			case 'point':
				body = JSON.stringify({
					voteType: voteType,
					pointId: srcId
				});
				break;
			case 'support':
				body = JSON.stringify({
					voteType: voteType,
					supportId: srcId
				});
				break;
			default:
				console.log('No source type found');
				return
		}
		console.log('VOTING');
		return this._http.post(
				this.endpoint +
				'/votes/'+srcType,
				body,
				{ headers: headers })
				.map(res => res);
		}
	}
}









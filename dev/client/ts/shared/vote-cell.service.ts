import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
@Injectable()
export class VoteCellService {
	private endpoint: string = '';
	constructor(
		private _http: Http) { }
	/*POST*/
	addVote(
		srcType: string, 
		srcId: string, 
		voteType: string){
		console.log(srcType, srcId, voteType);
		if(srcType === 'issue'){
			const body = JSON.stringify({
				voteType: voteType,
				issueId: srcId
			});
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			return this._http.post(
				this.endpoint + 
				'/votes/issue', 
				body,
				{ headers: headers })
				.map(res => res);
		}else
		if (srcType === 'point') {
			const body = JSON.stringify({
				voteType: voteType,
				pointId: srcId
			});
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			return this._http.post(
				this.endpoint +
				'/votes/point',
				body,
				{ headers: headers })
				.map(res => res);
		} else
		if (srcType === 'support') {
			const body = JSON.stringify({
				voteType: voteType,
				supportId: srcId
			});
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			return this._http.post(
				this.endpoint +
				'/votes/support',
				body,
				{ headers: headers })
				.map(res => res);
		} else {
			console.log('No source type found');
		}
	}
}









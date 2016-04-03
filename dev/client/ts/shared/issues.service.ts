import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Issue} from './issue';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config/config';
import {AuthService} from './auth.service';
@Injectable()
export class IssuesService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _authService: AuthService) {}
	/* GET */
	getAllIssues(): Observable<any> {
		return this._http.get(
			this.endpoint + '/issues/all')
			.map(res => res.json());
	}
	getIssue(issueId: string){
		return this._http.get(
			this.endpoint + '/issues/' + issueId)
			.map(res => res.json());
	}
	/* POST */
	insertIssue(issue: Issue): Observable<any> {
			const body = JSON.stringify(issue);
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.post(
				this.endpoint + '/issues/newIssue',
				body,
				{ headers: headers })
					.map(res => res.json());
	}
	updateIssue(issue: Issue): Observable<any>{
			const body = JSON.stringify(issue);
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.post(
				this.endpoint + '/issues/updateIssue',
				body,
				{ headers: headers })
				.map(res => res);
	}
	/* DELETE */
	deleteIssue(issueId: string): Observable<any> {
			const headers = new Headers();
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.delete(
				this.endpoint + '/issues/deleteIssue/' + issueId,
				headers)
				.map(res => res);
	}
}
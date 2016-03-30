import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Issue} from './issue';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class IssuesService {
	private endpoint: string = 'http://localhost:9000';
	constructor(
		private _http: Http) {}
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
		return this._http.post(
			this.endpoint + '/issues/newIssue',
			body,
			{ headers: headers })
				.map(res => res.json());
	}
	/* DELETE */
	deleteIssue(issueId: string): Observable<any> {
		return this._http.delete(
			this.endpoint + '/issues/deleteIssue/' + issueId)
			.map(res => res);
	}
}
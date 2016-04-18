import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../config/config';
@Injectable()
export class TagsService {
	private endpoint: string = Config.endpoint;
	public profile;
	constructor(
		private _http: Http) { }
	/* GET */
	getTags(searchTerm: string): Observable<any> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.get(
			this.endpoint +
			'/tags/'+searchTerm,
			{ headers: headers })
			.map(res => res.json());
		res.subscribe(
			data => {
				console.log('Got tags: ', data);
			},
			err => console.log('Err: ', err);)
		return res;
	}
	/* POST */
	postTag(tagName: string): Observable<any> {
		const body = JSON.stringify({
			tag_name: tagName
		});
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.post(
			this.endpoint +
			'/tags/create',
			body,
			{ headers: headers })
			.map(res => res.json());
		return res;

	}
	/* DELETE */
}
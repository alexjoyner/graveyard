import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../../config/config';
@Injectable()
export class TagsService {
	private endpoint: string = Config.endpoint;
	public profile;
	constructor(
		private _http: Http) { }
	/* GET */
	getTags(searchTerm: string, type: number): Observable<any> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.get(
			this.endpoint +
			'/tags/'+searchTerm+'/'+type,
			{ headers: headers })
			.map(res => res.json());
		res.subscribe(
			data => {
				console.log('Got tags: ', data);
			},
			err => console.log('Err: ', err))
		return res;
	}
	/* POST */
	postTag(tagName: string, tagType: number): Observable<any> {
		const body = JSON.stringify({
			tag_name: tagName,
			tag_type_id: tagType
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
	addTagToPost(tagId: number, postId: number): Observable<any> {
		const body = JSON.stringify({
			tag_id: tagId,
			post_id: postId
		});
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.post(
			this.endpoint +
			'/tags/addToPost',
			body,
			{ headers: headers })
			.map(res => res.json());
		return res;

	}
	/* DELETE */
	removeTagFromPost(
		tag_id: number,
		post_id: number){
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.delete(
			this.endpoint +
			'/tags/removeTagFromPost/'
			+tag_id
			+'/'
			+post_id,
			{ headers: headers })
			.map(res => res.json());
	}
}
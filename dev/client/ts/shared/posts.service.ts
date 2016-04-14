import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config/config';
import {AuthService} from './auth.service';
@Injectable()
export class PostsService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _authService: AuthService) {}
	/* GET */
	getAllPosts(): Observable<any> {
		return this._http.get(
			this.endpoint + '/posts/all')
			.map(res => res.json());
	}
	getPost(postId: string, pointType: string){
		return this._http.get(
			this.endpoint + '/posts/' + 
			postId + 
			'/' +
			pointType)
			.map(res => res.json());
	}
	/* POST */
	insertPost(post: Post): Observable<any> {
			const body = JSON.stringify(post);
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.post(
				this.endpoint + '/posts/newPost',
				body,
				{ headers: headers })
					.map(res => res.json());
	}
	updatePost(post: Post): Observable<any>{
			const body = JSON.stringify(post);
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.post(
				this.endpoint + '/posts/updatePost',
				body,
				{ headers: headers })
				.map(res => res);
	}
	/* DELETE */
	deletePost(postId: number, issueId?: number, mainPointType?: string): Observable<any> {
		//'/deletePost/:postId/:issueId/:mainPointType'
			const headers = new Headers();
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.delete(
				this.endpoint + '/posts/deletePost/' + 
				postId + '/' +
				issueId + '/' +
				mainPointType,
				{headers: headers})
				.map(res => res);
	}
}
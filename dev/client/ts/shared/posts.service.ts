import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Config} from '../config/config';
import {AuthService} from './auth.service';
import {GlobalHandlerService} from './globalHandler.service';
@Injectable()
export class PostsService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _authService: AuthService,
		private _globalHandlerService: GlobalHandlerService) {}
	/* GET */
	getAllPosts(): Observable<any> {
		const headers = new Headers();
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		var req = this._http.get(
			this.endpoint + '/posts/all',
			{ headers: headers })
			.map(res => res.json());
		req.subscribe(
			data => {
				console.log('GOT POSTS');
			},
			err => {
				this._globalHandlerService.emitStatusMessage({
					status: err.status,
					body: err._body
				})
			});
		return req;
			
	}
	getPost(postId: string, pointType: string) {
		const headers = new Headers();
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		return this._http.get(
			this.endpoint + '/posts/' + 
			postId + 
			'/' +
			pointType,
			{ headers: headers })
			.map(res => res.json());
	}
	/* POST */
	insertPost(data: {post: Post, tags: []}): Observable<any> {
			const body = JSON.stringify(data);
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
	deletePost(postId: number, questionId?: number, mainPointType?: string): Observable<any> {
		//'/deletePost/:postId/:questionId/:mainPointType'
			const headers = new Headers();
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.delete(
				this.endpoint + '/posts/deletePost/' + 
				postId + '/' +
				questionId + '/' +
				mainPointType,
				{headers: headers})
				.map(res => res);
	}
}
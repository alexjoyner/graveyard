import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Post} from '../structures/post';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Config} from '../../config/config';
import {AuthService} from './auth.service';
import {GlobalHandlerService} from '../special-services/globalHandler.service';
import {UsersService} from "./users.service";

@Injectable()
export class PostsService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _authService: AuthService,
		private _globalHandlerService: GlobalHandlerService,
		private _usersService: UsersService) {}
	/* GET */
	getFeed(feed_name: string, page_num: number): Observable<any> {
		const headers = new Headers();
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		var req = this._http.get(
			this.endpoint + '/posts/'
			+ feed_name
			+ '/'
			+ page_num,
			{ headers: headers })
			.map(res => res.json());
		return req;
			
	}
	getAllByTagId(tagId: number, page_num: number): Observable<any> {
		const headers = new Headers();
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		var req = this._http.get(
			this.endpoint + '/posts/topic/'
			+ tagId
			+ '/'
			+ page_num,
			{ headers: headers })
			.map(res => res.json());
		/*req.subscribe(
			data => {
				console.log('GOT POSTS');
			},
			err => {
				this._globalHandlerService.emitStatusMessage({
					status: err.status,
					body: err._body
				})
			});*/
		return req;

	}
	getPost(postId: string) {
		const headers = new Headers();
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		return this._http.get(
			this.endpoint + '/post/' +
			postId,
			{ headers: headers })
			.map(res => res.json());
	}
	searchPosts(type: number, searchTerm: string): Observable<any> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		let res = this._http.get(
			this.endpoint +
			'/posts/search/' + type + '/'+ searchTerm,
			{ headers: headers })
			.map(res => res.json());
		res.subscribe(
			data => {
				console.log('Got Posts: ', data);
			},
			err => console.log('Err: ', err))
		return res;
	}
	/* POST */
	insertPost(data: {post: Post, tags?: [number]}, privQ?: boolean): Observable<any> {
		console.log(privQ);
		(privQ) ? data.post['privQ'] = privQ : data.post['privQ'] = false;
		console.log('Post data: ', data);
		const body = JSON.stringify(data);
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('x-access-token',
			(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
		var res = this._http.post(
			this.endpoint + '/new/post',
			body,
			{ headers: headers })
				.map(res => res.json());
		return res;
	}
	updatePost(post: Post): Observable<any>{
			const body = JSON.stringify(post);
			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('x-access-token',
				(localStorage.getItem('token')) ? localStorage.getItem('token') : null);
			return this._http.post(
				this.endpoint + '/posts/update',
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
				this.endpoint + '/posts/remove/' +
				postId,
				{headers: headers})
				.map(res => res);
	}
}
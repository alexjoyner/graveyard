import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {Config} from '../../config/config';
import {UsersService} from './users.service';
import {AuthService} from "./auth.service";

@Injectable()
export class VoteService {
	private endpoint: string = Config.endpoint;
	constructor(
		private _http: Http,
		private _usersService: UsersService,
		private _authService: AuthService
		) {}
	/*POST*/
	vote( 
		srcId: number, 
		voteType: number){
		let body = JSON.stringify({
			thing_id: srcId,
			vote_type_id: voteType
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
				.map(res => res.json());
		}
	/*
	* This function should take a set of posts and figure out which ones a user has voted on,
	* and set properties accordingly*/
	checkPostsUserVoted(posts){
		// If the user is logged in, check which of the posts the user has voted on if any
		if (this._authService.checkTokenExists(true)) {
			// Loop through all of the posts
			for (var i = 0; i < posts.length; i++) {
				// Assume the user hasn't voted on the isue to start
				posts[i]['upVoted'] = false;
				posts[i]['downVoted'] = false;
				// Loop through the users votes in their profile
				for (var j = this._usersService.profile.votes.length - 1; j >= 0; j--) {
					/*
					 * Check the id's of all the votes the user has voted on, if one equals
					 * the checked post's id, set the appropriated property*/
					if (this._usersService.profile.votes[j].post_id === posts[i]._id) {
						switch (this._usersService.profile.votes[j].vote_type_id) {
							case 1:
								posts[i]['upVoted'] = true;
								break;
							case 2:
								posts[i]['downVoted'] = true;
								break;
						}
						posts[i]['indexOfVote'] = j;
					}
				}
			}
		}
		return posts;
	}
}









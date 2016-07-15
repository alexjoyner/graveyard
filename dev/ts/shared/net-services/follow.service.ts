import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Http, Headers} from 'angular2/http';
import {Config} from '../../config/config';
import {UsersService} from './users.service';

@Injectable()
export class FollowService {
    private endpoint: string = Config.endpoint;
    constructor(
        private _http: Http,
        private _usersService: UsersService) {}
    /*POST*/
    follow(
        post_id: number){
        let body = JSON.stringify({
            post_id: post_id,
            user_id: this._usersService.profile._id
        });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        return this._http.post(
            this.endpoint +
            '/follows/follow',
            body,
            { headers: headers })
            .map(res => res.json());
    };
    unFollow(
        post_id: number){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        return this._http.delete(
            this.endpoint +
            '/follows/unfollow/'
                +this._usersService.profile._id
            +'/'
                +post_id,
            { headers: headers })
            .map(res => res.json());
    }
}
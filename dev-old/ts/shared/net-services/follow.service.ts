import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Headers} from '@angular/http';
import {Config} from '../../config/config';
import {UsersService} from './users.service';

@Injectable()
export class FollowService {
    private endpoint: string = Config.endpoint;
    constructor(
        private _http: Http,
        private _usersService: UsersService) {
    }
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
                +post_id,
            { headers: headers })
            .map(res => res.json());
    }
}
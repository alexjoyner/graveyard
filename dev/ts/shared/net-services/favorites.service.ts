import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {Config} from '../../config/config';
@Injectable()
export class FavoritesService {
    private endpoint: string = Config.endpoint;
    public profile;
    constructor(
        private _http: Http) {
    }
    /* GET */
    getFavorites(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        let res = this._http.get(
            this.endpoint +
            '/favorites/my',
            { headers: headers })
            .map(res => res.json());
        res.subscribe(
            data => {
                console.log('Got favorites: ', data);
            },
            err => console.log('Err: ', err))
        return res;
    }
    /* POST */
    addFavorite(tagId: number): Observable<any> {
        const body = JSON.stringify({
            tag_id: tagId
        });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        let res = this._http.post(
            this.endpoint +
            '/favorites/create',
            body,
            { headers: headers })
            .map(res => res.json());
        return res;

    }
    /* DELETE */
    unFavorite(
        post_id: number){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        return this._http.delete(
            this.endpoint +
            '/favorites/unfavorite/'+post_id,
            { headers: headers })
            .map(res => res.json());
    }
}
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from 'angular2/http';
import {Config} from '../../config/config';
@Injectable()
export class NotificationsService {
    private endpoint: string = Config.endpoint;
    public profile;
    constructor(
        private _http: Http) { }
    /* GET */
    getAllMyNotifs(): Observable<any> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        let res = this._http.get(
            this.endpoint +
            '/notifs/my/unread',
            { headers: headers })
            .map(res => res.json());
        res.subscribe(
            data => {
                console.log('Got notifications: ', data);
            },
            err => console.log('Err: ', err))
        return res;
    }
    /*POST*/
    readNotif(id: number): Observable<any> {
        const body = JSON.stringify({
            notif_id: id
        });
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token',
            (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
        let res = this._http.post(
            this.endpoint +
            '/notifs/read',
            body,
            { headers: headers })
            .map(res => res.json());
        return res;

    }
}
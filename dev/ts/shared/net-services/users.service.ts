import {Injectable} from "@angular/core";
import {User} from "../structures/user";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {Http, Headers} from "@angular/http";
import {Config} from "../../config/config";
import {GlobalHandlerService} from "../special-services/globalHandler.service";
import {Router} from "@angular/router";
@Injectable()
export class UsersService {
    private endpoint: string = Config.endpoint;
    public profile: User = undefined;
    public showTut: boolean = false;
    public recentPages = [];

    constructor(private _http: Http,
                private _globalHandlerService: GlobalHandlerService,
                private _router: Router) {
    }

    setViewed(id: number, title: string): void {
        /* Logic to set recent pages as a user navigates between questions */
        let found: boolean = false;
        let index;
        /* Loop through all of the recent pages*/
        for (let i = 0; i < this.recentPages.length; i++) {
            /* If the question is already in recently viewed, tag it as found*/
            if (this.recentPages[i].id === id) {
                found = true;
                index = i;
            }
        }
        /* If the question was found, splice it out and bring it to the front of recentViewed*/
        if (found) {
            console.log("Step 1");
            this.recentPages.splice(index, 1);
            this.recentPages.unshift({"id": id, "title": title});
        } else
        /* If it wasn"t found, but there isn"t more space, pull out the last thing and add new*/
        if (!found && this.recentPages.length >= 5) {
            console.log("Step 2");
            this.recentPages.splice(this.recentPages.length - 1, 1);
            this.recentPages.unshift({"id": id, "title": title});
        } else { /* If the question wasn"t found, add it*/
            console.log("Step 3");
            this.recentPages.unshift({"id": id, "title": title});
        }
    };

    /* GET */
    getProfile(): Observable<any> {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-access-token",
            (localStorage.getItem("token")) ? localStorage.getItem("token") : null);
        let res = this._http.get(
            this.endpoint +
            "/users/profile",
            {headers: headers})
            .map(res => res.json());
        res.subscribe(
            data => {
                let tempFollowArray: number[] = [];
                for (let i = 0; i < data.follows.length; i++) {
                    tempFollowArray.push(data.follows[i].post_id);
                }
                this.profile = data;
                this.profile.follows = tempFollowArray;
                console.log("Stored profile: ", this.profile);
            },
            err => {
                console.log("ERROR");
                this._globalHandlerService.emitStatusMessage({
                    status: err.status,
                    body: err._body
                });
            });
        return res;
    }

    /* POST */

    /* DELETE */
}

import {Component} from "angular2/core";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
@Component({
    selector: 'mt-recently-viewed',
    template: require('./recently-viewed.tpl.html'),
    directives: [ROUTER_DIRECTIVES]
})
export class RecentlyViewedComponent{
    private recentViewed;
    private currentId: number;
    constructor(
        private _usersService: UsersService,
        private _routeParams: RouteParams
    ) {
        this.currentId = +this._routeParams.get('id') || 0;
        this.recentViewed = this._usersService.recentPages;
    }
}
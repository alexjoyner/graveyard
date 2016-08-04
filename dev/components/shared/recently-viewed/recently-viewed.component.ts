import {Component} from "@angular/core";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";
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
        private _activatedRoute: ActivatedRoute
    ) {
        this.currentId = +this._activatedRoute.snapshot.params['id'] || 0;
        this.recentViewed = this._usersService.recentPages;
    }
}
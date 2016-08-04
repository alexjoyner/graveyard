import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Post} from "../../../ts/shared/structures/post";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {VoteCellComponent} from "../vote-cell/vote-cell.component";
import {FollowButtonComponent} from "../follow-button/follow-button.component";
import {ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: 'mt-post',
    template: require('./post.tpl.html'),
    directives: [VoteCellComponent, FollowButtonComponent, ROUTER_DIRECTIVES]
})
export class PostComponent {
    @Input() post: Post;
    constructor(
        private _usersService: UsersService
    ){}
    isOwner(id: number) {
        return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
    }
}
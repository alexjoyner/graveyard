import {Component, Input} from '@angular/core';
import {Post} from "../../../ts/shared/structures/post";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {VoteCellComponent} from "../vote-cell/vote-cell.component";
import {FollowButtonComponent} from "../follow-button/follow-button.component";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";


@Component({
    selector: 'mt-post',
    template: require('./post.tpl.html'),
    directives: [VoteCellComponent, FollowButtonComponent, ROUTER_DIRECTIVES]
})
export class PostComponent {
    @Input() post: Post;
    constructor(
        private _usersService: UsersService,
        private _router: Router
    ){}
    isOwner(id: number) {
        return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
    }

    goToQuestion(id: number){
        let link = ['/question', id];
        this._router.navigate(link);
    }
}
import {Component, Input, OnInit} from "@angular/core";
import {FollowService} from "../../../ts/shared/net-services/follow.service";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {UsersService} from "../../../ts/shared/net-services/users.service";

@Component({
    'selector': 'mt-follow-button',
    'template': require('./follow-button.tpl.html'),
    'providers': [FollowService]
})

export class FollowButtonComponent implements OnInit {
    @Input() postId:number;
    private isFollowing:boolean;

    constructor(private _followService:FollowService,
                private _authService:AuthService,
                private _usersService:UsersService) {
        // this.checkFollowingState() TODO: When a follow button is initialized, check the state according to the user
    };

    ngOnInit():any {
        if (this._authService.checkTokenExists(true)) {
            this.isFollowing = (this._usersService.profile.follows.indexOf(this.postId) > -1) ? true : false;
        }
    }

    follow() {
        if (this._authService.checkTokenExists()) {
            if (!this.isFollowing) {
                this._followService.follow(this.postId)
                    .subscribe(
                        data => {
                            console.log('Success! : ', data);
                            this._usersService.profile.follows.push(this.postId);
                            this.isFollowing = true;
                        },
                        err => {
                            console.log('Error: ', err);
                        }
                    );
            }else{
                this._followService.unFollow(this.postId)
                    .subscribe(
                        data => {
                            console.log('Success! : ', data);
                            this._usersService.profile.follows.splice(this.postId, 1);
                            this.isFollowing = false;
                        },
                        err => {
                            console.log('Error: ', err);
                        }
                    );
            }

        }
    }
}
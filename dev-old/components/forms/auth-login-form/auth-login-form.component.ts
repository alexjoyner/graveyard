import {Component} from "@angular/core";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {User} from "../../../ts/shared/structures/user";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {GlobalHandlerService} from "../../../ts/shared/special-services/globalHandler.service";
@Component({
    'selector': 'mt-login-form',
    'template': require('./auth-login-form.tpl.html'),
    styles: [require('./_auth-login-form.sass')]
})

export class AuthLoginFormComponent {
    private _user: User = new User('', '', null);

    constructor(
        private _authService: AuthService,
        private _usersService: UsersService,
        private _globalHandlerService: GlobalHandlerService
    ){}

    login(){
        this._authService.attemptLogin(this._user).subscribe(
            data => {
                let tempFollowArray: number[] = [];
                for (let i = 0; i < data.profile.follows.length; i++) {
                    tempFollowArray.push(data.profile.follows[i].post_id);
                }
                localStorage.setItem("token", data.token);
                this._usersService.profile = data.profile;
                this._usersService.profile.follows = tempFollowArray;
                // console.log("STORED PROFILE: ", this._usersService.profile);
                // let link = ["/"];
                // this._router.navigate(link);
            },
            err => {
                this._globalHandlerService.emitStatusMessage({
                    status: err.status,
                    body: err._body
                });
            });
    }
}
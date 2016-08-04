import {Component} from "@angular/core";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {User} from "../../../ts/shared/structures/user";
@Component({
    'selector': 'mt-login-form',
    'template': require('./auth-login-form.tpl.html')
})

export class AuthLoginFormComponent {
    private _user: User = new User('', '', null);

    constructor(
        private _authService: AuthService
    ){}

    login(){
        this._authService.attemptLogin(this._user);
    }
}
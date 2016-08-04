import {Component} from "angular2/core";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {User} from "../../../ts/shared/structures/user";
@Component({
    selector: 'mt-signup-form',
    template: require('./auth-signup-form.tpl.html')
})
export class AuthSignupFormComponent {
    private _user: User = new User('', '', null);
    private specialCode: string;
    constructor(
        private _authService: AuthService) {};

    signUp(){
        this._authService.attemptSignup(this._user, this.specialCode);
    }
}
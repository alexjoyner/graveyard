import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {User} from "../../../ts/shared/structures/user";
declare function require(name: string);
// Angular Imports

// Services

// Structures

@Component({
    // Selector not needed because this is a route
    /*selector: 'ro-auth-container',*/
    template: require('dev/components/containers/auth-container/auth-container.tpl.html'),
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class AuthContainerComponent{
	private user: User = new User('', '', null);
	private specialCode: string;
	remember: boolean = false; 
	constructor(
		private _authService: AuthService) {};

	login(){
		this._authService.attemptLogin(this.user);
	}
	signUp(){
		this._authService.attemptSignup(this.user, this.specialCode);
	}
}







































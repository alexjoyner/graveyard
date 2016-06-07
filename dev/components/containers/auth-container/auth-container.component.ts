declare function require(name: string);
// Angular Imports
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

// Services
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';

// Structures
import {User} from '../../../ts/shared/structures/user';

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
	private mode: string = 'login';
	remember: boolean = false; 
	constructor(
		private _authService: AuthService,
		private _router: Router,
		private _usersService: UsersService) {};

	login(){
		this._authService.attemptLogin(this.user);
	}
	signUp(){
		this._authService.attemptSignup(this.user, this.specialCode);
	}
}







































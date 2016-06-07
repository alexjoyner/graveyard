declare function require(name: string);
import {Component} from 'angular2/core';
import {AuthService} from '../../ts/shared/net-services/auth.service';
import {User} from '../../ts/shared/structures/user';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsersService} from '../../ts/shared/net-services/users.service';

@Component({
    selector: 'ro-auth-component',
    template: require('dev/components/auth-container/auth-container.tpl.html'),
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
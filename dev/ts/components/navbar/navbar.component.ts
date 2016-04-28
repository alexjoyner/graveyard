declare function require(name: string);
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../../shared/auth.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-navbar',
    template: require('dev/templates/navbar/navbar.tpl.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})
export class NavbarComponent{
	private email: string;
	constructor(
		private _authService: AuthService,
		private _usersService: UsersService){}

	auth():boolean{
		if (this._usersService.profile) {
			this.email = this._usersService.profile.email;
		}
		return localStorage.getItem('token') || false;
	}
	logout(){
		this._authService.logout();
	}

}
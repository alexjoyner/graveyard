import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../../shared/auth.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-navbar',
    templateUrl: 'templates/navbar/navbar.tpl.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})
export class NavbarComponent implements OnInit{
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
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../../shared/auth.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-navbar',
    templateUrl: 'templates/navbar/navbar.tpl.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})
export class NavbarComponent{
	private email: string = 'email';
	constructor(
		private _authService: AuthService,
		private _usersService: UsersService){}
	auth():boolean{
		return localStorage.getItem('token') || false;
	}
	logout(){
		this._authService.logout();
	}

}
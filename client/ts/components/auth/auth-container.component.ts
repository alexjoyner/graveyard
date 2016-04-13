import {Component} from 'angular2/core';
import {AuthService} from '../../shared/auth.service';
import {User} from '../../shared/user';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsersService} from '../../shared/users.service';

@Component({
    selector: 'ro-auth-component',
    templateUrl: 'templates/auth/auth-container.tpl.html',
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES]
})
export class AuthContainerComponent{
	user: User = new User('', '');
	remember: boolean = false;
	private mode: string = 'login'; 
	constructor(
		private _authService: AuthService,
		private _router: Router,
		private _usersService: UsersService) {};

	login(){
		this._authService.attemptLogin(this.user)
			.subscribe(
				data => {
					console.log('DATA: ', data);
					//if(this.remember){
						localStorage.setItem('token', data.token);
					//}
					this._usersService.profile = data.profile;
					this._router.navigate(['Home']);
				},
				err => console.log('Error: ', err))
	}
	signUp(){
		this._authService.attemptSignup(this.user)
			.subscribe(
				data => {
					//if(this.remember){
						localStorage.setItem('token', data.token);
					//}
					this._usersService.profile = data.profile;
					this._router.navigate(['Home']);
				},
				err => console.log('Error: ', err))
	}
}
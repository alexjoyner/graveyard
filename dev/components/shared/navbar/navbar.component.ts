import {PostsService} from "../../../ts/shared/net-services/posts.service";
declare function require(name: string);
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {DropdownComponent} from "../../misc/dropdown/dropdown.directive";
import {CreateQuestionFormComponent} from "../../forms/create-question-form/create-question-form.component";
@Component({
    selector: 'ro-navbar',
    template: require('dev/components/shared/navbar/navbar.tpl.html'),
    directives: [ROUTER_DIRECTIVES, DropdownComponent, CreateQuestionFormComponent],
    providers: [AuthService, PostsService]
})
export class NavbarComponent{
	private email: string;
	private dataSearched: any = null;
	private startQuestion: boolean = false;
	constructor(
		private _authService: AuthService,
		private _usersService: UsersService,
		private _postsService: PostsService){}

	auth():boolean{
		if (this._usersService.profile) {
			this.email = this._usersService.profile.email;
		}
		return localStorage.getItem('token') || false;
	}
	logout(){
		this._authService.logout();
	}
	/* Search filter function to filter out questions*/
	searchStuff(searchValue: string){
		let searchString = (searchValue)? searchValue : '';
		//					(type: number, searchtext: string)
		this._postsService.searchPosts(1, searchString)
			.subscribe(data => {
					console.log(data);
					this.dataSearched = (data.length > 0)?  data : null;
				},
				err => console.log('ERROR: ', err));
	}
	valueSelected(){
		console.log('Routing away');
		this.dataSearched = null;
	}
}
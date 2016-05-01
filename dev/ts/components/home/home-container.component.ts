declare function require(name: string);
import {Component, OnInit} from 'angular2/core';
import {HomeQuestionListComponent} from './home-question-list.component';
import {UsersService} from '../../shared/users.service';
import {AuthService} from '../../shared/auth.service';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../../shared/post';
import {CreateQuestionFormComponent} from '../forms/create-question-form.component';
@Component({
    selector: 'ro-home-container',
    template: require('dev/templates/home/home-container.tpl.html'),
    directives: [HomeQuestionListComponent, CreateQuestionFormComponent],
    providers: [PostsService]
})
export class HomeContainerComponent implements OnInit{
	searchText: string = '';
	startQuestion: boolean = false;
	private questions: Post[];
	private showCreateQuestion: boolean;
	constructor(
		private _usersService: UsersService,
		private _authService: AuthService,
		private _postsService: PostsService){
		if (_authService.checkValid()) {
			_postsService.getAllPosts()
				.subscribe(data => {
					console.log('ISSUES START: ', this.questions);
					console.log('ISSUES: ', data);
					this.questions = data;
					console.log('ISSUES after: ', this.questions);
				});
		}
	}

	ngOnInit():any {
		console.log('HEY');
		if(this._usersService.showTut){
			setTimeout(()=>
				document.getElementById("step-1-welcome").checked = true, 1000)
		}
	}
	searchQuestions(searchValue: string){
		let searchString = (searchValue)? searchValue : this.searchText
		//					(type: number, searchtext: string)
		this._postsService.searchPosts(1, searchString)
			.subscribe(data => {
				console.log('ISSUES START: ', this.questions);
				console.log('ISSUES: ', data);
				this.questions = data;
				console.log('ISSUES after: ', this.questions);
			},
			err => console.log('ERROR: ', err));
	}
	showTut(){
		this._usersService.showTut = true;
	}
	endTut() {
		console.log('Ended tut');
		this._usersService.showTut = false;

	}
}
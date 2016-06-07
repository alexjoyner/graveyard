declare function require(name: string);
import {Component, OnInit} from 'angular2/core';
import {HomeQuestionListComponent} from '../home-question-list/home-question-list.component';
import {UsersService} from '../../ts/shared/net-services/users.service';
import {AuthService} from '../../ts/shared/net-services/auth.service';
import {PostsService} from '../../ts/shared/net-services/posts.service';
import {Post} from '../../ts/shared/structures/post';
import {CreateQuestionFormComponent} from '../forms/create-question-form/create-question-form.component';
@Component({
    selector: 'ro-home-container',
    template: require('dev/components/home-container/home-container.tpl.html'),
    directives: [HomeQuestionListComponent, CreateQuestionFormComponent],
    providers: [PostsService]
})
export class HomeContainerComponent implements OnInit{
	searchText: string = '';
	startQuestion: boolean = false;
	private questions: Post[];
	private showCreateQuestion: boolean;
	private showQ_ToTut: boolean = false;
	constructor(
		private _usersService: UsersService,
		private _authService: AuthService,
		private _postsService: PostsService){
	}

	ngOnInit(): any {
		if (this._authService.checkTokenExists()) {
			this._postsService.getAllPosts()
				.subscribe(data => {
					console.log('ISSUES START: ', this.questions);
					console.log('ISSUES: ', data);
					this.questions = data;
					console.log('ISSUES after: ', this.questions);
				});
		}
	}
	searchQuestions(searchValue: string){
		this.showQ_ToTut = (searchValue) ? true : false;
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
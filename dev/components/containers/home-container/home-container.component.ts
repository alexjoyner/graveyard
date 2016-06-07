declare function require(name: string);

// Angular Imports
import {Component, OnInit} from 'angular2/core';

// Component Imports
import {HomeQuestionListComponent} from '../../lists/home-question-list/home-question-list.component';
import {CreateQuestionFormComponent} from '../../forms/create-question-form/create-question-form.component';

// Service
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {PostsService} from '../../../ts/shared/net-services/posts.service';

// Structures
import {Post} from '../../../ts/shared/structures/post';


@Component({
	// Routes don't need selectors
    /*selector: 'ro-home-container',*/ 
    template: require('dev/components/containers/home-container/home-container.tpl.html'),
    directives: [HomeQuestionListComponent, CreateQuestionFormComponent],
    providers: [PostsService]
})
export class HomeContainerComponent implements OnInit{
	searchText: string = '';
	startQuestion: boolean = false;
	private questions: Post[];
	private showCreateQuestion: boolean;

	constructor(
		private _authService: AuthService,
		private _postsService: PostsService){
	}

	ngOnInit(): any {
		// When the page loads, Get questions for the user
		if (this._authService.checkTokenExists()) {
			this._postsService.getAllPosts()
				.subscribe(data => {
					this.questions = data;
				});
		}
	}

	/* Search filter function to filter out questions*/
	searchQuestions(searchValue: string){
		let searchString = (searchValue)? searchValue : this.searchText
		//					(type: number, searchtext: string)
		this._postsService.searchPosts(1, searchString)
			.subscribe(data => {
				this.questions = data;
			},
			err => console.log('ERROR: ', err));
	}
}







































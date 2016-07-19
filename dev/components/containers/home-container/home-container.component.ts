import {Component, OnInit} from "angular2/core";
import {HomeQuestionListComponent} from "../../lists/home-question-list/home-question-list.component";
import {CreateQuestionFormComponent} from "../../forms/create-question-form/create-question-form.component";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {PostsService} from "../../../ts/shared/net-services/posts.service";
import {Post} from "../../../ts/shared/structures/post";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {FavoritesCellComponent} from "../../shared/favorites-cell/favorites-cell.component";
declare function require(name: string);


@Component({
	// Routes don't need selectors
    /*selector: 'ro-home-container',*/ 
    template: require('dev/components/containers/home-container/home-container.tpl.html'),
    directives: [NavbarComponent, HomeQuestionListComponent, CreateQuestionFormComponent, FavoritesCellComponent],
    providers: [PostsService]
})
export class HomeContainerComponent implements OnInit{
	private searchText: string = '';
	private startQuestion: boolean = false;
	private questions: Post[];
	private showCreateQuestion: boolean
	private headerText: string = 'Hot posts on MataTruth right now'
	constructor(
		private _authService: AuthService,
		private _postsService: PostsService){
	};

	ngOnInit(): any {
		// When the page loads, Get questions for the user
		if(this._authService.checkTokenExists()){
			this._postsService.getHotPosts()
				.subscribe(data => {
					this.questions = data;
				});
		}
	}
	getQuestionsByTag(data: {tagId: number, tagName: string}){
		if(this._authService.checkTokenExists()){
			this._postsService.getAllByTagId(data.tagId)
				.subscribe(response => {
					this.questions = response;
					this.headerText = 'Top posts in ' + data.tagName;
				});
		}
	}
	getHotRightNow(){
		if(this._authService.checkTokenExists()){
			this._postsService.getHotPosts()
				.subscribe(data => {
					this.questions = data;
					this.headerText = 'Hot posts on MataTruth right now';
				});
		}
	}
	getAllTimeTop(){
		if(this._authService.checkTokenExists()){
			this._postsService.getAllTimeTop()
				.subscribe(response => {
					this.questions = response;
					this.headerText = 'All time top posts';
				});
		}
	}
}







































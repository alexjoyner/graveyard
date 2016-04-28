import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {NewQuestionForm} from './question-form.component';
import {UsersService} from '../../shared/users.service';
import {AuthService} from '../../shared/auth.service';
import {PointsListComponent} from './points-list.component';

@Component({// Route no selector
    templateUrl: 'templates/question/question-container.tpl.html',
    providers: [PostsService],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, NewQuestionForm, PointsListComponent]
})
export class QuestionContainerComponent implements OnInit{
	question: Post = new Post('', 1);
	private _questionId: string;
	private _type: string;
	private _isTut: boolean;
	constructor(
		private _routeParams: RouteParams,
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _authService: AuthService){
	}
	ngOnInit(): any {
		if (this._usersService.showTut) {
			setTimeout(() =>
				document.getElementById("step-4-question-intro").checked = true, 1000)
		}
		if (this._authService.checkValid()) {
			this._questionId = this._routeParams.get('id');
			this._type = this._routeParams.get('type');
			this._postsService.getPost(this._questionId, this._type).
				subscribe(
				data => {
					this.question = data;
					console.log('Saved question: ', this.question);
					console.log(this.question.title);
				},
				err => console.log('Err: ', err)
				);
		}
	}
	endTut(){
		this._usersService.showTut = false;
	}
	deleteQuestion(questionId: number) {
		if (this._authService.checkValid()) {
			let answer = confirm(`Are you sure you want to delete this question? This action can't be undone`);
			if (answer === true) {
				this._postsService.deletePost(questionId)
					.subscribe(
						success => console.log('Success'),
						err => console.log('error: ', err)
					);
			}
		}
	}
	editQuestion(question: Post, event: MouseEvent, cancelFlag: boolean) {
		event.stopPropagation();
		let answer: boolean;
		if(cancelFlag){
			answer = confirm('Canceling will discard changes. Continue?');
		}
		if (answer || !cancelFlag) {
			this.question['editQuestion'] =
				(this.question['editQuestion']) ? !this.question['editQuestion'] : true;
		}
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(id: number) {
		return (id === this._usersService.profile._id);
	}
}
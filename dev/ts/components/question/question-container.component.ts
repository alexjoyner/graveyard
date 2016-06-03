declare function require(name: string);
import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Post} from '../../shared/structures/post';
import {PostsService} from '../../shared/net-services/posts.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/shared-components/vote-cell.component';
import {EditQuestionForm} from '../forms/edit-question-form.component';
import {UsersService} from '../../shared/net-services/users.service';
import {AuthService} from '../../shared/net-services/auth.service';
import {PointsListComponent} from './points-list.component';

@Component({// Route no selector
    template: require('dev/templates/question/question-container.tpl.html'),
    providers: [PostsService],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, EditQuestionForm, PointsListComponent]
})
export class QuestionContainerComponent{
	question: Post = new Post('', 1);
	private _questionId: number;
	private _type: string;
	private _isTut: boolean;
	private questionAvailable: boolean;
	constructor(
		private _routeParams: RouteParams,
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _authService: AuthService) {
		if (this._authService.checkTokenExists()) {
			this._questionId = +this._routeParams.get('id');
			this._type = this._routeParams.get('type');
			_postsService.getPost(''+this._questionId, this._type).
				subscribe(
					data => {
						this.question = data;
						this.questionAvailable = true;
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
		if (this._authService.checkTokenExists()) {
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
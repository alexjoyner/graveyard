import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell/vote-cell.component';
import {TagCellComponent} from '../../shared/tag-cell/tag-cell.component';
import {EditQuestionForm} from '../../forms/edit-question-form/edit-question-form.component';
import {PointsListComponent} from '../../lists/points-list/points-list.component';
import {Post} from '../../../ts/shared/structures/post';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {FollowButtonComponent} from "../../shared/follow-button/follow-button.component";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
declare function require(name: string);

@Component({// Route no selector
    template: require('dev/components/containers/question-container/question-container.tpl.html'),
    providers: [PostsService],
    directives: [NavbarComponent, ROUTER_DIRECTIVES, VoteCellComponent, EditQuestionForm, PointsListComponent, TagCellComponent, FollowButtonComponent]
})
export class QuestionContainerComponent{
	question: Post = new Post('', 1);
	private _questionId: number;
	private _type: string;
	private questionAvailable: boolean;
	constructor(
		private _routeParams: RouteParams,
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _authService: AuthService) {
		this._questionId = +this._routeParams.get('id');
		_postsService.getPost(''+this._questionId).
			subscribe(
				data => {
					this.question = data;
					this.questionAvailable = true;
					console.log('Saved question: ', this.question);
					console.log(this.question.title);
				},
				err => console.log('Err: ', err)
			);// Get the posts associated with this id
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
	} // Delete function by ID
	editQuestion(event: MouseEvent, cancelFlag: boolean) {
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
		return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
	}
}
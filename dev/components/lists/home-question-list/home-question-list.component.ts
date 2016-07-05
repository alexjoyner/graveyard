declare function require(name: string);
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {SearchFilterPipe} from '../../../ts/pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell/vote-cell.component';
import {AuthService} from '../../../ts/shared/net-services/auth.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {GlobalHandlerService} from '../../../ts/shared/special-services/globalHandler.service';
import {MainPointComponent} from '../../shared/point/point.component';
@Component({
    selector: 'ro-home-question-list',
    template: require('dev/components/lists/home-question-list/home-question-list.tpl.html'),
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, MainPointComponent],
    pipes: [SearchFilterPipe]
})
export class  HomeQuestionListComponent{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Input() questions: Post[];
	@Input() showInTut: boolean;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	private dataReturned: boolean = false;
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService,
		private _globalHandler: GlobalHandlerService) {
	}
	deleteQuestion(question: Post, event: MouseEvent, qIndex: number){
		event.stopPropagation();
		if (this._authService.checkTokenExists()) {
			let answer = confirm(`Are you sure you want to delete this question? This action can't be undone`);
			if (answer === true) {
				this._postsService.deletePost(question._id)
					.subscribe(
					success => {
						this.questions.splice(qIndex, 1)
					},
					err => console.log('error: ', err)
					);
			}
		}
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(id: string){
		return (id === this._usersService.profile._id);
	}
}
import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {NewIssueForm} from './issue-form.component';
import {UsersService} from '../../shared/users.service';
import {AuthService} from '../../shared/auth.service';
import {PointsListComponent} from './points-list.component';

@Component({// Route no selector
    templateUrl: 'templates/issue/issue-container.tpl.html',
    providers: [PostsService],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, NewIssueForm, PointsListComponent]
})
export class IssueContainerComponent implements OnInit{
	issue: Post = new Post('', 1);
	private _issueId: string;
	private _type: string;
	constructor(
		private _routeParams: RouteParams,
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _authService: AuthService){
	}
	ngOnInit(): any {
		if (this._authService.checkValid()) {
			this._issueId = this._routeParams.get('id');
			this._type = this._routeParams.get('type');
			this._postsService.getPost(this._issueId, this._type).
				subscribe(
				data => {
					this.issue = data;
					console.log('Saved issue: ', this.issue);
					console.log(this.issue.title);
				},
				err => console.log('Err: ', err)
				);
		}
	}
	editIssue(issue: Post, event: MouseEvent, cancelFlag: boolean) {
		event.stopPropagation();
		let answer: boolean;
		if(cancelFlag){
			answer = confirm('Canceling will discard changes. Continue?');
		}
		if (answer || !cancelFlag) {
			this.issue['editIssue'] =
				(this.issue['editIssue']) ? !this.issue['editIssue'] : true;
		}
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(id: number) {
		return (id === this._usersService.profile._id);
	}
}
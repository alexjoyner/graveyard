import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {PointsService} from '../../shared/points.service';
import {PointsListComponent} from './points-list.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {NewIssueForm} from './issue-form.component';
import {UsersService} from '../../shared/users.service';
import {AuthService} from '../../shared/auth.service';

@Component({// Route no selector
    templateUrl: 'templates/issue/issue-container.tpl.html',
    providers: [IssuesService, PointsService],
    directives: [PointsListComponent, ROUTER_DIRECTIVES, VoteCellComponent, NewIssueForm]
})
export class IssueContainerComponent implements OnInit{
	issue: Issue = new Issue('','',0,0, '', '');
	private _issueId: string;
	private _type: string;
	constructor(
		private _routeParams: RouteParams,
		private _issuesService: IssuesService,
		private _usersService: UsersService,
		private _authService: AuthService){}

	editIssue(issue: Issue, event: MouseEvent, cancelFlag: boolean) {
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
	ngOnInit(): any {
		if (this._authService.checkValid()) {
			this._issueId = this._routeParams.get('id');
			this._type = this._routeParams.get('type');
			this._issuesService.getIssue(this._issueId).
				subscribe(
				data => {
					this.issue = data;
					console.log(this.issue);
					console.log(this.issue.mainQuestion);
				},
				err => console.log('Err: ', err)
				);
		}
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(username: string) {
		return (username === this._usersService.profile.email);
	}
}
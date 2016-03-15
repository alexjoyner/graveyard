import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {PointsListComponent} from './points-list.component';
import {CreatePointFormComponent} from './create-point-form.component';
import {IssueContainerService} from './issue-container.service';

@Component({// Route no selector
    templateUrl: 'templates/issue/issue-container.tpl.html',
    providers: [IssuesService, IssueContainerService],
    directives: [PointsListComponent, CreatePointFormComponent]
})
export class IssueContainerComponent implements OnInit{
	issue: Issue;
	private _issueId: string;
	constructor(
		private _routeParams: RouteParams,
		private _issuesService: IssuesService){}

	ngOnInit():any {
		this._issueId = this._routeParams.get('id');
		this.issue = this._issuesService.getIssue(this._issueId);
	}
}
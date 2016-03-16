import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {PointsService} from '../../shared/points.service';
import {PointsListComponent} from './points-list.component';
import {CreatePointFormComponent} from './create-point-form.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({// Route no selector
    templateUrl: 'templates/issue/issue-container.tpl.html',
    providers: [IssuesService, PointsService],
    directives: [PointsListComponent, CreatePointFormComponent, ROUTER_DIRECTIVES]
})
export class IssueContainerComponent implements OnInit{
	issue: Issue;
	_issueId: string;
	private _type: string;
	searchText: string;
	constructor(
		private _routeParams: RouteParams,
		private _issuesService: IssuesService){}

	ngOnInit():any {
		this._issueId = this._routeParams.get('id');
		this._type = this._routeParams.get('type');
		console.log(this._issueId);
		this.issue = this._issuesService.getIssue(this._issueId);
	}
}
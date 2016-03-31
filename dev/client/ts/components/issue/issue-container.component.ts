import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {PointsService} from '../../shared/points.service';
import {PointsListComponent} from './points-list.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';

@Component({// Route no selector
    templateUrl: 'templates/issue/issue-container.tpl.html',
    providers: [IssuesService, PointsService],
    directives: [PointsListComponent, ROUTER_DIRECTIVES, VoteCellComponent]
})
export class IssueContainerComponent implements OnInit{
	issue: Issue = new Issue('','',0,0);
	private _issueId: string;
	private _type: string;
	constructor(
		private _routeParams: RouteParams,
		private _issuesService: IssuesService){}

	ngOnInit():any {
		this._issueId = this._routeParams.get('id');
		this._type = this._routeParams.get('type');
		this._issuesService.getIssue(this._issueId).
		subscribe(
			data => {
				setTimeout(() => this.issue = data, 1500);
				console.log(this.issue);
				console.log(this.issue.mainQuestion);
			},
			err => console.log('Err: ', err)
		);
	}
}
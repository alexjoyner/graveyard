import {Component, OnInit} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['src/css/home-issue.css'],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent],
    providers: [IssuesService],
    pipes: [SearchFilterPipe],
    inputs: ['searchText']
})
export class  HomeIssueListComponent implements OnInit{
	issues: Issue[];
	constructor(private _issuesService: IssuesService){}
	ngOnInit():any {
		this.issues = this._issuesService.getAllIssues();
	}
	deleteIssue(issue: Issue){
		this._issuesService.deleteIssue(issue);
	}
	voteIssue(issue: Issue, type: string){
		this._issuesService.voteIssue(issue, type);
	}
}
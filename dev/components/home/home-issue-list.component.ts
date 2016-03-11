import {Component, OnInit} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['src/css/home-issue.css'],
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
}
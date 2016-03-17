import {Component, OnInit, Input} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {NewIssueForm} from './new-issue-form.component';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['src/css/home-issue.css'],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, NewIssueForm],
    providers: [IssuesService],
    pipes: [SearchFilterPipe]
})
export class  HomeIssueListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	issues: Issue[];
	constructor(private _issuesService: IssuesService){}
	ngOnInit():any {
		this._issuesService.getAllIssues()
			.subscribe(
				data => {
					console.log(data);
					this.issues = data;
				},
				err => console.log('err: ', err)
			);
	}
	deleteIssue(issue: Issue, event: MouseEvent){
		event.stopPropagation();
		let answer = confirm(`Are you sure you want to delete this issue? This action can't be undone`);
		if (answer === true) {
			this._issuesService.deleteIssue(issue._id)
				.subscribe(
				success => this.ngOnInit(),
				err => console.log('error: ', err)
				);
		}
	}
}
import {Component, OnInit, Input} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {NewIssueForm} from './new-issue-form.component';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['styles/home-issue.css'],
    directives: [ROUTER_DIRECTIVES, NewIssueForm],
    providers: [IssuesService],
    pipes: [SearchFilterPipe]
})
export class  HomeIssueListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	issues: Issue[];
	issue: Issue
	= new Issue('', '', 0, 0);
	constructor(
		private _issuesService: IssuesService,
		private _router: Router){}
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
	onCreate() {
		let issue: Issue
			= new Issue(this.searchText + '?', '', 0, 0);
		this._issuesService.insertIssue(issue)
			.subscribe(
			data => {
				console.log('Returned: ', data);
				this._router.navigate(['Issue', { type: 'yes', id: data }]);
			},
			err => console.log('Error: ', err)
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
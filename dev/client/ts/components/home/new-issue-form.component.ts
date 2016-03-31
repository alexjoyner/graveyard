import {Component, Input} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import { Router } from 'angular2/router';
@Component({
    selector: 'ro-new-issue-form',
    templateUrl: 'templates/home/new-issue-form.tpl.html',
    providers: [IssuesService]
})
export class NewIssueForm{
	issue: Issue 
		= new Issue('','',0,0);
	constructor(
		private _issuesService: IssuesService,
		private _router: Router) {};

	onCreate(){
		this._issuesService.insertIssue(this.issue)
			.subscribe(
				data => {
					console.log('Returned: ', data);
					this._router.navigate(['Issue', {type: 'yes', id: data}]);
				},
				err => console.log('Error: ', err)
			);
	}
}
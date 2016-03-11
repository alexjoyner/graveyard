import {Component} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
@Component({
    selector: 'ro-new-issue-form',
    templateUrl: 'templates/home/new-issue-form.tpl.html',
    providers: [IssuesService]
})
export class NewIssueForm{
	issue: Issue 
		= new Issue('','',0,0);

	constructor(
		private _issuesService: IssuesService) {};

	onCreate(){
		this._issuesService.insertIssue(this.issue);
	}
}
import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import { Router } from 'angular2/router';
import { UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-issue-form',
    templateUrl: 'templates/issue/issue-form.tpl.html',
    providers: [IssuesService]
})
export class NewIssueForm implements OnInit{
	@Input() myIssue: Issue;
	@Input() editMode: boolean;
	@Output() edited: EventEmitter<any> = new EventEmitter();
	issue: Issue;
	ngOnInit(): any {
		this.issue = new Issue(
			this.myIssue.mainQuestion, 
			this.myIssue.questionDetail, 
			0,0,
			this._usersService.profile._id,
			this._usersService.profile.email,
			this.myIssue._id);

	}
	constructor(
		private _issuesService: IssuesService,
		private _router: Router,
		private _usersService: UsersService) {};

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
	onUpdate(){
		this._issuesService.updateIssue(this.issue)
			.subscribe(
				data => {
					console.log('Success: ', data);
					this.myIssue.mainQuestion = this.issue.mainQuestion;
					this.myIssue.questionDetail = this.issue.questionDetail;
					this.edited.emit(null);
				},
				err => console.log('Error: ', err)
			);
	}
}
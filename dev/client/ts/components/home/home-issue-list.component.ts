import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Issue} from '../../shared/issue';
import {IssuesService} from '../../shared/issues.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {AuthService} from '../../shared/auth.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['styles/home-issue.css'],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent],
    providers: [IssuesService],
    pipes: [SearchFilterPipe]
})
export class  HomeIssueListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	issues: Issue[];
	issue: Issue
	= new Issue('', '', 0, 0);
	constructor(
		private _issuesService: IssuesService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService){}
	ngOnInit():any {
		if (this._authService.checkValid()) {
			this._issuesService.getAllIssues()
				.subscribe(
				data => {
					console.log(data);
					this.issues = data;
				},
				err => console.log('err: ', err)
				);
		}
	}
	onCreate() {
		if (this._authService.checkValid()) {
			let issue: Issue
				= new Issue(this.searchText + '?', '', 0, 0,
					this._usersService.profile._id,
					this._usersService.profile.local.email);
			this._issuesService.insertIssue(issue)
				.subscribe(
				data => {
					console.log('Returned: ', data);
					this._router.navigate(['Issue', { type: 'yes', id: data }]);
				},
				err => console.log('Error: ', err)
				);
		}
	}
	onCancel(){
		this.cancel.emit(null);
	}
	deleteIssue(issue: Issue, event: MouseEvent){
		event.stopPropagation();
		if (this._authService.checkValid()) {
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
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(username: string){
		return (username === this._usersService.profile.local.email);
	}
}
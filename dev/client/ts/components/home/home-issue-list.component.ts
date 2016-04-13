import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
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
    providers: [PostsService],
    pipes: [SearchFilterPipe]
})
export class  HomeIssueListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	issues: Post[];
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService){
		this.socket = io('/');
		this.socket.emit('change room', {newroom: 'issues'})
		this.socket.on('NewIssue', function(data){
			console.log('NEW ISSUE: ', data);
            this.issues.unshift(data);
        }.bind(this));
	}
	ngOnInit():any {
		if (this._authService.checkValid()) {
			this._postsService.getAllPosts()
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
		let newIssue: Post = new Post(this.searchText, 1);
		if (this._authService.checkValid()) {
			this._postsService.insertPost(newIssue)
				.subscribe(
				data => {
					console.log('Returned: ', data._id);
					this._router.navigate(['Issue', { type: 'yes', id: data._id }]);
				},
				err => console.log('Error: ', err)
				);
		}
	}
	onCancel(){
		this.cancel.emit(null);
	}
	deleteIssue(issue: Post, event: MouseEvent){
		event.stopPropagation();
		if (this._authService.checkValid()) {
			let answer = confirm(`Are you sure you want to delete this issue? This action can't be undone`);
			if (answer === true) {
				this._postsService.deletePost(issue._id)
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
	isOwner(id: string){
		return (id === this._usersService.profile._id);
	}
}
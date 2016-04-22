import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {SearchFilterPipe} from '../../pipes/searchFilter.pipe';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {AuthService} from '../../shared/auth.service';
import {UsersService} from '../../shared/users.service';
import {TagsService} from '../../shared/tags.service';
import {GlobalHandlerService} from '../../shared/globalHandler.service';
@Component({
    selector: 'ro-home-issue-list',
    templateUrl: 'templates/home/home-issue-list.tpl.html',
    styleUrls: ['styles/home-issue.css'],
    directives: [ROUTER_DIRECTIVES, VoteCellComponent],
    providers: [PostsService, TagsService],
    pipes: [SearchFilterPipe]
})
export class  HomeIssueListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	private issues: Post[];
	private returnedTags: [{id: number, tag_name: string}];
	private acceptedTags = [];
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService,
		private _tagsService: TagsService,
		private _globalHandler: GlobalHandlerService){
	}
	ngOnInit(): any {
		this.acceptedTags = [];
		this.socket = io('/');
		console.log('SOCKETS ROOMS: ', this.socket.rooms);
		this.socket.emit('change room', { newroom: 'issues' })
		this.socket.on('NewIssue', function(newIssue) {
			console.log('NEW ISSUE: ', newIssue);
			if (this.isOwner(newIssue.owner_user_id)) {
				console.log('Returned: ', newIssue._id);
				this._router.navigate(['Issue', { type: 'yes', id: newIssue._id, lastRoom: 'issues'}]);
			} else {
				this.issues.unshift(newIssue);
            }
        }.bind(this));
		this.socket.on('DeletedIssue', function(postData) {
			console.log('Delete: ', postData);
			for (var i = this.issues.length - 1; i >= 0; i--) {
				if (this.issues[i]._id === +postData._id) {
					this.issues.splice(i, 1);
				}
			}
        }.bind(this));
        this.socket.on('disconnect', function(){
        	console.log('DISCONNECTED', );
        	this._globalHandler.emitStatusMessage({
        		status: 999, 
        		body: 'Refresh to receive updates'
        	});
        }.bind(this));
		if (this._authService.checkValid()) {
			this._postsService.getAllPosts()
				.subscribe(data => {
					console.log('ISSUES: ', data);
					this.issues=data
				});
		}
	}
	acceptTag(tag: { id: number, tag_name: string }) {
		console.log(this.acceptedTags);
		if (this.acceptedTags.length  < 5) {
			if (this.acceptedTags.indexOf(tag) === -1) {
				this.acceptedTags.push(tag);
			}
		}else{
			console.log('You have to many tag');
		}
	}
	createTag(tagName: string){
		this._tagsService.postTag(tagName)
			.subscribe(
				data => {
					console.log('CREATED TAG: ', data);
					this.acceptedTags.push(data);
				})
	}
	removeTag(tag: { id: number, tag_name: string }) {
		console.log(this.acceptedTags);
		let index = this.acceptedTags.indexOf(tag);
		this.acceptedTags.splice(index, 1);
	}
	searchTags(searchTerm: string){
		this._tagsService.getTags(searchTerm)
			.subscribe(
				data => {
					this.returnedTags = data;
				},
				err => console.log('Error: ', err)
			);
	}
	onCreate() {
		let newIssue: Post = new Post(this.searchText, 1);
		let tags: [] = [];
		for (var i = this.acceptedTags.length - 1; i >= 0; i--) {
			tags.push(this.acceptedTags[i]._id)
		}
		if (this._authService.checkValid()) {
			this._postsService.insertPost({'post': newIssue, 'tags': tags})
				.subscribe(
					data => {
						console.log('Success Posting Issue');
					},
					err => console.log('Error: ', err)
				);
		}
	}
	onCancel(){
		this.acceptedTags = [];
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
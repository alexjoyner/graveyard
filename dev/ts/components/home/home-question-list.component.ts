declare function require(name: string);
declare function io(url: string);
interface Socket {
    on(event: string, callback: (data: any) => void);
    emit(event: string, data: any);
}
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
    selector: 'ro-home-question-list',
    template: require('dev/templates/home/home-question-list.tpl.html'),
    directives: [ROUTER_DIRECTIVES, VoteCellComponent],
    providers: [TagsService],
    pipes: [SearchFilterPipe]
})
export class  HomeQuestionListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Input() questions: Post[];
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	private returnedTags: [{id: number, tag_name: string}];
	private acceptedTags = [];
	private dataReturned: boolean = false;
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService,
		private _tagsService: TagsService,
		private _globalHandler: GlobalHandlerService) {
	}
	ngOnInit(): any {
		this.acceptedTags = [];
		var socket = io('/');
		console.log('SOCKETS ROOMS: ', socket.rooms);
		socket.emit('change room', { newroom: 'questions' })
		socket.on('NewQuestion', function(newQuestion) {
			console.log('NEW ISSUE: ', newQuestion);
			if (this.isOwner(newQuestion.owner_user_id)) {
				console.log('Returned: ', newQuestion._id);
				this._router.navigate(['Question', { type: 'yes', id: newQuestion._id, lastRoom: 'questions'}]);
			} else {
				this.questions.unshift(newQuestion);
            }
        }.bind(this));
		socket.on('DeletedQuestion', function(postData) {
			console.log('Delete: ', postData);
			for (var i = this.questions.length - 1; i >= 0; i--) {
				if (this.questions[i]._id === +postData._id) {
					this.questions.splice(i, 1);
				}
			}
        }.bind(this));
        socket.on('disconnect', function(){
        	console.log('DISCONNECTED');
        	this._globalHandler.emitStatusMessage({
        		status: 999, 
        		body: 'Refresh to receive updates'
        	});
        }.bind(this));
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
		let newQuestion: Post = new Post(this.searchText, 1);
		let tags:any = [];
		for (var i = this.acceptedTags.length - 1; i >= 0; i--) {
			tags.push(this.acceptedTags[i]._id)
		}
		if (this._authService.checkValid()) {
			this._postsService.insertPost({'post': newQuestion, 'tags': tags})
				.subscribe(
					data => {
						console.log('Success Posting Question');
					},
					err => console.log('Error: ', err)
				);
		}
	}
	onCancel(){
		this.acceptedTags = [];
		this.cancel.emit(null);
	}
	deleteQuestion(question: Post, event: MouseEvent){
		event.stopPropagation();
		if (this._authService.checkValid()) {
			let answer = confirm(`Are you sure you want to delete this question? This action can't be undone`);
			if (answer === true) {
				this._postsService.deletePost(question._id)
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
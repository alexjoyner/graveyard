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
import {GlobalHandlerService} from '../../shared/globalHandler.service';
import {MainPointComponent} from '../question/main-point.component';
@Component({
    selector: 'ro-home-question-list',
    template: require('dev/templates/home/home-question-list.tpl.html'),
    directives: [ROUTER_DIRECTIVES, VoteCellComponent, MainPointComponent],
    pipes: [SearchFilterPipe]
})
export class  HomeQuestionListComponent implements OnInit{
	@Input('searchText') searchText: string;
	@Input('startQuestion') startQuestion: boolean;
	@Input() questions: Post[];
	@Input() showInTut: boolean;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	private dataReturned: boolean = false;
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _authService: AuthService,
		private _usersService: UsersService,
		private _globalHandler: GlobalHandlerService) {
	}
	ngOnInit(): any {
		var socket = io('/');
		console.log('SOCKETS ROOMS: ', socket.rooms);
		socket.emit('change room', { newroom: 'questions' })
		socket.on('NewQuestion', function(newQuestion) {
			console.log('NEW ISSUE: ', newQuestion);
			if (!this.isOwner(newQuestion.owner_user_id)) {
				this.questions.unshift(newQuestion);
			}else{
				this._router.navigate(['Question', { type: 'yes', id: newQuestion._id }]);
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
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Support} from '../../shared/support';
import {PostsService} from '../../shared/posts.service';
import { UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-top-support',
    templateUrl: 'templates/issue/top-support.tpl.html',
    directives: [VoteCellComponent],
    styleUrls: ['styles/point.css', 'styles/support.css']
})
export class TopSupportComponent {
	@Input('support') support: Support;
	@Input('numMoreSupport') numMoreSupport: number;
	@Input('showingMore') showingMore: boolean;
	@Output() addEvidence: EventEmitter<any> = new EventEmitter();
	@Output() viewAll: EventEmitter<any> = new EventEmitter();
	@Output() removed: EventEmitter<any> = new EventEmitter();
	@Output() goTop: EventEmitter<any> = new EventEmitter();
	constructor(
		private _postService: PostsService,
		private _usersService: UsersService) { };


	removeSupport(supportId: string) {
		let answer = confirm(`Are you sure you want to delete this support point? This action can't be undone`);
		if (answer === true) {
			this._postService.deletePost(supportId)
			.subscribe(
				success => {
					this.removed.emit(null);
				},
				err => console.log('Error: ', err)
			);
		}
	};
	toggleViewAll(){
		this.viewAll.emit(null);
	}

	toggleAddEvidence() {
		this.addEvidence.emit(null);
	}
	gotoTop() {
		this.goTop.emit(null);
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(id: number) {
		return (id === this._usersService.profile._id);
	}
}
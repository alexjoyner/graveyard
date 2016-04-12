import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../../shared/vote-cell.component';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-more-support',
    templateUrl: 'templates/issue/more-support.tpl.html',
    directives: [VoteCellComponent],
    styleUrls: ['styles/support.css', 'styles/point.css']
})
export class MoreSupportComponent {
	@Input('supports') supports: Post[];
	@Output() removed: EventEmitter<any> = new EventEmitter();
	@Output() goTop: EventEmitter<any> = new EventEmitter();
	constructor(
		private _postsService: PostsService,
		private _usersService: UsersService) { };


	removeSupport(supportId: string, supportIndex: number) {
		let answer = confirm(`Are you sure you want to delete this support point? This action can't be undone`);
		if (answer === true) {
			this._postsService.deleteSupport(supportId)
				.subscribe(
				success => {
					this.removed.emit(supportIndex + 1);
				},
				err => console.log('Error: ', err)
				);
		}
	};
	gotoTop(){
		this.goTop.emit(null);
	}
	stringToDate(string: string) {
		return new Date(string);
	}
	isOwner(id: number) {
		return (id === this._usersService.profile._id);
	}
}
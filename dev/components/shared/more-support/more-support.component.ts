declare function require(name: string);
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {VoteCellComponent} from '../vote-cell/vote-cell.component';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'ro-more-support',
    template: require('dev/components/shared/more-support/more-support.tpl.html'),
    directives: [VoteCellComponent]
    //styleUrls: ['styles/support.css', 'styles/point.css']
})
export class MoreSupportComponent {
	@Input('supports') supports: Post[];
	@Output() goTop: EventEmitter<any> = new EventEmitter();
	type: string = this._routeParams.get('type');
	questionId: string = this._routeParams.get('id');
	constructor(
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _routeParams: RouteParams) { };


	removeSupport(supportId: string, supportIndex: number) {
		let answer = confirm(`Are you sure you want to delete this support point? This action can't be undone`);
		if (answer === true) {
			this._postsService.deletePost(+supportId, +this.questionId, this.type)
				.subscribe(
				success => {
					console.log('Success Delete');
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
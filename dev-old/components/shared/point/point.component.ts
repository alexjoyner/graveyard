// import {Component, Input, Output, EventEmitter} from '@angular/core';
// import {VoteCellComponent} from '../vote-cell/vote-cell.component';
// import {Point} from '../../../ts/shared/structures/point';
// import {PostsService} from '../../../ts/shared/net-services/posts.service';
// import {EditPointComponent} from '../../forms/edit-point-form/edit-point-form.component';
// import { UsersService} from '../../../ts/shared/net-services/users.service';
// import {ROUTER_DIRECTIVES} from "@angular/router";
// import {FollowButtonComponent} from "../follow-button/follow-button.component";
//
//
// @Component({
//     selector: 'ro-main-point',
//     template: require('./point.tpl.html'),
//     directives: [VoteCellComponent, EditPointComponent, ROUTER_DIRECTIVES, FollowButtonComponent]
// })
// export class MainPointComponent {
// 	@Input('point') point: Point;
// 	@Output() removed: EventEmitter<any> = new EventEmitter();
// 	@Output() smoothScroll: EventEmitter<any> = new EventEmitter();
// 	constructor(
// 		private _postsService: PostsService,
// 		private _usersService: UsersService){};
// 	editPoint(point: Point, event: MouseEvent, cancelFlag: boolean) {
// 		event.stopPropagation();
// 		this.smoothScroll.emit(null)
// 		let answer: boolean;
// 		if (cancelFlag) {
// 			answer = confirm('Canceling will discard changes. Continue?');
// 		}
// 		if (answer || !cancelFlag) {
// 			this.point['editPoint'] =
// 				(this.point['editPoint']) ? !this.point['editQuestion'] : true;
// 		}
// 	}
// 	deletePoint(){
// 		let answer: boolean = confirm(`Are you sure you want to delete this main point? This action can't be undone`);
// 		if (answer === true) {
// 			this._postsService
// 				.deletePost(this.point._id)
// 				.subscribe(
// 				success => {
// 					this.removed.emit(null)
// 				},
// 				err => console.log('Err: ', err)
// 				);
// 		}
// 	}
// 	isOwner(id: number) {
// 		return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
// 	}
// }
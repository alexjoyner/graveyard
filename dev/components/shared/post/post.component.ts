import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Post} from "../../../ts/shared/structures/post";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {VoteCellComponent} from "../vote-cell/vote-cell.component";
import {FollowButtonComponent} from "../follow-button/follow-button.component";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {EditPointComponent} from "../../forms/edit-point-form/edit-point-form.component";
import {PostsService} from "../../../ts/shared/net-services/posts.service";


@Component({
    selector: 'mt-post',
    template: require('./post.tpl.html'),
    directives: [VoteCellComponent, FollowButtonComponent, ROUTER_DIRECTIVES, EditPointComponent],
	styles: [require('./_post.sass')]
})
export class PostComponent {
    @Input() post: Post;
	@Output() removed: EventEmitter<any> = new EventEmitter();
	@Output() downVoted: EventEmitter<any> = new EventEmitter();
    constructor(
        private _usersService: UsersService,
        private _router: Router,
        private _postsService: PostsService
    ){}
    isOwner(id: number) {
        return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
    }

    goToQuestion(id: number){
        let link = ['/question', id];
        this._router.navigate(link);
    }
    editPoint(event: MouseEvent, cancelFlag: boolean) {
		event.stopPropagation();
		let answer: boolean;
		if (cancelFlag) {
			answer = confirm('Canceling will discard changes. Continue?');
		}
		if (answer || !cancelFlag) {
			this.post['editPoint'] =
				(this.post['editPoint']) ? !this.post['editQuestion'] : true;
		}
	}
	deletePoint(){
		let answer: boolean = confirm(`Are you sure you want to delete this main point? This action can't be undone`);
		if (answer === true) {
			this._postsService
				.deletePost(this.post._id)
				.subscribe(
				success => {
					this.removed.emit(null)
				},
				err => console.log('Err: ', err)
				);
		}
	}
	didDownVote(){
		this.downVoted.emit(null);
	}
}
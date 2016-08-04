import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {PointsListComponent} from '../../lists/points-list/points-list.component';
import {Post} from '../../../ts/shared/structures/post';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {VoteService} from "../../../ts/shared/net-services/vote-cell.service";
import {RecentlyViewedComponent} from "../../shared/recently-viewed/recently-viewed.component";
import {QuestionHeaderComponent} from "./question-header/question-header.component";


@Component({// Route no selector
    template: require('./question-container.tpl.html'),
    providers: [PostsService, VoteService],
    directives: [NavbarComponent, PointsListComponent, RecentlyViewedComponent, QuestionHeaderComponent]
})
export class QuestionContainerComponent{
	private question: Post = new Post('', 1);
	private _questionId: number;
	private questionAvailable: boolean;
	constructor(
		private _routeParams: RouteParams,
		private _postsService: PostsService,
		private _usersService: UsersService,
		private _voteService: VoteService) {
		this._questionId = +this._routeParams.get('id');
		_postsService.getPost(''+this._questionId).
			subscribe(
				data => {
					data['points'] = this._voteService.checkPostsUserVoted(data['points']);
					this.question = data;
					this._usersService.setViewed(data._id, data.title);
					this.questionAvailable = true;
				},
				err => console.log('Err: ', err)
			);// Get the posts associated with this id
	}
}
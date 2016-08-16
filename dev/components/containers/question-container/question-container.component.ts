import {Component, OnInit, OnDestroy} from '@angular/core';
import {PointsListComponent} from '../../lists/points-list/points-list.component';
import {Post} from '../../../ts/shared/structures/post';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {VoteService} from "../../../ts/shared/net-services/vote-cell.service";
import {RecentlyViewedComponent} from "../../shared/recently-viewed/recently-viewed.component";
import {QuestionHeaderComponent} from "./question-header/question-header.component";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../ts/shared/net-services/auth.service";


@Component({// Route no selector
    template: require('./question-container.tpl.html'),
    providers: [PostsService, VoteService],
    directives: [NavbarComponent, PointsListComponent, RecentlyViewedComponent, QuestionHeaderComponent],
    styles: [require('./_question-container.sass')]
})
export class QuestionContainerComponent implements OnInit, OnDestroy {
    private question: Post = new Post('', 1);
    private _questionId: number;
    private questionAvailable: boolean;
    private sub;

    constructor(private _activatedRoute: ActivatedRoute,
                private _postsService: PostsService,
                private _usersService: UsersService,
                private _voteService: VoteService) {
        this.sub = this._activatedRoute.params.subscribe(params => {
            this.questionAvailable = false;
            this._questionId = +params['id'];
            this._postsService.getPost('' + this._questionId).subscribe(
                data => {
                    /* Hacky solution to get vote status of question, checkPostsUserVoted expects
                    * an array because it is normally pasted a set of points to check, so here we put
                    * the question data in an array to pass to the checkPostsUserVoted function and then
                    * set the question to the 0 index that is returned.
                    *       ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
                    *       \/   \/   \/   \/   \/   \/   \/   \/   \/   \/*/
                    let question = this._voteService.checkPostsUserVoted([data])[0];
                    /*********************************************************************/
                    question['points'] = this._voteService.checkPostsUserVoted(question['points']);
                    this.question = question;
                    this._usersService.setViewed(question._id, question.title);
                    this.questionAvailable = true;
                },
                err => console.log('Err: ', err)
            );// Get the posts associated with this id
        });

    }

    ngOnInit(): any {

    }

    ngOnDestroy(): any {
        this.sub.unsubscribe();
    }
}
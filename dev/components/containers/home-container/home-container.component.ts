import {Component, OnInit} from "angular2/core";
import {HomeQuestionListComponent} from "../../lists/home-question-list/home-question-list.component";
import {CreateQuestionFormComponent} from "../../forms/create-question-form/create-question-form.component";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {PostsService} from "../../../ts/shared/net-services/posts.service";
import {Post} from "../../../ts/shared/structures/post";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {FavoritesCellComponent} from "../../shared/favorites-cell/favorites-cell.component";
import {SmoothScroll} from "../../../ts/shared/special-services/smooth-scroll.service";
import {WINDOW_PROVIDERS} from "../../../ts/shared/special-services/window.service";
import {UsersService} from "../../../ts/shared/net-services/users.service";
import {Router} from "angular2/router";
import {VoteService} from "../../../ts/shared/net-services/vote-cell.service";
declare function require(name:string);


@Component({
    // Routes don't need selectors
    /*selector: 'ro-home-container',*/
    template: require('dev/components/containers/home-container/home-container.tpl.html'),
    directives: [NavbarComponent, HomeQuestionListComponent, CreateQuestionFormComponent, FavoritesCellComponent],
    providers: [PostsService, SmoothScroll, WINDOW_PROVIDERS, VoteService]
})
export class HomeContainerComponent implements OnInit {
    private searchText:string = '';
    private startQuestion:boolean = false;
    private questions:Post[];
    private showCreateQuestion:boolean
    private headerText:string = 'Hot posts on MataTruth right now';
    private recentViewed:any[];

    constructor(private _authService:AuthService,
                private _postsService:PostsService,
                private _smoothService:SmoothScroll,
                private _usersService:UsersService,
                private _voteService:VoteService) {
    };

    goToQuestion(id:number, title:string) {
        this._usersService.goToQuestion(id, title);
    }

    ngOnInit():any {
        this.recentViewed = this._usersService.recentPages;
        // When the page loads, Get questions for the user
        if (this._authService.checkTokenExists()) {
            this._postsService.getHotPosts()
                .subscribe(data => {
                    let votePosts = this._voteService.checkPostsUserVoted(data);
                    this.questions = votePosts;
                    console.log('questions:', this.questions);

                });
        }
    }

    scrollTop() {
        this._smoothService.scrollTo(0, 0);
    }

    getQuestionsByTag(data:{tagId:number, tagName:string}) {
        if (this._authService.checkTokenExists()) {
            this._postsService.getAllByTagId(data.tagId)
                .subscribe(response => {
                    let votePosts = this._voteService.checkPostsUserVoted(response);
                    this.questions = votePosts;
                    this.headerText = 'Top posts in ' + data.tagName;
                    this.scrollTop()
                });
        }
    }

    getHotRightNow() {
        if (this._authService.checkTokenExists()) {
            this._postsService.getHotPosts()
                .subscribe(data => {
                    let votePosts = this._voteService.checkPostsUserVoted(data);
                    this.questions = votePosts;
                    this.headerText = 'Hot posts on MataTruth right now';
                    this.scrollTop()
                });
        }
    }

    getAllTimeTop() {
        if (this._authService.checkTokenExists()) {
            this._postsService.getAllTimeTop()
                .subscribe(response => {
                    let votePosts = this._voteService.checkPostsUserVoted(response);
                    this.questions = votePosts;
                    this.headerText = 'All time top posts';
                    this.scrollTop()
                });
        }
    }
}







































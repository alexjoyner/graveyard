import {Component, OnInit, OnDestroy} from "@angular/core";
import {HomeQuestionListComponent} from "../../lists/home-question-list/home-question-list.component";
import {CreateQuestionFormComponent} from "../../forms/create-question-form/create-question-form.component";
import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {PostsService} from "../../../ts/shared/net-services/posts.service";
import {Post} from "../../../ts/shared/structures/post";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {FavoritesCellComponent} from "../../shared/favorites-cell/favorites-cell.component";
// import {SmoothScroll} from "../../../ts/shared/special-services/smooth-scroll.service";
// import {WINDOW_PROVIDERS} from "../../../ts/shared/special-services/window.service";
import {VoteService} from "../../../ts/shared/net-services/vote-cell.service";
import {RecentlyViewedComponent} from "../../shared/recently-viewed/recently-viewed.component";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {InfiniteScroll} from "angular2-infinite-scroll";
// TODO: Make this a route so that the user can link to a certain subject and different categories don't need to be called

@Component({
    // Routes don't need selectors
    /*selector: 'ro-home-container',*/
    template: require('./home-container.tpl.html'),
    directives: [NavbarComponent, HomeQuestionListComponent, CreateQuestionFormComponent, FavoritesCellComponent, RecentlyViewedComponent, ROUTER_DIRECTIVES, InfiniteScroll],
    providers: [PostsService, VoteService]
})
export class HomeContainerComponent implements OnInit, OnDestroy{
    private questions:Post[];
    private headerText:string;
    private _page_num: number = 1;
    private _itemsPerPage: number = 25;
    private _feed_name: string;
    private _tag_id: number;
    private _tag_name: string;
    private canGetMore: boolean = true;
    private needsMore: boolean = false;
    private sub;
    constructor(private _authService:AuthService,
                private _postsService:PostsService,
                private _voteService:VoteService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router) {
    };
    ngOnInit():any {
        this.sub = this._activatedRoute.params.subscribe(params => {
            this.questions = [];
            this._page_num = 1;
            this._feed_name = params['feed_name'];
            this._tag_id = +params['tag_id'];
            this._tag_name = params['tag_name'];
            this.feedInfoInit();
        });

    }
    ngOnDestroy():any {
        this.sub.unsubscribe();
    }
    feedInfoInit(){
        /* Check first for  */
        if(this._feed_name === 'top'){
            this.headerText = 'All time top posts';
            this.getFeed(this._feed_name);
            return;
        }
        if(this._tag_id){
            this.getQuestionsByTag({tagId: +this._tag_id, tagName: this._tag_name});
            return;
        }
        this.headerText = 'Hot questions on MetaTruth right now';
        this.getFeed('hot');
    }
    goTo(link: any[]){
        this._router.navigate(link);
    }

    getFeed(feed_name: string) {
        if (this._authService.checkTokenExists()) {
            this._postsService.getFeed(feed_name, this._page_num)
                .subscribe(post_feed => {
                    let votePosts = this._voteService.checkPostsUserVoted(post_feed);
                    console.log('Feed length: ', post_feed.length);
                    if(post_feed.length < this._itemsPerPage){
                        this.canGetMore = false;
                        this.needsMore = true;
                    }else{
                        this.canGetMore = true;
                        this.needsMore = false;
                    }
                    votePosts.forEach(function(v) {this.questions.push(v)}, this);
                });
        }
    }
    getQuestionsByTag(data:{tagId:number, tagName:string}) {
        if (this._authService.checkTokenExists()) {
            this._postsService.getAllByTagId(data.tagId)
                .subscribe(post_feed => {
                    if(post_feed.length < this._itemsPerPage){
                        this.canGetMore = false;
                        this.needsMore = true;
                    }else{
                        this.canGetMore = true;
                        this.needsMore = false;
                    }
                    let votePosts = this._voteService.checkPostsUserVoted(post_feed);
                    votePosts.forEach(function(v) {this.questions.push(v)}, this);
                    this.headerText = 'Top posts in ' + data.tagName;
                });
        }
    }
    loadMore(){
        this._page_num ++;
        this.feedInfoInit();
    }
    onScroll () {
        console.log('scrolled!!')
    }
}







































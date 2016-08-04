import {Component, Input} from "angular2/core";
import {VoteCellComponent} from "../../../shared/vote-cell/vote-cell.component";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {AuthService} from "../../../../ts/shared/net-services/auth.service";
import {PostsService} from "../../../../ts/shared/net-services/posts.service";
import {Post} from "../../../../ts/shared/structures/post";
import {UsersService} from "../../../../ts/shared/net-services/users.service";
import {TagCellComponent} from "../../../shared/tag-cell/tag-cell.component";
import {FollowButtonComponent} from "../../../shared/follow-button/follow-button.component";

@Component({
    'selector': 'mt-question-header',
    template: require('dev/components/containers/question-container/question-header/question-header.tpl.html'),
    directives: [VoteCellComponent, ROUTER_DIRECTIVES, TagCellComponent, FollowButtonComponent]
})

export class QuestionHeaderComponent {
    @Input('question') question: Post;

    constructor(
        private _authService: AuthService,
        private _postsService: PostsService,
        private _router: Router,
        private _usersService: UsersService
    ){

    }

    deleteQuestion(questionId: number) {
        if (this._authService.checkTokenExists()) {
            let answer = confirm(`Are you sure you want to delete this question? This action can't be undone`);
            if (answer === true) {
                this._postsService.deletePost(questionId)
                    .subscribe(
                        success => this._router.navigate(['Home']),
                        err => console.log('error: ', err)
                    );
            }
        }
    } // Delete function by ID
    editQuestion(event: MouseEvent, cancelFlag: boolean) {
        event.stopPropagation();
        let answer: boolean;
        if(cancelFlag){
            answer = confirm('Canceling will discard changes. Continue?');
        }
        if (answer || !cancelFlag) {
            this.question['editQuestion'] =
                (this.question['editQuestion']) ? !this.question['editQuestion'] : true;
        }
    }
    isOwner(id: number) {
        return (this._usersService.profile)? (id === this._usersService.profile._id) : false;
    }
}
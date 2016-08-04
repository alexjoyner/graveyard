import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {VoteCellComponent} from '../vote-cell/vote-cell.component';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'ro-support-point',
    template: require('./support-point.tpl.html'),
    directives: [VoteCellComponent]
    //styleUrls: ['styles/point.css', 'styles/support.css']
})
export class SupportPointComponent{
    @Input('support') support:Post;
    @Input('numMoreSupport') numMoreSupport:number;
    @Input('showingMore') showingMore:boolean;
    @Output() removed:EventEmitter<any> = new EventEmitter();
    type:string = this._routeParams.get('type');
    questionId:string = this._routeParams.get('id');

    constructor(private _postService:PostsService,
                private _usersService:UsersService,
                private _routeParams:RouteParams) {
    };

    removeSupport(supportId:string) {
        let answer = confirm(`Are you sure you want to delete this support point? This action can't be undone`);
        if (answer === true) {
            this._postService.deletePost(+supportId, +this.questionId, this.type)
                .subscribe(
                    success => {
                        console.log('Success Delete');
                        this.removed.emit(null);
                    },
                    err => console.log('Error: ', err)
                );
        }
    };

    isOwner(id:number) {
        return (id === this._usersService.profile._id);
    }
}
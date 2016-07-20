declare function require(name:string);
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {VoteCellComponent} from '../vote-cell/vote-cell.component';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'ro-support-point',
    template: require('dev/components/shared/support-point/support-point.tpl.html'),
    directives: [VoteCellComponent]
    //styleUrls: ['styles/point.css', 'styles/support.css']
})
export class SupportPointComponent implements OnInit {
    @Input('support') support:Post;
    @Input('numMoreSupport') numMoreSupport:number;
    @Input('showingMore') showingMore:boolean;
    @Output() addEvidence:EventEmitter<any> = new EventEmitter();
    @Output() removed:EventEmitter<any> = new EventEmitter();
    @Output() viewAll:EventEmitter<any> = new EventEmitter();
    @Output() goTop:EventEmitter<any> = new EventEmitter();
    type:string = this._routeParams.get('type');
    questionId:string = this._routeParams.get('id');
    private source_type_string:string = 'media';
    private point_type_string:string = 'proof';

    constructor(private _postService:PostsService,
                private _usersService:UsersService,
                private _routeParams:RouteParams) {
    };

    ngOnInit():any {
        console.log(this.support.source_type_id)
        switch (this.support.source_type_id) {
            case 1:
                this.source_type_string = 'meta';
                break;
            case 2:
                this.source_type_string = 'credible';
                break;
            case 3:
                this.source_type_string = 'web';
                break;
            case 4:
                this.source_type_string = 'media';
                break;
            case 5:
                this.source_type_string = 'opinion';
                break;
            case 6:
                this.source_type_string = 'other';
                break;
        }
        switch (this.support.point_type_id) {
            case 3:
                this.point_type_string = 'proof';
                break;
            case 4:
                this.point_type_string = 'disproof';
                break;
        }

    }

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

    toggleViewAll() {
        this.viewAll.emit(null);
    }

    toggleAddEvidence() {
        this.addEvidence.emit(null);
    }

    gotoTop() {
        this.goTop.emit(null);
    }

    stringToDate(string:string) {
        return new Date(string);
    }

    isOwner(id:number) {
        return (id === this._usersService.profile._id);
    }
}
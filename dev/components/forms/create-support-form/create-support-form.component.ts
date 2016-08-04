import {RouteParams} from "angular2/router";
import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {UsersService} from "../../../ts/shared/net-services/users.service";
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    template: require('./create-support-form.tpl.html')
})
export class AddSupportComponent implements OnInit {
    @Input('pointId') pointId:number;
    @Input('mainPointTypeId') main_point_type_id:number;
    @Input('questionId') questionId:number;
    @Output() added:EventEmitter<any> = new EventEmitter();
    @Output() cancel:EventEmitter<any> = new EventEmitter();
    private newSupport:Post;
    private showSource:boolean = false;

    constructor(private _postsService:PostsService,
                private _routeParams:RouteParams,
                private _usersService: UsersService) {
    };

    createSupport() {
        this.newSupport.question_id = +this.questionId;
        this.newSupport['correspond_main_point_type_id'] = this.main_point_type_id;
        this._postsService.insertPost({post: this.newSupport, tags: [null]})
            .subscribe(
                data => {
                    console.log('SUCCESS');
                    this._usersService.profile.follows.push(data._id);
                    this.added.emit(data);
                },
                err => console.log('Error: ', err)
            );
    }

    ngOnInit():any {
        /*title: string,
         post_type_id: number,
         parent_id?: number,
         point_type_id?: number,
         detail?: string,
         source?: string,
         source_type_id?: number*/
        this.newSupport = new Post(
            '', 3, +this._routeParams.get('id'), null, '');
        console.log(this.newSupport);
    }

    setSourceType(sourcetype:number) {
        this.newSupport.source_type_id = sourcetype;
        switch (sourcetype) {
            case 5:
                this.showSource = false;
                this.newSupport.source = null;
                break
            default:
                this.showSource = true;
                this.newSupport.detail = '';
                this.newSupport.source = 'http://';
                break
        }
    }

    onCancel() {
        this.cancel.emit(null);
    }
}





























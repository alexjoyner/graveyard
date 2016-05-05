declare function require(name: string);
import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {RouteParams, Router} from 'angular2/router';
import { UsersService} from '../../shared/users.service';
import {TagsFormComponent} from './tags-form.component';

@Component({
    selector: 'ro-create-point-form',
    template: require('dev/templates/forms/create-point-form.tpl.html'),
    directives: [TagsFormComponent]
})
export class CreatePointFormComponent implements OnInit{
	private newPoint: Post;
	private _questionId: number;
	private _pointType: number;
	private conditions: any[] = [];
	private stringType: string;
	@Input() searchText: string;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	constructor(
		private _postsService: PostsService,
		private _routeParams: RouteParams,
		private _router: Router,
		private _usersService: UsersService) {}

	createPoint(){
		let tags: any = [];
		for (var i = this.conditions.length - 1; i >= 0; i--) {
			tags.push(this.conditions[i]._id)
		}
		this._postsService.insertPost({post: this.newPoint, tags: tags})
		.subscribe(
			pointData => {
				console.log('New post');
				this.cancel.emit(null);
			},
			err => console.log('err', err)
		);
	}
	onCancel(){
		this.cancel.emit(null);
	}
	ngOnInit():any {
		this._questionId = +this._routeParams.get('id');
		this.stringType = this._routeParams.get('type');
		switch(this.stringType){
			case 'yes':
				this._pointType = 1;
				break;
			case 'no':
				this._pointType = 2;
				break;
		}
		/*title: string,
		post_type_id: number,
		parent_id?: number,
		point_type_id?: number,
		detail?: string,
		source?: string,
		source_type_id?: number,
		_id?: number*/
		this.newPoint = new Post(this.searchText,2,this._questionId,this._pointType,'');
	}
}
declare function require(name: string);
import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {RouteParams, Router} from 'angular2/router';
import { UsersService} from '../../../ts/shared/net-services/users.service';
import {TagsFormComponent} from '../tags-form/tags-form.component';
import {YesNoToggleComponent} from '../../misc/yes-no-toggle/yes-no-toggle.component';

@Component({
    selector: 'ro-create-point-form',
    template: require('dev/components/forms/create-point-form/create-point-form.tpl.html'),
    directives: [TagsFormComponent, YesNoToggleComponent]
})
export class CreatePointFormComponent implements OnInit{
	@Input() searchText: string;
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	@Output() added: EventEmitter<any> = new EventEmitter();
	private newPoint: Post;
	private _questionId: number;
	private _pointType: number;
	private conditions: any[] = [];
	private stringType: string;
	private selectedType: boolean = true;
	constructor(
		private _postsService: PostsService,
		private _routeParams: RouteParams,
		private _router: Router,
		private _usersService: UsersService) {
	}
	ngOnInit(): any {
		this._questionId = +this._routeParams.get('id');
		this.newPoint = new Post(this.searchText, 2, this._questionId, null, '');
	}
	createPoint() {
		// BUILD NEW POINT
		// -----------------------------------------
		this.newPoint.point_type_id = (this.selectedType) ? 1 /*YES*/ : 2 /*NO*/;
		this._postsService.insertPost({post: this.newPoint})
		.subscribe(
			pointData => {
				console.log('New post');
				this.added.emit(pointData);
			},
			err => console.log('err', err)
		);
	}
	onCancel(){
		this.cancel.emit(null);
	}
}
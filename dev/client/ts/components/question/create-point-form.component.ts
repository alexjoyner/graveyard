import {Component, OnInit, EventEmitter, Input, Output} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {RouteParams} from 'angular2/router';
import { UsersService} from '../../shared/users.service';

@Component({
    selector: 'ro-create-point-form',
    templateUrl: 'templates/question/create-point-form.tpl.html'
})
export class CreatePointFormComponent implements OnInit{
	private newPoint: Post;
	private _questionId: number;
	private _pointType: number;
	@Input() searchText: string;
	@Output() cancel: EventEmitter<any> = new EventEmitter();

	constructor(
		private _postsService: PostsService,
		private _routeParams: RouteParams,
		private _usersService: UsersService) { }

	createPoint(){
		this.newPoint.title = this.searchText;
		this._postsService.insertPost({post: this.newPoint, tags: []})
		.subscribe(
			pointData =>  console.log('SUCCESS creating point'),
			err => console.log('err', err)
		);
	}
	onCancel(){
		this.cancel.emit(null);
	}
	ngOnInit():any {
		this._questionId = +this._routeParams.get('id');
		let stringType:string = this._routeParams.get('type');
		switch(stringType){
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
		this.newPoint = new Post('',2,this._questionId,this._pointType,'');
	}
}
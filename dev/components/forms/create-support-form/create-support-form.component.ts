declare function require(name: string);
import {Component, Input, OnInit, EventEmitter} from 'angular2/core';
import {Post} from '../../../ts/shared/structures/post';
import {PostsService} from '../../../ts/shared/net-services/posts.service';
import {UsersService} from '../../../ts/shared/net-services/users.service';
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    template: require('dev/components/forms/create-support-form/create-support-form.tpl.html')
})
export class AddSupportComponent implements OnInit{
	@Input('pointId') pointId: number;
	@Input('mainPointTypeId') main_point_type_id: number;
	@Input('questionId') questionId: number;
	@Input('pointIndex') pointIndex: number;
	newSupport: Post;
	private showSource: boolean = false;

	constructor(
		private _postsService: PostsService,
		private _usersService: UsersService) { };

	createSupport(){
		this.newSupport.question_id = +this.questionId;
		this.newSupport['correspond_main_point_type_id'] = this.main_point_type_id;
		this._postsService.insertPost({post: this.newSupport, tags: [null]})
		.subscribe(
			data => {
				console.log('SUCCESS');
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
			'',3,this.pointId,null,'');
		console.log(this.newSupport);
	}
	setSourceType(sourcetype: number){
		this.newSupport.source_type_id = sourcetype;
		switch(sourcetype){
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
}





























import {Component, Input, OnInit, Output, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import { UsersService} from '../../shared/users.service';
// Parent is points-list
@Component({
    selector: 'ro-add-support',
    templateUrl: 'templates/issue/add-support.tpl.html'
})
export class AddSupportComponent implements OnInit{
	@Input('pointId') pointId: number;
	@Input('issueId') issueId: number;
	@Input('pointIndex') pointIndex: number;
	@Output() added: EventEmitter<any> = new EventEmitter();
	newSupport: Post;
	private showSource: boolean = false;

	constructor(
		private _postsService: PostsService,
		private _usersService: UsersService) { };

	createSupport(){
		this._postsService.insertPost(this.newSupport)
		.subscribe(
			data => {
				console.log('NEW SUPPORT: ', data);
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





























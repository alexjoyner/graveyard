import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import { Router } from 'angular2/router';
import { UsersService} from '../../shared/users.service';
@Component({
    selector: 'ro-issue-form',
    templateUrl: 'templates/issue/issue-form.tpl.html',
    providers: [PostsService]
})
export class NewIssueForm implements OnInit{
	@Input() myIssue: Post;
	@Input() editMode: boolean;
	@Output() edited: EventEmitter<any> = new EventEmitter();
	issue: Post;
	ngOnInit(): any {
		/*title: string,
		post_type_id: number,
		parent_id?: number,
		point_type_id?: number,
		detail?: string,
		source?: string,
		source_type_id?: number,
		_id?: number*/
		this.issue = new Post(
			this.myIssue.title,
			null,
			null,
			null,
			this.myIssue.detail,
			null,
			null,
			this.myIssue._id
		)

	}
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _usersService: UsersService) {};

	onCreate(){
		this._postsService.insertPost(this.issue)
			.subscribe(
				data => {
					console.log('Returned: ', data);
					this._router.navigate(['Issue', {type: 'yes', id: data}]);
				},
				err => console.log('Error: ', err)
			);
	}
	onUpdate(){
		this._postsService.updatePost(this.issue)
			.subscribe(
				data => {
					console.log('Success: ', data);
					this.myIssue.title = this.issue.title;
					this.myIssue.detail = this.issue.detail;
					this.edited.emit(null);
				},
				err => console.log('Error: ', err)
			);
	}
}
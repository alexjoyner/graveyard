declare function require(name: string);
import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/structures/post';
import {PostsService} from '../../shared/net-services/posts.service';
import { Router } from 'angular2/router';
import { UsersService} from '../../shared/net-services/users.service';
@Component({
    selector: 'ro-edit-question-form',
    template: require('dev/templates/forms/edit-question-form.tpl.html'),
    providers: [PostsService]
})
export class EditQuestionForm implements OnInit{
	@Input() myQuestion: Post;
	@Input() editMode: boolean;
	@Output() edited: EventEmitter<any> = new EventEmitter();
	question: Post;
	ngOnInit(): any {
		/*title: string,
		post_type_id: number,
		parent_id?: number,
		point_type_id?: number,
		detail?: string,
		source?: string,
		source_type_id?: number,
		_id?: number*/
		this.question = new Post(
			this.myQuestion.title,
			null,
			null,
			null,
			this.myQuestion.detail,
			null,
			null,
			this.myQuestion._id
		)

	}
	constructor(
		private _postsService: PostsService,
		private _router: Router,
		private _usersService: UsersService) {};

	onCreate(){
		this._postsService.insertPost({post: this.question, tags: [null]})
			.subscribe(
				data => {
					console.log('Returned: ', data);
					this._router.navigate(['Question', {type: 'yes', id: data}]);
				},
				err => console.log('Error: ', err)
			);
	}
	onUpdate(){
		this._postsService.updatePost(this.question)
			.subscribe(
				data => {
					console.log('Success: ', data);
					this.myQuestion.title = this.question.title;
					this.myQuestion.detail = this.question.detail;
					this.edited.emit(null);
				},
				err => console.log('Error: ', err)
			);
	}
}
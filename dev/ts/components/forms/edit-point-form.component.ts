declare function require(name: string);
import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {Post} from '../../shared/structures/post';
import {PostsService} from '../../shared/net-services/posts.service';
import { Router } from 'angular2/router';
@Component({
    selector: 'ro-edit-point',
    template: require('dev/templates/forms/edit-point-form.tpl.html'),
    providers: [PostsService]
})
export class EditPointComponent implements OnInit {
	@Input() myPoint: Post;
	@Input() editMode: boolean;
	@Output() edited: EventEmitter<any> = new EventEmitter();
	point: Post;
	ngOnInit(): any {
		/*title: string,
		post_type_id: number,
		parent_id?: number,
		point_type_id?: number,
		detail?: string,
		source?: string,
		source_type_id?: number*/
		this.point = new Post(
			this.myPoint.title,
			null,
			null,
			null,
			this.myPoint.detail,
			null,
			null,
			this.myPoint._id
		)

	}
	constructor(
		private _postsService: PostsService,
		private _router: Router) { };

	onUpdate() {
		this._postsService.updatePost(this.point)
			.subscribe(
			data => {
				console.log('Success: ', data);
				this.myPoint.title = this.point.title;
				this.myPoint.detail = this.point.detail;
				this.edited.emit(null);
			},
			err => console.log('Error: ', err)
			);
	}
	onCancel(){
		let answer: boolean = confirm('Canceling will discard changes. Continue?');
		if (answer === true) {
			// Edit does the same thing that cancel would
			// I'm just using this! :)
			this.edited.emit(null);
		}
	}
}
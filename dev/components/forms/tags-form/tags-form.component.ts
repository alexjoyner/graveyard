import {RouteParams} from "angular2/router";
declare function require(name: string);
import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {TagsService} from '../../../ts/shared/net-services/tags.service';

@Component({
    selector: 'ro-tags-form',
    template: require('dev/components/forms/tags-form/tags-form.tpl.html'),
	providers: [TagsService]
})
export class TagsFormComponent implements OnInit{
	@Input() acceptedTags: any[];
	@Input('type') type: number;
	@Input('typeString') typeString: string;
	@Input('tagsFormHeader') tagsFormHeader: string;
    @Input() singlesMode: boolean;
	private searchType: number;
	private returnedTags: [{ id: number, tag_name: string }];
	constructor(
		private _tagsService: TagsService,
		private _routeParams: RouteParams) {
	}
	ngOnInit(): any {
		switch(this.type){
			case 1:
				this.searchTags('a');
				break;
			case 2:
				this.searchTags('if ');
		}
	}
	acceptTag(tag: { _id: number, tag_name: string }) {
		console.log(this.acceptedTags);
		if (this.acceptedTags.length < 5) {
		    if(this.singlesMode){
		    	let postId = +this._routeParams.get('id');
                this._tagsService.addTagToPost(tag._id, postId).subscribe(
                	data => {
						if (this.acceptedTags.indexOf(tag) === -1) {
							this.acceptedTags.push(tag);
						}
					},
					err => console.log('Err: ', err)
				)
            }else{
                if (this.acceptedTags.indexOf(tag) === -1) {
                    this.acceptedTags.push(tag);
                }
            }
		} else {
			console.log('You have to many tag');
		}
	}
	createTag(tagName: string) {
		this._tagsService.postTag(tagName, this.type)
			.subscribe(
			data => {
				console.log('CREATED TAG: ', data);
				this.acceptedTags.push(data);
			})
	}
	removeTag(tag: { _id: number, tag_name: string }) {
		if(this.singlesMode){
			let postId = +this._routeParams.get('id');
			this._tagsService.removeTagFromPost(tag._id, postId).subscribe(
				data => {
					console.log(this.acceptedTags);
					let index = this.acceptedTags.indexOf(tag);
					this.acceptedTags.splice(index, 1);
				},
				err => console.log('Err: ', err)
			)
		}else{
			console.log(this.acceptedTags);
			let index = this.acceptedTags.indexOf(tag);
			this.acceptedTags.splice(index, 1);
		}
	}
	searchTags(searchTerm: string) {
		this._tagsService.getTags(searchTerm, this.type)
			.subscribe(
			data => {
				this.returnedTags = data;
			},
			err => console.log('Error: ', err)
			);
	}
}
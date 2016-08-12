import {} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';
import {TagsService} from '../../../ts/shared/net-services/tags.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'ro-tags-form',
    template: require('./tags-form.tpl.html'),
    providers: [TagsService]
})
export class TagsFormComponent implements OnInit {
    @Input() acceptedTags: any[];
    @Input('type') type: number;
    @Input('typeString') typeString: string;
    @Input('tagsFormHeader') tagsFormHeader: string;
    @Input() singlesMode: boolean;
    private returnedTags: [{ id: number, tag_name: string }];
    private cantCreate: boolean;

    constructor(private _tagsService: TagsService,
                private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): any {
        if(!this.acceptedTags)
            this.acceptedTags = [];
        switch (this.type) {
            case 1:
                this.searchTags('a');
                break;
            case 2:
                this.searchTags('if ');
        }
    }

    acceptTag(tag: { _id: number, tag_name: string }) {
        if (this.singlesMode) {
            let postId = +this._activatedRoute.snapshot.params['id'];
            this._tagsService.addTagToPost(tag._id, postId).subscribe(
                data => {
                    if (this.acceptedTags.indexOf(tag) === -1) {
                        this.acceptedTags.push(tag);
                    }
                },
                err => console.log('Err: ', err)
            )
        } else {
            if (this.acceptedTags.indexOf(tag) === -1) {
                this.acceptedTags.push(tag);
            }
        }
    }

    createTag(tagName: string) {
        this._tagsService.postTag(tagName, this.type)
            .subscribe(
                data => {
                    console.log('CREATED TAG: ', data);
                    this.acceptTag(data)
                })
    }

    removeTag(tag: { _id: number, tag_name: string }) {
        if (this.singlesMode) {
            let postId = +this._activatedRoute.snapshot.params['id'];
            this._tagsService.removeTagFromPost(tag._id, postId).subscribe(
                data => {
                    console.log(this.acceptedTags);
                    let index = this.acceptedTags.indexOf(tag);
                    this.acceptedTags.splice(index, 1);
                },
                err => console.log('Err: ', err)
            )
        } else {
            console.log(this.acceptedTags);
            let index = this.acceptedTags.indexOf(tag);
            this.acceptedTags.splice(index, 1);
        }
    }

    searchTags(searchTerm: string) {
        this._tagsService.getTags(searchTerm, this.type)
            .subscribe(
                data => {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].tag_name.toLowerCase() === searchTerm.toLowerCase()) {
                            this.cantCreate = true;
                        } else {
                            this.cantCreate = false;
                        }
                    }
                    this.returnedTags = data;
                },
                err => console.log('Error: ', err)
            );
    }
}
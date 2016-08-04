import {DropdownComponent} from "../../misc/dropdown/dropdown.directive";
import {Component, Input} from 'angular2/core';
import {TagsService} from "../../../ts/shared/net-services/tags.service";
import {TagsFormComponent} from "../../forms/tags-form/tags-form.component";

@Component({
    selector: 'mt-tag-cell',
    template: require('./tag-cell.tpl.html'),
    directives: [DropdownComponent, TagsFormComponent],
    providers: [TagsService]
})
export class TagCellComponent{
    @Input() postType: number;
	@Input() tags: [{tag_name: string, _id: number}];
    private returnedTags: any[] = [];
    constructor(
        private _tagsService: TagsService
    ){};
    searchTags(searchTerm:string) {
        this._tagsService.getTags(searchTerm, 1)
            .subscribe(
                data => {
                    this.returnedTags = data;
                },
                err => console.log('Error: ', err)
            );
    }
}
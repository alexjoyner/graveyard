declare function require(name: string);
// Angular Imports
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'ro-tag-cell',
    template: require('dev/components/shared/tag-cell/tag-cell.tpl.html')
})
export class TagCellComponent{
	@Input() tags: [{tag_name: string, _id: number}];
}
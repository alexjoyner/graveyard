declare function require(name: string);
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'ro-yes-no-toggle',
    template: require('dev/components/misc/yes-no-toggle/yes-no-toggle.tpl.html')
})
export class YesNoToggleComponent{
	@Output() changed: EventEmitter<any> = new EventEmitter();
	private selection: boolean = true;

	changeSelection(){
		this.changed.emit(!this.selection);
	}

}
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'ro-yes-no-toggle',
    template: require('./yes-no-toggle.tpl.html')
})
export class YesNoToggleComponent{
	@Output() changed: EventEmitter<any> = new EventEmitter();
	private selection: boolean = true;

	changeSelection(){
		this.changed.emit(!this.selection);
	}

}
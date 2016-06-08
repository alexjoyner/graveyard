declare function require(name: string);
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'ro-yes-no-toggle',
    template: require('dev/components/misc/yes-no-toggle/yes-no-toggle.tpl.html')
})
export class YesNoToggleComponent{
	@Input() selection: boolean;
}
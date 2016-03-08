import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'component-2',
    template: `
    	Component 2
    	<button (click)="onNavigate()">Take me to component 1</button>
    `
})
export class Component2Component {
	constructor(private _router: Router) {}

	onNavigate(){
		this._router.navigate(['Component1', {source: 'Component 2'}]);
	}
}
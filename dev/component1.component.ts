import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'component-1',
    template: `
    	Component 1
    	<div>
			source was {{source}}
    	</div>
    `
})
export class Component1Component implements OnInit {
	source: string;
	constructor(private _routeParams: RouteParams) {}


	ngOnInit():any {
		this.source = this._routeParams.get('source')
	}
}
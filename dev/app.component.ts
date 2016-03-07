import {Component} from 'angular2/core';
import {InputComponent} from './bindings/input.component';
import {ConfirmComponent} from './bindings/confirm.component';

@Component({
    selector: 'my-app',
    template: `
    	<div class="container" >
    		<my-input (submitted)="onSubmit($event)"></my-input>
    	</div>
    	<div class="container">
    		<my-confirm (confirmed)="onConfirmed($event)"></my-confirm>
    	</div>
    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {
	myself = {name: '', age: ''};
	confirmedMyself = {name: '', age: ''};

	onSubmit(myself: {name: string, age: string}){
		this.myself = myself;
	}

	onConfirmed(myself: {name: string, age: string}){
		this.confirmedMyself = myself;
	}
}

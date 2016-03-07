import {Component} from 'angular2/core';

@Component({
	selector: 'my-component',
	template: `
		Hi, Im <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span> and this is not my first component. But <span [class.is-awesome]="inputElement.value === 'yes'">this is awesome</span>!
		<br>
		<br>
		<br>
		Is it awesome?
		<input type="text" #inputElement (keyup)="0">
		<button [disabled]="inputElement.value !== 'yes'">Only enable if yes was entered</button>
	`,
	styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
	name = 'Alex';
} 
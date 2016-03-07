import {Component} from 'angular2/core';

@Component({
	selector: 'my-component',
	template: `
		Hi, Im {{name}} and this is not my first component. But <span [class.is-awesome]="inputElement.value === 'yes'">this is awesome</span>!
		<br>
		<br>
		<br>
		Is it awesome?
		<input type="text" #inputElement (keyup)="0">
	`,
	styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
	name = 'Alex';
} 
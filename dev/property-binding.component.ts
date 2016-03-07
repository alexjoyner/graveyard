import {Component, EventEmitter} from 'angular2/core';

@Component({
	selector: 'my-property-binding',
	template: `
		<h2>Child Component</h2>
		Hey {{name}}, I am {{age}} years old!
		<h4>My Hobbies are:</h4>
		<input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
	`,
	inputs: ['name:myName', 'age:myAge'],
	outputs: ['hobbiesChanged']
})

export class PropertBindingComponent {
	hobbiesChanged = new EventEmitter<string>();

	onHobbiesChanged(hobbies: string){
		this.hobbiesChanged.emit(hobbies);
	};
};
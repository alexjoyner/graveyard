import {Component} from 'angular2/core';

@Component({
	selector: 'my-property-binding',
	template: `
		<h2>Child Component</h2>
		Hey {{name}}, I am {{age}} years old!
	`,
	inputs: ['name:myName', 'age:myAge']
})

export class PropertBindingComponent {

};
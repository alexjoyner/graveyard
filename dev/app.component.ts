import {Component} from 'angular2/core';
import {PropertBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
    	<section class="parent">
    		<h2>This is the parent</h2>
    		<h4>Please enter your name</h4>
    		<input type="text" [(ngModel)]="name">
    		<br>
    		<br>
    		<section class="child">
    			<my-property-binding [myName]="name" [myAge]="'20'" (hobbiesChanged)="hobbies = $event"></my-property-binding>
    		</section>
    		<p>My hobbies are: {{hobbies}}</p>
    	</section>
    `,
    directives: [PropertBindingComponent]
})
export class AppComponent {
	name = '';
}

import {Component} from 'angular2/core';
import {DataDrivenFormComponent} from './data-driven-form.component';
@Component({
    selector: 'my-app',
    template: `
    	<my-data-driven></my-data-driven>
    `,
    directives: [DataDrivenFormComponent]
})
export class AppComponent {
}

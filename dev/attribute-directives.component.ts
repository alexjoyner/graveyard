import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';
import {StructeralDirective} from './structeral-directives.component';

@Component({
    selector: 'my-attribute-directives',
    template: `
    	<div [myHighlight]="'red'">
    		Highlight Me
    	</div>
    	<div [myHighlight]="'orange'">
    		Another highlight
    	</div>
    	<my-structeral-directive></my-structeral-directive>
    `,
    directives: [HighlightDirective, StructeralDirective]
})
export class AttributeDirectives {
	
}
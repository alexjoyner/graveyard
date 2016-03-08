import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'

@Component({
    selector: 'my-attribute-directives',
    template: `
    	<div [myHighlight]="'red'">
    		Highlight Me
    	</div>
    	<div [myHighlight]="'orange'">
    		Another highlight
    	</div>
    `,
    directives: [HighlightDirective]
})
export class AttributeDirectives {
	
}
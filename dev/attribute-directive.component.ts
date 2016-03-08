import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'

@Component({
    selector: 'my-attribute-directives',
    template: `
    	<div myHighlight>
    		Highlight Me
    	</div>
    	<div myHighlight>
    		Another highlight
    	</div>
    `,
    directives: [HighlightDirective]
})
export class AttributeDirectives {
	
}
import {Component} from 'angular2/core';
import {HomeContainerComponent} from './home/home-container.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
    selector: 'my-app',
    template: `
    	<ro-navbar></ro-navbar>
    	<div class="container">
    		<ro-home-container></ro-home-container>
    	</div>
    `,
    directives: [HomeContainerComponent, NavbarComponent]
})
export class AppComponent {

}

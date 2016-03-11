import {Component} from 'angular2/core';
import {HomeContainerComponent} from './components/home/home-container.component';
import {NavbarComponent} from './components/navbar/navbar.component';

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

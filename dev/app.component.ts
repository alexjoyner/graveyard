import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeContainerComponent} from './components/home/home-container.component';
import {IssueContainerComponent} from './components/issue/issue-container.component';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
    selector: 'my-app',
    template: `
    	<ro-navbar></ro-navbar>
    	<div class="container">
    		<router-outlet></router-outlet>
    	</div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/Home', name: 'Home', component: HomeContainerComponent, useAsDefault: true },
	{ path: '/Issue/:id', name: 'Issue', component: IssueContainerComponent}
])
export class AppComponent {

}

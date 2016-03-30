import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'ro-navbar',
    templateUrl: 'templates/navbar/navbar.tpl.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent{}
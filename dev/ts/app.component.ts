declare function require(name: string);
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HomeContainerComponent} from './components/home/home-container.component';
import {QuestionContainerComponent} from './components/question/question-container.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AlertBarComponent} from './components/alertBar/alertBar.component';
import {AuthContainerComponent} from './components/auth/auth-container.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AuthService} from './shared/auth.service';
import {UsersService} from './shared/users.service';
@Component({
    selector: 'my-app',
    template: `
        <ro-navbar></ro-navbar>
    	<ro-alert-bar></ro-alert-bar>
        <div id="MobileAlert" class="visible-xs">
            <div id="Content">
                <h1>Site not yet optimized for mobile devices, please view the site on larger screen</h1>
            </div>
        </div>
    	<div class="container">
    		<router-outlet></router-outlet>
    	</div>
        <div style="height: 60vh"></div>
    `,
    directives: [NavbarComponent, AlertBarComponent, ROUTER_DIRECTIVES],
    providers: [AuthService]
})
@RouteConfig([
    { path: '/Welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
	{ path: '/', name: 'Home', component: HomeContainerComponent},
    { path: '/Question/:type/:id', name: 'Question', component: QuestionContainerComponent },
    { path: '/Auth', name: 'Auth', component: AuthContainerComponent }
])
export class AppComponent implements OnInit{
    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _usersService: UsersService) {
    }
    
    ngOnInit(): any {
        this._usersService.getProfile();
        this._authService.getLoggedOutEvent()
            .subscribe(
                data => {
                    this._router.navigate(['Auth']);
                    this._usersService.profile = undefined;
                })
    }
}    

import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HomeContainerComponent} from './components/home/home-container.component';
import {QuestionContainerComponent} from './components/question/question-container.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AlertBarComponent} from './components/alertBar/alertBar.component';
import {AuthContainerComponent} from './components/auth/auth-container.component';
import {AuthService} from './shared/auth.service';
import {UsersService} from './shared/users.service';
import {AuthRouterOutlet} from './shared/auth-router-outlet.directive';
@Component({
    selector: 'my-app',
    template: `
        <ro-navbar></ro-navbar>
    	<ro-alert-bar></ro-alert-bar>
    	<div class="container">
    		<auth-router-outlet></auth-router-outlet>
    	</div>
        <div style="height: 60vh"></div>
    `,
    directives: [NavbarComponent, AlertBarComponent, ROUTER_DIRECTIVES, AuthRouterOutlet],
    providers: [AuthService],
    styleUrls: ['styles/app.css']
})
@RouteConfig([
	{ path: '/', name: 'Home', component: HomeContainerComponent, useAsDefault: true },
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
        //The below Needs to be fixed to get user when the app boots
        this._usersService.getProfile();
        this._authService.getLoggedOutEvent()
            .subscribe(
                data => {
                    this._router.navigate(['Auth']);
                    this._usersService.profile = undefined;
                })
    }
}    

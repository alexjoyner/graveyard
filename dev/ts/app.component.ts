declare function require(name: string);
// Angular imports
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';

// Component imports
import {HomeContainerComponent} from '../components/containers/home-container/home-container.component';
import {QuestionContainerComponent} from '../components/containers/question-container/question-container.component';
import {NavbarComponent} from '../components/shared/navbar/navbar.component';
import {AuthContainerComponent} from '../components/containers/auth-container/auth-container.component';
//import {WelcomeComponent} from './components/welcome/welcome.component';

// Services imports
import {AuthService} from './shared/net-services/auth.service';
import {UsersService} from './shared/net-services/users.service';

// Components imports (Not many because this is the root)
import {AlertBarComponent} from '../components/shared/alertBar/alertBar.component';

/*
    The main app component
    ----------------------
*/
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

/*
    Configuring the routes for our application
    ------------------------------------------
*/
@RouteConfig([
    { path: '/', name: 'Home', component: HomeContainerComponent, useAsDefault: true },
    { path: '/Question/:id', name: 'Question', component: QuestionContainerComponent },
    { path: '/Auth', name: 'Auth', component: AuthContainerComponent }
])
export class AppComponent implements OnInit{
    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _usersService: UsersService) {
    }
    
    ngOnInit(): any {
        /*
        When the app starts, attempt to get the users profile
            if they are already logged in
        */
        this._usersService.getProfile();

        /*
        Subscribe to the auth service event so that users if a
            user logs out from anywhere in the app they will be
            navigated to the authentication page.
        */
        this._authService.getLoggedOutEvent()
            .subscribe(
                data => {
                    this._router.navigate(['Auth']);
                    this._usersService.profile = undefined;
                })
    }
}    

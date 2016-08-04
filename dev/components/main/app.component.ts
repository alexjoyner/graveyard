import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HomeContainerComponent} from '../containers/home-container/home-container.component';
import {QuestionContainerComponent} from '../containers/question-container/question-container.component';
import {AuthContainerComponent} from '../containers/auth-container/auth-container.component';
import {AuthService} from '../../ts/shared/net-services/auth.service';
import {UsersService} from '../../ts/shared/net-services/users.service';
import {AlertBarComponent} from '../shared/alertBar/alertBar.component';


/*
    The main app component
    ----------------------
*/
@Component({
    selector: 'my-app',
    template: require('./app.tpl.html'),
    directives: [AlertBarComponent, ROUTER_DIRECTIVES],
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
        /*
         When the app starts, attempt to get the users profile
         if they are already logged in
         */
        this._usersService.getProfile();
    }
    
    ngOnInit(): any {

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

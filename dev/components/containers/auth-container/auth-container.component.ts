import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AuthLoginFormComponent} from "../../forms/auth-login-form/auth-login-form.component";
import {AuthSignupFormComponent} from "../../forms/auth-signup-form/auth-signup-form.component";
@Component({
    // Selector not needed because this is a route
    /*selector: 'ro-auth-container',*/
    template: require('./auth-container.tpl.html'),
    providers: [AuthService],
    directives: [ROUTER_DIRECTIVES, AuthLoginFormComponent, AuthSignupFormComponent]
})
export class AuthContainerComponent{}







































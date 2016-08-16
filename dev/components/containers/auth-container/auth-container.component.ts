import {AuthService} from "../../../ts/shared/net-services/auth.service";
import {Component} from "@angular/core";
import {AuthLoginFormComponent} from "../../forms/auth-login-form/auth-login-form.component";
import {AuthSignupFormComponent} from "../../forms/auth-signup-form/auth-signup-form.component";
@Component({
    // Selector not needed because this is a route
    /*selector: 'ro-auth-container',*/
    template: require('./auth-container.tpl.html'),
    providers: [AuthService],
    directives: [AuthLoginFormComponent, AuthSignupFormComponent],
    styles: [require('./_auth-container.sass')]
})
export class AuthContainerComponent{
    constructor(){
        console.log('CONSTRUCTING');
    }
}




































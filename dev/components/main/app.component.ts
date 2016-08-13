import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "../../ts/shared/net-services/auth.service";
import {UsersService} from "../../ts/shared/net-services/users.service";
import {AlertBarComponent} from "../shared/alertBar/alertBar.component";

/*
 The main app component
 ----------------------
 */
@Component({
    selector: "my-app",
    template: require("./app.tpl.html"),
    directives: [AlertBarComponent, ROUTER_DIRECTIVES],
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    constructor(private _router: Router,
                private _authService: AuthService,
                private _usersService: UsersService) {
        /*
         When the app starts, attempt to get the users profile
         if they are already logged in
         */
        if(_authService.checkTokenExists(true)){
            this._usersService.getProfile();
        }
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
                    let link = ["/auth"];
                    this._router.navigate(link);
                    this._usersService.profile = undefined;
                });
    };
}

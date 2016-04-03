import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {UsersService} from './shared/users.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, UsersService]);
import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {
		ROUTER_PROVIDERS,
		HashLocationStrategy,
		LocationStrategy} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {UsersService} from './shared/users.service';
import {GlobalHandlerService} from './shared/globalHandler.service';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, 
	HTTP_PROVIDERS, 
	UsersService,
	GlobalHandlerService,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);
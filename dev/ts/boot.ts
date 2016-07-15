// Need to declare require so webpack can use it without interferance
declare function require(name: string);
import "./polyfills"
import "./vendor"
import {provide, enableProdMode} from 'angular2/core';

// Using hash router instead of regular routes
import {
	HashLocationStrategy,
	LocationStrategy} from 'angular2/platform/common';
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from '../components/main/app.component'
import {
		ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS} from 'angular2/http'
import {UsersService} from './shared/net-services/users.service';
import {GlobalHandlerService} from './shared/special-services/globalHandler.service';

// To enable production mode for angular.
//enableProdMode();

// Bootstrap the app
bootstrap(AppComponent, [
	ROUTER_PROVIDERS, 
	HTTP_PROVIDERS, 
	UsersService,
	GlobalHandlerService,
	provide(LocationStrategy, { useClass: HashLocationStrategy })]);
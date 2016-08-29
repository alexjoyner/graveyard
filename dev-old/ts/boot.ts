/*
* // Need to declare require so webpack can use it without interferance

 import "./polyfills"
 import "./vendor"
 import {provide, enableProdMode} from '@angular/core';

 // Using hash router instead of regular routes
 import {
 HashLocationStrategy,
 LocationStrategy} from '@angular/platform/common';
 import {bootstrap}    from '@angular/platform/browser'
 import {AppComponent} from '../components/main/app.component'
 import {
 ROUTER_PROVIDERS} from '@angular/router'
 import {HTTP_PROVIDERS} from '@angular/http'
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
 provide(LocationStrategy, { useClass: HashLocationStrategy })]);*/
// Need to declare require so webpack can use it without interferance

import "./polyfills"
import "./vendor"
import {provide, enableProdMode} from '@angular/core';

// Using hash router instead of regular routes
import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from '../components/main/app.component'
import {HTTP_PROVIDERS} from '@angular/http'
import {UsersService} from './shared/net-services/users.service';
import {GlobalHandlerService} from './shared/special-services/globalHandler.service';
import {APP_ROUTES_PROVIDER} from "./routes";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router";

// To enable production mode for angular.
//enableProdMode();

function main(initialHMRstate) {
	// you must return
	// Bootstrap the app
	return bootstrap(AppComponent, [
		{provide: APP_BASE_HREF, useValue: ''},
		APP_ROUTES_PROVIDER,
		HTTP_PROVIDERS,
		UsersService,
		GlobalHandlerService,
		ROUTER_DIRECTIVES,
		{provide: LocationStrategy, useClass: HashLocationStrategy }])
		.catch(err => console.error(err));
}

/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if (ENV.env_dev) {
	console.log('HMR Enabled')
	// activate hot module reload
	let ngHmr = require('angular2-hmr');
	ngHmr.hotModuleReplacement(main, module); // pass the main function
} else {
	console.log('HMR Disabled')
	// bootstrap when document is ready
	document.addEventListener('DOMContentLoaded', () => main(null));
}
import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {RouterOutlet, Router, ComponentInstruction} from 'angular2/router';
import {AuthService} from './auth.service';
@Directive({
	selector: 'auth-router-outlet'
})
export class AuthRouterOutlet extends RouterOutlet {
	private _protectedRoutes = {
		'': true
	};
	constructor(
		_elementRef: ElementRef,
		_loader: DynamicComponentLoader,
		private _parentRouter: Router,
		@Attribute('name') _nameAttr: string,
		private _authService: AuthService){
		super(_elementRef, _loader, _parentRouter, _nameAttr);
	};
	// activate(nextInstruction: ComponentInstruction): Promise<any> {
	// 	const url = nextInstruction.urlPath;
	// 	if (this._protectedRoutes[url] && !this._authService.checkValid(true)) {
	// 		this._parentRouter.navigate(['Auth']);
	// 	}
	// 	return super.activate(nextInstruction);
	// }
}
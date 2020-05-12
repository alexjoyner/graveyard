System.register(['angular2/core', 'angular2/router', './auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, auth_service_1;
    var AuthRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AuthRouterOutlet = (function (_super) {
                __extends(AuthRouterOutlet, _super);
                function AuthRouterOutlet(_elementRef, _loader, _parentRouter, _nameAttr, _authService) {
                    _super.call(this, _elementRef, _loader, _parentRouter, _nameAttr);
                    this._parentRouter = _parentRouter;
                    this._authService = _authService;
                    this._protectedRoutes = {
                        '': true
                    };
                }
                ;
                AuthRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'auth-router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String, auth_service_1.AuthService])
                ], AuthRouterOutlet);
                return AuthRouterOutlet;
            }(router_1.RouterOutlet));
            exports_1("AuthRouterOutlet", AuthRouterOutlet);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hdXRoLXJvdXRlci1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBc0Msb0NBQVk7Z0JBSWpELDBCQUNDLFdBQXVCLEVBQ3ZCLE9BQStCLEVBQ3ZCLGFBQXFCLEVBQ1YsU0FBaUIsRUFDNUIsWUFBeUI7b0JBQ2pDLGtCQUFNLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUg5QyxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtvQkFFckIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBUjFCLHFCQUFnQixHQUFHO3dCQUMxQixFQUFFLEVBQUUsSUFBSTtxQkFDUixDQUFDO2dCQVFGLENBQUM7O2dCQWRGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLG9CQUFvQjtxQkFDOUIsQ0FBQzsrQkFTQyxnQkFBUyxDQUFDLE1BQU0sQ0FBQzs7b0NBVGxCO2dCQW9CRix1QkFBQztZQUFELENBbkJBLEFBbUJDLENBbkJxQyxxQkFBWSxHQW1CakQ7WUFuQkQsK0NBbUJDLENBQUEiLCJmaWxlIjoic2hhcmVkL2F1dGgtcm91dGVyLW91dGxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRHluYW1pY0NvbXBvbmVudExvYWRlciwgQXR0cmlidXRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyT3V0bGV0LCBSb3V0ZXIsIENvbXBvbmVudEluc3RydWN0aW9ufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnYXV0aC1yb3V0ZXItb3V0bGV0J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoUm91dGVyT3V0bGV0IGV4dGVuZHMgUm91dGVyT3V0bGV0IHtcblx0cHJpdmF0ZSBfcHJvdGVjdGVkUm91dGVzID0ge1xuXHRcdCcnOiB0cnVlXG5cdH07XG5cdGNvbnN0cnVjdG9yKFxuXHRcdF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdF9sb2FkZXI6IER5bmFtaWNDb21wb25lbnRMb2FkZXIsXG5cdFx0cHJpdmF0ZSBfcGFyZW50Um91dGVyOiBSb3V0ZXIsXG5cdFx0QEF0dHJpYnV0ZSgnbmFtZScpIF9uYW1lQXR0cjogc3RyaW5nLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG5cdFx0c3VwZXIoX2VsZW1lbnRSZWYsIF9sb2FkZXIsIF9wYXJlbnRSb3V0ZXIsIF9uYW1lQXR0cik7XG5cdH07XG5cdC8vIGFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBQcm9taXNlPGFueT4ge1xuXHQvLyBcdGNvbnN0IHVybCA9IG5leHRJbnN0cnVjdGlvbi51cmxQYXRoO1xuXHQvLyBcdGlmICh0aGlzLl9wcm90ZWN0ZWRSb3V0ZXNbdXJsXSAmJiAhdGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCh0cnVlKSkge1xuXHQvLyBcdFx0dGhpcy5fcGFyZW50Um91dGVyLm5hdmlnYXRlKFsnQXV0aCddKTtcblx0Ly8gXHR9XG5cdC8vIFx0cmV0dXJuIHN1cGVyLmFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbik7XG5cdC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

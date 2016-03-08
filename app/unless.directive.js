System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective() {
                }
                UnlessDirective.prototype.constuctor = function (_templateRef, _viewContainerRef) { };
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: '[myUnless]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFVQSxDQUFDO2dCQVRBLG9DQUFVLEdBQVYsVUFBbUIsWUFBeUIsRUFBVSxpQkFBbUMsSUFBRyxDQUFDO2dCQUU3RixzQkFBSSxxQ0FBUTt5QkFBWixVQUFhLFNBQWtCO3dCQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzlELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNoQyxDQUFDO29CQUNGLENBQUM7OzttQkFBQTtnQkFiRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixNQUFNLEVBQUUsWUFBWTtxQkFDdkIsQ0FBQzs7bUNBQUE7Z0JBV0Ysc0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDZDQVVDLENBQUEiLCJmaWxlIjoidW5sZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW215VW5sZXNzXScsXG4gICAgaW5wdXRzOiAnW215VW5sZXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgVW5sZXNzRGlyZWN0aXZle1xuXHRjb25zdHVjdG9yKHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZiwgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuXHRzZXQgbXlVbmxlc3MoY29uZGl0aW9uOiBib29sZWFuKSB7XG5cdFx0aWYgKCFjb25kaXRpb24pIHtcblx0XHRcdHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['angular2/core', './services/logging.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n    \t<input type=\"text\" #message>\n    \t<button (click)=\"onLog(message.value)\">Send</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQ0MsNkJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFDdkQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQVhGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw0R0FHVDtxQkFDSixDQUFDOzt1Q0FBQTtnQkFNRiwwQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQscURBS0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICBcdDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkge31cblx0b25Mb2cobWVzc2FnZTogc3RyaW5nKXtcblx0XHR0aGlzLl9sb2dnaW5nU2VydmljZS5sb2cobWVzc2FnZSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

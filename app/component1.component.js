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
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n    \t<input type=\"text\" #message>\n    \t<button (click)=\"onLog(message.value)\">Send</button>\n    ",
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0MsNkJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFDdkQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQVpGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw0R0FHVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOzt1Q0FBQTtnQkFNRiwwQkFBQztZQUFELENBTEEsQUFLQyxJQUFBO1lBTEQscURBS0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICBcdDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHt9XG5cdG9uTG9nKG1lc3NhZ2U6IHN0cmluZyl7XG5cdFx0dGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

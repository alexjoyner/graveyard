System.register(['angular2/core', './services/logging.service', './services/calculator.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = this._calculatorService.add(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n\t    <div>\n\t    \t<h1>Loggin Service</h1>\n\t    </div>\n    \t<input type=\"text\" #message>\n    \t<button (click)=\"onLog(message.value)\">Send</button>\n    \t<div>\n    \t\t<h1>Calculator Service</h1>\n    \t\t<p>Add Or Multiply</p>\n    \t\t<input type=\"text\" #num1>\n    \t\t<input type=\"text\" #num2>\n    \t\t<br>\n    \t\t<button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n    \t\t<button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n    \t\t<br>\n    \t\t<p>Result: {{result}}</p>\n    \t</div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQUVDLDZCQUNTLGVBQStCLEVBQy9CLGtCQUFxQztvQkFEckMsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO2dCQUMzQyxDQUFDO2dCQUNKLG1DQUFLLEdBQUwsVUFBTSxPQUFlO29CQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWLFVBQVcsSUFBWSxFQUFFLElBQVk7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsSUFBWTtvQkFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBcENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSwyaUJBaUJUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLEVBQUUsc0NBQWlCLENBQUM7cUJBQ2pELENBQUM7O3VDQUFBO2dCQWdCRiwwQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQscURBZUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2FsY3VsYXRvclNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTEnLFxuICAgIHRlbXBsYXRlOiBgXG5cdCAgICA8ZGl2PlxuXHQgICAgXHQ8aDE+TG9nZ2luIFNlcnZpY2U8L2gxPlxuXHQgICAgPC9kaXY+XG4gICAgXHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICBcdDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgIFx0PGRpdj5cbiAgICBcdFx0PGgxPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XG4gICAgXHRcdDxwPkFkZCBPciBNdWx0aXBseTwvcD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgIFx0XHQ8YnI+XG4gICAgXHRcdDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgIFx0XHQ8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgIFx0XHQ8YnI+XG4gICAgXHRcdDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICBcdDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbTG9nZ2luZ1NlcnZpY2UsIENhbGN1bGF0b3JTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQxQ29tcG9uZW50IHtcblx0cmVzdWx0OiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSxcblx0XHRwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2Vcblx0KSB7fVxuXHRvbkxvZyhtZXNzYWdlOiBzdHJpbmcpe1xuXHRcdHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcblx0fVxuXHRvbk11bHRpcGx5KG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKXtcblx0XHR0aGlzLnJlc3VsdCA9IHRoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMik7XG5cdH1cblx0b25BZGQobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpe1xuXHRcdHRoaXMucmVzdWx0ID0gdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCArbnVtMik7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

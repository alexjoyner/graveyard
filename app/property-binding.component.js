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
    var PropertBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PropertBindingComponent = (function () {
                function PropertBindingComponent() {
                }
                PropertBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n\t\t<h2>Child Component</h2>\n\t\tHey {{name}}, I am {{age}} years old!\n\t",
                        inputs: ['name:myName', 'age:myAge']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertBindingComponent);
                return PropertBindingComponent;
            }());
            exports_1("PropertBindingComponent", PropertBindingComponent);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFYRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSwrRUFHVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3FCQUNwQyxDQUFDOzsyQ0FBQTtnQkFJRiw4QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsNkRBRUMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoicHJvcGVydHktYmluZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxoMj5DaGlsZCBDb21wb25lbnQ8L2gyPlxuXHRcdEhleSB7e25hbWV9fSwgSSBhbSB7e2FnZX19IHllYXJzIG9sZCFcblx0YCxcblx0aW5wdXRzOiBbJ25hbWU6bXlOYW1lJywgJ2FnZTpteUFnZSddXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydEJpbmRpbmdDb21wb25lbnQge1xuXG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

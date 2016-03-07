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
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                ;
                PropertBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n\t\t<h2>Child Component</h2>\n\t\tHey {{name}}, I am {{age}} years old!\n\t\t<h4>My Hobbies are:</h4>\n\t\t<input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n\t",
                        inputs: ['name:myName', 'age:myAge'],
                        outputs: ['hobbiesChanged']
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7b0JBQ0MsbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFLN0MsQ0FBQztnQkFIQSxrREFBZ0IsR0FBaEIsVUFBaUIsT0FBZTtvQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7O2dCQWpCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSw2TEFLVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO3dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDM0IsQ0FBQzs7MkNBQUE7Z0JBUUYsOEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZEQU1DLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LXByb3BlcnR5LWJpbmRpbmcnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxoMj5DaGlsZCBDb21wb25lbnQ8L2gyPlxuXHRcdEhleSB7e25hbWV9fSwgSSBhbSB7e2FnZX19IHllYXJzIG9sZCFcblx0XHQ8aDQ+TXkgSG9iYmllcyBhcmU6PC9oND5cblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwib25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzLnZhbHVlKVwiICNob2JiaWVzPlxuXHRgLFxuXHRpbnB1dHM6IFsnbmFtZTpteU5hbWUnLCAnYWdlOm15QWdlJ10sXG5cdG91dHB1dHM6IFsnaG9iYmllc0NoYW5nZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb3BlcnRCaW5kaW5nQ29tcG9uZW50IHtcblx0aG9iYmllc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHRvbkhvYmJpZXNDaGFuZ2VkKGhvYmJpZXM6IHN0cmluZyl7XG5cdFx0dGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xuXHR9O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

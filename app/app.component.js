System.register(['angular2/core', './property-binding.component'], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<section class=\"parent\">\n    \t\t<h2>This is the parent</h2>\n    \t\t<h4>Please enter your name</h4>\n    \t\t<input type=\"text\" [(ngModel)]=\"name\">\n    \t\t<br>\n    \t\t<br>\n    \t\t<section class=\"child\">\n    \t\t\t<my-property-binding [myName]=\"name\" [myAge]=\"'20'\" (hobbiesChanged)=\"hobbies = $event\"></my-property-binding>\n    \t\t</section>\n    \t\t<p>My hobbies are: {{hobbies}}</p>\n    \t</section>\n    ",
                        directives: [property_binding_component_1.PropertBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFDWCxDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNmJBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsb0RBQXVCLENBQUM7cUJBQ3hDLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Byb3BlcnRCaW5kaW5nQ29tcG9uZW50fSBmcm9tICcuL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8c2VjdGlvbiBjbGFzcz1cInBhcmVudFwiPlxuICAgIFx0XHQ8aDI+VGhpcyBpcyB0aGUgcGFyZW50PC9oMj5cbiAgICBcdFx0PGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICBcdFx0PGJyPlxuICAgIFx0XHQ8YnI+XG4gICAgXHRcdDxzZWN0aW9uIGNsYXNzPVwiY2hpbGRcIj5cbiAgICBcdFx0XHQ8bXktcHJvcGVydHktYmluZGluZyBbbXlOYW1lXT1cIm5hbWVcIiBbbXlBZ2VdPVwiJzIwJ1wiIChob2JiaWVzQ2hhbmdlZCk9XCJob2JiaWVzID0gJGV2ZW50XCI+PC9teS1wcm9wZXJ0eS1iaW5kaW5nPlxuICAgIFx0XHQ8L3NlY3Rpb24+XG4gICAgXHRcdDxwPk15IGhvYmJpZXMgYXJlOiB7e2hvYmJpZXN9fTwvcD5cbiAgICBcdDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtQcm9wZXJ0QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0bmFtZSA9ICcnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

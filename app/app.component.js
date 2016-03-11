System.register(['angular2/core', './home/home-container.component', './navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, home_container_component_1, navbar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_container_component_1_1) {
                home_container_component_1 = home_container_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<ro-navbar></ro-navbar>\n    \t<div class=\"container\">\n    \t\t<ro-home-container></ro-home-container>\n    \t</div>\n    ",
                        directives: [home_container_component_1.HomeContainerComponent, navbar_component_1.NavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx1SUFLVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxpREFBc0IsRUFBRSxrQ0FBZSxDQUFDO3FCQUN4RCxDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIb21lQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8cm8tbmF2YmFyPjwvcm8tbmF2YmFyPlxuICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFx0XHQ8cm8taG9tZS1jb250YWluZXI+PC9yby1ob21lLWNvbnRhaW5lcj5cbiAgICBcdDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0hvbWVDb250YWluZXJDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

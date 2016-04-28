System.register(['angular2/core', './home-question-list.component', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, home_question_list_component_1, users_service_1;
    var HomeContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_question_list_component_1_1) {
                home_question_list_component_1 = home_question_list_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            HomeContainerComponent = (function () {
                function HomeContainerComponent(_usersService) {
                    this._usersService = _usersService;
                    this.searchText = '';
                    this.startQuestion = false;
                }
                HomeContainerComponent.prototype.ngOnInit = function () {
                    if (this._usersService.showTut) {
                        setTimeout(function () {
                            return document.getElementById("step-1-welcome").checked = true;
                        }, 1000);
                    }
                };
                HomeContainerComponent.prototype.showTut = function () {
                    this._usersService.showTut = true;
                };
                HomeContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-container',
                        templateUrl: 'templates/home/home-container.tpl.html',
                        directives: [home_question_list_component_1.HomeQuestionListComponent]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], HomeContainerComponent);
                return HomeContainerComponent;
            }());
            exports_1("HomeContainerComponent", HomeContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFJQyxnQ0FDUyxhQUEyQjtvQkFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBSnBDLGVBQVUsR0FBVyxFQUFFLENBQUM7b0JBQ3hCLGtCQUFhLEdBQVksS0FBSyxDQUFDO2dCQUdPLENBQUM7Z0JBRXZDLHlDQUFRLEdBQVI7b0JBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO3dCQUM5QixVQUFVLENBQUM7NEJBQ1YsT0FBQSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHLElBQUk7d0JBQXhELENBQXdELEVBQUUsSUFBSSxDQUFDLENBQUE7b0JBQ2pFLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx3Q0FBTyxHQUFQO29CQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDbkMsQ0FBQztnQkFwQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxVQUFVLEVBQUUsQ0FBQyx3REFBeUIsQ0FBQztxQkFDMUMsQ0FBQzs7MENBQUE7Z0JBaUJGLDZCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCwyREFnQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hvbWVRdWVzdGlvbkxpc3RDb21wb25lbnR9IGZyb20gJy4vaG9tZS1xdWVzdGlvbi1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1ob21lLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0hvbWVRdWVzdGlvbkxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xuXHRzdGFydFF1ZXN0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0aWYodGhpcy5fdXNlcnNTZXJ2aWNlLnNob3dUdXQpe1xuXHRcdFx0c2V0VGltZW91dCgoKT0+XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcC0xLXdlbGNvbWVcIikuY2hlY2tlZCA9IHRydWUsIDEwMDApXG5cdFx0fVxuXHR9XG5cdHNob3dUdXQoKXtcblx0XHR0aGlzLl91c2Vyc1NlcnZpY2Uuc2hvd1R1dCA9IHRydWU7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

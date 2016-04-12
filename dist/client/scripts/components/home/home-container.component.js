System.register(['angular2/core', './home-issue-list.component'], function(exports_1, context_1) {
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
    var core_1, home_issue_list_component_1;
    var HomeContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_issue_list_component_1_1) {
                home_issue_list_component_1 = home_issue_list_component_1_1;
            }],
        execute: function() {
            HomeContainerComponent = (function () {
                function HomeContainerComponent() {
                    this.searchText = '';
                    this.startQuestion = false;
                }
                HomeContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-container',
                        templateUrl: 'templates/home/home-container.tpl.html',
                        directives: [home_issue_list_component_1.HomeIssueListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeContainerComponent);
                return HomeContainerComponent;
            }());
            exports_1("HomeContainerComponent", HomeContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQTtvQkFDQyxlQUFVLEdBQVcsRUFBRSxDQUFDO29CQUN4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztnQkFSRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELFVBQVUsRUFBRSxDQUFDLGtEQUFzQixDQUFDO3FCQUN2QyxDQUFDOzswQ0FBQTtnQkFJRiw2QkFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQsMkRBR0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIb21lSXNzdWVMaXN0Q29tcG9uZW50fSBmcm9tICcuL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1ob21lLWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW0hvbWVJc3N1ZUxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb250YWluZXJDb21wb25lbnR7XG5cdHNlYXJjaFRleHQ6IHN0cmluZyA9ICcnO1xuXHRzdGFydFF1ZXN0aW9uOiBib29sZWFuID0gZmFsc2U7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

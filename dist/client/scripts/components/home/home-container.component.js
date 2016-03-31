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
                    this.siteHeader = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQTtvQkFDQyxlQUFVLEdBQVcsRUFBRSxDQUFDO29CQUN4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztvQkFDL0IsZUFBVSxHQUNOLGlFQUFpRSxDQUFDO2dCQUN2RSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHdDQUF3Qzt3QkFDckQsVUFBVSxFQUFFLENBQUMsa0RBQXNCLENBQUM7cUJBQ3ZDLENBQUM7OzBDQUFBO2dCQU1GLDZCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCwyREFLQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hvbWVJc3N1ZUxpc3RDb21wb25lbnR9IGZyb20gJy4vaG9tZS1pc3N1ZS1saXN0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbSG9tZUlzc3VlTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbnRhaW5lckNvbXBvbmVudHtcblx0c2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XG5cdHN0YXJ0UXVlc3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0c2l0ZUhlYWRlcjogc3RyaW5nXG5cdFx0ID0gJ2lwc3VtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ZXIgYWRpcGlzY2luZyBlbGl0Lic7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

System.register(['angular2/core', '../../shared/vote-cell.component'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1;
    var MainPointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            }],
        execute: function() {
            MainPointComponent = (function () {
                function MainPointComponent() {
                }
                MainPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-main-point',
                        templateUrl: 'templates/issue/main-point.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPointComponent);
                return MainPointComponent;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVBEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkFHRix5QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsbURBRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21haW4tcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1haW4tcG9pbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL21haW4tcG9pbnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFpblBvaW50Q29tcG9uZW50IHtcblx0XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

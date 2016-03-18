System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/point', '../../shared/points.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, point_1, points_service_1;
    var MainPointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            }],
        execute: function() {
            MainPointComponent = (function () {
                function MainPointComponent(_pointsService) {
                    this._pointsService = _pointsService;
                    this.removed = new core_1.EventEmitter();
                }
                ;
                MainPointComponent.prototype.deletePoint = function () {
                    var _this = this;
                    this._pointsService
                        .deletePoint(this.point)
                        .subscribe(function (success) {
                        _this.removed.emit(null);
                    }, function (err) { return console.log('Err: ', err); });
                };
                __decorate([
                    core_1.Input('point'), 
                    __metadata('design:type', point_1.Point)
                ], MainPointComponent.prototype, "point", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MainPointComponent.prototype, "removed", void 0);
                MainPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-main-point',
                        templateUrl: 'templates/issue/main-point.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService])
                ], MainPointComponent);
                return MainPointComponent;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyw0QkFDUyxjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBRjVCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRWxCLENBQUM7O2dCQUV6Qyx3Q0FBVyxHQUFYO29CQUFBLGlCQVNDO29CQVJBLElBQUksQ0FBQyxjQUFjO3lCQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDdkIsU0FBUyxDQUNULFVBQUEsT0FBTzt3QkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDeEIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQ2hDLENBQUM7Z0JBQ0gsQ0FBQztnQkFkRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztpRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQVBWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkFpQkYseUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG1EQWdCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludCc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1haW4tcG9pbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL21haW4tcG9pbnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFpblBvaW50Q29tcG9uZW50IHtcblx0QElucHV0KCdwb2ludCcpIHBvaW50OiBQb2ludDtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlKXt9O1xuXG5cdGRlbGV0ZVBvaW50KCl7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZVxuXHRcdC5kZWxldGVQb2ludCh0aGlzLnBvaW50KVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQobnVsbClcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

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
                        .subscribe(function (success) { return _this.removed.emit(null); }, function (err) { return console.log('Err: ', err); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyw0QkFDUyxjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBRjVCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRWxCLENBQUM7O2dCQUV6Qyx3Q0FBVyxHQUFYO29CQUFBLGlCQU9DO29CQU5BLElBQUksQ0FBQyxjQUFjO3lCQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDdkIsU0FBUyxDQUNULFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLEVBQ2xDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQ2hDLENBQUM7Z0JBQ0gsQ0FBQztnQkFaRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztpRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQVBWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkFlRix5QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsbURBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21haW4tcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1tYWluLXBvaW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9tYWluLXBvaW50LnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbVm90ZUNlbGxDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Qb2ludENvbXBvbmVudCB7XG5cdEBJbnB1dCgncG9pbnQnKSBwb2ludDogUG9pbnQ7XG5cdEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSl7fTtcblxuXHRkZWxldGVQb2ludCgpe1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2Vcblx0XHQuZGVsZXRlUG9pbnQodGhpcy5wb2ludClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0c3VjY2VzcyA9PiB0aGlzLnJlbW92ZWQuZW1pdChudWxsKSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

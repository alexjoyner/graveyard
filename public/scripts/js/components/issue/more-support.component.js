System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/supports.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, supports_service_1;
    var MoreSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (supports_service_1_1) {
                supports_service_1 = supports_service_1_1;
            }],
        execute: function() {
            MoreSupportComponent = (function () {
                function MoreSupportComponent(_supportService) {
                    this._supportService = _supportService;
                    this.removed = new core_1.EventEmitter();
                    this.goTop = new core_1.EventEmitter();
                }
                ;
                MoreSupportComponent.prototype.removeSupport = function (supportId, supportIndex) {
                    var _this = this;
                    var answer = confirm("Are you sure you want to delete this support point? This action can't be undone");
                    if (answer === true) {
                        this._supportService.deleteSupport(supportId)
                            .subscribe(function (success) {
                            _this.removed.emit(supportIndex + 1);
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                ;
                MoreSupportComponent.prototype.gotoTop = function () {
                    this.goTop.emit(null);
                };
                __decorate([
                    core_1.Input('supports'), 
                    __metadata('design:type', Array)
                ], MoreSupportComponent.prototype, "supports", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MoreSupportComponent.prototype, "removed", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MoreSupportComponent.prototype, "goTop", void 0);
                MoreSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-more-support',
                        templateUrl: 'templates/issue/more-support.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent],
                        styleUrls: ['src/css/support.css']
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService])
                ], MoreSupportComponent);
                return MoreSupportComponent;
            }());
            exports_1("MoreSupportComponent", MoreSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlDLDhCQUNTLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBSC9CLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRVgsQ0FBQzs7Z0JBRzlDLDRDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLFlBQW9CO29CQUFyRCxpQkFXQztvQkFWQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsaUZBQWlGLENBQUMsQ0FBQztvQkFDeEcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs2QkFDM0MsU0FBUyxDQUNWLFVBQUEsT0FBTzs0QkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNqQyxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQzs7Z0JBQ0Qsc0NBQU8sR0FBUDtvQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFyQkQ7b0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7c0VBQUE7Z0JBQ2xCO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFUVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDckMsQ0FBQzs7d0NBQUE7Z0JBd0JGLDJCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCx1REF1QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21vcmUtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbW9yZS1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9tb3JlLXN1cHBvcnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc3VwcG9ydC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb3JlU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydHMnKSBzdXBwb3J0czogU3VwcG9ydFtdO1xuXHRAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBnb1RvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3N1cHBvcnRTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UpIHsgfTtcblxuXG5cdHJlbW92ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcsIHN1cHBvcnRJbmRleDogbnVtYmVyKSB7XG5cdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdXBwb3J0IHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9zdXBwb3J0U2VydmljZS5kZWxldGVTdXBwb3J0KHN1cHBvcnRJZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQoc3VwcG9ydEluZGV4ICsgMSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGdvdG9Ub3AoKXtcblx0XHR0aGlzLmdvVG9wLmVtaXQobnVsbCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/support', '../../shared/supports.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, support_1, supports_service_1;
    var TopSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (support_1_1) {
                support_1 = support_1_1;
            },
            function (supports_service_1_1) {
                supports_service_1 = supports_service_1_1;
            }],
        execute: function() {
            TopSupportComponent = (function () {
                function TopSupportComponent(_supportService) {
                    this._supportService = _supportService;
                    this.addEvidence = new core_1.EventEmitter();
                    this.viewAll = new core_1.EventEmitter();
                    this.removed = new core_1.EventEmitter();
                    this.goTop = new core_1.EventEmitter();
                }
                ;
                TopSupportComponent.prototype.removeSupport = function (supportId) {
                    var _this = this;
                    var answer = confirm("Are you sure you want to delete this support point? This action can't be undone");
                    if (answer === true) {
                        this._supportService.deleteSupport(supportId)
                            .subscribe(function (success) {
                            _this.removed.emit(null);
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                ;
                TopSupportComponent.prototype.toggleViewAll = function () {
                    this.viewAll.emit(null);
                };
                TopSupportComponent.prototype.toggleAddEvidence = function () {
                    this.addEvidence.emit(null);
                };
                TopSupportComponent.prototype.gotoTop = function () {
                    this.goTop.emit(null);
                };
                __decorate([
                    core_1.Input('support'), 
                    __metadata('design:type', support_1.Support)
                ], TopSupportComponent.prototype, "support", void 0);
                __decorate([
                    core_1.Input('numMoreSupport'), 
                    __metadata('design:type', Number)
                ], TopSupportComponent.prototype, "numMoreSupport", void 0);
                __decorate([
                    core_1.Input('showingMore'), 
                    __metadata('design:type', Boolean)
                ], TopSupportComponent.prototype, "showingMore", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "addEvidence", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "viewAll", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "removed", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "goTop", void 0);
                TopSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-top-support',
                        templateUrl: 'templates/issue/top-support.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent],
                        styleUrls: ['styles/support.css']
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService])
                ], TopSupportComponent);
                return TopSupportComponent;
            }());
            exports_1("TopSupportComponent", TopSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBUUMsNkJBQ1MsZUFBZ0M7b0JBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFML0IsZ0JBQVcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ3BELFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRVgsQ0FBQzs7Z0JBRzlDLDJDQUFhLEdBQWIsVUFBYyxTQUFpQjtvQkFBL0IsaUJBV0M7b0JBVkEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlGQUFpRixDQUFDLENBQUM7b0JBQ3hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7NkJBQzVDLFNBQVMsQ0FDVCxVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO29CQUNILENBQUM7Z0JBQ0YsQ0FBQzs7Z0JBQ0QsMkNBQWEsR0FBYjtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCwrQ0FBaUIsR0FBakI7b0JBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QscUNBQU8sR0FBUDtvQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFoQ0Q7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7MkVBQUE7Z0JBQ3hCO29CQUFDLFlBQUssQ0FBQyxhQUFhLENBQUM7O3dFQUFBO2dCQUNyQjtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztvRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQWJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQzt3QkFDbkQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNwQyxDQUFDOzt1Q0FBQTtnQkFtQ0YsMEJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELHFEQWtDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0JztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXRvcC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS90b3Atc3VwcG9ydC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3N1cHBvcnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydCcpIHN1cHBvcnQ6IFN1cHBvcnQ7XG5cdEBJbnB1dCgnbnVtTW9yZVN1cHBvcnQnKSBudW1Nb3JlU3VwcG9ydDogbnVtYmVyO1xuXHRASW5wdXQoJ3Nob3dpbmdNb3JlJykgc2hvd2luZ01vcmU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBhZGRFdmlkZW5jZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB2aWV3QWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZ29Ub3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0U2VydmljZTogU3VwcG9ydHNTZXJ2aWNlKSB7IH07XG5cblxuXHRyZW1vdmVTdXBwb3J0KHN1cHBvcnRJZDogc3RyaW5nKSB7XG5cdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdXBwb3J0IHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9zdXBwb3J0U2VydmljZS5kZWxldGVTdXBwb3J0KHN1cHBvcnRJZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlZC5lbWl0KG51bGwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0dG9nZ2xlVmlld0FsbCgpe1xuXHRcdHRoaXMudmlld0FsbC5lbWl0KG51bGwpO1xuXHR9XG5cblx0dG9nZ2xlQWRkRXZpZGVuY2UoKSB7XG5cdFx0dGhpcy5hZGRFdmlkZW5jZS5lbWl0KG51bGwpO1xuXHR9XG5cdGdvdG9Ub3AoKSB7XG5cdFx0dGhpcy5nb1RvcC5lbWl0KG51bGwpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

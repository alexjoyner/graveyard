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
                        styleUrls: ['src/css/support.css']
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService])
                ], TopSupportComponent);
                return TopSupportComponent;
            }());
            exports_1("TopSupportComponent", TopSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBUUMsNkJBQ1MsZUFBZ0M7b0JBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFML0IsZ0JBQVcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ3BELFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRVgsQ0FBQzs7Z0JBRzlDLDJDQUFhLEdBQWIsVUFBYyxTQUFpQjtvQkFBL0IsaUJBV0M7b0JBVkEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlGQUFpRixDQUFDLENBQUM7b0JBQ3hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7NkJBQzVDLFNBQVMsQ0FDVCxVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO29CQUNILENBQUM7Z0JBQ0YsQ0FBQzs7Z0JBQ0QsMkNBQWEsR0FBYjtvQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCwrQ0FBaUIsR0FBakI7b0JBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QscUNBQU8sR0FBUDtvQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFoQ0Q7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7MkVBQUE7Z0JBQ3hCO29CQUFDLFlBQUssQ0FBQyxhQUFhLENBQUM7O3dFQUFBO2dCQUNyQjtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztvRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQWJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQzt3QkFDbkQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNyQyxDQUFDOzt1Q0FBQTtnQkFtQ0YsMEJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELHFEQWtDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0JztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXRvcC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS90b3Atc3VwcG9ydC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zdXBwb3J0LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvcFN1cHBvcnRDb21wb25lbnQge1xuXHRASW5wdXQoJ3N1cHBvcnQnKSBzdXBwb3J0OiBTdXBwb3J0O1xuXHRASW5wdXQoJ251bU1vcmVTdXBwb3J0JykgbnVtTW9yZVN1cHBvcnQ6IG51bWJlcjtcblx0QElucHV0KCdzaG93aW5nTW9yZScpIHNob3dpbmdNb3JlOiBib29sZWFuO1xuXHRAT3V0cHV0KCkgYWRkRXZpZGVuY2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgdmlld0FsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGdvVG9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfc3VwcG9ydFNlcnZpY2U6IFN1cHBvcnRzU2VydmljZSkgeyB9O1xuXG5cblx0cmVtb3ZlU3VwcG9ydChzdXBwb3J0SWQ6IHN0cmluZykge1xuXHRcdGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc3VwcG9ydCBwb2ludD8gVGhpcyBhY3Rpb24gY2FuJ3QgYmUgdW5kb25lYCk7XG5cdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5fc3VwcG9ydFNlcnZpY2UuZGVsZXRlU3VwcG9ydChzdXBwb3J0SWQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZWQuZW1pdChudWxsKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdHRvZ2dsZVZpZXdBbGwoKXtcblx0XHR0aGlzLnZpZXdBbGwuZW1pdChudWxsKTtcblx0fVxuXG5cdHRvZ2dsZUFkZEV2aWRlbmNlKCkge1xuXHRcdHRoaXMuYWRkRXZpZGVuY2UuZW1pdChudWxsKTtcblx0fVxuXHRnb3RvVG9wKCkge1xuXHRcdHRoaXMuZ29Ub3AuZW1pdChudWxsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

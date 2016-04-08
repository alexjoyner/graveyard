System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/support', '../../shared/supports.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, support_1, supports_service_1, users_service_1;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            TopSupportComponent = (function () {
                function TopSupportComponent(_supportService, _usersService) {
                    this._supportService = _supportService;
                    this._usersService = _usersService;
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
                TopSupportComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                TopSupportComponent.prototype.isOwner = function (username) {
                    return (username === this._usersService.profile.email);
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
                        styleUrls: ['styles/point.css', 'styles/support.css']
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService, users_service_1.UsersService])
                ], TopSupportComponent);
                return TopSupportComponent;
            }());
            exports_1("TopSupportComponent", TopSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBUUMsNkJBQ1MsZUFBZ0MsRUFDaEMsYUFBMkI7b0JBRDNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNwRCxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUdoQixDQUFDOztnQkFHekMsMkNBQWEsR0FBYixVQUFjLFNBQWlCO29CQUEvQixpQkFXQztvQkFWQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsaUZBQWlGLENBQUMsQ0FBQztvQkFDeEcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs2QkFDNUMsU0FBUyxDQUNULFVBQUEsT0FBTzs0QkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7b0JBQ0gsQ0FBQztnQkFDRixDQUFDOztnQkFDRCwyQ0FBYSxHQUFiO29CQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELCtDQUFpQixHQUFqQjtvQkFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxxQ0FBTyxHQUFQO29CQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QscUNBQU8sR0FBUCxVQUFRLFFBQWdCO29CQUN2QixNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBdkNEO29CQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O29FQUFBO2dCQUNqQjtvQkFBQyxZQUFLLENBQUMsZ0JBQWdCLENBQUM7OzJFQUFBO2dCQUN4QjtvQkFBQyxZQUFLLENBQUMsYUFBYSxDQUFDOzt3RUFBQTtnQkFDckI7b0JBQUMsYUFBTSxFQUFFOzt3RUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O29FQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFiVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQztxQkFDeEQsQ0FBQzs7dUNBQUE7Z0JBMENGLDBCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCxxREF5Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3RvcC1zdXBwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydCc7XG5pbXBvcnQge1N1cHBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXRvcC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS90b3Atc3VwcG9ydC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50LmNzcycsICdzdHlsZXMvc3VwcG9ydC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BTdXBwb3J0Q29tcG9uZW50IHtcblx0QElucHV0KCdzdXBwb3J0Jykgc3VwcG9ydDogU3VwcG9ydDtcblx0QElucHV0KCdudW1Nb3JlU3VwcG9ydCcpIG51bU1vcmVTdXBwb3J0OiBudW1iZXI7XG5cdEBJbnB1dCgnc2hvd2luZ01vcmUnKSBzaG93aW5nTW9yZTogYm9vbGVhbjtcblx0QE91dHB1dCgpIGFkZEV2aWRlbmNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHZpZXdBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBnb1RvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3N1cHBvcnRTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgfTtcblxuXG5cdHJlbW92ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcpIHtcblx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHN1cHBvcnQgcG9pbnQ/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuX3N1cHBvcnRTZXJ2aWNlLmRlbGV0ZVN1cHBvcnQoc3VwcG9ydElkKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQobnVsbCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHR0b2dnbGVWaWV3QWxsKCl7XG5cdFx0dGhpcy52aWV3QWxsLmVtaXQobnVsbCk7XG5cdH1cblxuXHR0b2dnbGVBZGRFdmlkZW5jZSgpIHtcblx0XHR0aGlzLmFkZEV2aWRlbmNlLmVtaXQobnVsbCk7XG5cdH1cblx0Z290b1RvcCgpIHtcblx0XHR0aGlzLmdvVG9wLmVtaXQobnVsbCk7XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcih1c2VybmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuICh1c2VybmFtZSA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuZW1haWwpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

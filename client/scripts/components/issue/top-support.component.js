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
                    return (username === this._usersService.profile.local.email);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBUUMsNkJBQ1MsZUFBZ0MsRUFDaEMsYUFBMkI7b0JBRDNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNwRCxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUdoQixDQUFDOztnQkFHekMsMkNBQWEsR0FBYixVQUFjLFNBQWlCO29CQUEvQixpQkFXQztvQkFWQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsaUZBQWlGLENBQUMsQ0FBQztvQkFDeEcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQzs2QkFDNUMsU0FBUyxDQUNULFVBQUEsT0FBTzs0QkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7b0JBQ0gsQ0FBQztnQkFDRixDQUFDOztnQkFDRCwyQ0FBYSxHQUFiO29CQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELCtDQUFpQixHQUFqQjtvQkFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxxQ0FBTyxHQUFQO29CQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QscUNBQU8sR0FBUCxVQUFRLFFBQWdCO29CQUN2QixNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQXZDRDtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLGdCQUFnQixDQUFDOzsyRUFBQTtnQkFDeEI7b0JBQUMsWUFBSyxDQUFDLGFBQWEsQ0FBQzs7d0VBQUE7Z0JBQ3JCO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztvRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O29FQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBYlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7cUJBQ3hELENBQUM7O3VDQUFBO2dCQTBDRiwwQkFBQztZQUFELENBekNBLEFBeUNDLElBQUE7WUF6Q0QscURBeUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS90b3Atc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby10b3Atc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvdG9wLXN1cHBvcnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludC5jc3MnLCAnc3R5bGVzL3N1cHBvcnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydCcpIHN1cHBvcnQ6IFN1cHBvcnQ7XG5cdEBJbnB1dCgnbnVtTW9yZVN1cHBvcnQnKSBudW1Nb3JlU3VwcG9ydDogbnVtYmVyO1xuXHRASW5wdXQoJ3Nob3dpbmdNb3JlJykgc2hvd2luZ01vcmU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBhZGRFdmlkZW5jZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB2aWV3QWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZ29Ub3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0U2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH07XG5cblxuXHRyZW1vdmVTdXBwb3J0KHN1cHBvcnRJZDogc3RyaW5nKSB7XG5cdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdXBwb3J0IHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9zdXBwb3J0U2VydmljZS5kZWxldGVTdXBwb3J0KHN1cHBvcnRJZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlZC5lbWl0KG51bGwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0dG9nZ2xlVmlld0FsbCgpe1xuXHRcdHRoaXMudmlld0FsbC5lbWl0KG51bGwpO1xuXHR9XG5cblx0dG9nZ2xlQWRkRXZpZGVuY2UoKSB7XG5cdFx0dGhpcy5hZGRFdmlkZW5jZS5lbWl0KG51bGwpO1xuXHR9XG5cdGdvdG9Ub3AoKSB7XG5cdFx0dGhpcy5nb1RvcC5lbWl0KG51bGwpO1xuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIodXNlcm5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiAodXNlcm5hbWUgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmxvY2FsLmVtYWlsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

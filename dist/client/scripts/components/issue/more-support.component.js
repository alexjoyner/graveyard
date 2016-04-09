System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/supports.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, supports_service_1, users_service_1;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            MoreSupportComponent = (function () {
                function MoreSupportComponent(_supportService, _usersService) {
                    this._supportService = _supportService;
                    this._usersService = _usersService;
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
                MoreSupportComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                MoreSupportComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
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
                        styleUrls: ['styles/support.css', 'styles/point.css']
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService, users_service_1.UsersService])
                ], MoreSupportComponent);
                return MoreSupportComponent;
            }());
            exports_1("MoreSupportComponent", MoreSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlDLDhCQUNTLGVBQWdDLEVBQ2hDLGFBQTJCO29CQUQzQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUoxQixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUdoQixDQUFDOztnQkFHekMsNENBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsWUFBb0I7b0JBQXJELGlCQVdDO29CQVZBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO29CQUN4RyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDOzZCQUMzQyxTQUFTLENBQ1YsVUFBQSxPQUFPOzRCQUNOLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2pDLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDOztnQkFDRCxzQ0FBTyxHQUFQO29CQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELDJDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0Qsc0NBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkE1QkQ7b0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7c0VBQUE7Z0JBQ2xCO29CQUFDLGFBQU0sRUFBRTs7cUVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFUVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQztxQkFDeEQsQ0FBQzs7d0NBQUE7Z0JBK0JGLDJCQUFDO1lBQUQsQ0E5QkEsQUE4QkMsSUFBQTtZQTlCRCx1REE4QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21vcmUtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1vcmUtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvbW9yZS1zdXBwb3J0LnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbVm90ZUNlbGxDb21wb25lbnRdLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvc3VwcG9ydC5jc3MnLCAnc3R5bGVzL3BvaW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vcmVTdXBwb3J0Q29tcG9uZW50IHtcblx0QElucHV0KCdzdXBwb3J0cycpIHN1cHBvcnRzOiBTdXBwb3J0W107XG5cdEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGdvVG9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfc3VwcG9ydFNlcnZpY2U6IFN1cHBvcnRzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkgeyB9O1xuXG5cblx0cmVtb3ZlU3VwcG9ydChzdXBwb3J0SWQ6IHN0cmluZywgc3VwcG9ydEluZGV4OiBudW1iZXIpIHtcblx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHN1cHBvcnQgcG9pbnQ/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuX3N1cHBvcnRTZXJ2aWNlLmRlbGV0ZVN1cHBvcnQoc3VwcG9ydElkKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZWQuZW1pdChzdXBwb3J0SW5kZXggKyAxKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Z290b1RvcCgpe1xuXHRcdHRoaXMuZ29Ub3AuZW1pdChudWxsKTtcblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

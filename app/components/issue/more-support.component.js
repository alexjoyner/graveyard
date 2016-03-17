System.register(['angular2/core', '../../shared/supports.service'], function(exports_1, context_1) {
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
    var core_1, supports_service_1;
    var MoreSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (supports_service_1_1) {
                supports_service_1 = supports_service_1_1;
            }],
        execute: function() {
            MoreSupportComponent = (function () {
                function MoreSupportComponent(_supportService) {
                    this._supportService = _supportService;
                    this.removed = new core_1.EventEmitter();
                }
                ;
                MoreSupportComponent.prototype.removeSupport = function (supportId, supportIndex) {
                    var _this = this;
                    this._supportService.deleteSupport(supportId)
                        .subscribe(function (success) {
                        _this.removed.emit(supportIndex + 1);
                    }, function (err) { return console.log('Error: ', err); });
                };
                ;
                __decorate([
                    core_1.Input('supports'), 
                    __metadata('design:type', Array)
                ], MoreSupportComponent.prototype, "supports", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MoreSupportComponent.prototype, "removed", void 0);
                MoreSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-more-support',
                        templateUrl: 'templates/issue/more-support.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService])
                ], MoreSupportComponent);
                return MoreSupportComponent;
            }());
            exports_1("MoreSupportComponent", MoreSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdDLDhCQUNTLGVBQWdDO29CQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBRi9CLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRWIsQ0FBQzs7Z0JBRzlDLDRDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLFlBQW9CO29CQUFyRCxpQkFRQztvQkFQQSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7eUJBQzNDLFNBQVMsQ0FDVixVQUFBLE9BQU87d0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztnQkFDSixDQUFDOztnQkFkRDtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOztzRUFBQTtnQkFDbEI7b0JBQUMsYUFBTSxFQUFFOztxRUFBQTtnQkFOVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBRSx1Q0FBdUM7cUJBQ3ZELENBQUM7O3dDQUFBO2dCQWlCRiwyQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsdURBZ0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9tb3JlLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0JztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1vcmUtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvbW9yZS1zdXBwb3J0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNb3JlU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydHMnKSBzdXBwb3J0czogU3VwcG9ydFtdO1xuXHRAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3N1cHBvcnRTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UpIHsgfTtcblxuXG5cdHJlbW92ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcsIHN1cHBvcnRJbmRleDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fc3VwcG9ydFNlcnZpY2UuZGVsZXRlU3VwcG9ydChzdXBwb3J0SWQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlZC5lbWl0KHN1cHBvcnRJbmRleCsxKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9O1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

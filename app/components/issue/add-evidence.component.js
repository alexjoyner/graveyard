System.register(['angular2/core', '../../shared/support'], function(exports_1, context_1) {
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
    var core_1, support_1;
    var AddSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (support_1_1) {
                support_1 = support_1_1;
            }],
        execute: function() {
            AddSupportComponent = (function () {
                function AddSupportComponent() {
                    this.newSupport = new support_1.Support('', '', '', '', '', 0, 0);
                }
                AddSupportComponent.prototype.addEvidence = function () {
                    console.log(this.newSupport);
                };
                AddSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-add-support',
                        templateUrl: 'templates/issue/add-support.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddSupportComponent);
                return AddSupportComponent;
            }());
            exports_1("AddSupportComponent", AddSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLWV2aWRlbmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO29CQUNDLGVBQVUsR0FBWSxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBSzdELENBQUM7Z0JBSEEseUNBQVcsR0FBWDtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFURjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7cUJBQ3RELENBQUM7O3VDQUFBO2dCQU9GLDBCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCxxREFNQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvYWRkLWV2aWRlbmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWFkZC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9hZGQtc3VwcG9ydC50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWRkU3VwcG9ydENvbXBvbmVudHtcblx0bmV3U3VwcG9ydDogU3VwcG9ydCA9IG5ldyBTdXBwb3J0KCcnLCAnJywgJycsICcnLCAnJywgMCwgMCk7XG5cblx0YWRkRXZpZGVuY2UoKXtcblx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld1N1cHBvcnQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

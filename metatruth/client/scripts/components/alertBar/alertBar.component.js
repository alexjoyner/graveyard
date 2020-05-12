System.register(['angular2/core', 'angular2/router', '../../shared/globalHandler.service'], function(exports_1, context_1) {
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
    var core_1, router_1, globalHandler_service_1;
    var AlertBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            }],
        execute: function() {
            AlertBarComponent = (function () {
                function AlertBarComponent(_globalHandler, _router) {
                    var _this = this;
                    this._globalHandler = _globalHandler;
                    this._router = _router;
                    this.classType = null;
                    this.message = null;
                    _globalHandler.dataChange.subscribe(function (data) { return _this.emitStatus(data); });
                }
                AlertBarComponent.prototype.emitStatus = function (data) {
                    var _this = this;
                    switch (data.status) {
                        case 500:
                            this.message = data.body;
                            this.classType = 'danger';
                            break;
                        case 403:
                            if (localStorage.getItem('token')) {
                                localStorage.removeItem('token');
                            }
                            this._router.navigate(['Auth']);
                            this.message = data.body;
                            this.classType = 'danger';
                            break;
                    }
                    setTimeout(function () {
                        _this.message = null;
                        _this.classType = null;
                    }, 5000);
                };
                AlertBarComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-alert-bar',
                        templateUrl: 'templates/alertBar/alertBar.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [globalHandler_service_1.GlobalHandlerService, router_1.Router])
                ], AlertBarComponent);
                return AlertBarComponent;
            }());
            exports_1("AlertBarComponent", AlertBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRCYXIvYWxlcnRCYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBR0MsMkJBQ1MsY0FBb0MsRUFDcEMsT0FBZTtvQkFMekIsaUJBK0JDO29CQTNCUyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7b0JBQ3BDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBSmhCLGNBQVMsR0FBVyxJQUFJLENBQUM7b0JBQ3pCLFlBQU8sR0FBVyxJQUFJLENBQUM7b0JBSTlCLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUNsQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBb0M7b0JBQS9DLGlCQW1CQztvQkFsQkEsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7d0JBQ3BCLEtBQUssR0FBRzs0QkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOzRCQUMxQixLQUFLLENBQUM7d0JBQ1AsS0FBSyxHQUFHOzRCQUNQLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dDQUNqQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzRCQUNqQyxDQUFDOzRCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOzRCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs0QkFDMUIsS0FBSyxDQUFDO29CQUNSLENBQUM7b0JBQ0QsVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNWLENBQUM7Z0JBbENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztxQ0FBQTtnQkFnQ0Ysd0JBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELGlEQStCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWxlcnRCYXIvYWxlcnRCYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtHbG9iYWxIYW5kbGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2dsb2JhbEhhbmRsZXIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWFsZXJ0LWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYWxlcnRCYXIvYWxlcnRCYXIudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRCYXJDb21wb25lbnR7XG5cdHByaXZhdGUgY2xhc3NUeXBlOiBzdHJpbmcgPSBudWxsO1xuXHRwcml2YXRlIG1lc3NhZ2U6IHN0cmluZyA9IG51bGw7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2dsb2JhbEhhbmRsZXI6IEdsb2JhbEhhbmRsZXJTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cdFx0X2dsb2JhbEhhbmRsZXIuZGF0YUNoYW5nZS5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHRoaXMuZW1pdFN0YXR1cyhkYXRhKSlcblx0fVxuXG5cdGVtaXRTdGF0dXMoZGF0YToge3N0YXR1czogbnVtYmVyLCBib2R5OiBzdHJpbmd9KXtcblx0XHRzd2l0Y2ggKGRhdGEuc3RhdHVzKXtcblx0XHRcdGNhc2UgNTAwOlxuXHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSBkYXRhLmJvZHk7XG5cdFx0XHRcdHRoaXMuY2xhc3NUeXBlID0gJ2Rhbmdlcic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0MDM6XG5cdFx0XHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKXtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0F1dGgnXSlcblx0XHRcdFx0dGhpcy5tZXNzYWdlID0gZGF0YS5ib2R5O1xuXHRcdFx0XHR0aGlzLmNsYXNzVHlwZSA9ICdkYW5nZXInO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLm1lc3NhZ2UgPSBudWxsO1xuXHRcdFx0dGhpcy5jbGFzc1R5cGUgPSBudWxsO1xuXHRcdH0sIDUwMDApO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

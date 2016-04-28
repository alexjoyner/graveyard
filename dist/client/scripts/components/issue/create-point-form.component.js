System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', 'angular2/router', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, router_1, users_service_1;
    var CreatePointFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            CreatePointFormComponent = (function () {
                function CreatePointFormComponent(_postsService, _routeParams, _usersService) {
                    this._postsService = _postsService;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.cancel = new core_1.EventEmitter();
                }
                CreatePointFormComponent.prototype.createPoint = function () {
                    this.newPoint.title = this.searchText;
                    this._postsService.insertPost({ post: this.newPoint, tags: [] })
                        .subscribe(function (pointData) { return console.log('SUCCESS creating point'); }, function (err) { return console.log('err', err); });
                };
                CreatePointFormComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                CreatePointFormComponent.prototype.ngOnInit = function () {
                    this._questionId = +this._routeParams.get('id');
                    var stringType = this._routeParams.get('type');
                    switch (stringType) {
                        case 'yes':
                            this._pointType = 1;
                            break;
                        case 'no':
                            this._pointType = 2;
                            break;
                    }
                    /*title: string,
                    post_type_id: number,
                    parent_id?: number,
                    point_type_id?: number,
                    detail?: string,
                    source?: string,
                    source_type_id?: number,
                    _id?: number*/
                    this.newPoint = new post_1.Post('', 2, this._questionId, this._pointType, '');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CreatePointFormComponent.prototype, "searchText", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "cancel", void 0);
                CreatePointFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-create-point-form',
                        templateUrl: 'templates/question/create-point-form.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.RouteParams, users_service_1.UsersService])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0Msa0NBQ1MsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTDFCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBS2pCLENBQUM7Z0JBRXpDLDhDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7eUJBQzdELFNBQVMsQ0FDVCxVQUFBLFNBQVMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBckMsQ0FBcUMsRUFDbkQsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsMkNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hELElBQUksVUFBVSxHQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0RCxNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO3dCQUNsQixLQUFLLEtBQUs7NEJBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7NEJBQ3BCLEtBQUssQ0FBQzt3QkFDUCxLQUFLLElBQUk7NEJBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7NEJBQ3BCLEtBQUssQ0FBQztvQkFDUixDQUFDO29CQUNEOzs7Ozs7O2tDQU9jO29CQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBdkNEO29CQUFDLFlBQUssRUFBRTs7NEVBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzt3RUFBQTtnQkFUVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFdBQVcsRUFBRSwrQ0FBK0M7cUJBQy9ELENBQUM7OzRDQUFBO2dCQTZDRiwrQkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QsK0RBNENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdCc7XG5pbXBvcnQge1Bvc3RzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWNyZWF0ZS1wb2ludC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9xdWVzdGlvbi9jcmVhdGUtcG9pbnQtZm9ybS50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRwcml2YXRlIG5ld1BvaW50OiBQb3N0O1xuXHRwcml2YXRlIF9xdWVzdGlvbklkOiBudW1iZXI7XG5cdHByaXZhdGUgX3BvaW50VHlwZTogbnVtYmVyO1xuXHRASW5wdXQoKSBzZWFyY2hUZXh0OiBzdHJpbmc7XG5cdEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkgeyB9XG5cblx0Y3JlYXRlUG9pbnQoKXtcblx0XHR0aGlzLm5ld1BvaW50LnRpdGxlID0gdGhpcy5zZWFyY2hUZXh0O1xuXHRcdHRoaXMuX3Bvc3RzU2VydmljZS5pbnNlcnRQb3N0KHtwb3N0OiB0aGlzLm5ld1BvaW50LCB0YWdzOiBbXX0pXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdHBvaW50RGF0YSA9PiAgY29uc29sZS5sb2coJ1NVQ0NFU1MgY3JlYXRpbmcgcG9pbnQnKSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdCk7XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHR0aGlzLmNhbmNlbC5lbWl0KG51bGwpO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLl9xdWVzdGlvbklkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHRsZXQgc3RyaW5nVHlwZTpzdHJpbmcgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHRzd2l0Y2goc3RyaW5nVHlwZSl7XG5cdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHR0aGlzLl9wb2ludFR5cGUgPSAxO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0dGhpcy5fcG9pbnRUeXBlID0gMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8qdGl0bGU6IHN0cmluZyxcblx0XHRwb3N0X3R5cGVfaWQ6IG51bWJlcixcblx0XHRwYXJlbnRfaWQ/OiBudW1iZXIsXG5cdFx0cG9pbnRfdHlwZV9pZD86IG51bWJlcixcblx0XHRkZXRhaWw/OiBzdHJpbmcsXG5cdFx0c291cmNlPzogc3RyaW5nLFxuXHRcdHNvdXJjZV90eXBlX2lkPzogbnVtYmVyLFxuXHRcdF9pZD86IG51bWJlciovXG5cdFx0dGhpcy5uZXdQb2ludCA9IG5ldyBQb3N0KCcnLDIsdGhpcy5fcXVlc3Rpb25JZCx0aGlzLl9wb2ludFR5cGUsJycpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

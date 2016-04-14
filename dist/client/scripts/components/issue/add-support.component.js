System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, users_service_1;
    var AddSupportComponent;
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
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            // Parent is points-list
            AddSupportComponent = (function () {
                function AddSupportComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.showSource = false;
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    this.newSupport.issue_id = +this.issueId;
                    this.newSupport['correspond_main_point_type_id'] = this.main_point_type_id;
                    this._postsService.insertPost(this.newSupport)
                        .subscribe(function (data) {
                        console.log('SUCCESS');
                    }, function (err) { return console.log('Error: ', err); });
                };
                AddSupportComponent.prototype.ngOnInit = function () {
                    /*title: string,
                    post_type_id: number,
                    parent_id?: number,
                    point_type_id?: number,
                    detail?: string,
                    source?: string,
                    source_type_id?: number*/
                    this.newSupport = new post_1.Post('', 3, this.pointId, null, '');
                    console.log(this.newSupport);
                };
                AddSupportComponent.prototype.setSourceType = function (sourcetype) {
                    this.newSupport.source_type_id = sourcetype;
                    switch (sourcetype) {
                        case 5:
                            this.showSource = false;
                            this.newSupport.source = null;
                            break;
                        default:
                            this.showSource = true;
                            this.newSupport.detail = '';
                            this.newSupport.source = 'http://';
                            break;
                    }
                };
                __decorate([
                    core_1.Input('pointId'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "pointId", void 0);
                __decorate([
                    core_1.Input('mainPointTypeId'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "main_point_type_id", void 0);
                __decorate([
                    core_1.Input('issueId'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "issueId", void 0);
                __decorate([
                    core_1.Input('pointIndex'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "pointIndex", void 0);
                AddSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-add-support',
                        templateUrl: 'templates/issue/add-support.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], AddSupportComponent);
                return AddSupportComponent;
            }());
            exports_1("AddSupportComponent", AddSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGFBQTJCLEVBQzNCLGFBQTJCO29CQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBSjVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Z0JBSUksQ0FBQzs7Z0JBRXpDLDJDQUFhLEdBQWI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUM3QyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQzs7Ozs7OzZDQU15QjtvQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQUksQ0FDekIsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0QsMkNBQWEsR0FBYixVQUFjLFVBQWtCO29CQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7b0JBQzVDLE1BQU0sQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2xCLEtBQUssQ0FBQzs0QkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUM5QixLQUFLLENBQUE7d0JBQ047NEJBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzRCQUNuQyxLQUFLLENBQUE7b0JBQ1AsQ0FBQztnQkFDRixDQUFDO2dCQS9DRDtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLGlCQUFpQixDQUFDOzsrRUFBQTtnQkFDekI7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3VFQUFBO2dCQVJyQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7cUJBQ3RELENBQUM7O3VDQUFBO2dCQWtERiwwQkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQscURBaURDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9hZGQtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuLy8gUGFyZW50IGlzIHBvaW50cy1saXN0XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWFkZC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9hZGQtc3VwcG9ydC50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWRkU3VwcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCdwb2ludElkJykgcG9pbnRJZDogbnVtYmVyO1xuXHRASW5wdXQoJ21haW5Qb2ludFR5cGVJZCcpIG1haW5fcG9pbnRfdHlwZV9pZDogbnVtYmVyO1xuXHRASW5wdXQoJ2lzc3VlSWQnKSBpc3N1ZUlkOiBudW1iZXI7XG5cdEBJbnB1dCgncG9pbnRJbmRleCcpIHBvaW50SW5kZXg6IG51bWJlcjtcblx0bmV3U3VwcG9ydDogUG9zdDtcblx0cHJpdmF0ZSBzaG93U291cmNlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgfTtcblxuXHRjcmVhdGVTdXBwb3J0KCl7XG5cdFx0dGhpcy5uZXdTdXBwb3J0Lmlzc3VlX2lkID0gK3RoaXMuaXNzdWVJZDtcblx0XHR0aGlzLm5ld1N1cHBvcnRbJ2NvcnJlc3BvbmRfbWFpbl9wb2ludF90eXBlX2lkJ10gPSB0aGlzLm1haW5fcG9pbnRfdHlwZV9pZDtcblx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuaW5zZXJ0UG9zdCh0aGlzLm5ld1N1cHBvcnQpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xuXHRcdFx0fSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHQpO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHQvKnRpdGxlOiBzdHJpbmcsXG5cdFx0cG9zdF90eXBlX2lkOiBudW1iZXIsXG5cdFx0cGFyZW50X2lkPzogbnVtYmVyLFxuXHRcdHBvaW50X3R5cGVfaWQ/OiBudW1iZXIsXG5cdFx0ZGV0YWlsPzogc3RyaW5nLFxuXHRcdHNvdXJjZT86IHN0cmluZyxcblx0XHRzb3VyY2VfdHlwZV9pZD86IG51bWJlciovXG5cdFx0dGhpcy5uZXdTdXBwb3J0ID0gbmV3IFBvc3QoXG5cdFx0XHQnJywzLHRoaXMucG9pbnRJZCxudWxsLCcnKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld1N1cHBvcnQpO1xuXHR9XG5cdHNldFNvdXJjZVR5cGUoc291cmNldHlwZTogbnVtYmVyKXtcblx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlX3R5cGVfaWQgPSBzb3VyY2V0eXBlO1xuXHRcdHN3aXRjaChzb3VyY2V0eXBlKXtcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0dGhpcy5zaG93U291cmNlID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSBudWxsO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5zaG93U291cmNlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5uZXdTdXBwb3J0LmRldGFpbCA9ICcnOyBcblx0XHRcdFx0dGhpcy5uZXdTdXBwb3J0LnNvdXJjZSA9ICdodHRwOi8vJztcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cdH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

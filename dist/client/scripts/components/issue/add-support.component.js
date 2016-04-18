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
                    this._postsService.insertPost({ post: this.newSupport, tags: [] })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGFBQTJCLEVBQzNCLGFBQTJCO29CQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBSjVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Z0JBSUksQ0FBQzs7Z0JBRXpDLDJDQUFhLEdBQWI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO29CQUMzRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQzt5QkFDL0QsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHNDQUFRLEdBQVI7b0JBQ0M7Ozs7Ozs2Q0FNeUI7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxXQUFJLENBQ3pCLEVBQUUsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELDJDQUFhLEdBQWIsVUFBYyxVQUFrQjtvQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO29CQUM1QyxNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO3dCQUNsQixLQUFLLENBQUM7NEJBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDOUIsS0FBSyxDQUFBO3dCQUNOOzRCQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzs0QkFDbkMsS0FBSyxDQUFBO29CQUNQLENBQUM7Z0JBQ0YsQ0FBQztnQkEvQ0Q7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7K0VBQUE7Z0JBQ3pCO29CQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O29FQUFBO2dCQUNqQjtvQkFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOzt1RUFBQTtnQkFSckI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3FCQUN0RCxDQUFDOzt1Q0FBQTtnQkFrREYsMEJBQUM7WUFBRCxDQWpEQSxBQWlEQyxJQUFBO1lBakRELHFEQWlEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbi8vIFBhcmVudCBpcyBwb2ludHMtbGlzdFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1hZGQtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvYWRkLXN1cHBvcnQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkZFN1cHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgncG9pbnRJZCcpIHBvaW50SWQ6IG51bWJlcjtcblx0QElucHV0KCdtYWluUG9pbnRUeXBlSWQnKSBtYWluX3BvaW50X3R5cGVfaWQ6IG51bWJlcjtcblx0QElucHV0KCdpc3N1ZUlkJykgaXNzdWVJZDogbnVtYmVyO1xuXHRASW5wdXQoJ3BvaW50SW5kZXgnKSBwb2ludEluZGV4OiBudW1iZXI7XG5cdG5ld1N1cHBvcnQ6IFBvc3Q7XG5cdHByaXZhdGUgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMubmV3U3VwcG9ydC5pc3N1ZV9pZCA9ICt0aGlzLmlzc3VlSWQ7XG5cdFx0dGhpcy5uZXdTdXBwb3J0Wydjb3JyZXNwb25kX21haW5fcG9pbnRfdHlwZV9pZCddID0gdGhpcy5tYWluX3BvaW50X3R5cGVfaWQ7XG5cdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmluc2VydFBvc3Qoe3Bvc3Q6IHRoaXMubmV3U3VwcG9ydCwgdGFnczogW119KVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NVQ0NFU1MnKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0Lyp0aXRsZTogc3RyaW5nLFxuXHRcdHBvc3RfdHlwZV9pZDogbnVtYmVyLFxuXHRcdHBhcmVudF9pZD86IG51bWJlcixcblx0XHRwb2ludF90eXBlX2lkPzogbnVtYmVyLFxuXHRcdGRldGFpbD86IHN0cmluZyxcblx0XHRzb3VyY2U/OiBzdHJpbmcsXG5cdFx0c291cmNlX3R5cGVfaWQ/OiBudW1iZXIqL1xuXHRcdHRoaXMubmV3U3VwcG9ydCA9IG5ldyBQb3N0KFxuXHRcdFx0JycsMyx0aGlzLnBvaW50SWQsbnVsbCwnJyk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5uZXdTdXBwb3J0KTtcblx0fVxuXHRzZXRTb3VyY2VUeXBlKHNvdXJjZXR5cGU6IG51bWJlcil7XG5cdFx0dGhpcy5uZXdTdXBwb3J0LnNvdXJjZV90eXBlX2lkID0gc291cmNldHlwZTtcblx0XHRzd2l0Y2goc291cmNldHlwZSl7XG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlID0gbnVsbDtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5kZXRhaWwgPSAnJzsgXG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSAnaHR0cDovLyc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

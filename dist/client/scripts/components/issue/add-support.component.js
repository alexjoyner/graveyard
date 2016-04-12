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
                    this.added = new core_1.EventEmitter();
                    this.showSource = false;
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    var _this = this;
                    this._postsService.insertPost(this.newSupport)
                        .subscribe(function (data) {
                        console.log('NEW SUPPORT: ', data);
                        _this.added.emit(data);
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
                    core_1.Input('issueId'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "issueId", void 0);
                __decorate([
                    core_1.Input('pointIndex'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "pointIndex", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AddSupportComponent.prototype, "added", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGFBQTJCLEVBQzNCLGFBQTJCO29CQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRWhELGVBQVUsR0FBWSxLQUFLLENBQUM7Z0JBSUksQ0FBQzs7Z0JBRXpDLDJDQUFhLEdBQWI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDN0MsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQzs7Ozs7OzZDQU15QjtvQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQUksQ0FDekIsRUFBRSxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0QsMkNBQWEsR0FBYixVQUFjLFVBQWtCO29CQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7b0JBQzVDLE1BQU0sQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2xCLEtBQUssQ0FBQzs0QkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUM5QixLQUFLLENBQUE7d0JBQ047NEJBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7NEJBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzRCQUNuQyxLQUFLLENBQUE7b0JBQ1AsQ0FBQztnQkFDRixDQUFDO2dCQTlDRDtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3VFQUFBO2dCQUNwQjtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQVJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQztxQkFDdEQsQ0FBQzs7dUNBQUE7Z0JBaURGLDBCQUFDO1lBQUQsQ0FoREEsQUFnREMsSUFBQTtZQWhERCxxREFnREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2FkZC1zdXBwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbi8vIFBhcmVudCBpcyBwb2ludHMtbGlzdFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1hZGQtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvYWRkLXN1cHBvcnQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkZFN1cHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgncG9pbnRJZCcpIHBvaW50SWQ6IG51bWJlcjtcblx0QElucHV0KCdpc3N1ZUlkJykgaXNzdWVJZDogbnVtYmVyO1xuXHRASW5wdXQoJ3BvaW50SW5kZXgnKSBwb2ludEluZGV4OiBudW1iZXI7XG5cdEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdG5ld1N1cHBvcnQ6IFBvc3Q7XG5cdHByaXZhdGUgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMuX3Bvc3RzU2VydmljZS5pbnNlcnRQb3N0KHRoaXMubmV3U3VwcG9ydClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdORVcgU1VQUE9SVDogJywgZGF0YSk7XG5cdFx0XHRcdHRoaXMuYWRkZWQuZW1pdChkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0Lyp0aXRsZTogc3RyaW5nLFxuXHRcdHBvc3RfdHlwZV9pZDogbnVtYmVyLFxuXHRcdHBhcmVudF9pZD86IG51bWJlcixcblx0XHRwb2ludF90eXBlX2lkPzogbnVtYmVyLFxuXHRcdGRldGFpbD86IHN0cmluZyxcblx0XHRzb3VyY2U/OiBzdHJpbmcsXG5cdFx0c291cmNlX3R5cGVfaWQ/OiBudW1iZXIqL1xuXHRcdHRoaXMubmV3U3VwcG9ydCA9IG5ldyBQb3N0KFxuXHRcdFx0JycsMyx0aGlzLnBvaW50SWQsbnVsbCwnJyk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5uZXdTdXBwb3J0KTtcblx0fVxuXHRzZXRTb3VyY2VUeXBlKHNvdXJjZXR5cGU6IG51bWJlcil7XG5cdFx0dGhpcy5uZXdTdXBwb3J0LnNvdXJjZV90eXBlX2lkID0gc291cmNldHlwZTtcblx0XHRzd2l0Y2goc291cmNldHlwZSl7XG5cdFx0XHRjYXNlIDU6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlID0gbnVsbDtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5kZXRhaWwgPSAnJzsgXG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSAnaHR0cDovLyc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
                    this._postsService.insertPost(this.newPoint)
                        .subscribe(function (pointData) { return console.log('SUCCESS creating point'); }, function (err) { return console.log('err', err); });
                };
                CreatePointFormComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                CreatePointFormComponent.prototype.ngOnInit = function () {
                    this._issueId = +this._routeParams.get('id');
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
                    this.newPoint = new post_1.Post('', 2, this._issueId, this._pointType, '');
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
                        templateUrl: 'templates/issue/create-point-form.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.RouteParams, users_service_1.UsersService])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0Msa0NBQ1MsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTDFCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBS2pCLENBQUM7Z0JBRXpDLDhDQUFXLEdBQVg7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDM0MsU0FBUyxDQUNULFVBQUEsU0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFyQyxDQUFxQyxFQUNuRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsMkNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCwyQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxVQUFVLEdBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RELE1BQU0sQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2xCLEtBQUssS0FBSzs0QkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzs0QkFDcEIsS0FBSyxDQUFDO3dCQUNQLEtBQUssSUFBSTs0QkFDUixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzs0QkFDcEIsS0FBSyxDQUFDO29CQUNSLENBQUM7b0JBQ0Q7Ozs7Ozs7a0NBT2M7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkF2Q0Q7b0JBQUMsWUFBSyxFQUFFOzs0RUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQVRWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7NENBQUE7Z0JBNkNGLCtCQUFDO1lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtZQTVDRCwrREE0Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tY3JlYXRlLXBvaW50LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2NyZWF0ZS1wb2ludC1mb3JtLnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb2ludEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHByaXZhdGUgbmV3UG9pbnQ6IFBvc3Q7XG5cdHByaXZhdGUgX2lzc3VlSWQ6IG51bWJlcjtcblx0cHJpdmF0ZSBfcG9pbnRUeXBlOiBudW1iZXI7XG5cdEBJbnB1dCgpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH1cblxuXHRjcmVhdGVQb2ludCgpe1xuXHRcdHRoaXMubmV3UG9pbnQudGl0bGUgPSB0aGlzLnNlYXJjaFRleHQ7XG5cdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmluc2VydFBvc3QodGhpcy5uZXdQb2ludClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0cG9pbnREYXRhID0+ICBjb25zb2xlLmxvZygnU1VDQ0VTUyBjcmVhdGluZyBwb2ludCcpLFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdHRoaXMuY2FuY2VsLmVtaXQobnVsbCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3VlSWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdGxldCBzdHJpbmdUeXBlOnN0cmluZyA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHN3aXRjaChzdHJpbmdUeXBlKXtcblx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdHRoaXMuX3BvaW50VHlwZSA9IDE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0XHR0aGlzLl9wb2ludFR5cGUgPSAyO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Lyp0aXRsZTogc3RyaW5nLFxuXHRcdHBvc3RfdHlwZV9pZDogbnVtYmVyLFxuXHRcdHBhcmVudF9pZD86IG51bWJlcixcblx0XHRwb2ludF90eXBlX2lkPzogbnVtYmVyLFxuXHRcdGRldGFpbD86IHN0cmluZyxcblx0XHRzb3VyY2U/OiBzdHJpbmcsXG5cdFx0c291cmNlX3R5cGVfaWQ/OiBudW1iZXIsXG5cdFx0X2lkPzogbnVtYmVyKi9cblx0XHR0aGlzLm5ld1BvaW50ID0gbmV3IFBvc3QoJycsMix0aGlzLl9pc3N1ZUlkLHRoaXMuX3BvaW50VHlwZSwnJyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

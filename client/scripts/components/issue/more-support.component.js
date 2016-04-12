System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/posts.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, posts_service_1, users_service_1;
    var MoreSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            MoreSupportComponent = (function () {
                function MoreSupportComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.removed = new core_1.EventEmitter();
                    this.goTop = new core_1.EventEmitter();
                }
                ;
                MoreSupportComponent.prototype.removeSupport = function (supportId, supportIndex) {
                    var _this = this;
                    var answer = confirm("Are you sure you want to delete this support point? This action can't be undone");
                    if (answer === true) {
                        this._postsService.deletePost(supportId)
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
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], MoreSupportComponent);
                return MoreSupportComponent;
            }());
            exports_1("MoreSupportComponent", MoreSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlDLDhCQUNTLGFBQTJCLEVBQzNCLGFBQTJCO29CQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBSjFCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBR2hCLENBQUM7O2dCQUd6Qyw0Q0FBYSxHQUFiLFVBQWMsU0FBaUIsRUFBRSxZQUFvQjtvQkFBckQsaUJBV0M7b0JBVkEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlGQUFpRixDQUFDLENBQUM7b0JBQ3hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7NkJBQ3RDLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNyQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7O2dCQUNELHNDQUFPLEdBQVA7b0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsMkNBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxzQ0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTVCRDtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOztzRUFBQTtnQkFDbEI7b0JBQUMsYUFBTSxFQUFFOztxRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQVRWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDO3FCQUN4RCxDQUFDOzt3Q0FBQTtnQkErQkYsMkJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELHVEQThCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdCc7XG5pbXBvcnQge1Bvc3RzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbW9yZS1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9tb3JlLXN1cHBvcnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9zdXBwb3J0LmNzcycsICdzdHlsZXMvcG9pbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9yZVN1cHBvcnRDb21wb25lbnQge1xuXHRASW5wdXQoJ3N1cHBvcnRzJykgc3VwcG9ydHM6IFBvc3RbXTtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgZ29Ub3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkgeyB9O1xuXG5cblx0cmVtb3ZlU3VwcG9ydChzdXBwb3J0SWQ6IHN0cmluZywgc3VwcG9ydEluZGV4OiBudW1iZXIpIHtcblx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHN1cHBvcnQgcG9pbnQ/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuX3Bvc3RzU2VydmljZS5kZWxldGVQb3N0KHN1cHBvcnRJZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQoc3VwcG9ydEluZGV4ICsgMSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGdvdG9Ub3AoKXtcblx0XHR0aGlzLmdvVG9wLmVtaXQobnVsbCk7XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

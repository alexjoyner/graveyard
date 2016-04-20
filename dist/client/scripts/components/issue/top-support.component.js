System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/post', '../../shared/posts.service', '../../shared/users.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, post_1, posts_service_1, users_service_1, router_1;
    var TopSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TopSupportComponent = (function () {
                function TopSupportComponent(_postService, _usersService, _routeParams) {
                    this._postService = _postService;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.addEvidence = new core_1.EventEmitter();
                    this.viewAll = new core_1.EventEmitter();
                    this.goTop = new core_1.EventEmitter();
                    this.type = this._routeParams.get('type');
                    this.issueId = this._routeParams.get('id');
                }
                ;
                TopSupportComponent.prototype.removeSupport = function (supportId) {
                    var answer = confirm("Are you sure you want to delete this support point? This action can't be undone");
                    if (answer === true) {
                        this._postService.deletePost(+supportId, +this.issueId, this.type)
                            .subscribe(function (success) {
                            console.log('Success Delete');
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                ;
                TopSupportComponent.prototype.toggleViewAll = function () {
                    this.viewAll.emit(null);
                };
                TopSupportComponent.prototype.toggleAddEvidence = function () {
                    this.addEvidence.emit(null);
                };
                TopSupportComponent.prototype.gotoTop = function () {
                    this.goTop.emit(null);
                };
                TopSupportComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                TopSupportComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                __decorate([
                    core_1.Input('support'), 
                    __metadata('design:type', post_1.Post)
                ], TopSupportComponent.prototype, "support", void 0);
                __decorate([
                    core_1.Input('numMoreSupport'), 
                    __metadata('design:type', Number)
                ], TopSupportComponent.prototype, "numMoreSupport", void 0);
                __decorate([
                    core_1.Input('showingMore'), 
                    __metadata('design:type', Boolean)
                ], TopSupportComponent.prototype, "showingMore", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "addEvidence", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "viewAll", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], TopSupportComponent.prototype, "goTop", void 0);
                TopSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-top-support',
                        templateUrl: 'templates/issue/top-support.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService, router_1.RouteParams])
                ], TopSupportComponent);
                return TopSupportComponent;
            }());
            exports_1("TopSupportComponent", TopSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBU0MsNkJBQ1MsWUFBMEIsRUFDMUIsYUFBMkIsRUFDM0IsWUFBeUI7b0JBRnpCLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBUnhCLGdCQUFXLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNwRCxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUN4RCxTQUFJLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdDLFlBQU8sR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFJUixDQUFDOztnQkFFdkMsMkNBQWEsR0FBYixVQUFjLFNBQWlCO29CQUM5QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsaUZBQWlGLENBQUMsQ0FBQztvQkFDeEcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDOzZCQUNqRSxTQUFTLENBQ1QsVUFBQSxPQUFPOzRCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7b0JBQ0gsQ0FBQztnQkFDRixDQUFDOztnQkFDRCwyQ0FBYSxHQUFiO29CQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELCtDQUFpQixHQUFqQjtvQkFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFDRCxxQ0FBTyxHQUFQO29CQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QscUNBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkF4Q0Q7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7MkVBQUE7Z0JBQ3hCO29CQUFDLFlBQUssQ0FBQyxhQUFhLENBQUM7O3dFQUFBO2dCQUNyQjtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFaVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUVsQyxDQUFDOzt1Q0FBQTtnQkEyQ0YsMEJBQUM7WUFBRCxDQTFDQSxBQTBDQyxJQUFBO1lBMUNELHFEQTBDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvdG9wLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXRvcC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS90b3Atc3VwcG9ydC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50XVxuICAgIC8vc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludC5jc3MnLCAnc3R5bGVzL3N1cHBvcnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9wU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydCcpIHN1cHBvcnQ6IFBvc3Q7XG5cdEBJbnB1dCgnbnVtTW9yZVN1cHBvcnQnKSBudW1Nb3JlU3VwcG9ydDogbnVtYmVyO1xuXHRASW5wdXQoJ3Nob3dpbmdNb3JlJykgc2hvd2luZ01vcmU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBhZGRFdmlkZW5jZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSB2aWV3QWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGdvVG9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0dHlwZTogc3RyaW5nID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdGlzc3VlSWQ6IHN0cmluZyA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdFNlcnZpY2U6IFBvc3RzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHsgfTtcblxuXHRyZW1vdmVTdXBwb3J0KHN1cHBvcnRJZDogc3RyaW5nKSB7XG5cdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdXBwb3J0IHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9wb3N0U2VydmljZS5kZWxldGVQb3N0KCtzdXBwb3J0SWQsICt0aGlzLmlzc3VlSWQsIHRoaXMudHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzIERlbGV0ZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0dG9nZ2xlVmlld0FsbCgpe1xuXHRcdHRoaXMudmlld0FsbC5lbWl0KG51bGwpO1xuXHR9XG5cblx0dG9nZ2xlQWRkRXZpZGVuY2UoKSB7XG5cdFx0dGhpcy5hZGRFdmlkZW5jZS5lbWl0KG51bGwpO1xuXHR9XG5cdGdvdG9Ub3AoKSB7XG5cdFx0dGhpcy5nb1RvcC5lbWl0KG51bGwpO1xuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIoaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiAoaWQgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

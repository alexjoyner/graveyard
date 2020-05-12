System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/posts.service', '../../shared/users.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, posts_service_1, users_service_1, router_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MoreSupportComponent = (function () {
                function MoreSupportComponent(_postsService, _usersService, _routeParams) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.goTop = new core_1.EventEmitter();
                    this.type = this._routeParams.get('type');
                    this.issueId = this._routeParams.get('id');
                }
                ;
                MoreSupportComponent.prototype.removeSupport = function (supportId, supportIndex) {
                    var answer = confirm("Are you sure you want to delete this support point? This action can't be undone");
                    if (answer === true) {
                        this._postsService.deletePost(+supportId, +this.issueId, this.type)
                            .subscribe(function (success) {
                            console.log('Success Delete');
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
                ], MoreSupportComponent.prototype, "goTop", void 0);
                MoreSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-more-support',
                        templateUrl: 'templates/issue/more-support.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent],
                        styleUrls: ['styles/support.css', 'styles/point.css']
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService, router_1.RouteParams])
                ], MoreSupportComponent);
                return MoreSupportComponent;
            }());
            exports_1("MoreSupportComponent", MoreSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbW9yZS1zdXBwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUtDLDhCQUNTLGFBQTJCLEVBQzNCLGFBQTJCLEVBQzNCLFlBQXlCO29CQUZ6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQU54QixVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUN4RCxTQUFJLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdDLFlBQU8sR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFJUixDQUFDOztnQkFHdkMsNENBQWEsR0FBYixVQUFjLFNBQWlCLEVBQUUsWUFBb0I7b0JBQ3BELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO29CQUN4RyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7NkJBQ2pFLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUMvQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7O2dCQUNELHNDQUFPLEdBQVA7b0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsMkNBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxzQ0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTlCRDtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOztzRUFBQTtnQkFDbEI7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQztxQkFDeEQsQ0FBQzs7d0NBQUE7Z0JBaUNGLDJCQUFDO1lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtZQWhDRCx1REFnQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21vcmUtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1tb3JlLXN1cHBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL21vcmUtc3VwcG9ydC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3N1cHBvcnQuY3NzJywgJ3N0eWxlcy9wb2ludC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb3JlU3VwcG9ydENvbXBvbmVudCB7XG5cdEBJbnB1dCgnc3VwcG9ydHMnKSBzdXBwb3J0czogUG9zdFtdO1xuXHRAT3V0cHV0KCkgZ29Ub3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR0eXBlOiBzdHJpbmcgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0aXNzdWVJZDogc3RyaW5nID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHsgfTtcblxuXG5cdHJlbW92ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcsIHN1cHBvcnRJbmRleDogbnVtYmVyKSB7XG5cdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzdXBwb3J0IHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZGVsZXRlUG9zdCgrc3VwcG9ydElkLCArdGhpcy5pc3N1ZUlkLCB0aGlzLnR5cGUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzIERlbGV0ZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRnb3RvVG9wKCl7XG5cdFx0dGhpcy5nb1RvcC5lbWl0KG51bGwpO1xuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIoaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiAoaWQgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

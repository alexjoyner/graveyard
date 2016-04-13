System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component', '../../shared/auth.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1, auth_service_1, users_service_1;
    var HomeIssueListComponent;
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
            function (searchFilter_pipe_1_1) {
                searchFilter_pipe_1 = searchFilter_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_postsService, _router, _authService, _usersService) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this.cancel = new core_1.EventEmitter();
                    this.socket = io('/');
                    this.socket.emit('change room', { newroom: 'issues' });
                    this.socket.on('NewIssue', function (newIssue) {
                        console.log('NEW ISSUE: ', newIssue);
                        if (this.isOwner(newIssue.owner_user_id)) {
                            console.log('Returned: ', newIssue._id);
                            this._router.navigate(['Issue', { type: 'yes', id: newIssue._id }]);
                        }
                        else {
                            this.issues.unshift(newIssue);
                        }
                    }.bind(this));
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        this._postsService.getAllPosts()
                            .subscribe(function (data) {
                            console.log(data);
                            _this.issues = data;
                        }, function (err) { return console.log('err: ', err); });
                    }
                };
                HomeIssueListComponent.prototype.onCreate = function () {
                    var newIssue = new post_1.Post(this.searchText, 1);
                    if (this._authService.checkValid()) {
                        this._postsService.insertPost(newIssue)
                            .subscribe(function (data) {
                            console.log('Success Posting Issue');
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                HomeIssueListComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                HomeIssueListComponent.prototype.deleteIssue = function (issue, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        var answer = confirm("Are you sure you want to delete this issue? This action can't be undone");
                        if (answer === true) {
                            this._postsService.deletePost(issue._id)
                                .subscribe(function (success) { return _this.ngOnInit(); }, function (err) { return console.log('error: ', err); });
                        }
                    }
                };
                HomeIssueListComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                HomeIssueListComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                __decorate([
                    core_1.Input('searchText'), 
                    __metadata('design:type', String)
                ], HomeIssueListComponent.prototype, "searchText", void 0);
                __decorate([
                    core_1.Input('startQuestion'), 
                    __metadata('design:type', Boolean)
                ], HomeIssueListComponent.prototype, "startQuestion", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], HomeIssueListComponent.prototype, "cancel", void 0);
                HomeIssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-issue-list',
                        templateUrl: 'templates/home/home-issue-list.tpl.html',
                        styleUrls: ['styles/home-issue.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent],
                        providers: [posts_service_1.PostsService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router, auth_service_1.AuthService, users_service_1.UsersService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtDLGdDQUNTLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQjtvQkFIM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQU4xQixXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQU94RCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7b0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFTLFFBQVE7d0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxDQUFDO3dCQUFBLElBQUksQ0FBQSxDQUFDOzRCQUNJLElBQUksQ0FBQyxNQUFN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RUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQzt3QkFDekIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7OzBDQUFBO2dCQXFFRiw2QkFBQztZQUFELENBcEVBLEFBb0VDLElBQUE7WUFwRUQsMkRBb0VDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdCc7XG5pbXBvcnQge1Bvc3RzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtaXNzdWUtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWlzc3VlLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvaG9tZS1pc3N1ZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtQb3N0c1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVJc3N1ZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2VhcmNoVGV4dCcpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QElucHV0KCdzdGFydFF1ZXN0aW9uJykgc3RhcnRRdWVzdGlvbjogYm9vbGVhbjtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGlzc3VlczogUG9zdFtdO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe1xuXHRcdHRoaXMuc29ja2V0ID0gaW8oJy8nKTtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCdjaGFuZ2Ugcm9vbScsIHtuZXdyb29tOiAnaXNzdWVzJ30pXG5cdFx0dGhpcy5zb2NrZXQub24oJ05ld0lzc3VlJywgZnVuY3Rpb24obmV3SXNzdWUpe1xuXHRcdFx0Y29uc29sZS5sb2coJ05FVyBJU1NVRTogJywgbmV3SXNzdWUpO1xuXHRcdFx0aWYodGhpcy5pc093bmVyKG5ld0lzc3VlLm93bmVyX3VzZXJfaWQpKXtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1JldHVybmVkOiAnLCBuZXdJc3N1ZS5faWQpO1xuXHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydJc3N1ZScsIHsgdHlwZTogJ3llcycsIGlkOiBuZXdJc3N1ZS5faWQgfV0pO1xuXHRcdFx0fWVsc2V7XG4gICAgICAgICAgICBcdHRoaXMuaXNzdWVzLnVuc2hpZnQobmV3SXNzdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZ2V0QWxsUG9zdHMoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHR0aGlzLmlzc3VlcyA9IGRhdGE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdG9uQ3JlYXRlKCkge1xuXHRcdGxldCBuZXdJc3N1ZTogUG9zdCA9IG5ldyBQb3N0KHRoaXMuc2VhcmNoVGV4dCwgMSk7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmluc2VydFBvc3QobmV3SXNzdWUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2VzcyBQb3N0aW5nIElzc3VlJyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdG9uQ2FuY2VsKCl7XG5cdFx0dGhpcy5jYW5jZWwuZW1pdChudWxsKTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogUG9zdCwgZXZlbnQ6IE1vdXNlRXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXNzdWU/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZGVsZXRlUG9zdChpc3N1ZS5faWQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRzdWNjZXNzID0+IHRoaXMubmdPbkluaXQoKSxcblx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogc3RyaW5nKXtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

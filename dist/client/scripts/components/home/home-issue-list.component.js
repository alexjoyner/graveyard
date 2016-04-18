System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component', '../../shared/auth.service', '../../shared/users.service', '../../shared/tags.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1, auth_service_1, users_service_1, tags_service_1;
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
            },
            function (tags_service_1_1) {
                tags_service_1 = tags_service_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_postsService, _router, _authService, _usersService, _tagsService) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this._tagsService = _tagsService;
                    this.cancel = new core_1.EventEmitter();
                    this.acceptedTags = [];
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.acceptedTags = [];
                    this.socket = io('/');
                    console.log('SOCKETS ROOMS: ', this.socket.rooms);
                    this.socket.emit('change room', { newroom: 'issues' });
                    this.socket.on('NewIssue', function (newIssue) {
                        console.log('NEW ISSUE: ', newIssue);
                        if (this.isOwner(newIssue.owner_user_id)) {
                            console.log('Returned: ', newIssue._id);
                            this._router.navigate(['Issue', { type: 'yes', id: newIssue._id, lastRoom: 'issues' }]);
                        }
                        else {
                            this.issues.unshift(newIssue);
                        }
                    }.bind(this));
                    this.socket.on('DeletedIssue', function (postData) {
                        console.log('Delete: ', postData);
                        for (var i = this.issues.length - 1; i >= 0; i--) {
                            if (this.issues[i]._id === +postData._id) {
                                this.issues.splice(i, 1);
                            }
                        }
                    }.bind(this));
                    this.socket.on('disconnect', function () {
                        console.log('DISCONNECTED');
                    });
                    if (this._authService.checkValid()) {
                        this._postsService.getAllPosts()
                            .subscribe(function (data) {
                            console.log('ISSUES: ', data);
                            _this.issues = data;
                        });
                    }
                };
                HomeIssueListComponent.prototype.acceptTag = function (tag) {
                    console.log(this.acceptedTags);
                    if (this.acceptedTags.length < 5) {
                        if (this.acceptedTags.indexOf(tag) === -1) {
                            this.acceptedTags.push(tag);
                        }
                    }
                    else {
                        console.log('You have to many tag');
                    }
                };
                HomeIssueListComponent.prototype.createTag = function (tagName) {
                    var _this = this;
                    this._tagsService.postTag(tagName)
                        .subscribe(function (data) {
                        console.log('CREATED TAG: ', data);
                        _this.acceptedTags.push(data);
                    });
                };
                HomeIssueListComponent.prototype.removeTag = function (tag) {
                    console.log(this.acceptedTags);
                    var index = this.acceptedTags.indexOf(tag);
                    this.acceptedTags.splice(index, 1);
                };
                HomeIssueListComponent.prototype.searchTags = function (searchTerm) {
                    var _this = this;
                    console.log(searchTerm);
                    this._tagsService.getTags(searchTerm)
                        .subscribe(function (data) {
                        _this.returnedTags = data;
                    }, function (err) { return console.log('Error: ', err); });
                };
                HomeIssueListComponent.prototype.onCreate = function () {
                    var newIssue = new post_1.Post(this.searchText, 1);
                    var tags = [];
                    for (var i = this.acceptedTags.length - 1; i >= 0; i--) {
                        tags.push(this.acceptedTags[i]._id);
                    }
                    if (this._authService.checkValid()) {
                        this._postsService.insertPost({ 'post': newIssue, 'tags': tags })
                            .subscribe(function (data) {
                            console.log('Success Posting Issue');
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                HomeIssueListComponent.prototype.onCancel = function () {
                    this.acceptedTags = [];
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
                        providers: [posts_service_1.PostsService, tags_service_1.TagsService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router, auth_service_1.AuthService, users_service_1.UsersService, tags_service_1.TagsService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU9DLGdDQUNTLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQixFQUMzQixZQUF5QjtvQkFKekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFUeEIsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHakQsaUJBQVksR0FBRyxFQUFFLENBQUM7Z0JBTzFCLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFBQSxpQkFnQ0M7b0JBL0JBLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtvQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVMsUUFBUTt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsT0FBTyxD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Q0FBQztvQkFDRixDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsNkNBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx3Q0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQXJIRDtvQkFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOzswRUFBQTtnQkFDcEI7b0JBQUMsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7NkVBQUE7Z0JBQ3ZCO29CQUFDLGFBQU0sRUFBRTs7c0VBQUE7Z0JBWFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDcEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUNBQWlCLENBQUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRCQUFZLEVBQUUsMEJBQVcsQ0FBQzt3QkFDdEMsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7OzBDQUFBO2dCQXdIRiw2QkFBQztZQUFELENBdkhBLEFBdUhDLElBQUE7WUF2SEQsMkRBdUhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdCc7XG5pbXBvcnQge1Bvc3RzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3RzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQge1RhZ3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdGFncy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taG9tZS1pc3N1ZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtaXNzdWUtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9ob21lLWlzc3VlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Bvc3RzU2VydmljZSwgVGFnc1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVJc3N1ZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2VhcmNoVGV4dCcpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QElucHV0KCdzdGFydFF1ZXN0aW9uJykgc3RhcnRRdWVzdGlvbjogYm9vbGVhbjtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgaXNzdWVzOiBQb3N0W107XG5cdHByaXZhdGUgcmV0dXJuZWRUYWdzOiBbe2lkOiBudW1iZXIsIHRhZ19uYW1lOiBzdHJpbmd9XTtcblx0cHJpdmF0ZSBhY2NlcHRlZFRhZ3MgPSBbXTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3RhZ3NTZXJ2aWNlOiBUYWdzU2VydmljZSl7XG5cdH1cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHR0aGlzLmFjY2VwdGVkVGFncyA9IFtdO1xuXHRcdHRoaXMuc29ja2V0ID0gaW8oJy8nKTtcblx0XHRjb25zb2xlLmxvZygnU09DS0VUUyBST09NUzogJywgdGhpcy5zb2NrZXQucm9vbXMpO1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2NoYW5nZSByb29tJywgeyBuZXdyb29tOiAnaXNzdWVzJyB9KVxuXHRcdHRoaXMuc29ja2V0Lm9uKCdOZXdJc3N1ZScsIGZ1bmN0aW9uKG5ld0lzc3VlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTkVXIElTU1VFOiAnLCBuZXdJc3N1ZSk7XG5cdFx0XHRpZiAodGhpcy5pc093bmVyKG5ld0lzc3VlLm93bmVyX3VzZXJfaWQpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgbmV3SXNzdWUuX2lkKTtcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7IHR5cGU6ICd5ZXMnLCBpZDogbmV3SXNzdWUuX2lkLCBsYXN0Um9vbTogJ2lzc3Vlcyd9XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzc3Vlcy51bnNoaWZ0KG5ld0lzc3VlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnNvY2tldC5vbignRGVsZXRlZElzc3VlJywgZnVuY3Rpb24ocG9zdERhdGEpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdEZWxldGU6ICcsIHBvc3REYXRhKTtcblx0XHRcdGZvciAodmFyIGkgPSB0aGlzLmlzc3Vlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRpZiAodGhpcy5pc3N1ZXNbaV0uX2lkID09PSArcG9zdERhdGEuX2lkKSB7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHRjb25zb2xlLmxvZygnRElTQ09OTkVDVEVEJyk7XG4gICAgICAgIH0pO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3Bvc3RzU2VydmljZS5nZXRBbGxQb3N0cygpXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0lTU1VFUzogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZXM9ZGF0YVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0YWNjZXB0VGFnKHRhZzogeyBpZDogbnVtYmVyLCB0YWdfbmFtZTogc3RyaW5nIH0pIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmFjY2VwdGVkVGFncyk7XG5cdFx0aWYgKHRoaXMuYWNjZXB0ZWRUYWdzLmxlbmd0aCAgPCA1KSB7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRlZFRhZ3MuaW5kZXhPZih0YWcpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmFjY2VwdGVkVGFncy5wdXNoKHRhZyk7XG5cdFx0XHR9XG5cdFx0fWVsc2V7XG5cdFx0XHRjb25zb2xlLmxvZygnWW91IGhhdmUgdG8gbWFueSB0YWcnKTtcblx0XHR9XG5cdH1cblx0Y3JlYXRlVGFnKHRhZ05hbWU6IHN0cmluZyl7XG5cdFx0dGhpcy5fdGFnc1NlcnZpY2UucG9zdFRhZyh0YWdOYW1lKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0NSRUFURUQgVEFHOiAnLCBkYXRhKTtcblx0XHRcdFx0XHR0aGlzLmFjY2VwdGVkVGFncy5wdXNoKGRhdGEpO1xuXHRcdFx0XHR9KVxuXHR9XG5cdHJlbW92ZVRhZyh0YWc6IHsgaWQ6IG51bWJlciwgdGFnX25hbWU6IHN0cmluZyB9KSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5hY2NlcHRlZFRhZ3MpO1xuXHRcdGxldCBpbmRleCA9IHRoaXMuYWNjZXB0ZWRUYWdzLmluZGV4T2YodGFnKTtcblx0XHR0aGlzLmFjY2VwdGVkVGFncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cdHNlYXJjaFRhZ3Moc2VhcmNoVGVybTogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hUZXJtKTtcblx0XHR0aGlzLl90YWdzU2VydmljZS5nZXRUYWdzKHNlYXJjaFRlcm0pXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHR0aGlzLnJldHVybmVkVGFncyA9IGRhdGE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25DcmVhdGUoKSB7XG5cdFx0bGV0IG5ld0lzc3VlOiBQb3N0ID0gbmV3IFBvc3QodGhpcy5zZWFyY2hUZXh0LCAxKTtcblx0XHRsZXQgdGFnczogW10gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gdGhpcy5hY2NlcHRlZFRhZ3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHRhZ3MucHVzaCh0aGlzLmFjY2VwdGVkVGFnc1tpXS5faWQpXG5cdFx0fVxuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3Bvc3RzU2VydmljZS5pbnNlcnRQb3N0KHsncG9zdCc6IG5ld0lzc3VlLCAndGFncyc6IHRhZ3N9KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3MgUG9zdGluZyBJc3N1ZScpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdHRoaXMuYWNjZXB0ZWRUYWdzID0gW107XG5cdFx0dGhpcy5jYW5jZWwuZW1pdChudWxsKTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogUG9zdCwgZXZlbnQ6IE1vdXNlRXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXNzdWU/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZGVsZXRlUG9zdChpc3N1ZS5faWQpXG5cdFx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRzdWNjZXNzID0+IHRoaXMubmdPbkluaXQoKSxcblx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogc3RyaW5nKXtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

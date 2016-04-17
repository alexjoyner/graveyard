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
                            .subscribe(function (data) { return _this.issues = data; });
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
                    if (this._authService.checkValid()) {
                        this._postsService.insertPost(newIssue)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU9DLGdDQUNTLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQixFQUMzQixZQUF5QjtvQkFKekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFUeEIsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHakQsaUJBQVksR0FBRyxFQUFFLENBQUM7Z0JBTzFCLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFBQSxpQkE2QkM7b0JBNUJBLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtvQkFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVMsUUFBUTt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDMUMsT0FBTyxD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OzswQ0FBQTtnQkF5R0YsNkJBQUM7WUFBRCxDQXhHQSxBQXdHQyxJQUFBO1lBeEdELDJEQXdHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWdzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3RhZ3Muc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtaXNzdWUtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWlzc3VlLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvaG9tZS1pc3N1ZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtQb3N0c1NlcnZpY2UsIFRhZ3NTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzICBIb21lSXNzdWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3NlYXJjaFRleHQnKSBzZWFyY2hUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgnc3RhcnRRdWVzdGlvbicpIHN0YXJ0UXVlc3Rpb246IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwcml2YXRlIGlzc3VlczogUG9zdFtdO1xuXHRwcml2YXRlIHJldHVybmVkVGFnczogW3tpZDogbnVtYmVyLCB0YWdfbmFtZTogc3RyaW5nfV07XG5cdHByaXZhdGUgYWNjZXB0ZWRUYWdzID0gW107XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcblx0XHRwcml2YXRlIF90YWdzU2VydmljZTogVGFnc1NlcnZpY2Upe1xuXHR9XG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0dGhpcy5hY2NlcHRlZFRhZ3MgPSBbXTtcblx0XHR0aGlzLnNvY2tldCA9IGlvKCcvJyk7XG5cdFx0Y29uc29sZS5sb2coJ1NPQ0tFVFMgUk9PTVM6ICcsIHRoaXMuc29ja2V0LnJvb21zKTtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCdjaGFuZ2Ugcm9vbScsIHsgbmV3cm9vbTogJ2lzc3VlcycgfSlcblx0XHR0aGlzLnNvY2tldC5vbignTmV3SXNzdWUnLCBmdW5jdGlvbihuZXdJc3N1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ05FVyBJU1NVRTogJywgbmV3SXNzdWUpO1xuXHRcdFx0aWYgKHRoaXMuaXNPd25lcihuZXdJc3N1ZS5vd25lcl91c2VyX2lkKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnUmV0dXJuZWQ6ICcsIG5ld0lzc3VlLl9pZCk7XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0lzc3VlJywgeyB0eXBlOiAneWVzJywgaWQ6IG5ld0lzc3VlLl9pZCwgbGFzdFJvb206ICdpc3N1ZXMnfV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc3N1ZXMudW5zaGlmdChuZXdJc3N1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5zb2NrZXQub24oJ0RlbGV0ZWRJc3N1ZScsIGZ1bmN0aW9uKHBvc3REYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGVsZXRlOiAnLCBwb3N0RGF0YSk7XG5cdFx0XHRmb3IgKHZhciBpID0gdGhpcy5pc3N1ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNzdWVzW2ldLl9pZCA9PT0gK3Bvc3REYXRhLl9pZCkge1xuXHRcdFx0XHRcdHRoaXMuaXNzdWVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ0RJU0NPTk5FQ1RFRCcpO1xuICAgICAgICB9KTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZ2V0QWxsUG9zdHMoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5pc3N1ZXM9ZGF0YSk7XG5cdFx0fVxuXHR9XG5cdGFjY2VwdFRhZyh0YWc6IHsgaWQ6IG51bWJlciwgdGFnX25hbWU6IHN0cmluZyB9KSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5hY2NlcHRlZFRhZ3MpO1xuXHRcdGlmICh0aGlzLmFjY2VwdGVkVGFncy5sZW5ndGggIDwgNSkge1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0ZWRUYWdzLmluZGV4T2YodGFnKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5hY2NlcHRlZFRhZ3MucHVzaCh0YWcpO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Y29uc29sZS5sb2coJ1lvdSBoYXZlIHRvIG1hbnkgdGFnJyk7XG5cdFx0fVxuXHR9XG5cdHJlbW92ZVRhZyh0YWc6IHsgaWQ6IG51bWJlciwgdGFnX25hbWU6IHN0cmluZyB9KSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5hY2NlcHRlZFRhZ3MpO1xuXHRcdGxldCBpbmRleCA9IHRoaXMuYWNjZXB0ZWRUYWdzLmluZGV4T2YodGFnKTtcblx0XHR0aGlzLmFjY2VwdGVkVGFncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cdHNlYXJjaFRhZ3Moc2VhcmNoVGVybTogc3RyaW5nKXtcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hUZXJtKTtcblx0XHR0aGlzLl90YWdzU2VydmljZS5nZXRUYWdzKHNlYXJjaFRlcm0pXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHR0aGlzLnJldHVybmVkVGFncyA9IGRhdGE7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25DcmVhdGUoKSB7XG5cdFx0bGV0IG5ld0lzc3VlOiBQb3N0ID0gbmV3IFBvc3QodGhpcy5zZWFyY2hUZXh0LCAxKTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuaW5zZXJ0UG9zdChuZXdJc3N1ZSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzIFBvc3RpbmcgSXNzdWUnKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHR0aGlzLmFjY2VwdGVkVGFncyA9IFtdO1xuXHRcdHRoaXMuY2FuY2VsLmVtaXQobnVsbCk7XG5cdH1cblx0ZGVsZXRlSXNzdWUoaXNzdWU6IFBvc3QsIGV2ZW50OiBNb3VzZUV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGlzc3VlPyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmRlbGV0ZVBvc3QoaXNzdWUuX2lkKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0c3VjY2VzcyA9PiB0aGlzLm5nT25Jbml0KCksXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIoaWQ6IHN0cmluZyl7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

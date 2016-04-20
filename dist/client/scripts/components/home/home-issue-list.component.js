System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component', '../../shared/auth.service', '../../shared/users.service', '../../shared/tags.service', '../../shared/globalHandler.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1, auth_service_1, users_service_1, tags_service_1, globalHandler_service_1;
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
            },
            function (globalHandler_service_1_1) {
                globalHandler_service_1 = globalHandler_service_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_postsService, _router, _authService, _usersService, _tagsService, _globalHandler) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this._tagsService = _tagsService;
                    this._globalHandler = _globalHandler;
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
                        this._globalHandler.emitStatusMessage({
                            status: 999,
                            body: 'Refresh to receive updates'
                        });
                    }.bind(this));
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
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router, auth_service_1.AuthService, users_service_1.UsersService, tags_service_1.TagsService, globalHandler_service_1.GlobalHandlerService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQU9DLGdDQUNTLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQixFQUMzQixZQUF5QixFQUN6QixjQUFvQztvQkFMcEMsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO29CQVZuQyxXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUdqRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztnQkFRMUIsQ0FBQztnQkFDRCx5Q0FBUSxHQUFSO29CQUFBLGlCQW9DQztvQkFuQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFBO29CQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBUyxRQUFRO3dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFR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QUcsQ0FBQztpQ0FDdEMsU0FBUyxDQUNWLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQzt3QkFDSixDQUFDO29CQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCw2Q0FBWSxHQUFaLFVBQWEsTUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELHdDQUFPLEdBQVAsVUFBUSxFQUFVO29CQUNqQixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBMUhEO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OzBFQUFBO2dCQUNwQjtvQkFBQyxZQUFLLENBQUMsZUFBZSxDQUFDOzs2RUFBQTtnQkFDdkI7b0JBQUMsYUFBTSxFQUFFOztzRUFBQTtnQkFYVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSwwQkFBVyxDQUFDO3dCQUN0QyxLQUFLLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDNUIsQ0FBQzs7MENBQUE7Z0JBNkhGLDZCQUFDO1lBQUQsQ0E1SEEsQUE0SEMsSUFBQTtZQTVIRCwyREE0SEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS1pc3N1ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7VGFnc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC90YWdzLnNlcnZpY2UnO1xuaW1wb3J0IHtHbG9iYWxIYW5kbGVyU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2dsb2JhbEhhbmRsZXIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtaXNzdWUtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWlzc3VlLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvaG9tZS1pc3N1ZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtQb3N0c1NlcnZpY2UsIFRhZ3NTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzICBIb21lSXNzdWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3NlYXJjaFRleHQnKSBzZWFyY2hUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgnc3RhcnRRdWVzdGlvbicpIHN0YXJ0UXVlc3Rpb246IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwcml2YXRlIGlzc3VlczogUG9zdFtdO1xuXHRwcml2YXRlIHJldHVybmVkVGFnczogW3tpZDogbnVtYmVyLCB0YWdfbmFtZTogc3RyaW5nfV07XG5cdHByaXZhdGUgYWNjZXB0ZWRUYWdzID0gW107XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcblx0XHRwcml2YXRlIF90YWdzU2VydmljZTogVGFnc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfZ2xvYmFsSGFuZGxlcjogR2xvYmFsSGFuZGxlclNlcnZpY2Upe1xuXHR9XG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0dGhpcy5hY2NlcHRlZFRhZ3MgPSBbXTtcblx0XHR0aGlzLnNvY2tldCA9IGlvKCcvJyk7XG5cdFx0Y29uc29sZS5sb2coJ1NPQ0tFVFMgUk9PTVM6ICcsIHRoaXMuc29ja2V0LnJvb21zKTtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCdjaGFuZ2Ugcm9vbScsIHsgbmV3cm9vbTogJ2lzc3VlcycgfSlcblx0XHR0aGlzLnNvY2tldC5vbignTmV3SXNzdWUnLCBmdW5jdGlvbihuZXdJc3N1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ05FVyBJU1NVRTogJywgbmV3SXNzdWUpO1xuXHRcdFx0aWYgKHRoaXMuaXNPd25lcihuZXdJc3N1ZS5vd25lcl91c2VyX2lkKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnUmV0dXJuZWQ6ICcsIG5ld0lzc3VlLl9pZCk7XG5cdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0lzc3VlJywgeyB0eXBlOiAneWVzJywgaWQ6IG5ld0lzc3VlLl9pZCwgbGFzdFJvb206ICdpc3N1ZXMnfV0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc3N1ZXMudW5zaGlmdChuZXdJc3N1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5zb2NrZXQub24oJ0RlbGV0ZWRJc3N1ZScsIGZ1bmN0aW9uKHBvc3REYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGVsZXRlOiAnLCBwb3N0RGF0YSk7XG5cdFx0XHRmb3IgKHZhciBpID0gdGhpcy5pc3N1ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNzdWVzW2ldLl9pZCA9PT0gK3Bvc3REYXRhLl9pZCkge1xuXHRcdFx0XHRcdHRoaXMuaXNzdWVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIFx0Y29uc29sZS5sb2coJ0RJU0NPTk5FQ1RFRCcsICk7XG4gICAgICAgIFx0dGhpcy5fZ2xvYmFsSGFuZGxlci5lbWl0U3RhdHVzTWVzc2FnZSh7XG4gICAgICAgIFx0XHRzdGF0dXM6IDk5OSwgXG4gICAgICAgIFx0XHRib2R5OiAnUmVmcmVzaCB0byByZWNlaXZlIHVwZGF0ZXMnXG4gICAgICAgIFx0fSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmdldEFsbFBvc3RzKClcblx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnSVNTVUVTOiAnLCBkYXRhKTtcblx0XHRcdFx0XHR0aGlzLmlzc3Vlcz1kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRhY2NlcHRUYWcodGFnOiB7IGlkOiBudW1iZXIsIHRhZ19uYW1lOiBzdHJpbmcgfSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuYWNjZXB0ZWRUYWdzKTtcblx0XHRpZiAodGhpcy5hY2NlcHRlZFRhZ3MubGVuZ3RoICA8IDUpIHtcblx0XHRcdGlmICh0aGlzLmFjY2VwdGVkVGFncy5pbmRleE9mKHRhZykgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMuYWNjZXB0ZWRUYWdzLnB1c2godGFnKTtcblx0XHRcdH1cblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUubG9nKCdZb3UgaGF2ZSB0byBtYW55IHRhZycpO1xuXHRcdH1cblx0fVxuXHRjcmVhdGVUYWcodGFnTmFtZTogc3RyaW5nKXtcblx0XHR0aGlzLl90YWdzU2VydmljZS5wb3N0VGFnKHRhZ05hbWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ1JFQVRFRCBUQUc6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuYWNjZXB0ZWRUYWdzLnB1c2goZGF0YSk7XG5cdFx0XHRcdH0pXG5cdH1cblx0cmVtb3ZlVGFnKHRhZzogeyBpZDogbnVtYmVyLCB0YWdfbmFtZTogc3RyaW5nIH0pIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmFjY2VwdGVkVGFncyk7XG5cdFx0bGV0IGluZGV4ID0gdGhpcy5hY2NlcHRlZFRhZ3MuaW5kZXhPZih0YWcpO1xuXHRcdHRoaXMuYWNjZXB0ZWRUYWdzLnNwbGljZShpbmRleCwgMSk7XG5cdH1cblx0c2VhcmNoVGFncyhzZWFyY2hUZXJtOiBzdHJpbmcpe1xuXHRcdGNvbnNvbGUubG9nKHNlYXJjaFRlcm0pO1xuXHRcdHRoaXMuX3RhZ3NTZXJ2aWNlLmdldFRhZ3Moc2VhcmNoVGVybSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmV0dXJuZWRUYWdzID0gZGF0YTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRvbkNyZWF0ZSgpIHtcblx0XHRsZXQgbmV3SXNzdWU6IFBvc3QgPSBuZXcgUG9zdCh0aGlzLnNlYXJjaFRleHQsIDEpO1xuXHRcdGxldCB0YWdzOiBbXSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSB0aGlzLmFjY2VwdGVkVGFncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dGFncy5wdXNoKHRoaXMuYWNjZXB0ZWRUYWdzW2ldLl9pZClcblx0XHR9XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmluc2VydFBvc3Qoeydwb3N0JzogbmV3SXNzdWUsICd0YWdzJzogdGFnc30pXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2VzcyBQb3N0aW5nIElzc3VlJyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdG9uQ2FuY2VsKCl7XG5cdFx0dGhpcy5hY2NlcHRlZFRhZ3MgPSBbXTtcblx0XHR0aGlzLmNhbmNlbC5lbWl0KG51bGwpO1xuXHR9XG5cdGRlbGV0ZUlzc3VlKGlzc3VlOiBQb3N0LCBldmVudDogTW91c2VFdmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpc3N1ZT8gVGhpcyBhY3Rpb24gY2FuJ3QgYmUgdW5kb25lYCk7XG5cdFx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuX3Bvc3RzU2VydmljZS5kZWxldGVQb3N0KGlzc3VlLl9pZClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdHN1Y2Nlc3MgPT4gdGhpcy5uZ09uSW5pdCgpLFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKGlkOiBzdHJpbmcpe1xuXHRcdHJldHVybiAoaWQgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

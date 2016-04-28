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
    var HomeQuestionListComponent;
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
            HomeQuestionListComponent = (function () {
                function HomeQuestionListComponent(_postsService, _router, _authService, _usersService, _tagsService, _globalHandler) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this._tagsService = _tagsService;
                    this._globalHandler = _globalHandler;
                    this.cancel = new core_1.EventEmitter();
                    this.acceptedTags = [];
                }
                HomeQuestionListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.acceptedTags = [];
                    this.socket = io('/');
                    console.log('SOCKETS ROOMS: ', this.socket.rooms);
                    this.socket.emit('change room', { newroom: 'questions' });
                    this.socket.on('NewQuestion', function (newQuestion) {
                        console.log('NEW ISSUE: ', newQuestion);
                        if (this.isOwner(newQuestion.owner_user_id)) {
                            console.log('Returned: ', newQuestion._id);
                            this._router.navigate(['Question', { type: 'yes', id: newQuestion._id, lastRoom: 'questions' }]);
                        }
                        else {
                            this.questions.unshift(newQuestion);
                        }
                    }.bind(this));
                    this.socket.on('DeletedQuestion', function (postData) {
                        console.log('Delete: ', postData);
                        for (var i = this.questions.length - 1; i >= 0; i--) {
                            if (this.questions[i]._id === +postData._id) {
                                this.questions.splice(i, 1);
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
                            _this.questions = data;
                        });
                    }
                };
                HomeQuestionListComponent.prototype.acceptTag = function (tag) {
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
                HomeQuestionListComponent.prototype.createTag = function (tagName) {
                    var _this = this;
                    this._tagsService.postTag(tagName)
                        .subscribe(function (data) {
                        console.log('CREATED TAG: ', data);
                        _this.acceptedTags.push(data);
                    });
                };
                HomeQuestionListComponent.prototype.removeTag = function (tag) {
                    console.log(this.acceptedTags);
                    var index = this.acceptedTags.indexOf(tag);
                    this.acceptedTags.splice(index, 1);
                };
                HomeQuestionListComponent.prototype.searchTags = function (searchTerm) {
                    var _this = this;
                    this._tagsService.getTags(searchTerm)
                        .subscribe(function (data) {
                        _this.returnedTags = data;
                    }, function (err) { return console.log('Error: ', err); });
                };
                HomeQuestionListComponent.prototype.onCreate = function () {
                    var newQuestion = new post_1.Post(this.searchText, 1);
                    var tags = [];
                    for (var i = this.acceptedTags.length - 1; i >= 0; i--) {
                        tags.push(this.acceptedTags[i]._id);
                    }
                    if (this._authService.checkValid()) {
                        this._postsService.insertPost({ 'post': newQuestion, 'tags': tags })
                            .subscribe(function (data) {
                            console.log('Success Posting Question');
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                HomeQuestionListComponent.prototype.onCancel = function () {
                    this.acceptedTags = [];
                    this.cancel.emit(null);
                };
                HomeQuestionListComponent.prototype.deleteQuestion = function (question, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        var answer = confirm("Are you sure you want to delete this question? This action can't be undone");
                        if (answer === true) {
                            this._postsService.deletePost(question._id)
                                .subscribe(function (success) { return _this.ngOnInit(); }, function (err) { return console.log('error: ', err); });
                        }
                    }
                };
                HomeQuestionListComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                HomeQuestionListComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                __decorate([
                    core_1.Input('searchText'), 
                    __metadata('design:type', String)
                ], HomeQuestionListComponent.prototype, "searchText", void 0);
                __decorate([
                    core_1.Input('startQuestion'), 
                    __metadata('design:type', Boolean)
                ], HomeQuestionListComponent.prototype, "startQuestion", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], HomeQuestionListComponent.prototype, "cancel", void 0);
                HomeQuestionListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-question-list',
                        templateUrl: 'templates/home/home-question-list.tpl.html',
                        styleUrls: ['styles/home-question.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent],
                        providers: [posts_service_1.PostsService, tags_service_1.TagsService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router, auth_service_1.AuthService, users_service_1.UsersService, tags_service_1.TagsService, globalHandler_service_1.GlobalHandlerService])
                ], HomeQuestionListComponent);
                return HomeQuestionListComponent;
            }());
            exports_1("HomeQuestionListComponent", HomeQuestionListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQU9DLG1DQUNTLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQixFQUMzQixZQUF5QixFQUN6QixjQUFvQztvQkFMcEMsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO29CQVZuQyxXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUdqRCxpQkFBWSxHQUFHLEVBQUUsQ0FBQztnQkFRMUIsQ0FBQztnQkFDRCw0Q0FBUSxHQUFSO29CQUFBLGlCQW9DQztvQkFuQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO29CQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBUyxXQUFXO3dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFX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T0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUMxQixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNqQyxDQUFDO3dCQUNKLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO2dCQUNELGdEQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsMkNBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkF6SEQ7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7NkVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxlQUFlLENBQUM7O2dGQUFBO2dCQUN2QjtvQkFBQyxhQUFNLEVBQUU7O3lFQUFBO2dCQVhWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsV0FBVyxFQUFFLDRDQUE0Qzt3QkFDekQsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVDQUFpQixDQUFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDBCQUFXLENBQUM7d0JBQ3RDLEtBQUssRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUM1QixDQUFDOzs2Q0FBQTtnQkE0SEYsZ0NBQUM7WUFBRCxDQTNIQSxBQTJIQyxJQUFBO1lBM0hELGlFQTJIQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWdzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3RhZ3Muc2VydmljZSc7XG5pbXBvcnQge0dsb2JhbEhhbmRsZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvZ2xvYmFsSGFuZGxlci5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taG9tZS1xdWVzdGlvbi1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtcXVlc3Rpb24tbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9ob21lLXF1ZXN0aW9uLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Bvc3RzU2VydmljZSwgVGFnc1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVRdWVzdGlvbkxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2VhcmNoVGV4dCcpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QElucHV0KCdzdGFydFF1ZXN0aW9uJykgc3RhcnRRdWVzdGlvbjogYm9vbGVhbjtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHByaXZhdGUgcXVlc3Rpb25zOiBQb3N0W107XG5cdHByaXZhdGUgcmV0dXJuZWRUYWdzOiBbe2lkOiBudW1iZXIsIHRhZ19uYW1lOiBzdHJpbmd9XTtcblx0cHJpdmF0ZSBhY2NlcHRlZFRhZ3MgPSBbXTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3RhZ3NTZXJ2aWNlOiBUYWdzU2VydmljZSxcblx0XHRwcml2YXRlIF9nbG9iYWxIYW5kbGVyOiBHbG9iYWxIYW5kbGVyU2VydmljZSl7XG5cdH1cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHR0aGlzLmFjY2VwdGVkVGFncyA9IFtdO1xuXHRcdHRoaXMuc29ja2V0ID0gaW8oJy8nKTtcblx0XHRjb25zb2xlLmxvZygnU09DS0VUUyBST09NUzogJywgdGhpcy5zb2NrZXQucm9vbXMpO1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2NoYW5nZSByb29tJywgeyBuZXdyb29tOiAncXVlc3Rpb25zJyB9KVxuXHRcdHRoaXMuc29ja2V0Lm9uKCdOZXdRdWVzdGlvbicsIGZ1bmN0aW9uKG5ld1F1ZXN0aW9uKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnTkVXIElTU1VFOiAnLCBuZXdRdWVzdGlvbik7XG5cdFx0XHRpZiAodGhpcy5pc093bmVyKG5ld1F1ZXN0aW9uLm93bmVyX3VzZXJfaWQpKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgbmV3UXVlc3Rpb24uX2lkKTtcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnUXVlc3Rpb24nLCB7IHR5cGU6ICd5ZXMnLCBpZDogbmV3UXVlc3Rpb24uX2lkLCBsYXN0Um9vbTogJ3F1ZXN0aW9ucyd9XSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnF1ZXN0aW9ucy51bnNoaWZ0KG5ld1F1ZXN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLnNvY2tldC5vbignRGVsZXRlZFF1ZXN0aW9uJywgZnVuY3Rpb24ocG9zdERhdGEpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdEZWxldGU6ICcsIHBvc3REYXRhKTtcblx0XHRcdGZvciAodmFyIGkgPSB0aGlzLnF1ZXN0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRpZiAodGhpcy5xdWVzdGlvbnNbaV0uX2lkID09PSArcG9zdERhdGEuX2lkKSB7XG5cdFx0XHRcdFx0dGhpcy5xdWVzdGlvbnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHRjb25zb2xlLmxvZygnRElTQ09OTkVDVEVEJywgKTtcbiAgICAgICAgXHR0aGlzLl9nbG9iYWxIYW5kbGVyLmVtaXRTdGF0dXNNZXNzYWdlKHtcbiAgICAgICAgXHRcdHN0YXR1czogOTk5LCBcbiAgICAgICAgXHRcdGJvZHk6ICdSZWZyZXNoIHRvIHJlY2VpdmUgdXBkYXRlcydcbiAgICAgICAgXHR9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZ2V0QWxsUG9zdHMoKVxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdJU1NVRVM6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMucXVlc3Rpb25zPWRhdGFcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdGFjY2VwdFRhZyh0YWc6IHsgaWQ6IG51bWJlciwgdGFnX25hbWU6IHN0cmluZyB9KSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5hY2NlcHRlZFRhZ3MpO1xuXHRcdGlmICh0aGlzLmFjY2VwdGVkVGFncy5sZW5ndGggIDwgNSkge1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0ZWRUYWdzLmluZGV4T2YodGFnKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5hY2NlcHRlZFRhZ3MucHVzaCh0YWcpO1xuXHRcdFx0fVxuXHRcdH1lbHNle1xuXHRcdFx0Y29uc29sZS5sb2coJ1lvdSBoYXZlIHRvIG1hbnkgdGFnJyk7XG5cdFx0fVxuXHR9XG5cdGNyZWF0ZVRhZyh0YWdOYW1lOiBzdHJpbmcpe1xuXHRcdHRoaXMuX3RhZ3NTZXJ2aWNlLnBvc3RUYWcodGFnTmFtZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdDUkVBVEVEIFRBRzogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5hY2NlcHRlZFRhZ3MucHVzaChkYXRhKTtcblx0XHRcdFx0fSlcblx0fVxuXHRyZW1vdmVUYWcodGFnOiB7IGlkOiBudW1iZXIsIHRhZ19uYW1lOiBzdHJpbmcgfSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuYWNjZXB0ZWRUYWdzKTtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmFjY2VwdGVkVGFncy5pbmRleE9mKHRhZyk7XG5cdFx0dGhpcy5hY2NlcHRlZFRhZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0fVxuXHRzZWFyY2hUYWdzKHNlYXJjaFRlcm06IHN0cmluZyl7XG5cdFx0dGhpcy5fdGFnc1NlcnZpY2UuZ2V0VGFncyhzZWFyY2hUZXJtKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXR1cm5lZFRhZ3MgPSBkYXRhO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uQ3JlYXRlKCkge1xuXHRcdGxldCBuZXdRdWVzdGlvbjogUG9zdCA9IG5ldyBQb3N0KHRoaXMuc2VhcmNoVGV4dCwgMSk7XG5cdFx0bGV0IHRhZ3M6IFtdID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IHRoaXMuYWNjZXB0ZWRUYWdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR0YWdzLnB1c2godGhpcy5hY2NlcHRlZFRhZ3NbaV0uX2lkKVxuXHRcdH1cblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuaW5zZXJ0UG9zdCh7J3Bvc3QnOiBuZXdRdWVzdGlvbiwgJ3RhZ3MnOiB0YWdzfSlcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzIFBvc3RpbmcgUXVlc3Rpb24nKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHR0aGlzLmFjY2VwdGVkVGFncyA9IFtdO1xuXHRcdHRoaXMuY2FuY2VsLmVtaXQobnVsbCk7XG5cdH1cblx0ZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb246IFBvc3QsIGV2ZW50OiBNb3VzZUV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHF1ZXN0aW9uPyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmRlbGV0ZVBvc3QocXVlc3Rpb24uX2lkKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0c3VjY2VzcyA9PiB0aGlzLm5nT25Jbml0KCksXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIoaWQ6IHN0cmluZyl7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

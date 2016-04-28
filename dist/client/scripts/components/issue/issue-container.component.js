System.register(['angular2/core', 'angular2/router', '../../shared/post', '../../shared/posts.service', '../../shared/vote-cell.component', './question-form.component', '../../shared/users.service', '../../shared/auth.service', './points-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, post_1, posts_service_1, router_2, vote_cell_component_1, question_form_component_1, users_service_1, auth_service_1, points_list_component_1;
    var QuestionContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (question_form_component_1_1) {
                question_form_component_1 = question_form_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (points_list_component_1_1) {
                points_list_component_1 = points_list_component_1_1;
            }],
        execute: function() {
            QuestionContainerComponent = (function () {
                function QuestionContainerComponent(_routeParams, _postsService, _usersService, _authService) {
                    this._routeParams = _routeParams;
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this._authService = _authService;
                    this.question = new post_1.Post('', 1);
                }
                QuestionContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        this._questionId = this._routeParams.get('id');
                        this._type = this._routeParams.get('type');
                        this._postsService.getPost(this._questionId, this._type).
                            subscribe(function (data) {
                            _this.question = data;
                            console.log('Saved question: ', _this.question);
                            console.log(_this.question.title);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                QuestionContainerComponent.prototype.deleteQuestion = function (questionId) {
                    if (this._authService.checkValid()) {
                        var answer = confirm("Are you sure you want to delete this question? This action can't be undone");
                        if (answer === true) {
                            this._postsService.deletePost(questionId)
                                .subscribe(function (success) { return console.log('Success'); }, function (err) { return console.log('error: ', err); });
                        }
                    }
                };
                QuestionContainerComponent.prototype.editQuestion = function (question, event, cancelFlag) {
                    event.stopPropagation();
                    var answer;
                    if (cancelFlag) {
                        answer = confirm('Canceling will discard changes. Continue?');
                    }
                    if (answer || !cancelFlag) {
                        this.question['editQuestion'] =
                            (this.question['editQuestion']) ? !this.question['editQuestion'] : true;
                    }
                };
                QuestionContainerComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                QuestionContainerComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                QuestionContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/question/question-container.tpl.html',
                        providers: [posts_service_1.PostsService],
                        directives: [router_2.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent, question_form_component_1.NewQuestionForm, points_list_component_1.PointsListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, posts_service_1.PostsService, users_service_1.UsersService, auth_service_1.AuthService])
                ], QuestionContainerComponent);
                return QuestionContainerComponent;
            }());
            exports_1("QuestionContainerComponent", QuestionContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBSUMsb0NBQ1MsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsYUFBMkIsRUFDM0IsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVBsQyxhQUFRLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQVFqQyxDQUFDO2dCQUNELDZDQUFRLEdBQVI7b0JBQUEsaUJBY0M7b0JBYkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFDdkQsU0FBUyxDQUNULFVBQUEsSUFBSTs0QkFDSCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQy9CLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELG1EQUFjLEdBQWQsVUFBZSxVQUFrQjtvQkFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO3dCQUNuRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO2lDQUN2QyxTQUFTLENBQ1QsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUF0QixDQUFzQixFQUNqQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO3dCQUNKLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO2dCQUNELGlEQUFZLEdBQVosVUFBYSxRQUFjLEVBQUUsS0FBaUIsRUFBRSxVQUFtQjtvQkFDbEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLE1BQWUsQ0FBQztvQkFDcEIsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQzt3QkFDZCxNQUFNLEdBQUcsT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7b0JBQy9ELENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7NEJBQzVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFFLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCxpREFBWSxHQUFaLFVBQWEsTUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELDRDQUFPLEdBQVAsVUFBUSxFQUFVO29CQUNqQixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBMURGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLGdEQUFnRDt3QkFDN0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQzt3QkFDekIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUNBQWlCLEVBQUUseUNBQWUsRUFBRSwyQ0FBbUIsQ0FBQztxQkFDM0YsQ0FBQzs7OENBQUE7Z0JBdURGLGlDQUFDO1lBQUQsQ0F0REEsQUFzREMsSUFBQTtZQXRERCxtRUFzREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld1F1ZXN0aW9uRm9ybX0gZnJvbSAnLi9xdWVzdGlvbi1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1BvaW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcG9pbnRzLWxpc3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7Ly8gUm91dGUgbm8gc2VsZWN0b3JcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9xdWVzdGlvbi9xdWVzdGlvbi1jb250YWluZXIudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1Bvc3RzU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBWb3RlQ2VsbENvbXBvbmVudCwgTmV3UXVlc3Rpb25Gb3JtLCBQb2ludHNMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0cXVlc3Rpb246IFBvc3QgPSBuZXcgUG9zdCgnJywgMSk7XG5cdHByaXZhdGUgX3F1ZXN0aW9uSWQ6IHN0cmluZztcblx0cHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXtcblx0fVxuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX3F1ZXN0aW9uSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0XHR0aGlzLl90eXBlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdFx0XHR0aGlzLl9wb3N0c1NlcnZpY2UuZ2V0UG9zdCh0aGlzLl9xdWVzdGlvbklkLCB0aGlzLl90eXBlKS5cblx0XHRcdFx0c3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHR0aGlzLnF1ZXN0aW9uID0gZGF0YTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU2F2ZWQgcXVlc3Rpb246ICcsIHRoaXMucXVlc3Rpb24pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucXVlc3Rpb24udGl0bGUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRkZWxldGVRdWVzdGlvbihxdWVzdGlvbklkOiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHF1ZXN0aW9uPyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmRlbGV0ZVBvc3QocXVlc3Rpb25JZClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdFx0c3VjY2VzcyA9PiBjb25zb2xlLmxvZygnU3VjY2VzcycpLFxuXHRcdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGVkaXRRdWVzdGlvbihxdWVzdGlvbjogUG9zdCwgZXZlbnQ6IE1vdXNlRXZlbnQsIGNhbmNlbEZsYWc6IGJvb2xlYW4pIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuO1xuXHRcdGlmKGNhbmNlbEZsYWcpe1xuXHRcdFx0YW5zd2VyID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHR9XG5cdFx0aWYgKGFuc3dlciB8fCAhY2FuY2VsRmxhZykge1xuXHRcdFx0dGhpcy5xdWVzdGlvblsnZWRpdFF1ZXN0aW9uJ10gPVxuXHRcdFx0XHQodGhpcy5xdWVzdGlvblsnZWRpdFF1ZXN0aW9uJ10pID8gIXRoaXMucXVlc3Rpb25bJ2VkaXRRdWVzdGlvbiddIDogdHJ1ZTtcblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

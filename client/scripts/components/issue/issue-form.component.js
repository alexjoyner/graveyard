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
    var NewIssueForm;
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
            NewIssueForm = (function () {
                function NewIssueForm(_postsService, _router, _usersService) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this._usersService = _usersService;
                    this.edited = new core_1.EventEmitter();
                }
                NewIssueForm.prototype.ngOnInit = function () {
                    /*title: string,
                    post_type_id: number,
                    parent_id?: number,
                    point_type_id?: number,
                    detail?: string,
                    source?: string,
                    source_type_id?: number,
                    _id?: number*/
                    this.issue = new post_1.Post(this.myIssue.title, null, null, null, this.myIssue.detail, null, null, this.myIssue._id);
                };
                ;
                NewIssueForm.prototype.onCreate = function () {
                    var _this = this;
                    this._postsService.insertPost(this.issue)
                        .subscribe(function (data) {
                        console.log('Returned: ', data);
                        _this._router.navigate(['Issue', { type: 'yes', id: data }]);
                    }, function (err) { return console.log('Error: ', err); });
                };
                NewIssueForm.prototype.onUpdate = function () {
                    var _this = this;
                    this._postsService.updatePost(this.issue)
                        .subscribe(function (data) {
                        console.log('Success: ', data);
                        _this.myIssue.title = _this.issue.title;
                        _this.myIssue.detail = _this.issue.detail;
                        _this.edited.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', post_1.Post)
                ], NewIssueForm.prototype, "myIssue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], NewIssueForm.prototype, "editMode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], NewIssueForm.prototype, "edited", void 0);
                NewIssueForm = __decorate([
                    core_1.Component({
                        selector: 'ro-issue-form',
                        templateUrl: 'templates/issue/issue-form.tpl.html',
                        providers: [posts_service_1.PostsService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router, users_service_1.UsersService])
                ], NewIssueForm);
                return NewIssueForm;
            }());
            exports_1("NewIssueForm", NewIssueForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkEwQkMsc0JBQ1MsYUFBMkIsRUFDM0IsT0FBZSxFQUNmLGFBQTJCO29CQUYzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkExQjFCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBMEJsQixDQUFDO2dCQXhCeEMsK0JBQVEsR0FBUjtvQkFDQzs7Ozs7OztrQ0FPYztvQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLENBQUE7Z0JBRUYsQ0FBQzs7Z0JBTUQsK0JBQVEsR0FBUjtvQkFBQSxpQkFTQztvQkFSQSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN2QyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0QsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRCwrQkFBUSxHQUFSO29CQUFBLGlCQVdDO29CQVZBLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3ZDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNKLENBQUM7Z0JBbkREO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs4REFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7OzREQUFBO2dCQVJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7cUJBQzVCLENBQUM7O2dDQUFBO2dCQXNERixtQkFBQztZQUFELENBckRBLEFBcURDLElBQUE7WUFyREQsdUNBcURDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWlzc3VlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2lzc3VlLWZvcm0udHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1Bvc3RzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3SXNzdWVGb3JtIGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoKSBteUlzc3VlOiBQb3N0O1xuXHRASW5wdXQoKSBlZGl0TW9kZTogYm9vbGVhbjtcblx0QE91dHB1dCgpIGVkaXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGlzc3VlOiBQb3N0O1xuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdC8qdGl0bGU6IHN0cmluZyxcblx0XHRwb3N0X3R5cGVfaWQ6IG51bWJlcixcblx0XHRwYXJlbnRfaWQ/OiBudW1iZXIsXG5cdFx0cG9pbnRfdHlwZV9pZD86IG51bWJlcixcblx0XHRkZXRhaWw/OiBzdHJpbmcsXG5cdFx0c291cmNlPzogc3RyaW5nLFxuXHRcdHNvdXJjZV90eXBlX2lkPzogbnVtYmVyLFxuXHRcdF9pZD86IG51bWJlciovXG5cdFx0dGhpcy5pc3N1ZSA9IG5ldyBQb3N0KFxuXHRcdFx0dGhpcy5teUlzc3VlLnRpdGxlLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0dGhpcy5teUlzc3VlLmRldGFpbCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0dGhpcy5teUlzc3VlLl9pZFxuXHRcdClcblxuXHR9XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fTtcblxuXHRvbkNyZWF0ZSgpe1xuXHRcdHRoaXMuX3Bvc3RzU2VydmljZS5pbnNlcnRQb3N0KHRoaXMuaXNzdWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmV0dXJuZWQ6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0lzc3VlJywge3R5cGU6ICd5ZXMnLCBpZDogZGF0YX1dKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRvblVwZGF0ZSgpe1xuXHRcdHRoaXMuX3Bvc3RzU2VydmljZS51cGRhdGVQb3N0KHRoaXMuaXNzdWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2VzczogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5teUlzc3VlLnRpdGxlID0gdGhpcy5pc3N1ZS50aXRsZTtcblx0XHRcdFx0XHR0aGlzLm15SXNzdWUuZGV0YWlsID0gdGhpcy5pc3N1ZS5kZXRhaWw7XG5cdFx0XHRcdFx0dGhpcy5lZGl0ZWQuZW1pdChudWxsKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service', 'angular2/router', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1, router_1, users_service_1;
    var NewIssueForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_1_1) {
                issue_1 = issue_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            NewIssueForm = (function () {
                function NewIssueForm(_issuesService, _router, _usersService) {
                    this._issuesService = _issuesService;
                    this._router = _router;
                    this._usersService = _usersService;
                    this.edited = new core_1.EventEmitter();
                }
                NewIssueForm.prototype.ngOnInit = function () {
                    this.issue = new issue_1.Issue(this.myIssue.mainQuestion, this.myIssue.questionDetail, 0, 0, this._usersService.profile._id, this._usersService.profile.local.email, this.myIssue._id);
                };
                ;
                NewIssueForm.prototype.onCreate = function () {
                    var _this = this;
                    this._issuesService.insertIssue(this.issue)
                        .subscribe(function (data) {
                        console.log('Returned: ', data);
                        _this._router.navigate(['Issue', { type: 'yes', id: data }]);
                    }, function (err) { return console.log('Error: ', err); });
                };
                NewIssueForm.prototype.onUpdate = function () {
                    var _this = this;
                    this._issuesService.updateIssue(this.issue)
                        .subscribe(function (data) {
                        console.log('Success: ', data);
                        _this.myIssue.mainQuestion = _this.issue.mainQuestion;
                        _this.myIssue.questionDetail = _this.issue.questionDetail;
                        _this.edited.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', issue_1.Issue)
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
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router, users_service_1.UsersService])
                ], NewIssueForm);
                return NewIssueForm;
            }());
            exports_1("NewIssueForm", NewIssueForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFlQyxzQkFDUyxjQUE2QixFQUM3QixPQUFlLEVBQ2YsYUFBMkI7b0JBRjNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQWYxQixXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQWVsQixDQUFDO2dCQWJ4QywrQkFBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFDM0IsQ0FBQyxFQUFDLENBQUMsRUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXBCLENBQUM7O2dCQU1ELCtCQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNKLENBQUM7Z0JBQ0QsK0JBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN6QyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQ3hELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSixDQUFDO2dCQXhDRDtvQkFBQyxZQUFLLEVBQUU7OzZEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzs0REFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOztnQ0FBQTtnQkEyQ0YsbUJBQUM7WUFBRCxDQTFDQSxBQTBDQyxJQUFBO1lBMUNELHVDQTBDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taXNzdWUtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvaXNzdWUtZm9ybS50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3SXNzdWVGb3JtIGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoKSBteUlzc3VlOiBJc3N1ZTtcblx0QElucHV0KCkgZWRpdE1vZGU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRpc3N1ZTogSXNzdWU7XG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0dGhpcy5pc3N1ZSA9IG5ldyBJc3N1ZShcblx0XHRcdHRoaXMubXlJc3N1ZS5tYWluUXVlc3Rpb24sIFxuXHRcdFx0dGhpcy5teUlzc3VlLnF1ZXN0aW9uRGV0YWlsLCBcblx0XHRcdDAsMCxcblx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCxcblx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmxvY2FsLmVtYWlsLFxuXHRcdFx0dGhpcy5teUlzc3VlLl9pZCk7XG5cblx0fVxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9pc3N1ZXNTZXJ2aWNlOiBJc3N1ZXNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fTtcblxuXHRvbkNyZWF0ZSgpe1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuaW5zZXJ0SXNzdWUodGhpcy5pc3N1ZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7dHlwZTogJ3llcycsIGlkOiBkYXRhfV0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uVXBkYXRlKCl7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS51cGRhdGVJc3N1ZSh0aGlzLmlzc3VlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3M6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMubXlJc3N1ZS5tYWluUXVlc3Rpb24gPSB0aGlzLmlzc3VlLm1haW5RdWVzdGlvbjtcblx0XHRcdFx0XHR0aGlzLm15SXNzdWUucXVlc3Rpb25EZXRhaWwgPSB0aGlzLmlzc3VlLnF1ZXN0aW9uRGV0YWlsO1xuXHRcdFx0XHRcdHRoaXMuZWRpdGVkLmVtaXQobnVsbCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

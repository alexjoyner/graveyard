System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1, router_1;
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
            }],
        execute: function() {
            NewIssueForm = (function () {
                function NewIssueForm(_issuesService, _router) {
                    this._issuesService = _issuesService;
                    this._router = _router;
                    this.issue = new issue_1.Issue('', '', 0, 0);
                }
                ;
                NewIssueForm.prototype.onCreate = function () {
                    var _this = this;
                    this._issuesService.insertIssue(this.issue)
                        .subscribe(function (data) {
                        console.log('Returned: ', data);
                        _this._router.navigate(['Issue', { type: 'pro', id: data }]);
                    }, function (err) { return console.log('Error: ', err); });
                };
                NewIssueForm = __decorate([
                    core_1.Component({
                        selector: 'ro-new-issue-form',
                        templateUrl: 'templates/home/new-issue-form.tpl.html',
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router])
                ], NewIssueForm);
                return NewIssueForm;
            }());
            exports_1("NewIssueForm", NewIssueForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9uZXctaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyxzQkFDUyxjQUE2QixFQUM3QixPQUFlO29CQURmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUp4QixVQUFLLEdBQ0YsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBR0csQ0FBQzs7Z0JBRTVCLCtCQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNKLENBQUM7Z0JBckJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHdDQUF3Qzt3QkFDckQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7Z0NBQUE7Z0JBa0JGLG1CQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx1Q0FpQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvbmV3LWlzc3VlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW5ldy1pc3N1ZS1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL25ldy1pc3N1ZS1mb3JtLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdJc3N1ZUZvcm17XG5cdGlzc3VlOiBJc3N1ZSBcblx0XHQ9IG5ldyBJc3N1ZSgnJywnJywwLDApO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9pc3N1ZXNTZXJ2aWNlOiBJc3N1ZXNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fTtcblxuXHRvbkNyZWF0ZSgpe1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuaW5zZXJ0SXNzdWUodGhpcy5pc3N1ZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7dHlwZTogJ3BybycsIGlkOiBkYXRhfV0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

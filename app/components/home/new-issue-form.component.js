System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1;
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
            }],
        execute: function() {
            NewIssueForm = (function () {
                function NewIssueForm(_issuesService) {
                    this._issuesService = _issuesService;
                    this.issue = new issue_1.Issue('', '', 0, 0);
                }
                ;
                NewIssueForm.prototype.onCreate = function () {
                    this._issuesService.insertIssue(this.issue)
                        .subscribe(function (data) {
                        console.log('Response: ', data);
                    }, function (err) { return console.log('Error: ', err); });
                };
                NewIssueForm = __decorate([
                    core_1.Component({
                        selector: 'ro-new-issue-form',
                        templateUrl: 'templates/home/new-issue-form.tpl.html',
                        providers: [issues_service_1.IssuesService]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], NewIssueForm);
                return NewIssueForm;
            }());
            exports_1("NewIssueForm", NewIssueForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9uZXctaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyxzQkFDUyxjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBSHRDLFVBQUssR0FDRixJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFFaUIsQ0FBQzs7Z0JBRTFDLCtCQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDaEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7Z0JBQ0osQ0FBQztnQkFuQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsbUJBQW1CO3dCQUM3QixXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHVDQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL25ldy1pc3N1ZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbmV3LWlzc3VlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUvbmV3LWlzc3VlLWZvcm0udHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0lzc3Vlc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0lzc3VlRm9ybXtcblx0aXNzdWU6IElzc3VlIFxuXHRcdD0gbmV3IElzc3VlKCcnLCcnLDAsMCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2UpIHt9O1xuXG5cdG9uQ3JlYXRlKCl7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5pbnNlcnRJc3N1ZSh0aGlzLmlzc3VlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1Jlc3BvbnNlOiAnLCBkYXRhKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

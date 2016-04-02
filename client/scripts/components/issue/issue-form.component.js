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
                    this.edited = new core_1.EventEmitter();
                }
                NewIssueForm.prototype.ngOnInit = function () {
                    this.issue = new issue_1.Issue(this.myIssue.mainQuestion, this.myIssue.questionDetail, 0, 0, this.myIssue._id);
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
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router])
                ], NewIssueForm);
                return NewIssueForm;
            }());
            exports_1("NewIssueForm", NewIssueForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFhQyxzQkFDUyxjQUE2QixFQUM3QixPQUFlO29CQURmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQVpkLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBWTlCLENBQUM7Z0JBVjVCLCtCQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUMzQixDQUFDLEVBQUMsQ0FBQyxFQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXBCLENBQUM7O2dCQUtELCtCQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNKLENBQUM7Z0JBQ0QsK0JBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN6QyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQzt3QkFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7d0JBQ3hELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSixDQUFDO2dCQXJDRDtvQkFBQyxZQUFLLEVBQUU7OzZEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7OERBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzs0REFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM3QixDQUFDOztnQ0FBQTtnQkF3Q0YsbUJBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELHVDQXVDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWlzc3VlLWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2lzc3VlLWZvcm0udHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0lzc3Vlc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0lzc3VlRm9ybSBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCkgbXlJc3N1ZTogSXNzdWU7XG5cdEBJbnB1dCgpIGVkaXRNb2RlOiBib29sZWFuO1xuXHRAT3V0cHV0KCkgZWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0aXNzdWU6IElzc3VlO1xuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdHRoaXMuaXNzdWUgPSBuZXcgSXNzdWUoXG5cdFx0XHR0aGlzLm15SXNzdWUubWFpblF1ZXN0aW9uLCBcblx0XHRcdHRoaXMubXlJc3N1ZS5xdWVzdGlvbkRldGFpbCwgXG5cdFx0XHQwLDAsXG5cdFx0XHR0aGlzLm15SXNzdWUuX2lkKTtcblxuXHR9XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9O1xuXG5cdG9uQ3JlYXRlKCl7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5pbnNlcnRJc3N1ZSh0aGlzLmlzc3VlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1JldHVybmVkOiAnLCBkYXRhKTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydJc3N1ZScsIHt0eXBlOiAneWVzJywgaWQ6IGRhdGF9XSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25VcGRhdGUoKXtcblx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLnVwZGF0ZUlzc3VlKHRoaXMuaXNzdWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2VzczogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5teUlzc3VlLm1haW5RdWVzdGlvbiA9IHRoaXMuaXNzdWUubWFpblF1ZXN0aW9uO1xuXHRcdFx0XHRcdHRoaXMubXlJc3N1ZS5xdWVzdGlvbkRldGFpbCA9IHRoaXMuaXNzdWUucXVlc3Rpb25EZXRhaWw7XG5cdFx0XHRcdFx0dGhpcy5lZGl0ZWQuZW1pdChudWxsKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

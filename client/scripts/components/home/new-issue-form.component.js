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
                        _this._router.navigate(['Issue', { type: 'yes', id: data }]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9uZXctaXNzdWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFHQyxzQkFDUyxjQUE2QixFQUM3QixPQUFlO29CQURmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUp4QixVQUFLLEdBQ0YsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBR0csQ0FBQzs7Z0JBRTVCLCtCQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNKLENBQUM7Z0JBckJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHdDQUF3Qzt3QkFDckQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7Z0NBQUE7Z0JBa0JGLG1CQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCx1Q0FpQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvbmV3LWlzc3VlLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1uZXctaXNzdWUtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9uZXctaXNzdWUtZm9ybS50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmV3SXNzdWVGb3Jte1xuXHRpc3N1ZTogSXNzdWUgXG5cdFx0PSBuZXcgSXNzdWUoJycsJycsMCwwKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge307XG5cblx0b25DcmVhdGUoKXtcblx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmluc2VydElzc3VlKHRoaXMuaXNzdWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmV0dXJuZWQ6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0lzc3VlJywge3R5cGU6ICd5ZXMnLCBpZDogZGF0YX1dKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

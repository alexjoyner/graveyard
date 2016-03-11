System.register(['angular2/core', '../mock/mock-issues'], function(exports_1, context_1) {
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
    var core_1, mock_issues_1;
    var IssuesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_issues_1_1) {
                mock_issues_1 = mock_issues_1_1;
            }],
        execute: function() {
            IssuesService = (function () {
                function IssuesService() {
                }
                /* GET */
                IssuesService.prototype.getAllIssues = function () {
                    return mock_issues_1.ISSUES;
                };
                IssuesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], IssuesService);
                return IssuesService;
            }());
            exports_1("IssuesService", IssuesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQU9BLENBQUM7Z0JBTkEsU0FBUztnQkFDVCxvQ0FBWSxHQUFaO29CQUNDLE1BQU0sQ0FBQyxvQkFBTSxDQUFDO2dCQUNmLENBQUM7Z0JBTEY7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBUWIsb0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELHlDQU9DLENBQUEiLCJmaWxlIjoic2hhcmVkL2lzc3Vlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4vaXNzdWUnO1xuaW1wb3J0IHtJU1NVRVN9IGZyb20gJy4uL21vY2svbW9jay1pc3N1ZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNzdWVzU2VydmljZSB7XG5cdC8qIEdFVCAqL1xuXHRnZXRBbGxJc3N1ZXMoKSB7XG5cdFx0cmV0dXJuIElTU1VFUztcblx0fVxuXHQvKiBQT1NUICovXG5cdC8qIERFTEVURSAqL1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

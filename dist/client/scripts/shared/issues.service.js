System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../config/config'], function(exports_1, context_1) {
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
    var http_1, core_1, config_1;
    var IssuesService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            IssuesService = (function () {
                function IssuesService(_http) {
                    this._http = _http;
                    this.endpoint = config_1.Config.endpoint;
                }
                /* GET */
                IssuesService.prototype.getAllIssues = function () {
                    return this._http.get(this.endpoint + '/issues/all')
                        .map(function (res) { return res.json(); });
                };
                IssuesService.prototype.getIssue = function (issueId) {
                    return this._http.get(this.endpoint + '/issues/' + issueId)
                        .map(function (res) { return res.json(); });
                };
                /* POST */
                IssuesService.prototype.insertIssue = function (issue) {
                    var body = JSON.stringify(issue);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.endpoint + '/issues/newIssue', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                /* DELETE */
                IssuesService.prototype.deleteIssue = function (issueId) {
                    return this._http.delete(this.endpoint + '/issues/deleteIssue/' + issueId)
                        .map(function (res) { return res; });
                };
                IssuesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], IssuesService);
                return IssuesService;
            }());
            exports_1("IssuesService", IssuesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQyx1QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBRXBCLENBQUM7Z0JBQ3hCLFNBQVM7Z0JBQ1Qsb0NBQVksR0FBWjtvQkFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO3lCQUM3QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsZ0NBQVEsR0FBUixVQUFTLE9BQWU7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDO3lCQUNwQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixFQUNsQyxJQUFJLEVBQ0osRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ25CLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxZQUFZO2dCQUNaLG1DQUFXLEdBQVgsVUFBWSxPQUFlO29CQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsT0FBTyxDQUFDO3lCQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBaENGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlDYixvQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QseUNBZ0NDLENBQUEiLCJmaWxlIjoic2hhcmVkL2lzc3Vlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuL2lzc3VlJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNzdWVzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblx0LyogR0VUICovXG5cdGdldEFsbElzc3VlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL2lzc3Vlcy9hbGwnKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0SXNzdWUoaXNzdWVJZDogc3RyaW5nKXtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9pc3N1ZXMvJyArIGlzc3VlSWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydElzc3VlKGlzc3VlOiBJc3N1ZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGlzc3VlKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvaXNzdWVzL25ld0lzc3VlJyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZUlzc3VlKGlzc3VlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvaXNzdWVzL2RlbGV0ZUlzc3VlLycgKyBpc3N1ZUlkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

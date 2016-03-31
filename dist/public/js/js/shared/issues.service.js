System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var IssuesService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            IssuesService = (function () {
                function IssuesService(_http) {
                    this._http = _http;
                    this.endpoint = 'http://localhost:9000';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFQyx1QkFDUyxLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRlosYUFBUSxHQUFXLHVCQUF1QixDQUFDO2dCQUU1QixDQUFDO2dCQUN4QixTQUFTO2dCQUNULG9DQUFZLEdBQVo7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQzt5QkFDN0IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELGdDQUFRLEdBQVIsVUFBUyxPQUFlO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQzt5QkFDcEMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELFVBQVU7Z0JBQ1YsbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsRUFDbEMsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNuQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsWUFBWTtnQkFDWixtQ0FBVyxHQUFYLFVBQVksT0FBZTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixHQUFHLE9BQU8sQ0FBQzt5QkFDaEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQWhDRjtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFpQ2Isb0JBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELHlDQWdDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9pc3N1ZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi9pc3N1ZSc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElzc3Vlc1NlcnZpY2Uge1xuXHRwcml2YXRlIGVuZHBvaW50OiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblx0LyogR0VUICovXG5cdGdldEFsbElzc3VlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyAnL2lzc3Vlcy9hbGwnKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0Z2V0SXNzdWUoaXNzdWVJZDogc3RyaW5nKXtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgJy9pc3N1ZXMvJyArIGlzc3VlSWQpXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydElzc3VlKGlzc3VlOiBJc3N1ZSk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGlzc3VlKTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvaXNzdWVzL25ld0lzc3VlJyxcblx0XHRcdGJvZHksXG5cdFx0XHR7IGhlYWRlcnM6IGhlYWRlcnMgfSlcblx0XHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZUlzc3VlKGlzc3VlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArICcvaXNzdWVzL2RlbGV0ZUlzc3VlLycgKyBpc3N1ZUlkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

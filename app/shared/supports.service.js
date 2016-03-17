System.register(['angular2/core', 'rxjs/Rx', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SupportsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            SupportsService = (function () {
                function SupportsService(_http) {
                    this._http = _http;
                    this.endpoint = 'http://localhost:9000';
                }
                /* GET */
                SupportsService.prototype.getSupports = function (pointId) {
                    return this._http.get(this.endpoint +
                        '/supports/getSupport/' +
                        pointId)
                        .map(function (res) { return res.json(); });
                };
                SupportsService.prototype.getSupport = function (_id) {
                };
                /* POST */
                SupportsService.prototype.insertSupport = function (support) {
                    var body = JSON.stringify(support);
                    var headers = new http_1.Headers();
                    console.log('Posting: ', support);
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(this.endpoint +
                        '/supports/createSupportPoint', body, { headers: headers })
                        .map(function (res) { return res; });
                };
                /* DELETE */
                SupportsService.prototype.deleteSupport = function (supportId) {
                    // id in the future
                    return this._http.delete(this.endpoint +
                        '/supports/removeSupportPoint/' +
                        supportId)
                        .map(function (res) { return res; });
                };
                SupportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SupportsService);
                return SupportsService;
            }());
            exports_1("SupportsService", SupportsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVDLHlCQUNTLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFGWixhQUFRLEdBQVcsdUJBQXVCLENBQUM7Z0JBRTNCLENBQUM7Z0JBQ3pCLFNBQVM7Z0JBQ1QscUNBQVcsR0FBWCxVQUFZLE9BQWU7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsdUJBQXVCO3dCQUN2QixPQUFPLENBQUM7eUJBQ1IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELG9DQUFVLEdBQVYsVUFBVyxHQUFXO2dCQUV0QixDQUFDO2dCQUVELFVBQVU7Z0JBQ1YsdUNBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTt3QkFDYiw4QkFBOEIsRUFDOUIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsWUFBWTtnQkFDWix1Q0FBYSxHQUFiLFVBQWMsU0FBaUI7b0JBQzlCLG1CQUFtQjtvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2QixJQUFJLENBQUMsUUFBUTt3QkFDYiwrQkFBK0I7d0JBQy9CLFNBQVMsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBdkNGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXdDYixzQkFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsNkNBdUNDLENBQUEiLCJmaWxlIjoic2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0IHtTVVBQT1JUU30gZnJvbSAnLi4vbW9jay9tb2NrLXN1cHBvcnRzJztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0U3VwcG9ydHMocG9pbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgXG5cdFx0XHQnL3N1cHBvcnRzL2dldFN1cHBvcnQvJyArIFxuXHRcdFx0cG9pbnRJZClcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRTdXBwb3J0KF9pZDogc3RyaW5nKXtcblxuXHR9XG5cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRTdXBwb3J0KHN1cHBvcnQ6IFN1cHBvcnQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdXBwb3J0KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRjb25zb2xlLmxvZygnUG9zdGluZzogJywgc3VwcG9ydCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0Jy9zdXBwb3J0cy9jcmVhdGVTdXBwb3J0UG9pbnQnLFxuXHRcdFx0Ym9keSxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxuXG5cdC8qIERFTEVURSAqL1xuXHRkZWxldGVTdXBwb3J0KHN1cHBvcnRJZDogc3RyaW5nKXtcblx0XHQvLyBpZCBpbiB0aGUgZnV0dXJlXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3N1cHBvcnRzL3JlbW92ZVN1cHBvcnRQb2ludC8nICtcblx0XHRcdHN1cHBvcnRJZClcblx0XHRcdC5tYXAocmVzID0+IHJlcyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

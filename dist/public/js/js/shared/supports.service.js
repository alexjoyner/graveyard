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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVDLHlCQUNTLEtBQVc7b0JBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFGWixhQUFRLEdBQVcsdUJBQXVCLENBQUM7Z0JBRTNCLENBQUM7Z0JBQ3pCLFNBQVM7Z0JBQ1QscUNBQVcsR0FBWCxVQUFZLE9BQWU7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsdUJBQXVCO3dCQUN2QixPQUFPLENBQUM7eUJBQ1IsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELG9DQUFVLEdBQVYsVUFBVyxHQUFXO2dCQUV0QixDQUFDO2dCQUVELFVBQVU7Z0JBQ1YsdUNBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsUUFBUTt3QkFDYiw4QkFBOEIsRUFDOUIsSUFBSSxFQUNKLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO3lCQUNwQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsWUFBWTtnQkFDWix1Q0FBYSxHQUFiLFVBQWMsU0FBaUI7b0JBQzlCLG1CQUFtQjtvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN2QixJQUFJLENBQUMsUUFBUTt3QkFDYiwrQkFBK0I7d0JBQy9CLFNBQVMsQ0FBQzt5QkFDVCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBdkNGO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXdDYixzQkFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsNkNBdUNDLENBQUEiLCJmaWxlIjoic2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQnO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1NlcnZpY2Uge1xuXHRwcml2YXRlIGVuZHBvaW50OiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDAwJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCkgeyB9XG5cdC8qIEdFVCAqL1xuXHRnZXRTdXBwb3J0cyhwb2ludElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyBcblx0XHRcdCcvc3VwcG9ydHMvZ2V0U3VwcG9ydC8nICsgXG5cdFx0XHRwb2ludElkKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFN1cHBvcnQoX2lkOiBzdHJpbmcpe1xuXG5cdH1cblxuXHQvKiBQT1NUICovXG5cdGluc2VydFN1cHBvcnQoc3VwcG9ydDogU3VwcG9ydCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN1cHBvcnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGNvbnNvbGUubG9nKCdQb3N0aW5nOiAnLCBzdXBwb3J0KTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3N1cHBvcnRzL2NyZWF0ZVN1cHBvcnRQb2ludCcsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMpO1xuXHR9XG5cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZVN1cHBvcnQoc3VwcG9ydElkOiBzdHJpbmcpe1xuXHRcdC8vIGlkIGluIHRoZSBmdXR1cmVcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvc3VwcG9ydHMvcmVtb3ZlU3VwcG9ydFBvaW50LycgK1xuXHRcdFx0c3VwcG9ydElkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

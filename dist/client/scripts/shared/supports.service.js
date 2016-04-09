System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', '../config/config', './auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, config_1, auth_service_1;
    var SupportsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            SupportsService = (function () {
                function SupportsService(_http, _authService) {
                    this._http = _http;
                    this._authService = _authService;
                    this.endpoint = config_1.Config.endpoint;
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
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    return this._http.post(this.endpoint +
                        '/supports/createSupportPoint', body, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                /* DELETE */
                SupportsService.prototype.deleteSupport = function (supportId) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    // id in the future
                    return this._http.delete(this.endpoint +
                        '/supports/removeSupportPoint/' +
                        supportId)
                        .map(function (res) { return res; });
                };
                SupportsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
                ], SupportsService);
                return SupportsService;
            }());
            exports_1("SupportsService", SupportsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVDLHlCQUNTLEtBQVcsRUFDWCxZQUF5QjtvQkFEekIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIMUIsYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBR0wsQ0FBQztnQkFDdkMsU0FBUztnQkFDVCxxQ0FBVyxHQUFYLFVBQVksT0FBZTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUTt3QkFDYix1QkFBdUI7d0JBQ3ZCLE9BQU8sQ0FBQzt5QkFDUixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0Qsb0NBQVUsR0FBVixVQUFXLEdBQVc7Z0JBRXRCLENBQUM7Z0JBRUQsVUFBVTtnQkFDVix1Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsOEJBQThCLEVBQzlCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELFlBQVk7Z0JBQ1osdUNBQWEsR0FBYixVQUFjLFNBQWlCO29CQUM5QixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxtQkFBbUI7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsK0JBQStCO3dCQUMvQixTQUFTLENBQUM7eUJBQ1QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQTdDRjtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkE4Q2Isc0JBQUM7WUFBRCxDQTdDQSxBQTZDQyxJQUFBO1lBN0NELDZDQTZDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nID0gQ29uZmlnLmVuZHBvaW50O1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9odHRwOiBIdHRwLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkgeyB9XG5cdC8qIEdFVCAqL1xuXHRnZXRTdXBwb3J0cyhwb2ludElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdHJldHVybiB0aGlzLl9odHRwLmdldChcblx0XHRcdHRoaXMuZW5kcG9pbnQgKyBcblx0XHRcdCcvc3VwcG9ydHMvZ2V0U3VwcG9ydC8nICsgXG5cdFx0XHRwb2ludElkKVxuXHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuXHR9XG5cdGdldFN1cHBvcnQoX2lkOiBzdHJpbmcpe1xuXG5cdH1cblxuXHQvKiBQT1NUICovXG5cdGluc2VydFN1cHBvcnQoc3VwcG9ydDogU3VwcG9ydCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHN1cHBvcnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3N1cHBvcnRzL2NyZWF0ZVN1cHBvcnRQb2ludCcsXG5cdFx0XHRib2R5LFxuXHRcdFx0eyBoZWFkZXJzOiBoZWFkZXJzIH0pXG5cdFx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXG5cdC8qIERFTEVURSAqL1xuXHRkZWxldGVTdXBwb3J0KHN1cHBvcnRJZDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0aGVhZGVycy5hcHBlbmQoJ3gtYWNjZXNzLXRva2VuJyxcblx0XHRcdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGwpO1xuXHRcdC8vIGlkIGluIHRoZSBmdXR1cmVcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICtcblx0XHRcdCcvc3VwcG9ydHMvcmVtb3ZlU3VwcG9ydFBvaW50LycgK1xuXHRcdFx0c3VwcG9ydElkKVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

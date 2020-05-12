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
                    headers.append('x-access-token', (localStorage.getItem('token')) ? localStorage.getItem('token') : null);
                    // id in the future
                    return this._http.delete(this.endpoint +
                        '/supports/removeSupportPoint/' +
                        supportId, { headers: headers })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVDLHlCQUNTLEtBQVcsRUFDWCxZQUF5QjtvQkFEekIsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIMUIsYUFBUSxHQUFXLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBR0wsQ0FBQztnQkFDdkMsU0FBUztnQkFDVCxxQ0FBVyxHQUFYLFVBQVksT0FBZTtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsUUFBUTt3QkFDYix1QkFBdUI7d0JBQ3ZCLE9BQU8sQ0FBQzt5QkFDUixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0Qsb0NBQVUsR0FBVixVQUFXLEdBQVc7Z0JBRXRCLENBQUM7Z0JBRUQsVUFBVTtnQkFDVix1Q0FBYSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzdCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzlCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQ3pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsOEJBQThCLEVBQzlCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt5QkFDcEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELFlBQVk7Z0JBQ1osdUNBQWEsR0FBYixVQUFjLFNBQWlCO29CQUM5QixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUM5QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN6RSxtQkFBbUI7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdkIsSUFBSSxDQUFDLFFBQVE7d0JBQ2IsK0JBQStCO3dCQUMvQixTQUFTLEVBQ1QsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7eUJBQ3BCLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztnQkFDbkIsQ0FBQztnQkE3Q0Y7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBOENiLHNCQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCw2Q0E2Q0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3VwcG9ydHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4vc3VwcG9ydCc7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Q29uZmlnfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzU2VydmljZSB7XG5cdHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZyA9IENvbmZpZy5lbmRwb2ludDtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXHQvKiBHRVQgKi9cblx0Z2V0U3VwcG9ydHMocG9pbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoXG5cdFx0XHR0aGlzLmVuZHBvaW50ICsgXG5cdFx0XHQnL3N1cHBvcnRzL2dldFN1cHBvcnQvJyArIFxuXHRcdFx0cG9pbnRJZClcblx0XHQubWFwKHJlcyA9PiByZXMuanNvbigpKTtcblx0fVxuXHRnZXRTdXBwb3J0KF9pZDogc3RyaW5nKXtcblxuXHR9XG5cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRTdXBwb3J0KHN1cHBvcnQ6IFN1cHBvcnQpOiBPYnNlcnZhYmxlPGFueT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShzdXBwb3J0KTtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRoZWFkZXJzLmFwcGVuZCgneC1hY2Nlc3MtdG9rZW4nLFxuXHRcdFx0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbCk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdChcblx0XHRcdHRoaXMuZW5kcG9pbnQgK1xuXHRcdFx0Jy9zdXBwb3J0cy9jcmVhdGVTdXBwb3J0UG9pbnQnLFxuXHRcdFx0Ym9keSxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG5cdH1cblxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlU3VwcG9ydChzdXBwb3J0SWQ6IHN0cmluZykge1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGhlYWRlcnMuYXBwZW5kKCd4LWFjY2Vzcy10b2tlbicsXG5cdFx0XHQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgOiBudWxsKTtcblx0XHQvLyBpZCBpbiB0aGUgZnV0dXJlXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKFxuXHRcdFx0dGhpcy5lbmRwb2ludCArXG5cdFx0XHQnL3N1cHBvcnRzL3JlbW92ZVN1cHBvcnRQb2ludC8nICtcblx0XHRcdHN1cHBvcnRJZCxcblx0XHRcdHsgaGVhZGVyczogaGVhZGVycyB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
